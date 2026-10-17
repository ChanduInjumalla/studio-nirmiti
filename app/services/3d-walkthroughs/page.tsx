import type { Metadata } from 'next';
import InnerPageShell from '@/components/layout/InnerPageShell';

export const metadata: Metadata = {
  title: '3D Walkthrough Services',
  description: 'Animated architectural walkthroughs that allow clients to experience spaces in motion before they are built.',
  alternates: {
    canonical: '/services/3d-walkthroughs',
  },
};

export default function Page() {
  return (
    <InnerPageShell
      eyebrow="Walkthroughs"
      title="3D Walkthrough Services"
      description="Animated architectural walkthroughs that allow clients to experience spaces in motion before they are built."
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }, { label: '3D Walkthroughs' }]}
    />
  );
}
