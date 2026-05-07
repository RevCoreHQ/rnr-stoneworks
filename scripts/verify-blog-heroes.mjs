/**
 * Ensures public/images/blog/{slug}.webp exists for every entry in blog-hero-prompts.json.
 * Legacy .jpg sources are also accepted (auto-converted by scripts/convert-images-to-webp.mjs).
 * Run after: npm run generate:blog-heroes
 */
import { existsSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PROMPTS = join(__dirname, 'blog-hero-prompts.json');
const BLOG_DIR = join(ROOT, 'public', 'images', 'blog');

const slugs = JSON.parse(readFileSync(PROMPTS, 'utf8')).map((p) => p.slug);
const missing = slugs.filter(
  (s) => !existsSync(join(BLOG_DIR, `${s}.webp`)) && !existsSync(join(BLOG_DIR, `${s}.jpg`))
);

if (missing.length) {
  console.error(
    'Missing blog hero images. Add public/images/blog/{slug}.webp (or legacy .jpg, then npm run convert:webp), see scripts/blog-hero-prompts.json:'
  );
  for (const m of missing) console.error(`  - ${m}.webp`);
  process.exit(1);
}
console.log(`OK: all ${slugs.length} blog hero images present under public/images/blog/`);
