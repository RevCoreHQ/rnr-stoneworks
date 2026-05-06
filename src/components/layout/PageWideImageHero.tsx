'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export interface WideHeroBreadcrumb {
  label: string;
  href: string;
}

interface PageWideImageHeroProps {
  imageSrc: string;
  imageAlt: string;
  breadcrumbs: WideHeroBreadcrumb[];
  eyebrow?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

/**
 * Tall min-height + `object-[center_28%]` keeps more vertical scene in frame under `object-cover`.
 * Background uses a subtle parallax translate while the hero is in view (disabled when prefers-reduced-motion).
 */
export function PageWideImageHero({
  imageSrc,
  imageAlt,
  breadcrumbs,
  eyebrow,
  title,
  description,
  children,
}: PageWideImageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 52]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[min(92vh,1100px)] overflow-hidden grain"
    >
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: reduceMotion === true ? 0 : parallaxY }}
        aria-hidden
      >
        {/* Oversized layer avoids gaps when the layer translates */}
        <div className="absolute inset-[-14%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-[center_28%]"
          />
        </div>
      </motion.div>

      {/* Same stack as home `Hero` */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/10 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-ink-950/60 via-ink-950/20 to-transparent pointer-events-none" aria-hidden />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-ink-950/40 via-transparent to-transparent pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 lg:pt-36 pb-24 lg:pb-28">
        <Breadcrumbs items={breadcrumbs} variant="dark" />
        <div className="max-w-3xl mt-8 lg:mt-10">
          {eyebrow ? (
            <p className="label-dark mb-4 max-w-xl">{eyebrow}</p>
          ) : null}
          <h1
            className="font-display font-light text-white mb-5 leading-[1.08] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.35rem, 5.2vw, 3.85rem)' }}
          >
            {title}
          </h1>
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-body">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">{children}</div>
        </div>
      </div>
    </section>
  );
}
