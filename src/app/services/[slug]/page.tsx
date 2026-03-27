import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services, getServiceBySlug, getRelatedServices } from '@/data/services';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Services', url: `${siteConfig.url}/services` },
            { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
          ]),
          serviceSchema(service.title, service.metaDescription, `${siteConfig.url}/services/${service.slug}`),
          faqSchema(service.faqs),
        ]}
      />

      {/* Hero */}
      <section className="pt-36 lg:pt-44 pb-16 bg-cream-50 border-b border-gold-200/40 relative overflow-hidden topo-lines">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[
            { label: 'Services', href: '/services' },
            { label: service.title, href: `/services/${service.slug}` },
          ]} />
          <div className="max-w-3xl mt-8">
            <p className="label mb-4 capitalize">{service.category.replace('-', ' ')}</p>
            <h1 className="font-display font-light text-ink-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {service.h1}
            </h1>
            <p className="font-body text-lg text-ink-500 leading-relaxed mb-8">{service.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get Your Free {service.shortTitle} Quote
              </Button>
              <Button
                href={`tel:${siteConfig.phoneRaw}`}
                variant="outline"
                size="lg"
              >
                Call {siteConfig.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-display font-bold text-ink-900 mb-8">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-cream-50 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-gold-800 text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-sm text-ink-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body content */}
      {service.body.length > 0 && (
        <section className="section-pad bg-gradient-to-b from-cream-50 to-white relative overflow-hidden topo-lines">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="space-y-12">
              {service.body.map((section, i) => (
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

      {/* FAQ */}
      <FAQAccordion faqs={service.faqs} title="Common Questions" subtitle="FAQ" />

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-pad relative overflow-hidden grain-light">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="text-3xl font-display font-bold text-ink-900 mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group p-5 bg-white rounded-xl border border-cream-200 shadow-panel hover:shadow-elevate hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="font-display font-semibold text-ink-900 mb-2 group-hover:text-gold-700 transition-colors">
                    {r.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-gold-700 font-medium">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
