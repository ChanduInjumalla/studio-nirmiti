import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Interior & Architectural Execution Works',
  description: 'Design-to-site implementation including civil, carpentry, electrical coordination, finishes and handover.',
  alternates: {
    canonical: '/services/execution-works',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Execution"
      title="Interior & Architectural Execution Works"
      description="Design-to-site implementation including civil, carpentry, electrical coordination, finishes and handover."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Execution Works' }]}
    />
  );
}
