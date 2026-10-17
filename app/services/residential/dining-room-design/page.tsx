import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Dining Room Interior Design',
  description: 'Dining space design addressing table sizing, circulation, storage, lighting and material continuity.',
  alternates: {
    canonical: '/services/residential/dining-room-design',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Dining Room"
      title="Dining Room Design"
      description="Dining space design addressing table sizing, circulation, storage, lighting and material continuity."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Residential' }, { label: 'Dining Room Design' }]}
    />
  );
}
