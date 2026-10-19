import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, Eye, Shield, Layers, Award } from 'lucide-react';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'About Studio Nirmiti | Architecture & Interior Design Studio',
  description:
    'Founded by Kushal Kumar Pendekatla, Studio Nirmiti unites architectural rigour, interior craft, and turnkey delivery for enduring built environments.',
  alternates: {
    canonical: '/about',
  },
};

const principles = [
  {
    icon: <Compass size={24} color="var(--color-accent)" />,
    title: 'Purposeful Planning',
    desc: 'Architecture must begin from human ergonomics and sun path, not superficial facades. We shape volumes around real daily rituals.',
  },
  {
    icon: <Eye size={24} color="var(--color-accent)" />,
    title: 'Visual Clarity First',
    desc: 'Through photorealistic 3D visualization and light studies, every material junction and shadow line is tested and approved before construction begins.',
  },
  {
    icon: <Shield size={24} color="var(--color-accent)" />,
    title: 'Detail-Led Delivery',
    desc: 'What you approve in 3D is what gets built on-site. We eliminate contractor drift through rigorous direct architect supervision and single-source turnkey accountability.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Schema.org Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'ArchitectureFirm',
              name: 'Studio Nirmiti',
              founder: 'Kushal Kumar Pendekatla',
              telephone: '+919573023509',
              areaServed: ['Hyderabad', 'Bengaluru', 'Pan-India'],
            },
          }),
        }}
      />

      {/* Editorial Intro — No hero */}
      <section
        style={{
          paddingTop: 'calc(var(--nav-height) + var(--space-12))',
          paddingBottom: 'var(--space-16)',
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
              <li style={{ color: 'var(--color-accent)' }}>About Studio</li>
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
            Studio Philosophy
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-6)',
              lineHeight: 1.15,
              maxWidth: '840px',
            }}
          >
            Enduring architecture and interior craft, delivered without compromise.
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '720px',
            }}
          >
            Studio Nirmiti was established with a singular ethos: to eliminate the historic friction
            between architectural vision and on-site reality. By integrating architectural planning,
            spatial interior design, advanced 3D pre-visualization, and disciplined turnkey execution
            under one studio umbrella, we create spaces that stand the test of time.
          </p>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--space-12)' }}>
            <span
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'inline-block',
                marginBottom: 'var(--space-2)',
              }}
            >
              Guiding Principles
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: 'var(--color-text-primary)',
              }}
            >
              The Three Tenets of Studio Nirmiti
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'var(--space-8)',
            }}
          >
            {principles.map((p, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-8)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)' }}>{p.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    marginBottom: 'var(--space-3)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Feature Strip */}
      <section className="section theme-cream">
        <div className="container">
          <div className="responsiveEditorialGrid">
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 10',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
              }}
            >
              <Image
                src="/images/hero_architectural_living.jpg"
                alt="Studio Nirmiti architectural space"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div>
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
                Integrated Methodology
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--space-4)',
                  lineHeight: 1.2,
                }}
              >
                Where architecture and interior craft converge.
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                We do not view interiors as an afterthought applied to a concrete shell. From the
                first site orientation sketches, we plan window reveals, structural recesses,
                air-conditioning drops, and lighting pathways so that joinery, stone, and natural
                light coexist in effortless harmony.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'var(--text-3xl)',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                    }}
                  >
                    100%
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontFamily: 'var(--font-syne), sans-serif',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    Turnkey Supervision
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'var(--text-3xl)',
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                    }}
                  >
                    3D CGI
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontFamily: 'var(--font-syne), sans-serif',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    Pre-Construction Precision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-10)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'inline-block',
                marginBottom: 'var(--space-2)',
              }}
            >
              Studio Leadership
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: 'var(--text-2xl)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-2)',
              }}
            >
              Kushal Kumar Pendekatla
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-syne), sans-serif',
                fontSize: 'var(--text-xs)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--space-6)',
              }}
            >
              Founder & Principal Designer
            </p>

            <p
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-6)',
              }}
            >
              Leading Studio Nirmiti, Kushal orchestrates every project with an uncompromising eye
              for structural honesty, spatial proportion, and fine material craft. His philosophy
              ensures that client dreams are protected through meticulous pre-construction 3D
              visualization and hands-on, transparent contractor coordination.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Link href="/book-consultation" className="btn btn-primary">
                Book a Session with Kushal →
              </Link>
              <a href="tel:+919573023509" className="btn btn-outline">
                Direct Line: +91 95730 23509
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner
        eyebrow="Collaborate"
        title="Bring your architectural vision to life."
        description="Connect with our studio to explore custom residential, commercial, or hospitality design and turnkey build."
      />
    </>
  );
}
