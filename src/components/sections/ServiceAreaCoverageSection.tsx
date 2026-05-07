import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { serviceAreas } from '@/data/service-areas';

interface ServiceAreaCoverageSectionProps {
  /** e.g. "Paver Installations" or "Fiberglass Pools", used in headings only */
  offeringLabel: string;
}

/**
 * Cross-links regional service intent to local landing pages for “{service} in {city}” SEO.
 */
export function ServiceAreaCoverageSection({ offeringLabel }: ServiceAreaCoverageSectionProps) {
  const primary = serviceAreas.filter((a) => a.isPrimary);
  const extended = serviceAreas.filter((a) => !a.isPrimary);

  return (
    <section className="section-pad bg-white relative overflow-hidden grain-light border-y border-cream-200">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl mb-10">
          <p className="label mb-3">Service areas</p>
          <h2 className="text-3xl font-display font-bold text-ink-900 mb-4">
            {offeringLabel} across Colorado&apos;s Front Range
          </h2>
          <p className="text-ink-600 leading-relaxed text-base lg:text-lg">
            Rock N Roll Stoneworks is based in Longmont and builds throughout Boulder County, the north Denver metro,
            and nearby Front Range communities. Each local page lists every outdoor living service we offer in that
            area, including{' '}
            <strong className="font-semibold text-ink-800">{offeringLabel}</strong>, with city-specific context when
            permits, soils, or HOA rules matter.
          </p>
          <p className="text-ink-600 leading-relaxed text-base lg:text-lg mt-4">
            Explore where we work:{' '}
            {primary.map((a, i) => (
              <span key={a.slug}>
                {i > 0 ? ', ' : ''}
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="text-gold-700 font-medium hover:text-gold-800 underline decoration-gold-700/30 hover:decoration-gold-700/70 underline-offset-2"
                >
                  {a.city}
                </Link>
              </span>
            ))}
            , and more below.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500 mb-4">
            Primary service areas
          </h3>
          <div className="flex flex-wrap gap-2">
            {primary.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-cream-50 border border-cream-200 text-sm font-medium text-ink-800 hover:bg-gold-50 hover:border-gold-200 hover:text-gold-900 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-700 shrink-0" aria-hidden />
                {a.city}, {a.state}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500 mb-4">
            Extended coverage
          </h3>
          <div className="flex flex-wrap gap-2">
            {extended.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-cream-200 text-sm text-ink-700 hover:border-gold-300 hover:text-gold-800 transition-colors"
              >
                {a.city}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-ink-500">
          <Link href="/service-areas" className="text-gold-700 font-medium hover:underline">
            View all service areas →
          </Link>
        </p>
      </div>
    </section>
  );
}
