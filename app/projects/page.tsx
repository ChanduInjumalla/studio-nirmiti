import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Studio Nirmiti',
  description:
    'Explore our curated portfolio of luxury residential villas, penthouses, commercial headquarters, and hospitality retreats across India.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
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
              <li style={{ color: 'var(--color-accent)' }}>Projects</li>
            </ol>
          </nav>

          <span
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              display: 'inline-block',
              marginBottom: 'var(--space-3)',
            }}
          >
            Built Work & Case Studies
          </span>

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
            Curated Architectural Portfolio
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '640px',
            }}
          >
            A selective collection of bespoke residences, high-performance corporate environments,
            and immersive hospitality destinations executed with architectural precision.
          </p>

          {/* Quick Category Jump Links */}
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-3)',
              marginTop: 'var(--space-8)',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/projects"
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg)',
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              All Projects ({projectsData.length})
            </Link>
            <Link
              href="/projects/residential"
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Residential
            </Link>
            <Link
              href="/projects/commercial"
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Commercial
            </Link>
            <Link
              href="/projects/hospitality"
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Hospitality
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: 'var(--space-8)',
            }}
          >
            {projectsData.map((project) => {
              const cover = project.gallery?.[0]?.src || '/images/hero_architectural_living.jpg';
              const coverAlt = project.gallery?.[0]?.alt || project.title;

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '16 / 10',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      marginBottom: 'var(--space-4)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Image
                      src={cover}
                      alt={coverAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(20, 24, 22, 0.8)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--color-text-light)',
                        fontFamily: 'var(--font-syne), sans-serif',
                        fontSize: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {project.projectType}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    {project.serviceTags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '10px',
                          fontFamily: 'var(--font-syne), sans-serif',
                          textTransform: 'uppercase',
                          color: 'var(--color-accent)',
                          background: 'rgba(176, 141, 87, 0.08)',
                          padding: '2px 8px',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2
                    style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 500,
                      color: 'var(--color-text-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {project.title}
                  </h2>

                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontFamily: 'var(--font-syne), sans-serif',
                      color: 'var(--color-text-muted)',
                      marginBottom: '8px',
                    }}
                  >
                    {project.location} · {project.scope}
                  </p>

                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                      flexGrow: 1,
                    }}
                  >
                    {project.summary}
                  </p>

                  <p
                    style={{
                      marginTop: 'var(--space-4)',
                      fontSize: 'var(--text-xs)',
                      fontFamily: 'var(--font-syne), sans-serif',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-accent)',
                    }}
                  >
                    Read Full Case Study →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner
        eyebrow="Commission a Project"
        title="Ready to begin your architectural journey?"
        description="Book a consultation with our studio to review your site, requirements, and budget parameters."
      />
    </>
  );
}
