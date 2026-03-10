export const siteConfig = {
  name: 'Rock N Roll Stoneworks',
  tagline: 'Custom Outdoor Spaces Built to Last',
  description:
    "Colorado's trusted hardscape and outdoor living contractor. Custom paver installations, fire pits, outdoor kitchens, water features, and retaining walls in Lafayette, Erie, Boulder, and surrounding areas. Belgard Authorized. Free estimates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rnrstoneworks.com',
  ogImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop',
  phone: '(303) 587-3035',
  phoneRaw: '+13035873035',
  email: 'rnrstoneworks@gmail.com',
  address: {
    street: '12420 Arapahoe Road',
    city: 'Lafayette',
    state: 'CO',
    zip: '80026',
    full: '12420 Arapahoe Road, Lafayette, CO 80026',
  },
  hours: {
    weekday: '7:00 AM – 6:00 PM',
    saturday: '8:00 AM – 4:00 PM',
    sunday: 'Closed',
    schema: ['Mo-Fr 07:00-18:00', 'Sa 08:00-16:00'],
  },
  social: {
    instagram: 'https://www.instagram.com/rocknroll_stoneworks',
    facebook: 'https://www.facebook.com/RnRStoneworks',
    google: '',
  },
  trustPoints: [
    { label: 'Belgard Authorized Contractor', icon: 'BadgeCheck' as const },
    { label: 'ICPI Certified Installer', icon: 'Shield' as const },
    { label: '2-Year Guarantee', icon: 'Star' as const },
    { label: 'Free Estimates', icon: 'FileText' as const },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
