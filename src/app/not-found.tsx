import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Rock N Roll Stoneworks',
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-cream-50 px-6 py-24">
      <div className="max-w-lg text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-gold-600 mb-4">
          404
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-900 mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-lg text-ink-600 mb-10">
          The page you are looking for may have been moved or no longer exists. Use the links below
          to find what you need.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="inline-block rounded-md bg-gold-500 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-gold-600"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
