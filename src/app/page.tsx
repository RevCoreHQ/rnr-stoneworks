import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { CredentialsTicker } from '@/components/sections/CredentialsTicker';
import { EditorialIntro } from '@/components/sections/EditorialIntro';
import { SelectedWorks } from '@/components/sections/SelectedWorks';
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

const services = [
  { num: '01', title: 'Paver Installations', sub: 'Driveways · Patios · Walkways', href: '/services/paver-installations' },
  { num: '02', title: 'Retaining Walls', sub: 'Structural & Decorative Systems', href: '/services/retaining-walls' },
  { num: '03', title: 'Fire Pits & Fireplaces', sub: 'Custom Fire Features', href: '/services/fire-pits-fireplaces' },
  { num: '04', title: 'Outdoor Kitchens', sub: 'Full Build-Outs', href: '/services/outdoor-kitchens' },
  { num: '05', title: 'Water Features', sub: 'Waterfalls · Fountains · Ponds', href: '/services/water-features' },
  { num: '06', title: 'Outdoor Lighting', sub: 'LED Architectural Lighting', href: '/services/outdoor-lighting' },
  { num: '07', title: 'Artificial Turf', sub: 'Premium Synthetic Grass', href: '/services/artificial-turf' },
  { num: '08', title: 'Stamped Concrete', sub: 'Decorative Concrete Surfaces', href: '/services/stamped-concrete' },
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
      <Hero
        headline="Luxury Outdoor Living, Crafted for Colorado"
        subheadline="Belgard Authorized · Lafayette, CO"
        description="Complete design–build for paver installations, fire features, outdoor kitchens, water elements, and hardscape environments across the Colorado Front Range."
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
      />

      <CredentialsTicker />

      <EditorialIntro />

      <SelectedWorks />

      {/* Services — elegant numbered list */}
      <section className="section-pad bg-cream-50">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-2">
              <p className="label mb-6">What We Build</p>
              <h2
                className="font-display font-light text-ink-900 leading-[1.08]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                Every element of a refined outdoor environment.
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-8 font-body text-[12px] tracking-[0.15em] uppercase font-semibold text-ink-900 hover-gold-line pb-0.5"
              >
                All Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-3">
              {services.map((s, i) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex items-center justify-between py-5 border-b border-gold-100 hover:border-gold-300 transition-colors duration-300"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-display text-xl font-light text-gold-300 w-9 shrink-0">{s.num}</span>
                    <div>
                      <p className="font-body font-semibold text-ink-900 group-hover:text-gold-700 transition-colors">{s.title}</p>
                      <p className="font-body text-ink-400 text-sm">{s.sub}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold-400 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      <ProcessSteps />

      <TestimonialCards />

      <FAQAccordion faqs={homeFaqs} title="Frequently Asked Questions" subtitle="Common Questions" />

      <CTASection />
    </>
  );
}
