import { Metadata } from 'next';
import { siteConfig } from '@/data/site-config';

interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: 'website' | 'article';
  /** Search keywords / phrases (Next metadata `keywords`) */
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  type,
  keywords,
}: PageMetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const rawImage = ogImage || siteConfig.ogImage;
  const image =
    rawImage.startsWith('/') ? `${siteConfig.url}${rawImage}` : rawImage;
  const ogType = type ?? (path.startsWith('/blog/') ? 'article' : 'website');

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_US',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
