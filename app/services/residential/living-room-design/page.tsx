import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Living Room Interior Design',
  description: 'Living room design focused on layout, seating, lighting, entertainment and material continuity.',
  alternates: {
    canonical: '/services/residential/living-room-design',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Living Room"
      title="Living Room Design"
      description="Living room design focused on layout, seating, lighting, entertainment and material continuity."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Residential' }, { label: 'Living Room Design' }]}
    />
  );
}
