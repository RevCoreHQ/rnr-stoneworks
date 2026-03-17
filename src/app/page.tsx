import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
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
import { InstagramFeed } from '@/components/sections/InstagramFeed';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema, webSiteSchema, faqSchema, reviewSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Hardscape Contractor Lafayette CO | Rock N Roll Stoneworks',
  description:
    'Custom pavers, fire pits, outdoor kitchens, and hardscape in Lafayette, Erie, and Boulder CO. Belgard authorized. Free estimates. (303) 587-3035',
  path: '/',
});

const homeReviews = [
  { author: 'Tyra Ware', quote: 'Both my husband and I are extremely glad we picked Rock N Roll Stoneworks for our outdoor project. Jordan and Jason were a pleasure to work with from the planning of the design details to the completed backyard of our dreams.', rating: 5, date: '2020-08-15' },
  { author: 'Sara Seitzman Hazard', quote: 'We are so thrilled with our new patio! These guys did a great job and were a pleasure to work with. We\'ve already had so many compliments from neighbors and friends.', rating: 5, date: '2022-08-10' },
  { author: 'Cindy Anderson Fox', quote: 'Rock n Roll Stoneworks just installed a stunning new paver stairway and patio in my back yard and I could not be more thrilled! The workmanship, attention to detail, and beauty of the finished product is second to none.', rating: 5, date: '2019-08-20' },
  { author: 'Rebecca Staley', quote: 'Contracted with Rock n Roll Stoneworks for a large project that included driveway, all walkways, front porch and back patio. Jordan\'s expertise was invaluable for design and materials selection. Results exceeded our expectations.', rating: 5, date: '2019-01-15' },
  { author: 'Kris Burneson Hodgson', quote: 'Jordan had the best ideas for the shape of our patio and we drew it all out and loved it. They have an awesome crew and they work so hard. We couldn\'t be happier — it\'s beautiful.', rating: 5, date: '2019-08-22' },
];

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
      <JsonLd data={[organizationSchema(), webSiteSchema(), faqSchema(homeFaqs), ...reviewSchema(homeReviews)]} />

      <Hero
        headline="Luxury Outdoor Living, Crafted for Colorado"
        subheadline="Belgard Authorized · Lafayette, CO"
        description="Complete design and build for paver installations, fire features, outdoor kitchens, water elements, and hardscape environments across the Colorado Front Range."
        backgroundImage="https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41c34070c5886395d2f91.png"
      />

      <CredentialsTicker />

      <EditorialIntro />

      <SelectedWorks />

      <ServicesList />

      <StatsBar />

      <ProcessSteps />

      <TestimonialCards />

      <InstagramFeed />

      {/* Server-rendered SEO content — visible to crawlers without JS */}
      <section className="section-pad bg-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink-900 mb-6">
              Colorado&apos;s Trusted Hardscape & Outdoor Living Contractor
            </h2>
            <div className="prose prose-stone prose-lg max-w-none text-ink-600 leading-relaxed space-y-5">
              <p>
                Rock N Roll Stoneworks is a full-service hardscape and outdoor living contractor based in Lafayette, Colorado. Founded by Jordan, our team specializes in transforming residential properties across the Colorado Front Range into beautiful, functional outdoor environments. We are a{' '}
                <strong>Belgard Authorized Contractor and Reseller</strong>, an <strong>ICPI Certified installer</strong>, a <strong>Latham Pools Authorized Dealer</strong>, and have been featured in <strong>Belgard Magazine</strong> for the quality of our craftsmanship.
              </p>
              <p>
                Every project starts with a free on-site consultation where we walk your property, listen to your vision, and discuss budget. From there, our design team creates a 2D layout and a full 3D virtual tour so you can see your finished project before we break ground. We handle everything from permits and material sourcing to expert installation and final walkthrough.
              </p>

              <h3 className="text-2xl font-display font-bold text-ink-900 mt-10 mb-4">Our Hardscape & Outdoor Living Services</h3>
              <p>
                We offer a comprehensive range of services to create the outdoor space you have been imagining. Our <Link href="/services/paver-installations" className="text-gold-700 hover:underline">paver installations</Link> include driveways, walkways, patios, and full backyard hardscape using premium Belgard products with lifetime material warranties. Custom <Link href="/services/fire-pits-fireplaces" className="text-gold-700 hover:underline">fire pits and fireplaces</Link> extend your outdoor season with Warming Trends burner systems available in hand-lit, electronic, or Bluetooth remote start options.
              </p>
              <p>
                Our <Link href="/services/outdoor-kitchens" className="text-gold-700 hover:underline">outdoor kitchens</Link> range from compact grilling stations to full cooking suites with sinks, refrigerators, and pizza ovens, all built with galvanized steel frames, granite countertops, and stone veneer facing designed for Colorado&apos;s climate. We design and install custom <Link href="/services/water-features" className="text-gold-700 hover:underline">water features</Link> including pondless waterfalls, spillways, and bubbling fountains that bring the sound and beauty of moving water to your backyard.
              </p>
              <p>
                Our <Link href="/services/retaining-walls-stairs" className="text-gold-700 hover:underline">retaining walls and stairs</Link> solve grading challenges while creating usable flat space on sloped lots, using Belgard segmental wall systems engineered for Colorado&apos;s expansive clay soils. Professional <Link href="/services/outdoor-lighting" className="text-gold-700 hover:underline">outdoor LED lighting</Link> transforms your property after dark with path lights, up-lighting, accent lighting, and task lighting for cooking areas.
              </p>
              <p>
                We also install <Link href="/services/artificial-turf" className="text-gold-700 hover:underline">artificial turf</Link> that stays green year-round with zero irrigation, build custom <Link href="/services/decks-pergolas" className="text-gold-700 hover:underline">decks and pergolas</Link> for shade and structure, pour <Link href="/services/stamped-concrete" className="text-gold-700 hover:underline">stamped concrete</Link> patios and driveways, apply <Link href="/services/stone-veneers" className="text-gold-700 hover:underline">stone veneers</Link> to fireplaces and outdoor structures, and install <Link href="/services/swimming-pools" className="text-gold-700 hover:underline">Latham fiberglass swimming pools</Link> as a Latham Pools Authorized Dealer. View all of our <Link href="/services" className="text-gold-700 hover:underline">hardscape services</Link>.
              </p>

              <h3 className="text-2xl font-display font-bold text-ink-900 mt-10 mb-4">Serving the Colorado Front Range</h3>
              <p>
                Our primary service area includes <Link href="/service-areas/lafayette" className="text-gold-700 hover:underline">Lafayette</Link>, <Link href="/service-areas/erie" className="text-gold-700 hover:underline">Erie</Link>, <Link href="/service-areas/boulder" className="text-gold-700 hover:underline">Boulder</Link>, <Link href="/service-areas/westminster" className="text-gold-700 hover:underline">Westminster</Link>, <Link href="/service-areas/longmont" className="text-gold-700 hover:underline">Longmont</Link>, and <Link href="/service-areas/firestone-frederick" className="text-gold-700 hover:underline">Firestone &amp; Frederick</Link>, Colorado. We are headquartered at 12420 Arapahoe Road in Lafayette and our crews work throughout Boulder County and the surrounding Front Range communities. See all of our <Link href="/service-areas" className="text-gold-700 hover:underline">service areas</Link>.
              </p>
              <p>
                We know the soil conditions, permit requirements, HOA processes, and climate challenges specific to each community we serve. Lafayette&apos;s expansive clay soils require deeper aggregate bases. Boulder&apos;s building regulations demand careful impervious surface calculations. Erie&apos;s newer subdivisions need HOA-compliant designs. Our local expertise means your project is engineered correctly for your specific location.
              </p>

              <h3 className="text-2xl font-display font-bold text-ink-900 mt-10 mb-4">Our Design & Build Process</h3>
              <p>
                Every Rock N Roll Stoneworks project follows a proven five-step process designed to eliminate surprises. It begins with a <Link href="/process" className="text-gold-700 hover:underline">free on-site consultation</Link> where we walk your property, discuss your vision, and establish a realistic budget range. Next, our design team creates a detailed 2D layout showing dimensions and material selections, followed by a full 3D virtual tour that lets you walk through your completed outdoor space before any construction begins. You can request unlimited design revisions at no additional cost.
              </p>
              <p>
                Once you approve the design, we provide a written proposal with line-item pricing so you know exactly what you are getting and what it costs. Our ICPI-certified crew then handles every phase of installation, from site preparation and excavation to base compaction, material placement, and finishing. We take base preparation seriously because the base determines whether a paver installation lasts five years or fifty. We use proper aggregate depth, plate compaction at multiple stages, and correctly anchored edge restraints. The project concludes with a final walkthrough where you confirm the work meets your expectations before we collect final payment.
              </p>

              <h3 className="text-2xl font-display font-bold text-ink-900 mt-10 mb-4">Why Homeowners Choose Rock N Roll Stoneworks</h3>
              <p>
                As a Belgard Authorized Contractor, we meet Belgard&apos;s installation standards and can offer their lifetime material warranty on qualifying installations combined with our own 2-year workmanship guarantee. Our ICPI certification means our crew follows the Interlocking Concrete Pavement Institute&apos;s best practices for base preparation, edge restraint, and jointing, the industry standard that separates professional installations from amateur work.
              </p>
              <p>
                We provide a 3D virtual tour of every project so you can walk through your completed outdoor space before a single stone is placed. Revisions are unlimited and free. We do not collect final payment until the project passes your walkthrough inspection. This approach reflects our confidence in the quality of what we build and our commitment to your complete satisfaction.
              </p>
              <p>
                Our team has completed hundreds of residential hardscape projects across the Colorado Front Range since 2017. From small patio installations to complete backyard transformations including pools, kitchens, fire features, and lighting, we have the experience to handle projects of any scale. We use premium materials from trusted manufacturers, maintain clear communication throughout the build, and stand behind our work with written warranties.
              </p>

              <h3 className="text-2xl font-display font-bold text-ink-900 mt-10 mb-4">Get Started Today</h3>
              <p>
                Ready to transform your outdoor space? <Link href="/contact" className="text-gold-700 hover:underline">Contact us for a free estimate</Link> or call us directly at <a href={`tel:${siteConfig.phoneRaw}`} className="text-gold-700 hover:underline">{siteConfig.phone}</a>. There is no cost and no obligation for the initial consultation. Read our <Link href="/blog" className="text-gold-700 hover:underline">hardscape blog</Link> for guides on costs, materials, and design ideas, or browse our <Link href="/gallery" className="text-gold-700 hover:underline">project gallery</Link> to see our completed work across the Front Range. We look forward to helping you create the outdoor living space you have been imagining.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={homeFaqs} title="Frequently Asked Questions" subtitle="Common Questions" />

      <CTASection />
    </>
  );
}
