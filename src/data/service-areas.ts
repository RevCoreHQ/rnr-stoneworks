export interface AreaBodySection {
  heading: string;
  text: string;
}

export interface ServiceAreaData {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  isPrimary: boolean;
  nearbyNote?: string;
  heroImage?: string;
  body: AreaBodySection[];
}

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: 'lafayette',
    city: 'Lafayette',
    state: 'CO',
    metaTitle: 'Paver & Hardscape Contractor in Lafayette, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom paver installations, fire pits, outdoor kitchens, and retaining walls in Lafayette, CO. Belgard authorized contractor. ICPI certified. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Lafayette, CO',
    intro:
      'Rock N Roll Stoneworks is based in Lafayette and serves homeowners throughout the community with custom paver installations, fire pits, outdoor kitchens, water features, retaining walls, and complete outdoor living environments. As your local hardscape contractor, we know Lafayette\'s neighborhoods, soil conditions, and permit processes inside and out.',
    isPrimary: true,
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop',
    body: [
      {
        heading: 'Your Local Lafayette Hardscape Contractor',
        text: 'Rock N Roll Stoneworks is headquartered at 12420 Arapahoe Road, right here in Lafayette. When you hire us, you are hiring your neighbors — a team that cares about the quality of work visible in our own community. We have built relationships with local inspectors, material suppliers, and subcontractors that allow us to move projects efficiently while maintaining the quality standards our Lafayette clients expect. Our trucks are in Lafayette neighborhoods most weeks of the year, and our reputation here is built on the completed projects visible in yards throughout the city.',
      },
      {
        heading: 'Lafayette Soil and Site Conditions',
        text: 'Lafayette sits on the Colorado Front Range where expansive clay soils are common. These soils expand when wet and contract when dry, creating movement that can damage poorly engineered hardscape structures over time. Rock N Roll Stoneworks accounts for Lafayette\'s soil conditions in every project design — using proper compacted aggregate bases, reinforced retaining wall systems, and drainage solutions that manage water movement and minimize soil movement beneath installed surfaces. This attention to geotechnical reality is what separates our work from contractors who use the same base preparation everywhere regardless of local conditions.',
      },
      {
        heading: 'Lafayette Permit Process',
        text: 'Lafayette requires permits for most structural outdoor projects, including retaining walls over four feet, decks, pergolas, and gas line connections. Rock N Roll Stoneworks handles permit research and application for every project we build in Lafayette. We know what the city requires, how to prepare the documentation, and who to work with in the inspection process to keep your project on schedule.',
      },
    ],
  },
  {
    slug: 'erie',
    city: 'Erie',
    state: 'CO',
    metaTitle: 'Paver & Hardscape Contractor in Erie, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom paver installations, fire pits, outdoor kitchens, and hardscape in Erie, CO. Belgard authorized. ICPI certified installer. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Erie, CO',
    intro:
      'Erie is one of the fastest-growing communities on the Colorado Front Range, and Rock N Roll Stoneworks serves Erie homeowners with the full range of outdoor living services — from paver patios and fire pits to complete backyard transformations. Whether your home is in a new Erie subdivision or an established neighborhood, our team brings the same craftsmanship to every project.',
    isPrimary: true,
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=700&fit=crop',
    body: [
      {
        heading: 'New Construction Outdoor Living in Erie',
        text: 'Erie\'s rapid growth means many homeowners move into properties with builder-grade minimal landscaping or completely blank backyard slates. This is an opportunity to design your outdoor space exactly as you want it from the start, without working around existing features or installations. Rock N Roll Stoneworks specializes in taking blank-slate Erie backyards and transforming them into complete outdoor living environments. Our 3D design process is particularly valuable in this context — giving new homeowners the ability to visualize their finished backyard before any concrete is poured or any stone is placed.',
      },
      {
        heading: 'Erie HOA Considerations',
        text: 'Many Erie neighborhoods have active HOAs with specific requirements for outdoor improvements. Rock N Roll Stoneworks is familiar with the HOA approval process common in Erie\'s master-planned communities and can help prepare the design documentation and material selections needed for HOA review and approval before work begins.',
      },
    ],
  },
  {
    slug: 'boulder',
    city: 'Boulder',
    state: 'CO',
    metaTitle: 'Paver & Hardscape Contractor in Boulder, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom hardscape, fire pits, outdoor kitchens, and paver installations in Boulder, CO. Belgard authorized contractor. Serving the Boulder area. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Boulder, CO',
    intro:
      'Boulder homeowners expect exceptional quality in every aspect of their property, and Rock N Roll Stoneworks delivers it. We serve the Boulder market with premium hardscape installations, fire features, outdoor kitchens, water features, and complete outdoor living designs that match the standard of care Boulder homeowners bring to their homes.',
    isPrimary: true,
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=700&fit=crop',
    body: [
      {
        heading: 'Boulder\'s Outdoor Culture',
        text: 'Boulder\'s active outdoor culture extends naturally into how residents use and value their outdoor living spaces. A well-designed outdoor environment in Boulder is not a luxury — it is a genuine extension of how people live. Rock N Roll Stoneworks brings a design sensibility that resonates with Boulder\'s appreciation for natural materials, functional spaces, and craftsmanship that respects the surrounding environment. We design with natural stone, native-compatible plantings, and water-wise approaches that fit Boulder\'s ethos.',
      },
      {
        heading: 'Boulder Building Regulations',
        text: 'Boulder has some of Colorado\'s most detailed building and landscaping regulations, including specific requirements for impervious surface coverage, drainage, and outdoor structures. Rock N Roll Stoneworks is familiar with Boulder\'s regulatory environment and designs projects to meet city requirements while maximizing the quality and scope of your outdoor living space.',
      },
    ],
  },
  {
    slug: 'westminster',
    city: 'Westminster',
    state: 'CO',
    metaTitle: 'Paver & Hardscape Contractor in Westminster, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom paver installations, fire pits, outdoor kitchens, and hardscape in Westminster, CO. ICPI certified. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Westminster, CO',
    intro:
      'Westminster homeowners trust Rock N Roll Stoneworks for premium outdoor living construction. From custom paver patios and fire pits to retaining walls and complete backyard transformations, we serve Westminster with the same craftsmanship and professionalism we bring to every community in our service area.',
    isPrimary: true,
    heroImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=700&fit=crop',
    body: [
      {
        heading: 'Westminster\'s Outdoor Living Market',
        text: 'Westminster\'s mix of established neighborhoods and newer development creates demand for both backyard transformations of existing spaces and ground-up outdoor living designs for newer properties. Rock N Roll Stoneworks has experience with both — whether retrofitting an outdated existing patio or designing a complete outdoor environment for a newly built home. Our consultation process starts with understanding what you have and what you want, then developing a design that achieves your goals within your budget.',
      },
    ],
  },
  {
    slug: 'longmont',
    city: 'Longmont',
    state: 'CO',
    metaTitle: 'Paver & Hardscape Contractor in Longmont, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom paver patios, fire pits, outdoor kitchens, and hardscape in Longmont, CO. Rock N Roll Stoneworks serves the Longmont area. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Longmont, CO',
    intro:
      'Rock N Roll Stoneworks serves Longmont homeowners with the full range of outdoor living construction services. From paver installations and fire features to retaining walls and complete outdoor room designs, we bring Belgard-quality craftsmanship to Longmont properties of every size and style.',
    isPrimary: false,
    nearbyNote: 'Longmont is within our service area. Call us to discuss your project and confirm scheduling availability.',
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=700&fit=crop',
    body: [
      {
        heading: 'Longmont Outdoor Living',
        text: 'Longmont\'s combination of established neighborhoods and newer subdivisions north of Boulder makes it one of the more varied outdoor living markets we serve. Older properties often have outdated or minimal hardscape that homeowners are ready to upgrade, while newer homes in developments like Prospect and the southeast quadrant often come with builder-grade landscaping that leaves significant room for improvement. Rock N Roll Stoneworks serves both markets with the same quality of design and construction, from modest patio upgrades to comprehensive outdoor environment builds.',
      },
    ],
  },
  {
    slug: 'firestone-frederick',
    city: 'Firestone & Frederick',
    state: 'CO',
    metaTitle: 'Paver & Hardscape Contractor in Firestone & Frederick, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom paver installations, fire pits, and outdoor living in Firestone and Frederick, CO. Rock N Roll Stoneworks. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Firestone & Frederick, CO',
    intro:
      'Rock N Roll Stoneworks serves homeowners in Firestone and Frederick with premium outdoor living construction. These growing communities offer larger lots and newer homes — an ideal canvas for comprehensive outdoor living projects that include paver patios, fire pits, outdoor kitchens, and complete backyard transformations.',
    isPrimary: false,
    nearbyNote: 'Firestone and Frederick are at the northern edge of our primary service area. Call us to discuss your project and confirm availability.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=700&fit=crop',
    body: [
      {
        heading: 'Growing Communities, Bigger Opportunities',
        text: 'Firestone and Frederick have seen significant residential growth as families seek more space and value north of Boulder and east of Longmont. The larger lots common in these communities create excellent opportunities for comprehensive outdoor living projects. Many homeowners in these areas are building outdoor spaces for the first time, and Rock N Roll Stoneworks helps them design complete environments — from the driveway approach to the back patio fire feature — that make the most of their property and investment.',
      },
    ],
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
