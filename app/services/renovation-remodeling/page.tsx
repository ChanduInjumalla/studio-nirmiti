import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Renovation & Remodeling',
  description: 'Thoughtful renovation of existing spaces — updating layouts, finishes and systems while respecting structural reality.',
  alternates: {
    canonical: '/services/renovation-remodeling',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Renovation"
      title="Renovation & Remodeling"
      description="Thoughtful renovation of existing spaces — updating layouts, finishes and systems while respecting structural reality."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Renovation & Remodeling' }]}
    />
  );
}
