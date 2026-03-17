'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site-config';
import { Phone } from 'lucide-react';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { MagneticButton } from '@/components/motion/MagneticButton';

interface CTASectionProps {
  headline?: string;
  description?: string;
  variant?: 'dark' | 'light' | 'brand';
}

export function CTASection({
  headline = 'Ready to Begin?',
  description = 'Every project starts with a free consultation, we visit your property, understand your vision, and provide a no-obligation proposal with a full 3D design.',
}: CTASectionProps) {
  return (
    <section className="relative bg-ink-950 overflow-hidden grain">
      {/* Gold accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gold-600/5 blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '-20%', right: '-10%' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gold-600/4 blur-3xl pointer-events-none"
        animate={{ x: [0, -20, 0], y: [0, 15, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ bottom: '-15%', left: '-5%' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gold-500/3 blur-3xl pointer-events-none"
        animate={{ x: [0, 15, -15, 0], y: [0, -25, 10, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        style={{ top: '30%', left: '30%' }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
        <StaggerChildren stagger={0.15} className="max-w-3xl mx-auto text-center">
          <motion.p variants={staggerItem} className="label-dark mb-8">Free Consultation</motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-display font-light leading-[1.06] mb-8 text-shimmer"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            {headline}
          </motion.h2>
          <motion.p variants={staggerItem} className="font-body text-white/50 text-lg leading-relaxed mb-12">
            {description}
          </motion.p>
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(26,171,227,0.2)',
                    '0 0 50px rgba(26,171,227,0.35)',
                    '0 0 30px rgba(26,171,227,0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-sm"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 bg-gold-500 text-ink-950 font-body font-semibold text-[13px] tracking-[0.12em] uppercase hover:bg-gold-400 transition-colors duration-300 rounded-sm btn-shimmer"
                >
                  Get Your Free 3D Design
                </Link>
              </motion.div>
            </MagneticButton>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2.5 font-body text-sm text-white/50 hover:text-gold-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </motion.div>
          <motion.p variants={staggerItem} className="text-white/30 text-xs mt-6 font-body">
            Free consultation. No obligation. Response within 24 hours.
          </motion.p>
        </StaggerChildren>
      </div>
    </section>
  );
}
