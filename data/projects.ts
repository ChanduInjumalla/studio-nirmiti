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
        src: '/images/hero_architectural_living.jpg',
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
        src: '/images/project_commercial_office.jpg',
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
        src: '/images/project_hospitality_resort.jpg',
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
        src: '/images/hero_architectural_living.jpg',
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
        src: '/images/project_commercial_office.jpg',
        alt: 'Artisan cafe interior with brass bar and warm ambient lighting',
      },
    ],
    seo: {
      seoTitle: 'Artisan Coffee Roasters & Cafe | Studio Nirmiti Commercial Project',
      metaDescription:
        'Specialty retail cafe and hospitality interior fit-out by Studio Nirmiti.',
    },
  },
];
