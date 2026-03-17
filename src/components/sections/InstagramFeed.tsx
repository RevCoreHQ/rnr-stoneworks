'use client';

import BeholdWidget from '@behold/react';
import { Instagram } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

const BEHOLD_FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID;

export function InstagramFeed() {
  if (!BEHOLD_FEED_ID) return null;

  return (
    <section className="section-pad bg-ink-950 relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal direction="up">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="gold-line" />
                <span className="label-dark">Follow Along</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-light text-white leading-tight">
                Latest from the Field
              </h2>
            </div>
            <a
              href="https://www.instagram.com/rocknroll_stoneworks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/70 font-body text-sm tracking-wide hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300 rounded-sm"
            >
              <Instagram className="w-4 h-4" />
              @rocknroll_stoneworks
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          <BeholdWidget feedId={BEHOLD_FEED_ID} />
        </ScrollReveal>

        {/* Mobile follow link */}
        <div className="mt-8 flex justify-center sm:hidden">
          <a
            href="https://www.instagram.com/rocknroll_stoneworks/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/70 font-body text-sm tracking-wide hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300 rounded-sm"
          >
            <Instagram className="w-4 h-4" />
            @rocknroll_stoneworks
          </a>
        </div>
      </div>
    </section>
  );
}
