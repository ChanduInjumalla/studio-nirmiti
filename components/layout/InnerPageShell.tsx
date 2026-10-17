import Breadcrumb from '@/components/seo/Breadcrumb';
import type { BreadcrumbItem } from '@/components/seo/Breadcrumb';
import CategoryDesignCatalog from '@/components/catalog/CategoryDesignCatalog';

interface InnerPageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  categorySlug?: string;
  children?: React.ReactNode;
}

/**
 * Reusable inner page shell — Renders Livspace-style architectural
 * design catalog for services/projects, and clean editorial layout for legal/info pages.
 */
export default function InnerPageShell({
  eyebrow,
  title,
  description,
  breadcrumbs,
  categorySlug,
  children,
}: InnerPageShellProps) {
  // If it's a legal or custom content page with children
  if (eyebrow.toLowerCase() === 'legal' || children) {
    return (
      <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-8))', minHeight: '80vh', backgroundColor: '#141716', color: '#e5e2db' }}>
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          <section style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-section)' }}>
            <p className="eyebrow">{eyebrow}</p>
            <h1 style={{ marginBottom: 'var(--space-6)', maxWidth: '700px', fontFamily: 'var(--font-cinzel), serif', color: '#ffffff' }}>{title}</h1>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-body)',
                maxWidth: '650px',
              }}
            >
              {description}
            </p>
            {children && <div style={{ marginTop: 'var(--space-8)' }}>{children}</div>}
          </section>
        </div>
      </div>
    );
  }

  // Derive slug from breadcrumbs if not explicitly passed
  const derivedSlug =
    categorySlug ||
    (breadcrumbs[breadcrumbs.length - 1]?.href || '')
      .replace('/services/', '')
      .replace('/projects/', '') ||
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <CategoryDesignCatalog
      categorySlug={derivedSlug}
      pageTitle={title}
      pageEyebrow={eyebrow}
      breadcrumbs={breadcrumbs}
    />
  );
}
