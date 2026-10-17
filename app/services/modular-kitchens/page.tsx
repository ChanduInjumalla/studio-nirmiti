import type { Metadata } from 'next';
import CategoryDesignCatalog from '@/components/catalog/CategoryDesignCatalog';

export const metadata: Metadata = {
  title: 'Modular Kitchen Designs | 3000+ Modular Kitchen Ideas & Turnkey Execution',
  description:
    'Explore curated modular kitchen designs with layout planning, German fittings, quartz countertops, anti-fingerprint acrylic finishes, and 45-day turnkey installation by Studio Nirmiti.',
  alternates: {
    canonical: '/services/modular-kitchens',
  },
};

export default function ModularKitchensPage() {
  return (
    <CategoryDesignCatalog
      categorySlug="modular-kitchens"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/architectural-design' },
        { label: 'Modular Kitchen Designs' },
      ]}
    />
  );
}
