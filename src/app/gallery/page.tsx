import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Gallery — Paver Patios, Fire Pits & Outdoor Living Portfolio | Rock N Roll Stoneworks CO',
  description:
    'Browse our portfolio of custom paver patios, fire pits, outdoor kitchens, water features, and retaining walls across Lafayette, Erie, Boulder, and the Colorado Front Range.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Gallery', url: `${siteConfig.url}/gallery` },
        ])}
      />
      <div className="pt-36 lg:pt-44 pb-16 bg-cream-50 border-b border-gold-200/40 relative overflow-hidden topo-lines">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Gallery', href: '/gallery' }]} />
          <div className="max-w-3xl mt-8">
            <p className="label mb-4">Our Work</p>
            <h1 className="font-display font-light text-ink-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Projects That Speak for Themselves
            </h1>
            <p className="font-body text-lg text-ink-500 leading-relaxed">
              Every project in our portfolio represents a homeowner who trusted Rock N Roll Stoneworks to transform their outdoor space.
            </p>
          </div>
        </div>
      </div>
      <ProjectGrid />
      <CTASection
        headline="Love What You See?"
        description="Let us create something just as beautiful for your property. Contact us for a free estimate and 3D design consultation."
      />
    </>
  );
}
