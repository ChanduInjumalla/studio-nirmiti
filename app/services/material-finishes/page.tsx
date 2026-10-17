import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Material & Finishes',
  description: 'Stone, wood, metal, paint, tile and fabric selection — materials chosen for durability, aesthetics and context.',
  alternates: {
    canonical: '/services/material-finishes',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Materials"
      title="Material & Finishes Selection"
      description="Stone, wood, metal, paint, tile and fabric selection — materials chosen for durability, aesthetics and context."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Material & Finishes' }]}
    />
  );
}
