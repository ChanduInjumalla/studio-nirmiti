import type { Metadata } from 'next';
import CategoryDesignCatalog from '@/components/catalog/CategoryDesignCatalog';

export const metadata: Metadata = {
  title: 'Interior Design & Architecture | Luxury Homes & Penthouses',
  description:
    'Bespoke interior architecture, custom cabinetry, material palettes, and lighting design crafted for elevated everyday living.',
  alternates: {
    canonical: '/services/interior-design',
  },
};

export default function InteriorDesignPage() {
  return (
    <CategoryDesignCatalog
      categorySlug="interior-design"
      pageTitle="Interior Design & Architecture"
      pageEyebrow="Interior Architecture"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/architectural-design' },
        { label: 'Interior Design' },
      ]}
    />
  );
}
