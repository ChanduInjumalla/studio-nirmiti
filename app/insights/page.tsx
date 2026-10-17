import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { insightsData } from '@/data/insights';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Architectural Insights & Thought Leadership | Studio Nirmiti',
  description:
    'Essays and practical perspectives on daylighting, structural materials, 3D pre-visualization, and spatial craft from the Studio Nirmiti team.',
  alternates: {
    canonical: '/insights',
  },
};

export default function InsightsPage() {
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
              <li style={{ color: 'var(--color-accent)' }}>Insights</li>
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
            Studio Perspectives
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
            Architectural Insights & Perspectives
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '680px',
            }}
          >
            Reflections on spatial proportion, material authenticity, construction technology,
            and the craft of turning complex client aspirations into enduring built reality.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'var(--space-8)',
            }}
          >
            {insightsData.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
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
                    src={article.cover?.src || '/images/hero_architectural_living.jpg'}
                    alt={article.cover?.alt || article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
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
                    {article.category}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-syne), sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                    marginBottom: '4px',
                  }}
                >
                  {article.publishedAt} · {article.author}
                </p>

                <h2
                  style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 500,
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-3)',
                    lineHeight: 1.25,
                  }}
                >
                  {article.title}
                </h2>

                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                    flexGrow: 1,
                  }}
                >
                  {article.excerpt}
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
                  Read Article →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner
        eyebrow="Join the Conversation"
        title="Have questions about your upcoming build?"
        description="Schedule a consultation with our design team to discuss spatial planning and materials."
      />
    </>
  );
}
