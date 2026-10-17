import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: '3D Visualization Insights',
  description: 'Articles about 3D rendering, walkthroughs and how visualization supports the design process.',
  alternates: {
    canonical: '/insights/3d-visualization',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="3D Visualization"
      title="3D Visualization Insights"
      description="Articles about 3D rendering, walkthroughs and how visualization supports the design process."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: '3D Visualization' }]}
    />
  );
}
