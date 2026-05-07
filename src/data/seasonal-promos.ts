export type SeasonKey = 'winter' | 'spring' | 'summer' | 'fall';

export interface SeasonalPromo {
  /** Stable id for session dismiss + analytics */
  season: SeasonKey;
  /** Calendar months (0 = Jan … 11 = Dec). Northern Hemisphere / Colorado. */
  months: number[];
  /** Short label for the card eyebrow, e.g. "Spring" */
  label: string;
  headline: string;
  cta: string;
  href: string;
}

/**
 * Non-overlapping month buckets. `getCurrentPromo` falls back to the nearest
 * season if dates are ever misconfigured.
 */
export const seasonalPromos: SeasonalPromo[] = [
  {
    season: 'winter',
    months: [11, 0, 1],
    label: 'Winter',
    headline:
      'Winter planning special: 10% off qualifying new pool & outdoor living contracts, or a free $1,200 robotic pool cleaner with full pool builds. Ask for details.',
    cta: 'Contact Us',
    href: '/contact',
  },
  {
    season: 'spring',
    months: [2, 3, 4],
    label: 'Spring',
    headline:
      'Spring booking window: lock in your summer start date, 10% off qualifying new outdoor living projects when you contract this season. Limited schedule.',
    cta: 'Book Now',
    href: '/contact',
  },
  {
    season: 'summer',
    months: [5, 6, 7],
    label: 'Summer',
    headline:
      'Summer build season: limited crew spots left for pool & full-yard outdoor projects. Reserve your place on the calendar.',
    cta: 'Get Your Spot',
    href: '/contact',
  },
  {
    season: 'fall',
    months: [8, 9, 10],
    label: 'Fall',
    headline:
      'Fall install window: 15% off qualifying new outdoor living projects booked before we winterize the schedule. Weather-dependent start dates.',
    cta: 'Get a Free Quote',
    href: '/contact',
  },
];

export function getCurrentPromo(): SeasonalPromo {
  const month = new Date().getMonth();
  const match = seasonalPromos.find((p) => p.months.includes(month));
  if (match) return match;
  // Misconfigured month, safe default
  return seasonalPromos[0];
}
