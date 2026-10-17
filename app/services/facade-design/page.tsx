import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Facade Design Services',
  description: 'Building facade design — elevation composition, material selection, weathering strategy and night-view lighting.',
  alternates: {
    canonical: '/services/facade-design',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Facade"
      title="Facade Design Services"
      description="Building facade design — elevation composition, material selection, weathering strategy and night-view lighting."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Facade Design' }]}
    />
  );
}
