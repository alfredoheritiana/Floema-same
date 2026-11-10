export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  collection: 'urban' | 'nature' | 'replastic' | 'golf' | 'details';
  category: 'Signage' | 'Furniture' | 'Equipment' | 'Construction';
  subfilter?: string;
  image: string;
  secondaryImages?: string[];
  dimensions: string;
  weight?: string;
  structureOptions?: string[];
  material: string;
  finishes?: string[];
  description: string;
  verified?: boolean;
  specs: ProductSpec[];
}

export interface Collection {
  id: 'urban' | 'nature' | 'replastic' | 'golf' | 'details';
  number: string;
  name: string;
  tagline: string;
  ctaText: string;
  heroImage: string;
  accentColor: string;
  archiveCount: number; // Source site category count
  catalogueCover?: string;
  description: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Case Studies' | 'Sustainability' | 'Press releases' | 'Products' | 'Educational' | 'Institutional';
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
  location?: string;
  materials?: string[];
}

export const COLLECTIONS: Collection[] = [
  {
    id: 'urban',
    number: '01',
    name: 'Urban',
    tagline: 'Signage, furniture, and equipment for welcoming urban spaces',
    ctaText: 'See Urban Products',
    heroImage: '/assets/floema/restauradores-square.jpg',
    accentColor: '#F76C46',
    archiveCount: 51,
    catalogueCover: '/assets/floema/catalogue-cover-of-the-details-collection.png',
    description: 'Signage, furniture, and equipment designed to guarantee functionality, viability, and seamless integration into civic spaces.'
  },
  {
    id: 'nature',
    number: '02',
    name: 'Nature',
    tagline: 'Signage and equipment for all facets of the great outdoors',
    ctaText: 'See Nature Products',
    heroImage: '/assets/floema/large-icnf-information-panel-in-recycled-plastic.jpg',
    accentColor: '#C6AF88',
    archiveCount: 41,
    description: 'Signage and equipment designed for trails, national parks, geoparks, and protected outdoor environments.'
  },
  {
    id: 'replastic',
    number: '03',
    name: 'RePlastic',
    tagline: 'Custom projects and furniture crafted out of 100% recyclable plastic',
    ctaText: 'See RePlastic Products',
    heroImage: '/assets/floema/paiva-walkways.png',
    accentColor: '#85A1C5',
    archiveCount: 73,
    description: 'Custom projects and durable furniture crafted out of 100% recyclable plastic, eliminating rot, splinters, and chemical maintenance.'
  },
  {
    id: 'golf',
    number: '04',
    name: 'Golf',
    tagline: 'Revamp your course with best practices golf equipment and signage',
    ctaText: 'See Golf Products',
    heroImage: '/assets/floema/obidos-golf-course.png',
    accentColor: '#BACFA3',
    archiveCount: 62,
    catalogueCover: '/assets/floema/catalogue-golf-collection.png',
    description: 'Best practices golf signage, tee markers, totems, and amenities engineered for championship courses.'
  },
  {
    id: 'details',
    number: '05',
    name: 'Details',
    tagline: 'People and environment-friendly custom signage',
    ctaText: 'See Details Products',
    heroImage: '/assets/floema/floema-details-outdoor-signage-totem-for-palmares.jpg',
    accentColor: '#E9E778',
    archiveCount: 18,
    catalogueCover: '/assets/floema/catalogue-cover-of-the-details-collection.png',
    description: 'People and environment-friendly custom architectural signage and monoliths.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'byside-bench-plaza',
    slug: 'byside-bench-plaza',
    title: 'Byside bench Plaza',
    collection: 'urban',
    category: 'Furniture',
    subfilter: 'Plaza',
    image: '/assets/floema/byside-bench-plaza.png',
    secondaryImages: [
      '/assets/floema/byside-bench-plaza.png',
      '/assets/floema/community-table-plaza.jpg',
      '/assets/floema/belleville-bench.jpg'
    ],
    dimensions: '2000 × 554 × 465 mm',
    structureOptions: ['Metallised and painted steel', 'Galvanised steel'],
    material: 'Brown recycled plastic slats & steel structure',
    finishes: ['RAL 9005 Jet Black', 'RAL 7016 Anthracite Grey', 'Corten Finish Effect', 'Oxide Green'],
    description: 'Contemporary public bench with recycled plastic slats fixed to a steel structure. Weather-resistant, rot-proof, and designed for public plazas and parks.',
    verified: true,
    specs: [
      { label: 'Dimensions', value: '2000 × 554 × 465 mm' },
      { label: 'Structure', value: 'Metallised and painted steel / Galvanised steel' },
      { label: 'Slats', value: 'Brown recycled plastic profile' },
      { label: 'Fixation', value: 'Ground anchoring via chemical or mechanical anchors' }
    ]
  },
  {
    id: 'palmer-tee-sign',
    slug: 'palmer-tee-sign',
    title: 'Palmer tee sign',
    collection: 'golf',
    category: 'Signage',
    image: '/assets/floema/palmer-tee-sign.png',
    secondaryImages: [
      '/assets/floema/palmer-tee-sign.png',
      '/assets/floema/tee-number-cube.png',
      '/assets/floema/clock-on-spot-palmer.png'
    ],
    dimensions: '1200 × 400 × 120 mm',
    structureOptions: ['Anodised aluminum', 'Stainless steel post'],
    material: 'High-pressure compact laminate (HPL) & recycled plastic post',
    finishes: ['Celadon Forest', 'Pebble White', 'Graphite Black'],
    description: 'Championship golf tee sign with hole schematics, distance markers, and course wayfinding graphics.',
    verified: true,
    specs: [
      { label: 'Dimensions', value: '1200 × 400 × 120 mm' },
      { label: 'Plate', value: 'High-Pressure Compact Laminate (HPL)' },
      { label: 'Support Post', value: 'Recycled plastic post' },
      { label: 'Application', value: 'Golf course tee areas' }
    ]
  },
  {
    id: 'trail-recycled-plastic-trail-marker',
    slug: 'trail-recycled-plastic-trail-marker',
    title: 'Trail recycled plastic trail marker',
    collection: 'nature',
    category: 'Signage',
    image: '/assets/floema/trail-recycled-plastic-trail-marker.png',
    secondaryImages: [
      '/assets/floema/trail-recycled-plastic-trail-marker.png',
      '/assets/floema/cycling-route-directional-sign.png'
    ],
    dimensions: '1500 × 120 × 120 mm',
    material: '100% Recycled plastic with routed wayfinding markings',
    finishes: ['Earth Brown', 'Granite Grey'],
    description: 'Wayfinding post for hiking trails, nature reserves, and geoparks. Impervious to moisture and rot.',
    specs: [
      { label: 'Dimensions', value: '1500 × 120 × 120 mm' },
      { label: 'Material', value: '100% Recycled plastic' },
      { label: 'Fixation', value: 'In-ground burial' }
    ]
  },
  {
    id: 'large-icnf-information-panel',
    slug: 'large-icnf-information-panel',
    title: 'Large ICNF information panel',
    collection: 'replastic',
    category: 'Signage',
    image: '/assets/floema/large-icnf-information-panel-in-recycled-plastic.jpg',
    secondaryImages: [
      '/assets/floema/large-icnf-information-panel-in-recycled-plastic.jpg',
      '/assets/floema/information-panel.png'
    ],
    dimensions: '2400 × 1800 × 160 mm',
    material: 'Recycled plastic structural beams with HPL panel',
    finishes: ['Forest Brown', 'Deep Black'],
    description: 'Information totem developed for Portugal’s Institute for Nature Conservation and Forests (ICNF).',
    specs: [
      { label: 'Dimensions', value: '2400 × 1800 × 160 mm' },
      { label: 'Beams', value: 'Solid recycled plastic' },
      { label: 'Face', value: 'Exterior-grade compact laminate' }
    ]
  },
  {
    id: 'bike-rack-frame',
    slug: 'bike-rack-frame',
    title: 'Bike rack Frame',
    collection: 'urban',
    category: 'Equipment',
    subfilter: 'Frame',
    image: '/assets/floema/bike-rack-frame.jpg',
    dimensions: '900 × 800 × 60 mm',
    material: 'Hot-dip galvanised steel',
    finishes: ['Jet Black RAL 9005', 'Galvanised Natural'],
    description: 'Urban bicycle parking structure designed for secure frame locking.',
    specs: [
      { label: 'Dimensions', value: '900 × 800 × 60 mm' },
      { label: 'Material', value: 'Galvanised tubular steel' }
    ]
  },
  {
    id: 'water-fountain-frame',
    slug: 'water-fountain-frame',
    title: 'Water fountain Frame',
    collection: 'urban',
    category: 'Equipment',
    subfilter: 'Frame',
    image: '/assets/floema/water-fountain-frame.jpg',
    dimensions: '1050 × 450 × 450 mm',
    material: 'Recycled plastic & stainless steel drinking basin',
    description: 'Public drinking water fountain designed for parks and urban spaces.',
    specs: [
      { label: 'Dimensions', value: '1050 × 450 × 450 mm' },
      { label: 'Basin', value: 'Stainless steel' }
    ]
  },
  {
    id: 'community-table-plaza',
    slug: 'community-table-plaza',
    title: 'Community Table Plaza',
    collection: 'urban',
    category: 'Furniture',
    subfilter: 'Plaza',
    image: '/assets/floema/community-table-plaza.jpg',
    dimensions: '2800 × 1000 × 760 mm',
    material: 'Recycled plastic planking on steel frame',
    description: 'Communal picnic and gathering table for plazas, corporate parks, and campuses.',
    specs: [
      { label: 'Dimensions', value: '2800 × 1000 × 760 mm' },
      { label: 'Planks', value: '100% Recycled plastic' }
    ]
  },
  {
    id: 'belleville-bench',
    slug: 'belleville-bench',
    title: 'Belleville bench',
    collection: 'urban',
    category: 'Furniture',
    subfilter: 'Plaza',
    image: '/assets/floema/belleville-bench.jpg',
    dimensions: '1800 × 600 × 820 mm',
    material: 'Recycled plastic & steel side frames',
    description: 'Classical park bench silhouette constructed with circular materials.',
    specs: [
      { label: 'Dimensions', value: '1800 × 600 × 820 mm' }
    ]
  },
  {
    id: 'liatris-planter',
    slug: 'liatris-planter',
    title: 'Liatris planter',
    collection: 'urban',
    category: 'Furniture',
    image: '/assets/floema/liatris-planter.jpg',
    dimensions: '1000 × 1000 × 800 mm',
    material: 'Modular recycled plastic panels',
    description: 'Substantial civic planter module for street greening and pedestrian space definition.',
    specs: [
      { label: 'Dimensions', value: '1000 × 1000 × 800 mm' }
    ]
  },
  {
    id: 'oxalis-planter',
    slug: 'oxalis-planter',
    title: 'Oxalis planter',
    collection: 'urban',
    category: 'Furniture',
    image: '/assets/floema/oxalis-planter.jpg',
    dimensions: '800 × 800 × 650 mm',
    material: 'Recycled plastic slatted enclosure',
    description: 'Movable architectural planter for seasonal urban configurations.',
    specs: [
      { label: 'Dimensions', value: '800 × 800 × 650 mm' }
    ]
  },
  {
    id: 'entrance-totem-details',
    slug: 'entrance-totem-details',
    title: 'Entrance totem Details',
    collection: 'details',
    category: 'Signage',
    image: '/assets/floema/entrance-totem.png',
    dimensions: '3000 × 800 × 200 mm',
    material: 'Architectural aluminium with custom branding',
    description: 'Custom corporate campus and development entrance totem.',
    specs: [
      { label: 'Dimensions', value: '3000 × 800 × 200 mm' }
    ]
  },
  {
    id: 'e-bike-charger-frame',
    slug: 'e-bike-charger-frame',
    title: 'E-bike charger Frame',
    collection: 'urban',
    category: 'Equipment',
    subfilter: 'Frame',
    image: '/assets/floema/e-bike-charger-frame.jpg',
    dimensions: '1400 × 500 × 300 mm',
    material: 'Stainless steel & integrated charging outlets',
    description: 'Weatherproof public e-bike and scooter charging station.',
    specs: [
      { label: 'Dimensions', value: '1400 × 500 × 300 mm' }
    ]
  },
  {
    id: 'directional-sign-frame',
    slug: 'directional-sign-frame',
    title: 'Directional sign frame',
    collection: 'nature',
    category: 'Signage',
    image: '/assets/floema/directional-sign-frame.jpg',
    dimensions: '2200 × 750 × 100 mm',
    material: 'Recycled plastic mast with modular chevron blades',
    description: 'Multi-directional trail signpost for walking itineraries and nature trails.',
    specs: [
      { label: 'Dimensions', value: '2200 × 750 × 100 mm' }
    ]
  },
  {
    id: 'bag-stand-palmer',
    slug: 'bag-stand-palmer',
    title: 'Bag stand Palmer',
    collection: 'golf',
    category: 'Equipment',
    image: '/assets/floema/bag-stand-palmer.png',
    dimensions: '850 × 400 × 350 mm',
    material: 'Recycled plastic with rubberized cradle',
    description: 'Ergonomic bag stand for practice tees and golf driving ranges.',
    specs: [
      { label: 'Dimensions', value: '850 × 400 × 350 mm' }
    ]
  },
  {
    id: 'clock-on-spot-palmer',
    slug: 'clock-on-spot-palmer',
    title: 'Clock on spot Palmer',
    collection: 'golf',
    category: 'Equipment',
    image: '/assets/floema/clock-on-spot-palmer.png',
    dimensions: '1800 × 500 × 150 mm',
    material: 'Weatherproof quartz movement on recycled plastic totem',
    description: 'Starter clock for the 1st and 10th tees on championship courses.',
    specs: [
      { label: 'Dimensions', value: '1800 × 500 × 150 mm' }
    ]
  },
  {
    id: 'royal-ball-pyramid',
    slug: 'royal-ball-pyramid',
    title: 'Royal ball pyramid',
    collection: 'golf',
    category: 'Equipment',
    image: '/assets/floema/royal-ball-pyramid.png',
    dimensions: '400 × 400 × 350 mm',
    material: 'Composite ball stacking tray',
    description: 'Practice ball pyramid amenity for golf driving ranges.',
    specs: [
      { label: 'Dimensions', value: '400 × 400 × 350 mm' }
    ]
  },
  {
    id: 'tee-number-cube',
    slug: 'tee-number-cube',
    title: 'Tee number cube',
    collection: 'golf',
    category: 'Equipment',
    image: '/assets/floema/tee-number-cube.png',
    dimensions: '200 × 200 × 200 mm',
    material: 'Solid recycled polyolefin block with routed numbers',
    description: 'Geometric tee box marker for course hole identification.',
    specs: [
      { label: 'Dimensions', value: '200 × 200 × 200 mm' }
    ]
  },
  {
    id: 'cycling-route-directional-sign',
    slug: 'cycling-route-directional-sign',
    title: 'Cycling route directional sign',
    collection: 'nature',
    category: 'Signage',
    image: '/assets/floema/cycling-route-directional-sign.png',
    dimensions: '1800 × 250 × 120 mm',
    material: 'Recycled plastic core with directional arrow',
    description: 'Signpost for cycling networks and mountain bike trails.',
    specs: [
      { label: 'Dimensions', value: '1800 × 250 × 120 mm' }
    ]
  },
  {
    id: 'interpretive-lectern-panel',
    slug: 'interpretive-lectern-panel',
    title: 'Interpretive lectern panel',
    collection: 'nature',
    category: 'Signage',
    image: '/assets/floema/interpretive-lectern-panel.png',
    dimensions: '1100 × 800 × 600 mm',
    material: 'Recycled plastic pedestal with angled reading surface',
    description: 'Viewpoint lectern desk for scenic lookouts and educational interpretation.',
    specs: [
      { label: 'Dimensions', value: '1100 × 800 × 600 mm' }
    ]
  },
  {
    id: 'ecoponto-frame',
    slug: 'ecoponto-frame',
    title: 'Ecoponto Frame',
    collection: 'replastic',
    category: 'Equipment',
    image: '/assets/floema/ecoponto-frame.jpg',
    dimensions: '1100 × 1200 × 550 mm',
    material: 'Recycled plastic waste separation structure',
    description: 'Selective waste collection station for park environments.',
    specs: [
      { label: 'Dimensions', value: '1100 × 1200 × 550 mm' }
    ]
  },
  {
    id: 'concealment-fence',
    slug: 'concealment-fence',
    title: 'Concealment fence',
    collection: 'replastic',
    category: 'Construction',
    image: '/assets/floema/concealment-fence.jpg',
    dimensions: '2000 × 1800 × 80 mm',
    material: 'Recycled plastic interlocking planks',
    description: 'Screening fence for utility stations, waste enclosures, and perimeter boundaries.',
    specs: [
      { label: 'Dimensions', value: '2000 × 1800 × 80 mm' }
    ]
  },
  {
    id: 'elevated-walkway',
    slug: 'elevated-walkway',
    title: 'Elevated walkway',
    collection: 'nature',
    category: 'Construction',
    image: '/assets/floema/elevated-walkway.jpg',
    dimensions: 'Modular walkway sections',
    material: 'Recycled plastic structural beams & anti-slip decking',
    description: 'Elevated walkway infrastructure for coastal dunes, wetlands, and mountain trails.',
    specs: [
      { label: 'Material', value: '100% Recycled plastic' }
    ]
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'bussaco-national-forest',
    slug: 'bussaco-national-forest',
    title: 'Bussaco National Forest',
    category: 'Case Studies',
    date: 'June 3, 2025',
    readTime: '4 min read',
    image: '/assets/floema/mata-nacional-do-bussaco-floema.jpg',
    summary: 'How does ecotourism improve communities, traditions, spaces and territories? Sustainable signage and wayfinding installed in Mata Nacional do Buçaco.',
    location: 'Mata Nacional do Buçaco, Luso, Portugal',
    materials: ['Recycled Plastic', 'High-Pressure Compact Laminate (HPL)'],
    content: [
      'The National Forest of Buçaco is a botanical and historical sanctuary in central Portugal. Floema designed and installed sustainable signage and equipment that seamlessly integrate into the landscape.',
      'Using ecological raw materials, the installed trail markers and informational totems offer durable, low maintenance solutions that withstand extreme weather while preserving sensitive forest grounds.',
      'Our products enhance the heritage, urban environment, landscape and culture of the region without requiring toxic varnishes or periodic chemical renewal.'
    ]
  },
  {
    id: 'paiva-walkways',
    slug: 'paiva-walkways',
    title: 'Paiva Walkways Infrastructure',
    category: 'Sustainability',
    date: 'April 14, 2025',
    readTime: '5 min read',
    image: '/assets/floema/paiva-walkways.png',
    summary: 'Sustainable walkways and signage engineered for the Arouca Geopark.',
    location: 'Arouca Geopark, Portugal',
    materials: ['Recycled Plastic Beams', 'Stainless Steel Fasteners'],
    content: [
      'The Paiva Walkways require infrastructure that endures rugged river gorges and seasonal moisture. Floema supplied modular components engineered from 100% recycled plastic.',
      'The installation demonstrates how closed-loop materials preserve sensitive natural terrains while providing safe visitor access.'
    ]
  },
  {
    id: 'restauradores-lisbon',
    slug: 'restauradores-lisbon',
    title: 'Praça dos Restauradores Urban Furniture',
    category: 'Case Studies',
    date: 'February 18, 2025',
    readTime: '3 min read',
    image: '/assets/floema/restauradores-square.jpg',
    summary: 'Integration of Byside bench Plaza in Lisbon’s historic center.',
    location: 'Lisbon, Portugal',
    materials: ['Steel Structure', 'Recycled Plastic Slats'],
    content: [
      'In historic Lisbon, public furniture must withstand high pedestrian volume while honoring architectural character. Byside bench Plaza offers low maintenance and rot-proof seating.'
    ]
  },
  {
    id: 'obidos-golf-course',
    slug: 'obidos-golf-course',
    title: 'Óbidos Golf Course Signage',
    category: 'Products',
    date: 'November 12, 2024',
    readTime: '4 min read',
    image: '/assets/floema/obidos-golf-course.png',
    summary: 'Best practices golf course equipment and wayfinding for championship layouts.',
    location: 'Óbidos, Portugal',
    materials: ['HPL Core', 'Recycled Plastic Post'],
    content: [
      'Floema’s golf collection delivers durable tee markers, totems, and course amenities built to withstand intense coastal winds and UV exposure.'
    ]
  }
];

export const TIMELINE_EVENTS = [
  {
    year: '2007',
    title: 'Floema® Founded',
    desc: 'Floema is founded in Portugal by Fernando Pinto to engineer sustainable public signage and equipment.'
  },
  {
    year: '2011',
    title: 'RePlastic Introduction',
    desc: 'Development of 100% recycled plastic production techniques for outdoor architectural structures.'
  },
  {
    year: '2016',
    title: 'Natural Parks & Trails',
    desc: 'Partnership with Portuguese nature reserves and national trail systems for rot-proof signage.'
  },
  {
    year: '2020',
    title: 'Golf Collection',
    desc: 'Launch of the Floema Golf equipment line for championship courses.'
  },
  {
    year: '2025',
    title: 'European Expansion',
    desc: 'Floema expands distribution and turnkey installations across Portugal, Spain, and Europe.'
  }
];
