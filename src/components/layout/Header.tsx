'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { mainNav } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — text wordmark until brand logo is provided */}
          <Link href="/" className="shrink-0 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm leading-none">RNR</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-bold text-stone-900 leading-tight block">
                Rock N Roll
              </span>
              <span className="text-xs font-medium text-brand-700 uppercase tracking-widest leading-tight block">
                Stoneworks
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {mainNav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium text-stone-700 hover:text-brand-700 transition-colors rounded-lg hover:bg-brand-50/60 whitespace-nowrap',
                    item.children && 'pr-2'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-64 bg-white rounded-xl shadow-elevated border border-stone-100 py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-stone-700 hover:text-brand-700 hover:bg-brand-50/60 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-brand-700 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Button href="/contact" size="sm">
              Free Estimate
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-brand-700 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone-100 bg-white animate-fade-in">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-base font-medium text-stone-700 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-stone-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
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
          <div className="px-4 pb-4 pt-2 flex gap-3">
            <Button href="/contact" className="flex-1" size="sm">
              Free Estimate
            </Button>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border-2 border-brand-700 text-brand-800 hover:bg-brand-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
