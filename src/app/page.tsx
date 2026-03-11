import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { CredentialsTicker } from '@/components/sections/CredentialsTicker';
import { EditorialIntro } from '@/components/sections/EditorialIntro';
import { SelectedWorks } from '@/components/sections/SelectedWorks';
import { ServicesList } from '@/components/sections/ServicesList';
import { StatsBar } from '@/components/sections/StatsBar';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const metadata: Metadata = generatePageMetadata({
  title: 'Rock N Roll Stoneworks | Custom Outdoor Spaces in Lafayette & Boulder, CO',
  description:
    'Custom paver installations, fire pits, outdoor kitchens, water features, and retaining walls in Lafayette, Erie, Boulder, and surrounding Colorado communities. Belgard authorized. ICPI certified. Free estimates.',
  path: '/',
});

const homeFaqs = [
  {
    question: 'Are you a Belgard authorized contractor?',
    answer:
      'Yes. Rock N Roll Stoneworks is a Belgard Authorized Contractor and Reseller. This means we have completed Belgard\'s certification program, meet their quality standards, and can offer the Belgard lifetime material warranty on qualifying installations.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. Every project begins with a free consultation where we visit your property, listen to your vision, and provide a detailed estimate. There is no obligation to proceed.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Our primary service area covers Lafayette, Erie, Boulder, Westminster, Longmont, Firestone, and Frederick, Colorado. Contact us to confirm availability for your specific location.',
  },
  {
    question: 'Can I see a design before you start building?',
    answer:
      'Yes. We provide both a 2D layout and a 3D virtual tour of your project before construction begins. You review, revise, and approve the design at no cost before we start.',
  },
  {
    question: 'What is your guarantee?',
    answer:
      'Rock N Roll Stoneworks provides a 2-year workmanship guarantee on all installations. Belgard material warranties (including lifetime warranties on qualifying products) are additional and transfer with the property.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Luxury Outdoor Living, Crafted for Colorado"
        subheadline="Belgard Authorized · Lafayette, CO"
        description="Complete design–build for paver installations, fire features, outdoor kitchens, water elements, and hardscape environments across the Colorado Front Range."
        backgroundImage="https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69aa9a13b003fa04e8de88ee.jpg"
      />

      <CredentialsTicker />

      <EditorialIntro />

      <SelectedWorks />

      <ServicesList />

      <StatsBar />

      <ProcessSteps />

      <TestimonialCards />

      <FAQAccordion faqs={homeFaqs} title="Frequently Asked Questions" subtitle="Common Questions" />

      <CTASection />
    </>
  );
}
