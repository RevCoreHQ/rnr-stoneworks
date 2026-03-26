export interface SeasonalPromo {
  season: string;
  months: number[]; // 0-indexed: 0=Jan, 11=Dec
  headline: string;
  cta: string;
  href: string;
}

export const seasonalPromos: SeasonalPromo[] = [
  {
    season: 'winter',
    months: [11, 0, 1], // Dec, Jan, Feb
    headline: 'Winter Sale: 10% off all Pool & Patio Projects OR Free $1,200 Robotic Pool Cleaner with All Pool Builds.',
    cta: 'Contact Us',
    href: '/contact',
  },
  {
    season: 'spring',
    months: [2, 3, 4], // Mar, Apr, May
    headline: 'Spring Booking Special: Lock in your summer project now and save 10% on all hardscape installations.',
    cta: 'Book Now',
    href: '/contact',
  },
  {
    season: 'summer',
    months: [5, 6, 7], // Jun, Jul, Aug
    headline: 'Summer is here — limited spots remaining for 2026 pool & patio builds. Reserve yours today.',
    cta: 'Get Your Spot',
    href: '/contact',
  },
  {
    season: 'fall',
    months: [8, 9, 10], // Sep, Oct, Nov
    headline: 'Fall into savings: 15% off fire pit & fireplace installations before the snow flies.',
    cta: 'Get a Free Quote',
    href: '/contact',
  },
];

export function getCurrentPromo(): SeasonalPromo {
  const month = new Date().getMonth();
  return seasonalPromos.find((p) => p.months.includes(month)) ?? seasonalPromos[0];
}
