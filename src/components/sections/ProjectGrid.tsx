'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbox } from '@/components/ui/Lightbox';
import { galleryProjects } from '@/data/gallery-projects';

const BLUR_LIGHT = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 5%27%3E%3Cfilter id=%27b%27 color-interpolation-filters=%27sRGB%27%3E%3CfeGaussianBlur stdDeviation=%271%27/%3E%3C/filter%3E%3Crect filter=%27url(%23b)%27 width=%27100%25%27 height=%27100%25%27 fill=%27%23dfe5ea%27/%3E%3C/svg%3E';

// Deterministic pseudo-random rotation per card (-3 to +3 degrees)
const ROTATIONS = galleryProjects.map((_, i) => {
  const seed = Math.sin(i * 2654.435 + 0.1) * 10000;
  return (seed - Math.floor(seed)) * 6 - 3;
});

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ProjectGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="section-pad bg-cream-50">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {galleryProjects.map((project, i) => (
            <motion.div
              key={project.src}
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
              className="cursor-pointer overflow-hidden rounded-sm"
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
                  placeholder="blur"
                  blurDataURL={BLUR_LIGHT}
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            images={galleryProjects}
            selectedIndex={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            onChangeIndex={setSelectedIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
