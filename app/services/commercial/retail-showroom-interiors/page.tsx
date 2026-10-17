import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Retail & Showroom Interiors',
  description: 'Retail and showroom interiors that support customer journey, product display, brand experience and commercial performance.',
  alternates: {
    canonical: '/services/commercial/retail-showroom-interiors',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Retail"
      title="Retail & Showroom Interior Design"
      description="Retail and showroom interiors that support customer journey, product display, brand experience and commercial performance."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Commercial' }, { label: 'Retail & Showroom' }]}
    />
  );
}
