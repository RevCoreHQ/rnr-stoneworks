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
      { '@type': 'City', name: 'Denver', addressRegion: 'CO' },
      { '@type': 'City', name: 'Boulder', addressRegion: 'CO' },
      { '@type': 'City', name: 'Highlands Ranch', addressRegion: 'CO' },
      { '@type': 'City', name: 'Littleton', addressRegion: 'CO' },
      { '@type': 'City', name: 'Aurora', addressRegion: 'CO' },
      { '@type': 'City', name: 'Lakewood', addressRegion: 'CO' },
      { '@type': 'City', name: 'Lafayette', addressRegion: 'CO' },
      { '@type': 'City', name: 'Erie', addressRegion: 'CO' },
      { '@type': 'City', name: 'Westminster', addressRegion: 'CO' },
      { '@type': 'City', name: 'Broomfield', addressRegion: 'CO' },
      { '@type': 'City', name: 'Louisville', addressRegion: 'CO' },
      { '@type': 'City', name: 'Superior', addressRegion: 'CO' },
      { '@type': 'City', name: 'Firestone', addressRegion: 'CO' },
      { '@type': 'City', name: 'Frederick', addressRegion: 'CO' },
      { '@type': 'City', name: 'Fort Collins', addressRegion: 'CO' },
      { '@type': 'City', name: 'Loveland', addressRegion: 'CO' },
      { '@type': 'City', name: 'Brighton', addressRegion: 'CO' },
      { '@type': 'City', name: 'Longmont', addressRegion: 'CO' },
      { '@type': 'City', name: 'Thornton', addressRegion: 'CO' },
      { '@type': 'City', name: 'Northglenn', addressRegion: 'CO' },
    ],
    founder: {
      '@type': 'Person',
      name: 'Jordan',
      jobTitle: 'Owner',
    },
    foundingDate: '2017',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '25',
      bestRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        author: { '@type': 'Person', name: 'Tyra Ware' },
        datePublished: '2020-08-15',
        reviewBody: 'Both my husband and I are extremely glad we picked Rock N Roll Stoneworks for our outdoor project. Jordan and Jason were a pleasure to work with from the planning of the design details to the completed backyard of our dreams.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        author: { '@type': 'Person', name: 'Sara Seitzman Hazard' },
        datePublished: '2022-08-10',
        reviewBody: 'We are so thrilled with our new patio! These guys did a great job and were a pleasure to work with.',
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        author: { '@type': 'Person', name: 'Rebecca Staley' },
        datePublished: '2019-01-15',
        reviewBody: 'Contracted with Rock n Roll Stoneworks for a large project. Jordan\'s expertise was invaluable for design and materials selection. Results exceeded our expectations.',
      },
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
      'Fiberglass Pool Installation',
      'Concrete Pool Construction',
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

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { '@type': 'ImageObject', url: siteConfig.ogImage },
    founder: { '@type': 'Person', name: 'Jordan' },
    foundingDate: '2017',
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 15 },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean),
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteConfig.url}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function reviewSchema(reviews: { author: string; quote: string; rating: number; date?: string }[]) {
  return reviews.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
    },
    author: { '@type': 'Person', name: r.author },
    reviewBody: r.quote,
    ...(r.date && { datePublished: r.date }),
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#business`,
      name: siteConfig.name,
    },
  }));
}

export function howToSchema(name: string, description: string, steps: { title: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
}

export function imageGallerySchema(images: { src: string; alt: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Rock N Roll Stoneworks Project Portfolio',
    description: 'Custom paver installations, fire pits, outdoor kitchens, and hardscape projects across the Colorado Front Range.',
    image: images.map((img) => ({
      '@type': 'ImageObject',
      url: img.src,
      description: img.alt,
    })),
  };
}

export function geoServiceSchema(name: string, description: string, url: string, geo?: { lat: number; lng: number }) {
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
    areaServed: geo
      ? {
          '@type': 'Place',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: geo.lat,
            longitude: geo.lng,
          },
        }
      : {
          '@type': 'State',
          name: 'Colorado',
        },
  };
}
