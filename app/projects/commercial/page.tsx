import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: 'Commercial Interior & Architecture Design',
  description: 'Offices, retail spaces, restaurants and business environments planned for brand, function and durability.',
  alternates: {
    canonical: '/projects/commercial',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Commercial"
      title="Commercial Projects"
      description="Offices, retail spaces, restaurants and business environments planned for brand, function and durability."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: 'Commercial' }]}
    />
  );
}
