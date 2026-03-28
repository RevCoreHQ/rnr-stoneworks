import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Hardscape Services | Rock N Roll Stoneworks CO',
  description:
    'Pavers, fire pits, outdoor kitchens, water features, retaining walls, lighting, turf, and more. Serving the Colorado Front Range.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Services', url: `${siteConfig.url}/services` },
        ])}
      />
      <div className="pt-36 lg:pt-44 pb-16 bg-cream-50 border-b border-gold-200/40 relative overflow-hidden topo-lines">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
          <div className="max-w-3xl mt-8">
            <p className="label mb-4">What We Build</p>
            <h1 className="font-display font-light text-ink-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Complete Outdoor Living Services
            </h1>
            <p className="font-body text-lg text-ink-500 leading-relaxed">
              From custom paver patios and fire features to outdoor kitchens, water features, and complete backyard transformations, Rock N Roll Stoneworks delivers every aspect of outdoor living construction.
            </p>
          </div>
        </div>
      </div>

      <section className="section-pad bg-white relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <p className="label mb-3">Hardscape</p>
            <ServiceCards category="hardscape" />
          </div>
          <div className="mb-12">
            <p className="label mb-3">Outdoor Living</p>
            <ServiceCards category="outdoor-living" />
          </div>
          <div>
            <p className="label mb-3">Landscape & Specialty</p>
            <ServiceCards category="landscape" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
