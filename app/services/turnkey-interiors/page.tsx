import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Turnkey Interior Solutions',
  description: 'End-to-end interior delivery from design concept through procurement, execution and final handover.',
  alternates: {
    canonical: '/services/turnkey-interiors',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Turnkey"
      title="Turnkey Interior Solutions"
      description="End-to-end interior delivery from design concept through procurement, execution and final handover."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Turnkey Interiors' }]}
    />
  );
}
