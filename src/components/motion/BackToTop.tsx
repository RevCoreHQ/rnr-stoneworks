'use client';

import { useState, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function BackToTop() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setVisible(latest > 0.15);
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        pointerEvents: visible ? 'auto' as const : 'none' as const,
      }}
      transition={{ duration: 0.3, ease }}
      className="fixed bottom-24 lg:bottom-8 right-6 lg:right-8 z-40 w-11 h-11 rounded-full bg-ink-950 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-ink-950 hover:border-gold-500 transition-colors duration-300 shadow-glow-sm"
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </motion.button>
  );
}
