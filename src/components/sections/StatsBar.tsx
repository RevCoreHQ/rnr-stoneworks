'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';

const stats = [
  { target: 500, suffix: 'K+', label: 'Project Budget Capacity' },
  { target: 11, suffix: '', label: 'Distinct Services' },
  { target: 6, suffix: '', label: 'Colorado Communities' },
  { value: '2yr', label: 'Workmanship Guarantee' },
] as const;

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function StatsBar() {
  return (
    <section className="relative bg-cream-50 border-y border-gold-200/60 overflow-hidden">
      {/* Subtle diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)',
          color: '#1AABE3',
        }}
      />

      {/* Animated top accent line */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
        initial={{ width: '0%', left: '50%' }}
        whileInView={{ width: '100%', left: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction="up">
              <div
                className={[
                  'py-12 lg:py-16 text-center',
                  i !== stats.length - 1 ? 'border-r border-gold-200/60' : '',
                ].join(' ')}
              >
                <p
                  className="font-display font-light text-ink-900 leading-none mb-2"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {'target' in s ? (
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  ) : (
                    s.value
                  )}
                </p>
                <p className="font-body text-[11px] tracking-[0.18em] uppercase text-ink-400 font-medium">
                  {s.label}
                </p>
                {/* Animated underline accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease }}
                  className="h-px bg-gold-400/40 mx-auto mt-3"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
