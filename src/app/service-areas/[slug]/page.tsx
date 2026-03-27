import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { serviceAreas, getServiceAreaBySlug } from '@/data/service-areas';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, geoServiceSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CTASection } from '@/components/sections/CTASection';

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

      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-ink-950 overflow-hidden grain">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: `${area.city}, ${area.state}`, href: `/service-areas/${area.slug}` },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-gold-700/20 text-gold-300 rounded-full mb-4 border border-gold-600/30">
              <MapPin className="w-3.5 h-3.5" />
              {area.isPrimary ? 'Primary Service Area' : 'Extended Service Area'}
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              {area.h1}
            </h1>
            <p className="text-xl text-ink-300 leading-relaxed mb-8">{area.intro}</p>
            {area.nearbyNote && (
              <div className="bg-gold-700/10 border border-gold-500/20 rounded-xl p-4 mb-8">
                <p className="text-gold-200 text-sm">{area.nearbyNote}</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">Get Your Free Estimate</Button>
              <Button
                href={`tel:${siteConfig.phoneRaw}`}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Services available */}
      <section className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink-900 mb-4">
              Services Available in {area.city}
            </h2>
            <p className="text-ink-500 leading-relaxed">
              Rock N Roll Stoneworks offers a full range of outdoor living services
              {area.isPrimary ? ` throughout ${area.city}` : ` near ${area.city}`}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center justify-between px-5 py-4 bg-white rounded-xl border border-cream-200 shadow-panel hover:shadow-elevate hover:border-gold-200 transition-all group"
              >
                <span className="text-sm font-medium text-ink-700 group-hover:text-gold-700 transition-colors">
                  {s.title}
                </span>
                <ArrowRight className="w-4 h-4 text-ink-300 group-hover:text-gold-600 transition-colors shrink-0" />
              </Link>
            ))}
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
              { icon: Star, title: 'Belgard Authorized', text: 'Certified Belgard contractor and reseller with lifetime warranties on qualifying installations.' },
              { icon: Shield, title: 'ICPI Certified', text: 'Interlocking Concrete Pavement Institute certified installer, the industry standard for paver installation.' },
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
