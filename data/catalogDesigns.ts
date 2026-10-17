export interface CatalogDesignItem {
  id: string;
  title: string;
  image: string;
  price: string;
  size: string;
  tag: string;
  finish: string;
  photosCount: number;
}

export interface TrendingDesignItem {
  id: string;
  title: string;
  image: string;
  price?: string;
  tag: string;
}

export interface CategoryCatalogData {
  slug: string;
  title: string;
  eyebrow: string;
  resultsCount: string;
  shortDesc: string;
  readMoreText: string[];
  filterTags: string[];
  trendingHeading: string;
  trendingSubheading: string;
  trendingItems: TrendingDesignItem[];
  designs: CatalogDesignItem[];
  promoBanner: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
  };
  promise: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
  consultationSection: {
    title: string;
    subtitle: string;
    lifestyleImage: string;
  };
}

export const categoryCatalogs: Record<string, CategoryCatalogData> = {
  'modular-kitchens': {
    slug: 'modular-kitchens',
    title: 'Modular Kitchen Designs',
    eyebrow: 'Precision Culinary Architecture',
    resultsCount: 'Showing 48 Curated Studio Designs',
    shortDesc:
      'What are Modular Kitchens? Studio Nirmiti Modular Kitchens are a seamless fusion of architectural ergonomic planning, moisture-sealed durability, and bespoke cabinetry, crafted to elevate modern Indian homes.',
    readMoreText: [
      'Whether you are designing a compact luxury apartment or an expansive independent villa, our modular kitchens are engineered for the rigorous demands of Indian cooking. We employ marine-grade BWP 710 boiling waterproof ply, anti-corrosive German soft-close hinges, quartz and Dekton seamless countertops, and concealed high-suction ventilation.',
      'From contemporary L-shaped and parallel galley layouts to monumental center islands with breakfast bars, every module is precision-fabricated to the millimeter, minimizing on-site dust and reducing installation handover to under 45 days.',
    ],
    filterTags: ['All', 'L-Shaped', 'U-Shaped', 'Parallel', 'Island', 'Straight', 'Acrylic & Glass', 'Veneer & Quartz'],
    trendingHeading: 'Top Trending Kitchen Designs',
    trendingSubheading: 'Design ideas chosen by Studio Nirmiti homeowners in October, 2026',
    trendingItems: [
      {
        id: 'trend-1',
        title: 'Classic L-Shaped Kitchen with Powder Blue & Fluted Glass',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
        tag: 'L-Shaped',
      },
      {
        id: 'trend-2',
        title: 'Modern L-Shaped Kitchen in Champagne Metallic & Quartz',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
        tag: 'L-Shaped',
      },
      {
        id: 'trend-3',
        title: 'Sculptural Island Kitchen with Calacatta Gold Marble Cascade',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        tag: 'Island',
      },
      {
        id: 'trend-4',
        title: 'Minimalist Smoked Oak Parallel Kitchen with Brass Hardware',
        image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
        tag: 'Parallel',
      },
    ],
    designs: [
      {
        id: 'k-1',
        title: 'Modern Blue U-Shaped Kitchen with Built-In Appliance Tower',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
        price: '₹5,26,000*',
        size: 'Size: 12x10 feet',
        tag: 'U-Shaped',
        finish: 'Anti-fingerprint Matte PU & Quartz',
        photosCount: 3,
      },
      {
        id: 'k-2',
        title: 'Modern Stone U-Shaped Kitchen with Under-Cabinet Strip Lighting',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
        price: '₹5,92,500*',
        size: 'Size: 10x10 feet',
        tag: 'U-Shaped',
        finish: 'Textured Stone Laminate & Caesarstone',
        photosCount: 4,
      },
      {
        id: 'k-3',
        title: 'Contemporary Cambric and Sage Green U-Shaped with Fluted Cabinets',
        image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80',
        price: '₹6,28,000*',
        size: 'Size: 12x10 feet',
        tag: 'U-Shaped',
        finish: 'Sage Green PU & Fluted Acrylic Glass',
        photosCount: 3,
      },
      {
        id: 'k-4',
        title: 'Traditional Acacia Parallel Kitchen with Louvered Cabinet Doors',
        image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80',
        price: '₹6,92,500*',
        size: 'Size: 10x8 feet',
        tag: 'Parallel',
        finish: 'Solid Acacia Hardwood & Black Granite',
        photosCount: 3,
      },
      {
        id: 'k-5',
        title: 'Contemporary Grey Parallel Kitchen with Hex Backsplash',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
        price: '₹4,63,000*',
        size: 'Size: 12x10 feet',
        tag: 'Parallel',
        finish: 'High-Gloss Acrylic & Quartz Countertop',
        photosCount: 2,
      },
      {
        id: 'k-6',
        title: 'Modern Grey Straight Kitchen with Fluted Wall Cabinets',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        price: '₹3,75,000*',
        size: 'Size: 14x7 feet',
        tag: 'Straight',
        finish: 'Cashmere Grey Acrylic & Warm Wood Shelf',
        photosCount: 3,
      },
      {
        id: 'k-7',
        title: 'Transitional Cream L-Shaped Kitchen with Backlit Glass Wall Cabinets',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        price: '₹4,33,500*',
        size: 'Size: 14x12 feet',
        tag: 'L-Shaped',
        finish: 'Matte Cream PU & Smoked Tint Glass',
        photosCount: 4,
      },
      {
        id: 'k-8',
        title: 'Contemporary Walnut L-Shaped Kitchen with Arched Glass Cabinets',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        price: '₹3,36,000*',
        size: 'Size: 10x8 feet',
        tag: 'L-Shaped',
        finish: 'American Walnut Veneer & Brass Handles',
        photosCount: 2,
      },
      {
        id: 'k-9',
        title: 'Monumental Monolith Island Kitchen with Integrated Breakfast Bar',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
        price: '₹8,45,000*',
        size: 'Size: 16x14 feet',
        tag: 'Island',
        finish: 'Dekton Laurent & Smoked Eucalyptus',
        photosCount: 5,
      },
    ],
    promoBanner: {
      badge: 'Limited Period Festive Offer',
      title: 'Kitchens starting from ₹2.5 Lakh*',
      subtitle: 'Premium modular kitchens for all budgets with flexible 0% EMIs from ₹3,300/month and 10-year hardware warranty.',
      ctaText: 'GET FREE KITCHEN QUOTE',
    },
    promise: {
      title: 'The Studio Nirmiti Promise',
      subtitle: 'Architectural precision, certified materials, and transparent pricing.',
      items: [
        {
          icon: '🛡️',
          title: '10-Year Warranty',
          desc: 'Comprehensive structural & hardware warranty backed by certified German fittings.',
        },
        {
          icon: '⏱️',
          title: '45-Day Handover',
          desc: 'Guaranteed milestone completion from factory fabrication to spotless handover.',
        },
        {
          icon: '🔍',
          title: '146 Quality Checks',
          desc: 'Rigorous multi-stage inspection covering moisture seal, load ratings, and alignment.',
        },
        {
          icon: '📐',
          title: 'Customisable Designs',
          desc: 'Tailor-made floor plans with 3D photorealistic visualization before production.',
        },
      ],
    },
    consultationSection: {
      title: 'Designs for Every Budget',
      subtitle: 'Get your dream kitchen today. Let our architectural experts guide your layout and material selection.',
      lifestyleImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    },
  },

  'wardrobes-storage': {
    slug: 'wardrobes-storage',
    title: 'Wardrobe & Walk-in Closet Designs',
    eyebrow: 'Bespoke Storage Architecture',
    resultsCount: 'Showing 36 Curated Storage Designs',
    shortDesc:
      'Discover floor-to-ceiling wardrobe solutions, walk-in dressing suites, and customized storage crafted with architectural precision and integrated ambient illumination.',
    readMoreText: [
      'Studio Nirmiti wardrobes are engineered to optimize vertical space while bringing boutique luxury into your private bedroom suites. From whisper-quiet floor-to-ceiling sliding systems to walk-in dressing sanctuaries with integrated island drawers, every detail is tailored around your wardrobe inventory.',
      'We utilize moisture-resistant calibrator plywood, premium synchronized veneers, fluted and tinted glass shutters, and motion-activated sensor LED profiles that illuminate every garment naturally.',
    ],
    filterTags: ['All', 'Walk-in Closet', 'Sliding Door', 'Hinged Shutters', 'Fluted Glass', 'Floor-to-Ceiling', 'Veneer Finish'],
    trendingHeading: 'Top Trending Wardrobe Designs',
    trendingSubheading: 'Curated storage suites chosen by Studio Nirmiti clients',
    trendingItems: [
      {
        id: 'trend-w1',
        title: 'Master Bedroom Walk-in Suite with Smoked Glass & Bronze Trims',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        tag: 'Walk-in Closet',
      },
      {
        id: 'trend-w2',
        title: 'Minimalist Floor-to-Ceiling Oak Wardrobe with Concealed Pulls',
        image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
        tag: 'Floor-to-Ceiling',
      },
      {
        id: 'trend-w3',
        title: 'Contemporary Fluted Glass Sliding Wardrobe with Ambient Coves',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80',
        tag: 'Sliding Door',
      },
    ],
    designs: [
      {
        id: 'w-1',
        title: 'Luxury Walk-in Dressing Suite with Center Jewellery Island',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        price: '₹4,85,000*',
        size: 'Size: 12x9 feet',
        tag: 'Walk-in Closet',
        finish: 'Smoked Tint Glass, Bronze Anodized Aluminum',
        photosCount: 4,
      },
      {
        id: 'w-2',
        title: 'Modern Minimalist 4-Door Hinged Wardrobe in White Ash',
        image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
        price: '₹2,65,000*',
        size: 'Size: 8x7 feet',
        tag: 'Hinged Shutters',
        finish: 'Natural White Ash Veneer & Brass Hardware',
        photosCount: 3,
      },
      {
        id: 'w-3',
        title: 'Fluted Glass 3-Track Sliding Wardrobe with Internal Illumination',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80',
        price: '₹3,45,000*',
        size: 'Size: 10x8 feet',
        tag: 'Sliding Door',
        finish: 'Muted Taupe PU & Ribbed Fluted Glass',
        photosCount: 3,
      },
      {
        id: 'w-4',
        title: 'Floor-to-Ceiling Master Wardrobe with Integrated Study Niche',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
        price: '₹3,95,000*',
        size: 'Size: 14x9 feet',
        tag: 'Floor-to-Ceiling',
        finish: 'Dual-Tone Smoked Oak & Matte Charcoal',
        photosCount: 3,
      },
      {
        id: 'w-5',
        title: 'Boutique Glass Wardrobe with Leather Pulls & Velvet Drawers',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        price: '₹4,20,000*',
        size: 'Size: 11x8 feet',
        tag: 'Fluted Glass',
        finish: 'Bronze Mirror Backing & Cognac Leather',
        photosCount: 4,
      },
      {
        id: 'w-6',
        title: 'Contemporary Soft-Close Wardrobe with Integrated Dressing Mirror',
        image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
        price: '₹2,95,000*',
        size: 'Size: 9x8 feet',
        tag: 'Hinged Shutters',
        finish: 'Ultra-Matte Greige PU & Full-Length Beveled Mirror',
        photosCount: 2,
      },
    ],
    promoBanner: {
      badge: 'Signature Dressing Collection',
      title: 'Bespoke Wardrobes starting from ₹1.8 Lakh*',
      subtitle: 'Engineered for seamless organization with German sliders and motion-sensor illumination.',
      ctaText: 'GET FREE WARDROBE ESTIMATE',
    },
    promise: {
      title: 'The Studio Nirmiti Standard',
      subtitle: 'Precision joinery, whisper-soft glides, and enduring materials.',
      items: [
        {
          icon: '🛡️',
          title: '10-Year Warranty',
          desc: 'Tested to over 100,000 soft-close cycle iterations with German runners.',
        },
        {
          icon: '⏱️',
          title: 'Direct Factory Joinery',
          desc: 'Zero on-site cutting dust; pre-assembled modular units delivered ready to slot.',
        },
        {
          icon: '🔍',
          title: 'Moisture Barrier Seal',
          desc: 'High-density MR/BWP cores resistant to termite and tropical Indian humidity.',
        },
        {
          icon: '📐',
          title: 'Customized Compartments',
          desc: 'Tailored watch trays, tie racks, saree hanging spans, and biometric lock boxes.',
        },
      ],
    },
    consultationSection: {
      title: 'Dressing Spaces for Every Budget',
      subtitle: 'Turn awkward bedroom corners into curated boutique dressing sanctuaries.',
      lifestyleImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    },
  },

  'interior-design': {
    slug: 'interior-design',
    title: 'Luxury Interior Design Services',
    eyebrow: 'Architectural Spatial Choreography',
    resultsCount: 'Showing 54 Curated Living Spaces',
    shortDesc:
      'Elevated residential and penthouse interior design crafted with spatial poise, artisan finishes, and seamless turnkey execution by Studio Nirmiti.',
    readMoreText: [
      'Interior architecture at Studio Nirmiti is the discipline of spatial harmony. We unite natural daylight, acoustic comfort, bespoke joinery, and tactile materiality into spaces that feel enduring and tranquil.',
      'From double-height living pavilions with bookmatched Italian marble claddings to intimate home lounges, master suites, and dining salons, our team coordinates concept visualization, custom furniture, false ceilings, and MEP execution under one roof.',
    ],
    filterTags: ['All', 'Living Rooms', 'Master Bedrooms', 'Dining Salons', 'Penthouses', 'Villas', 'Home Theatres'],
    trendingHeading: 'Top Trending Interior Concepts',
    trendingSubheading: 'Award-winning interior transformations by Studio Nirmiti',
    trendingItems: [
      {
        id: 'trend-i1',
        title: 'Monumental Double-Height Living Room with Travertine Hearth',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        tag: 'Living Rooms',
      },
      {
        id: 'trend-i2',
        title: 'Warm Minimalist Penthouse with Curved Bouclé Lounging',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        tag: 'Penthouses',
      },
      {
        id: 'trend-i3',
        title: 'Zen Sanctuary Master Bedroom with Smoked Oak Slats',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
        tag: 'Master Bedrooms',
      },
    ],
    designs: [
      {
        id: 'i-1',
        title: 'Monumental Double-Height Living Pavilion with Travertine Cladding',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        price: '₹14,50,000*',
        size: 'Area: 850 sq.ft',
        tag: 'Living Rooms',
        finish: 'Roman Travertine, Brushed Brass, Acoustic Paneling',
        photosCount: 6,
      },
      {
        id: 'i-2',
        title: 'Warm Minimalist Penthouse Living Lounge with Curved Seating',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        price: '₹9,80,000*',
        size: 'Area: 620 sq.ft',
        tag: 'Penthouses',
        finish: 'Micro-Cement Flooring, Custom Bouclé Seating',
        photosCount: 5,
      },
      {
        id: 'i-3',
        title: 'Contemporary Luxury Villa Living Room with Floor-to-Ceiling Glazing',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        price: '₹12,20,000*',
        size: 'Area: 740 sq.ft',
        tag: 'Villas',
        finish: 'Fluted Smoked Oak, Calacatta Marble Table',
        photosCount: 4,
      },
      {
        id: 'i-4',
        title: 'Master Bedroom Suite with Integrated Backlit Fluted Paneling',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
        price: '₹6,40,000*',
        size: 'Area: 420 sq.ft',
        tag: 'Master Bedrooms',
        finish: 'Linen Upholstery, Dimmable Warm LED Strips',
        photosCount: 4,
      },
      {
        id: 'i-5',
        title: 'Formal Dining Salon with Bespoke Marble Table and Pendant Cascade',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        price: '₹5,60,000*',
        size: 'Area: 380 sq.ft',
        tag: 'Dining Salons',
        finish: 'Nero Marquina Top, Hand-Blown Glass Pendants',
        photosCount: 3,
      },
      {
        id: 'i-6',
        title: 'Private Acoustic Home Theatre with Recliner Loungers',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        price: '₹11,00,000*',
        size: 'Area: 480 sq.ft',
        tag: 'Home Theatres',
        finish: 'Fabric Acoustic Diffusers, 4K Dolby Atmos Setup',
        photosCount: 4,
      },
    ],
    promoBanner: {
      badge: 'Full Home Turnkey Interiors',
      title: 'Complete Interiors from ₹15 Lakh*',
      subtitle: 'From conceptual floor plans and 3D simulation to handover with zero price escalation.',
      ctaText: 'BOOK DESIGN CONSULTATION',
    },
    promise: {
      title: 'The Studio Nirmiti Interior Standard',
      subtitle: 'Single-source responsibility from conceptual render to finished home.',
      items: [
        {
          icon: '🛡️',
          title: 'Zero Contractor Friction',
          desc: 'Architects, millworkers, and MEP engineers coordinate seamlessly under one contract.',
        },
        {
          icon: '⏱️',
          title: '3D Reality Guarantee',
          desc: 'What you approve in 3D architectural renders is exactly what is built on-site.',
        },
        {
          icon: '🔍',
          title: 'Premium Raw Materials',
          desc: 'Certified Greenlam/Merino laminates, imported veneers, and BLUM/Hettich hardware.',
        },
        {
          icon: '📐',
          title: 'Transparent Milestone Billing',
          desc: 'Staged stage-gate payments tied strictly to physical verification of progress.',
        },
      ],
    },
    consultationSection: {
      title: 'Elevate Your Home with Studio Nirmiti',
      subtitle: 'Meet our senior architects for a personalized walkthrough of material samples and spatial layouts.',
      lifestyleImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    },
  },

  'architectural-design': {
    slug: 'architectural-design',
    title: 'Architectural Design & Planning',
    eyebrow: 'Enduring Built Environments',
    resultsCount: 'Showing 28 Architectural Blueprints & Villas',
    shortDesc:
      'Contemporary luxury villas, sustainable masterplans, and commercial structures crafted with structural rigor, sun-path alignment, and distinctive sculptural presence.',
    readMoreText: [
      'Architecture at Studio Nirmiti is rooted in climate responsiveness and structural honesty. We evaluate local solar angles, prevailing wind directions, topography, and municipal bylaws to create timeless built environments.',
      'Our architectural scope covers zoning, massing studies, structural design coordination, 3D walkthroughs, facade engineering, and statutory approval submissions.',
    ],
    filterTags: ['All', 'Villas & Mansions', 'Cantilevered Homes', 'Courtyard Residences', 'Commercial Facades', 'Modern Farmhouses'],
    trendingHeading: 'Featured Architectural Typologies',
    trendingSubheading: 'Landmark residential and commercial structures',
    trendingItems: [
      {
        id: 'trend-a1',
        title: 'The Glass Pavilion Contemporary Villa with Cantilevered Concrete',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        tag: 'Villas & Mansions',
      },
      {
        id: 'trend-a2',
        title: 'The Brutalist Courtyard Residence with Deep Timber Louvers',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        tag: 'Cantilevered Homes',
      },
      {
        id: 'trend-a3',
        title: 'The Cascade Hillside Villa with Tiered Infinity Plunge Pools',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
        tag: 'Villas & Mansions',
      },
    ],
    designs: [
      {
        id: 'a-1',
        title: 'The Glass Pavilion Luxury Villa with Cantilevered Concrete Planes',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        price: 'Scope: 7,800 sq.ft*',
        size: 'Plot: 60x90 feet',
        tag: 'Villas & Mansions',
        finish: 'Board-Formed Concrete, Low-E Acoustic Glass, Teak Soffits',
        photosCount: 6,
      },
      {
        id: 'a-2',
        title: 'The Inward-Looking Courtyard Villa with Kinetic Louver Screens',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        price: 'Scope: 5,600 sq.ft*',
        size: 'Plot: 50x75 feet',
        tag: 'Courtyard Residences',
        finish: 'Rough Travertine Cladding, Anodized Bronze Louvers',
        photosCount: 5,
      },
      {
        id: 'a-3',
        title: 'Minimalist Contemporary Farmhouse with Double-Height Glass Facade',
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
        price: 'Scope: 9,200 sq.ft*',
        size: 'Plot: 1.2 Acres',
        tag: 'Modern Farmhouses',
        finish: 'Steel Portal Frame, Terrazzo Floors, Local Granites',
        photosCount: 5,
      },
      {
        id: 'a-4',
        title: 'Sculptural Urban Duplex Residence with Floating Box Architecture',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        price: 'Scope: 4,400 sq.ft*',
        size: 'Plot: 40x60 feet',
        tag: 'Cantilevered Homes',
        finish: 'Exposed Aggregate Plaster, Double Glazed Curtain Wall',
        photosCount: 4,
      },
    ],
    promoBanner: {
      badge: 'Turnkey Design & Build',
      title: 'Architectural Blueprint to Key Handover',
      subtitle: 'Complete architectural design, structural engineering, statutory sanction assistance, and turnkey execution.',
      ctaText: 'SCHEDULE SITE CONSULTATION',
    },
    promise: {
      title: 'The Studio Nirmiti Architectural Standard',
      subtitle: 'Engineering fidelity, sustainable climate planning, and turnkey execution.',
      items: [
        {
          icon: '🛡️',
          title: 'Seismic & Structural Integrity',
          desc: 'Peer-reviewed structural engineering ensuring safety and generational longevity.',
        },
        {
          icon: '⏱️',
          title: 'Sun-Path & Daylight Modeling',
          desc: 'Micro-climate modeling to reduce artificial lighting and air-conditioning costs by up to 35%.',
        },
        {
          icon: '🔍',
          title: 'Statutory Approval Support',
          desc: 'Complete liaison documentation for municipal sanction drawings and green norms.',
        },
        {
          icon: '📐',
          title: 'Turnkey Ground-to-Roof',
          desc: 'Seamless transition from architectural masterplan directly to on-site civil works.',
        },
      ],
    },
    consultationSection: {
      title: 'Build Your Legacy Home',
      subtitle: 'Book an architectural feasibility review with Kushal Kumar Pendekatla and our principal architects.',
      lifestyleImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    },
  },

  'turnkey-interiors': {
    slug: 'turnkey-interiors',
    title: 'Turnkey Interior Solutions',
    eyebrow: 'End-to-End Precision Execution',
    resultsCount: 'Showing 32 Turnkey Home Packages',
    shortDesc:
      'Zero contractor friction, fixed price contracts, and guaranteed 45-day turnkey delivery for 2BHK, 3BHK, 4BHK apartments, duplexes, and independent luxury villas.',
    readMoreText: [
      'Studio Nirmiti turnkey solutions remove the overwhelming stress of managing multiple uncoordinated contractors, carpenters, electricians, plumbers, and paint vendors. We deliver a single-point contract covering 3D design, civil alterations, electrical rewiring, bespoke modular millwork, false ceilings, lighting, and final deep-cleaning handover.',
      'Our stage-gate progress tracking allows you to inspect and approve each milestone digitally before proceeding to the next, guaranteeing zero budget overruns and unwavering quality standards.',
    ],
    filterTags: ['All', '3 BHK Packages', '4 BHK Luxury', 'Villas & Duplex', 'Penthouses', '2 BHK Compact'],
    trendingHeading: 'Top Trending Turnkey Home Packages',
    trendingSubheading: 'Full-home turnkey solutions chosen by discerning homeowners',
    trendingItems: [
      {
        id: 'trend-t1',
        title: 'Complete 3 BHK Modern Minimalist Turnkey Interior Package',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        tag: '3 BHK Packages',
      },
      {
        id: 'trend-t2',
        title: 'Luxury 4 BHK Penthouse Full Turnkey Transformation',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        tag: '4 BHK Luxury',
      },
      {
        id: 'trend-t3',
        title: 'Contemporary Villa Turnkey Execution with Bespoke Millwork',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        tag: 'Villas & Duplex',
      },
    ],
    designs: [
      {
        id: 't-1',
        title: 'Signature 3 BHK Turnkey Package (Kitchen + Wardrobes + Living + Ceilings)',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        price: '₹16,50,000*',
        size: 'Area: 1,850 sq.ft',
        tag: '3 BHK Packages',
        finish: 'BWP 710 Plywood, Matte Acrylic, Warm Coves',
        photosCount: 8,
      },
      {
        id: 't-2',
        title: 'Ultra-Luxury 4 BHK Turnkey Package with Imported Italian Marble',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        price: '₹28,00,000*',
        size: 'Area: 2,800 sq.ft',
        tag: '4 BHK Luxury',
        finish: 'Bookmatched Marble, Smoked Oak Veneer, BLUM Hardware',
        photosCount: 10,
      },
      {
        id: 't-3',
        title: 'Modern Minimalist 2 BHK Compact Turnkey Smart Home',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
        price: '₹9,80,000*',
        size: 'Area: 1,150 sq.ft',
        tag: '2 BHK Compact',
        finish: 'Cashmere Laminate, Quartz Counters, Concealed LEDs',
        photosCount: 6,
      },
      {
        id: 't-4',
        title: 'Duplex Penthouse Turnkey Transformation with Double Height Paneling',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        price: '₹34,50,000*',
        size: 'Area: 3,600 sq.ft',
        tag: 'Penthouses',
        finish: 'Fluted Walnut, Microcement, Magnetic Track Lighting',
        photosCount: 12,
      },
    ],
    promoBanner: {
      badge: 'Turnkey Move-in Guarantee',
      title: 'Full Home Turnkey from ₹9.8 Lakh*',
      subtitle: 'Complete home delivery with 45-day guaranteed move-in, zero cost overruns, and 10-year warranty.',
      ctaText: 'GET FULL HOME ESTIMATE',
    },
    promise: {
      title: 'The Studio Nirmiti Turnkey Promise',
      subtitle: 'Single-source accountability from groundbreaking to final handover.',
      items: [
        {
          icon: '🛡️',
          title: 'Fixed Price Guarantee',
          desc: 'Zero surprise charges or escalation once the detailed bill of quantities is signed.',
        },
        {
          icon: '⏱️',
          title: '45-Day Handover',
          desc: 'Strict milestone delivery with financial penalty clause for any unapproved delay.',
        },
        {
          icon: '🔍',
          title: '146 Quality Checks',
          desc: 'Multi-layer site inspections logged and shared with you on our mobile updates channel.',
        },
        {
          icon: '📐',
          title: 'Single Point of Contact',
          desc: 'Dedicated senior project manager handling all vendors, materials, and municipal coordination.',
        },
      ],
    },
    consultationSection: {
      title: 'Turnkey Homes for Every Budget',
      subtitle: 'Experience stress-free turnkey execution. Book a design consultation with our interior directors today.',
      lifestyleImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    },
  },
};

export function getCatalogData(slug?: string, pageTitle?: string, pageEyebrow?: string): CategoryCatalogData {
  const cleanSlug = (slug || '').replace(/^\/+|\/+$/g, '');

  if (cleanSlug && categoryCatalogs[cleanSlug]) {
    return categoryCatalogs[cleanSlug];
  }

  // Derive title & eyebrow
  const title = pageTitle || 'Architectural Design Showcase';
  const eyebrow = pageEyebrow || 'Studio Nirmiti Portfolio';

  // Check categories by keyword
  const s = (cleanSlug + ' ' + title).toLowerCase();

  if (s.includes('bedroom')) {
    return {
      slug: cleanSlug || 'bedroom-design',
      title: pageTitle || 'Luxury Bedroom Designs',
      eyebrow: 'Sanctuary Architecture',
      resultsCount: 'Showing 28 Curated Bedroom Suites',
      shortDesc: 'Master bedroom suites, guest sanctuaries, and children’s bedrooms designed with acoustic peace, ambient coves, and bespoke integrated storage.',
      readMoreText: [
        'A bedroom is your private sanctuary. We balance light orientation, acoustic isolation, concealed wardrobe systems, and tactile materiality to ensure restful sleep and effortless morning routines.',
        'From upholstered fluted headboard feature walls to integrated vanity dressers and reading niches, every dimension is sculpted to your personal lifestyle.',
      ],
      filterTags: ['All', 'Master Suites', 'Minimalist', 'Fluted Paneling', 'Walk-in Closets', 'Study Corners'],
      trendingHeading: 'Top Trending Bedroom Designs',
      trendingSubheading: 'Design ideas chosen by Studio Nirmiti homeowners in October, 2026',
      trendingItems: [
        { id: 'tb-1', title: 'Master Suite with Fluted Travertine Paneling & Warm Coves', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80', tag: 'Master Suites' },
        { id: 'tb-2', title: 'Modern Minimalist Japanese Oak Bedroom with Platform Bed', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80', tag: 'Minimalist' },
        { id: 'tb-3', title: 'Contemporary Suite with Smoked Bronze Glass Wardrobe', image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80', tag: 'Walk-in Closets' },
      ],
      designs: [
        { id: 'b-1', title: 'Contemporary Master Suite with Fluted Fabric Acoustic Wall', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80', price: '₹4,80,000*', size: 'Size: 16x14 feet', tag: 'Master Suites', finish: 'Linen Paneling, Warm Dimmable 2700K LEDs', photosCount: 4 },
        { id: 'b-2', title: 'Warm Oak Bedroom with Integrated Floating Study Table', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80', price: '₹3,90,000*', size: 'Size: 14x12 feet', tag: 'Study Corners', finish: 'White Oak Veneer & Cashmere PU', photosCount: 3 },
        { id: 'b-3', title: 'Boutique Suite with Transparent Walk-In Dressing Area', image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1200&q=80', price: '₹5,60,000*', size: 'Size: 18x15 feet', tag: 'Walk-in Closets', finish: 'Smoked Tint Glass, Bronze Trims', photosCount: 5 },
        { id: 'b-4', title: 'Minimalist Japandi Bedroom with Curved Bedhead', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80', price: '₹3,40,000*', size: 'Size: 13x11 feet', tag: 'Minimalist', finish: 'Bouclé Fabric, Textured Limewash', photosCount: 3 },
      ],
      promoBanner: { badge: 'Bedroom Package Offer', title: 'Master Bedrooms from ₹3.4 Lakh*', subtitle: 'Includes custom bed, acoustic wall paneling, wardrobe, and mood lighting.', ctaText: 'GET BEDROOM ESTIMATE' },
      promise: categoryCatalogs['modular-kitchens'].promise,
      consultationSection: categoryCatalogs['modular-kitchens'].consultationSection,
    };
  }

  if (s.includes('pooja')) {
    return {
      slug: cleanSlug || 'pooja-room-design',
      title: pageTitle || 'Sacred Pooja Room Designs',
      eyebrow: 'Divine Architecture',
      resultsCount: 'Showing 20 Curated Pooja Room Mandirs',
      shortDesc: 'Vastu-aligned contemporary and traditional home mandirs with CNC jaali screens, carved marble shrines, brass bells, and ambient backlit illumination.',
      readMoreText: [
        'A sacred pooja room serves as the spiritual center of the home. We strictly follow North-East / Ishanya Vastu principles while integrating modern architectural serenity.',
        'Our designs feature flawless Makrana and Thassos marble shrines, intricately water-jet cut teak jaali partitions, concealed drawer storage for prayer accessories, and hidden amber LED backlighting.',
      ],
      filterTags: ['All', 'Marble Mandirs', 'Wooden Jaali', 'CNC Backlit', 'Floating Shrines', 'Compact Alcoves'],
      trendingHeading: 'Top Trending Mandir Designs',
      trendingSubheading: 'Sacred spaces designed with reverence and modern grace',
      trendingItems: [
        { id: 'tp-1', title: 'White Thassos Marble Mandir with Backlit Om & Brass Bells', image: 'https://images.unsplash.com/photo-1545042746-ec9e5a5968d3?auto=format&fit=crop&w=1200&q=80', tag: 'Marble Mandirs' },
        { id: 'tp-2', title: 'Teak Wood Jaali Mandir with Concealed Storage Drawers', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80', tag: 'Wooden Jaali' },
      ],
      designs: [
        { id: 'p-1', title: 'Pure White Carved Marble Mandir with Ambient Backlit Onyx', image: 'https://images.unsplash.com/photo-1545042746-ec9e5a5968d3?auto=format&fit=crop&w=1200&q=80', price: '₹2,80,000*', size: 'Size: 6x5 feet', tag: 'Marble Mandirs', finish: 'White Corian & Translucent Onyx', photosCount: 4 },
        { id: 'p-2', title: 'Contemporary Teak Wood Jaali Temple with Hanging Brass Bells', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80', price: '₹1,95,000*', size: 'Size: 5x4 feet', tag: 'Wooden Jaali', finish: 'Solid Burmese Teak & Brushed Brass', photosCount: 3 },
      ],
      promoBanner: { badge: 'Vastu Consultation Included', title: 'Bespoke Mandirs from ₹1.5 Lakh*', subtitle: 'Custom fabricated to exact dimensions with Vastu-compliant orientation and sacred geometry.', ctaText: 'REQUEST MANDIR ESTIMATE' },
      promise: categoryCatalogs['modular-kitchens'].promise,
      consultationSection: categoryCatalogs['modular-kitchens'].consultationSection,
    };
  }

  if (s.includes('office') || s.includes('commercial')) {
    return {
      slug: cleanSlug || 'office-interiors',
      title: pageTitle || 'Commercial & Office Interiors',
      eyebrow: 'Workplace Architecture',
      resultsCount: 'Showing 24 Executive Commercial Spaces',
      shortDesc: 'Ergonomic high-performance commercial headquarters, boardrooms, client lounges, and boutique retail showrooms crafted for productivity and brand prestige.',
      readMoreText: [
        'Commercial architecture at Studio Nirmiti bridges ergonomic efficiency with brand expression. We engineer acoustic-sealed conference rooms, collaborative hot-desking pods, biophilic green zones, and executive lounges.',
        'With commercial-grade HVAC coordination, fire-safety compliance, high-traffic flooring, and modular cable-managed furniture, our turnkey commercial builds handover ready for operations.',
      ],
      filterTags: ['All', 'Corporate Offices', 'Boardrooms', 'Showrooms', 'Reception Lounges', 'Cafeterias'],
      trendingHeading: 'Top Trending Commercial Spaces',
      trendingSubheading: 'High-performance workspaces designed by Studio Nirmiti',
      trendingItems: [
        { id: 'to-1', title: 'Executive Boardroom with Acoustic Wood Slats & Video Wall', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', tag: 'Boardrooms' },
        { id: 'to-2', title: 'Biophilic Tech Headquarters with Modular Agile Desks', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80', tag: 'Corporate Offices' },
      ],
      designs: [
        { id: 'o-1', title: 'Executive Boardroom Suite with Smart Dimmable Switchable Glass', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', price: '₹12,50,000*', size: 'Area: 650 sq.ft', tag: 'Boardrooms', finish: 'Acoustic Paneling, Motorized Shades', photosCount: 5 },
        { id: 'o-2', title: 'Corporate Headquarters Reception Lounge with Stone Monolith', image: '/images/project_commercial_office.jpg', price: '₹8,90,000*', size: 'Area: 500 sq.ft', tag: 'Reception Lounges', finish: 'Bookmatched Granite, Anodized Bronze', photosCount: 4 },
        { id: 'o-3', title: 'Modern Agile Open Workstation Hall with Acoustic Baffles', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80', price: '₹22,00,000*', size: 'Area: 2,400 sq.ft', tag: 'Corporate Offices', finish: 'Steel Portal Frame, Oak Benching', photosCount: 6 },
      ],
      promoBanner: { badge: 'Commercial Fast-Track Delivery', title: 'Commercial Fit-Outs from ₹1,200/sq.ft*', subtitle: 'Complete MEP, civil, furniture, and IT infrastructure delivery within strict tenant lease deadlines.', ctaText: 'REQUEST COMMERCIAL PROPOSAL' },
      promise: categoryCatalogs['modular-kitchens'].promise,
      consultationSection: categoryCatalogs['modular-kitchens'].consultationSection,
    };
  }

  // Fallback default rich catalog
  return {
    slug: cleanSlug,
    title,
    eyebrow,
    resultsCount: `Showing 24 Curated ${title} Options`,
    shortDesc: `Discover architectural precision, bespoke materials, and turnkey execution tailored specifically for ${title.toLowerCase()} by Studio Nirmiti.`,
    readMoreText: [
      `At Studio Nirmiti, our approach to ${title.toLowerCase()} combines spatial proportion, material authenticity, and seamless craftsmanship. We supervise every detail from initial concept and 3D simulation to physical on-site turnkey handover.`,
      `Whether for residential or commercial settings, our dedicated directors ensure fixed-price transparency, verified material standards, and zero schedule overrun.`,
    ],
    filterTags: ['All', 'Modern Luxury', 'Minimalist', 'Turnkey Execution', 'Custom Finishes'],
    trendingHeading: `Trending ${title} Showcase`,
    trendingSubheading: `Award-winning concepts crafted by Studio Nirmiti architects`,
    trendingItems: [
      { id: 'def-t1', title: `Contemporary ${title} with Monumental Volumes`, image: '/images/hero_architectural_living.jpg', tag: 'Modern Luxury' },
      { id: 'def-t2', title: `Refined Minimalist ${title} with Bespoke Detailing`, image: '/images/after_completed_living.jpg', tag: 'Minimalist' },
      { id: 'def-t3', title: `Turnkey ${title} Handover with Zero Snags`, image: '/images/project_residential_villa.jpg', tag: 'Turnkey Execution' },
    ],
    designs: [
      { id: 'd-1', title: `Signature ${title} Execution with Premium Materials`, image: '/images/hero_architectural_living.jpg', price: 'Custom Estimate*', size: 'Scope on Request', tag: 'Modern Luxury', finish: 'Architectural Grade Finishes', photosCount: 4 },
      { id: 'd-2', title: `Tailored ${title} with German Hardware & Acoustic Balance`, image: '/images/project_modular_kitchen.jpg', price: 'Custom Estimate*', size: 'Scope on Request', tag: 'Custom Finishes', finish: 'Moisture-Resistant Plywood & Quartz', photosCount: 3 },
      { id: 'd-3', title: `Enduring ${title} with Integrated Ambient Illumination`, image: '/images/after_completed_living.jpg', price: 'Custom Estimate*', size: 'Scope on Request', tag: 'Minimalist', finish: 'Smoked Oak & Travertine Stone', photosCount: 5 },
      { id: 'd-4', title: `Turnkey ${title} Master Architecture Transformation`, image: '/images/project_residential_villa.jpg', price: 'Custom Estimate*', size: 'Scope on Request', tag: 'Turnkey Execution', finish: 'Exposed Concrete & Glass Facade', photosCount: 6 },
    ],
    promoBanner: { badge: 'Signature Studio Offer', title: `${title} Starting Consultation`, subtitle: 'Book a one-on-one session with our principal architects to review floor plans and material samples.', ctaText: 'BOOK FREE CONSULTATION' },
    promise: categoryCatalogs['modular-kitchens'].promise,
    consultationSection: categoryCatalogs['modular-kitchens'].consultationSection,
  };
}


