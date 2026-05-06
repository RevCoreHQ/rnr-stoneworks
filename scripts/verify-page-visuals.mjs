/**
 * Ensures public/images/{file} exists for every entry in page-visual-prompts.json.
 */
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PROMPTS = join(__dirname, 'page-visual-prompts.json');
const IMAGES = join(ROOT, 'public', 'images');

const files = JSON.parse(readFileSync(PROMPTS, 'utf8')).map((p) => p.file);
const missing = files.filter((f) => !existsSync(join(IMAGES, f)));

if (missing.length) {
  console.error('Missing page hero WebP files. Add public/images/{file} or run npm run seed:page-placeholders:\n');
  for (const m of missing) console.error(`  - ${m}`);
  process.exit(1);
}
console.log(`OK: all ${files.length} hero WebP files present under public/images/`);
