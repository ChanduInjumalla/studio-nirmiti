import type { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import ProjectsPortfolioView from '@/components/projects/ProjectsPortfolioView';

export const metadata: Metadata = {
  title: 'Commercial & Corporate Architecture Projects | Studio Nirmiti',
  description: 'Corporate headquarters, boutique retail flagships, and artisanal commercial spaces by Studio Nirmiti.',
  alternates: {
    canonical: '/projects/commercial',
  },
};

export default function CommercialProjectsPage() {
  return (
    <ProjectsPortfolioView
      projects={projectsData}
      initialCategory="commercial"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Commercial' }]}
      pageTitle="Commercial & Corporate Architecture"
      pageEyebrow="High-Performance Workplaces"
      tagline="Executive boardrooms, agile corporate headquarters, and high-end retail flagships balancing acoustic privacy with authoritative brand expression."
    />
  );
}
