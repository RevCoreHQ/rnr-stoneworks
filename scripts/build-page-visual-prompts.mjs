/**
 * Regenerates scripts/page-visual-prompts.json, **hero WebP only** (phase 1).
 * When you want inline spotlight/detail art again, extend this script and page-media-paths.
 *
 *   npm run build:page-prompts
 *
 * Count: 10 services + 2 pools + 19 areas = 31 hero files (.webp).
 */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, 'page-visual-prompts.json');

const BASE =
  'Ultra photorealistic editorial photograph for a premium Colorado hardscape contractor website. Natural light, tasteful residential architecture partially visible, no people, no logos, no readable text, no watermark. Scene UID:';

const services = [
  {
    slug: 'paver-installations',
    hero: 'Wide establishing backyard paver patio with modular concrete pavers, crisp joints, clean edge restraint against planting.',
  },
  {
    slug: 'fire-pits-fireplaces',
    hero: 'Outdoor living at blue hour: gas fire feature on modular pavers with subtle flame glow.',
  },
  {
    slug: 'outdoor-kitchens',
    hero: 'Outdoor kitchen island with stone fascia, grill deck, and counter, sunny backyard.',
  },
  {
    slug: 'water-features',
    hero: 'Residential garden with water wall and reflecting basin, wet stone texture.',
  },
  {
    slug: 'retaining-walls-stairs',
    hero: 'Terraced backyard with segmental retaining wall and integrated landscape stairs.',
  },
  {
    slug: 'outdoor-lighting',
    hero: 'Stone walkway and patio at blue hour with warm path lighting.',
  },
  {
    slug: 'artificial-turf',
    hero: 'Backyard with synthetic turf meeting a paver border, realistic pile and grading.',
  },
  {
    slug: 'decks-pergolas',
    hero: 'Cedar pergola over composite deck with mountain-soft sky, residential rear yard.',
  },
  {
    slug: 'stamped-concrete',
    hero: 'Two-level stamped concrete patio with outdoor seating, ashlar texture.',
  },
  {
    slug: 'stone-veneers',
    hero: 'Home exterior with stacked stone veneer around entry, warm afternoon light.',
  },
];

const pools = [
  {
    slug: 'fiberglass-pools',
    hero: 'Residential backyard with new fiberglass pool, clean waterline, coping and deck.',
  },
  {
    slug: 'concrete-shotcrete-pools',
    hero: 'Custom freeform pool under construction transitioning to finished resort-style yard.',
  },
];

/** slug -> city label (must match service-areas.ts) */
const areas = [
  ['denver', 'Denver'],
  ['lafayette', 'Lafayette'],
  ['erie', 'Erie'],
  ['boulder', 'Boulder'],
  ['westminster', 'Westminster'],
  ['firestone-frederick', 'Firestone and Frederick'],
  ['broomfield', 'Broomfield'],
  ['louisville', 'Louisville'],
  ['superior', 'Superior'],
  ['loveland', 'Loveland'],
  ['fort-collins', 'Fort Collins'],
  ['brighton', 'Brighton'],
  ['mead-berthoud', 'Mead and Berthoud'],
  ['thornton-northglenn', 'Thornton and Northglenn'],
  ['highlands-ranch', 'Highlands Ranch'],
  ['littleton', 'Littleton'],
  ['aurora', 'Aurora'],
  ['lakewood', 'Lakewood'],
  ['longmont', 'Longmont'],
];

function entry(file, body) {
  return { file, prompt: `${BASE} ${file}, ${body}` };
}

const items = [];

for (const s of services) {
  items.push(entry(`pages/services/${s.slug}-hero.webp`, s.hero));
}

for (const p of pools) {
  items.push(entry(`pages/pools/${p.slug}-hero.webp`, p.hero));
}

for (const [slug, city] of areas) {
  items.push(
    entry(
      `pages/areas/${slug}-hero.webp`,
      `Hero establishing shot: premium outdoor living and hardscape near ${city}, Colorado, patio, planting, and home context.`
    )
  );
}

writeFileSync(OUT, JSON.stringify(items, null, 2), 'utf8');
console.log(`Wrote ${items.length} hero-only entries to ${OUT}`);
