'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getCurrentPromo } from '@/data/seasonal-promos';

const STORAGE_KEY = 'rnr-promo-dismissed';

export function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const promo = getCurrentPromo();

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed !== promo.season) {
      setVisible(true);
    }
  }, [promo.season]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, promo.season);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 bg-gold-500 text-ink-950 overflow-hidden"
        >
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-2.5 flex items-center justify-center gap-3 text-center">
            <p className="font-body text-[12px] sm:text-[13px] font-medium tracking-wide">
              {promo.headline}{' '}
              <Link
                href={promo.href}
                className="inline-flex items-center font-semibold underline underline-offset-2 hover:text-ink-800 transition-colors ml-1"
              >
                {promo.cta} &rarr;
              </Link>
            </p>
            <button
              onClick={dismiss}
              className="shrink-0 p-1 rounded-full hover:bg-ink-950/10 transition-colors"
              aria-label="Dismiss promotion"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
