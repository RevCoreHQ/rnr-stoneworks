'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/site-config';
import { ArrowDown, Phone, Volume2, VolumeX, Maximize2, X } from 'lucide-react';
import { TextReveal } from '@/components/motion/TextReveal';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { useRef, useState, useCallback, useEffect } from 'react';

// Tiny dark blur placeholder for image loading
const BLUR_DARK = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 5%27%3E%3Cfilter id=%27b%27 color-interpolation-filters=%27sRGB%27%3E%3CfeGaussianBlur stdDeviation=%271%27/%3E%3C/filter%3E%3Crect filter=%27url(%23b)%27 width=%27100%25%27 height=%27100%25%27 fill=%27%230b1219%27/%3E%3C/svg%3E';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  }, []);

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // Sync fullscreen video to background video time on open
  useEffect(() => {
    if (isFullscreen && fullscreenVideoRef.current && videoRef.current) {
      fullscreenVideoRef.current.currentTime = videoRef.current.currentTime;
      fullscreenVideoRef.current.play();
    }
  }, [isFullscreen]);

  // Lock body scroll when fullscreen is open
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isFullscreen]);

  // Close fullscreen on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) closeFullscreen();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isFullscreen, closeFullscreen]);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grain">

        {/* Background — fills full viewport including behind the nav */}
        {backgroundVideo ? (
          <>
            {backgroundImage && (
              <Image src={backgroundImage} alt="Rock N Roll Stoneworks luxury outdoor hardscape project in Colorado" fill priority sizes="100vw" quality={80} placeholder="blur" blurDataURL={BLUR_DARK} className="object-cover object-center" />
            )}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover object-center"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </>
        ) : backgroundImage ? (
          <Image src={backgroundImage} alt="Rock N Roll Stoneworks luxury outdoor hardscape project in Colorado" fill priority sizes="100vw" quality={80} placeholder="blur" blurDataURL={BLUR_DARK} className="object-cover object-center" />
        ) : (
          <div className="absolute inset-0 bg-ink-950" />
        )}

        {/* Bottom-up gradient — darkens where text lives */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/10" />
        {/* Left-side vignette — frames the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-ink-950/20 to-transparent" />
        {/* Top-down gradient — keeps nav area readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-transparent" />

        {/* Aurora mesh — three overlapping radial gradients for ambient depth */}
        <motion.div
          className="absolute -inset-12 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(26,171,227,0.06), transparent)' }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -inset-12 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 70% 30%, rgba(18,128,180,0.05), transparent)' }}
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute -inset-12 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 40% 40% at 50% 70%, rgba(41,181,229,0.04), transparent)' }}
          animate={{ x: [0, 20, -20, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
        />

        {/* Video controls — bottom left */}
        {backgroundVideo && (
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex items-center gap-2">
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-ink-950/50 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
            >
              {isMuted ? <VolumeX className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> : <Volume2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
            </button>
            <button
              onClick={openFullscreen}
              aria-label="Watch full video"
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-ink-950/50 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all duration-300"
            >
              <Maximize2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        )}

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
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 lg:pt-40 pb-16 lg:pb-20">
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
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-white font-display font-semibold text-[12px] tracking-[0.18em] uppercase hover:bg-gold-400 transition-colors duration-300 rounded-sm shadow-glow btn-shimmer"
                  >
                    Get Your Free Estimate
                  </Link>
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
                <span>Custom Pools & Spas</span>
                <span className="w-px h-3 bg-white/20" />
                <span>Hardscape & Stonework</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fullscreen video overlay */}
      <AnimatePresence>
        {isFullscreen && backgroundVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            <video
              ref={fullscreenVideoRef}
              autoPlay
              loop
              playsInline
              controls
              preload="metadata"
              className="w-full h-full object-contain"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>

            <button
              onClick={closeFullscreen}
              aria-label="Close fullscreen video"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
