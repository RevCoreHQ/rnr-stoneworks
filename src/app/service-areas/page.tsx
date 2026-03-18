import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { serviceAreas } from '@/data/service-areas';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { ServiceAreaMap } from '@/components/sections/ServiceAreaMap';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Service Areas | Rock N Roll Stoneworks Colorado',
  description:
    'Serving Lafayette, Erie, Boulder, Westminster, Longmont, Firestone, and Frederick CO with custom hardscape and outdoor living.',
  path: '/service-areas',
});

export default function ServiceAreasPage() {
  const primaryAreas = serviceAreas.filter((a) => a.isPrimary);
  const nearbyAreas = serviceAreas.filter((a) => !a.isPrimary);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Service Areas', url: `${siteConfig.url}/service-areas` },
        ])}
      />
      <div className="pt-36 lg:pt-44 pb-20 sm:pb-24 relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Service Areas', href: '/service-areas' }]} />
          <div className="max-w-3xl mb-10">
            <p className="text-gold-700 font-medium text-sm tracking-wide uppercase mb-3">
              Where We Work
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-4">
              Colorado Front Range Service Areas
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed">
              Rock N Roll Stoneworks serves communities throughout the Colorado Front Range with custom paver installations, fire features, outdoor kitchens, and complete hardscape transformations.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive map */}
      <section className="py-12 lg:py-16 bg-cream-50 border-b border-cream-200/60">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <ServiceAreaMap />
        </div>
      </section>

      <section className="section-pad pt-0 relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 lg:pt-20">
          <h2 className="text-2xl font-display font-bold text-ink-900 mb-6">Primary Service Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {primaryAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white rounded-2xl border border-cream-200 p-6 shadow-panel hover:shadow-elevate hover:-translate-y-0.5 transition-all overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center shrink-0 group-hover:bg-gold-100 transition-colors">
                    <MapPin className="w-5 h-5 text-gold-700" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink-900 text-lg group-hover:text-gold-700 transition-colors">
                      {area.city}, {area.state}
                    </h3>
                    <p className="text-sm text-ink-400 mt-1 leading-relaxed line-clamp-2">
                      {area.intro.slice(0, 100)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {nearbyAreas.length > 0 && (
            <>
              <h2 className="text-2xl font-display font-bold text-ink-900 mb-6">Nearby Communities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="group bg-cream-50 rounded-2xl border border-cream-200 p-6 hover:bg-white hover:shadow-elevate hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-ink-400 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-display font-semibold text-ink-800 group-hover:text-gold-700 transition-colors">
                          {area.city}, {area.state}
                        </h3>
                        {area.nearbyNote && (
                          <p className="text-xs text-ink-400 mt-1">{area.nearbyNote}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
