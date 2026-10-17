import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: '3D Visualization Services',
  description: 'Photorealistic interior and exterior renders that communicate design intent before construction begins.',
  alternates: {
    canonical: '/services/3d-visualization',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="3D Visualization"
      title="3D Visualization Services"
      description="Photorealistic interior and exterior renders that communicate design intent before construction begins."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: '3D Visualization' }]}
    />
  );
}
