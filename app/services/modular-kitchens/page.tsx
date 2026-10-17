import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Modular Kitchen Design',
  description: 'Modular kitchen design with layout planning, storage optimisation, material selection and factory coordination.',
  alternates: {
    canonical: '/services/modular-kitchens',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Kitchens"
      title="Modular Kitchen Design"
      description="Modular kitchen design with layout planning, storage optimisation, material selection and factory coordination."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: 'Modular Kitchens' }]}
    />
  );
}
