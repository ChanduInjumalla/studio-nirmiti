import type { Article } from '@/types';

export const insightsData: Article[] = [
  {
    title: 'The Art of Natural Light in Modern Residential Planning',
    slug: 'natural-light-residential-planning',
    category: 'Architecture',
    excerpt:
      'How strategic volumetric openings, clerestories, and lightwells transform living psychology without thermal penalty.',
    publishedAt: '2026-09-15',
    author: 'Kushal Kumar Pendekatla',
    cover: {
      src: '/images/hero_architectural_living.jpg',
      alt: 'Natural sunlight washing across a modern stone wall',
    },
    seo: {
      seoTitle: 'The Art of Natural Light in Modern Residential Planning | Studio Nirmiti',
      metaDescription:
        'Architectural strategies for daylighting, solar orientation, and glare control in luxury residences.',
    },
  },
  {
    title: 'Material Continuity: Connecting Architecture and Interior Craft',
    slug: 'material-continuity-architecture-interiors',
    category: 'Interiors',
    excerpt:
      'Why carrying exterior stone, concrete, and timber profiles into interior volumes creates architectural calmness.',
    publishedAt: '2026-08-28',
    author: 'Studio Nirmiti Design Team',
    cover: {
      src: '/images/project_residential_villa.jpg',
      alt: 'Stone and timber material transitions in contemporary architecture',
    },
    seo: {
      seoTitle: 'Material Continuity in Architecture & Interior Design | Studio Nirmiti',
      metaDescription:
        'Exploring honest material expression and transitions between building facade and interior rooms.',
    },
  },
  {
    title: 'Why 3D Pre-Visualization Saves 30% in Execution Errors',
    slug: 'why-3d-pre-visualization-saves-execution-errors',
    category: '3D Visualization',
    excerpt:
      'Resolving structural tolerances, lighting shadows, and material junctions in virtual space before pouring concrete.',
    publishedAt: '2026-07-10',
    author: 'Studio Nirmiti CGI Studio',
    cover: {
      src: '/images/before_concept_wireframe.jpg',
      alt: '3D digital twin architectural model simulation',
    },
    seo: {
      seoTitle: 'Why 3D Architectural Visualization Saves 30% in Construction Errors | Studio Nirmiti',
      metaDescription:
        'How photorealistic 3D visualization and virtual construction models mitigate costly on-site change orders.',
    },
  },
];
