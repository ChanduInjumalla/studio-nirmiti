import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Home Office & Study Design',
  description: 'Study and home office design with ergonomic layout, storage, lighting and acoustic considerations.',
  alternates: {
    canonical: '/services/residential/home-office-study',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Home Office"
      title="Home Office & Study Design"
      description="Study and home office design with ergonomic layout, storage, lighting and acoustic considerations."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Residential' }, { label: 'Home Office & Study' }]}
    />
  );
}
