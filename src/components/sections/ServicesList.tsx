'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TextReveal } from '@/components/motion/TextReveal';

const services = [
  { num: '01', title: 'Paver Installations', sub: 'Driveways · Patios · Walkways', href: '/services/paver-installations' },
  { num: '02', title: 'Retaining Walls', sub: 'Structural & Decorative Systems', href: '/services/retaining-walls' },
  { num: '03', title: 'Fire Pits & Fireplaces', sub: 'Custom Fire Features', href: '/services/fire-pits-fireplaces' },
  { num: '04', title: 'Outdoor Kitchens', sub: 'Full Build-Outs', href: '/services/outdoor-kitchens' },
  { num: '05', title: 'Water Features', sub: 'Waterfalls · Fountains · Ponds', href: '/services/water-features' },
  { num: '06', title: 'Outdoor Lighting', sub: 'LED Architectural Lighting', href: '/services/outdoor-lighting' },
  { num: '07', title: 'Artificial Turf', sub: 'Premium Synthetic Grass', href: '/services/artificial-turf' },
  { num: '08', title: 'Stamped Concrete', sub: 'Decorative Concrete Surfaces', href: '/services/stamped-concrete' },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ServicesList() {
  return (
    <section className="section-pad bg-cream-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-start">

          <div className="lg:col-span-2">
            <ScrollReveal direction="right">
              <p className="label mb-6">What We Build</p>
            </ScrollReveal>
            <TextReveal
              text="Every element of a refined outdoor environment."
              as="h2"
              className="font-display font-light text-ink-900 leading-[1.08]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              delay={0.2}
            />
            <ScrollReveal direction="up" delay={0.4}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-8 font-body text-[12px] tracking-[0.15em] uppercase font-semibold text-ink-900 hover-gold-line pb-0.5"
              >
                All Services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            {services.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between py-5 border-b border-gold-100 hover:border-gold-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-gold-50/50 hover:to-transparent"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-display text-xl font-light text-gold-300 w-9 shrink-0">{s.num}</span>
                      <div>
                        <p className="font-body font-semibold text-ink-900 group-hover:text-gold-700 transition-colors">{s.title}</p>
                        <p className="font-body text-ink-400 text-sm">{s.sub}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gold-400 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
