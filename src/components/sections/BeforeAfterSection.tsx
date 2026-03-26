'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { BeforeAfter } from '@/components/ui/BeforeAfter';

const CDN = 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media';

const pairs = [
  { before: `${CDN}/69c527ef4a4efaebb200f86e.jpg`, after: `${CDN}/69c527efe2498146670c8a45.jpg`, alt: 'Backyard patio transformation' },
  { before: `${CDN}/69c527ef421e24794d6c494a.jpg`, after: `${CDN}/69c527ef52ad3b1667cfcfce.jpg`, alt: 'Pool and hardscape installation' },
  { before: `${CDN}/69c527ef799f06eb6338f7e4.jpg`, after: `${CDN}/69c5289c22e1ed1768e4311a.jpg`, alt: 'Complete outdoor living build' },
  { before: `${CDN}/69c527ef799f06308538f7e5.jpg`, after: `${CDN}/69c527ef4a4efa675100f86f.jpg`, alt: 'Backyard hardscape project' },
  { before: `${CDN}/69c527ef5ebd495e3b602c1d.jpg`, after: `${CDN}/69c527ef5ebd499269602c1c.jpg`, alt: 'Paver patio and fire feature' },
  { before: `${CDN}/69c527ef22e1ed2557e42409.jpg`, after: `${CDN}/69c527ef7794bfb686386db2.jpg`, alt: 'Outdoor living transformation' },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function BeforeAfterSection() {
  return (
    <section className="section-pad bg-ink-950 grain">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal direction="up">
          <div className="mb-12">
            <p className="label-dark mb-5">Transformations</p>
            <h2
              className="font-display font-light text-white leading-[1.06]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              See the difference.<br />
              <em className="italic text-gold-400">Drag to reveal.</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {pairs.map((pair, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15, ease }}
            >
              <BeforeAfter before={pair.before} after={pair.after} alt={pair.alt} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
