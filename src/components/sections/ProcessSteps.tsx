'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';

const steps = [
  {
    num: '01',
    title: 'Consultation & Vision',
    body: 'We visit your property, learn what you want to achieve, and assess the space. No sales pitch, just a genuine conversation about your goals.',
  },
  {
    num: '02',
    title: 'Design & Proposal',
    body: 'Our team creates a detailed design layout of your project. You see exactly what we will build before a single stone is placed.',
  },
  {
    num: '03',
    title: 'Expert Installation',
    body: 'Our ICPI-certified crew builds your space with precision. Belgard materials, clean jobsite every evening, and a project manager on-site throughout.',
  },
  {
    num: '04',
    title: 'Final Walkthrough',
    body: 'Payment is only due when you are 100% satisfied. We walk through every detail together and ensure the finished space exceeds your expectations.',
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ProcessSteps() {
  return (
    <section className="section-pad bg-cream-50 border-y border-gold-200/40 relative overflow-hidden topo-lines">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left label col */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right">
              <p className="label mb-6">Our Process</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <h2
                className="font-display font-light text-ink-900 leading-[1.08]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                From first call to final approval, a seamless experience.
              </h2>
            </ScrollReveal>
          </div>

          {/* Steps */}
          <div className="lg:col-span-3 relative">
            {/* Connecting line */}
            <motion.div
              className="absolute left-7 top-8 bottom-8 w-px bg-gold-200/40 hidden lg:block"
              initial={{ scaleY: 0, transformOrigin: 'top' }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease }}
            />

            <StaggerChildren stagger={0.2} className="space-y-0">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ backgroundColor: 'rgba(26, 171, 227, 0.03)' }}
                  transition={{ duration: 0.3 }}
                  className={[
                    'flex gap-8 py-8 relative rounded-sm -mx-4 px-4',
                    i !== steps.length - 1 ? 'border-b border-gold-200/50' : '',
                  ].join(' ')}
                >
                  <div className="relative shrink-0 w-14">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.2, type: 'spring' }}
                      className="absolute -inset-2 rounded-full border border-gold-200/30"
                    />
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                      className="font-display text-[2.5rem] font-light text-gold-300 leading-none relative z-10 block"
                    >
                      {s.num}
                    </motion.span>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-ink-900 text-lg mb-2">{s.title}</h3>
                    <p className="font-body text-ink-500 leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
