import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services — Pavers, Fire Pits, Outdoor Kitchens & More | Rock N Roll Stoneworks CO',
  description:
    'Explore the full range of outdoor living services from Rock N Roll Stoneworks: paver installations, fire pits, outdoor kitchens, water features, retaining walls, lighting, turf, and more.',
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
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-brand-700 font-medium text-sm tracking-wide uppercase mb-3">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-stone-900 mb-4">
              Complete Outdoor Living Services
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              From custom paver patios and fire features to outdoor kitchens, water features, and complete backyard transformations — Rock N Roll Stoneworks delivers every aspect of outdoor living construction with Belgard-quality craftsmanship.
            </p>
          </div>
        </div>
      </div>

      <ServiceCards title="Hardscape Services" subtitle="Hardscape" category="hardscape" />
      <ServiceCards title="Outdoor Living Services" subtitle="Outdoor Living" category="outdoor-living" />
      <ServiceCards title="Landscape & Specialty Services" subtitle="Landscape" category="landscape" />

      <CTASection />
    </>
  );
}
