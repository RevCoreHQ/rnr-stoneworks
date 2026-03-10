import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    title: 'Elevated Patio & Fire Sanctuary',
    location: 'Lafayette, CO',
    category: 'Paver Installation · Fire Feature',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
    href: '/gallery',
    wide: true,
  },
  {
    title: 'Bespoke Outdoor Kitchen',
    location: 'Boulder, CO',
    category: 'Outdoor Kitchen · Stone Veneer',
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=800&fit=crop',
    href: '/gallery',
    wide: false,
  },
  {
    title: 'Water Feature & Hardscape',
    location: 'Erie, CO',
    category: 'Water Feature · Retaining Walls',
    src: 'https://images.unsplash.com/photo-1572331165267-854da2b021d9?w=800&h=800&fit=crop',
    href: '/gallery',
    wide: false,
  },
];

export function SelectedWorks() {
  return (
    <section className="section-pad bg-ink-950">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="label-dark mb-5">Selected Works</p>
            <h2
              className="font-display font-light text-white leading-[1.06]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Craft you can see.<br />
              <em className="italic text-gold-400">Quality you can feel.</em>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden lg:inline-flex items-center gap-2 font-body text-[11px] tracking-[0.18em] uppercase text-gold-400/70 hover:text-gold-400 transition-colors pb-0.5 border-b border-gold-800/50 hover:border-gold-500/60"
          >
            Full Portfolio <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid: 1 wide + 2 square */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5">
          {works.map((w, i) => (
            <Link
              key={i}
              href={w.href}
              className={[
                'group relative overflow-hidden rounded-sm bg-ink-900',
                w.wide ? 'lg:col-span-3 aspect-[3/2]' : 'lg:col-span-2 aspect-square',
              ].join(' ')}
            >
              <Image
                src={w.src}
                alt={w.title}
                fill
                sizes={w.wide ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 100vw, 40vw'}
                quality={75}
                priority={i === 0}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
              />

              {/* Persistent gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold-400/70 mb-2 font-medium">
                  {w.category}
                </p>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display font-light text-white text-xl lg:text-2xl leading-tight">
                      {w.title}
                    </h3>
                    <p className="font-body text-white/50 text-sm mt-1">{w.location}</p>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white/60 group-hover:text-ink-950 transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        <div className="flex lg:hidden justify-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.18em] uppercase text-gold-400 border-b border-gold-700/50 pb-0.5"
          >
            View Full Portfolio <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
