import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { pools } from '@/data/pools';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

const BLUR_DARK = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 5%27%3E%3Cfilter id=%27b%27 color-interpolation-filters=%27sRGB%27%3E%3CfeGaussianBlur stdDeviation=%271%27/%3E%3C/filter%3E%3Crect filter=%27url(%23b)%27 width=%27100%25%27 height=%27100%25%27 fill=%27%230b1219%27/%3E%3C/svg%3E';

export const metadata: Metadata = generatePageMetadata({
  title: 'Pools & Spas | Rock N Roll Stoneworks CO',
  description:
    'Custom fiberglass and concrete pool installation in Lafayette, Erie, and Boulder CO. Latham Pools authorized dealer. Complete pool and outdoor living design.',
  path: '/pools-spas',
});

export default function PoolsSpasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Pools & Spas', url: `${siteConfig.url}/pools-spas` },
          ]),
          serviceSchema(
            'Pool & Spa Installation',
            'Custom fiberglass and concrete pool installation in Lafayette, Erie, and Boulder CO.',
            `${siteConfig.url}/pools-spas`
          ),
        ]}
      />

      {/* Hero */}
      <section className="pt-36 lg:pt-44 pb-16 bg-cream-50 border-b border-gold-200/40 relative overflow-hidden topo-lines">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Pools & Spas', href: '/pools-spas' }]} />
          <div className="max-w-3xl mt-8">
            <p className="label mb-4">Pool Installation</p>
            <h1 className="font-display font-light text-ink-900 mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Custom Pools & Spas in Colorado
            </h1>
            <p className="font-body text-lg text-ink-500 leading-relaxed mb-8">
              From quick-install Latham fiberglass pools to fully custom concrete and shotcrete designs, Rock N Roll Stoneworks builds complete pool and outdoor living environments for Colorado homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get Your Free Pool Consultation
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

      {/* Pool Types */}
      <section className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="label mb-4">Choose Your Pool</p>
            <h2 className="font-display font-light text-ink-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Two Ways to Build Your Dream Pool
            </h2>
            <p className="font-body text-lg text-ink-500 max-w-2xl mx-auto">
              Whether you want the speed and low maintenance of fiberglass or the unlimited customization of concrete, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {pools.map((pool) => (
              <Link
                key={pool.slug}
                href={`/pools-spas/${pool.slug}`}
                className="group relative overflow-hidden rounded-sm bg-ink-900 block aspect-[4/3]"
              >
                <Image
                  src={pool.heroImage}
                  alt={pool.heroAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                  placeholder="blur"
                  blurDataURL={BLUR_DARK}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
                <div className="absolute inset-0 bg-ink-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="font-display font-semibold text-white text-2xl lg:text-3xl mb-2">
                    {pool.title}
                  </h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-4 max-w-md">
                    {pool.slug === 'fiberglass-pools'
                      ? 'Fast installation, low maintenance, lifetime warranty. Latham Pools authorized dealer.'
                      : 'Unlimited shapes, sizes, and finishes. Fully custom to your vision.'}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.15em] uppercase text-gold-400 font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why RNR for Pools */}
      <section className="section-pad bg-ink-950 grain">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-400/70 font-semibold mb-4">
              Why Rock N Roll Stoneworks
            </p>
            <h2
              className="font-display font-light text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              More Than a Pool Builder
            </h2>
            <p className="font-body text-white/50 text-lg leading-relaxed">
              We design and build complete outdoor living environments. Your pool is the centerpiece, but the surrounding hardscape, fire features, lighting, and landscape bring it all together.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Latham Authorized', desc: 'Full access to North America\'s largest fiberglass pool catalog with lifetime structural warranty.' },
              { title: 'Complete Design-Build', desc: 'Pool, deck, fire features, outdoor kitchen, lighting — designed and built as one cohesive environment.' },
              { title: 'Custom Design', desc: 'See your complete outdoor space in a detailed design layout before any work begins.' },
              { title: 'Belgard & ICPI Certified', desc: 'Premium paver pool decks installed to the highest industry standards.' },
              { title: 'Colorado Specialists', desc: 'We engineer for freeze-thaw, expansive soils, and altitude — not guessing, building from experience.' },
              { title: 'One Team, One Vision', desc: 'No subcontractor shuffle. Our crew handles everything from excavation to the final walkthrough.' },
            ].map((item, i) => (
              <div key={i} className="p-5 border border-white/8 rounded-sm">
                <h3 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
