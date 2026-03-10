'use client';

import { Phone, FileText } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-cream-200 shadow-elevate">
      <div className="grid grid-cols-2 divide-x divide-cream-200">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-ink-800 hover:bg-cream-50 active:bg-cream-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-700" />
          Call Now
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-gold-700 hover:bg-gold-800 active:bg-gold-900 transition-colors"
        >
          <FileText className="w-4 h-4" />
          Free Estimate
        </a>
      </div>
    </div>
  );
}
