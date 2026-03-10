import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services as allServices, type ServiceData } from '@/data/services';

interface ServiceCardsProps {
  services?: ServiceData[];
  category?: 'hardscape' | 'outdoor-living' | 'landscape';
  title?: string;
  subtitle?: string;
}

export function ServiceCards({ services, category, title, subtitle }: ServiceCardsProps) {
  const items = services ?? (category ? allServices.filter((s) => s.category === category) : allServices);

  return (
    <div className="mb-0">
      {(title || subtitle) && (
        <div className="mb-4 pt-8">
          {subtitle && <p className="label mb-2">{subtitle}</p>}
          {title && (
            <h2 className="font-display font-light text-ink-900 text-2xl">{title}</h2>
          )}
        </div>
      )}
      <div className="space-y-0">
        {items.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group flex items-center justify-between py-5 border-b border-gold-100 hover:border-gold-300 transition-colors duration-300"
          >
            <div className="flex items-center gap-6">
              <span className="font-display text-xl font-light text-gold-300 w-9 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-body font-semibold text-ink-900 group-hover:text-gold-700 transition-colors">
                  {s.title}
                </p>
                <p className="font-body text-ink-400 text-sm mt-0.5 max-w-lg leading-relaxed hidden sm:block line-clamp-1">
                  {s.intro?.slice(0, 100)}…
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gold-400 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        ))}
      </div>
    </div>
  );
}
