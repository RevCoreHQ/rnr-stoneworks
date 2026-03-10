import { siteConfig } from '@/data/site-config';

export function localBusinessSchema() {
  const sameAs = [
    siteConfig.url,
    siteConfig.social.instagram,
    siteConfig.social.facebook,
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.ogImage,
    },
    image: siteConfig.ogImage,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.9936,
      longitude: -105.1019,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'CO',
      availableLanguage: 'English',
    },
    areaServed: [
      { '@type': 'City', name: 'Lafayette', addressRegion: 'CO' },
      { '@type': 'City', name: 'Erie', addressRegion: 'CO' },
      { '@type': 'City', name: 'Boulder', addressRegion: 'CO' },
      { '@type': 'City', name: 'Westminster', addressRegion: 'CO' },
      { '@type': 'City', name: 'Longmont', addressRegion: 'CO' },
      { '@type': 'City', name: 'Firestone', addressRegion: 'CO' },
      { '@type': 'City', name: 'Frederick', addressRegion: 'CO' },
    ],
    sameAs,
    priceRange: '$$$',
    knowsAbout: [
      'Paver Installations',
      'Outdoor Fire Pits',
      'Outdoor Fireplaces',
      'Outdoor Kitchens',
      'Water Features',
      'Retaining Walls',
      'Outdoor Lighting',
      'Artificial Turf',
      'Pergolas',
      'Stamped Concrete',
      'Stone Veneers',
      'Hardscape Design',
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#business`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: {
      '@type': 'State',
      name: 'Colorado',
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(title: string, description: string, url: string, datePublished: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
