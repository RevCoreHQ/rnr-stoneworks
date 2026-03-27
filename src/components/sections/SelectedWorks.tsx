'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TiltCard } from '@/components/motion/TiltCard';

const works = [
  {
    title: 'Custom Pool & Spa',
    location: 'Lafayette, CO',
    category: 'Pool Installation · Outdoor Living',
    src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b90f79ad0276fa9e41f562.png',
    href: '/pools-spas',
    wide: true,
  },
];

const BLUR_DARK = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 5%27%3E%3Cfilter id=%27b%27 color-interpolation-filters=%27sRGB%27%3E%3CfeGaussianBlur stdDeviation=%271%27/%3E%3C/filter%3E%3Crect filter=%27url(%23b)%27 width=%27100%25%27 height=%27100%25%27 fill=%27%230b1219%27/%3E%3C/svg%3E';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function SelectedWorks() {
  return (
    <section className="section-pad bg-ink-950 grain">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal direction="up">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="label-dark mb-5">Selected Works</p>
              <h2
                className="font-display font-light text-white leading-[1.06]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Craft you can see.<br />
                <em className="italic text-gold-400">Quality you can feel.</em>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden lg:inline-flex items-center gap-2 font-body text-[11px] tracking-[0.18em] uppercase text-gold-400/70 hover:text-gold-400 transition-colors pb-0.5 border-b border-gold-800/50 hover:border-gold-500/60"
            >
              Full Portfolio <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 lg:gap-5">
          {works.map((w, i) => (
            <TiltCard key={i} maxTilt={2.5} scale={1.01}>
              <motion.div
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease }}
              >
              <Link
                href={w.href}
                className="group relative overflow-hidden rounded-sm bg-ink-900 block aspect-[16/9] lg:aspect-[16/9]"
              >
                <Image
                  src={w.src}
                  alt={w.title}
                  fill
                  sizes="100vw"
                  quality={80}
                  priority={i === 0}
                  placeholder="blur"
                  blurDataURL={BLUR_DARK}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                <div className="absolute inset-0 bg-ink-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-400/70 mb-2 font-medium">
                    {w.category}
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display font-light text-white text-xl lg:text-2xl leading-tight">
                        {w.title}
                      </h3>
                      <p className="font-body text-white/50 text-sm mt-1">{w.location}</p>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-ink-950 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <div className="flex lg:hidden justify-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.18em] uppercase text-gold-400 border-b border-gold-700/50 pb-0.5"
          >
            View Full Portfolio <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
