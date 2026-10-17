import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Website Terms',
  description: 'Terms governing the use of the Studio Nirmiti website.',
  alternates: {
    canonical: '/terms',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Legal"
      title="Terms of Use"
      description="Terms governing the use of the Studio Nirmiti website."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms' }]}
    />
  );
}
