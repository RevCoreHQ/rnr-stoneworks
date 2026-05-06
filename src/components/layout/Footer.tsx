'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { footerNav } from '@/data/navigation';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';

const LOGO_URL = 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/699191dd24813c44b3afb6e9.webp';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-cream-100 relative grain">
      {/* Animated divider */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        initial={{ width: '0%', left: '50%' }}
        whileInView={{ width: '100%', left: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-10 pb-16 border-b border-white/8">

          {/* Brand */}
          <ScrollReveal direction="up" delay={0} className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src={LOGO_URL}
                alt="Rock N Roll Stoneworks logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold text-white tracking-wide">
                  Rock N Roll
                </span>
                <span className="font-body text-[10px] font-medium tracking-[0.26em] uppercase text-gold-500 mt-0.5">
                  Stoneworks
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-white/40 leading-relaxed mb-8 max-w-sm">
              Custom pools, spas, and outdoor living environments for homeowners across the Colorado Front Range. Design and build specialists.
            </p>
            <div className="space-y-3 mb-8">
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 font-body text-sm text-white/50 hover:text-gold-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 font-body text-sm text-white/50 hover:text-gold-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/40">{siteConfig.address.full}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-gold-600/50 hover:text-gold-400 transition-all rounded-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-gold-600/50 hover:text-gold-400 transition-all rounded-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-medium">Services</p>
            <StaggerChildren stagger={0.04}>
              <ul className="space-y-3">
                {footerNav.services.map((l) => (
                  <motion.li key={l.href} variants={staggerItem}>
                    <Link href={l.href} className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors">{l.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </StaggerChildren>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.125}>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-medium">Pools & Spas</p>
            <StaggerChildren stagger={0.04}>
              <ul className="space-y-3">
                {footerNav.pools.map((l) => (
                  <motion.li key={l.href} variants={staggerItem}>
                    <Link href={l.href} className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors">{l.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </StaggerChildren>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-medium">Company</p>
            <StaggerChildren stagger={0.04}>
              <ul className="space-y-3">
                {footerNav.company.map((l) => (
                  <motion.li key={l.href} variants={staggerItem}>
                    <Link href={l.href} className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors">{l.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </StaggerChildren>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-medium">Service Areas</p>
            <StaggerChildren stagger={0.04}>
              <ul className="space-y-3">
                {footerNav.areas.map((l) => (
                  <motion.li key={l.href} variants={staggerItem}>
                    <Link href={l.href} className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors">{l.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </StaggerChildren>
          </ScrollReveal>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="font-body text-xs text-white/20">
            © {currentYear} {siteConfig.name}, LLC. All rights reserved.
          </p>
          <a
            href="https://revcorehq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-xs text-white/20 hover:text-white/50 transition-colors"
          >
            Powered by
            <Image
              src="https://assets.cdn.filesafe.space/NYlSya2nYSkSnnXEbY2l/media/69a9af9fb003fa7bb8bb92ee.png"
              alt="RevCore"
              width={16}
              height={16}
              className="inline-block brightness-0 invert opacity-50"
            />
            <span>RevCore</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
