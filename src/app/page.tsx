import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { CredentialsTicker } from '@/components/sections/CredentialsTicker';
import { EditorialIntro } from '@/components/sections/EditorialIntro';
import { SelectedWorks } from '@/components/sections/SelectedWorks';
import { DesignVisualizationTeaser } from '@/components/sections/DesignVisualizationTeaser';
import { BelgardFeature } from '@/components/sections/BelgardFeature';
import { FeaturedServicesGrid } from '@/components/sections/FeaturedServicesGrid';
import { StatsBar } from '@/components/sections/StatsBar';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { LatestBlogSection } from '@/components/sections/LatestBlogSection';
import { InstagramFeed } from '@/components/sections/InstagramFeed';
import { BrandLongform } from '@/components/sections/BrandLongform';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema, webSiteSchema, faqSchema, reviewSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Front Range Pool & Hardscape Builder | Longmont-Based Rock N Roll Stoneworks',
  description:
    'Longmont outdoor design-build: pools, spas, Belgard hardscape, kitchens, and full-yard living across the Front Range from Fort Collins through Boulder County and the north Denver metro. Free on-site consults.',
  path: '/',
  keywords: [
    'hardscape contractor Longmont',
    'pool builder Boulder County',
    'Belgard paver installer Lafayette Erie',
    'outdoor kitchen Westminster Broomfield',
    'fiberglass pool Front Range',
  ],
});

const homeReviews = [
  { author: 'Tyra Ware', quote: 'Both my husband and I are extremely glad we picked Rock N Roll Stoneworks for our outdoor project. Jordan and Jason were a pleasure to work with from the planning of the design details to the completed backyard of our dreams.', rating: 5, date: '2020-08-15' },
  { author: 'Sara Seitzman Hazard', quote: 'We are so thrilled with our new patio! These guys did a great job and were a pleasure to work with. We\'ve already had so many compliments from neighbors and friends.', rating: 5, date: '2022-08-10' },
  { author: 'Cindy Anderson Fox', quote: 'Rock n Roll Stoneworks just installed a stunning new paver stairway and patio in my back yard and I could not be more thrilled! The workmanship, attention to detail, and beauty of the finished product is second to none.', rating: 5, date: '2019-08-20' },
  { author: 'Rebecca Staley', quote: 'Contracted with Rock n Roll Stoneworks for a large project that included driveway, all walkways, front porch and back patio. Jordan\'s expertise was invaluable for design and materials selection. Results exceeded our expectations.', rating: 5, date: '2019-01-15' },
  { author: 'Kris Burneson Hodgson', quote: 'Jordan had the best ideas for the shape of our patio and we drew it all out and loved it. They have an awesome crew and they work so hard. We couldn\'t be happier, it\'s beautiful.', rating: 5, date: '2019-08-22' },
];

const homeFaqs = [
  {
    question: 'What certifications do you hold?',
    answer:
      'We are a Belgard Authorized Contractor, ICPI Certified Installer, and Latham Pools Authorized Dealer. These certifications mean we meet the highest industry standards for both hardscape and pool construction.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. Every project begins with a free consultation where we visit your property, listen to your vision, and provide a detailed estimate. There is no obligation to proceed.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Longmont and focus on the Colorado Front Range: Boulder County (Boulder, Lafayette, Erie, Louisville, Superior, Longmont), Fort Collins and Loveland, and the north Denver metro including Westminster, Thornton, Northglenn, Brighton, Broomfield, and Denver proper. We also work select south-metro projects in Aurora, Lakewood, Highlands Ranch, and Littleton. Contact us to confirm availability for your address.',
  },
  {
    question: 'Can I see a design before you start building?',
    answer:
      'Yes. We provide a detailed design layout of your project before construction begins. You review, revise, and approve the design at no cost before we start.',
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
      <JsonLd data={[organizationSchema(), webSiteSchema(), faqSchema(homeFaqs), ...reviewSchema(homeReviews)]} />

      <Hero
        headline={`Luxury Outdoor Living,
Crafted for Colorado`}
        subheadline={`Custom Pools · Spas · Stonework
Boulder County & the Front Range`}
        subheadlineWide="Custom Pools · Spas · Stonework · Boulder County & the Front Range"
        description="Single-contract outdoor design-build: pools, spas, Belgard hardscape, fire, kitchens, and full-yard living, phased when it helps and engineered for Colorado freeze-thaw, UV, and Front Range soils from Longmont."
        backgroundImage="https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69cbe3ac75f2f8fe39d9b06d.png"
        backgroundVideo="https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69cbe3675ac7f358f6669926.mp4"
      />

      {/* 1. Immediate credibility band right under hero */}
      <CredentialsTicker />

      {/* 2. Single editorial intro: who we are + who we're built for */}
      <EditorialIntro />

      {/* 3. Show the work first */}
      <SelectedWorks />

      {/* 4. The design tool that gets clients to commit */}
      <DesignVisualizationTeaser />

      {/* 5. Quiet, narrow credibility moment */}
      <BelgardFeature />

      {/* 6. Six flagship offerings as a 3x2 grid (full catalog on /services) */}
      <FeaturedServicesGrid />

      {/* 7. Numeric proof */}
      <StatsBar />

      {/* 8. How we work */}
      <ProcessSteps />

      {/* 9. Voices */}
      <TestimonialCards />

      {/* 10. Resources */}
      <LatestBlogSection />

      {/* 11. Live field photos */}
      <InstagramFeed />

      {/* 12. Compressed SEO long-form (replaces inline text walls) */}
      <BrandLongform />

      {/* 13. Top objections answered */}
      <FAQAccordion faqs={homeFaqs} title="Frequently Asked Questions" subtitle="Common Questions" />

      {/* 14. Final ask */}
      <CTASection />
    </>
  );
}
