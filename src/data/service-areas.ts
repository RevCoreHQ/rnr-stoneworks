export interface AreaBodySection {
  heading: string;
  text: string;
}

import type { PageContentImage } from '@/types/page-media';
import { buildAreaPageMedia } from '@/data/page-media-paths';

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
  heroImage: string;
  heroAlt: string;
  contentImages?: PageContentImage[];
  body: AreaBodySection[];
  geo: { lat: number; lng: number };
}

const serviceAreasBase: Omit<ServiceAreaData, 'heroImage' | 'heroAlt' | 'contentImages'>[] = [
  {
    slug: 'denver',
    city: 'Denver',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Denver CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, pools, and hardscape in Denver CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Denver, CO',
    intro:
      'Rock N Roll Stoneworks serves Denver homeowners with custom paver installations, fire pits, outdoor kitchens, pools, water features, retaining walls, and complete outdoor living environments. From Washington Park to Cherry Creek to Stapleton, we bring premium hardscape craftsmanship to every Denver neighborhood.',
    isPrimary: true,
    geo: { lat: 39.7392, lng: -104.9903 },
    body: [
      {
        heading: 'Denver\'s Outdoor Living Market',
        text: 'Denver\'s 300 days of sunshine and thriving outdoor culture make it one of the strongest markets for quality hardscape installations in the country. Homeowners across the city are investing in outdoor living spaces that extend their usable square footage and add lasting value to their properties. Rock N Roll Stoneworks brings Belgard-certified craftsmanship to Denver neighborhoods of every style, from historic bungalows to modern new builds.',
      },
      {
        heading: 'Denver Permit Process',
        text: 'Denver has specific permitting requirements for outdoor structures, retaining walls, and gas line connections. Rock N Roll Stoneworks handles permit research and application for every project we build in Denver. We know what the city requires and how to keep your project on schedule through the inspection process.',
      },
    ],
  },
  {
    slug: 'lafayette',
    city: 'Lafayette',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Lafayette CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and retaining walls in Lafayette CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Lafayette, CO',
    intro:
      'Rock N Roll Stoneworks serves Lafayette homeowners with custom paver installations, fire pits, outdoor kitchens, water features, retaining walls, and complete outdoor living environments. As a nearby hardscape contractor based in Longmont, we know Lafayette\'s neighborhoods, soil conditions, and permit processes inside and out.',
    isPrimary: true,
    geo: { lat: 39.9936, lng: -105.1019 },
    body: [
      {
        heading: 'Lafayette Soil and Site Conditions',
        text: 'Lafayette sits on the Colorado Front Range where expansive clay soils are common. These soils expand when wet and contract when dry, creating movement that can damage poorly engineered hardscape structures over time. Rock N Roll Stoneworks accounts for Lafayette\'s soil conditions in every project design, using proper compacted aggregate bases, reinforced retaining wall systems, and drainage solutions that manage water movement and minimize soil movement beneath installed surfaces. This attention to geotechnical reality is what separates our work from contractors who use the same base preparation everywhere regardless of local conditions.',
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
    metaTitle: 'Hardscape Contractor Erie CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Erie CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Erie, CO',
    intro:
      'Erie is one of the fastest-growing communities on the Colorado Front Range, and Rock N Roll Stoneworks serves Erie homeowners with the full range of outdoor living services, from paver patios and fire pits to complete backyard transformations. Whether your home is in a new Erie subdivision or an established neighborhood, our team brings the same craftsmanship to every project.',
    isPrimary: true,
    geo: { lat: 40.0503, lng: -105.0500 },
    body: [
      {
        heading: 'New Construction Outdoor Living in Erie',
        text: 'Erie\'s rapid growth means many homeowners move into properties with builder-grade minimal landscaping or completely blank backyard slates. This is an opportunity to design your outdoor space exactly as you want it from the start, without working around existing features or installations. Rock N Roll Stoneworks specializes in taking blank-slate Erie backyards and transforming them into complete outdoor living environments. Our design process is particularly valuable in this context, giving new homeowners the ability to visualize their finished backyard before any concrete is poured or any stone is placed.',
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
    metaTitle: 'Hardscape Contractor Boulder CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom hardscape, fire pits, outdoor kitchens, and pavers in Boulder CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Boulder, CO',
    intro:
      'Boulder homeowners expect exceptional quality in every aspect of their property, and Rock N Roll Stoneworks delivers it. We serve the Boulder market with premium hardscape installations, fire features, outdoor kitchens, water features, and complete outdoor living designs that match the standard of care Boulder homeowners bring to their homes.',
    isPrimary: true,
    geo: { lat: 40.0150, lng: -105.2705 },
    body: [
      {
        heading: 'Boulder\'s Outdoor Culture',
        text: 'Boulder\'s active outdoor culture extends naturally into how residents use and value their outdoor living spaces. A well-designed outdoor environment in Boulder is not a luxury, it is a genuine extension of how people live. Rock N Roll Stoneworks brings a design sensibility that resonates with Boulder\'s appreciation for natural materials, functional spaces, and craftsmanship that respects the surrounding environment. We design with natural stone, native-compatible plantings, and water-wise approaches that fit Boulder\'s ethos.',
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
    metaTitle: 'Hardscape Contractor Westminster | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Westminster CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Westminster, CO',
    intro:
      'Westminster homeowners trust Rock N Roll Stoneworks for premium outdoor living construction. From custom paver patios and fire pits to retaining walls and complete backyard transformations, we serve Westminster with the same craftsmanship and professionalism we bring to every community in our service area.',
    isPrimary: true,
    geo: { lat: 39.8367, lng: -105.0372 },
    body: [
      {
        heading: 'Westminster\'s Outdoor Living Market',
        text: 'Westminster\'s mix of established neighborhoods and newer development creates demand for both backyard transformations of existing spaces and ground-up outdoor living designs for newer properties. Rock N Roll Stoneworks has experience with both, whether retrofitting an outdated existing patio or designing a complete outdoor environment for a newly built home. Our consultation process starts with understanding what you have and what you want, then developing a design that achieves your goals within your budget.',
      },
    ],
  },
  {
    slug: 'firestone-frederick',
    city: 'Firestone & Frederick',
    state: 'CO',
    metaTitle: 'Hardscape Firestone & Frederick CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, and outdoor living in Firestone and Frederick CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Firestone & Frederick, CO',
    intro:
      'Rock N Roll Stoneworks serves homeowners in Firestone and Frederick with premium outdoor living construction. These growing communities offer larger lots and newer homes — an ideal canvas for comprehensive outdoor living projects that include paver patios, fire pits, outdoor kitchens, and complete backyard transformations.',
    isPrimary: true,
    geo: { lat: 40.1128, lng: -104.9369 },
    body: [
      {
        heading: 'Growing Communities, Bigger Opportunities',
        text: 'Firestone and Frederick have seen significant residential growth as families seek more space and value north of Boulder and east of Longmont. The larger lots common in these communities create excellent opportunities for comprehensive outdoor living projects. Many homeowners in these areas are building outdoor spaces for the first time, and Rock N Roll Stoneworks helps them design complete environments, from the driveway approach to the back patio fire feature, that make the most of their property and investment.',
      },
    ],
  },
  {
    slug: 'broomfield',
    city: 'Broomfield',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Broomfield CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Broomfield CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Broomfield, CO',
    intro:
      'Rock N Roll Stoneworks brings premium hardscape and outdoor living construction to Broomfield homeowners. From custom paver patios and fire features to retaining walls and complete backyard transformations, our team delivers the same craftsmanship Broomfield residents expect in every detail of their homes.',
    isPrimary: true,
    geo: { lat: 39.9205, lng: -105.0867 },
    body: [
      {
        heading: 'Broomfield\'s Unique Position',
        text: 'Broomfield sits at the crossroads of Boulder and Denver, giving residents the best of both worlds. The community\'s well-maintained neighborhoods and active outdoor lifestyle make it an ideal market for quality hardscape installations. Whether you are in the Broadlands, Anthem, or one of Broomfield\'s established neighborhoods, Rock N Roll Stoneworks designs outdoor spaces that complement your home and how your family lives.',
      },
    ],
  },
  {
    slug: 'louisville',
    city: 'Louisville',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Louisville CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Louisville CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Louisville, CO',
    intro:
      'Louisville homeowners value quality craftsmanship and attention to detail, and Rock N Roll Stoneworks delivers both. We serve Louisville with the full range of outdoor living services, including paver patios, fire pits, outdoor kitchens, retaining walls, and complete backyard designs.',
    isPrimary: true,
    geo: { lat: 39.9778, lng: -105.1319 },
    body: [
      {
        heading: 'Louisville\'s Charming Neighborhoods',
        text: 'Louisville consistently ranks among the best places to live in Colorado, and its neighborhoods reflect that quality. Many Louisville homes have mature lots with established landscaping that is ready for an outdoor living upgrade. Rock N Roll Stoneworks specializes in transforming existing Louisville backyards into functional outdoor rooms that extend your living space and add lasting value to your property.',
      },
    ],
  },
  {
    slug: 'superior',
    city: 'Superior',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Superior CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Superior CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Superior, CO',
    intro:
      'Rock N Roll Stoneworks serves Superior homeowners with premium outdoor living construction. From paver installations and fire features to outdoor kitchens and complete backyard transformations, we bring quality craftsmanship to Superior properties.',
    isPrimary: true,
    geo: { lat: 39.9528, lng: -105.1686 },
    body: [
      {
        heading: 'Superior Outdoor Living',
        text: 'Superior\'s location between Boulder and Broomfield gives residents access to stunning mountain views and an active outdoor lifestyle. Rock N Roll Stoneworks designs outdoor spaces that take advantage of Superior\'s setting, creating patios, fire features, and outdoor rooms that let you enjoy Colorado\'s 300 days of sunshine in comfort and style.',
      },
    ],
  },
  {
    slug: 'loveland',
    city: 'Loveland',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Loveland CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Loveland CO. Free estimates available.',
    h1: 'Hardscape & Outdoor Living in Loveland, CO',
    intro:
      'Rock N Roll Stoneworks extends its premium hardscape services to Loveland homeowners. From paver patios and fire pits to outdoor kitchens and complete backyard environments, we serve Loveland with the same quality and professionalism we bring to every Front Range community.',
    isPrimary: false,
    geo: { lat: 40.3978, lng: -105.0750 },
    nearbyNote: 'Loveland is within our extended service area. Contact us to discuss your project.',
    body: [
      {
        heading: 'Loveland\'s Growing Outdoor Living Market',
        text: 'Loveland\'s blend of established neighborhoods and newer development creates strong demand for quality outdoor living spaces. The city\'s proximity to the foothills and its artistic community atmosphere make it a natural fit for custom hardscape projects that combine functionality with design. Rock N Roll Stoneworks brings our full range of services to Loveland homeowners looking to transform their outdoor spaces.',
      },
    ],
  },
  {
    slug: 'fort-collins',
    city: 'Fort Collins',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Fort Collins CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Fort Collins CO. Free estimates available.',
    h1: 'Hardscape & Outdoor Living in Fort Collins, CO',
    intro:
      'Rock N Roll Stoneworks serves Fort Collins homeowners with custom hardscape and outdoor living construction. From paver installations and fire features to pools and complete backyard transformations, we bring Front Range craftsmanship to Northern Colorado\'s largest city.',
    isPrimary: false,
    geo: { lat: 40.5853, lng: -105.0844 },
    nearbyNote: 'Fort Collins is within our extended service area. Contact us to discuss your project.',
    body: [
      {
        heading: 'Fort Collins Outdoor Living',
        text: 'Fort Collins\' vibrant outdoor culture and four-season climate make it an ideal market for quality hardscape installations. Whether you are in Old Town, Timnath, or one of the newer developments on the east side, Rock N Roll Stoneworks designs and builds outdoor environments that stand up to Northern Colorado\'s weather while providing year-round enjoyment. Our team makes regular trips to Fort Collins and can coordinate project scheduling to serve the Northern Colorado market efficiently.',
      },
    ],
  },
  {
    slug: 'brighton',
    city: 'Brighton',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Brighton CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Brighton CO. Free estimates available.',
    h1: 'Hardscape & Outdoor Living in Brighton, CO',
    intro:
      'Rock N Roll Stoneworks serves Brighton homeowners with premium outdoor living construction. From custom paver patios and fire pits to retaining walls and complete backyard transformations, we bring the same quality craftsmanship to Brighton that we deliver across the Front Range.',
    isPrimary: false,
    geo: { lat: 39.9853, lng: -104.8206 },
    nearbyNote: 'Brighton is within our extended service area. Contact us to discuss your project.',
    body: [
      {
        heading: 'Brighton\'s Expanding Communities',
        text: 'Brighton\'s rapid growth and larger lot sizes create excellent opportunities for comprehensive outdoor living projects. Many new homeowners in Brighton are building their dream backyards from scratch, and Rock N Roll Stoneworks helps them design complete outdoor environments that maximize their property\'s potential.',
      },
    ],
  },
  {
    slug: 'mead-berthoud',
    city: 'Mead & Berthoud',
    state: 'CO',
    metaTitle: 'Hardscape Mead & Berthoud CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, and outdoor living in Mead and Berthoud CO. Free estimates available.',
    h1: 'Hardscape & Outdoor Living in Mead & Berthoud, CO',
    intro:
      'Rock N Roll Stoneworks serves homeowners in Mead and Berthoud with custom hardscape and outdoor living construction. These growing Northern Colorado communities offer generous lot sizes and mountain views — the perfect foundation for premium outdoor environments.',
    isPrimary: false,
    geo: { lat: 40.2336, lng: -105.0781 },
    nearbyNote: 'Mead and Berthoud are within our extended service area. Contact us to discuss your project.',
    body: [
      {
        heading: 'Northern Colorado\'s Hidden Gems',
        text: 'Mead and Berthoud have experienced significant growth as homeowners seek more space and value along the I-25 corridor between Longmont and Loveland. The larger properties in these communities are ideal for comprehensive outdoor living projects, from expansive paver patios and fire features to pools and outdoor kitchens. Rock N Roll Stoneworks brings our full design-build capabilities to these growing communities.',
      },
    ],
  },
  {
    slug: 'thornton-northglenn',
    city: 'Thornton & Northglenn',
    state: 'CO',
    metaTitle: 'Hardscape Thornton & Northglenn CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Thornton and Northglenn CO. Free estimates available.',
    h1: 'Hardscape & Outdoor Living in Thornton & Northglenn, CO',
    intro:
      'Rock N Roll Stoneworks serves homeowners in Thornton and Northglenn with custom hardscape and outdoor living construction. From paver patios and fire features to retaining walls and complete backyard transformations, we bring quality craftsmanship to the north Denver metro.',
    isPrimary: false,
    geo: { lat: 39.8680, lng: -104.9719 },
    nearbyNote: 'Thornton and Northglenn are within our extended service area. Contact us to discuss your project.',
    body: [
      {
        heading: 'North Denver Metro Outdoor Living',
        text: 'Thornton and Northglenn\'s mix of established neighborhoods and newer development along the I-25 corridor creates strong demand for outdoor living upgrades. Whether you are updating an older patio or designing a complete outdoor environment for a newer property, Rock N Roll Stoneworks brings the same quality materials and installation practices we use throughout the Front Range.',
      },
    ],
  },
  {
    slug: 'highlands-ranch',
    city: 'Highlands Ranch',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Highlands Ranch CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Highlands Ranch CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Highlands Ranch, CO',
    intro:
      'Rock N Roll Stoneworks serves Highlands Ranch homeowners with premium outdoor living construction. From custom paver patios and fire features to outdoor kitchens and complete backyard transformations, we bring Belgard-certified craftsmanship to one of Colorado\'s most desirable communities.',
    isPrimary: true,
    geo: { lat: 39.5536, lng: -104.9689 },
    body: [
      {
        heading: 'Highlands Ranch Outdoor Living',
        text: 'Highlands Ranch\'s well-maintained neighborhoods, active community lifestyle, and generous lot sizes make it one of the strongest markets for quality outdoor living construction in the Denver metro area. Whether you are in Backcountry, Eastridge, or one of the established neighborhoods near Town Center, Rock N Roll Stoneworks designs outdoor environments that match the high standard Highlands Ranch homeowners expect.',
      },
    ],
  },
  {
    slug: 'littleton',
    city: 'Littleton',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Littleton CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Littleton CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Littleton, CO',
    intro:
      'Rock N Roll Stoneworks serves Littleton homeowners with custom hardscape and outdoor living construction. From paver installations and fire features to retaining walls and complete backyard transformations, we bring quality craftsmanship to the southwest Denver metro.',
    isPrimary: true,
    geo: { lat: 39.6133, lng: -105.0166 },
    body: [
      {
        heading: 'Littleton\'s Charming Communities',
        text: 'Littleton\'s blend of historic charm and newer development creates diverse opportunities for outdoor living projects. From the established neighborhoods near downtown to newer communities in Ken Caryl and Columbine, Rock N Roll Stoneworks designs and builds outdoor environments that complement the character of your home and neighborhood.',
      },
    ],
  },
  {
    slug: 'aurora',
    city: 'Aurora',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Aurora CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Aurora CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Aurora, CO',
    intro:
      'Rock N Roll Stoneworks serves Aurora homeowners with premium outdoor living construction. From custom paver patios and fire pits to outdoor kitchens and complete backyard transformations, we bring the same craftsmanship to Aurora that we deliver across the Colorado Front Range.',
    isPrimary: true,
    geo: { lat: 39.7294, lng: -104.8319 },
    body: [
      {
        heading: 'Aurora\'s Growing Outdoor Living Market',
        text: 'Aurora\'s diverse neighborhoods and growing communities create strong demand for quality outdoor living spaces. Whether you are in Southlands, Tallyn\'s Reach, or the established neighborhoods of central Aurora, Rock N Roll Stoneworks designs and builds hardscape environments that transform how you use your outdoor space.',
      },
    ],
  },
  {
    slug: 'lakewood',
    city: 'Lakewood',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Lakewood CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, and hardscape in Lakewood CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Lakewood, CO',
    intro:
      'Rock N Roll Stoneworks serves Lakewood homeowners with custom hardscape and outdoor living construction. From paver installations and fire features to retaining walls and complete backyard transformations, we bring quality craftsmanship to the west Denver metro.',
    isPrimary: true,
    geo: { lat: 39.7047, lng: -105.0814 },
    body: [
      {
        heading: 'Lakewood Outdoor Living',
        text: 'Lakewood\'s proximity to the foothills, established neighborhoods, and active outdoor lifestyle make it a natural fit for premium hardscape installations. Rock N Roll Stoneworks designs outdoor spaces that take advantage of Lakewood\'s mountain views and Colorado\'s 300 days of sunshine, creating patios, fire features, and outdoor rooms built for year-round enjoyment.',
      },
    ],
  },
  {
    slug: 'longmont',
    city: 'Longmont',
    state: 'CO',
    metaTitle: 'Hardscape Contractor Longmont CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom pavers, fire pits, outdoor kitchens, pools, and hardscape in Longmont CO. Belgard authorized. Free estimates.',
    h1: 'Hardscape & Outdoor Living in Longmont, CO',
    intro:
      'Rock N Roll Stoneworks serves Longmont homeowners with the full range of outdoor living construction services. From paver installations and fire features to pools, retaining walls, and complete outdoor room designs, we bring Belgard-quality craftsmanship to Longmont properties of every size and style.',
    isPrimary: false,
    geo: { lat: 40.1672, lng: -105.1019 },
    body: [
      {
        heading: 'Longmont Outdoor Living',
        text: 'Longmont\'s combination of established neighborhoods and newer subdivisions makes it one of the more varied outdoor living markets on the Front Range. Older properties often have outdated or minimal hardscape that homeowners are ready to upgrade, while newer homes in developments like Prospect and the southeast quadrant come with builder-grade landscaping that leaves significant room for improvement. Rock N Roll Stoneworks serves both markets with the same quality of design and construction, from modest patio upgrades to comprehensive outdoor environment builds.',
      },
    ],
  },
];

export const serviceAreas: ServiceAreaData[] = serviceAreasBase.map((a) => ({
  ...a,
  ...buildAreaPageMedia(a.slug, a.city),
}));

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
