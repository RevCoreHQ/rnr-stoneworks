import Link from 'next/link';
import { siteConfig } from '@/data/site-config';

/**
 * Compressed, server-rendered SEO long-form. Crawlers see the full inline
 * narrative, users see a tight 2-column block with eyebrow + intro + four
 * collapsed pillars (no JS, just <details> for optional expand).
 */
export function BrandLongform() {
  return (
    <section className="section-pad bg-cream-50 topo-lines relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="label mb-5">About our company</p>
            <h2
              className="font-display font-light text-ink-900 leading-[1.06] mb-5"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
            >
              Colorado&apos;s custom pool, spa &amp; outdoor living contractor.
            </h2>
            <p className="text-ink-500 font-body text-[14.5px] leading-relaxed mb-5">
              Rock N Roll Stoneworks is a full-service custom pool, spa, and outdoor living contractor based in Longmont. We design and build residential outdoor environments across the Colorado Front Range, from custom fiberglass and concrete pools to complete hardscape, fire, kitchens, lighting, and drainage.
            </p>
            <p className="text-ink-500 font-body text-[14.5px] leading-relaxed">
              Every project starts with a free on-site consult. From there, our design team produces a detailed layout so you can see the finished project before we break ground. We handle permits, material sourcing, install, and final walkthrough under one contract.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            <details className="group rounded-sm border border-gold-200/60 bg-white/70 backdrop-blur-[1px] open:bg-white open:shadow-panel transition-all">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-5 lg:px-6 py-4">
                <span className="font-display font-light text-ink-900 text-lg">Our services</span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-600 group-open:opacity-0 transition-opacity">
                  Expand
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-600 opacity-0 group-open:opacity-100 -ml-[60px] transition-opacity">
                  Collapse
                </span>
              </summary>
              <div className="px-5 lg:px-6 pb-5 space-y-3 text-ink-500 font-body text-[13.5px] leading-relaxed">
                <p>
                  We install <Link href="/services/paver-installations" className="link-gold">Belgard paver patios, driveways, and walkways</Link> with lifetime material warranties and ICPI-grade base prep. Custom <Link href="/services/fire-pits-fireplaces" className="link-gold">fire pits and fireplaces</Link> use Warming Trends burners (hand-lit, electronic, or Bluetooth start). Our <Link href="/services/outdoor-kitchens" className="link-gold">outdoor kitchens</Link> range from compact grill stations to full pavilion suites.
                </p>
                <p>
                  We also build <Link href="/services/water-features" className="link-gold">water features</Link>, <Link href="/services/retaining-walls-stairs" className="link-gold">structural retaining walls and stairs</Link>, <Link href="/services/outdoor-lighting" className="link-gold">low-voltage architectural lighting</Link>, <Link href="/services/artificial-turf" className="link-gold">artificial turf</Link>, <Link href="/services/decks-pergolas" className="link-gold">decks and pergolas</Link>, <Link href="/services/stamped-concrete" className="link-gold">stamped concrete</Link>, <Link href="/services/stone-veneers" className="link-gold">stone veneers</Link>, and <Link href="/pools-spas/fiberglass-pools" className="link-gold">Latham fiberglass pools</Link> as a Latham Pools Authorized Dealer. <Link href="/services" className="link-gold">View all hardscape services</Link>.
                </p>
              </div>
            </details>

            <details className="group rounded-sm border border-gold-200/60 bg-white/70 backdrop-blur-[1px] open:bg-white open:shadow-panel transition-all">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-5 lg:px-6 py-4">
                <span className="font-display font-light text-ink-900 text-lg">Service areas</span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-600 group-open:opacity-0 transition-opacity">
                  Expand
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-600 opacity-0 group-open:opacity-100 -ml-[60px] transition-opacity">
                  Collapse
                </span>
              </summary>
              <div className="px-5 lg:px-6 pb-5 space-y-3 text-ink-500 font-body text-[13.5px] leading-relaxed">
                <p>
                  We serve the Colorado Front Range, including <Link href="/service-areas/denver" className="link-gold">Denver</Link>, <Link href="/service-areas/boulder" className="link-gold">Boulder</Link>, <Link href="/service-areas/lafayette" className="link-gold">Lafayette</Link>, <Link href="/service-areas/erie" className="link-gold">Erie</Link>, <Link href="/service-areas/fort-collins" className="link-gold">Fort Collins</Link>, <Link href="/service-areas/highlands-ranch" className="link-gold">Highlands Ranch</Link>, <Link href="/service-areas/lakewood" className="link-gold">Lakewood</Link>, <Link href="/service-areas/littleton" className="link-gold">Littleton</Link>, and <Link href="/service-areas/aurora" className="link-gold">Aurora</Link>. <Link href="/service-areas" className="link-gold">All service areas</Link>.
                </p>
                <p>
                  We know the soil conditions, permit paths, HOA processes, and climate realities that shift between Lafayette&apos;s expansive clay, Boulder&apos;s impervious-surface limits, and Erie&apos;s newer subdivision codes. Local detail means your build is engineered correctly for your specific lot.
                </p>
              </div>
            </details>

            <details className="group rounded-sm border border-gold-200/60 bg-white/70 backdrop-blur-[1px] open:bg-white open:shadow-panel transition-all">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-5 lg:px-6 py-4">
                <span className="font-display font-light text-ink-900 text-lg">Design &amp; build process</span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-600 group-open:opacity-0 transition-opacity">
                  Expand
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-600 opacity-0 group-open:opacity-100 -ml-[60px] transition-opacity">
                  Collapse
                </span>
              </summary>
              <div className="px-5 lg:px-6 pb-5 space-y-3 text-ink-500 font-body text-[13.5px] leading-relaxed">
                <p>
                  Every project follows a five-step process: <Link href="/process" className="link-gold">free on-site consult</Link>, design layout with unlimited revisions, written line-item proposal, ICPI-certified install, and a final walkthrough before final payment.
                </p>
                <p>
                  We take base preparation seriously, because the base determines whether a paver installation lasts five years or fifty. We use proper aggregate depth, plate compaction at multiple stages, and correctly anchored edge restraints. The project concludes with a walkthrough where you confirm the work meets your expectations before final payment.
                </p>
              </div>
            </details>

            <details className="group rounded-sm border border-gold-200/60 bg-white/70 backdrop-blur-[1px] open:bg-white open:shadow-panel transition-all">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-5 lg:px-6 py-4">
                <span className="font-display font-light text-ink-900 text-lg">Why homeowners choose us</span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-600 group-open:opacity-0 transition-opacity">
                  Expand
                </span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-600 opacity-0 group-open:opacity-100 -ml-[60px] transition-opacity">
                  Collapse
                </span>
              </summary>
              <div className="px-5 lg:px-6 pb-5 space-y-3 text-ink-500 font-body text-[13.5px] leading-relaxed">
                <p>
                  We hold the industry&apos;s top certifications: Belgard Authorized, ICPI Certified, and Latham Pools Authorized Dealer. Every project is backed by our 2-year workmanship guarantee plus manufacturer warranties. Final payment is not collected until the project passes your walkthrough.
                </p>
                <p>
                  Our team has completed hundreds of residential projects across the Front Range since 2017, from custom pools and spas to complete backyard transformations with kitchens, fire features, and lighting. <Link href="/contact" className="link-gold">Contact us for a free estimate</Link> or call <a href={`tel:${siteConfig.phoneRaw}`} className="link-gold">{siteConfig.phone}</a>.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
