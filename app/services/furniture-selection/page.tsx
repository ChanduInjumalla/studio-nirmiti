import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Furniture Selection',
  description: 'Curated furniture selection aligned with the design intent, budget and spatial requirements of each project.',
  alternates: {
    canonical: '/services/furniture-selection',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Furniture"
      title="Furniture Selection & Procurement"
      description="Curated furniture selection aligned with the design intent, budget and spatial requirements of each project."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Furniture Selection' }]}
    />
  );
}
