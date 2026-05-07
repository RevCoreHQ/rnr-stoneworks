import { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  Layers3,
  Lightbulb,
  Mountain,
  Route,
  Share2,
  Sparkles,
} from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { designVisualizationPair } from '@/data/design-visualization';
import { CTASection } from '@/components/sections/CTASection';
import { TrustStrip } from '@/components/sections/TrustStrip';

export const metadata: Metadata = generatePageMetadata({
  title: 'Outdoor Design Visualization & 3D Concepts | Rock N Roll Stoneworks Colorado',
  description:
    'Photorealistic backyard renderings and before/after concepts for Colorado pools, hardscape, and full-yard design-build. See the vision before construction.',
  path: '/design-visualization',
  keywords: [
    'outdoor design visualization Colorado',
    'backyard 3D rendering pool patio',
    'design build hardscape Longmont',
    'Colorado outdoor living concept',
  ],
});

const pillars = [
  {
    icon: Compass,
    title: 'One shared picture',
    body: 'Pool edge, coping, cabana scale, gas runs, and step lighting read together so homeowners, trades, and reviewers are aligned on intent.',
  },
  {
    icon: Mountain,
    title: 'Colorado-grade context',
    body: 'Grade, drainage, freeze-thaw, setbacks, and utility corridors show up in the model, not only after excavation when changes are expensive.',
  },
  {
    icon: Lightbulb,
    title: 'Night and dusk studies',
    body: 'We study how uplighting, path lights, water features, and interior spill read against stone and planting so the yard feels finished after dark.',
  },
  {
    icon: Share2,
    title: 'HOA-ready storytelling',
    body: 'Clear stills and walk-through style frames make it easier for associations and neighbors to understand massing, screening, and materiality.',
  },
] as const;

const deliverables = [
  'Measured base plan tied to field shots and critical dimensions',
  'Material direction: stone, paver families, decking, roof edges, metal trim',
  'Pool and spa envelope with coping, waterline tile, and deck drains coordinated to hardscape',
  'Outdoor kitchen / pavilion blocking: grill, refrigeration, sink, and electrical rough locations',
  'Lighting intent: path, step, architectural uplight, and feature accents',
  'Revision cycles while we are still in design, not after concrete is poured',
] as const;

export default function DesignVisualizationPage() {
  const { beforeSrc, afterSrc, beforeAlt, afterAlt } = designVisualizationPair;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Design visualization', url: `${siteConfig.url}/design-visualization` },
        ])}
      />

      <div className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Design visualization', href: '/design-visualization' }]} />

          <div className="max-w-3xl mb-10 lg:mb-12">
            <p className="text-gold-700 font-medium text-sm tracking-wide uppercase mb-3">Capabilities</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-6 leading-tight">
              Design visualization that sells the plan, and then we build it for real.
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed mb-4">
              Rock N Roll Stoneworks invests in modern visualization workflows, including app-assisted, photoreal
              renderings, so your outdoor program is understood as a single system before permits and excavation lock
              in decisions.
            </p>
            <p className="text-lg text-ink-600 leading-relaxed">
              On Colorado lots, that means pool and spa envelopes, outdoor kitchens, retaining walls, fire, lighting,
              and planting are composed together, not as unrelated line drawings that only meet in the field.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16 lg:mb-20">
            <div className="rounded-sm border border-cream-200 bg-white p-1.5 sm:p-2 shadow-panel">
              <BeforeAfter
                key={afterSrc}
                before={beforeSrc}
                after={afterSrc}
                alt={`${beforeAlt} ${afterAlt}`}
              />
            </div>
          </div>

          <div className="border-t border-cream-200 pt-14 lg:pt-16 mb-16 lg:mb-20">
            <div className="max-w-3xl mb-10">
              <p className="font-display text-[11px] tracking-[0.18em] uppercase text-gold-700 mb-2">
                Why it matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink-900 mb-4">
                Fewer surprises when heavy equipment arrives
              </h2>
              <p className="text-lg text-ink-600 leading-relaxed">
                Visualization is how we pressure-test circulation, views, shade, and night lighting while changes are
                still a design-hours conversation, not a change order on a locked permit set.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-cream-200 bg-white p-6 lg:p-8 shadow-panel flex gap-4"
                >
                  <div className="shrink-0 w-11 h-11 rounded-full bg-gold-50 border border-gold-200/80 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink-900 mb-2">{title}</h3>
                    <p className="font-body text-sm text-ink-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 lg:mb-20">
            <div>
              <p className="font-display text-[11px] tracking-[0.18em] uppercase text-gold-700 mb-2">
                Inside a visualization package
              </p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink-900 mb-4">
                What we typically deliver during design
              </h2>
              <p className="text-ink-600 leading-relaxed mb-6">
                Exact deliverables scale with project complexity. Estate-scale outdoor programs with pools, structures,
                and multi-zone hardscape receive the deepest studies; simpler hardscape-forward scopes may need fewer
                frames, but the same discipline around coordination.
              </p>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-700 text-sm leading-relaxed">
                    <Sparkles className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gold-200/80 bg-gradient-to-br from-gold-50/90 to-white p-6 sm:p-8 shadow-panel">
              <div className="flex items-start gap-3 mb-4">
                <Layers3 className="w-6 h-6 text-gold-700 shrink-0" aria-hidden />
                <div>
                  <p className="font-display text-[11px] tracking-[0.18em] uppercase text-gold-800 mb-1">
                    Program scale
                  </p>
                  <h3 className="font-display text-xl font-bold text-ink-900 mb-3">
                    From full-yard refresh to estate-scale outdoor campuses
                  </h3>
                  <p className="font-body text-ink-700 text-sm leading-relaxed mb-4">
                    The integrated programs we visualize most often sit in the roughly{' '}
                    <strong className="text-ink-900">$250k–$1M+</strong> range because they bundle pools, spas, major
                    hardscape, structures, lighting, and drainage. Your proposal is always engineered to your site, and this
                    band describes the class of work where deep visualization pays the highest dividend.
                  </p>
                  <p className="font-body text-sm text-ink-500 leading-relaxed mb-5">
                    Ready for the field-to-permit story? Our{' '}
                    <Link href="/process" className="text-gold-800 font-medium underline hover:text-gold-950">
                      design-build process
                    </Link>{' '}
                    walks consultation through installation and walkthrough.
                  </p>
                  <Link
                    href="/process"
                    className="inline-flex items-center gap-2 font-display text-[11px] font-semibold tracking-[0.14em] uppercase text-gold-800 hover:text-gold-950"
                  >
                    <Route className="w-4 h-4" aria-hidden />
                    See how we work
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <div className="rounded-2xl border border-cream-200 bg-white p-6 lg:p-7 shadow-panel">
              <p className="font-display text-[11px] tracking-[0.18em] uppercase text-gold-700 mb-2">Document</p>
              <p className="font-body text-ink-700 text-sm leading-relaxed">
                We capture slopes, setbacks, views, sun path, existing utilities, and how you actually use the yard
                today, and then translate that into a coordinated model.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200 bg-white p-6 lg:p-7 shadow-panel">
              <p className="font-display text-[11px] tracking-[0.18em] uppercase text-gold-700 mb-2">Visualize</p>
              <p className="font-body text-ink-700 text-sm leading-relaxed">
                Renders become the common language between you, our crew, engineers, and inspectors, so materiality,
                edges, and lighting are all visible before we mobilize.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200 bg-white p-6 lg:p-7 shadow-panel">
              <p className="font-display text-[11px] tracking-[0.18em] uppercase text-gold-700 mb-2">Build</p>
              <p className="font-body text-ink-700 text-sm leading-relaxed">
                The same team that owns the visualization owns the permit path and ICPI-grade installation, so what we
                sell in concept is what we sequence in the field.
              </p>
            </div>
          </div>

          <div className="max-w-3xl border-t border-cream-200 pt-12 lg:pt-14">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 mb-4">Who this is for</h2>
            <ul className="list-disc pl-5 space-y-3 font-body text-ink-600 leading-relaxed mb-10">
              <li>
                Homeowners planning a <strong className="text-ink-800">full-yard</strong> or estate-scale outdoor
                investment where pool, hardscape, structure, and utilities must land once.
              </li>
              <li>
                Projects that need HOA or architectural review, and benefit from clear massing and material stories.
              </li>
              <li>
                Anyone who wants decisions made <em>before</em> excavation, especially on challenging Front Range
                terrain.
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-white font-display text-[11px] font-semibold tracking-[0.14em] uppercase rounded-sm hover:bg-gold-400 transition-colors"
              >
                Start with a free on-site consult
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-6 py-3 border border-cream-300 text-ink-800 font-display text-[11px] font-semibold tracking-[0.14em] uppercase rounded-sm hover:border-gold-400 hover:text-gold-900 transition-colors"
              >
                View completed work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TrustStrip />

      <CTASection
        headline="Ready to see your yard in high fidelity?"
        description="Bring your ideas, and we will translate them into buildable concepts and a transparent proposal."
      />
    </>
  );
}
