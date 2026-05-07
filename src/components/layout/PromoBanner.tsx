'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getCurrentPromo } from '@/data/seasonal-promos';

const STORAGE_KEY = 'rnr-promo-dismissed';
const ease = [0.25, 0.46, 0.45, 0.94] as const;

/** Scroll past ~half the viewport so the home hero isn’t interrupted. */
const SCROLL_VIEWPORT_RATIO = 0.52;
/** If the visitor never scrolls, show after this idle delay (ms). */
const IDLE_REVEAL_MS = 14_000;

export function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const promo = getCurrentPromo();
  const revealedRef = useRef(false);

  const reveal = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setVisible(true);
  }, []);

  useEffect(() => {
    revealedRef.current = false;

    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(STORAGE_KEY) === promo.season) return;

    const tryRevealFromScroll = () => {
      const threshold = window.innerHeight * SCROLL_VIEWPORT_RATIO;
      if (window.scrollY >= threshold) reveal();
    };

    const onScroll = () => {
      tryRevealFromScroll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    tryRevealFromScroll();

    const timer = window.setTimeout(reveal, IDLE_REVEAL_MS);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(timer);
    };
  }, [promo.season, reveal]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, promo.season);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease }}
          className="fixed bottom-[4.5rem] right-3 left-3 sm:left-auto sm:right-6 lg:bottom-6 z-50 sm:max-w-sm"
        >
          <div className="bg-ink-950 border border-white/10 rounded-lg shadow-glow-sm p-4 backdrop-blur-xl">
            <button
              onClick={dismiss}
              className="absolute top-2.5 right-2.5 p-1.5 rounded-full text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors"
              aria-label="Dismiss promotion"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="font-body text-[10px] tracking-[0.18em] uppercase text-gold-400 font-semibold mb-1.5">
              {promo.label} Special
            </p>
            <p className="font-body text-[13px] sm:text-[13px] text-white/80 leading-relaxed pr-6 mb-3">
              {promo.headline}
            </p>
            <Link
              href={promo.href}
              onClick={dismiss}
              className="inline-flex items-center px-4 py-2 bg-gold-500 text-ink-950 font-body text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-gold-400 transition-colors"
            >
              {promo.cta} &rarr;
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
