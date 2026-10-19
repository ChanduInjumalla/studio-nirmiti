import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ShieldAlert, Sparkles, Building, Hammer } from 'lucide-react';
import WhyStudioNirmiti from '@/components/sections/WhyStudioNirmiti';
import ClientTestimonials from '@/components/sections/ClientTestimonials';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Why Choose Studio Nirmiti | Architecture & Turnkey Delivery',
  description:
    'Discover how Studio Nirmiti eliminates contractor friction and design drift through integrated architecture, photorealistic 3D visualization, and turnkey accountability.',
  alternates: {
    canonical: '/why-studio-nirmiti',
  },
};

const comparisonPoints = [
  {
    feature: 'Architectural & Interior Design under One Roof',
    nirmiti: true,
    consultants: true,
    contractors: false,
  },
  {
    feature: 'Photorealistic 3D CGI Pre-Visualization',
    nirmiti: true,
    consultants: 'Extra Fee',
    contractors: false,
  },
  {
    feature: 'Direct In-House Turnkey Execution & Civil Works',
    nirmiti: true,
    consultants: false,
    contractors: true,
  },
  {
    feature: 'Single-Source Financial & Snag Accountability',
    nirmiti: true,
    consultants: false,
    contractors: false,
  },
  {
    feature: 'Daily Architect-Led On-Site Quality Audits',
    nirmiti: true,
    consultants: 'Weekly / Ad-hoc',
    contractors: false,
  },
  {
    feature: 'Zero Discrepancy Between 3D Render & Final Build',
    nirmiti: true,
    consultants: false,
    contractors: false,
  },
  {
    feature: 'Transparent Milestone Pricing & Schedule Guarantees',
    nirmiti: true,
    consultants: false,
    contractors: false,
  },
];

export default function WhyStudioNirmitiPage() {
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
              <li style={{ color: 'var(--color-accent)' }}>Why Us</li>
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
            Distinctive Advantage
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
            Why Discerning Clients Choose Studio Nirmiti
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '680px',
            }}
          >
            Traditional projects suffer from a painful divide: architects draw beautiful concepts
            that contractors claim cannot be built within budget. Studio Nirmiti bridges this chasm
            through integrated architecture, pre-construction 3D visualization, and single-source turnkey delivery.
          </p>
        </div>
      </section>

      {/* Trust Pillars */}
      <WhyStudioNirmiti />

      {/* Comparison Matrix Table */}
      <section className="section theme-cream">
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
              The Delivery Difference
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: 'var(--color-text-primary)',
              }}
            >
              Studio Nirmiti vs Traditional Models
            </h2>
          </div>

          <div
            style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              maxWidth: '100%',
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                minWidth: '600px',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  <th
                    style={{
                      padding: 'var(--space-6) var(--space-8)',
                      fontFamily: 'var(--font-syne), sans-serif',
                      fontSize: 'var(--text-xs)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-text-muted)',
                      width: '45%',
                    }}
                  >
                    Capability & Accountability
                  </th>
                  <th
                    style={{
                      padding: 'var(--space-6) var(--space-4)',
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-accent)',
                      background: 'rgba(176, 141, 87, 0.08)',
                      textAlign: 'center',
                      width: '25%',
                    }}
                  >
                    Studio Nirmiti
                  </th>
                  <th
                    style={{
                      padding: 'var(--space-6) var(--space-4)',
                      fontFamily: 'var(--font-syne), sans-serif',
                      fontSize: 'var(--text-xs)',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      textAlign: 'center',
                      width: '15%',
                    }}
                  >
                    Design Consultants
                  </th>
                  <th
                    style={{
                      padding: 'var(--space-6) var(--space-4)',
                      fontFamily: 'var(--font-syne), sans-serif',
                      fontSize: 'var(--text-xs)',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      textAlign: 'center',
                      width: '15%',
                    }}
                  >
                    Contractors
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    <td
                      style={{
                        padding: 'var(--space-5) var(--space-8)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 500,
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {row.feature}
                    </td>

                    {/* Studio Nirmiti column */}
                    <td
                      style={{
                        padding: 'var(--space-5) var(--space-4)',
                        textAlign: 'center',
                        background: 'rgba(176, 141, 87, 0.04)',
                        fontWeight: 600,
                        color: 'var(--color-accent)',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#2e7d32',
                          fontWeight: 700,
                        }}
                      >
                        ✓ Guaranteed
                      </span>
                    </td>

                    {/* Design Consultants column */}
                    <td
                      style={{
                        padding: 'var(--space-5) var(--space-4)',
                        textAlign: 'center',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {row.consultants === true ? (
                        '✓ Yes'
                      ) : row.consultants === false ? (
                        <span style={{ color: '#d32f2f' }}>✕ No</span>
                      ) : (
                        row.consultants
                      )}
                    </td>

                    {/* Contractors column */}
                    <td
                      style={{
                        padding: 'var(--space-5) var(--space-4)',
                        textAlign: 'center',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {row.contractors === true ? (
                        '✓ Yes'
                      ) : (
                        <span style={{ color: '#d32f2f' }}>✕ No</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Client Endorsements */}
      <ClientTestimonials />

      {/* Closing CTA */}
      <CtaBanner
        eyebrow="Experience the Difference"
        title="Ready to build without compromise?"
        description="Connect with our design team to explore an integrated, stress-free architectural journey."
      />
    </>
  );
}
