import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Book an Architectural Consultation | Studio Nirmiti',
  description:
    'Schedule a personalized architectural or interior design consultation with Studio Nirmiti. Bring your floor plans or site blueprints.',
  alternates: {
    canonical: '/book-consultation',
  },
};

const valuePoints = [
  {
    icon: <CheckCircle2 size={20} color="var(--color-accent)" />,
    title: 'Site & Plan Feasibility',
    desc: 'Preliminary analysis of your plot orientation, setback regulations, and natural light vectors.',
  },
  {
    icon: <Sparkles size={20} color="var(--color-accent)" />,
    title: 'Concept & 3D Visualization',
    desc: 'Guidance on spatial layout possibilities and pre-construction CGI modeling options.',
  },
  {
    icon: <Clock size={20} color="var(--color-accent)" />,
    title: 'Timeline & Milestone Roadmap',
    desc: 'Realistic phase-by-phase estimates for design documentation and turnkey civil execution.',
  },
  {
    icon: <ShieldCheck size={20} color="var(--color-accent)" />,
    title: 'Budget & Material Transparency',
    desc: 'Honest appraisal of material finishes, joinery hardware, and contract execution schedules.',
  },
];

export default function BookConsultationPage() {
  return (
    <>
      {/* Editorial Intro — No full hero */}
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
              <li style={{ color: 'var(--color-accent)' }}>Book Consultation</li>
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
            Start Your Project
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
            Schedule a Private Consultation
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '680px',
            }}
          >
            Share your property location and project desires. Our leadership team will review your
            requirements and host a focused 30-minute architectural discovery session.
          </p>
        </div>
      </section>

      {/* Main Grid: Value Proposition + Booking Form */}
      <section className="section">
        <div className="container">
          <div className="responsiveSplitGrid">
            {/* Left: What to Expect */}
            <div>
              <div
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-8)',
                  marginBottom: 'var(--space-8)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: 'var(--text-xl)',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  What We Cover in Your Session
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  {valuePoints.map((pt, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div style={{ flexShrink: 0, marginTop: '2px' }}>{pt.icon}</div>
                      <div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-syne), sans-serif',
                            fontSize: 'var(--text-sm)',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            marginBottom: '2px',
                          }}
                        >
                          {pt.title}
                        </h3>
                        <p
                          style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 'var(--leading-normal)',
                          }}
                        >
                          {pt.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Urgent Assistance */}
              <div
                style={{
                  background: 'rgba(176, 141, 87, 0.08)',
                  border: '1px solid rgba(176, 141, 87, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-accent)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Need Immediate Assistance?
                </p>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  Connect directly with our team over WhatsApp for urgent site consultations.
                </p>
                <a
                  href="https://wa.me/919573023509?text=Hello%20Studio%20Nirmiti%2C%20I%20would%20like%20to%20book%20an%20urgent%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ display: 'inline-block' }}
                >
                  Chat on WhatsApp (+91 95730 23509)
                </a>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div>
              <EnquiryForm title="Consultation Questionnaire" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
