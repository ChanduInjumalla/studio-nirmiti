import type { Service } from '@/types';

export const servicesData: Service[] = [
  {
    title: 'Architectural Design',
    slug: 'architectural-design',
    category: 'Architecture',
    summary:
      'Comprehensive architectural planning, massing, zoning, and detailed construction documentation for discerning residential and commercial projects.',
    body:
      'We treat architecture as an enduring framework for life. From sun-path orientation and spatial proportion to material honesty and regulatory approvals, every structure is conceived with poise and structural rigor.',
    relatedServices: ['interior-design', 'facade-design', '3d-visualization', 'execution-works'],
    relatedProjects: ['the-glass-pavilion-villa', 'aura-corporate-suite'],
    media: [
      {
        src: '/images/project_residential_villa.jpg',
        alt: 'Modern architectural villa design by Studio Nirmiti',
      },
    ],
    seo: {
      seoTitle: 'Architectural Design Services | Studio Nirmiti',
      metaDescription:
        'Architectural design planning, structural coordination, and sustainable built environments by Studio Nirmiti.',
    },
  },
  {
    title: 'Interior Design',
    slug: 'interior-design',
    category: 'Interiors',
    summary:
      'Bespoke interior architecture, custom cabinetry, material palettes, and lighting design crafted for elevated everyday living.',
    body:
      'Interior design at Studio Nirmiti is not superficial decoration; it is spatial choreography. We orchestrate volumes, textures, acoustic comfort, and natural light into harmonious, lived-in sanctuaries.',
    relatedServices: ['modular-kitchens', 'custom-furniture', 'lighting-false-ceiling', 'material-finishes'],
    relatedProjects: ['the-stone-timber-residence', 'minimalist-urban-penthouse'],
    media: [
      {
        src: '/images/hero_architectural_living.jpg',
        alt: 'Refined interior design living space by Studio Nirmiti',
      },
    ],
    seo: {
      seoTitle: 'Interior Design Services | Studio Nirmiti',
      metaDescription:
        'Luxury residential and commercial interior design services with bespoke finishes and turnkey execution.',
    },
  },
  {
    title: 'Exterior & Facade Design',
    slug: 'exterior-design',
    category: 'Architecture',
    summary:
      'Articulated building envelopes, louvers, kinetic screens, and thermal envelope treatments that define architectural identity.',
    body:
      'A facade is both identity and climate filter. We design high-performance elevations that balance solar heat gain, privacy, and sculptural presence on the streetscape.',
    relatedServices: ['architectural-design', '3d-visualization'],
    relatedProjects: ['the-glass-pavilion-villa'],
    media: [
      {
        src: '/images/project_residential_villa.jpg',
        alt: 'Contemporary facade design with timber screens and stone claddings',
      },
    ],
    seo: {
      seoTitle: 'Exterior & Facade Design Services | Studio Nirmiti',
      metaDescription:
        'High-performance exterior facade engineering and modern architectural elevations by Studio Nirmiti.',
    },
  },
  {
    title: 'Turnkey Execution Works',
    slug: 'execution-works',
    category: 'Execution',
    summary:
      'End-to-end contracting, civil construction, joinery fabrication, and rigorous quality supervision from groundbreaking to keys in hand.',
    body:
      'Our turnkey execution eliminates the gap between 3D design and on-site reality. With single-source accountability, tight milestone scheduling, and zero contractor friction, what you approve in render is exactly what gets built.',
    relatedServices: ['turnkey-interiors', 'project-supervision', 'renovation-remodeling'],
    relatedProjects: ['the-stone-timber-residence', 'aura-corporate-suite'],
    media: [
      {
        src: '/images/after_completed_living.jpg',
        alt: 'Turnkey interior execution handover by Studio Nirmiti',
      },
    ],
    seo: {
      seoTitle: 'Turnkey Execution Works | Studio Nirmiti',
      metaDescription:
        'Precision contracting, civil fabrication, and turnkey execution with direct architect supervision.',
    },
  },
  {
    title: 'Space Planning & Ergonomics',
    slug: 'space-planning',
    category: 'Architecture',
    summary:
      'Rational zoning, ergonomic circulation pathways, daylight optimization, and functional layout optimization for complex programs.',
    body:
      'Great architecture begins on the floor plan. We analyze flow patterns, family habits, and structural grids to extract maximum spatial value, privacy, and effortless utility from every square foot.',
    relatedServices: ['architectural-design', 'interior-design'],
    relatedProjects: ['minimalist-urban-penthouse'],
    media: [
      {
        src: '/images/project_commercial_office.jpg',
        alt: 'Optimized space planning and architectural floor plate layout',
      },
    ],
    seo: {
      seoTitle: 'Space Planning & Floor Layout Design | Studio Nirmiti',
      metaDescription:
        'Expert architectural space planning and functional flow optimization for residences and workplaces.',
    },
  },
  {
    title: 'Modular Kitchens & Systems',
    slug: 'modular-kitchens',
    category: 'Interiors',
    summary:
      'Precision German and Italian hardware, scratch-resistant acrylic and lacquered glass finishes, and culinary ergonomic triangles.',
    body:
      'The modern kitchen is the culinary anchor of the home. We build seamless modular kitchens incorporating quartz countertops, Blum and Hettich motion hardware, intelligent pull-outs, and integrated appliance tall units.',
    relatedServices: ['interior-design', 'custom-furniture', 'material-finishes'],
    relatedProjects: ['the-stone-timber-residence'],
    media: [
      {
        src: '/images/project_modular_kitchen.jpg',
        alt: 'Minimalist luxury modular kitchen with dark island and fluted timber',
      },
    ],
    seo: {
      seoTitle: 'Modular Kitchen Design & Installation | Studio Nirmiti',
      metaDescription:
        'High-end modular kitchens with premium hardware, quartz surfaces, and bespoke cabinetry.',
    },
  },
  {
    title: '3D Visualization & CGI',
    slug: '3d-visualization',
    category: 'Visualization',
    summary:
      'Photorealistic architectural renderings, lighting studies, and physical material simulations before construction begins.',
    body:
      'We believe in absolute certainty before breaking ground. Our in-house CGI studio produces hyper-realistic 3D visualizations that capture exact sun angles, texture reflection, and tactile nuances.',
    relatedServices: ['3d-walkthroughs', 'architectural-design'],
    relatedProjects: ['the-glass-pavilion-villa', 'sereno-boutique-resort'],
    media: [
      {
        src: '/images/before_concept_wireframe.jpg',
        alt: '3D visualization rendering process by Studio Nirmiti',
      },
    ],
    seo: {
      seoTitle: '3D Architectural Visualization & CGI | Studio Nirmiti',
      metaDescription:
        'Hyper-realistic 3D architectural rendering and interior CGI visualization services.',
    },
  },
  {
    title: '3D Architectural Walkthroughs',
    slug: '3d-walkthroughs',
    category: 'Visualization',
    summary:
      'Cinematic 4K spatial flythroughs, interactive camera sequences, and virtual VR tours for immersive client presentations.',
    body:
      'Experience your building before a single brick is laid. Our cinematic walkthroughs capture movement, scale, day-to-night lighting transitions, and spatial depth with director-level framing.',
    relatedServices: ['3d-visualization', 'architectural-design'],
    relatedProjects: ['sereno-boutique-resort'],
    media: [
      {
        src: '/images/project_hospitality_resort.jpg',
        alt: 'Cinematic 3D architectural walkthrough simulation',
      },
    ],
    seo: {
      seoTitle: '3D Architectural Walkthroughs & Animation | Studio Nirmiti',
      metaDescription:
        'Immersive 4K 3D walkthroughs and animated architectural tours by Studio Nirmiti.',
    },
  },
  {
    title: 'Lighting & False Ceiling Design',
    slug: 'lighting-false-ceiling',
    category: 'Interiors',
    summary:
      'Layered architectural illumination, cove detailings, magnetic track systems, and acoustic ceiling treatments.',
    body:
      'Lighting creates mood, reveals texture, and defines hierarchy. We craft layered lighting schemes combining ambient recessed coves, directional art spots, low-glare magnetic tracks, and warm architectural fixtures.',
    relatedServices: ['interior-design', 'material-finishes'],
    relatedProjects: ['minimalist-urban-penthouse'],
    media: [
      {
        src: '/images/hero_architectural_living.jpg',
        alt: 'Architectural ceiling cove and magnetic track lighting design',
      },
    ],
    seo: {
      seoTitle: 'Architectural Lighting & False Ceiling Design | Studio Nirmiti',
      metaDescription:
        'Bespoke false ceiling design and intelligent architectural lighting plans.',
    },
  },
  {
    title: 'Custom Furniture & Millwork',
    slug: 'custom-furniture',
    category: 'Interiors',
    summary:
      'Handcrafted solid wood dining tables, upholstered lounge chairs, bespoke credenzas, and integrated joinery.',
    body:
      'When off-the-shelf furniture fails to meet the exact dimensions or character of a space, our artisan woodworkers and upholsterers fabricate one-off signature pieces tailored to your exact lifestyle.',
    relatedServices: ['interior-design', 'wardrobes-storage'],
    relatedProjects: ['the-stone-timber-residence'],
    media: [
      {
        src: '/images/after_completed_living.jpg',
        alt: 'Handcrafted custom credenza and tailored furniture',
      },
    ],
    seo: {
      seoTitle: 'Custom Furniture & Artisan Joinery | Studio Nirmiti',
      metaDescription:
        'Bespoke furniture fabrication, architectural millwork, and custom upholstery.',
    },
  },
  {
    title: 'Turnkey Commercial Interiors',
    slug: 'commercial/office-interiors',
    category: 'Commercial',
    summary:
      'High-performance office environments, executive boardrooms, collaborative work cafes, and brand-aligned corporate headquarters.',
    body:
      'We create workspaces that empower talent, project institutional authority, and support acoustic privacy. Engineered for productivity, technological integration, and LEED/WELL sustainability benchmarks.',
    relatedServices: ['space-planning', 'execution-works'],
    relatedProjects: ['aura-corporate-suite'],
    media: [
      {
        src: '/images/project_commercial_office.jpg',
        alt: 'Modern executive corporate office design by Studio Nirmiti',
      },
    ],
    seo: {
      seoTitle: 'Corporate Office Interior Design & Execution | Studio Nirmiti',
      metaDescription:
        'Turnkey office interior design, agile workspace planning, and corporate fit-outs.',
    },
  },
  {
    title: 'Hospitality & Boutique Resorts',
    slug: 'hospitality/hotel-interiors',
    category: 'Hospitality',
    summary:
      'Memorable guest suites, experiential lobbies, destination restaurants, and wellness retreats designed for unforgettable guest experiences.',
    body:
      'Hospitality design demands emotional resonance and operational durability. We craft bespoke guest journeys with natural materials, ambient twilight illumination, and distinctive local vernacular touches.',
    relatedServices: ['architectural-design', 'interior-design'],
    relatedProjects: ['sereno-boutique-resort'],
    media: [
      {
        src: '/images/project_hospitality_resort.jpg',
        alt: 'Luxury boutique resort lounge and hospitality interior',
      },
    ],
    seo: {
      seoTitle: 'Hospitality & Boutique Hotel Interior Design | Studio Nirmiti',
      metaDescription:
        'Luxury hospitality interior architecture, resort planning, and boutique hotel design.',
    },
  },
];
