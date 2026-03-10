import { BadgeCheck, Shield, Star, FileText } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const iconMap = { BadgeCheck, Shield, Star, FileText } as const;

export function TrustStrip() {
  return (
    <div className="bg-cream-50 border-b border-gold-200/40">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {siteConfig.trustPoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.label}
                className={[
                  'flex items-center gap-3 py-5',
                  i !== siteConfig.trustPoints.length - 1 ? 'border-r border-gold-200/40' : '',
                  i > 0 ? 'pl-6' : '',
                ].join(' ')}
              >
                <Icon className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="font-body text-sm font-medium text-ink-700">{point.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
