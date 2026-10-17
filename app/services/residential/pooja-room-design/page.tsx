import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Pooja Room Design',
  description: 'Pooja room design with attention to placement, mandir backdrop, storage, lighting and material detailing.',
  alternates: {
    canonical: '/services/residential/pooja-room-design',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Pooja Room"
      title="Pooja Room Design"
      description="Pooja room design with attention to placement, mandir backdrop, storage, lighting and material detailing."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Residential' }, { label: 'Pooja Room Design' }]}
    />
  );
}
