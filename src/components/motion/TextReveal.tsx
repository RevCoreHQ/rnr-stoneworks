'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/* Pre-built map avoids creating new component refs during render */
const motionElements = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: keyof typeof motionElements;
}

const wordSpan = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

export function TextReveal({ text, className, style, delay = 0, as: Tag = 'h2' }: TextRevealProps) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const MotionTag = motionElements[Tag];

  return (
    <MotionTag
      className={cn(className, lines.length > 1 && 'space-y-0')}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(/\s+/).filter(Boolean);
        return (
          <span
            key={lineIndex}
            className={cn(
              'block',
              lineIndex > 0 && '-mt-2 sm:-mt-2.5 lg:-mt-3.5 xl:-mt-4',
            )}
          >
            {words.map((word, i) => (
              <motion.span
                key={`${lineIndex}-${i}`}
                className="inline-block mr-[0.25em]"
                variants={wordSpan}
              >
                {word}
              </motion.span>
            ))}
          </span>
        );
      })}
    </MotionTag>
  );
}
