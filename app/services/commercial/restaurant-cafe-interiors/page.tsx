import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Restaurant & Cafe Interiors',
  description: 'Restaurant and cafe interiors designed for atmosphere, seating capacity, kitchen flow and guest experience.',
  alternates: {
    canonical: '/services/commercial/restaurant-cafe-interiors',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="F&B"
      title="Restaurant & Cafe Interior Design"
      description="Restaurant and cafe interiors designed for atmosphere, seating capacity, kitchen flow and guest experience."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Commercial' }, { label: 'Restaurant & Cafe' }]}
    />
  );
}
