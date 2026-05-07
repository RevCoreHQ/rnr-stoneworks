import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarClock, ClipboardCheck, Hammer, MessageCircle, Wallet } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, howToSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Design & Build Process | Rock N Roll Stoneworks',
  description:
    'Outdoor design-build in Colorado: consultation, photorealistic concepts, permits, installation, and walkthrough. See how Rock N Roll Stoneworks delivers your project.',
  path: '/process',
});

const steps = [
  {
    number: '01',
    title: 'Free On-Site Consultation',
    description:
      'We visit your property in person, walk the space with you, and listen to your vision. We ask questions about how you want to use the space, your style preferences, and your budget range. There is no cost and no obligation to this visit.',
    detail:
      'Most consultations take 30–60 minutes. We like to see the space in context, how it relates to the home, where the sun hits, what drainage challenges exist, and how the project will be used day-to-day.',
  },
  {
    number: '02',
    title: 'Design, layout & photorealistic visualization',
    description:
      'We translate your consultation into dimensioned layouts, material palettes, and, when it helps decision-making, app-assisted photorealistic renderings of pools, hardscape, outdoor structures, and lighting so you can preview an integrated backyard before permits and excavation.',
    detail:
      'Visualization is a communication tool: engineering, HOA, and field conditions can adjust details, but you still see how the pool edge meets the patio, how a cabana reads against the home, and how night lighting feels on the slope. Revisions stay in design until you approve the plan.',
  },
  {
    number: '03',
    title: 'Proposal & Contract',
    description:
      'Once the design is approved, we provide a detailed written proposal with line-item costs, materials specified, and a project timeline. You know exactly what you are getting and what it costs.',
    detail:
      'We require a deposit to schedule your project and order materials. The balance is due only upon satisfactory completion, and we do not ask for full payment until you are happy with the finished result.',
  },
  {
    number: '04',
    title: 'Expert Installation',
    description:
      'Our ICPI-certified crew handles every phase of installation: site preparation, excavation, base compaction, material placement, and final finishing. We coordinate permits and inspections where required.',
    detail:
      'We take base preparation seriously. Proper aggregate depth, plate compaction at multiple stages, and correctly anchored edge restraints are what separate a paver installation that lasts years from one that lasts decades.',
  },
  {
    number: '05',
    title: 'Final Walkthrough & Completion',
    description:
      'When the project is complete, we walk the finished work with you point by point. We explain maintenance, provide care documentation, and confirm you are satisfied before we consider the job done.',
    detail:
      'Payment in full is collected only at this final walkthrough, after you have confirmed the work meets your expectations, which is a reflection of our confidence in what we build.',
  },
] as const;

const atAGlance = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    body: 'Complimentary on-site visit, no pressure, clear next steps.',
  },
  {
    icon: CalendarClock,
    title: 'Design cadence',
    body: 'Structured milestones so approvals, permits, and procurement stay aligned.',
  },
  {
    icon: Hammer,
    title: 'Field-led install',
    body: 'ICPI-certified crews with Belgard and pool partners sequenced under one roof.',
  },
  {
    icon: Wallet,
    title: 'Balance at close',
    body: 'Final payment after walkthrough, not before you sign off.',
  },
] as const;

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Our Process', url: `${siteConfig.url}/process` },
          ]),
          howToSchema(
            'How Rock N Roll Stoneworks Builds Your Outdoor Space',
            'Our 5-step process from free consultation through visualization, permits, installation, and final walkthrough, built for Colorado outdoor design-build.',
            steps.map((s) => ({ title: s.title, description: s.description }))
          ),
        ]}
      />

      <div className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Our Process', href: '/process' }]} />

          <div className="max-w-3xl mb-12 lg:mb-14">
            <p className="text-gold-700 font-medium text-sm tracking-wide uppercase mb-3">How we work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-5 leading-tight">
              From vision to reality, without losing the thread
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed mb-4">
              Every Rock N Roll Stoneworks project follows a structured path: measure the site, design with clarity,
              permit and procure honestly, build to ICPI-grade standards, and close only when you are satisfied.
            </p>
            <p className="text-lg text-ink-600 leading-relaxed">
              Large Colorado outdoor programs need one continuous line from concept through engineering, inspections,
              and trade coordination. We keep that line under one design-build team so your plan, permit set, and
              field work stay aligned.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-14 lg:mb-16">
            {atAGlance.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-cream-200 bg-white p-5 shadow-panel flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200/80 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold-700" aria-hidden />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-ink-900 mb-1">{title}</p>
                  <p className="font-body text-xs text-ink-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mb-14 lg:mb-16 rounded-2xl border border-gold-200/80 bg-gradient-to-br from-gold-50/90 to-white p-6 sm:p-8 lg:p-10 shadow-panel">
            <p className="font-display text-[11px] tracking-[0.18em] uppercase text-gold-800 mb-2">
              Design → permit → build → closeout
            </p>
            <p className="font-body text-ink-700 leading-relaxed mb-4 text-base">
              Pools, spas, outdoor kitchens, retaining walls, lighting, and drainage rarely succeed as isolated
              scopes, and they succeed when one team sequences them against the same drawings and the same field reality.
            </p>
            <p className="font-body text-sm text-ink-500 leading-relaxed">
              Want to see how we communicate complex yards before shovels hit the ground?{' '}
              <Link href="/design-visualization" className="text-gold-800 font-medium underline hover:text-gold-950">
                Explore design visualization
              </Link>
              . Then come back here to see how it plugs into permitting and construction.
            </p>
          </div>

          <div className="relative mb-16 lg:mb-20">
            <div
              className="hidden lg:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-gold-200 via-gold-200/60 to-gold-100 pointer-events-none"
              aria-hidden
            />

            <div className="space-y-10 lg:space-y-12">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-10 items-start relative"
                >
                  <div className="flex lg:block justify-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-200 ring-4 ring-white flex items-center justify-center shadow-panel shrink-0 relative z-10">
                      <span className="text-xl font-display font-bold gradient-text">{step.number}</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-cream-200 shadow-panel p-6 lg:p-8">
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-ink-900 mb-3">{step.title}</h2>
                    <p className="text-ink-700 leading-relaxed mb-4">{step.description}</p>
                    <p className="text-sm text-ink-500 leading-relaxed border-t border-cream-200 pt-4 flex gap-2">
                      <ClipboardCheck className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" aria-hidden />
                      <span>{step.detail}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 border-t border-cream-200 pt-12 lg:pt-14">
            <div>
              <h2 className="font-display text-xl font-bold text-ink-900 mb-3">How to prepare for your consult</h2>
              <ul className="list-disc pl-5 space-y-2 font-body text-ink-600 text-sm leading-relaxed">
                <li>Inspiration images or a short list of must-haves (pool size, kitchen, fire, shade).</li>
                <li>Any HOA guidelines, survey, or plot plan you already have.</li>
                <li>Rough sense of investment comfort, and we will translate that into realistic phasing options.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-ink-900 mb-3">After the walkthrough</h2>
              <p className="font-body text-ink-600 text-sm leading-relaxed mb-3">
                We document care for pavers, stone, water features, and seasonal shutdowns where applicable. Our
                workmanship is backed by a two-year guarantee, and Belgard materials carry manufacturer warranty
                coverage, and details appear in your contract packet.
              </p>
              <p className="font-body text-ink-600 text-sm leading-relaxed">
                Questions later? You are working with a Longmont-based crew that lives in the same communities we
                build. Call <a href={`tel:${siteConfig.phoneRaw}`} className="text-gold-800 underline hover:text-gold-950">{siteConfig.phone}</a> or{' '}
                <Link href="/contact" className="text-gold-800 underline hover:text-gold-950">
                  reach out online
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <TrustStrip />

      <CTASection
        headline="Ready to start your project?"
        description="The first step is a free on-site consultation. No pressure, just a clear conversation about what you want to build."
      />
    </>
  );
}
