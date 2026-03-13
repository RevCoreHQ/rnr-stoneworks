'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbox } from '@/components/ui/Lightbox';

const projects = [
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbe8487c68ea7458e3.jpg', alt: 'Custom paver patio and outdoor kitchen in Colorado backyard', label: 'Full Hardscape & Kitchen, Lafayette, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb277ba028b8ce2268.jpg', alt: 'Custom paver patio with fire feature', label: 'Paver Patio & Fire Pit, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb070c5827655cf949.jpg', alt: 'Retaining walls and tiered landscape installation', label: 'Retaining Walls, Boulder, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbbfc81f7607ecedf1.jpg', alt: 'Custom outdoor hardscape project', label: 'Outdoor Hardscape, Lafayette, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbd548174caf1be587.jpg', alt: 'Paver patio installation in Colorado', label: 'Paver Installation, Westminster, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb0b5c435534dabbdc.jpg', alt: 'Outdoor living space with paver surround', label: 'Outdoor Living, Longmont, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abb0b5c430b62dabbdb.jpg', alt: 'Custom hardscape and landscape project', label: 'Hardscape & Landscape, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbeba487466a20d049.jpg', alt: 'Backyard transformation with pavers', label: 'Backyard Transformation, Boulder, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbeba487d1ff20d048.jpg', alt: 'Custom paver and fire feature installation', label: 'Pavers & Fire, Lafayette, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbfb38ca4dc08ccfd8.jpg', alt: 'Outdoor kitchen and patio design', label: 'Outdoor Kitchen & Patio, Erie, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbcab7f75114aa984e.jpg', alt: 'Premium hardscape installation', label: 'Premium Hardscape, Westminster, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbeba487271b20d047.jpg', alt: 'Complete outdoor living environment', label: 'Outdoor Living, Lafayette, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbe8487c54027458e7.jpg', alt: 'Stone patio and fire pit project', label: 'Patio & Fire Feature, Boulder, CO' },
  { src: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41abbe8487c245a7458ee.jpg', alt: 'Custom outdoor space with pavers', label: 'Custom Paver Design, Longmont, CO' },
];

// Deterministic pseudo-random rotation per card (-3 to +3 degrees)
const ROTATIONS = projects.map((_, i) => {
  const seed = Math.sin(i * 2654.435 + 0.1) * 10000;
  return (seed - Math.floor(seed)) * 6 - 3;
});

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ProjectGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="section-pad bg-cream-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: ROTATIONS[i] }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease }}
              whileHover={{
                rotate: 0,
                y: -8,
                scale: 1.03,
                boxShadow: '0 8px 30px rgba(11, 18, 25, 0.12), 0 2px 8px rgba(11, 18, 25, 0.08)',
              }}
              className="cursor-pointer bg-white p-2 pb-8 sm:p-3 sm:pb-10"
              style={{ boxShadow: '0 2px 8px rgba(11, 18, 25, 0.06), 0 1px 3px rgba(11, 18, 25, 0.04)' }}
              onClick={() => setSelectedIndex(i)}
            >
              <div className="relative aspect-square overflow-hidden bg-ink-100">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  priority={i < 3}
                  className="object-cover object-center"
                />
              </div>
              <p className="font-body text-xs sm:text-sm text-ink-500 text-center mt-3 leading-snug">
                {project.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            images={projects}
            selectedIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onChangeIndex={setSelectedIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
