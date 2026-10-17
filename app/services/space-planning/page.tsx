import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Space Planning Services',
  description: 'Circulation, zoning, furniture test-fit and spatial optimisation — planning that solves before it decorates.',
  alternates: {
    canonical: '/services/space-planning',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Planning"
      title="Space Planning Services"
      description="Circulation, zoning, furniture test-fit and spatial optimisation — planning that solves before it decorates."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Space Planning' }]}
    />
  );
}
