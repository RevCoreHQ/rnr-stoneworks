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

export interface PoolFinishOption {
  id: string;
  label: string;
  description: string;
  price: PriceRange;
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
      'Completely custom-built on site. Choose any shape, size, depth, or finish, the only limit is your imagination.',
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
    description: 'Clean, classic lines, ideal for lap swimming and modern aesthetics.',
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
    description: 'Vanishing edge that creates a stunning visual effect, premium concrete only.',
    poolTypes: ['concrete'],
  },
  {
    id: 'geometric',
    label: 'Geometric',
    description: 'Bold, angular shapes, hexagons, octagons, and custom polygons.',
    poolTypes: ['concrete'],
  },
];

/* ---- Interior finish --------------------------------------------- */

export const poolFinishes: PoolFinishOption[] = [
  {
    id: 'standard-plaster',
    label: 'Standard Plaster',
    description: 'Classic white marcite finish, smooth, bright, and budget-friendly.',
    price: { low: 0, high: 0 },
    poolTypes: ['concrete'],
  },
  {
    id: 'quartz-aggregate',
    label: 'Quartz Aggregate',
    description: 'Exposed quartz blend for a natural stone look and improved durability.',
    price: { low: 5_000, high: 10_000 },
    poolTypes: ['concrete'],
  },
  {
    id: 'pebble-finish',
    label: 'Pebble Finish',
    description: 'PebbleTec or river-stone aggregate, premium feel and 15+ year lifespan.',
    price: { low: 8_000, high: 15_000 },
    poolTypes: ['concrete'],
  },
  {
    id: 'glass-bead',
    label: 'Glass Bead / Tile',
    description: 'Luxurious glass bead or full tile interior, ultimate customization.',
    price: { low: 15_000, high: 30_000 },
    poolTypes: ['concrete'],
  },
  {
    id: 'fiberglass-gelcoat',
    label: 'Gelcoat Finish',
    description: 'Factory-applied smooth gelcoat, stain-resistant and low maintenance.',
    price: { low: 0, high: 0 },
    poolTypes: ['fiberglass'],
  },
  {
    id: 'fiberglass-shimmer',
    label: 'Shimmer Finish',
    description: 'Metallic shimmer gelcoat for a sparkling, high-end appearance.',
    price: { low: 3_000, high: 6_000 },
    poolTypes: ['fiberglass'],
  },
];

/* ---- Coping & edge material -------------------------------------- */

export const copingOptions: PoolFinishOption[] = [
  {
    id: 'standard-coping',
    label: 'Standard Coping',
    description: 'Bullnose concrete or precast coping, clean and durable.',
    price: { low: 0, high: 0 },
    poolTypes: ['fiberglass', 'concrete'],
  },
  {
    id: 'natural-stone',
    label: 'Natural Stone Coping',
    description: 'Travertine, limestone, or flagstone, timeless and elegant.',
    price: { low: 4_000, high: 10_000 },
    poolTypes: ['fiberglass', 'concrete'],
  },
  {
    id: 'paver-coping',
    label: 'Belgard Paver Coping',
    description: 'Premium Belgard pavers for a seamless match with your pool deck.',
    price: { low: 3_000, high: 8_000 },
    poolTypes: ['fiberglass', 'concrete'],
  },
];

/* ---- Features (multi-select) ------------------------------------- */

export const poolFeatures: PoolFeature[] = [
  {
    id: 'spa',
    label: 'Attached Spa / Hot Tub',
    description: 'Built-in spillover spa with dedicated jets, heating, and separate controls.',
    price: { low: 20_000, high: 35_000 },
  },
  {
    id: 'standalone-spa',
    label: 'Standalone Spa',
    description: 'Separate in-ground spa, can be heated independently from the pool.',
    price: { low: 15_000, high: 28_000 },
  },
  {
    id: 'tanning-ledge',
    label: 'Tanning Ledge / Baja Shelf',
    description: 'Shallow sun shelf for lounging in inches of water with optional bubblers.',
    price: { low: 5_000, high: 10_000 },
  },
  {
    id: 'swim-up-bar',
    label: 'Swim-Up Bar',
    description: 'In-pool bar seating with a raised counter, the ultimate entertainment feature.',
    price: { low: 8_000, high: 18_000 },
  },
  {
    id: 'water-features',
    label: 'Water Features',
    description: 'Waterfalls, scuppers, rain curtains, bubblers, or laminar jets.',
    price: { low: 3_000, high: 12_000 },
  },
  {
    id: 'led-lighting',
    label: 'LED Lighting Package',
    description: 'Color-changing underwater, perimeter, and landscape lighting with smart controls.',
    price: { low: 3_000, high: 8_000 },
  },
  {
    id: 'auto-cover',
    label: 'Automatic Safety Cover',
    description: 'Motorized cover for child/pet safety, heat retention, and debris protection.',
    price: { low: 12_000, high: 22_000 },
  },
  {
    id: 'heater',
    label: 'Pool Heater / Heat Pump',
    description: 'Gas heater or energy-efficient heat pump for year-round swimming in Colorado.',
    price: { low: 5_000, high: 10_000 },
  },
  {
    id: 'salt-system',
    label: 'Saltwater System',
    description: 'Salt chlorine generator, softer water, less chemicals, lower maintenance.',
    price: { low: 2_000, high: 5_000 },
  },
  {
    id: 'automation',
    label: 'Pool Automation',
    description: 'Smart control system for pumps, heater, lights, and water features from your phone.',
    price: { low: 3_000, high: 7_000 },
  },
  {
    id: 'slide',
    label: 'Pool Slide',
    description: 'Custom or pre-fab slide integrated into the pool design.',
    price: { low: 4_000, high: 12_000 },
  },
  {
    id: 'diving-board',
    label: 'Diving Board / Jump Rock',
    description: 'Diving board or natural boulder jump rock for deeper pools.',
    price: { low: 2_000, high: 6_000 },
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
  {
    id: 'pool-fence',
    label: 'Pool Safety Fence',
    description: 'Code-compliant aluminum, glass, or mesh safety fencing.',
    price: { low: 3_000, high: 10_000 },
  },
  {
    id: 'pool-house',
    label: 'Pool House / Cabana',
    description: 'Enclosed or open-air pool house for changing, storage, and entertaining.',
    price: { low: 30_000, high: 80_000 },
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
