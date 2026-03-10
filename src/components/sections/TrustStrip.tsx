import { BadgeCheck, Shield, Star, FileText } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const iconMap = {
  BadgeCheck,
  Shield,
  Star,
  FileText,
} as const;

export function TrustStrip() {
  return (
    <section className="relative -mt-8 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {siteConfig.trustPoints.map((point) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.label}
                className="group flex items-center gap-3 bg-white rounded-2xl p-4 lg:p-5 shadow-card border border-stone-100 hover:-translate-y-0.5 transition-all duration-300"
                style={{ borderTop: '2px solid var(--amber)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center shrink-0 group-hover:from-brand-100 group-hover:to-brand-200 transition-all">
                  <Icon className="w-5 h-5 text-brand-700" />
                </div>
                <span className="text-sm font-semibold text-stone-800 leading-tight">
                  {point.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
