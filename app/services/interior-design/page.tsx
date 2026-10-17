import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Layers, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Interior Design & Architecture Services | Studio Nirmiti',
  description:
    'Bespoke interior architecture, custom cabinetry, material palettes, and lighting design crafted for elevated everyday living.',
  alternates: {
    canonical: '/services/interior-design',
  },
};

const disciplines = [
  {
    icon: <Sliders size={22} color="var(--color-accent)" />,
    title: 'Custom Millwork & Cabinetry',
    desc: 'Full-height smoked oak wardrobes, concealed handle details, fluted timber feature portals, and precision German motion hardware.',
  },
  {
    icon: <Layers size={22} color="var(--color-accent)" />,
    title: 'Honest Material Palettes',
    desc: 'Rough-hewn travertine stone, microcement finishes, brushed brass accents, and Belgian linen upholstery curated for tactile depth.',
  },
  {
    icon: <Sparkles size={22} color="var(--color-accent)" />,
    title: 'Architectural Lighting Plans',
    desc: 'Concealed warm 2700K LED coves, low-glare magnetic track fixtures, and directional art spotlights that create evening intimacy.',
  },
  {
    icon: <CheckCircle2 size={22} color="var(--color-accent)" />,
    title: 'Turnkey Interior Handover',
    desc: 'Seamless translation from 3D visual render to completed rooms with zero contractor friction and complete warranty documentation.',
  },
];

export default function InteriorDesignPage() {
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
              <li>
                <Link href="/services/interior-design" style={{ color: 'var(--color-text-secondary)' }}>
                  Services
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: 'var(--color-accent)' }}>Interior Design</li>
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
            Spatial Interior Craft
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
            Interior Architecture & Design
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '680px',
            }}
          >
            Interior design at Studio Nirmiti is spatial choreography. We orchestrate proportions,
            tactile surfaces, acoustic comfort, and natural light into enduring, serene sanctuaries.
          </p>
        </div>
      </section>

      {/* Media Frame */}
      <section style={{ padding: 'var(--space-8) 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div
            style={{
              position: 'relative',
              aspectRatio: '16 / 9',
              maxHeight: '560px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
            }}
          >
            <Image
              src="/images/hero_architectural_living.jpg"
              alt="Bespoke luxury interior living space by Studio Nirmiti"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Interior Disciplines */}
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
              Craft & Precision
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: 'var(--color-text-primary)',
              }}
            >
              The Studio Interior Philosophy
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {disciplines.map((d, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-8)',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)' }}>{d.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-3)',
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Project */}
      <section className="section theme-cream">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: 'var(--space-10)',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 10',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
              }}
            >
              <Image
                src="/images/project_modular_kitchen.jpg"
                alt="The Stone and Timber Residence bespoke kitchen"
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
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  display: 'inline-block',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Representative Interior Work
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: 'var(--text-3xl)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                The Stone & Timber Residence
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                A 5,400 sq.ft penthouse interior transformation in Bengaluru defined by rough-hewn
                travertine stone, fluted oak millwork, and hidden architectural magnetic lighting.
              </p>
              <Link href="/projects/the-stone-timber-residence" className="btn btn-primary">
                Explore Penthouse Case Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner
        eyebrow="Transform Your Interiors"
        title="Ready to elevate your everyday living space?"
        description="Book a consultation with our interior architecture team to discuss custom joinery, materials, and turnkey fit-outs."
      />
    </>
  );
}
