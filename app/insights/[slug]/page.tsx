import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { insightsData } from '@/data/insights';
import CtaBanner from '@/components/sections/CtaBanner';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...insightsData.map((a) => ({ slug: a.slug })),
    { slug: 'sample-article' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Architectural Insight | Studio Nirmiti',
    };
  }

  return {
    title: article.seo?.seoTitle || `${article.title} | Studio Nirmiti Insights`,
    description: article.seo?.metaDescription || article.excerpt,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.cover?.src ? [{ url: article.cover.src }] : [],
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article =
    insightsData.find((a) => a.slug === slug) ||
    insightsData[0]; // fallback for sample-article

  if (!article) {
    notFound();
  }

  const related = insightsData.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      {/* Schema.org Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            author: {
              '@type': 'Person',
              name: article.author || 'Studio Nirmiti',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Studio Nirmiti',
              logo: {
                '@type': 'ImageObject',
                url: 'https://studionirmiti.com/images/hero_architectural_living.jpg',
              },
            },
            datePublished: article.publishedAt,
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
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
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
                <Link href="/insights" style={{ color: 'var(--color-text-secondary)' }}>
                  Insights
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: 'var(--color-accent)' }}>{article.category}</li>
            </ol>
          </nav>

          <span
            style={{
              fontFamily: 'var(--font-syne), sans-serif',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              display: 'inline-block',
              marginBottom: 'var(--space-3)',
            }}
          >
            {article.category} Essay · Published {article.publishedAt}
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
            {article.title}
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            By {article.author}
          </p>
        </div>
      </section>

      {/* Featured Cover Media */}
      {article.cover && (
        <section style={{ padding: 'var(--space-8) 0', backgroundColor: 'var(--color-bg)' }}>
          <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 9',
                maxHeight: '520px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
              }}
            >
              <Image
                src={article.cover.src}
                alt={article.cover.alt}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Essay Content Body */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--color-text-primary)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-6)',
            }}
          >
            <p style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              {article.excerpt}
            </p>

            <h2
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: 'var(--text-2xl)',
                marginTop: 'var(--space-6)',
                color: 'var(--color-text-primary)',
              }}
            >
              Spatial Orientation as the Foundation of Form
            </h2>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)' }}>
              In high-end architectural design, lighting cannot be treated as an artificial layer
              applied after walls are raised. From the initial solar vector and climate studies,
              we design volumetric openings, deep overhangs, and clerestory slits that track the sun
              throughout the diurnal cycle without subjecting interior zones to oppressive glare or thermal load.
            </p>

            <blockquote
              style={{
                borderLeft: '3px solid var(--color-accent)',
                paddingLeft: 'var(--space-6)',
                margin: 'var(--space-6) 0',
                fontStyle: 'italic',
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: 'var(--text-lg)',
                color: 'var(--color-accent)',
              }}
            >
              “Architecture is the learned game, correct and magnificent, of forms assembled in the light.”
            </blockquote>

            <h2
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: 'var(--text-2xl)',
                marginTop: 'var(--space-6)',
                color: 'var(--color-text-primary)',
              }}
            >
              Material Integrity & The Tactile Experience
            </h2>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)' }}>
              Natural light is only as profound as the surfaces it washes across. A beam of morning
              light grazing a rough-hewn travertine wall reveals subterranean depths and mineral
              fissures that flat plaster can never match. By carrying exterior facade stones and
              smoked oak profiles through into the interior living volume, we establish a continuous
              narrative of structural calmness.
            </p>
          </div>

          {/* Author Card */}
          <div
            style={{
              marginTop: 'var(--space-12)',
              padding: 'var(--space-8)',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              gap: 'var(--space-6)',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '24px',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              N
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontSize: 'var(--text-base)', marginBottom: '4px' }}>
                {article.author}
              </h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                Studio Nirmiti is an architectural and interior design studio committed to clarity,
                purpose, and detail across luxury residential, commercial, and hospitality projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section theme-cream">
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-8)' }}>
            More Insights & Perspectives
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
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
                    src={rel.cover?.src || '/images/hero_architectural_living.jpg'}
                    alt={rel.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '2px' }}>
                  {rel.category}
                </p>
                <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: 'var(--text-lg)', marginBottom: '4px' }}>
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner />
    </>
  );
}
