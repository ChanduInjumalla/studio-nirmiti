import type { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import ProjectsPortfolioView from '@/components/projects/ProjectsPortfolioView';

export const metadata: Metadata = {
  title: 'Hospitality & Luxury Resort Architecture | Studio Nirmiti',
  description: 'Destination wellness retreats, boutique resort suites, and fine-dining pavilions by Studio Nirmiti.',
  alternates: {
    canonical: '/projects/hospitality',
  },
};

export default function HospitalityProjectsPage() {
  return (
    <ProjectsPortfolioView
      projects={projectsData}
      initialCategory="hospitality"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Hospitality' }]}
      pageTitle="Hospitality & Luxury Resort Projects"
      pageEyebrow="Destination Architecture"
      tagline="Eco-sensitive wellness sanctuaries, hillside luxury suites, and experiential culinary venues rooted in local landscape and cultural context."
    />
  );
}
