import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import CtaBanner from '@/components/sections/CtaBanner';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...projectsData.map((p) => ({ slug: p.slug })),
    { slug: 'sample-project' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Case Study | Studio Nirmiti',
    };
  }

  return {
    title: project.seo?.seoTitle || `${project.title} | Studio Nirmiti`,
    description: project.seo?.metaDescription || project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.gallery?.[0]?.src ? [{ url: project.gallery[0].src }] : [],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project =
    projectsData.find((p) => p.slug === slug) ||
    projectsData[0]; // fallback for sample-project

  if (!project) {
    notFound();
  }

  const related = projectsData.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* Schema.org Single Project Case Study */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VisualArtwork',
            name: project.title,
            description: project.summary,
            creator: {
              '@type': 'ArchitectureFirm',
              name: 'Studio Nirmiti',
            },
          }),
        }}
      />

      {/* Editorial Intro — No hero */}
      <section
        style={{
          paddingTop: 'calc(var(--nav-height) + var(--space-12))',
          paddingBottom: 'var(--space-12)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 'var(--space-6)' }}>
            <ol
              style={{
                display: 'flex',
                gap: '8px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '12px',
                fontFamily: 'var(--font-syne), sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--color-text-muted)',
              }}
            >
              <li>
                <Link href="/" style={{ color: 'var(--color-text-secondary)' }}>
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/projects" style={{ color: 'var(--color-text-secondary)' }}>
                  Projects
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: 'var(--color-accent)' }}>{project.title}</li>
            </ol>
          </nav>

          <div style={{ display: 'flex', gap: '8px', marginBottom: 'var(--space-3)' }}>
            <span
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}
            >
              {project.projectType} Case Study · {project.location}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-4)',
              lineHeight: 1.15,
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '720px',
            }}
          >
            {project.summary}
          </p>

          <div
            style={{
              display: 'flex',
              gap: 'var(--space-6)',
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--color-border)',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-syne), sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  marginBottom: '2px',
                }}
              >
                Scope & Scale
              </p>
              <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{project.scope}</p>
            </div>

            <div>
              <p
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-syne), sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  marginBottom: '2px',
                }}
              >
                Location
              </p>
              <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>{project.location}</p>
            </div>

            <div>
              <p
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-syne), sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-muted)',
                  marginBottom: '2px',
                }}
              >
                Services Delivered
              </p>
              <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                {project.serviceTags.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cover Hero Image */}
      {project.gallery?.[0] && (
        <section style={{ padding: 'var(--space-8) 0', backgroundColor: 'var(--color-bg)' }}>
          <div className="container">
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 9',
                maxHeight: '620px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
              }}
            >
              <Image
                src={project.gallery[0].src}
                alt={project.gallery[0].alt}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Challenge and Architectural Approach */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="responsiveSplitGrid">
            {project.challenge && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    display: 'inline-block',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  The Challenge
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: 'var(--text-2xl)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  Program Constraints
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  {project.challenge}
                </p>
              </div>
            )}

            {project.approach && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent)',
                    display: 'inline-block',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  The Solution
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: 'var(--text-2xl)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  Architectural Approach
                </h2>
                <p
                  style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  {project.approach}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Before / After Slider if Available */}
      {project.beforeAfter?.[0] && (
        <BeforeAfterSlider
          beforeSrc={project.beforeAfter[0].before.src}
          beforeAlt={project.beforeAfter[0].before.alt}
          afterSrc={project.beforeAfter[0].after.src}
          afterAlt={project.beforeAfter[0].after.alt}
          beforeLabel="3D Digital Study"
          afterLabel="Turnkey Handover"
        />
      )}

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="section theme-cream">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <span
                style={{
                  fontFamily: 'var(--font-syne), sans-serif',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  display: 'inline-block',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Project Imagery
              </span>
              <h2 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: 'var(--text-2xl)' }}>
                Material & Spatial Highlights
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: 'var(--space-6)',
              }}
            >
              {project.gallery.slice(1).map((media, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  }}
                >
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: 'var(--text-2xl)' }}>
              More Selected Projects
            </h2>
            <Link href="/projects" className="btn btn-outline" style={{ fontSize: '12px' }}>
              All Projects →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/projects/${rel.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  <Image
                    src={rel.gallery?.[0]?.src || '/images/hero_architectural_living.jpg'}
                    alt={rel.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: 'var(--text-lg)', marginBottom: '2px' }}>
                  {rel.title}
                </h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                  {rel.location} · {rel.projectType}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner
        eyebrow="Commission a Project"
        title="Inspired by this case study?"
        description="Discuss your site plans or property ambitions with our architectural team."
      />
    </>
  );
}
