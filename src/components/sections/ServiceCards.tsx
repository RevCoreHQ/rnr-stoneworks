import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import type { ServiceData } from '@/data/services';

interface ServiceCardsProps {
  title: string;
  subtitle: string;
  category: ServiceData['category'];
}

export function ServiceCards({ title, subtitle, category }: ServiceCardsProps) {
  const filtered = services.filter((s) => s.category === category);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="mb-10">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-amber" />
            <span className="gradient-text-amber">{subtitle}</span>
            <span className="w-6 h-px bg-accent-amber" />
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">{title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative bg-white rounded-2xl border border-stone-100 p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-xl font-display font-semibold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-3">
                {service.intro.slice(0, 120)}...
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
