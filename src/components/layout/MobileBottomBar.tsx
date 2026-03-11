'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, FileText } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function MobileBottomBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.4, ease }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-cream-200 shadow-elevate"
    >
      <div className="grid grid-cols-2 divide-x divide-cream-200">
        <motion.a
          href={`tel:${siteConfig.phoneRaw}`}
          whileTap={{ scale: 0.96 }}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-ink-800 hover:bg-cream-50 active:bg-cream-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-700" />
          Call Now
        </motion.a>
        <motion.a
          href="/contact"
          whileTap={{ scale: 0.96 }}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-gold-700 hover:bg-gold-800 active:bg-gold-900 transition-colors"
        >
          <FileText className="w-4 h-4" />
          Free Estimate
        </motion.a>
      </div>
    </motion.div>
  );
}
