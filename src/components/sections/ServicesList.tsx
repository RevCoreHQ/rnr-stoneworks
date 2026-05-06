'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { getServiceBySlug } from '@/data/services';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

type HomeRowDef =
  | { type: 'service'; slug: string; eyebrow: string }
  | { type: 'pools'; eyebrow: string };

/** Order: flagship hardscape, pools hub, then remaining services. */
const HOME_ROWS: HomeRowDef[] = [
  { type: 'service', slug: 'paver-installations', eyebrow: 'Driveways · Patios · Walkways' },
  { type: 'pools', eyebrow: 'Fiberglass · Concrete · Shotcrete' },
  { type: 'service', slug: 'outdoor-kitchens', eyebrow: 'Full Build-Outs · Grills · Stone' },
  { type: 'service', slug: 'fire-pits-fireplaces', eyebrow: 'Custom Fire Features' },
  { type: 'service', slug: 'retaining-walls-stairs', eyebrow: 'Structural & Decorative Systems' },
  { type: 'service', slug: 'water-features', eyebrow: 'Waterfalls · Fountains · Ponds' },
  { type: 'service', slug: 'outdoor-lighting', eyebrow: 'LED Architectural Lighting' },
  { type: 'service', slug: 'artificial-turf', eyebrow: 'Premium Synthetic Grass' },
  { type: 'service', slug: 'decks-pergolas', eyebrow: 'Shade · Structure · Cedar & Composite' },
  { type: 'service', slug: 'stamped-concrete', eyebrow: 'Decorative Concrete Surfaces' },
  { type: 'service', slug: 'stone-veneers', eyebrow: 'Exterior & Fireplace Cladding' },
];

const POOLS_ROW = {
  href: '/pools-spas',
  title: 'Pools & Spas',
  intro:
    'Custom fiberglass pools from Latham and engineered shotcrete pools designed for Colorado freeze-thaw, UV, and your site. From spa spillways to full outdoor pool rooms, we handle design, excavation, shell, equipment, and hardscape integration.',
  image: '/images/pages/pools/fiberglass-pools-hero.webp',
  imageAlt: 'Residential fiberglass pool with deck and coping in Colorado',
} as const;

function excerpt(text: string, max = 300) {
  const t = text.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}

export function ServicesList() {
  const rows: Array<{
    key: string;
    href: string;
    title: string;
    eyebrow: string;
    body: string;
    image: string;
    imageAlt: string;
    index: number;
  }> = [];

  HOME_ROWS.forEach((def, index) => {
    if (def.type === 'pools') {
      rows.push({
        key: 'pools-spas',
        href: POOLS_ROW.href,
        title: POOLS_ROW.title,
        eyebrow: def.eyebrow,
        body: POOLS_ROW.intro,
        image: POOLS_ROW.image,
        imageAlt: POOLS_ROW.imageAlt,
        index,
      });
      return;
    }
    const svc = getServiceBySlug(def.slug);
    if (!svc) return;
    rows.push({
      key: svc.slug,
      href: `/services/${svc.slug}`,
      title: svc.title,
      eyebrow: def.eyebrow,
      body: excerpt(svc.intro),
      image: svc.heroImage,
      imageAlt: svc.heroAlt,
      index,
    });
  });

  return (
    <div className="relative overflow-hidden">
      <section className="section-pad bg-cream-50 relative topo-lines grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal direction="right">
            <p className="label mb-6">What We Build</p>
          </ScrollReveal>
          <TextReveal
            text="Every element of a refined outdoor environment."
            as="h2"
            className="font-display font-light text-ink-900 leading-[1.08] max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            delay={0.15}
          />
          <ScrollReveal direction="up" delay={0.35}>
            <p className="mt-6 max-w-2xl text-ink-500 font-body text-base lg:text-lg leading-relaxed">
              Belgard-authorized hardscape, custom pools, and outdoor living—designed and built for Front Range homes from
              our Longmont headquarters.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mt-8 font-body text-[12px] tracking-[0.15em] uppercase font-semibold text-ink-900 hover-gold-line pb-0.5"
            >
              All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {rows.map((row) => {
        const bg = row.index % 2 === 0 ? 'bg-white' : 'bg-cream-50';
        const flipped = row.index % 2 === 1;

        const textBlock = (
          <div className="flex flex-col justify-center">
            <p className="label mb-3">{row.eyebrow}</p>
            <h3 className="font-display font-light text-ink-900 text-3xl sm:text-4xl leading-tight tracking-[-0.02em] mb-8">
              {row.title}
            </h3>
            <p className="text-ink-500 font-body text-[15px] sm:text-base leading-relaxed mb-8 max-w-xl">{row.body}</p>
            <Link
              href={row.href}
              className="inline-flex items-center gap-2 font-body text-[12px] tracking-[0.15em] uppercase font-semibold text-ink-900 hover-gold-line pb-0.5 w-fit group"
            >
              Explore {row.title}
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        );

        const imageBlock = (
          <Link
            href={row.href}
            className="block group rounded-2xl overflow-hidden ring-1 ring-cream-200/90 shadow-panel focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={row.image}
                alt={row.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </Link>
        );

        return (
          <section key={row.key} className={`section-pad ${bg} relative ${row.index % 2 === 0 ? 'grain-light' : ''}`}>
            <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center"
              >
                {flipped ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
