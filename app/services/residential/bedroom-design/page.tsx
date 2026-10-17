import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Bedroom Interior Design',
  description: 'Bedroom interiors designed for rest, storage, lighting control and personal comfort.',
  alternates: {
    canonical: '/services/residential/bedroom-design',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Bedroom"
      title="Bedroom Design"
      description="Bedroom interiors designed for rest, storage, lighting control and personal comfort."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Residential' }, { label: 'Bedroom Design' }]}
    />
  );
}
