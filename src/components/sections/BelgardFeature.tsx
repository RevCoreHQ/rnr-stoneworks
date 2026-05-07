'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function BelgardFeature() {
  return (
    <section className="py-16 lg:py-20 bg-ink-950 relative overflow-hidden grain">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="up">
            <motion.div
              className="relative aspect-[3/2] rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Image
                src="https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c692082e89d8bc784cd44f.png"
                alt="Rock N Roll Stoneworks featured in the Belgard Pro Consultation Guide"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-contain"
              />
            </motion.div>
          </ScrollReveal>

          {/* Copy */}
          <ScrollReveal direction="up" delay={0.15}>
            <div>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-400/70 font-semibold mb-4">
                Featured Work
              </p>
              <h2
                className="font-display font-light text-white leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
              >
                Featured in the Belgard Pro Consultation Guide
              </h2>
              <p className="font-body text-white/50 text-base leading-relaxed mb-6">
                Our craftsmanship is showcased in Belgard&apos;s official Pro Consultation Guide, the resource Belgard provides to their top-tier authorized contractors nationwide. Being featured alongside the best in the industry is a testament to the quality of work we deliver on every project.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gold-500/20" />
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-400/50 font-medium whitespace-nowrap">
                  Belgard Authorized Contractor
                </span>
                <div className="h-px flex-1 bg-gold-500/20" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
