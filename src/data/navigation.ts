export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Paver Installations', href: '/services/paver-installations' },
      { label: 'Fire Pits & Fireplaces', href: '/services/fire-pits-fireplaces' },
      { label: 'Outdoor Kitchens', href: '/services/outdoor-kitchens' },
      { label: 'Water Features', href: '/services/water-features' },
      { label: 'Retaining Walls & Stairs', href: '/services/retaining-walls-stairs' },
      { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
      { label: 'Artificial Turf', href: '/services/artificial-turf' },
      { label: 'Decks & Pergolas', href: '/services/decks-pergolas' },
      { label: 'Stamped Concrete', href: '/services/stamped-concrete' },
      { label: 'Stone Veneers', href: '/services/stone-veneers' },
    ],
  },
  {
    label: 'Pools & Spas',
    href: '/pools-spas',
    children: [
      { label: 'Fiberglass Pools', href: '/pools-spas/fiberglass-pools' },
      { label: 'Concrete & Gunite Pools', href: '/pools-spas/concrete-gunite-pools' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Areas',
    href: '/service-areas',
    children: [
      { label: 'Lafayette', href: '/service-areas/lafayette' },
      { label: 'Erie', href: '/service-areas/erie' },
      { label: 'Boulder', href: '/service-areas/boulder' },
      { label: 'Westminster', href: '/service-areas/westminster' },
      { label: 'Longmont', href: '/service-areas/longmont' },
      { label: 'Firestone & Frederick', href: '/service-areas/firestone-frederick' },
    ],
  },
  { label: 'About', href: '/about' },
];

export const footerNav = {
  services: [
    { label: 'Paver Installations', href: '/services/paver-installations' },
    { label: 'Fire Pits & Fireplaces', href: '/services/fire-pits-fireplaces' },
    { label: 'Outdoor Kitchens', href: '/services/outdoor-kitchens' },
    { label: 'Water Features', href: '/services/water-features' },
    { label: 'Retaining Walls & Stairs', href: '/services/retaining-walls-stairs' },
    { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
    { label: 'Artificial Turf', href: '/services/artificial-turf' },
    { label: 'Stamped Concrete', href: '/services/stamped-concrete' },
  ],
  pools: [
    { label: 'Fiberglass Pools', href: '/pools-spas/fiberglass-pools' },
    { label: 'Concrete & Gunite Pools', href: '/pools-spas/concrete-gunite-pools' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  areas: [
    { label: 'Lafayette, CO', href: '/service-areas/lafayette' },
    { label: 'Erie, CO', href: '/service-areas/erie' },
    { label: 'Boulder, CO', href: '/service-areas/boulder' },
    { label: 'Westminster, CO', href: '/service-areas/westminster' },
    { label: 'Longmont, CO', href: '/service-areas/longmont' },
    { label: 'Firestone & Frederick', href: '/service-areas/firestone-frederick' },
  ],
};
