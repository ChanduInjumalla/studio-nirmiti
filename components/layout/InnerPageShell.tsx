import Breadcrumb from '@/components/seo/Breadcrumb';
import type { BreadcrumbItem } from '@/components/seo/Breadcrumb';

interface InnerPageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

/**
 * Reusable inner page shell — NO HERO. Editorial intro start.
 * All inner pages use this as their base structure.
 */
export default function InnerPageShell({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: InnerPageShellProps) {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-8))' }}>
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
        <section style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-section)' }}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 style={{ marginBottom: 'var(--space-6)', maxWidth: '700px' }}>{title}</h1>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-body)',
              maxWidth: '600px',
            }}
          >
            {description}
          </p>
        </section>
      </div>
    </div>
  );
}
