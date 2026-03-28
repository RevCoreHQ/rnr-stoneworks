import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Hardscape FAQ | Rock N Roll Stoneworks Lafayette CO',
  description:
    'Answers to common questions about paver installation, pricing, timelines, and guarantees. Rock N Roll Stoneworks, Lafayette CO.',
  path: '/faq',
});

const faqs = [
  {
    question: 'Are you a Belgard authorized contractor?',
    answer:
      'Yes. Rock N Roll Stoneworks is a Belgard Authorized Contractor and Reseller. We have completed Belgard\'s certification program and maintain the standards required to offer Belgard\'s lifetime material warranties on qualifying installations.',
  },
  {
    question: 'What is an ICPI certified installer?',
    answer:
      'ICPI stands for Interlocking Concrete Pavement Institute. ICPI certification is the recognized industry credential for professional paver installers. It covers design, base preparation, installation techniques, and drainage, the factors that determine whether a paver installation lasts decades or fails in a few years.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. We provide free on-site consultations and detailed written estimates for all projects in our service area. There is no obligation to proceed.',
  },
  {
    question: 'Can I see a design before you start?',
    answer:
      'Yes. We provide a detailed design layout of your project before construction begins. You review, revise, and approve the design at no cost.',
  },
  {
    question: 'When do I pay?',
    answer:
      'We require a deposit to schedule your project and order materials. Full payment is due only upon satisfactory completion of the project, after you have done a final walkthrough with us and confirmed the work meets your expectations.',
  },
  {
    question: 'What is your guarantee?',
    answer:
      'Rock N Roll Stoneworks provides a 2-year workmanship guarantee on all installations. This covers any defect in our installation process or technique. Belgard material warranties (including lifetime warranties on qualifying products) are separate and additional.',
  },
  {
    question: 'How long does a paver installation take?',
    answer:
      'Most paver projects take three to seven days depending on size and complexity. Larger projects with multiple elements, paver patio, retaining walls, fire pit, and kitchen, may take two to three weeks. We provide a specific timeline in your written proposal.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the entire Colorado Front Range including Denver, Boulder, Highlands Ranch, Littleton, Aurora, Lakewood, Lafayette, Erie, Westminster, Broomfield, Fort Collins, Loveland, and more. Contact us to confirm availability for your specific location.',
  },
  {
    question: 'Do you handle permits?',
    answer:
      'Yes. For projects that require permits, retaining walls over certain heights, gas connections, decks, and structural elements, Rock N Roll Stoneworks researches requirements, prepares documentation, and manages the permit process.',
  },
  {
    question: 'Can I add to my project later?',
    answer:
      'Yes. We design projects with future phases in mind when you let us know. A fire pit area can be designed to integrate with an outdoor kitchen you add the following year. A paver patio can be extended without tearing out existing work if designed correctly from the start.',
  },
  {
    question: 'Do pavers crack like concrete?',
    answer:
      'Individual pavers can crack, but unlike poured concrete, a cracked paver can be lifted and replaced without disturbing surrounding units. More importantly, the interlocking system is designed to flex with ground movement, the most common cause of concrete cracking in Colorado\'s freeze-thaw climate.',
  },
  {
    question: 'Is artificial turf appropriate for Colorado\'s climate?',
    answer:
      'Yes. Premium artificial turf is engineered for UV resistance and temperature swings. Colorado\'s dry climate actually minimizes some maintenance concerns common in wetter regions. We source products specifically rated for the Colorado Front Range environment.',
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'FAQ', url: `${siteConfig.url}/faq` },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="section-pad pb-0 relative overflow-hidden grain-light">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
          <div className="mb-4">
            <p className="text-gold-700 font-medium text-sm tracking-wide uppercase mb-3">
              Got Questions?
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-ink-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed">
              Answers to the most common questions about paver installation, hardscape construction, our process, and working with Rock N Roll Stoneworks.
            </p>
          </div>
        </div>
      </div>

      <FAQAccordion faqs={faqs} />

      <CTASection />
    </>
  );
}
