'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import type { FAQ } from '@/data/services';

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gold-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className={[
          'font-body font-medium pr-8 transition-colors duration-200',
          isOpen ? 'text-gold-700' : 'text-ink-900 group-hover:text-gold-700',
        ].join(' ')}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease }}
          className="shrink-0 w-6 h-6 flex items-center justify-center border border-gold-200 rounded-sm text-gold-500"
        >
          <Plus className="w-3.5 h-3.5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="font-body text-ink-500 leading-relaxed pb-6 pr-10">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion({ faqs, title, subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList = faqs.map((faq, i) => (
    <FAQItem
      key={i}
      faq={faq}
      isOpen={openIndex === i}
      onToggle={() => setOpenIndex(openIndex === i ? null : i)}
    />
  ));

  return (
    <section className="section-pad bg-white">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        {title ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                {subtitle && <p className="label mb-6">{subtitle}</p>}
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.15}>
                <h2
                  className="font-display font-light text-ink-900 leading-[1.08]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
                >
                  {title}
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-3 space-y-0">
              {faqList}
            </div>
          </div>
        ) : (
          <div className="space-y-0">
            {faqList}
          </div>
        )}
      </div>
    </section>
  );
}
