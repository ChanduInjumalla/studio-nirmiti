import type { GlobalSettings } from '@/types';
import { siteNavigation, footerNavigation } from './navigation';

export const globalSettings: GlobalSettings = {
  businessName: 'Studio Nirmiti',
  phone: '+91 9573023509',
  email: 'contact@studionirmiti.com',
  socialUrls: {
    instagram: 'https://instagram.com/studionirmiti',
    facebook: 'https://facebook.com/studionirmiti',
    linkedin: 'https://linkedin.com/company/studionirmiti',
  },
  address: 'Studio Nirmiti, Hyderabad & Bengaluru, India',
  serviceArea: 'Hyderabad, Bengaluru, and Pan-India for Select Turnkey Projects',
  navigation: siteNavigation,
  footerNavigation: footerNavigation,
  defaultSeo: {
    seoTitle: 'Studio Nirmiti | Architecture, Interiors & 3D Design Studio',
    metaDescription:
      'Studio Nirmiti designs and executes luxury residential, commercial, and hospitality spaces with architectural clarity, interior craft, and turnkey delivery.',
    ogTitle: 'Studio Nirmiti — Architecture & Interior Design Studio',
    ogDescription:
      'Designing spaces with clarity, purpose and detail. Architecture, interior design, 3D visualization and turnkey execution.',
    ogImage: '/images/hero_architectural_living.jpg',
    indexable: true,
  },
};
