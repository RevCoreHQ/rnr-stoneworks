#!/usr/bin/env node
/**
 * Blog hero pipeline (Cursor integrated image generator):
 *
 * 1. In Cursor, use Generate Image with prompts from scripts/blog-hero-prompts.json
 *    (one image per slug). Save or copy each file to:
 *      public/images/blog/{slug}.jpg
 * 2. Run: npm run generate:blog-heroes
 *    — resizes every hero to 1600×900 JPEG (cover) for consistent layout and smaller files.
 *
 * Optional: npm run generate:blog-heroes -- --slug <slug>  (only that file if it exists)
 *
 * CI: npm run verify:blog-heroes
 */

import { existsSync, readFileSync } from 'fs';
import { mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'images', 'blog');
const PROMPTS_PATH = join(__dirname, 'blog-hero-prompts.json');

function parseArgs() {
  const argv = process.argv.slice(2);
  const slugIdx = argv.indexOf('--slug');
  const slug = slugIdx >= 0 && argv[slugIdx + 1] ? argv[slugIdx + 1] : null;
  return { slug };
}

async function optimizeOne(jpgPath) {
  const tmp = jpgPath + '.tmp.jpg';
  await sharp(jpgPath)
    .resize(1600, 900, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(tmp);
  const fs = await import('fs/promises');
  await fs.rename(tmp, jpgPath);
}

async function main() {
  const { slug: onlySlug } = parseArgs();
  mkdirSync(OUT_DIR, { recursive: true });

  const prompts = JSON.parse(readFileSync(PROMPTS_PATH, 'utf8'));
  const items = onlySlug
    ? prompts.filter((p) => p.slug === onlySlug)
    : prompts;

  if (onlySlug && items.length === 0) {
    console.error(`No prompt entry for slug: ${onlySlug}`);
    process.exit(1);
  }

  const missing = [];
  for (const { slug } of items) {
    const p = join(OUT_DIR, `${slug}.jpg`);
    if (!existsSync(p)) {
      missing.push(slug);
      continue;
    }
    console.log(`optimize: ${slug}.jpg`);
    await optimizeOne(p);
  }

  if (missing.length) {
    console.error(
      '\nMissing JPEGs (add via Cursor Generate Image using blog-hero-prompts.json, then re-run):\n  ' +
        missing.map((s) => `${s}.jpg`).join('\n  ')
    );
    process.exit(1);
  }

  console.log('Done. All listed heroes optimized to 1600×900.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
