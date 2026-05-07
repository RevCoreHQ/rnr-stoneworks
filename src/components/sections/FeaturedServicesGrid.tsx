'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TextReveal } from '@/components/motion/TextReveal';

type Card = {
  href: string;
  title: string;
  eyebrow: string;
  blurb: string;
  image: string;
  imageAlt: string;
};

/** Six flagship offerings shown on the home page. Full catalog lives on /services. */
const cards: Card[] = [
  {
    href: '/pools-spas',
    title: 'Pools & Spas',
    eyebrow: 'Fiberglass · Concrete · Spillways',
    blurb:
      'Latham fiberglass and engineered concrete pools designed for Colorado freeze-thaw, integrated with hardscape, kitchens, and lighting from day one.',
    image: '/images/pages/pools/fiberglass-pools-hero.webp',
    imageAlt: 'Custom Latham fiberglass pool with hardscape coping in Colorado',
  },
  {
    href: '/services/paver-installations',
    title: 'Paver Installations',
    eyebrow: 'Patios · Driveways · Walkways',
    blurb:
      'Belgard paver systems installed by an ICPI-certified crew, engineered to flex with Front Range freeze-thaw and outlast poured concrete by decades.',
    image: '/images/pages/services/paver-installations-hero.webp',
    imageAlt: 'Belgard paver patio with stairs in a Boulder County backyard',
  },
  {
    href: '/services/outdoor-kitchens',
    title: 'Outdoor Kitchens',
    eyebrow: 'Grills · Stone · Counters',
    blurb:
      'Full cooking suites with galvanized frames, stone veneer facing, and granite counters, sized for a single grill island or a pavilion-scale build.',
    image: '/images/pages/services/outdoor-kitchens-hero.webp',
    imageAlt: 'Custom outdoor kitchen with grill, stone veneer, and bar seating',
  },
  {
    href: '/services/fire-pits-fireplaces',
    title: 'Fire Features',
    eyebrow: 'Pits · Fireplaces · Burners',
    blurb:
      'Custom Warming Trends burners and stone-clad fireplaces that extend the Colorado season from spring through ski weekends.',
    image: '/images/pages/services/fire-pits-fireplaces-hero.webp',
    imageAlt: 'Custom outdoor fire pit with seat wall in Colorado backyard',
  },
  {
    href: '/services/water-features',
    title: 'Water Features',
    eyebrow: 'Spillways · Falls · Fountains',
    blurb:
      'Pondless waterfalls, pool spillways, and architectural fountains tuned to the sound and motion you want as a daily backdrop.',
    image: '/images/pages/services/water-features-hero.webp',
    imageAlt: 'Stone water feature with spillway in residential backyard',
  },
  {
    href: '/services/outdoor-lighting',
    title: 'Outdoor Lighting',
    eyebrow: 'Architectural · Path · Accent',
    blurb:
      'Low-voltage LED systems that layer architectural up-lighting, path runs, and task lighting so the build keeps performing after dark.',
    image: '/images/pages/services/outdoor-lighting-hero.webp',
    imageAlt: 'Low-voltage architectural outdoor lighting at dusk',
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function FeaturedServicesGrid() {
  return (
    <section className="section-pad bg-white relative overflow-hidden grain-light">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 0%, rgba(184, 138, 73, 0.04), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(26,171,227,0.025), transparent 60%)',
        }}
      />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-14">
          <div className="max-w-2xl">
            <ScrollReveal direction="right">
              <p className="label mb-5">What we build</p>
            </ScrollReveal>
            <TextReveal
              text="Six disciplines, one coordinated outdoor program."
              as="h2"
              className="font-display font-light text-ink-900 leading-[1.06]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
              delay={0.15}
            />
            <ScrollReveal direction="up" delay={0.3}>
              <p className="mt-5 font-body text-ink-500 text-base sm:text-lg leading-relaxed max-w-xl">
                Pools, hardscape, kitchens, fire, water, and lighting, sequenced under one contract so material lines, lighting, drainage, and finishes resolve as a single backyard, not a stack of subcontractors.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.4}>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 self-start font-body text-[11px] tracking-[0.18em] uppercase text-gold-700/80 hover:text-gold-700 transition-colors pb-0.5 border-b border-gold-300/50 hover:border-gold-500/60"
            >
              View all 11 services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease }}
            >
              <Link
                href={card.href}
                className="group relative block bg-cream-50 rounded-sm overflow-hidden ring-1 ring-cream-200/90 shadow-panel hover:shadow-elevate hover:ring-gold-300/60 transition-all duration-500"
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={82}
                    className="object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center font-body text-[10px] tracking-[0.18em] uppercase text-white/85 bg-ink-950/35 backdrop-blur-[2px] px-2.5 py-1 rounded-sm">
                      {card.eyebrow}
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-7">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display font-light text-ink-900 text-xl lg:text-2xl leading-tight tracking-[-0.01em]">
                      {card.title}
                    </h3>
                    <span className="shrink-0 mt-1 w-8 h-8 rounded-full border border-gold-200 flex items-center justify-center text-gold-600 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <p className="font-body text-ink-500 text-[14.5px] leading-relaxed">
                    {card.blurb}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
