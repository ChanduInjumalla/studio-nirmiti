import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Residential Projects',
  description: 'Apartments, villas and homes designed with care for how families live, move and grow.',
  alternates: {
    canonical: '/projects/residential',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Residential"
      title="Residential Projects"
      description="Apartments, villas and homes designed with care for how families live, move and grow."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Residential' }]}
    />
  );
}
