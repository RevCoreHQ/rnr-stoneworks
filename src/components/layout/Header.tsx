'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { mainNav } from '@/data/navigation';

const LOGO_URL = 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/699191dd24813c44b3afb6e9.webp';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = scrolled || mobileOpen;

  return (
    <motion.header
      animate={{
        backgroundColor: isActive ? 'rgba(6, 12, 16, 0.95)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isActive ? 'blur(20px)' : 'blur(0px)',
        borderBottomColor: isActive ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0)',
        boxShadow: isActive ? '0 20px 60px -15px rgba(6, 12, 16, 0.5)' : '0 0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.4, ease }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo: image + full name */}
          <Link href="/" className="shrink-0 group flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="Rock N Roll Stoneworks logo"
              width={52}
              height={52}
              className="h-12 w-12 object-contain shrink-0"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[17px] font-semibold text-white tracking-wide group-hover:text-gold-400 transition-colors duration-300">
                Rock N Roll
              </span>
              <span className="font-body text-[11px] font-medium tracking-[0.26em] uppercase text-gold-500 mt-0.5">
                Stoneworks
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {mainNav.filter(n => n.label !== 'Home').map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-0.5 px-4 py-2.5 text-[14px] font-body font-medium text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap tracking-wide"
                >
                  {item.label}
                  {item.children && (
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-60" />
                    </motion.span>
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      key={`dropdown-${item.label}`}
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.2, ease }}
                      className="absolute top-full left-0 pt-2 z-50"
                    >
                      <div className="w-64 bg-ink-950 backdrop-blur-xl rounded-xl border border-white/10 py-2 shadow-ink">
                        <div className="absolute top-2 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent" />
                        <div className="pt-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-2.5 text-[13px] text-white/60 hover:text-gold-400 hover:bg-white/5 transition-all duration-150 font-body"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-[14px] font-medium text-white/60 hover:text-gold-400 transition-colors duration-200 whitespace-nowrap font-body"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 text-[13px] font-medium font-body tracking-wide border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-ink-950 hover:border-gold-500 transition-all duration-300 rounded-sm btn-shimmer"
            >
              Get Your Free Design
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="lg:hidden border-t border-white/8 overflow-hidden"
          >
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
                className="flex-1 py-3.5 text-center text-sm font-medium font-body border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-ink-950 transition-all rounded-sm"
                onClick={() => setMobileOpen(false)}
              >
                Get Your Free Design
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex-1 py-3.5 text-center text-sm font-medium font-body text-white/60 border border-white/15 rounded-sm hover:border-white/30 transition-all"
              >
                <Phone className="w-4 h-4 inline mr-1.5" />
                Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
