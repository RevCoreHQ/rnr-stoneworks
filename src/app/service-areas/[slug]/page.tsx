import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { serviceAreas, getServiceAreaBySlug } from '@/data/service-areas';
import { services } from '@/data/services';
import { pools } from '@/data/pools';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, geoServiceSchema } from '@/lib/schema';
import { buildServiceAreaKeywords } from '@/lib/seo-keywords';
import { Button } from '@/components/ui/Button';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CTASection } from '@/components/sections/CTASection';
import { PageSpotlightGrid } from '@/components/sections/PageSpotlightGrid';
import { PageWideImageHero } from '@/components/layout/PageWideImageHero';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return {};
  return generatePageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/service-areas/${area.slug}`,
    ogImage: area.heroImage,
    keywords: buildServiceAreaKeywords(area),
  });
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Service Areas', url: `${siteConfig.url}/service-areas` },
            { name: `${area.city}, ${area.state}`, url: `${siteConfig.url}/service-areas/${area.slug}` },
          ]),
          geoServiceSchema(
            `Hardscape Contractor in ${area.city}, ${area.state}`,
            area.metaDescription,
            `${siteConfig.url}/service-areas/${area.slug}`,
            area.geo
          ),
        ]}
      />

      <PageWideImageHero
        imageSrc={area.heroImage}
        imageAlt={area.heroAlt}
        breadcrumbs={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: `${area.city}, ${area.state}`, href: `/service-areas/${area.slug}` },
        ]}
        eyebrow={`${area.city}, ${area.state} · ${area.isPrimary ? 'Primary' : 'Extended'} service area`}
        title={area.h1}
        description={area.intro}
      >
        <Button href="/contact" size="lg">
          Get Your Free Estimate
        </Button>
        <Button href={`tel:${siteConfig.phoneRaw}`} variant="outlineWhite" size="lg">
          <Phone className="w-4 h-4 mr-2" />
          Call {siteConfig.phone}
        </Button>
      </PageWideImageHero>

      {area.nearbyNote ? (
        <section className="bg-cream-50 border-b border-cream-200 relative z-[3]">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
            <div className="max-w-3xl bg-gold-50 border border-gold-100 rounded-xl p-4">
              <p className="text-sm text-ink-700 leading-relaxed">{area.nearbyNote}</p>
            </div>
          </div>
        </section>
      ) : null}

      <TrustStrip />

      {area.contentImages && area.contentImages.length > 0 && (
        <section className="-mt-20 lg:-mt-24 pt-6 pb-14 lg:pb-16 bg-cream-50 border-b border-cream-200 relative z-[3]">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <PageSpotlightGrid images={area.contentImages} />
          </div>
        </section>
      )}

      {/* Services available */}
      <section className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink-900 mb-4">
              Services Available in {area.city}
            </h2>
            <p className="text-ink-500 leading-relaxed">
              Rock N Roll Stoneworks offers hardscape, outdoor living, and pool installation
              {area.isPrimary ? ` throughout ${area.city}` : ` near ${area.city}`}. Use the links below to jump to
              each service with local context—or open any page to read scope, process, and FAQs.
            </p>
          </div>
          <h3 className="text-lg font-display font-semibold text-ink-900 mb-4 mt-2">
            Hardscape & outdoor living
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                aria-label={`${s.title} in ${area.city}, ${area.state}`}
                className="flex items-start justify-between gap-3 px-5 py-4 bg-white rounded-xl border border-cream-200 shadow-panel hover:shadow-elevate hover:border-gold-200 transition-all group text-left"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink-900 group-hover:text-gold-800 transition-colors leading-snug">
                    {s.title} in {area.city}
                  </span>
                  <span className="block text-xs text-ink-500 mt-1 leading-snug">
                    {s.shortTitle} · Free estimates in {area.city}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-ink-300 group-hover:text-gold-600 transition-colors shrink-0 mt-0.5" aria-hidden />
              </Link>
            ))}
          </div>

          <h3 className="text-lg font-display font-semibold text-ink-900 mb-4 mt-12">
            Pools & spas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pools.map((p) => (
              <Link
                key={p.slug}
                href={`/pools-spas/${p.slug}`}
                aria-label={`${p.title} in ${area.city}, ${area.state}`}
                className="flex items-start justify-between gap-3 px-5 py-4 bg-white rounded-xl border border-cream-200 shadow-panel hover:shadow-elevate hover:border-gold-200 transition-all group text-left"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink-900 group-hover:text-gold-800 transition-colors leading-snug">
                    {p.title} in {area.city}
                  </span>
                  <span className="block text-xs text-ink-500 mt-1 leading-snug">
                    {p.shortTitle} · Latham & custom builds · {area.city}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-ink-300 group-hover:text-gold-600 transition-colors shrink-0 mt-0.5" aria-hidden />
              </Link>
            ))}
            <Link
              href="/pools-spas"
              className="flex items-center justify-center px-5 py-4 rounded-xl border border-dashed border-cream-300 text-sm font-medium text-gold-800 hover:bg-gold-50 hover:border-gold-300 transition-colors sm:col-span-2 lg:col-span-1"
            >
              View all pools & spas →
            </Link>
          </div>
        </div>
      </section>

      {/* Body content */}
      {area.body.length > 0 && (
        <section className="section-pad bg-gradient-to-b from-cream-50 to-white relative overflow-hidden topo-lines">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="space-y-12">
              {area.body.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink-900 mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-ink-500 leading-relaxed text-base lg:text-lg">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why RNR */}
      <section className="section-pad bg-cream-50 relative overflow-hidden dot-grid">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-ink-900 mb-4">
              Why {area.city} Homeowners Choose Rock N Roll Stoneworks
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, title: 'Custom Pools & Spas', text: 'Fiberglass and concrete pool installations. Latham Pools Authorized Dealer.' },
              { icon: Shield, title: 'Hardscape & Stonework', text: 'ICPI Certified. Pavers, fire features, outdoor kitchens, retaining walls, and more.' },
              { icon: CheckCircle, title: 'Custom Design', text: 'See a detailed design layout of your project before a single stone is placed.' },
              { icon: Clock, title: 'Free Estimates', text: 'Free on-site consultations and detailed estimates with no obligation to proceed.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-cream-200 shadow-panel">
                <item.icon className="w-8 h-8 text-gold-700 mb-3" />
                <h3 className="font-display font-semibold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-2xl font-display font-bold text-ink-900 mb-6">
            We Also Serve These Colorado Communities
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cream-50 rounded-full text-sm font-medium text-ink-700 hover:bg-gold-50 hover:text-gold-800 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {a.city}, {a.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
