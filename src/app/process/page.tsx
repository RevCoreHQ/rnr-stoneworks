import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Process — From Design to Installation | Rock N Roll Stoneworks CO',
  description:
    'Learn how Rock N Roll Stoneworks takes your outdoor project from vision to reality — free consultation, 3D design, ICPI-certified installation, and final walkthrough.',
  path: '/process',
});

const steps = [
  {
    number: '01',
    title: 'Free On-Site Consultation',
    description:
      'We visit your property in person, walk the space with you, and listen to your vision. We ask questions about how you want to use the space, your style preferences, and your budget range. There is no cost and no obligation to this visit.',
    detail:
      'Most consultations take 30–60 minutes. We like to see the space in context — how it relates to the home, where the sun hits, what drainage challenges exist, and how the project will be used day-to-day.',
  },
  {
    number: '02',
    title: '2D Layout & 3D Virtual Tour',
    description:
      'Based on your consultation, our design team creates a 2D layout showing dimensions and materials, plus a full 3D virtual tour that lets you walk through your completed project before any work begins.',
    detail:
      'The 3D design phase is where the vision becomes real. You can see exactly how the paver pattern looks, where the fire pit sits in relation to the seating wall, how the retaining wall integrates with the planting areas. If you want changes, we revise until you are satisfied — no charge for revisions.',
  },
  {
    number: '03',
    title: 'Proposal & Contract',
    description:
      'Once the design is approved, we provide a detailed written proposal with line-item costs, materials specified, and a project timeline. We do not issue vague estimates — you know exactly what you are getting and what it costs.',
    detail:
      'We require a deposit to schedule your project and order materials. The balance is due only upon satisfactory completion. We do not ask for full payment until you are happy with the finished result.',
  },
  {
    number: '04',
    title: 'Expert Installation',
    description:
      'Our ICPI-certified crew handles every phase of installation — site preparation, excavation, base compaction, material placement, and final finishing. We handle permit coordination for projects that require it.',
    detail:
      'We take base preparation seriously. The base is what determines whether a paver installation lasts 5 years or 50. We use proper aggregate depth, plate compaction at multiple stages, and edge restraints that are anchored correctly — not just spiked into soft soil.',
  },
  {
    number: '05',
    title: 'Final Walkthrough & Completion',
    description:
      'When the project is complete, we walk the finished work with you point by point. We explain any maintenance requirements, provide care documentation, and make sure you are completely satisfied before we consider the job done.',
    detail:
      'Payment in full is collected only at this final walkthrough, after you have confirmed the work meets your expectations. This is a reflection of our confidence in the quality of what we build.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: siteConfig.url },
          { name: 'Our Process', url: `${siteConfig.url}/process` },
        ])}
      />
      <div className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'Our Process', href: '/process' }]} />
          <div className="max-w-3xl mb-16">
            <p className="text-gold-700 font-medium text-sm tracking-wide uppercase mb-3">
              How We Work
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-4">
              From Vision to Reality
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed">
              Every Rock N Roll Stoneworks project follows a structured process designed to eliminate surprises, ensure your design is exactly what you want, and deliver a finished result that exceeds your expectations.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-8 items-start"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-gold-50 to-gold-100 border-2 border-gold-200 flex items-center justify-center shadow-panel shrink-0">
                  <span className="text-xl font-display font-bold gradient-text">{step.number}</span>
                </div>
                <div className="bg-white rounded-2xl border border-cream-200 shadow-panel p-6 lg:p-8">
                  <h2 className="text-2xl font-display font-bold text-ink-900 mb-3">
                    {step.title}
                  </h2>
                  <p className="text-ink-700 leading-relaxed mb-4">{step.description}</p>
                  <p className="text-sm text-ink-400 leading-relaxed border-t border-cream-200 pt-4">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        headline="Ready to Start Your Project?"
        description="The first step is a free on-site consultation. No pressure, no obligation — just a conversation about what you want to build."
      />
    </>
  );
}
