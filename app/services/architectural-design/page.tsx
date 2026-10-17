import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, FileText, Layers, CheckCircle2 } from 'lucide-react';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Architectural Design Services | Studio Nirmiti',
  description:
    'Comprehensive architectural planning, massing, zoning, structural coordination, and working drawings by Studio Nirmiti.',
  alternates: {
    canonical: '/services/architectural-design',
  },
};

const scopeStages = [
  {
    num: '01',
    title: 'Site Analysis & Volumetric Massing',
    items: [
      'Topography, setbacks, and sun-path vector analysis',
      'Climatic micro-climate and wind flow studies',
      'Volumetric massing options and zoning feasibility',
      'Preliminary structural grid and circulation flow',
    ],
  },
  {
    num: '02',
    title: 'Design Development & 3D Studies',
    items: [
      'Architectural floor plans with furniture layout logic',
      'Photorealistic 3D external perspectives and day/night studies',
      'Facade material finishes, louvers, and kinetic screen detailing',
      'Internal double-height volumes and skylight integration',
    ],
  },
  {
    num: '03',
    title: 'Working Drawings & Approvals',
    items: [
      'Comprehensive architectural working drawing set',
      'Structural and civil engineering coordination drawings',
      'Electrical, plumbing, and HVAC schematic coordination',
      'Municipal sanction drawings and compliance support',
    ],
  },
  {
    num: '04',
    title: 'On-Site Architectural Oversight',
    items: [
      'Milestone site inspections and structural alignment checks',
      'Vendor sample approvals (stone, glazing, metal profiles)',
      'Subcontractor detailing queries and snag clearances',
      'Final architectural handover verification',
    ],
  },
];

export default function ArchitecturalDesignPage() {
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
                <Link href="/services/architectural-design" style={{ color: 'var(--color-text-secondary)' }}>
                  Services
                </Link>
              </li>
              <li>/</li>
              <li style={{ color: 'var(--color-accent)' }}>Architectural Design</li>
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
            Core Architectural Practice
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
            Architectural Design & Planning
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '680px',
            }}
          >
            From raw topography through volumetric massing to complete construction documentation.
            We treat architecture as an enduring framework for life, balancing poetic light with
            rigorous structural buildability.
          </p>
        </div>
      </section>

      {/* Hero Visual Media Frame */}
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
              src="/images/project_residential_villa.jpg"
              alt="Architectural design villa elevation by Studio Nirmiti"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Scope Matrix */}
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
              Deliverables & Sequence
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: 'var(--color-text-primary)',
              }}
            >
              Architectural Scope Matrix
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)',
            }}
          >
            {scopeStages.map((stage) => (
              <div
                key={stage.num}
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
                <span
                  style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  Stage {stage.num}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-4)',
                    lineHeight: 1.3,
                  }}
                >
                  {stage.title}
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {stage.items.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '8px', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-normal)' }}>
                      <CheckCircle2 size={15} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Link */}
      <section className="section theme-cream">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: 'var(--space-10)',
              alignItems: 'center',
            }}
          >
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
                Representative Case Study
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: 'var(--text-3xl)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                The Glass Pavilion Villa
              </h2>
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                A 7,800 sq.ft private contemporary sanctuary in Jubilee Hills featuring cantilevered
                concrete planes, full-height acoustic glazing, and an internal courtyard.
              </p>
              <Link href="/projects/the-glass-pavilion-villa" className="btn btn-primary">
                View Full Villa Case Study →
              </Link>
            </div>

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
                src="/images/hero_architectural_living.jpg"
                alt="The Glass Pavilion Villa interior view"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner
        eyebrow="Commission Architecture"
        title="Planning a custom residential or commercial build?"
        description="Schedule an architectural feasibility consultation with founder Kushal Kumar Pendekatla."
      />
    </>
  );
}
