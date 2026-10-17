import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Office Interior Design',
  description: 'Office interiors designed for productivity, brand identity, collaboration and operational efficiency.',
  alternates: {
    canonical: '/services/commercial/office-interiors',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Offices"
      title="Office Interior Design"
      description="Office interiors designed for productivity, brand identity, collaboration and operational efficiency."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Commercial' }, { label: 'Office Interiors' }]}
    />
  );
}
