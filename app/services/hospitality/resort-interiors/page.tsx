import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Resort Interior Design',
  description: 'Resort interiors designed for leisure, landscape integration and destination identity.',
  alternates: {
    canonical: '/services/hospitality/resort-interiors',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Resorts"
      title="Resort Interior Design"
      description="Resort interiors designed for leisure, landscape integration and destination identity."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Hospitality' }, { label: 'Resort Interiors' }]}
    />
  );
}
