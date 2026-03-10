'use client';

import { Phone, FileText } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-stone-200 shadow-elevated safe-area-pb">
      <div className="grid grid-cols-2 divide-x divide-stone-200">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-stone-800 hover:bg-stone-50 active:bg-stone-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-brand-700" />
          Call Now
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-800 active:bg-brand-900 transition-colors"
        >
          <FileText className="w-4 h-4" />
          Free Estimate
        </a>
      </div>
    </div>
  );
}
