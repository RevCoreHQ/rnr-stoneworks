'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';

const GOOGLE_REVIEWS_URL = 'https://share.google/E0p9OvVIvtdbw18jH';

const featured = {
  quote: "Both my husband and I are extremely glad we picked Rock N Roll Stoneworks for our outdoor project. Jordan and Jason were a pleasure to work with from the planning of the design details to the completed backyard of our dreams. They actually listened to the ideas we had and incorporated them into the plan. We had an extensive plan — outdoor kitchen, large hardscape area with mixed materials, a raised garden bed, sod, plants, and even a beach area. We were amazed at how well everything turned out. We now have our own backyard oasis!",
  author: 'Tyra Ware',
  date: 'August 2020',
  service: 'Outdoor Kitchen & Full Hardscape',
  rating: 5,
};

const secondary = [
  {
    quote: "We are so thrilled with our new patio! These guys did a great job and were a pleasure to work with. We've already had so many compliments from neighbors and friends. I couldn't recommend these guys enough!",
    author: 'Sara Seitzman Hazard',
    date: 'August 2022',
    service: 'Paver Patio',
  },
  {
    quote: "Rock n Roll Stoneworks just installed a stunning new paver stairway and patio in my back yard and I could not be more thrilled! The workmanship, attention to detail, and beauty of the finished product is second to none. I will definitely use them in the future for any other hardscape projects.",
    author: 'Cindy Anderson Fox',
    date: 'August 2019',
    service: 'Paver Stairway & Patio',
  },
  {
    quote: "Contracted with Rock n Roll Stoneworks for a large project that included driveway, all walkways, front porch and back patio. Jordan's expertise was invaluable for design and materials selection. His crew was professional, experienced, detail oriented and customer focused. Results exceeded our expectations.",
    author: 'Rebecca Staley',
    date: 'January 2019',
    service: 'Driveway, Walkways & Patio',
  },
  {
    quote: "Jordan had the best ideas for the shape of our patio and we drew it all out and loved it. Like lightening out went our old rotten deck and in went the patio with no hassle. They have an awesome crew and they work so hard. We couldn't be happier — it's beautiful.",
    author: 'Kris Burneson Hodgson',
    date: 'August 2019',
    service: 'Patio Installation',
  },
];

export function TestimonialCards() {
  return (
    <section className="section-pad bg-white relative overflow-hidden grain-light">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(26,171,227,0.02), transparent 70%)' }} />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <p className="label">Client Experiences</p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.18em] uppercase text-ink-400 hover:text-gold-600 transition-colors border-b border-gold-200 hover:border-gold-400 pb-0.5"
            >
              <span className="text-gold-500">★★★★★</span>
              See All Google Reviews
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </ScrollReveal>

        {/* Featured pull-quote */}
        <ScrollReveal direction="up" duration={0.9}>
          <div className="relative border border-gold-200 rounded-sm p-10 lg:p-16 mb-8 overflow-hidden hover:border-gold-300 hover:shadow-glow-sm transition-all duration-500">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 150 }}
              className="absolute top-6 left-8 text-gold-100"
            >
              <Quote className="w-14 h-14 fill-gold-100 stroke-gold-200" />
            </motion.div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p
                className="font-display font-light text-ink-900 leading-relaxed mb-10"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)' }}
              >
                &ldquo;{featured.quote}&rdquo;
              </p>
              <div className="flex flex-col items-center gap-1">
                <p className="font-body font-semibold text-ink-900">{featured.author}</p>
                <p className="font-body text-ink-400 text-sm">{featured.date} · {featured.service}</p>
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: featured.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.08, type: 'spring', stiffness: 300 }}
                      className="text-gold-500 text-sm"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Secondary quotes — 2x2 grid */}
        <StaggerChildren stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {secondary.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: '0 20px 50px -12px rgba(11, 18, 25, 0.12)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-cream-50 border border-gold-100 rounded-sm p-7 cursor-default"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.06, type: 'spring', stiffness: 300 }}
                    className="text-gold-500 text-xs"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="font-body text-ink-600 leading-relaxed mb-5 italic text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gold-100 pt-4">
                <p className="font-body font-semibold text-ink-900 text-sm">{t.author}</p>
                <p className="font-body text-ink-400 text-xs mt-0.5">{t.date} · {t.service}</p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="text-center mt-10">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-ink-400 hover:text-gold-600 transition-colors"
            >
              <span className="text-gold-500 text-base">★★★★★</span>
              <span>Read all reviews on Google</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
