import type { Metadata } from 'next';
import CategoryDesignCatalog from '@/components/catalog/CategoryDesignCatalog';

export const metadata: Metadata = {
  title: 'Wardrobe & Storage Designs | Luxury Walk-in Closets & Modular Systems',
  description:
    'Custom floor-to-ceiling wardrobe systems, walk-in closets, fluted glass sliding wardrobes, and bespoke storage design by Studio Nirmiti.',
  alternates: {
    canonical: '/services/wardrobes-storage',
  },
};

export default function WardrobesStoragePage() {
  return (
    <CategoryDesignCatalog
      categorySlug="wardrobes-storage"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/architectural-design' },
        { label: 'Wardrobes & Storage' },
      ]}
    />
  );
}
