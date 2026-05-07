'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { designVisualizationPair } from '@/data/design-visualization';

export function DesignVisualizationTeaser() {
  const { beforeSrc, afterSrc } = designVisualizationPair;

  return (
    <section className="section-pad bg-cream-50 border-y border-cream-200 topo-lines relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollReveal direction="up">
            <div>
              <p className="label text-gold-700 mb-4">Design visualization</p>
              <h2
                className="font-display font-light text-ink-900 leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                See your Colorado backyard as photorealistic concepts before we move dirt.
              </h2>
              <p className="font-body text-ink-600 leading-relaxed mb-6">
                We pair field measurements with app-driven renderings so steep lots, pool envelopes, outdoor kitchens,
                and tiered hardscape read as one system, so stakeholders see one backyard program and not a pile of
                disconnected sketches. Drag the comparison to preview how we communicate scale, materials, and lighting
                before we move dirt.
              </p>
              <Link
                href="/design-visualization"
                className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.18em] uppercase text-gold-700 hover:text-gold-800 border-b border-gold-300/60 hover:border-gold-500 pb-0.5"
              >
                Design & visualization capabilities <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12}>
            <BeforeAfter
              key={afterSrc}
              before={beforeSrc}
              after={afterSrc}
              alt="Illustrative matched pair: daytime backyard and dusk concept with pool and pavilion"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
