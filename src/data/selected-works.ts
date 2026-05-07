/**
 * Homepage Selected Works: locally hosted editorial visuals paired with estate-grade Colorado copy.
 * All tiles render as full-width cinematic banners stacked vertically on lg+.
 */

export type SelectedWorkAspect = 'cinematic' | 'standard';

export interface SelectedWork {
  title: string;
  location: string;
  category: string;
  src: string;
  alt: string;
  href: string;
  /** Full-width hero tile on large screens */
  wide?: boolean;
  /** cinematic = wide bar; standard = 4:3 tile */
  aspect?: SelectedWorkAspect;
}

export const selectedWorksFeatured: SelectedWork[] = [
  {
    title: 'Infinity Pool & Spa Terrace',
    location: 'Front Range, Colorado',
    category: 'Estate outdoor · Pool & spa',
    src: '/images/selected-works/sw-01-estate-infinity-twilight.webp',
    alt: 'Twilight infinity-edge pool with integrated spa, porcelain deck, and foothills sky on a Colorado luxury estate',
    href: '/pools-spas',
    wide: true,
    aspect: 'cinematic',
  },
  {
    title: 'Pavilion Kitchen at Sunset',
    location: 'Boulder County, Colorado',
    category: 'Outdoor living · Pavilion & kitchen',
    src: '/images/selected-works/sw-02-pavilion-kitchen-sunset.webp',
    alt: 'Stone pavilion with outdoor kitchen, fireplace wall, and infinity pool edge at Colorado sunset',
    href: '/services/outdoor-kitchens',
    wide: true,
    aspect: 'cinematic',
  },
  {
    title: 'Culinary Terrace & Stone Kitchen',
    location: 'Lafayette, Colorado',
    category: 'Belgard hardscape · Culinary outdoor living',
    src: '/images/selected-works/sw-03-culinary-terrace.webp',
    alt: 'Granite outdoor kitchen island with stone fascia, cedar ceiling detail, and modular paver terrace',
    href: '/services/outdoor-kitchens',
    wide: true,
    aspect: 'cinematic',
  },
  {
    title: 'Pool, Fire & Evening Deck',
    location: 'Westminster, Colorado',
    category: 'Multi-zone design-build',
    src: '/images/selected-works/sw-04-pool-fire-evening.webp',
    alt: 'Night-lit swimming pool with linear gas fire feature on stone pedestal and paver deck surround',
    href: '/services/fire-pits-fireplaces',
    wide: true,
    aspect: 'cinematic',
  },
  {
    title: 'Sculptural Pool & Boulder Garden',
    location: 'Boulder County, Colorado',
    category: 'Shotcrete · Custom pool envelope',
    src: '/images/selected-works/sw-05-sculptural-pool-garden.webp',
    alt: 'Freeform shotcrete pool with limestone coping, irregular stone pavers, and layered foothills planting',
    href: '/pools-spas/concrete-shotcrete-pools',
    wide: true,
    aspect: 'cinematic',
  },
  {
    title: 'Arrival Court & Paver Motor Court',
    location: 'North Metro, Colorado',
    category: 'Driveway · Entry · Lighting',
    src: '/images/selected-works/sw-06-arrival-court.webp',
    alt: 'Premium modular paver driveway and motor court with stone pillars and structured evergreen planting',
    href: '/services/paver-installations',
    wide: true,
    aspect: 'cinematic',
  },
];
