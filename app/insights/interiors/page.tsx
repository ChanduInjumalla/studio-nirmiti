import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Interior Design Insights',
  description: 'Articles and perspectives on interior design, materials and spatial planning.',
  alternates: {
    canonical: '/insights/interiors',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Interiors"
      title="Interior Design Insights"
      description="Articles and perspectives on interior design, materials and spatial planning."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: 'Interiors' }]}
    />
  );
}
