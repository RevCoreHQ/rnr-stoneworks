import type { Metadata } from 'next';
import { Raleway, DM_Sans } from 'next/font/google';
import { siteConfig } from '@/data/site-config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { MotionProvider } from '@/components/motion/MotionProvider';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { BackToTop } from '@/components/motion/BackToTop';
import { PromoBanner } from '@/components/layout/PromoBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import '@/styles/globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Custom Outdoor Spaces in Lafayette & Boulder, CO`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'paver installation Lafayette CO',
    'hardscape contractor Boulder County',
    'outdoor fire pit Colorado',
    'outdoor kitchen Lafayette',
    'retaining wall Erie CO',
    'Belgard authorized contractor Colorado',
    'paver patio Boulder CO',
    'outdoor living contractor Lafayette',
    'Rock N Roll Stoneworks',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: `${siteConfig.name}, Custom Outdoor Spaces in Colorado` }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${raleway.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://assets.cdn.filesafe.space" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.cdn.filesafe.space" />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <MotionProvider>
          <PromoBanner />
          <ScrollProgress />
          <Header />
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <MobileBottomBar />
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
