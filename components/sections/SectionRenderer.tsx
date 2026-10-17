import type { SectionBlock } from '@/types';
import styles from './SectionRenderer.module.css';

interface SectionRendererProps {
  sections: SectionBlock[];
}

/**
 * Renders a list of section blocks using their type to select the appropriate component.
 * This is the core architecture that enables the CMS/admin visual editor later.
 */
export default function SectionRenderer({ sections }: SectionRendererProps) {
  const enabledSections = sections.filter((s) => s.enabled);

  return (
    <>
      {enabledSections.map((section) => (
        <section
          key={section.id}
          id={`section-${section.id}`}
          className={`section ${getThemeClass(section.theme)} ${getSpacingClass(section.spacing)} ${styles.section}`}
          data-section-type={section.type}
          data-animation-preset={section.animationPreset}
        >
          <div className="container">
            <SectionContent section={section} />
          </div>
        </section>
      ))}
    </>
  );
}

function SectionContent({ section }: { section: SectionBlock }) {
  // Phase 1: placeholder shell for each section type.
  // Full styled components will be built in Phase 3.
  switch (section.type) {
    case 'editorialIntro':
      return <EditorialIntroShell section={section} />;
    case 'cardGrid':
      return <CardGridShell section={section} />;
    case 'cta':
      return <CtaShell section={section} />;
    default:
      return <GenericShell section={section} />;
  }
}

// ── Placeholder Section Shells ──

function EditorialIntroShell({ section }: { section: SectionBlock }) {
  return (
    <div className={styles.editorial}>
      {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
      {section.heading && <h2>{section.heading}</h2>}
      {section.body && <p className={styles.body}>{section.body}</p>}
    </div>
  );
}

function CardGridShell({ section }: { section: SectionBlock }) {
  return (
    <div>
      {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
      {section.heading && <h2>{section.heading}</h2>}
      {section.items && section.items.length > 0 && (
        <div className={styles.cardGrid}>
          {section.items.map((item) => (
            <div key={item.id} className={styles.card}>
              <h3>{item.title}</h3>
              {item.body && <p>{item.body}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CtaShell({ section }: { section: SectionBlock }) {
  return (
    <div className={styles.cta}>
      {section.heading && <h2>{section.heading}</h2>}
      {section.body && <p>{section.body}</p>}
      {section.cta && (
        <a href={section.cta.href} className={`btn btn-${section.cta.variant || 'primary'}`}>
          {section.cta.label}
        </a>
      )}
    </div>
  );
}

function GenericShell({ section }: { section: SectionBlock }) {
  return (
    <div className={styles.generic}>
      {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
      {section.heading && <h2>{section.heading}</h2>}
      {section.body && <p className={styles.body}>{section.body}</p>}
    </div>
  );
}

// ── Helpers ──

function getThemeClass(theme: string): string {
  const map: Record<string, string> = {
    light: 'theme-light',
    dark: 'theme-dark',
    cream: 'theme-cream',
    charcoal: 'theme-charcoal',
    sage: 'theme-light',
  };
  return map[theme] || 'theme-light';
}

function getSpacingClass(spacing: string): string {
  const map: Record<string, string> = {
    compact: styles.spacingCompact,
    default: '',
    generous: styles.spacingGenerous,
  };
  return map[spacing] || '';
}
