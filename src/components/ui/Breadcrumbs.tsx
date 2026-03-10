import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export function Breadcrumbs({ items, variant = 'light' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm">
        <li>
          <Link
            href="/"
            className={cn(
              'flex items-center hover:opacity-100 transition-opacity',
              variant === 'dark' ? 'text-slate-400 hover:text-white opacity-70' : 'text-ink-400 hover:text-gold-600 opacity-80'
            )}
          >
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <ChevronRight
              className={cn(
                'w-3.5 h-3.5',
                variant === 'dark' ? 'text-slate-600' : 'text-ink-300'
              )}
            />
            <Link
              href={item.href}
              className={cn(
                'font-medium transition-colors',
                variant === 'dark'
                  ? 'text-slate-300 hover:text-white'
                  : 'text-ink-500 hover:text-gold-600'
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
