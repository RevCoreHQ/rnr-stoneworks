'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { mainNav } from '@/data/navigation';
import { cn } from '@/lib/utils';

const LOGO_URL = 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/699191dd24813c44b3afb6e9.webp';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || mobileOpen
          ? 'bg-ink-950/95 backdrop-blur-xl border-b border-white/5 shadow-ink'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-18 lg:h-22">

          {/* Logo: image + full name */}
          <Link href="/" className="shrink-0 group flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="Rock N Roll Stoneworks logo"
              width={44}
              height={44}
              className="h-10 w-10 object-contain shrink-0"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-semibold text-white tracking-wide group-hover:text-gold-400 transition-colors duration-300">
                Rock N Roll
              </span>
              <span className="font-body text-[10px] font-medium tracking-[0.26em] uppercase text-gold-500 mt-0.5">
                Stoneworks
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0" aria-label="Main navigation">
            {mainNav.filter(n => n.label !== 'Home').map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-0.5 px-3.5 py-2 text-[13px] font-body font-medium text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap tracking-wide"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 ml-0.5 opacity-60" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-3 z-50">
                    <div className="w-60 bg-ink-900/98 backdrop-blur-xl rounded-xl border border-white/8 py-2 shadow-ink animate-fade-in">
                      <div className="absolute top-3 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />
                      <div className="pt-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-[13px] text-white/60 hover:text-gold-400 hover:bg-white/4 transition-all duration-150 font-body"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-[13px] font-medium text-white/60 hover:text-gold-400 transition-colors duration-200 whitespace-nowrap font-body"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-[13px] font-medium font-body tracking-wide border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-ink-950 hover:border-gold-500 transition-all duration-300 rounded-sm"
            >
              Begin Your Project
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/8 animate-fade-in">
          <nav className="px-6 py-5 space-y-0.5">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-body font-medium text-white/70 hover:text-gold-400 transition-colors border-b border-white/5"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 pt-1 pb-2 space-y-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-white/45 hover:text-gold-400 transition-colors font-body"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="px-6 pb-6 pt-2 flex gap-3">
            <Link
              href="/contact"
              className="flex-1 py-3 text-center text-sm font-medium font-body border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-ink-950 transition-all rounded-sm"
              onClick={() => setMobileOpen(false)}
            >
              Begin Your Project
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex-1 py-3 text-center text-sm font-medium font-body text-white/60 border border-white/15 rounded-sm hover:border-white/30 transition-all"
            >
              <Phone className="w-4 h-4 inline mr-1.5" />
              Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
