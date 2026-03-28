/* ------------------------------------------------------------------ */
/*  Pool Builder / Estimator – pricing data                           */
/* ------------------------------------------------------------------ */

export interface PriceRange {
  low: number;
  high: number;
}

export interface PoolTypeOption {
  id: 'fiberglass' | 'concrete';
  title: string;
  tagline: string;
  description: string;
}

export interface PoolSizeOption {
  id: string;
  label: string;
  dimensions: string;
  price: Record<'fiberglass' | 'concrete', PriceRange>;
}

export interface PoolShapeOption {
  id: string;
  label: string;
  description: string;
  poolTypes: ('fiberglass' | 'concrete')[];
}

export interface PoolFeature {
  id: string;
  label: string;
  description: string;
  price: PriceRange;
}

export interface PoolAddOn {
  id: string;
  label: string;
  description: string;
  price: PriceRange;
}

/* ---- Pool types -------------------------------------------------- */

export const poolTypes: PoolTypeOption[] = [
  {
    id: 'fiberglass',
    title: 'Fiberglass Pool',
    tagline: 'Fast Install · Low Maintenance',
    description:
      'Factory-molded Latham fiberglass shells installed in as little as 2–3 weeks. Lifetime structural warranty, virtually zero resurfacing.',
  },
  {
    id: 'concrete',
    title: 'Concrete / Shotcrete Pool',
    tagline: 'Fully Custom · Unlimited Design',
    description:
      'Completely custom-built on site. Choose any shape, size, depth, or finish — the only limit is your imagination.',
  },
];

/* ---- Sizes ------------------------------------------------------- */

export const poolSizes: PoolSizeOption[] = [
  {
    id: 'small',
    label: 'Small',
    dimensions: '~12 × 24 ft',
    price: {
      fiberglass: { low: 65_000, high: 80_000 },
      concrete: { low: 85_000, high: 110_000 },
    },
  },
  {
    id: 'medium',
    label: 'Medium',
    dimensions: '~14 × 30 ft',
    price: {
      fiberglass: { low: 80_000, high: 100_000 },
      concrete: { low: 110_000, high: 150_000 },
    },
  },
  {
    id: 'large',
    label: 'Large',
    dimensions: '~16 × 36 ft',
    price: {
      fiberglass: { low: 100_000, high: 130_000 },
      concrete: { low: 150_000, high: 200_000 },
    },
  },
  {
    id: 'xl',
    label: 'Extra Large',
    dimensions: '~18 × 42 ft',
    price: {
      fiberglass: { low: 130_000, high: 175_000 },
      concrete: { low: 200_000, high: 300_000 },
    },
  },
];

/* ---- Shapes ------------------------------------------------------ */

export const poolShapes: PoolShapeOption[] = [
  {
    id: 'rectangle',
    label: 'Rectangle',
    description: 'Clean, classic lines — ideal for lap swimming and modern aesthetics.',
    poolTypes: ['fiberglass', 'concrete'],
  },
  {
    id: 'freeform',
    label: 'Freeform',
    description: 'Organic, flowing curves that blend naturally with the landscape.',
    poolTypes: ['fiberglass', 'concrete'],
  },
  {
    id: 'roman',
    label: 'Roman / Grecian',
    description: 'Elegant symmetrical curves with a timeless, classic look.',
    poolTypes: ['fiberglass', 'concrete'],
  },
  {
    id: 'l-shape',
    label: 'L-Shape',
    description: 'Versatile layout with separate zones for lounging and swimming.',
    poolTypes: ['fiberglass', 'concrete'],
  },
  {
    id: 'infinity',
    label: 'Infinity Edge',
    description: 'Vanishing edge that creates a stunning visual effect — premium concrete only.',
    poolTypes: ['concrete'],
  },
  {
    id: 'geometric',
    label: 'Geometric',
    description: 'Bold, angular shapes — hexagons, octagons, and custom polygons.',
    poolTypes: ['concrete'],
  },
];

/* ---- Features (multi-select) ------------------------------------- */

export const poolFeatures: PoolFeature[] = [
  {
    id: 'spa',
    label: 'Attached Spa',
    description: 'Built-in hot tub with dedicated jets and heating.',
    price: { low: 20_000, high: 35_000 },
  },
  {
    id: 'tanning-ledge',
    label: 'Tanning Ledge',
    description: 'Shallow sun shelf for lounging in inches of water.',
    price: { low: 5_000, high: 10_000 },
  },
  {
    id: 'water-features',
    label: 'Water Features',
    description: 'Waterfalls, scuppers, bubblers, or deck jets.',
    price: { low: 3_000, high: 12_000 },
  },
  {
    id: 'led-lighting',
    label: 'LED Lighting',
    description: 'Color-changing underwater and perimeter lighting.',
    price: { low: 3_000, high: 8_000 },
  },
  {
    id: 'auto-cover',
    label: 'Automatic Cover',
    description: 'Motorized safety cover for protection and heat retention.',
    price: { low: 12_000, high: 22_000 },
  },
  {
    id: 'heater',
    label: 'Pool Heater',
    description: 'Gas or heat pump for extended swim season in Colorado.',
    price: { low: 5_000, high: 10_000 },
  },
];

/* ---- Add-ons (multi-select) -------------------------------------- */

export const poolAddOns: PoolAddOn[] = [
  {
    id: 'paver-deck',
    label: 'Paver Pool Deck',
    description: 'Premium Belgard paver deck surrounding the pool.',
    price: { low: 20_000, high: 45_000 },
  },
  {
    id: 'outdoor-kitchen',
    label: 'Outdoor Kitchen',
    description: 'Built-in grill, countertops, and wet bar.',
    price: { low: 25_000, high: 65_000 },
  },
  {
    id: 'fire-feature',
    label: 'Fire Feature',
    description: 'Fire pit, fire bowls, or fireplace near the pool.',
    price: { low: 8_000, high: 20_000 },
  },
  {
    id: 'pergola',
    label: 'Pergola / Shade Structure',
    description: 'Covered area for shade and outdoor comfort.',
    price: { low: 15_000, high: 35_000 },
  },
  {
    id: 'landscape',
    label: 'Landscape Package',
    description: 'Professional landscaping integrated with the pool area.',
    price: { low: 10_000, high: 25_000 },
  },
  {
    id: 'retaining-wall',
    label: 'Retaining Wall',
    description: 'Structural or decorative walls for grading and elevation.',
    price: { low: 8_000, high: 20_000 },
  },
];

/* ---- Helpers ----------------------------------------------------- */

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRange(range: PriceRange): string {
  return `${formatPrice(range.low)} – ${formatPrice(range.high)}`;
}
