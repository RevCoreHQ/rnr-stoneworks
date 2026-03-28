'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { TextReveal } from '@/components/motion/TextReveal';

const credentials = [
  ['Custom Pools & Spas', 'Fiberglass & Concrete'],
  ['Hardscape & Stonework', 'Pavers · Walls · Kitchens'],
  ['Custom Design', 'Visualize Before We Build'],
  ['2-Year Guarantee', 'Workmanship Backed'],
] as const;

export function EditorialIntro() {
  return (
    <section className="section-pad bg-white relative overflow-hidden grain-light">
      <Image
        src="https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69c6912eea111792bf9a4f12.png"
        alt=""
        fill
        sizes="100vw"
        quality={60}
        className="object-cover object-center opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(26,171,227,0.015), transparent 70%)' }} />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — large editorial headline */}
          <div>
            <ScrollReveal direction="right">
              <p className="label mb-8">Who We Are</p>
            </ScrollReveal>
            <TextReveal
              text="Colorado's premier design and build team for luxury outdoor living."
              as="h2"
              className="font-display font-light text-ink-900 leading-[1.06] mb-0"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              delay={0.2}
            />
          </div>

          {/* Right — body copy + credentials */}
          <StaggerChildren stagger={0.12} className="pt-0 lg:pt-16">
            <motion.p variants={staggerItem} className="font-body text-ink-500 text-lg leading-relaxed mb-6">
              Rock N Roll Stoneworks was built on a single principle: that your outdoor space should be as refined as the home it surrounds. Every project we take begins with a free consultation and ends with a space that commands attention.
            </motion.p>
            <motion.p variants={staggerItem} className="font-body text-ink-500 text-lg leading-relaxed mb-10">
              From custom pools and spas to paver installations, fire features, outdoor kitchens, and complete hardscape environments — we bring the highest level of craftsmanship to every project across the Colorado Front Range.
            </motion.p>

            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-6 mb-10">
              {credentials.map(([title, sub]) => (
                <motion.div
                  key={title}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="border-l-2 border-gold-400 pl-4"
                >
                  <p className="font-body font-semibold text-ink-900 text-sm">{title}</p>
                  <p className="font-body text-ink-400 text-xs mt-0.5">{sub}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-body text-[12px] tracking-[0.15em] uppercase font-semibold text-ink-900 hover-gold-line pb-0.5"
              >
                Learn Our Story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
