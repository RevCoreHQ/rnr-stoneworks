export const siteConfig = {
  name: 'Rock N Roll Stoneworks',
  tagline: 'Custom Outdoor Spaces Built to Last',
  description:
    "Colorado's trusted custom pool, spa, and outdoor living contractor. Fiberglass and concrete pools, paver installations, fire features, outdoor kitchens, and complete hardscape across the Colorado Front Range. Free estimates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rnrstoneworks.com',
  ogImage: 'https://assets.cdn.filesafe.space/9Er0a3QxE3UXUVoCQNyS/media/69b41c34070c5886395d2f91.png',
  phone: '(720) 371-2403',
  phoneRaw: '+17203712403',
  email: 'rnrstoneworks@gmail.com',
  address: {
    street: '11021 Yellowstone Road',
    city: 'Longmont',
    state: 'CO',
    zip: '80504',
    full: '11021 Yellowstone Road, Longmont, CO 80504',
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
    { label: 'Latham Pools Authorized Dealer', icon: 'BadgeCheck' as const },
    { label: '2-Year Guarantee', icon: 'Star' as const },
    { label: 'Free Estimates', icon: 'FileText' as const },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
