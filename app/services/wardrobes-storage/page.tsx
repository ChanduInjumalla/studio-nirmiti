import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Wardrobes & Storage Design',
  description: 'Wardrobe systems and storage design optimised for capacity, access and spatial efficiency.',
  alternates: {
    canonical: '/services/wardrobes-storage',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Storage"
      title="Wardrobes & Storage Solutions"
      description="Wardrobe systems and storage design optimised for capacity, access and spatial efficiency."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Wardrobes & Storage' }]}
    />
  );
}
