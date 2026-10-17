import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Custom Furniture Design',
  description: 'Bespoke furniture designed for specific spaces — built to precise dimensions, materials and functional requirements.',
  alternates: {
    canonical: '/services/custom-furniture',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Custom Furniture"
      title="Custom Furniture Design"
      description="Bespoke furniture designed for specific spaces — built to precise dimensions, materials and functional requirements."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Custom Furniture' }]}
    />
  );
}
