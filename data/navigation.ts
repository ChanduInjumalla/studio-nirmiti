import type { GlobalSettings, NavigationItem } from '@/types';

export const siteNavigation: NavigationItem[] = [
  {
    label: 'Services',
    href: '/services/architectural-design',
    children: [
      {
        label: 'Design Services',
        href: '#',
        children: [
          { label: 'Architectural Design', href: '/services/architectural-design' },
          { label: 'Interior Design', href: '/services/interior-design' },
          { label: 'Exterior & Facade Design', href: '/services/exterior-design' },
          { label: 'Space Planning', href: '/services/space-planning' },
          { label: '3D Visualization', href: '/services/3d-visualization' },
          { label: '3D Walkthroughs', href: '/services/3d-walkthroughs' },
        ],
      },
      {
        label: 'Build & Execute',
        href: '#',
        children: [
          { label: 'Execution Works', href: '/services/execution-works' },
          { label: 'Turnkey Interiors', href: '/services/turnkey-interiors' },
          { label: 'Project Supervision', href: '/services/project-supervision' },
          { label: 'Renovation & Remodeling', href: '/services/renovation-remodeling' },
        ],
      },
      {
        label: 'Specialised',
        href: '#',
        children: [
          { label: 'Modular Kitchens', href: '/services/modular-kitchens' },
          { label: 'Furniture Selection', href: '/services/furniture-selection' },
          { label: 'Custom Furniture', href: '/services/custom-furniture' },
          { label: 'Wardrobes & Storage', href: '/services/wardrobes-storage' },
          { label: 'Lighting & False Ceiling', href: '/services/lighting-false-ceiling' },
          { label: 'Material & Finishes', href: '/services/material-finishes' },
        ],
      },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'All Projects', href: '/projects' },
      { label: 'Residential', href: '/projects/residential' },
      { label: 'Commercial', href: '/projects/commercial' },
      { label: 'Hospitality', href: '/projects/hospitality' },
    ],
  },
  { label: 'About', href: '/about' },
  {
    label: 'Insights',
    href: '/insights',
    children: [
      { label: 'All Insights', href: '/insights' },
      { label: 'Architecture', href: '/insights/architecture' },
      { label: 'Interiors', href: '/insights/interiors' },
      { label: '3D Visualization', href: '/insights/3d-visualization' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation: NavigationItem[] = [
  {
    label: 'Services',
    href: '/services/architectural-design',
    children: [
      { label: 'Architectural Design', href: '/services/architectural-design' },
      { label: 'Interior Design', href: '/services/interior-design' },
      { label: 'Exterior Design', href: '/services/exterior-design' },
      { label: 'Execution Works', href: '/services/execution-works' },
      { label: 'Modular Kitchens', href: '/services/modular-kitchens' },
      { label: '3D Visualization', href: '/services/3d-visualization' },
      { label: 'Space Planning', href: '/services/space-planning' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'Residential', href: '/projects/residential' },
      { label: 'Commercial', href: '/projects/commercial' },
      { label: 'Hospitality', href: '/projects/hospitality' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    children: [
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/process' },
      { label: 'Why Studio Nirmiti', href: '/why-studio-nirmiti' },
      { label: 'Insights', href: '/insights' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
      { label: 'Admin Portal', href: '/admin' },
    ],
  },
  {
    label: 'Legal',
    href: '/privacy-policy',
    children: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

export const globalSettings: GlobalSettings = {
  businessName: 'Studio Nirmiti',
  phone: '9573023509',
  navigation: siteNavigation,
  footerNavigation: footerNavigation,
  defaultSeo: {
    seoTitle: 'Studio Nirmiti | Architecture & Interior Design',
    metaDescription:
      'Studio Nirmiti is an architecture and interior design studio offering architectural design, interiors, execution, 3D visualization and turnkey solutions for residential, commercial and hospitality projects.',
    ogTitle: 'Studio Nirmiti — Architecture & Interior Design',
    ogDescription:
      'Architecture, interior design, 3D visualization and turnkey execution for residential, commercial and hospitality projects.',
    indexable: true,
  },
};
