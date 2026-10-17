import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Hotel Interior Design',
  description: 'Hotel interiors that balance guest experience, operational efficiency and brand identity across room types and public areas.',
  alternates: {
    canonical: '/services/hospitality/hotel-interiors',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Hotels"
      title="Hotel Interior Design"
      description="Hotel interiors that balance guest experience, operational efficiency and brand identity across room types and public areas."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Hospitality' }, { label: 'Hotel Interiors' }]}
    />
  );
}
