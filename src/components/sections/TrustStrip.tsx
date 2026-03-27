'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Shield, Star, FileText } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

const iconMap = { BadgeCheck, Shield, Star, FileText } as const;

export function TrustStrip() {
  return (
    <div className="bg-cream-50 border-b border-gold-200/40">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {siteConfig.trustPoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <ScrollReveal key={point.label} delay={i * 0.1} direction="up">
                <div
                  className={[
                    'flex items-center gap-2 py-5',
                    i !== siteConfig.trustPoints.length - 1 ? 'border-r border-gold-200/40' : '',
                    i > 0 ? 'pl-4' : '',
                  ].join(' ')}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 12 }}
                  >
                    <Icon className="w-4 h-4 text-gold-500 shrink-0" />
                  </motion.div>
                  <span className="font-body text-xs font-medium text-ink-700">{point.label}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
