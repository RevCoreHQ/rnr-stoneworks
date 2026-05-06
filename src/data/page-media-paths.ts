import type { PageContentImage } from '@/types/page-media';

/** Hero paths only; optional body `contentImages` can be added later in this module. */

export function buildServicePageMedia(slug: string): { heroImage: string; contentImages: PageContentImage[] } {
  return {
    heroImage: `/images/pages/services/${slug}-hero.webp`,
    contentImages: [],
  };
}

export function buildPoolPageMedia(slug: string): { heroImage: string; contentImages: PageContentImage[] } {
  return {
    heroImage: `/images/pages/pools/${slug}-hero.webp`,
    contentImages: [],
  };
}

export function buildAreaPageMedia(slug: string, city: string): { heroImage: string; heroAlt: string; contentImages: PageContentImage[] } {
  return {
    heroImage: `/images/pages/areas/${slug}-hero.webp`,
    heroAlt: `Outdoor living and hardscape in ${city}, Colorado`,
    contentImages: [],
  };
}
