import type { Metadata } from 'next';
import CategoryDesignCatalog from '@/components/catalog/CategoryDesignCatalog';

export const metadata: Metadata = {
  title: 'Turnkey Interior Solutions | 45-Day Guaranteed Handover & Full Home Execution',
  description:
    'Full home turnkey interior packages for 2BHK, 3BHK, 4BHK and luxury villas with fixed price contracts, 3D visualization, German fittings, and single-source accountability.',
  alternates: {
    canonical: '/services/turnkey-interiors',
  },
};

export default function TurnkeyInteriorsPage() {
  return (
    <CategoryDesignCatalog
      categorySlug="turnkey-interiors"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/architectural-design' },
        { label: 'Turnkey Interior Solutions' },
      ]}
    />
  );
}
