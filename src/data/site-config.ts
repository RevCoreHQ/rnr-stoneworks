export const siteConfig = {
  name: 'Rock N Roll Stoneworks',
  tagline: 'Outdoor Design-Build for Colorado',
  description:
    'Longmont-based outdoor design-build: pools, spas, Belgard hardscape, outdoor kitchens, fire features, and full-yard living as a single contract, phased when it makes sense. Front Range from Fort Collins and Loveland through Boulder County and the north Denver metro. Free on-site consultations and detailed estimates.',
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
    { label: 'Integrated design-build', icon: 'Layers' as const },
    { label: '2-Year Guarantee', icon: 'Star' as const },
    { label: 'Free on-site consults', icon: 'FileText' as const },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
