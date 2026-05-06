import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { pools, getPoolBySlug, getRelatedPools } from '@/data/pools';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/schema';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { PageSpotlightGrid } from '@/components/sections/PageSpotlightGrid';
import { PageWideImageHero } from '@/components/layout/PageWideImageHero';
import { ServiceAreaCoverageSection } from '@/components/sections/ServiceAreaCoverageSection';
import { buildPoolPageKeywords } from '@/lib/seo-keywords';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return pools.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pool = getPoolBySlug(slug);
  if (!pool) return {};
  return generatePageMetadata({
    title: pool.metaTitle,
    description: pool.metaDescription,
    path: `/pools-spas/${pool.slug}`,
    ogImage: pool.heroImage,
    keywords: buildPoolPageKeywords(pool),
  });
}

export default async function PoolPage({ params }: Props) {
  const { slug } = await params;
  const pool = getPoolBySlug(slug);
  if (!pool) notFound();

  const related = getRelatedPools(pool.relatedSlugs);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Pools & Spas', url: `${siteConfig.url}/pools-spas` },
            { name: pool.title, url: `${siteConfig.url}/pools-spas/${pool.slug}` },
          ]),
          serviceSchema(pool.title, pool.metaDescription, `${siteConfig.url}/pools-spas/${pool.slug}`),
          faqSchema(pool.faqs),
        ]}
      />

      <PageWideImageHero
        imageSrc={pool.heroImage}
        imageAlt={pool.heroAlt}
        breadcrumbs={[
          { label: 'Pools & Spas', href: '/pools-spas' },
          { label: pool.title, href: `/pools-spas/${pool.slug}` },
        ]}
        eyebrow="Pool installation"
        title={pool.h1}
        description={pool.intro}
      >
        <Button href="/contact" size="lg">
          Get Your Free {pool.shortTitle} Quote
        </Button>
        <Button href={`tel:${siteConfig.phoneRaw}`} variant="outlineWhite" size="lg">
          Call {siteConfig.phone}
        </Button>
      </PageWideImageHero>

      {pool.contentImages?.[0] && (
        <section className="-mt-24 lg:-mt-28 pt-8 pb-16 bg-cream-50 relative z-[3]">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <PageSpotlightGrid images={[pool.contentImages[0]]} />
          </div>
        </section>
      )}

      <section className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-3xl font-display font-bold text-ink-900 mb-8">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pool.features.map((feature, i) => (
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

      {pool.body.length > 0 && (
        <section className="section-pad bg-gradient-to-b from-cream-50 to-white relative overflow-hidden topo-lines">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="space-y-12">
              {pool.body.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink-900 mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-ink-500 leading-relaxed text-base lg:text-lg">
                    {section.text}
                  </p>
                  {i === 0 && pool.contentImages?.[1] ? (
                    <div className="mt-10 not-prose">
                      <PageSpotlightGrid images={[pool.contentImages[1]]} singleMaxWidth="3xl" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ServiceAreaCoverageSection offeringLabel={pool.title} />

      <FAQAccordion faqs={pool.faqs} title="Common Questions" subtitle="FAQ" />

      {related.length > 0 && (
        <section className="section-pad relative overflow-hidden grain-light">
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="text-3xl font-display font-bold text-ink-900 mb-8">
              Explore Other Pool Options
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/pools-spas/${r.slug}`}
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
