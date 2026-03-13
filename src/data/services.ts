export interface FAQ {
  question: string;
  answer: string;
}

export interface BodySection {
  heading: string;
  text: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'hardscape' | 'outdoor-living' | 'landscape';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  features: string[];
  body: BodySection[];
  faqs: FAQ[];
  relatedSlugs: string[];
  primaryKeyword: string;
}

export const services: ServiceData[] = [
  {
    slug: 'paver-installations',
    title: 'Paver Installations',
    shortTitle: 'Paver Installations',
    category: 'hardscape',
    metaTitle: 'Paver Installations in Lafayette & Boulder, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom paver driveways, walkways, patios, and full backyard hardscape installs in Lafayette, Erie, Boulder, and surrounding Colorado communities. Free estimates.',
    h1: 'Custom Paver Installations in Colorado',
    intro:
      "Transform your driveway, walkway, patio, or entire backyard with a custom paver installation designed to last. Rock N Roll Stoneworks specializes in Belgard paver systems, from initial 2D and 3D design through final installation. We handle every detail so you can enjoy a seamless build and a finished outdoor space that adds lasting value to your home.",
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop',
    heroAlt: 'Custom paver patio installation in Lafayette, Colorado, Rock N Roll Stoneworks',
    features: [
      'Driveways, walkways, patios, and full backyard installs',
      'Belgard paver systems, authorized contractor and reseller',
      '2D design and 3D virtual tour before any work begins',
      'ICPI certified installation techniques',
      'Proper base preparation and edge restraints for lasting results',
      'Wide selection of colors, patterns, and textures',
      'Lifetime warranty available with Belgard materials',
      '2-year workmanship guarantee on all installations',
    ],
    body: [
      {
        heading: 'Why Pavers Outperform Poured Concrete',
        text: "Poured concrete cracks. It is not a question of if, it is a question of when, especially in Colorado where freeze-thaw cycles put extreme stress on rigid slabs. Pavers, by contrast, flex with the ground and can be lifted and reset if any settling occurs. A well-installed paver system will outlast a poured slab by decades and look better the entire time. Rock N Roll Stoneworks uses Belgard pavers exclusively for their superior engineering, warranty coverage, and the sheer range of design options they offer. Whether you want a tumbled, rustic look or a sleek modern finish, there is a paver product that delivers it.",
      },
      {
        heading: 'From Driveway to Backyard, Complete Hardscape Solutions',
        text: "Our paver work is not limited to patios. We design and install complete outdoor environments that combine driveways, walkways, pool decks, patio areas, steps, and borders into a single cohesive design. Many homeowners start with one element, a front walkway or a back patio, and expand after seeing the quality of the finished result. We are always happy to design your project with future phases in mind so that additions blend seamlessly when the time comes.",
      },
      {
        heading: 'The Rock N Roll Stoneworks Installation Process',
        text: "Every paver project begins with a site assessment and design consultation. We measure your space, discuss your goals and budget, and create a 2D layout with a 3D virtual tour so you can visualize the finished result before we break ground. Once approved, our ICPI-certified crew handles excavation, base preparation, sand bedding, paver placement, and final compaction and sealing. We do not rush jobs or cut corners on the base, the foundation is what separates a lasting installation from one that settles and shifts in two years.",
      },
    ],
    faqs: [
      {
        question: 'How long does a paver installation take?',
        answer:
          'Most residential paver projects take between three and seven days depending on the scope, size, and site conditions. We will give you a specific timeline estimate during your consultation.',
      },
      {
        question: 'Do pavers require maintenance?',
        answer:
          'Pavers are low maintenance but benefit from occasional re-sanding of joints and resealing every few years to protect color and prevent weed growth. We can advise on a maintenance schedule after installation.',
      },
      {
        question: 'Can I see a design before you start?',
        answer:
          'Yes. We provide both a 2D layout and a 3D virtual tour of your project before any work begins. You review and approve the design, and we do not start construction until you are satisfied.',
      },
      {
        question: 'Are pavers more expensive than concrete?',
        answer:
          'Initial paver costs are typically higher than poured concrete, but pavers offer significantly longer lifespan, easier repair, and better resale value. Over time, they are generally the more economical choice.',
      },
    ],
    relatedSlugs: ['retaining-walls-stairs', 'outdoor-kitchens', 'fire-pits-fireplaces'],
    primaryKeyword: 'paver installation Lafayette CO',
  },
  {
    slug: 'fire-pits-fireplaces',
    title: 'Fire Pits & Fireplaces',
    shortTitle: 'Fire Pits & Fireplaces',
    category: 'outdoor-living',
    metaTitle: 'Custom Fire Pits & Outdoor Fireplaces in Lafayette, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom outdoor fire pits and fireplaces in Lafayette, Erie, Boulder, and surrounding Colorado communities. Hand-lit or Bluetooth remote start. Free design consultation.',
    h1: 'Custom Outdoor Fire Pits & Fireplaces in Colorado',
    intro:
      "A fire feature transforms your outdoor space into a true gathering place, one you can enjoy from early spring through the end of Colorado autumn. Rock N Roll Stoneworks designs and builds custom fire pits and outdoor fireplaces in a wide range of shapes, sizes, and finishes. From a simple round gas fire pit to a full masonry fireplace with stone surround, our team brings the same craftsmanship to every fire feature we build.",
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=700&fit=crop',
    heroAlt: 'Custom outdoor fire pit installation in Lafayette, Colorado',
    features: [
      'Custom design in any shape, size, or style',
      'Warming Trends burner systems, hand-lit or Bluetooth remote start',
      'Customizable fire glass, lava rock, or ceramic logs',
      'Natural gas or propane options',
      'Full masonry or modern metal fire pit options',
      'Integrated seating walls and paver surrounds',
      'Color-changing flame options available',
      'Built-in fire table designs',
    ],
    body: [
      {
        heading: 'Gas Fire Pits vs. Wood-Burning Fire Features',
        text: "Colorado air quality regulations have increasingly restricted wood-burning fire features in the Front Range. Gas fire pits and fireplaces offer a clean-burning alternative that is permitted year-round and requires none of the wood storage, ash cleanup, or unpredictable smoke that comes with wood burning. Our Warming Trends burner systems produce a beautiful, full flame that closely mimics the look of a wood fire while giving you instant on/off control. Bluetooth remote start options let you light the fire from across the yard before you even step outside.",
      },
      {
        heading: 'Designing Your Fire Feature',
        text: "Every fire feature we build is custom designed for your specific space. Round, square, rectangular, or freeform, the shape and dimensions are entirely up to you. We pair fire features with complementary paver surrounds, built-in seating walls, and landscape elements to create a cohesive outdoor living area rather than an isolated feature. The fire glass, lava rock, and ceramic log options allow you to customize the visual style from the inside out, and color-changing flame technology can add a dramatic visual element if you want something truly unique.",
      },
    ],
    faqs: [
      {
        question: 'Can I use my outdoor fireplace year-round in Colorado?',
        answer:
          'Gas fire features can generally be used year-round, subject to any air quality action days issued by local authorities. Wood-burning features are more restricted in the Front Range. We design for year-round gas use as our default recommendation.',
      },
      {
        question: 'How much does a custom fire pit cost?',
        answer:
          'Fire pit costs vary widely based on size, materials, burner system, and surrounding hardscape. A simple gas fire pit installation typically starts around $3,000–$5,000. A full outdoor fireplace with masonry surround and seating area is a larger investment. Contact us for a free estimate.',
      },
      {
        question: 'Do you handle the gas line connection?',
        answer:
          'We coordinate all gas line work with licensed plumbing subcontractors who handle the connection from your existing gas supply to the fire feature. This is included as part of your overall project coordination.',
      },
    ],
    relatedSlugs: ['outdoor-kitchens', 'paver-installations', 'water-features'],
    primaryKeyword: 'fire pit installation Lafayette CO',
  },
  {
    slug: 'outdoor-kitchens',
    title: 'Outdoor Kitchens',
    shortTitle: 'Outdoor Kitchens',
    category: 'outdoor-living',
    metaTitle: 'Custom Outdoor Kitchens in Lafayette & Boulder County, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom outdoor kitchen installations in Lafayette, Erie, Boulder, and surrounding Colorado communities. Grills, countertops, refrigeration, and full outdoor entertaining spaces.',
    h1: 'Custom Outdoor Kitchens in Colorado',
    intro:
      "An outdoor kitchen extends your living space and transforms how you entertain. Rock N Roll Stoneworks designs and builds complete outdoor kitchen installations, from a simple built-in grill station to a full L-shaped kitchen with refrigeration, sink, storage, and countertops. We integrate outdoor kitchens seamlessly into your broader patio and hardscape design for a finished, cohesive result.",
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=700&fit=crop',
    heroAlt: 'Custom outdoor kitchen build in Lafayette Colorado by Rock N Roll Stoneworks',
    features: [
      'Custom layout design tailored to your entertaining style',
      'Built-in grill, side burners, and pizza oven options',
      'Refrigeration, sink, and storage integration',
      'Granite, concrete, or porcelain countertop options',
      'Stucco, stone veneer, or paver exterior finishes',
      'Gas line and electrical coordination',
      'Covered patio and pergola integration',
      '3D design preview before construction begins',
    ],
    body: [
      {
        heading: 'Building for Colorado\'s Climate',
        text: "Colorado\'s Front Range offers more than 300 days of sunshine per year, making outdoor cooking genuinely practical for a large portion of the calendar. But the climate also brings temperature swings, occasional hail, and UV exposure that demands durable materials. Rock N Roll Stoneworks selects outdoor kitchen materials specifically for the Colorado climate, stainless steel appliances rated for outdoor use, countertop materials that resist freeze-thaw damage, and structural frameworks engineered for longevity. Your outdoor kitchen will look and function beautifully for years, not just the first season.",
      },
      {
        heading: 'Integration With Your Outdoor Space',
        text: "The best outdoor kitchens do not feel like an afterthought, they feel like a natural extension of the home. We design outdoor kitchens as part of a complete outdoor living plan that may include a paver patio, pergola or shade structure, fire pit or fireplace, and landscaping. Our 3D design process lets you see the finished environment before any work begins, so you can adjust layouts, materials, and features until the design is exactly what you envisioned.",
      },
    ],
    faqs: [
      {
        question: 'What appliances can go in an outdoor kitchen?',
        answer:
          'Common outdoor kitchen appliances include built-in grills, side burners, pizza ovens, smokers, outdoor refrigerators, ice makers, sinks, and warming drawers. We help you select appliances appropriate for your budget and entertaining style.',
      },
      {
        question: 'How do I protect my outdoor kitchen in winter?',
        answer:
          'We recommend appliance covers for the winter months and shutting off water lines to prevent freeze damage if you have a sink. Most of the structural components, stone, stucco, and stainless steel, are built to withstand Colorado winters without special treatment.',
      },
    ],
    relatedSlugs: ['fire-pits-fireplaces', 'paver-installations', 'decks-pergolas'],
    primaryKeyword: 'outdoor kitchen Lafayette CO',
  },
  {
    slug: 'water-features',
    title: 'Water Features',
    shortTitle: 'Water Features',
    category: 'outdoor-living',
    metaTitle: 'Water Features & Waterfalls in Lafayette, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom water features, color-changing waterfalls, and spillways in Lafayette, Erie, Boulder, and surrounding Colorado areas. Add sound and ambiance to your outdoor space.',
    h1: 'Custom Water Features for Colorado Outdoor Spaces',
    intro:
      "The sound of moving water transforms an outdoor space. Rock N Roll Stoneworks designs and installs custom water features, from color-changing LED waterfalls and spillways to bubbling pondless fountains and stream installations. Whether you want to mask street noise, create a focal point, or simply add a layer of tranquility to your backyard, we have a water feature solution that fits your space and budget.",
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=700&fit=crop',
    heroAlt: 'Custom water feature installation in Colorado by Rock N Roll Stoneworks',
    features: [
      'Pondless waterfalls and stream installations',
      'Color-changing LED spillways and sheer descents',
      'Bubbling boulder and fountain features',
      'Swimming pool water feature integration',
      'Custom stone and paver surrounds',
      'Energy-efficient pump and filtration systems',
      'Low-maintenance design for Colorado climate',
      'Year-round or seasonal operation options',
    ],
    body: [
      {
        heading: 'Color-Changing Waterfalls and Spillways',
        text: "Our most popular water feature option combines the visual impact of a waterfall with color-changing LED lighting built directly into the spillway. These features create dramatic effects after dark, shifting between amber, blue, green, and white to match your mood or occasion. During the day, the natural stone and water provide a peaceful visual anchor for your outdoor space. At night, the illuminated water becomes the centerpiece of the entire yard.",
      },
      {
        heading: 'Noise Reduction and Privacy',
        text: "A well-placed water feature does more than look beautiful, it provides meaningful sound masking for yards near busy streets, neighbors, or commercial areas. The consistent, natural sound of moving water is far more effective at creating a sense of privacy and calm than fencing or planting alone. We help you identify the right size and placement for a water feature to maximize its acoustic benefit for your specific property.",
      },
    ],
    faqs: [
      {
        question: 'Do water features work year-round in Colorado?',
        answer:
          'Pondless waterfalls and most spillway features can be operated year-round in Colorado, though many homeowners choose to winterize and shut down their features in November and restart in spring. We design for easy seasonal operation.',
      },
      {
        question: 'How much maintenance does a water feature require?',
        answer:
          'Pondless systems require minimal maintenance, primarily occasional cleaning of the pump vault and basin. We design our installations for easy access to all components. Seasonal startup and shutdown typically takes less than an hour.',
      },
    ],
    relatedSlugs: ['paver-installations', 'fire-pits-fireplaces', 'swimming-pools'],
    primaryKeyword: 'water feature installation Lafayette CO',
  },
  {
    slug: 'retaining-walls-stairs',
    title: 'Retaining Walls & Stairs',
    shortTitle: 'Retaining Walls & Stairs',
    category: 'hardscape',
    metaTitle: 'Retaining Walls & Staircase Installation in Lafayette, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom retaining walls, terracing, and staircase construction in Lafayette, Erie, Boulder, and surrounding Colorado communities. Belgard wall systems. Free estimates.',
    h1: 'Retaining Walls & Staircase Construction in Colorado',
    intro:
      "Sloped properties require thoughtful engineering to create usable, stable outdoor spaces. Rock N Roll Stoneworks designs and builds retaining walls and staircases that solve grade challenges while adding visual structure and beauty to your property. From a single low retaining wall that levels a planting bed to a multi-tiered system that creates distinct outdoor living zones, we have the experience to handle any slope.",
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=700&fit=crop',
    heroAlt: 'Retaining wall installation in Colorado by Rock N Roll Stoneworks',
    features: [
      'Belgard retaining wall systems, engineered for Colorado soils',
      'Single and multi-tiered wall designs',
      'Custom staircase and step construction',
      'Drainage engineering to protect walls and foundations',
      'Planting pockets and landscape integration',
      'Lighting integration within wall caps',
      'Natural stone and block options',
      '2-year workmanship guarantee',
    ],
    body: [
      {
        heading: 'Engineering for Colorado\'s Soils and Climate',
        text: "Colorado\'s clay-heavy soils expand and contract significantly with moisture changes, and freeze-thaw cycles create additional movement stress on retaining structures. A poorly engineered retaining wall will crack, lean, or fail within a few years. Rock N Roll Stoneworks uses Belgard engineered wall systems with proper batter (backward lean), compacted base preparation, drainage aggregate backfill, and perforated drain pipe to manage hydrostatic pressure. The result is a wall that remains plumb and stable for decades, not just a few seasons.",
      },
      {
        heading: 'Creating Usable Space on Sloped Properties',
        text: "Many Colorado homeowners have sloped yards that feel unusable for entertaining or recreation. A well-designed retaining wall and terracing system can transform a steep hillside into a series of level, functional outdoor rooms. The lower terrace might hold a patio and fire pit, the middle a lawn area, and the upper a garden or planting zone. Staircases connect the levels with both function and elegance. Rock N Roll Stoneworks designs these multi-level systems holistically, ensuring each element works together as a cohesive landscape.",
      },
    ],
    faqs: [
      {
        question: 'Do retaining walls require permits in Colorado?',
        answer:
          'Retaining walls over four feet in height typically require a permit and engineered drawings in most Colorado jurisdictions. Rock N Roll Stoneworks handles the permit process and works with structural engineers when required.',
      },
      {
        question: 'How long do retaining walls last?',
        answer:
          'A properly engineered and installed segmental retaining wall system can last 50 years or more. Belgard wall systems carry a lifetime warranty on the block itself. Our 2-year workmanship guarantee covers the installation.',
      },
    ],
    relatedSlugs: ['paver-installations', 'outdoor-lighting', 'stamped-concrete'],
    primaryKeyword: 'retaining wall installation Lafayette CO',
  },
  {
    slug: 'outdoor-lighting',
    title: 'Outdoor Lighting',
    shortTitle: 'Outdoor Lighting',
    category: 'landscape',
    metaTitle: 'Outdoor LED Landscape Lighting in Lafayette, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Professional outdoor LED lighting installation for driveways, walkways, patios, and landscapes in Lafayette, Erie, Boulder, and surrounding Colorado areas. Free estimates.',
    h1: 'Professional Outdoor Lighting in Colorado',
    intro:
      "Outdoor lighting extends the life of your outdoor space well past sunset and adds security, curb appeal, and ambiance to your property. Rock N Roll Stoneworks designs and installs LED-based lighting systems that reduce energy consumption by approximately 75% compared to traditional incandescent systems while delivering superior light quality. From ground-level path lighting to dramatic uplighting and built-in patio fixtures, we design systems that enhance your space without overwhelming it.",
    heroImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=700&fit=crop',
    heroAlt: 'Outdoor LED landscape lighting installation in Colorado',
    features: [
      'LED systems, ~75% energy savings vs. incandescent',
      'Path and walkway lighting',
      'Uplighting for trees and architectural features',
      'Built-in patio and step lighting',
      'Fire pit and outdoor kitchen accent lighting',
      'Color-changing and programmable options',
      'Timer and smart controller integration',
      'Low-voltage systems for easy installation and safety',
    ],
    body: [
      {
        heading: 'LED vs. Traditional Landscape Lighting',
        text: "The shift to LED landscape lighting is one of the best upgrades any homeowner can make. Modern LED fixtures consume a fraction of the power of halogen or incandescent alternatives, last dramatically longer, and produce better, more consistent color rendering. Rock N Roll Stoneworks installs LED systems exclusively, and the savings in electricity and bulb replacement typically offset the initial investment within a few years. We help you select the right fixture types, color temperatures, and beam angles to create a layered, professional lighting design that enhances the architecture and landscape of your property.",
      },
      {
        heading: 'Lighting as Part of a Complete Outdoor Design',
        text: "The best outdoor lighting designs are planned alongside the hardscape and landscape, not added as an afterthought. When we design your paver patio, retaining walls, or outdoor kitchen, we identify lighting opportunities at every stage, in wall caps, under stair treads, along path edges, and in overhead structures. This integrated approach produces a far more polished result than installing fixtures after the fact and eliminates the need to disturb finished surfaces to run wire.",
      },
    ],
    faqs: [
      {
        question: 'Can outdoor lighting be controlled with a smartphone?',
        answer:
          'Yes. We offer smart controller options that allow you to set schedules, adjust brightness, and control zones from your smartphone. Color-changing options can also be controlled via app for entertaining or seasonal looks.',
      },
      {
        question: 'Is low-voltage outdoor lighting safe?',
        answer:
          'Low-voltage landscape lighting (typically 12V) is extremely safe, it does not pose a shock hazard even if a cable is accidentally nicked during gardening. It is the standard for residential landscape lighting installations.',
      },
    ],
    relatedSlugs: ['paver-installations', 'fire-pits-fireplaces', 'retaining-walls-stairs'],
    primaryKeyword: 'outdoor lighting Lafayette CO',
  },
  {
    slug: 'artificial-turf',
    title: 'Artificial Turf',
    shortTitle: 'Artificial Turf',
    category: 'landscape',
    metaTitle: 'Artificial Turf Installation in Lafayette & Boulder County, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Professional artificial turf installation in Lafayette, Erie, Boulder, and surrounding Colorado communities. Year-round green, minimal maintenance, drought-friendly.',
    h1: 'Artificial Turf Installation in Colorado',
    intro:
      "Colorado\'s semi-arid climate makes maintaining a lush natural lawn a constant battle against heat, drought, and water restrictions. Artificial turf eliminates the problem entirely, delivering a perfectly green lawn year-round with minimal maintenance and no irrigation requirements. Rock N Roll Stoneworks installs premium artificial turf products designed to withstand Colorado\'s UV exposure, temperature swings, and pet traffic while looking and feeling natural.",
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=700&fit=crop',
    heroAlt: 'Artificial turf installation in Colorado backyard',
    features: [
      'Premium artificial turf rated for Colorado UV and climate',
      'Pet-friendly and child-safe products',
      'Proper base preparation and drainage installation',
      'Seamless integration with paver and hardscape areas',
      'No watering, mowing, or fertilizing required',
      'Year-round green appearance',
      'Putting green installations available',
      'Drainage systems for pet areas',
    ],
    body: [
      {
        heading: 'Water Conservation in Colorado',
        text: "Water-wise landscaping is increasingly important across Colorado\'s Front Range. Many municipalities have implemented watering restrictions, and the cost of irrigation continues to rise. Artificial turf eliminates lawn irrigation entirely, which represents the single largest water use for most residential properties. For homeowners with large lawn areas, the reduction in water bills alone can make artificial turf a financially compelling choice, quite apart from the time savings on mowing and maintenance.",
      },
      {
        heading: 'Not All Turf Is Created Equal',
        text: "The quality gap between premium and budget artificial turf is significant. Cheap products look obviously synthetic, heat up excessively in direct sun, mat down under heavy foot traffic, and degrade quickly under Colorado\'s intense UV exposure. Rock N Roll Stoneworks sources premium products with realistic blade shapes, color variation, and thatching that closely mimic natural grass. Proper base preparation, crushed aggregate base, weed barrier, and drainage layer, is equally important for longevity and performance.",
      },
    ],
    faqs: [
      {
        question: 'Does artificial turf get too hot in Colorado summers?',
        answer:
          'All artificial turf heats up in direct sun, but premium products are engineered to minimize heat retention. We can recommend cooling systems or placement strategies to minimize heat buildup in high-use areas.',
      },
      {
        question: 'How long does artificial turf last?',
        answer:
          'Premium artificial turf typically lasts 15–20 years with minimal maintenance. Annual brushing and occasional rinsing is generally all that is required to keep it looking its best.',
      },
      {
        question: 'Can artificial turf be installed on slopes?',
        answer:
          'Yes. Proper base preparation and securing techniques allow artificial turf to be installed on moderate slopes. Steep slopes may require additional anchoring or a different surface treatment. We assess your specific site during consultation.',
      },
    ],
    relatedSlugs: ['paver-installations', 'outdoor-lighting', 'retaining-walls-stairs'],
    primaryKeyword: 'artificial turf Lafayette CO',
  },
  {
    slug: 'decks-pergolas',
    title: 'Decks & Pergolas',
    shortTitle: 'Decks & Pergolas',
    category: 'outdoor-living',
    metaTitle: 'Decks & Pergolas in Lafayette & Boulder County, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom decks and pergola structures in Lafayette, Erie, Boulder, and surrounding Colorado communities. Covered outdoor living spaces built for Colorado\'s climate.',
    h1: 'Custom Decks & Pergolas in Colorado',
    intro:
      "A well-designed deck or pergola creates a defined, comfortable outdoor living room that extends your usable square footage beyond the walls of your home. Rock N Roll Stoneworks designs and builds custom deck structures and pergolas that complement your home\'s architecture and integrate seamlessly with surrounding paving, fire features, and landscape elements.",
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=700&fit=crop',
    heroAlt: 'Custom deck and pergola build in Colorado',
    features: [
      'Custom pergola structures, wood, aluminum, or vinyl',
      'Attached and freestanding deck designs',
      'Shade sail and retractable cover integration',
      'String lighting and built-in fixture options',
      'Fan and heater integration for year-round use',
      'Composite and hardwood decking options',
      'Seamless transition to paver patio areas',
      'Permit coordination and structural engineering when required',
    ],
    body: [
      {
        heading: 'Extending Your Outdoor Season',
        text: "Colorado\'s summers are spectacular, but the shoulder seasons in spring and fall can be unpredictable. A covered structure, whether a full pergola with shade sails or an attached covered patio, makes your outdoor space genuinely usable in light rain, intense sun, and cooler temperatures. Adding outdoor heaters extends the usable season even further, often well into November. Rock N Roll Stoneworks designs structures with these Colorado realities in mind, selecting materials and configurations that maximize year-round comfort.",
      },
    ],
    faqs: [
      {
        question: 'Do pergolas require permits in Colorado?',
        answer:
          'Attached structures and pergolas over a certain size typically require permits. Requirements vary by municipality. Rock N Roll Stoneworks handles the permit research and application process for all structures we build.',
      },
      {
        question: 'What is the difference between a pergola and a covered patio?',
        answer:
          'A pergola has an open lattice or beam roof that provides partial shade and structure without full weather protection. A covered patio has a solid or semi-solid roof that provides full protection from rain and intense sun. We offer both options depending on your goals.',
      },
    ],
    relatedSlugs: ['outdoor-kitchens', 'paver-installations', 'outdoor-lighting'],
    primaryKeyword: 'pergola builder Lafayette CO',
  },
  {
    slug: 'stamped-concrete',
    title: 'Stamped Concrete',
    shortTitle: 'Stamped Concrete',
    category: 'hardscape',
    metaTitle: 'Stamped Concrete Patios & Driveways in Lafayette, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Custom stamped and colored concrete patios, driveways, and walkways in Lafayette, Erie, Boulder, and surrounding Colorado communities. Free estimates.',
    h1: 'Stamped Concrete Patios & Driveways in Colorado',
    intro:
      "Stamped concrete offers the look of stone, tile, or brick at a lower cost than individual paver systems, making it an excellent choice for large surface areas where budget is a primary consideration. Rock N Roll Stoneworks installs decorative stamped concrete with proper reinforcement, control joints, and integral or applied color for a finished result that holds up through Colorado\'s demanding freeze-thaw cycles.",
    heroImage: 'https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=1200&h=700&fit=crop',
    heroAlt: 'Stamped concrete patio installation in Colorado',
    features: [
      'Wide selection of patterns, slate, flagstone, cobblestone, wood plank',
      'Integral and applied color options',
      'Properly reinforced and jointed for Colorado climate',
      'Sealing for color protection and durability',
      'Patio, driveway, walkway, and pool deck applications',
      'Combination designs with pavers or natural stone borders',
      '2-year workmanship guarantee',
      'Free design consultation',
    ],
    body: [
      {
        heading: 'Stamped Concrete vs. Pavers, Which Is Right for You?',
        text: "Stamped concrete and pavers both have their place in an outdoor design. Stamped concrete costs less per square foot for large areas and offers a seamless, monolithic surface without joints. Pavers are more repairable, individual units can be lifted and reset if settlement occurs, and offer superior flexibility over time. For many projects, combining both materials creates the best result: stamped concrete for large field areas with paver borders, steps, or accent bands that add design interest and simplify repairs.",
      },
    ],
    faqs: [
      {
        question: 'Does stamped concrete crack?',
        answer:
          'All concrete cracks, but proper reinforcement (rebar or fiber), control joints placed at regular intervals, and quality mix design minimize cracking and control where cracks occur. We take all appropriate precautions to produce the most durable slab possible.',
      },
      {
        question: 'How often does stamped concrete need to be resealed?',
        answer:
          'We recommend resealing stamped concrete every 2–3 years to maintain color vibrancy and surface protection. Resealing is a straightforward process that most homeowners can do themselves after we complete the initial installation.',
      },
    ],
    relatedSlugs: ['paver-installations', 'retaining-walls-stairs', 'outdoor-kitchens'],
    primaryKeyword: 'stamped concrete Lafayette CO',
  },
  {
    slug: 'stone-veneers',
    title: 'Stone Veneers & Fireplace Surrounds',
    shortTitle: 'Stone Veneers',
    category: 'hardscape',
    metaTitle: 'Stone Veneers & Fireplace Surrounds in Lafayette, CO | Rock N Roll Stoneworks',
    metaDescription:
      'Interior fireplace surrounds and exterior stone veneer applications in Lafayette, Erie, Boulder, and surrounding Colorado communities. Natural and manufactured stone options.',
    h1: 'Stone Veneers & Fireplace Surrounds in Colorado',
    intro:
      "Stone veneer transforms the visual character of both interior and exterior surfaces, from an interior fireplace surround that becomes the focal point of a living room to an exterior facade that elevates the entire curb appeal of a home. Rock N Roll Stoneworks installs both natural and manufactured stone veneer systems with proper substrate preparation and waterproofing for results that look beautiful and last decades.",
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=700&fit=crop',
    heroAlt: 'Stone veneer fireplace surround installation in Colorado',
    features: [
      'Interior fireplace surrounds and mantels',
      'Exterior home facade stone veneer',
      'Accent walls and feature walls',
      'Natural and manufactured stone options',
      'Proper substrate preparation and waterproofing',
      'Wide selection of stone profiles, colors, and textures',
      'Matching stone for outdoor fire features and walls',
      'Free design consultation',
    ],
    body: [
      {
        heading: 'Interior and Exterior Applications',
        text: "Stone veneer is one of the most versatile design materials available. Indoors, it adds warmth and texture to fireplace surrounds, accent walls, and kitchen backsplashes. Outside, it transforms plain stucco or siding into a natural-looking stone facade that dramatically increases curb appeal and perceived home value. Rock N Roll Stoneworks coordinates interior and exterior stone selections to create continuity between your home\'s indoor and outdoor aesthetic, a particularly effective strategy for homes with open-plan layouts that connect indoor living areas to outdoor patios and fire features.",
      },
    ],
    faqs: [
      {
        question: 'What is the difference between natural stone and manufactured stone veneer?',
        answer:
          'Natural stone is quarried and cut to veneer thickness. Manufactured stone is cast from concrete with pigments to mimic natural stone appearances. Both look excellent when properly installed. Manufactured stone is lighter, more consistent in appearance, and typically less expensive. Natural stone has unique variation and authenticity that some homeowners prefer.',
      },
    ],
    relatedSlugs: ['fire-pits-fireplaces', 'retaining-walls-stairs', 'paver-installations'],
    primaryKeyword: 'stone veneer installation Lafayette CO',
  },
  {
    slug: 'swimming-pools',
    title: 'Swimming Pools',
    shortTitle: 'Swimming Pools',
    category: 'outdoor-living',
    metaTitle: 'Latham Fiberglass Pools, Authorized Dealer | Rock N Roll Stoneworks, Lafayette CO',
    metaDescription:
      'Latham Pools Authorized Dealer serving Lafayette, Erie, Boulder, and the Colorado Front Range. Premium fiberglass pool installation with complete outdoor living design. Free consultation.',
    h1: 'Latham Pools Authorized Dealer in Colorado',
    intro:
      "As a Latham Pools Authorized Dealer, Rock N Roll Stoneworks brings you the industry's leading fiberglass pool products backed by decades of manufacturing expertise. From the pool shell to the surrounding paver deck, fire features, outdoor kitchen, and landscaping, we design and build a complete outdoor environment that works together as a cohesive whole. Latham's fiberglass shells offer unmatched durability, low maintenance, and a smooth non-abrasive finish, perfect for Colorado's climate.",
    heroImage: 'https://images.unsplash.com/photo-1572331165267-854da2b021d9?w=1200&h=700&fit=crop',
    heroAlt: 'Latham fiberglass swimming pool installation in Colorado by Rock N Roll Stoneworks',
    features: [
      'Latham Pools Authorized Dealer',
      'Premium fiberglass pool shells with lifetime structural warranty',
      'Custom paver pool decks and surrounds',
      'Water feature and spillway integration',
      'Integrated spa and hot tub options',
      'LED color-changing pool lighting',
      'Full outdoor living environment design',
      'Complete installation from excavation to finish',
    ],
    body: [
      {
        heading: 'Why Latham Fiberglass Pools',
        text: "Latham is the largest manufacturer of in-ground residential swimming pools in North America, and as an Authorized Dealer, we offer their full line of fiberglass pool models. Latham fiberglass pools are engineered for Colorado's climate, the flexible composite shell handles ground movement and freeze-thaw cycles better than gunite or vinyl liner alternatives. The non-porous gel coat surface resists algae growth, reducing chemical use and ongoing maintenance. With dozens of shapes, sizes, and colors available, there is a Latham pool that fits your yard and your vision.",
      },
      {
        heading: 'A Complete Outdoor Living Solution',
        text: "The advantage of choosing Rock N Roll Stoneworks for your Latham pool installation is that we do not just install the pool, we design and build the entire outdoor environment surrounding it. A beautiful pool surrounded by a poorly executed patio, inadequate lighting, or mismatched landscape elements diminishes the overall result. Our integrated approach ensures that every element, pool, deck, fire feature, outdoor kitchen, and landscaping, is designed together and built to the same standard of craftsmanship.",
      },
    ],
    faqs: [
      {
        question: 'Why choose a Latham fiberglass pool over gunite or vinyl?',
        answer:
          'Latham fiberglass pools offer faster installation (typically weeks, not months), lower lifetime maintenance costs, a smooth non-abrasive finish, and superior resistance to algae. The flexible shell also handles Colorado\'s freeze-thaw cycles better than rigid gunite. Latham backs their pools with a lifetime structural warranty.',
      },
      {
        question: 'How long does a Latham pool installation take?',
        answer:
          'A Latham fiberglass pool installation typically takes four to eight weeks from excavation to completion, depending on site conditions, permitting, and the complexity of surrounding hardscape work. Fiberglass pools install significantly faster than gunite alternatives.',
      },
      {
        question: 'What Latham pool models are available?',
        answer:
          'As an Authorized Dealer, we have access to Latham\'s full catalog of fiberglass pool models, including freeform, rectangular, and contemporary designs in a range of sizes and colors. We will help you select the right model for your yard, lifestyle, and budget during our free design consultation.',
      },
    ],
    relatedSlugs: ['paver-installations', 'water-features', 'outdoor-kitchens'],
    primaryKeyword: 'Latham pool dealer Lafayette CO',
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return slugs.map((s) => services.find((svc) => svc.slug === s)).filter(Boolean) as ServiceData[];
}
