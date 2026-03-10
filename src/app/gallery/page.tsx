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
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Gallery', href: '/gallery' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-brand-700 font-medium text-sm tracking-wide uppercase mb-3">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-stone-900 mb-4">
              Projects That Speak for Themselves
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Every project in our portfolio represents a homeowner who trusted Rock N Roll Stoneworks to transform their outdoor space. Browse our work and imagine what we can build for you.
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
