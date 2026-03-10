import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { ArrowDown, Phone } from 'lucide-react';

interface HeroProps {
  headline: string;
  subheadline?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export function Hero({
  headline,
  subheadline,
  description,
  backgroundImage,
  backgroundVideo,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

      {/* Background */}
      {backgroundVideo ? (
        <>
          {backgroundImage && (
            <Image src={backgroundImage} alt="" fill priority sizes="100vw" quality={70} className="object-cover object-center" />
          )}
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-center">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </>
      ) : backgroundImage ? (
        <Image src={backgroundImage} alt="" fill priority sizes="100vw" quality={80} className="object-cover object-center" />
      ) : (
        <div className="absolute inset-0 bg-ink-950" />
      )}

      {/* Multi-layer overlay — dark at bottom where text lives */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-transparent" />

      {/* Champagne divider at very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold-600/60 via-gold-400/40 to-transparent" />

      {/* Scroll indicator — top right */}
      <div className="absolute top-1/2 right-8 lg:right-14 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <span className="label-dark text-vertical">Scroll to Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-gold-500/60 to-transparent" />
        <ArrowDown className="w-3.5 h-3.5 text-gold-500/60 animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28 pt-48">
        <div className="max-w-3xl">
          {subheadline && (
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <span className="gold-line" />
              <span className="label-dark">{subheadline}</span>
            </div>
          )}

          <h1 className="font-display font-light text-white leading-[1.02] mb-8 animate-fade-up"
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', textShadow: '0 4px 60px rgba(0,0,0,0.4)' }}>
            {headline}
          </h1>

          {description && (
            <p className="font-body text-lg lg:text-xl text-white/60 leading-relaxed mb-12 max-w-xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-ink-950 font-body font-semibold text-[13px] tracking-[0.12em] uppercase hover:bg-gold-400 transition-colors duration-300 rounded-sm shadow-glow"
            >
              Begin Your Project
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/20 text-white/70 font-body font-medium text-[13px] tracking-wide hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300 rounded-sm"
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
