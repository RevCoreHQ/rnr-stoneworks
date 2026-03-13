'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
                priority={i < 3}
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
