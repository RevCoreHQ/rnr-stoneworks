'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FAQ } from '@/data/services';

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({ faqs, title, subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad bg-white">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        {title && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-2">
              {subtitle && <p className="label mb-6">{subtitle}</p>}
              <h2
                className="font-display font-light text-ink-900 leading-[1.08]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                {title}
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gold-100">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                    aria-expanded={openIndex === i}
                  >
                    <span className={[
                      'font-body font-medium pr-8 transition-colors duration-200',
                      openIndex === i ? 'text-gold-700' : 'text-ink-900 group-hover:text-gold-700',
                    ].join(' ')}>
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-gold-200 rounded-sm text-gold-500">
                      {openIndex === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  <div className={[
                    'grid transition-all duration-300 ease-in-out',
                    openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  ].join(' ')}>
                    <div className="overflow-hidden">
                      <p className="font-body text-ink-500 leading-relaxed pb-6 pr-10">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {!title && (
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gold-100">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span className={[
                    'font-body font-medium pr-8 transition-colors duration-200',
                    openIndex === i ? 'text-gold-700' : 'text-ink-900 group-hover:text-gold-700',
                  ].join(' ')}>
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-gold-200 rounded-sm text-gold-500">
                    {openIndex === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                <div className={[
                  'grid transition-all duration-300 ease-in-out',
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                ].join(' ')}>
                  <div className="overflow-hidden">
                    <p className="font-body text-ink-500 leading-relaxed pb-6 pr-10">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
