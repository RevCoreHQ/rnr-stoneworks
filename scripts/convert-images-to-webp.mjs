#!/usr/bin/env node
/**
 * One-shot: convert every .png and .jpg/.jpeg under public/images to .webp at q=82,
 * then delete the original. Skips files that already have a .webp sibling.
 *
 * Usage:
 *   node scripts/convert-images-to-webp.mjs            # convert + delete originals
 *   node scripts/convert-images-to-webp.mjs --dry      # report only, no writes
 *   node scripts/convert-images-to-webp.mjs --keep     # write .webp, keep originals
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd(), 'public/images');
const QUALITY = 82;
const args = new Set(process.argv.slice(2));
const DRY = args.has('--dry');
const KEEP_ORIGINAL = args.has('--keep');

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function isConvertible(p) {
  const ext = path.extname(p).toLowerCase();
  return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
}

function fmtBytes(n) {
  if (n >= 1024 * 1024) return (n / (1024 * 1024)).toFixed(2) + ' MB';
  if (n >= 1024) return (n / 1024).toFixed(0) + ' KB';
  return n + ' B';
}

const summary = { converted: 0, skipped: 0, before: 0, after: 0, failed: [] };

for await (const file of walk(ROOT)) {
  if (!isConvertible(file)) continue;
  const target = file.replace(/\.(png|jpe?g)$/i, '.webp');
  const rel = path.relative(process.cwd(), file);

  try {
    const before = (await fs.stat(file)).size;

    let webpExists = false;
    try {
      await fs.access(target);
      webpExists = true;
    } catch {}

    if (webpExists) {
      console.log(`SKIP  ${rel}  (sibling .webp already exists)`);
      summary.skipped++;
      continue;
    }

    if (DRY) {
      console.log(`DRY   ${rel}  -> ${path.basename(target)}  (${fmtBytes(before)})`);
      summary.converted++;
      summary.before += before;
      continue;
    }

    await sharp(file).webp({ quality: QUALITY, effort: 5 }).toFile(target);
    const after = (await fs.stat(target)).size;
    if (!KEEP_ORIGINAL) await fs.unlink(file);

    const pct = ((1 - after / before) * 100).toFixed(0);
    console.log(`OK    ${rel}  ->  ${path.basename(target)}  (${fmtBytes(before)} -> ${fmtBytes(after)}, -${pct}%)`);

    summary.converted++;
    summary.before += before;
    summary.after += after;
  } catch (err) {
    console.error(`FAIL  ${rel}  ${err.message}`);
    summary.failed.push(rel);
  }
}

console.log('\n--- Summary ---');
console.log(`Converted: ${summary.converted}`);
console.log(`Skipped:   ${summary.skipped}`);
if (!DRY) {
  const saved = summary.before - summary.after;
  const savedPct = summary.before > 0 ? ((saved / summary.before) * 100).toFixed(1) : '0';
  console.log(`Before:    ${fmtBytes(summary.before)}`);
  console.log(`After:     ${fmtBytes(summary.after)}`);
  console.log(`Saved:     ${fmtBytes(saved)} (${savedPct}%)`);
}
if (summary.failed.length) {
  console.log(`\nFailed (${summary.failed.length}):`);
  summary.failed.forEach((f) => console.log('  ' + f));
  process.exit(1);
}
