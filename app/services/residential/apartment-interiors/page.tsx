import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Apartment Interior Design',
  description: 'Interior design for apartments — space planning, material selection and furniture within defined layouts and building constraints.',
  alternates: {
    canonical: '/services/residential/apartment-interiors',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Apartments"
      title="Apartment Interior Design"
      description="Interior design for apartments — space planning, material selection and furniture within defined layouts and building constraints."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Residential' }, { label: 'Apartment Interiors' }]}
    />
  );
}
