import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Studio Nirmiti handles data collected through this website.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="How Studio Nirmiti handles data collected through this website."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
    />
  );
}
