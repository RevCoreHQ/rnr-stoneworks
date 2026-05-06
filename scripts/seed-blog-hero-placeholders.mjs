/**
 * Writes solid-color JPEGs for local dev when heroes are missing.
 * For production heroes use Cursor image generation + `npm run generate:blog-heroes`.
 */
import { mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROMPTS_PATH = join(__dirname, 'blog-hero-prompts.json');
const OUT_DIR = join(__dirname, '..', 'public', 'images', 'blog');

const prompts = JSON.parse(readFileSync(PROMPTS_PATH, 'utf8'));
mkdirSync(OUT_DIR, { recursive: true });

for (const { slug } of prompts) {
  const dest = join(OUT_DIR, `${slug}.jpg`);
  await sharp({
    create: {
      width: 1600,
      height: 900,
      channels: 3,
      background: { r: 232, g: 228, b: 220 },
    },
  })
    .jpeg({ quality: 72 })
    .toFile(dest);
  console.log(dest);
}
