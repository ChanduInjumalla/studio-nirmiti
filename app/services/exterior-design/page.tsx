import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Exterior & Facade Design Services',
  description: 'Facade language, materials, weathering strategy and exterior lighting — the public face of architecture.',
  alternates: {
    canonical: '/services/exterior-design',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Exteriors"
      title="Exterior & Facade Design Services"
      description="Facade language, materials, weathering strategy and exterior lighting — the public face of architecture."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Exterior Design' }]}
    />
  );
}
