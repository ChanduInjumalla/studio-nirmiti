import type { MetadataRoute } from 'next';

const BASE_URL = 'https://studionirmiti.com';

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/projects',
  '/projects/residential',
  '/projects/commercial',
  '/projects/hospitality',
  '/services/architectural-design',
  '/services/interior-design',
  '/services/exterior-design',
  '/services/execution-works',
  '/services/space-planning',
  '/services/modular-kitchens',
  '/services/furniture-selection',
  '/services/custom-furniture',
  '/services/3d-visualization',
  '/services/3d-walkthroughs',
  '/services/project-supervision',
  '/services/turnkey-interiors',
  '/services/renovation-remodeling',
  '/services/lighting-false-ceiling',
  '/services/material-finishes',
  '/services/wardrobes-storage',
  '/services/residential/apartment-interiors',
  '/services/residential/villa-interiors',
  '/services/residential/living-room-design',
  '/services/residential/bedroom-design',
  '/services/residential/dining-room-design',
  '/services/residential/home-office-study',
  '/services/residential/pooja-room-design',
  '/services/commercial/office-interiors',
  '/services/commercial/retail-showroom-interiors',
  '/services/commercial/restaurant-cafe-interiors',
  '/services/hospitality/hotel-interiors',
  '/services/hospitality/resort-interiors',
  '/services/facade-design',
  '/process',
  '/why-studio-nirmiti',
  '/faq',
  '/insights',
  '/insights/architecture',
  '/insights/interiors',
  '/insights/3d-visualization',
  '/book-consultation',
  '/privacy-policy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1.0 : route.startsWith('/services/') ? 0.8 : 0.7,
  }));
}
