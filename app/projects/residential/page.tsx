import type { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import ProjectsPortfolioView from '@/components/projects/ProjectsPortfolioView';

export const metadata: Metadata = {
  title: 'Residential Architecture & Villa Projects | Studio Nirmiti',
  description: 'Private contemporary villas, sky penthouses, and bespoke residences designed and built across India.',
  alternates: {
    canonical: '/projects/residential',
  },
};

export default function ResidentialProjectsPage() {
  return (
    <ProjectsPortfolioView
      projects={projectsData}
      initialCategory="residential"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Residential' }]}
      pageTitle="Residential Architecture & Villa Projects"
      pageEyebrow="Private Sanctuaries"
      tagline="Independent luxury villas, sky penthouses, and private estates tailored around light orientation, generous proportions, and timeless materiality."
    />
  );
}
