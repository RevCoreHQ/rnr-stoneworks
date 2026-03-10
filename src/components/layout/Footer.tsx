import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { footerNav } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 relative">
      {/* Premium gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-amber/50 to-transparent" />
      <div className="absolute top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-700/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center shrink-0">
                <span className="text-white font-display font-bold text-xs">RNR</span>
              </div>
              <div>
                <span className="font-display text-base font-bold text-white block leading-tight">
                  Rock N Roll
                </span>
                <span className="text-xs font-medium text-brand-400 uppercase tracking-widest">
                  Stoneworks
                </span>
              </div>
            </Link>
            <p className="text-sm text-stone-400 mb-6 leading-relaxed">
              Custom outdoor spaces built to last. Paver installations, fire pits, outdoor kitchens,
              water features, and complete hardscape transformations in Lafayette, Erie, Boulder, and
              surrounding Colorado communities.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 text-stone-300 hover:text-brand-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-stone-300 hover:text-brand-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-stone-400">{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                <span className="text-stone-400">Mon–Fri {siteConfig.hours.weekday} · Sat {siteConfig.hours.saturday}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-brand-400 hover:border-brand-700 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-brand-400 hover:border-brand-700 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Areas We Serve</h3>
            <ul className="space-y-2.5">
              {footerNav.areas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="mt-6 p-4 bg-stone-900 rounded-xl border border-stone-800"
              style={{ borderTop: '2px solid var(--amber-dark)' }}
            >
              <p className="text-xs font-semibold text-stone-300 mb-1">Belgard Authorized Contractor</p>
              <p className="text-xs text-stone-500">ICPI Certified · 2-Year Guarantee · Free Estimates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-600">
            © {currentYear} {siteConfig.name}, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-stone-600">
            <Link href="/sitemap.xml" className="hover:text-stone-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
