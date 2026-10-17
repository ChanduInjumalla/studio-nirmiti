import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    title: 'The Glass Pavilion Villa',
    slug: 'the-glass-pavilion-villa',
    projectType: 'residential',
    serviceTags: ['Architecture', 'Turnkey Execution', '3D Walkthrough'],
    location: 'Jubilee Hills, Hyderabad',
    scope: '7,800 sq.ft Architectural Planning & Full Turnkey Build',
    summary:
      'A private contemporary sanctuary featuring cantilevered concrete planes, full-height acoustic glazing, and an internal courtyard centered on a 40-year-old frangipani tree.',
    challenge:
      'The client requested complete privacy from neighboring multi-story residences while maintaining panoramic vistas toward the adjacent protected green canopy.',
    approach:
      'We designed an inward-looking U-shaped floor plate with double-height motorized timber louvers on the street elevation and expansive floor-to-ceiling glass wrapping the private central courtyard.',
    gallery: [
      {
        src: '/images/project_residential_villa.jpg',
        alt: 'Exterior cantilevered facade of The Glass Pavilion Villa',
      },
      {
        src: '/images/hero_architectural_living.jpg',
        alt: 'Double-height living pavilion with warm stone finishes',
      },
      {
        src: '/images/project_modular_kitchen.jpg',
        alt: 'Open-concept culinary kitchen and breakfast lounge',
      },
    ],
    beforeAfter: [
      {
        before: {
          src: '/images/before_concept_wireframe.jpg',
          alt: '3D wireframe structural analysis and sun study',
        },
        after: {
          src: '/images/after_completed_living.jpg',
          alt: 'Handed over luxury living pavilion with bespoke furniture',
        },
      },
    ],
    seo: {
      seoTitle: 'The Glass Pavilion Villa | Studio Nirmiti Case Study',
      metaDescription:
        'Architectural design and turnkey execution of a 7,800 sq.ft contemporary luxury villa in Hyderabad by Studio Nirmiti.',
    },
  },
  {
    title: 'The Stone & Timber Residence',
    slug: 'the-stone-timber-residence',
    projectType: 'residential',
    serviceTags: ['Interior Architecture', 'Custom Millwork', 'Lighting'],
    location: 'Whitefield, Bengaluru',
    scope: '5,400 sq.ft Complete Penthouse Interior Transformation',
    summary:
      'A warm minimalist penthouse interior defined by rough-hewn travertine stone claddings, wire-brushed smoked oak cabinetry, and hidden architectural magnetic lighting.',
    challenge:
      'Overcoming cold, cavernous builder-grade finishes and fragmented awkward corridors in an expansive high-floor duplex apartment.',
    approach:
      'We rationalized circulation paths by knocking down non-structural walls, introducing continuous fluted timber portal frames, and unifying the living-dining continuum under an acoustic coffered ceiling.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Warm minimalist living room with travertine wall and smoked oak details',
      },
      {
        src: '/images/project_modular_kitchen.jpg',
        alt: 'Bespoke modular kitchen in dark graphite and fluted oak',
      },
    ],
    beforeAfter: [
      {
        before: {
          src: '/images/before_concept_wireframe.jpg',
          alt: 'Initial 3D volumetric interior planning and lighting simulation',
        },
        after: {
          src: '/images/after_completed_living.jpg',
          alt: 'Finished living area with custom leather seating and curated stone hearth',
        },
      },
    ],
    seo: {
      seoTitle: 'The Stone & Timber Residence | Studio Nirmiti Case Study',
      metaDescription:
        'Luxury penthouse interior architecture and custom joinery execution in Bengaluru by Studio Nirmiti.',
    },
  },
  {
    title: 'The Cantilever Lake House',
    slug: 'the-cantilever-lake-house',
    projectType: 'residential',
    serviceTags: ['Architecture', 'Landscape Design', 'Structural Glazing'],
    location: 'Alibaug, Maharashtra',
    scope: '9,200 sq.ft Waterfront Independent Estate',
    summary:
      'A monumental lake-facing residence sculpted from exposed board-marked concrete, black slate, and cantilevered infinity terraces floating over the shoreline.',
    challenge:
      'Engineering high-salinity coastal weathering resistance and seismic stability for 6-meter post-tensioned cantilevers without internal supporting pillars.',
    approach:
      'Utilized marine-grade self-compacting concrete, concealed steel portal frames, and motorized sliding glass pocket doors that dissolve the boundary between indoors and the lake.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        alt: 'Cantilever lake house exterior elevation with infinity pool reflection',
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Open pavilion living room facing lake waters',
      },
    ],
    seo: {
      seoTitle: 'The Cantilever Lake House | Studio Nirmiti Villa Architecture',
      metaDescription:
        'Luxury waterfront architectural villa design and execution in Alibaug by Studio Nirmiti.',
    },
  },
  {
    title: 'Minimalist Urban Penthouse',
    slug: 'minimalist-urban-penthouse',
    projectType: 'residential',
    serviceTags: ['Interior Architecture', 'Lighting', 'Modular Kitchen'],
    location: 'Banjara Hills, Hyderabad',
    scope: '4,200 sq.ft Luxury Sky Residence',
    summary:
      'A tranquil sky home celebrating quiet luxury, concealed storage systems, microcement flooring, and panoramic sunset views through frameless glass facades.',
    challenge:
      'Maximizing natural light while preventing afternoon solar glare on south-facing living areas.',
    approach:
      'Integrated dual-layer motorized solar shading, custom Venetian plaster feature walls that diffuse light, and low-iron architectural glazing.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Sky penthouse living area with uninterrupted sunset vistas',
      },
    ],
    seo: {
      seoTitle: 'Minimalist Urban Penthouse | Studio Nirmiti Residential Case Study',
      metaDescription:
        'Minimalist interior architecture for a 4,200 sq.ft sky residence by Studio Nirmiti.',
    },
  },
  {
    title: 'Aura Executive Corporate Suite',
    slug: 'aura-corporate-suite',
    projectType: 'commercial',
    serviceTags: ['Commercial Interiors', 'Space Planning', 'Turnkey Execution'],
    location: 'HITEC City, Hyderabad',
    scope: '14,500 sq.ft Tech Leadership Corporate Headquarters',
    summary:
      'An executive workspace balancing authoritative boardroom presence, acoustic privacy booths, and biophilic collaborative lounges for 180 team members.',
    challenge:
      'Delivering an ultra-fast 75-day turnaround while meeting strict STC 52 acoustic insulation standards between executive suites and public presentation areas.',
    approach:
      'Modular pre-fabricated acoustic timber wall panels, decoupled double-glazed partition walls, and precision-engineered linear HVAC diffusers that prevent sound leakage.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Executive boardroom and collaborative lounge with warm walnut accents',
      },
    ],
    seo: {
      seoTitle: 'Aura Executive Corporate Suite | Studio Nirmiti Commercial Project',
      metaDescription:
        'Commercial turnkey interior fit-out for technology headquarters in Hyderabad by Studio Nirmiti.',
    },
  },
  {
    title: 'Artisan Coffee Roasters & Cafe',
    slug: 'artisan-coffee-roasters',
    projectType: 'commercial',
    serviceTags: ['Retail Interiors', 'Facade Design', 'Custom Furniture'],
    location: 'Indiranagar, Bengaluru',
    scope: '2,800 sq.ft Specialty Cafe & Micro-Roastery',
    summary:
      'An experiential culinary destination featuring exposed terracotta brickwork, brushed brass espresso bars, and bespoke fluted timber banquette seating.',
    challenge:
      'Integrating commercial-grade roasting equipment and heavy acoustic ventilation without compromising the relaxed, artisanal customer atmosphere.',
    approach:
      'Glass-encased soundproof roasting theatre that lets customers observe the roasting ritual while acoustic ceiling baffle clouds maintain pleasant conversational acoustics.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
        alt: 'Artisan cafe interior with brass bar and warm ambient lighting',
      },
    ],
    seo: {
      seoTitle: 'Artisan Coffee Roasters & Cafe | Studio Nirmiti Commercial Project',
      metaDescription:
        'Specialty retail cafe and hospitality interior fit-out by Studio Nirmiti.',
    },
  },
  {
    title: 'Lumina Luxury Flagship Showroom',
    slug: 'lumina-luxury-flagship',
    projectType: 'commercial',
    serviceTags: ['Retail Architecture', 'Lighting Design', 'Display Millwork'],
    location: 'UB City, Bengaluru',
    scope: '6,500 sq.ft Haute Couture & Fine Watch Boutique',
    summary:
      'An opulent retail jewel box combining back-lit onyx portals, suede-lined showcases, brass accents, and museum-grade color rendering index (CRI 98) lighting.',
    challenge:
      'Designing discrete high-security biometric storage vaults while maintaining an airy, welcoming boutique luxury salon ambience.',
    approach:
      'Secret pivot doors concealed within wall paneling leading to private VIP viewing lounges, paired with anti-reflective glass display cabinets.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
        alt: 'Lumina flagship retail showroom with back-lit stone portals',
      },
    ],
    seo: {
      seoTitle: 'Lumina Luxury Flagship Showroom | Studio Nirmiti Commercial Project',
      metaDescription:
        'Boutique luxury retail showroom design and turnkey fit-out in Bengaluru by Studio Nirmiti.',
    },
  },
  {
    title: 'Sereno Boutique Resort Lounge',
    slug: 'sereno-boutique-resort',
    projectType: 'hospitality',
    serviceTags: ['Hospitality Design', 'Lighting Design', '3D Walkthrough'],
    location: 'Coorg, Karnataka',
    scope: '12,000 sq.ft Resort Central Clubhouse & Destination Suites',
    summary:
      'A hillside wellness retreat woven directly into the cardamom plantation landscape, utilizing reclaimed local granite, cane weaves, and open-air fire pits.',
    challenge:
      'Constructing on a steep 32-degree slope without removing native heritage shade trees or disrupting natural water runoff channels.',
    approach:
      'Stepped pavilion architecture on localized micro-piles, cantilevered open-air dining decks, and native stone walls that blend invisibly into the forest.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        alt: 'Evening ambient illumination across the open pavilion lounge',
      },
    ],
    seo: {
      seoTitle: 'Sereno Boutique Resort Lounge | Studio Nirmiti Hospitality Project',
      metaDescription:
        'Boutique resort architecture and interior design in Coorg by Studio Nirmiti.',
    },
  },
  {
    title: 'Alaya Forest Wellness Pavilion',
    slug: 'alaya-forest-wellness',
    projectType: 'hospitality',
    serviceTags: ['Eco-Architecture', 'Resort Masterplan', 'Biophilic Design'],
    location: 'Wayanad, Kerala',
    scope: '18,000 sq.ft Ayurvedic Spa & Private Treehouse Villas',
    summary:
      'A rainforest sanctuary built with rammed earth walls, curved thatched timber roofs, and private plunge pools perched above the canopy.',
    challenge:
      'Zero-emission sustainable construction within an environmentally sensitive Western Ghats buffer zone.',
    approach:
      'Locally sourced laterite stone foundations, solar-passive orientation eliminating air-conditioning needs, and rainwater harvesting terraces.',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        alt: 'Alaya wellness sanctuary floating in misty rainforest landscape',
      },
    ],
    seo: {
      seoTitle: 'Alaya Forest Wellness Pavilion | Studio Nirmiti Hospitality Project',
      metaDescription:
        'Eco-luxury resort masterplanning and wellness pavilion architecture by Studio Nirmiti.',
    },
  },
];
