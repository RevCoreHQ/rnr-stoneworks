import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { footerNav } from '@/data/navigation';

const LOGO_URL = 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/699191dd24813c44b3afb6e9.webp';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-cream-100 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 pb-16 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src={LOGO_URL}
                alt="Rock N Roll Stoneworks logo"
                width={44}
                height={44}
                className="h-11 w-11 object-contain shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-semibold text-white tracking-wide">
                  Rock N Roll
                </span>
                <span className="font-body text-[10px] font-medium tracking-[0.26em] uppercase text-gold-500 mt-0.5">
                  Stoneworks
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-white/40 leading-relaxed mb-8 max-w-sm">
              Custom outdoor living environments for discerning homeowners across the Colorado Front Range. Belgard Authorized. ICPI Certified. Design–build specialists.
            </p>
            <div className="space-y-3 mb-8">
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-3 font-body text-sm text-white/50 hover:text-gold-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 font-body text-sm text-white/50 hover:text-gold-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/40">{siteConfig.address.full}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-gold-600/50 hover:text-gold-400 transition-all rounded-sm" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:border-gold-600/50 hover:text-gold-400 transition-all rounded-sm" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-medium">Services</p>
            <ul className="space-y-3">
              {footerNav.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-medium">Company</p>
            <ul className="space-y-3">
              {footerNav.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/30 mb-5 font-medium">Service Areas</p>
            <ul className="space-y-3">
              {footerNav.areas.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-white/50 hover:text-gold-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="font-body text-xs text-white/20">
            © {currentYear} {siteConfig.name}, LLC. All rights reserved.
          </p>
          <p className="font-body text-[10px] tracking-[0.18em] uppercase text-gold-700/50">
            Belgard Authorized · ICPI Certified · Lafayette, CO
          </p>
        </div>
      </div>
    </footer>
  );
}
