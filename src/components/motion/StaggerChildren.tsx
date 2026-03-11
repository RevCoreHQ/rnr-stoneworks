'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface StaggerChildrenProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
  delayStart?: number;
}

const container = (stagger: number, delayStart: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delayStart,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function StaggerChildren({
  children,
  stagger = 0.1,
  className,
  delayStart = 0,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={container(stagger, delayStart)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
