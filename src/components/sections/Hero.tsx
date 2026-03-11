'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site-config';
import { ArrowDown, Phone } from 'lucide-react';
import { TextReveal } from '@/components/motion/TextReveal';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { MagneticButton } from '@/components/motion/MagneticButton';

interface HeroProps {
  headline: string;
  subheadline?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export function Hero({
  headline,
  subheadline,
  description,
  backgroundImage,
  backgroundVideo,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

      {/* Background — fills full viewport including behind the nav */}
      {backgroundVideo ? (
        <>
          {backgroundImage && (
            <Image src={backgroundImage} alt="" fill priority sizes="100vw" quality={80} className="object-cover object-center" />
          )}
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-center">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </>
      ) : backgroundImage ? (
        <Image src={backgroundImage} alt="" fill priority sizes="100vw" quality={80} className="object-cover object-center" />
      ) : (
        <div className="absolute inset-0 bg-ink-950" />
      )}

      {/* Bottom-up gradient — darkens where text lives */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/25" />
      {/* Left-side vignette — frames the text */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/30 to-transparent" />
      {/* Top-down gradient — keeps nav area readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-transparent to-transparent" />

      {/* Breathing gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-600/8"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Brand blue accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-500 via-gold-400/60 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute top-1/2 right-8 lg:right-14 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <span className="label-dark text-vertical">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-gold-500/60 to-transparent" />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-gold-500/60" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28 pt-48">
        <div className="max-w-3xl">
          {subheadline && (
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <span className="gold-line" />
                <span className="label-dark">{subheadline}</span>
              </div>
            </ScrollReveal>
          )}

          <TextReveal
            text={headline}
            as="h1"
            className="font-display font-light text-white leading-[1.04] mb-8 tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
            delay={0.3}
          />

          {description && (
            <ScrollReveal direction="up" delay={0.5}>
              <p className="font-body text-lg lg:text-xl text-white/80 leading-relaxed mb-12 max-w-xl">
                {description}
              </p>
            </ScrollReveal>
          )}

          <StaggerChildren delayStart={0.7} stagger={0.15}>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div variants={staggerItem}>
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-display font-semibold text-[12px] tracking-[0.18em] uppercase hover:bg-gold-400 transition-colors duration-300 rounded-sm shadow-glow btn-shimmer"
                  >
                    Get Your Free Design
                  </Link>
                </MagneticButton>
              </motion.div>
              <motion.div variants={staggerItem}>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/30 text-white/80 font-body font-medium text-[13px] tracking-wide hover:border-gold-500/70 hover:text-gold-400 transition-all duration-300 rounded-sm"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </motion.div>
            </div>
          </StaggerChildren>

          {/* Trust strip */}
          <ScrollReveal direction="up" delay={1}>
            <div className="flex flex-wrap items-center gap-4 mt-8 text-white/40 text-xs font-body">
              <span className="text-gold-500">★★★★★</span>
              <span>5.0 on Google</span>
              <span className="w-px h-3 bg-white/20" />
              <span>Belgard Authorized</span>
              <span className="w-px h-3 bg-white/20" />
              <span>ICPI Certified</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
