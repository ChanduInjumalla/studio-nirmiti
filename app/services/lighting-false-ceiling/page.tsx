import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Lighting & False Ceiling Design',
  description: 'Lighting design and false ceiling planning that define atmosphere, hierarchy and spatial character.',
  alternates: {
    canonical: '/services/lighting-false-ceiling',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Lighting"
      title="Lighting & False Ceiling Design"
      description="Lighting design and false ceiling planning that define atmosphere, hierarchy and spatial character."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Lighting & False Ceiling' }]}
    />
  );
}
