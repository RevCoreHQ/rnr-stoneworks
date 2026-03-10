import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, Flame, Utensils } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = generatePageMetadata({
  title: 'Rock N Roll Stoneworks | Custom Outdoor Spaces in Lafayette & Boulder, CO',
  description:
    'Custom paver installations, fire pits, outdoor kitchens, water features, and retaining walls in Lafayette, Erie, Boulder, and surrounding Colorado communities. Belgard authorized. ICPI certified. Free estimates.',
  path: '/',
});

const serviceCategories = [
  {
    icon: Layers,
    title: 'Paver & Hardscape',
    description:
      "Driveways, walkways, patios, retaining walls, and full backyard hardscape installs using Belgard paver systems, designed and built to last Colorado's climate.",
    href: '/services/paver-installations',
    features: ['Belgard Authorized', '3D Design', 'ICPI Certified', 'Full Install'],
  },
  {
    icon: Flame,
    title: 'Fire Features & Outdoor Living',
    description:
      'Custom fire pits, outdoor fireplaces, kitchens, water features, pergolas, and complete outdoor rooms that transform how you live outside.',
    href: '/services/fire-pits-fireplaces',
    features: ['Fire Pits', 'Outdoor Kitchens', 'Water Features', 'Pergolas'],
  },
  {
    icon: Utensils,
    title: 'Landscape & Lighting',
    description:
      'Artificial turf, LED outdoor lighting, stamped concrete, stone veneers, and swimming pools through our sister company Rock N Roll Pools.',
    href: '/services/artificial-turf',
    features: ['Artificial Turf', 'LED Lighting', 'Stamped Concrete', 'Pools'],
  },
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
  {
    question: 'Do you only do pavers, or other hardscape too?',
    answer:
      'We do it all — paver installations, fire pits, outdoor fireplaces, outdoor kitchens, water features, retaining walls, decks, pergolas, stamped concrete, stone veneers, outdoor lighting, and artificial turf. Swimming pools are handled through our sister company Rock N Roll Pools.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Custom Outdoor Spaces Built to Last"
        subheadline="Belgard Authorized · Lafayette, CO"
        description="Paver installations, fire pits, outdoor kitchens, water features, and complete hardscape transformations across Lafayette, Erie, Boulder, and the Colorado Front Range."
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
      />

      <TrustStrip />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
              <span className="w-6 h-px bg-accent-amber" />
              <span className="gradient-text-amber">What We Build</span>
              <span className="w-6 h-px bg-accent-amber" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Complete Outdoor Living — One Trusted Crew
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From a single paver patio to a complete outdoor environment with fire, water, and kitchen — we design and build it all with the same Belgard-quality craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group relative bg-white rounded-2xl border border-stone-100 p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-6 group-hover:from-brand-100 group-hover:to-brand-200 transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7 text-brand-700" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-stone-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-5">{cat.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 text-xs font-medium bg-parchment-50 text-stone-600 rounded-full border border-parchment-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps />

      {/* Projects Preview */}
      <section className="section-padding bg-gradient-to-b from-parchment-50 via-parchment-50 to-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
              <span className="w-6 h-px bg-accent-amber" />
              <span className="gradient-text-amber">Our Work</span>
              <span className="w-6 h-px bg-accent-amber" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-4">
              Projects That Speak for Themselves
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Browse our portfolio of paver patios, fire features, outdoor kitchens, and hardscape transformations across Colorado.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1572331165267-854da2b021d9?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
            ].map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft bg-stone-200"
              >
                <Image
                  src={src}
                  alt="Outdoor living project by Rock N Roll Stoneworks"
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  quality={70}
                  priority={i < 2}
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/gallery">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCards />

      {/* FAQ */}
      <FAQAccordion faqs={homeFaqs} title="Frequently Asked Questions" subtitle="Common Questions" />

      {/* CTA */}
      <CTASection />
    </>
  );
}
