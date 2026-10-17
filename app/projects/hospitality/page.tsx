import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Hospitality Design Projects',
  description: 'Hotels, resorts and guest experiences where architecture and interiors serve the journey of every visitor.',
  alternates: {
    canonical: '/projects/hospitality',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Hospitality"
      title="Hospitality Projects"
      description="Hotels, resorts and guest experiences where architecture and interiors serve the journey of every visitor."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Hospitality' }]}
    />
  );
}
