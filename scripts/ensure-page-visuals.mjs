/**
 * Creates missing hero WebPs from page-visual-prompts.json (neutral placeholders).
 * Does not overwrite existing files — safe to run before dev or build.
 */
import { existsSync, readFileSync } from 'fs';
import { mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const IMAGES = join(ROOT, 'public', 'images');
const PROMPTS = JSON.parse(readFileSync(join(__dirname, 'page-visual-prompts.json'), 'utf8'));

let created = 0;
for (const { file } of PROMPTS) {
  const dest = join(IMAGES, file);
  if (existsSync(dest)) continue;
  mkdirSync(dirname(dest), { recursive: true });
  await sharp({
    create: {
      width: 1600,
      height: 900,
      channels: 3,
      background: { r: 212, g: 206, b: 196 },
    },
  })
    .webp({ quality: 80 })
    .toFile(dest);
  created += 1;
  console.log(`[ensure-page-visuals] created ${file}`);
}

if (created) {
  console.log(`[ensure-page-visuals] added ${created} placeholder(s).`);
}
