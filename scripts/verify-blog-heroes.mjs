/**
 * Ensures public/images/blog/{slug}.jpg exists for every entry in blog-hero-prompts.json.
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
const missing = slugs.filter((s) => !existsSync(join(BLOG_DIR, `${s}.jpg`)));

if (missing.length) {
  console.error(
    'Missing blog hero JPEGs. Add public/images/blog/{slug}.jpg (see scripts/blog-hero-prompts.json), then npm run generate:blog-heroes:'
  );
  for (const m of missing) console.error(`  - ${m}.jpg`);
  process.exit(1);
}
console.log(`OK: all ${slugs.length} blog hero images present under public/images/blog/`);
