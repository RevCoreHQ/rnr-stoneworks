'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const REAL = [
  'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69aa9a13b003fa04e8de88ee.jpg',
  'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69aa9a1336702f66070d71c3.jpg',
  'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69aa9a13b003fa9b0bde88ef.jpg',
  'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69919554899b88de64bf5ef5.webp',
];

const projects = [
  { src: REAL[0], alt: 'Custom paver patio and outdoor kitchen in Colorado backyard', label: 'Full Hardscape & Kitchen — Lafayette, CO' },
  { src: REAL[1], alt: 'Custom paver patio with fire feature', label: 'Paver Patio & Fire Pit — Erie, CO' },
  { src: REAL[2], alt: 'Retaining walls and tiered landscape installation', label: 'Retaining Walls — Boulder, CO' },
  { src: REAL[3], alt: 'Custom outdoor hardscape project', label: 'Outdoor Hardscape — Lafayette, CO' },
  { src: REAL[0], alt: 'Paver patio installation in Colorado', label: 'Paver Installation — Westminster, CO' },
  { src: REAL[1], alt: 'Outdoor living space with paver surround', label: 'Outdoor Living — Longmont, CO' },
  { src: REAL[2], alt: 'Custom hardscape and landscape project', label: 'Hardscape & Landscape — Erie, CO' },
  { src: REAL[3], alt: 'Backyard transformation with pavers', label: 'Backyard Transformation — Boulder, CO' },
  { src: REAL[0], alt: 'Custom paver and fire feature installation', label: 'Pavers & Fire — Lafayette, CO' },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function ProjectGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease }}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-ink-900"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                quality={75}
                priority={i < 4}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-body text-white text-sm font-medium">{project.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
