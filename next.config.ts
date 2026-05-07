import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

// Next 16+ Turbopack can infer the wrong monorepo root (e.g. a parent ~/package-lock.json),
// which makes `public/` resolve from the wrong directory, local `/images/*` then 404 and
// <Image> shows only the parent `bg-cream-200` on blog cards.
const turbopackProjectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackProjectRoot,
  },
  images: {
    // Next 16 defaults to qualities: [75] only; any other `quality` on <Image> returns 400 from /_next/image.
    qualities: [35, 40, 60, 65, 75, 80, 82, 85],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.cdn.filesafe.space' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'lirp.cdn-website.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/swimming-pools',
        destination: '/pools-spas/fiberglass-pools',
        permanent: true,
      },
      {
        source: '/pools-spas/concrete-gunite-pools',
        destination: '/pools-spas/concrete-shotcrete-pools',
        permanent: true,
      },
      // Legacy Squarespace paths (historical traffic / bookmarks)
      { source: '/contactus', destination: '/contact', permanent: true },
      // Duplicate contact URL → single canonical /contact (SEO + IA)
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/project-gallery', destination: '/gallery', permanent: true },
      { source: '/before-and-afters', destination: '/gallery', permanent: true },
      {
        source:
          '/projects-and-inspiration/pavers-vs-stamped-concrete-theres-a-clear-winner',
        destination: '/blog/pavers-vs-stamped-concrete-colorado',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
