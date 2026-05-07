import { siteConfig } from '@/data/site-config';
import { blogPosts } from '@/data/blog';

export interface GalleryProject {
  src: string;
  alt: string;
  label: string;
}

/**
 * CDN portfolio photography (legacy Filesafe).
 * Omit original 8 PNG exports, they are 14–57MB each and reliably fail in Next/Image + browsers.
 */
const legacyPortfolioProjects: GalleryProject[] = [
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbe8487c68ea7458e3.jpg', alt: 'Belgard paver patio and outdoor kitchen installation in Colorado', label: 'Full Hardscape & Kitchen, Colorado' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb277ba028b8ce2268.jpg', alt: 'Custom paver patio with natural gas fire pit in Erie, Colorado', label: 'Paver Patio & Fire Pit, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb070c5827655cf949.jpg', alt: 'Tiered natural stone retaining wall and landscape design in Boulder, Colorado', label: 'Retaining Walls, Boulder, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbbfc81f7607ecedf1.jpg', alt: 'Belgard paver patio and seat wall installation in Colorado', label: 'Outdoor Hardscape, Colorado' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbd548174caf1be587.jpg', alt: 'Multi-level paver walkway and retaining wall in Westminster, Colorado', label: 'Paver Installation, Westminster, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb0b5c435534dabbdc.jpg', alt: 'Outdoor living space with paver patio and landscape lighting in Longmont, Colorado', label: 'Outdoor Living, Longmont, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb0b5c430b62dabbdb.jpg', alt: 'Custom hardscape design with stone planters and paver driveway in Erie, Colorado', label: 'Hardscape & Landscape, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbeba487466a20d049.jpg', alt: 'Complete backyard transformation with Belgard pavers and stone steps in Boulder, Colorado', label: 'Backyard Transformation, Boulder, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbeba487d1ff20d048.jpg', alt: 'Custom paver patio with built-in fire feature and seating area in Colorado', label: 'Pavers & Fire, Colorado' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbfb38ca4dc08ccfd8.jpg', alt: 'Outdoor kitchen with granite countertops and paver patio in Erie, Colorado', label: 'Outdoor Kitchen & Patio, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbcab7f75114aa984e.jpg', alt: 'Premium Belgard paver driveway and front entry hardscape in Westminster, Colorado', label: 'Premium Hardscape, Westminster, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbeba487271b20d047.jpg', alt: 'Complete outdoor living space with fire pit and paver patio in Colorado', label: 'Outdoor Living, Colorado' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbe8487c54027458e7.jpg', alt: 'Natural stone patio with custom fire pit and retaining wall in Boulder, Colorado', label: 'Patio & Fire Feature, Boulder, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbe8487c245a7458ee.jpg', alt: 'Custom interlocking paver design with decorative borders in Longmont, Colorado', label: 'Custom Paver Design, Longmont, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c527040a4eb5da73734e0a.jpg', alt: 'Custom pool and spa installation in Colorado', label: 'Pool & Spa, Colorado' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c527047794bf345c385977.jpg', alt: 'Luxury outdoor pool and hardscape project in Erie, Colorado', label: 'Pool & Hardscape, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c5270452ad3bade2cfbc7b.jpg', alt: 'Custom pool build with paver patio surround in Boulder, Colorado', label: 'Pool & Patio, Boulder, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c52704d90a23c54d504485.jpg', alt: 'Fiberglass pool installation with outdoor living space in Colorado', label: 'Pool Installation, Colorado' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c52704fc4181ea9728aebb.jpg', alt: 'Pool and spa with custom stone coping in Erie, Colorado', label: 'Pool & Spa, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c5270422e1ed0c7de40fb1.jpg', alt: 'Backyard pool transformation with paver deck in Boulder, Colorado', label: 'Pool Transformation, Boulder, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c527047794bfaf5e385976.jpg', alt: 'Custom swimming pool with fire feature in Westminster, Colorado', label: 'Pool & Fire Feature, Westminster, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c52704d90a23fa25504484.jpg', alt: 'Luxury pool and outdoor kitchen installation in Colorado', label: 'Pool & Outdoor Kitchen, Colorado' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c527045ebd49ff3b601867.jpg', alt: 'Residential pool build with retaining wall in Longmont, Colorado', label: 'Pool & Retaining Wall, Longmont, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c527044a4efaed1d00e4a3.jpg', alt: 'Custom pool and paver patio design in Erie, Colorado', label: 'Pool & Paver Patio, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c5270422e1edaf5ce40fb2.jpg', alt: 'Complete pool and outdoor living installation in Boulder, Colorado', label: 'Pool & Outdoor Living, Boulder, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c52b47421e24825d6c91fc.jpg', alt: 'Custom pool and hardscape project in Colorado', label: 'Pool & Hardscape, Colorado' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c52b470a4eb5096173add1.jpg', alt: 'Pool installation with paver surround in Erie, Colorado', label: 'Pool Installation, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c52b47421e243d0c6c91fb.jpg', alt: 'Custom pool and outdoor living space in Boulder, Colorado', label: 'Pool & Outdoor Living, Boulder, CO' },
];

/** Standalone marketing CGI (also used on Selected Works); not tied to the matched before/after slider pair */
const marketingConceptGallery: GalleryProject[] = [
  {
    src: '/images/design-visualization/luxury-dusk-pavilion-concept.png',
    alt: 'Illustrative dusk visualization of infinity pool, spa, stone pavilion, and outdoor kitchen, generic marketing image, not a specific client home',
    label: 'Concept visualization · Hillside pool & pavilion (CGI)',
  },
];

/** Service page hero WebPs (site-generated / design visuals) */
const servicePageHeroGallery: GalleryProject[] = [
  { src: '/images/pages/services/paver-installations-hero.webp', alt: 'Paver patio and hardscape outdoor living scene in Colorado', label: 'Site hero · Paver installations' },
  { src: '/images/pages/services/fire-pits-fireplaces-hero.webp', alt: 'Outdoor fire feature and patio gathering space in Colorado', label: 'Site hero · Fire pits & fireplaces' },
  { src: '/images/pages/services/outdoor-kitchens-hero.webp', alt: 'Outdoor kitchen and covered patio living in Colorado', label: 'Site hero · Outdoor kitchens' },
  { src: '/images/pages/services/retaining-walls-stairs-hero.webp', alt: 'Segmental retaining wall and landscape steps in Colorado', label: 'Site hero · Retaining walls & stairs' },
  { src: '/images/pages/services/water-features-hero.webp', alt: 'Backyard water feature with stone and planting in Colorado', label: 'Site hero · Water features' },
  { src: '/images/pages/services/outdoor-lighting-hero.webp', alt: 'Low-voltage landscape and architectural lighting at dusk', label: 'Site hero · Outdoor lighting' },
  { src: '/images/pages/services/artificial-turf-hero.webp', alt: 'Artificial turf lawn with paver border and modern home', label: 'Site hero · Artificial turf' },
  { src: '/images/pages/services/decks-pergolas-hero.webp', alt: 'Pergola shade structure over paver patio and seating', label: 'Site hero · Decks & pergolas' },
  { src: '/images/pages/services/stamped-concrete-hero.webp', alt: 'Stamped concrete patio texture and outdoor seating', label: 'Site hero · Stamped concrete' },
  { src: '/images/pages/services/stone-veneers-hero.webp', alt: 'Natural stone veneer on outdoor structure and columns', label: 'Site hero · Stone veneers' },
];

/** Pool type page hero WebPs */
const poolPageHeroGallery: GalleryProject[] = [
  { src: '/images/pages/pools/fiberglass-pools-hero.webp', alt: 'Fiberglass pool with paver deck at twilight, Colorado backyard', label: 'Site hero · Fiberglass pools' },
  { src: '/images/pages/pools/concrete-shotcrete-pools-hero.webp', alt: 'Custom concrete pool with spa and stone hardscape', label: 'Site hero · Concrete & shotcrete pools' },
];

/** Service area page hero WebPs */
const serviceAreaHeroGallery: GalleryProject[] = [
  { src: '/images/pages/areas/denver-hero.webp', alt: 'Denver Colorado residential outdoor living and hardscape', label: 'Site hero · Denver' },
  { src: '/images/pages/areas/boulder-hero.webp', alt: 'Boulder Colorado foothills backyard and patio', label: 'Site hero · Boulder' },
  { src: '/images/pages/areas/lafayette-hero.webp', alt: 'Lafayette Colorado neighborhood outdoor space', label: 'Site hero · Lafayette' },
  { src: '/images/pages/areas/erie-hero.webp', alt: 'Erie Colorado new construction backyard and patio', label: 'Site hero · Erie' },
  { src: '/images/pages/areas/longmont-hero.webp', alt: 'Longmont Colorado backyard patio and landscape', label: 'Site hero · Longmont' },
  { src: '/images/pages/areas/westminster-hero.webp', alt: 'Westminster Colorado suburban outdoor living', label: 'Site hero · Westminster' },
  { src: '/images/pages/areas/thornton-northglenn-hero.webp', alt: 'Thornton and Northglenn Colorado metro backyard', label: 'Site hero · Thornton & Northglenn' },
  { src: '/images/pages/areas/brighton-hero.webp', alt: 'Brighton Colorado open backyard and hardscape', label: 'Site hero · Brighton' },
  { src: '/images/pages/areas/broomfield-hero.webp', alt: 'Broomfield Colorado patio and outdoor living', label: 'Site hero · Broomfield' },
  { src: '/images/pages/areas/louisville-hero.webp', alt: 'Louisville Colorado residential outdoor space', label: 'Site hero · Louisville' },
  { src: '/images/pages/areas/superior-hero.webp', alt: 'Superior Colorado backyard and hardscape', label: 'Site hero · Superior' },
  { src: '/images/pages/areas/fort-collins-hero.webp', alt: 'Fort Collins Colorado northern Front Range outdoor living', label: 'Site hero · Fort Collins' },
  { src: '/images/pages/areas/loveland-hero.webp', alt: 'Loveland Colorado backyard patio scene', label: 'Site hero · Loveland' },
  { src: '/images/pages/areas/mead-berthoud-hero.webp', alt: 'Mead and Berthoud Colorado rural-residential landscape', label: 'Site hero · Mead & Berthoud' },
  { src: '/images/pages/areas/firestone-frederick-hero.webp', alt: 'Firestone and Frederick Colorado new development backyard', label: 'Site hero · Firestone & Frederick' },
  { src: '/images/pages/areas/lakewood-hero.webp', alt: 'Lakewood Colorado foothills-facing residential yard', label: 'Site hero · Lakewood' },
  { src: '/images/pages/areas/littleton-hero.webp', alt: 'Littleton Colorado mature neighborhood outdoor space', label: 'Site hero · Littleton' },
  { src: '/images/pages/areas/highlands-ranch-hero.webp', alt: 'Highlands Ranch Colorado patio and outdoor living', label: 'Site hero · Highlands Ranch' },
  { src: '/images/pages/areas/aurora-hero.webp', alt: 'Aurora Colorado backyard hardscape and lawn', label: 'Site hero · Aurora' },
];

/** Every `/images/blog/…` asset from post heroes + inline [[IMG:…]] blocks (deduped, blog order). */
function buildBlogGalleryProjectsFromPosts(): GalleryProject[] {
  const out: GalleryProject[] = [];
  const seen = new Set<string>();

  const add = (src: string, alt: string, postTitle: string) => {
    if (!src.startsWith('/images/blog/')) return;
    if (seen.has(src)) return;
    seen.add(src);
    out.push({
      src,
      alt: alt.trim() || postTitle,
      label: `Blog · ${postTitle}`,
    });
  };

  for (const post of blogPosts) {
    add(post.heroImage, post.heroAlt, post.title);
    for (const m of post.body.matchAll(/\[\[IMG:([^|]+)\|([^\]]*)\]\]/g)) {
      add(m[1].trim(), m[2].trim(), post.title);
    }
  }

  return out;
}

const blogGalleryProjects: GalleryProject[] = buildBlogGalleryProjectsFromPosts();

/** Service / pool / area heroes only, blog art is appended after the interleaved grid so every post image is visible */
const localSiteHeroGalleryProjects: GalleryProject[] = [
  ...marketingConceptGallery,
  ...servicePageHeroGallery,
  ...poolPageHeroGallery,
  ...serviceAreaHeroGallery,
];

/** Interleave legacy portfolio with on-site heroes */
function interleaveGalleries(a: GalleryProject[], b: GalleryProject[]): GalleryProject[] {
  const out: GalleryProject[] = [];
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i += 1) {
    if (i < a.length) out.push(a[i]);
    if (i < b.length) out.push(b[i]);
  }
  return out;
}

export const galleryProjects: GalleryProject[] = [
  ...interleaveGalleries(legacyPortfolioProjects, localSiteHeroGalleryProjects),
  ...blogGalleryProjects,
];

/** Absolute image URLs for ImageGallery JSON-LD */
export function galleryImagesForJsonLd(): { src: string; alt: string }[] {
  return galleryProjects.map((p) => ({
    src: p.src.startsWith('/') ? `${siteConfig.url}${p.src}` : p.src,
    alt: p.alt,
  }));
}
