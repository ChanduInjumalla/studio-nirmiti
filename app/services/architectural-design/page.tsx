import type { Metadata } from 'next';
import CategoryDesignCatalog from '@/components/catalog/CategoryDesignCatalog';

export const metadata: Metadata = {
  title: 'Architectural Design & Planning | Luxury Villas & Independent Homes',
  description:
    'Comprehensive architectural planning, site vector analysis, volumetric massing, working drawings, and turnkey build coordination by Studio Nirmiti.',
  alternates: {
    canonical: '/services/architectural-design',
  },
};

export default function ArchitecturalDesignPage() {
  return (
    <CategoryDesignCatalog
      categorySlug="architectural-design"
      pageTitle="Architectural Design & Planning"
      pageEyebrow="Core Architectural Practice"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/architectural-design' },
        { label: 'Architectural Design' },
      ]}
    />
  );
}
