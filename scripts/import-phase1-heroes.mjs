#!/usr/bin/env node
/**
 * Converts Cursor-generated phase-1 hero PNGs into public WebP masters.
 *
 * Filename convention:
 *   phase1__pages__services__paver-installations-hero.png
 *
 * Then: npm run generate:page-visuals
 */
import { existsSync, readdirSync } from 'fs';
import { mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const IMAGES = join(ROOT, 'public', 'images');
const ASSETS = join(ROOT, 'assets');

const PREFIX = 'phase1__';

function decodeToRelWebp(name) {
  if (!name.startsWith(PREFIX) || !name.endsWith('.png')) return null;
  const inner = name.slice(PREFIX.length, -'.png'.length);
  const rel = inner.replace(/__/g, '/') + '.webp';
  if (!rel.startsWith('pages/')) return null;
  return rel;
}

async function importOne(pngPath, relWebp) {
  const dest = join(IMAGES, relWebp);
  mkdirSync(dirname(dest), { recursive: true });
  const tmp = dest + '.tmp.webp';
  await sharp(pngPath)
    .resize(1600, 900, { fit: 'cover', position: 'attention' })
    .webp({ quality: 94, effort: 4, smartSubsample: true })
    .toFile(tmp);
  const fs = await import('fs/promises');
  await fs.rename(tmp, dest);
  console.log(`imported ${relWebp}`);
}

async function main() {
  const extra = process.argv[2];
  const dirs = [ROOT, ASSETS, extra].filter(Boolean).filter((d) => existsSync(d));
  const files = [];
  for (const d of dirs) {
    try {
      for (const name of readdirSync(d)) {
        if (name.startsWith(PREFIX) && name.endsWith('.png')) files.push(join(d, name));
      }
    } catch {
      /* skip */
    }
  }

  if (!files.length) {
    console.error(
      `No files matching ${PREFIX}*.png in repo root or assets/. Pass Cursor assets folder as argv[1] if needed.`
    );
    process.exit(1);
  }

  for (const pngPath of files) {
    const name = pngPath.split(/[/\\]/).pop();
    const rel = decodeToRelWebp(name);
    if (!rel) {
      console.warn(`skip (bad name): ${name}`);
      continue;
    }
    await importOne(pngPath, rel);
  }

  console.log('\nDone. Run: npm run generate:page-visuals');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
