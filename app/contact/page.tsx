import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Studio Nirmiti | Start an Architecture or Interior Project',
  description:
    'Direct contact with Studio Nirmiti. Call +91 9573023509 or submit your architectural floor plans and interior project requirements.',
  alternates: {
    canonical: '/contact',
  },
};

const faqs = [
  {
    q: 'How quickly does Studio Nirmiti respond to new enquiries?',
    a: 'We review incoming site details and floor plans within 24 business hours to arrange an initial architectural discovery call.',
  },
  {
    q: 'Do you take on design-only projects or full turnkey execution?',
    a: 'We offer both. Clients can engage us strictly for architectural design, spatial planning, and 3D visualization, or for complete end-to-end turnkey construction and interior execution.',
  },
  {
    q: 'Can we visit active construction sites?',
    a: 'Yes. For qualified projects, we are delighted to schedule guided walkthroughs of currently executing residences and corporate fit-outs in Hyderabad and Bengaluru.',
  },
  {
    q: 'What is needed for our first consultation?',
    a: 'Your site dimensions or CAD/PDF floor plans, property location, timeline requirements, and any visual references or functional aspirations.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Schema.org ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Studio Nirmiti',
            url: 'https://studionirmiti.com/contact',
            telephone: '+919573023509',
            email: 'contact@studionirmiti.com',
          }),
        }}
      />

      {/* Editorial Intro — No full-screen hero */}
      <section
        style={{
          paddingTop: 'calc(var(--nav-height) + var(--space-12))',
          paddingBottom: 'var(--space-12)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          {/* Breadcrumbs */}
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
              <li style={{ color: 'var(--color-accent)' }}>Contact</li>
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
            Direct Inquiries
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
            Let&#39;s discuss your project.
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '640px',
            }}
          >
            Whether you are embarking on a custom villa, commercial workplace fit-out, or turnkey
            interior renovation, our design team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Direct Contact Panel + Interactive Form */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.35fr',
              gap: 'var(--space-12)',
              alignItems: 'start',
            }}
          >
            {/* Left: Direct Contact Panel */}
            <div>
              <div
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-8)',
                  marginBottom: 'var(--space-8)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: 'var(--text-xl)',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  Direct Studio Reach
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                  {/* Phone */}
                  <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(176, 141, 87, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent)',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-syne), sans-serif',
                          letterSpacing: '0.08em',
                          color: 'var(--color-text-muted)',
                          marginBottom: '2px',
                        }}
                      >
                        Phone & Consultations
                      </p>
                      <a
                        href="tel:+919573023509"
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                        }}
                      >
                        +91 95730 23509
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(37, 211, 102, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#25d366',
                        flexShrink: 0,
                      }}
                    >
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-syne), sans-serif',
                          letterSpacing: '0.08em',
                          color: 'var(--color-text-muted)',
                          marginBottom: '2px',
                        }}
                      >
                        WhatsApp Direct
                      </p>
                      <a
                        href="https://wa.me/919573023509?text=Hello%20Studio%20Nirmiti%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                        }}
                      >
                        Message on WhatsApp →
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(176, 141, 87, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent)',
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-syne), sans-serif',
                          letterSpacing: '0.08em',
                          color: 'var(--color-text-muted)',
                          marginBottom: '2px',
                        }}
                      >
                        Official Email
                      </p>
                      <a
                        href="mailto:contact@studionirmiti.com"
                        style={{
                          fontSize: 'var(--text-base)',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                        }}
                      >
                        contact@studionirmiti.com
                      </a>
                    </div>
                  </div>

                  {/* Service Territory */}
                  <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(176, 141, 87, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent)',
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-syne), sans-serif',
                          letterSpacing: '0.08em',
                          color: 'var(--color-text-muted)',
                          marginBottom: '2px',
                        }}
                      >
                        Service Territory
                      </p>
                      <p
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 'var(--leading-normal)',
                        }}
                      >
                        Hyderabad, Bengaluru, and Pan-India for select bespoke turnkey projects.
                      </p>
                    </div>
                  </div>

                  {/* Studio Hours */}
                  <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(176, 141, 87, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent)',
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={18} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-syne), sans-serif',
                          letterSpacing: '0.08em',
                          color: 'var(--color-text-muted)',
                          marginBottom: '2px',
                        }}
                      >
                        Studio Hours
                      </p>
                      <p
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 'var(--leading-normal)',
                        }}
                      >
                        Monday – Saturday: 9:30 AM – 7:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Expectations */}
              <div
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 'var(--text-sm)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: 'var(--space-2)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Consultation Expectations
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  Upon submitting your details, our team conducts an initial zoning review of your
                  floor plans before scheduling a 30-minute discovery session with founder Kushal
                  Kumar Pendekatla.
                </p>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ Block */}
      <section className="section theme-cream">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
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
              Frequently Asked Questions
            </span>
            <h2 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: 'var(--text-2xl)' }}>
              Working with Studio Nirmiti
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'var(--space-6)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-syne), sans-serif',
                    fontSize: 'var(--text-base)',
                    fontWeight: 600,
                    marginBottom: 'var(--space-2)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
