'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { TextReveal } from '@/components/motion/TextReveal';

const pillars = [
  ['Single-contract design-build', 'Engineering, permits, and one accountable thread from concept to walkthrough.'],
  ['Integrated outdoor programs', 'Pools, spas, hardscape, kitchens, fire, and drainage planned as one system.'],
  ['Colorado-grade execution', 'Engineered for Front Range freeze-thaw, UV, slope, soils, and HOA realities.'],
  ['Honest scope routing', 'Smaller projects and referrals welcome. If we are not the best fit, we will say so.'],
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
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(26,171,227,0.015), transparent 70%)' }}
      />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div>
            <ScrollReveal direction="right">
              <p className="label mb-8">Who we are, who we&apos;re built for</p>
            </ScrollReveal>
            <TextReveal
              text="Colorado's design-build team for considered outdoor programs."
              as="h2"
              className="font-display font-light text-ink-900 leading-[1.06] mb-0"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              delay={0.2}
            />
          </div>

          <StaggerChildren stagger={0.12} className="pt-0 lg:pt-16">
            <motion.p variants={staggerItem} className="font-body text-ink-500 text-lg leading-relaxed mb-6">
              Rock N Roll Stoneworks is a Longmont-based design-build studio working across the Colorado Front Range. Our strongest work is full-property and multi-zone: pools, hardscape, kitchens, fire, lighting, and drainage carried under one contract so material, grade, and finish lines all resolve.
            </motion.p>
            <motion.p variants={staggerItem} className="font-body text-ink-500 text-lg leading-relaxed mb-10">
              Single features, phased upgrades, and neighbor referrals matter to us too. We will route them honestly so you get a straight answer and a realistic timeline, even when the right answer is not us.
            </motion.p>

            <motion.div variants={staggerItem} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
              {pillars.map(([title, sub]) => (
                <motion.div
                  key={title}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="border-l-2 border-gold-400 pl-4"
                >
                  <p className="font-body font-semibold text-ink-900 text-sm">{title}</p>
                  <p className="font-body text-ink-500 text-[13px] mt-1 leading-relaxed">{sub}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-body text-[12px] tracking-[0.15em] uppercase font-semibold text-ink-900 hover-gold-line pb-0.5"
              >
                Our story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 font-body text-[12px] tracking-[0.15em] uppercase text-ink-500 hover:text-gold-700 transition-colors pb-0.5 border-b border-gold-200/60 hover:border-gold-400"
              >
                Design-build process <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
