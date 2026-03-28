'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface SelectionCardProps {
  title: string;
  description: string;
  detail?: string;
  price?: string;
  selected: boolean;
  onClick: () => void;
}

export function SelectionCard({
  title,
  description,
  detail,
  price,
  selected,
  onClick,
}: SelectionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={[
        'relative text-left w-full p-5 rounded-sm border transition-all duration-200',
        selected
          ? 'border-gold-500 bg-gold-50/50 shadow-elevate ring-2 ring-gold-500/20'
          : 'border-gold-200/40 bg-white shadow-panel hover:shadow-elevate hover:border-gold-300/60',
      ].join(' ')}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Selected check */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center"
        >
          <Check className="w-3.5 h-3.5 text-white" />
        </motion.div>
      )}

      <h3 className="font-display font-semibold text-ink-900 text-sm mb-1 pr-8">
        {title}
      </h3>
      {detail && (
        <p className="font-body text-gold-600 text-xs font-medium mb-1.5">
          {detail}
        </p>
      )}
      <p className="font-body text-ink-400 text-xs leading-relaxed">
        {description}
      </p>
      {price && (
        <p className="font-display font-semibold text-gold-700 text-sm mt-3">
          {price}
        </p>
      )}
    </motion.button>
  );
}
