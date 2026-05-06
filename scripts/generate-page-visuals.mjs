#!/usr/bin/env node
/**
 * Page hero pipeline (WebP, 1600×900 cover, high quality):
 *
 * 1. Add source art (PNG/JPEG/WebP) to public/images/{file} per scripts/page-visual-prompts.json
 * 2. Run: npm run generate:page-visuals
 *
 * If only a legacy .jpg exists for a .webp prompt path, it is converted and the .jpg removed.
 *
 * Optional: npm run generate:page-visuals -- --file pages/services/paver-installations-hero.webp
 *
 * CI: npm run verify:page-visuals
 */

import { existsSync, mkdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const IMAGES = join(ROOT, 'public', 'images');
const PROMPTS_PATH = join(__dirname, 'page-visual-prompts.json');

function parseArgs() {
  const argv = process.argv.slice(2);
  const idx = argv.indexOf('--file');
  const onlyFile = idx >= 0 && argv[idx + 1] ? argv[idx + 1] : null;
  return { onlyFile };
}

async function optimizeOne(destWebpPath) {
  const jpgFallback = destWebpPath.replace(/\.webp$/i, '.jpg');
  let source = destWebpPath;
  if (!existsSync(destWebpPath) && existsSync(jpgFallback)) {
    source = jpgFallback;
  } else if (!existsSync(destWebpPath)) {
    throw new Error(`missing: ${destWebpPath}`);
  }

  const tmp = destWebpPath + '.tmp.webp';
  await sharp(source)
    .resize(1600, 900, { fit: 'cover', position: 'attention' })
    .webp({ quality: 92, effort: 4, smartSubsample: true })
    .toFile(tmp);
  const fs = await import('fs/promises');
  await fs.rename(tmp, destWebpPath);

  if (source !== destWebpPath && source.endsWith('.jpg')) {
    await fs.unlink(source).catch(() => {});
  }
}

async function main() {
  const { onlyFile } = parseArgs();
  const prompts = JSON.parse(readFileSync(PROMPTS_PATH, 'utf8'));
  const items = onlyFile ? prompts.filter((p) => p.file === onlyFile) : prompts;

  if (onlyFile && items.length === 0) {
    console.error(`No prompt entry for file: ${onlyFile}`);
    process.exit(1);
  }

  const missing = [];
  for (const { file } of items) {
    const dest = join(IMAGES, file);
    const legacy = dest.replace(/\.webp$/i, '.jpg');
    mkdirSync(dirname(dest), { recursive: true });
    if (!existsSync(dest) && !existsSync(legacy)) {
      missing.push(file);
      continue;
    }
    console.log(`optimize: ${file}`);
    await optimizeOne(dest);
  }

  if (missing.length) {
    console.error(
      '\nMissing hero files (add public/images/{path}.webp or legacy .jpg, then re-run):\n  ' +
        missing.join('\n  ')
    );
    process.exit(1);
  }

  console.log('Done. All listed page heroes normalized to 1600×900 WebP (quality 92).');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
