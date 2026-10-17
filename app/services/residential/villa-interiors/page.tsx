import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Villa Interior Design',
  description: 'Villa and independent house interiors — larger spatial opportunities, custom millwork and integrated architecture.',
  alternates: {
    canonical: '/services/residential/villa-interiors',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Villas"
      title="Villa Interior Design"
      description="Villa and independent house interiors — larger spatial opportunities, custom millwork and integrated architecture."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Residential' }, { label: 'Villa Interiors' }]}
    />
  );
}
