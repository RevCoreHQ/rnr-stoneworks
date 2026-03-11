'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const variants = {
  primary: 'bg-gold-500 text-ink-950 hover:bg-gold-400 shadow-glow btn-shimmer',
  ghost: 'border border-white/20 text-white/70 hover:border-gold-500/50 hover:text-gold-400',
  outline: 'border border-gold-400 text-gold-700 hover:bg-gold-50',
};

const sizes = {
  sm: 'px-5 py-2.5 text-[12px]',
  md: 'px-7 py-3.5 text-[13px]',
  lg: 'px-10 py-4 text-[13px]',
};

const MotionLink = motion.create(Link);

const springTransition = { type: 'spring' as const, stiffness: 400, damping: 20 };

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center font-body font-semibold tracking-[0.12em] uppercase rounded-sm transition-colors duration-300 focus:outline-none',
    variants[variant],
    sizes[size],
    className,
  ].join(' ');

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={springTransition}
      >
        {children}
      </MotionLink>
    );
  }
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={springTransition}
    >
      {children}
    </motion.button>
  );
}
