'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TiltCard } from '@/components/motion/TiltCard';
import { selectedWorksFeatured } from '@/data/selected-works';

const BLUR_LIGHT = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 5%27%3E%3Cfilter id=%27b%27 color-interpolation-filters=%27sRGB%27%3E%3CfeGaussianBlur stdDeviation=%271%27/%3E%3C/filter%3E%3Crect filter=%27url(%23b)%27 width=%27100%25%27 height=%27100%25%27 fill=%27%23e8ecf0%27/%3E%3C/svg%3E';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function tileAspectClass(wide: boolean | undefined, aspect: 'cinematic' | 'standard' | undefined) {
  if (wide || aspect === 'cinematic') {
    return 'aspect-[16/10] lg:aspect-[2.4/1]';
  }
  return 'aspect-[4/3]';
}

export function SelectedWorks() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <Image
        src="/images/pages/pools/concrete-shotcrete-pools-hero.webp"
        alt=""
        fill
        sizes="100vw"
        quality={35}
        className="object-cover object-center opacity-[0.035] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-14">
            <div className="max-w-3xl">
              <p className="label mb-5">Estate & luxury outdoor living</p>
              <h2
                className="font-display font-light text-ink-900 leading-[1.06]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Selected works for Colorado&apos;s<br />
                <em className="italic text-gold-600">most considered homes.</em>
              </h2>
              <p className="mt-5 font-body text-ink-500 text-base sm:text-lg leading-relaxed max-w-2xl">
                Infinity terraces at blue hour, pavilion kitchens framed against the foothills, arrival courts that carry the architecture from curb to pool edge. These are the kinds of coordinated outdoor programs we design and build for homeowners who expect craft, sequencing, and finish at an estate scale from Boulder County through the north Denver metro.
              </p>
            </div>
            <Link
              href="/gallery"
              className="hidden lg:inline-flex shrink-0 items-center gap-2 self-start font-body text-[11px] tracking-[0.18em] uppercase text-gold-700/70 hover:text-gold-700 transition-colors pb-0.5 border-b border-gold-300/50 hover:border-gold-500/60"
            >
              Full portfolio <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {selectedWorksFeatured.map((w, i) => (
            <TiltCard key={w.src} maxTilt={2.5} scale={1.01} className={w.wide ? 'lg:col-span-2' : undefined}>
              <motion.div
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease }}
              >
                <Link
                  href={w.href}
                  className={`group relative overflow-hidden rounded-sm bg-ink-100 block shadow-panel hover:shadow-elevate transition-shadow duration-300 ${tileAspectClass(w.wide, w.aspect)}`}
                >
                  <Image
                    src={w.src}
                    alt={w.alt}
                    fill
                    sizes={w.wide ? '(max-width: 1024px) 100vw, min(1280px, 92vw)' : '(max-width: 1024px) 100vw, 45vw'}
                    quality={82}
                    priority={i === 0}
                    placeholder="blur"
                    blurDataURL={BLUR_LIGHT}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent" />
                  <div className="absolute inset-0 bg-ink-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-400/80 mb-2 font-medium">
                      {w.category}
                    </p>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display font-light text-white text-xl lg:text-2xl leading-tight">
                          {w.title}
                        </h3>
                        <p className="font-body text-white/55 text-sm mt-1">{w.location}</p>
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
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.18em] uppercase text-gold-700 border-b border-gold-400/50 pb-0.5"
          >
            View full portfolio <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
