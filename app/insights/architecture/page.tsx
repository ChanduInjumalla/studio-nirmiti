import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Architecture Insights',
  description: 'Articles and perspectives on architectural design, planning and construction.',
  alternates: {
    canonical: '/insights/architecture',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Architecture"
      title="Architecture Insights"
      description="Articles and perspectives on architectural design, planning and construction."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: 'Architecture' }]}
    />
  );
}
