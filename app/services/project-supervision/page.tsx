import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Project Supervision',
  description: 'On-site coordination, quality oversight and progress management throughout the construction and fit-out process.',
  alternates: {
    canonical: '/services/project-supervision',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Supervision"
      title="Project Supervision Services"
      description="On-site coordination, quality oversight and progress management throughout the construction and fit-out process."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Project Supervision' }]}
    />
  );
}
