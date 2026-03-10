import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { Phone } from 'lucide-react';

interface CTASectionProps {
  headline?: string;
  description?: string;
  variant?: 'dark' | 'light' | 'brand';
}

export function CTASection({
  headline = 'Ready to Begin?',
  description = 'Every project starts with a free consultation — we visit your property, understand your vision, and provide a no-obligation proposal with a full 3D design.',
}: CTASectionProps) {
  return (
    <section className="relative bg-ink-950 overflow-hidden">
      {/* Gold accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Subtle texture orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gold-600/5 -top-[20%] -right-[10%] blur-3xl pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gold-600/4 -bottom-[15%] -left-[5%] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-dark mb-8">Start Your Project</p>
          <h2
            className="font-display font-light text-white leading-[1.06] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            {headline}
          </h2>
          <p className="font-body text-white/50 text-lg leading-relaxed mb-12">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold-500 text-ink-950 font-body font-semibold text-[13px] tracking-[0.12em] uppercase hover:bg-gold-400 transition-colors duration-300 rounded-sm shadow-glow"
            >
              Begin Your Project
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2.5 font-body text-sm text-white/50 hover:text-gold-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
