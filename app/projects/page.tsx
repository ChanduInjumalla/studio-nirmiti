import type { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import ProjectsPortfolioView from '@/components/projects/ProjectsPortfolioView';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Studio Nirmiti',
  description:
    'Explore our curated portfolio of luxury residential villas, penthouses, commercial headquarters, and hospitality retreats across India.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <ProjectsPortfolioView
      projects={projectsData}
      initialCategory="all"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
      pageTitle="Curated Architectural Portfolio"
      pageEyebrow="Built Work & Case Studies"
      tagline="A selective collection of bespoke residences, high-performance corporate environments, and immersive hospitality destinations executed with architectural precision."
    />
  );
}
