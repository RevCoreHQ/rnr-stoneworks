/**
 * Writes neutral WebP placeholders under public/images/pages/... (see page-visual-prompts.json).
 */
import { mkdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROMPTS_PATH = join(__dirname, 'page-visual-prompts.json');
const ROOT = join(__dirname, '..');
const IMAGES = join(ROOT, 'public', 'images');

const prompts = JSON.parse(readFileSync(PROMPTS_PATH, 'utf8'));

for (const { file } of prompts) {
  const dest = join(IMAGES, file);
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
  console.log(dest);
}
