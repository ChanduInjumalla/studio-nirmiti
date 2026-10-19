import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Studio Nirmiti',
  description:
    'Answers to common questions regarding architectural fees, turnkey interior timelines, 3D visualization, materials, and warranty guarantees.',
  alternates: {
    canonical: '/faq',
  },
};

const faqCategories = [
  {
    category: 'Engagement & Pricing',
    items: [
      {
        q: 'How does Studio Nirmiti structure project fees?',
        a: 'We offer clear milestone-based fee structures. For architectural design and planning, fees are calculated either per square foot or as a percentage of construction value. For turnkey interiors and execution, we provide transparent line-item bills of quantities (BOQ) with fixed material specifications.',
      },
      {
        q: 'Are there hidden charges or unexpected price hikes during execution?',
        a: 'No. Because we lock materials, finishes, and 3D specifications before groundbreaking, our turnkey proposals have zero cost surprises unless you deliberately expand the scope of work.',
      },
    ],
  },
  {
    category: 'Timelines & Delivery',
    items: [
      {
        q: 'How long does an architectural villa design phase take?',
        a: 'Typically 6 to 10 weeks from initial brief to full construction-ready working drawings, 3D CGI visuals, and structural engineer coordination.',
      },
      {
        q: 'What is the average timeline for complete turnkey interior fit-outs?',
        a: 'A 4,000–6,000 sq.ft luxury residence typically completes in 4 to 6 months from civil handover. Commercial workplace fit-outs can be fast-tracked to 60–90 days depending on lease schedules.',
      },
    ],
  },
  {
    category: '3D Visualization & CGI',
    items: [
      {
        q: 'Do we get to see realistic 3D visuals before construction starts?',
        a: 'Yes. Pre-visualization is one of Studio Nirmiti’s core pillars. You will review true-to-scale photorealistic renders with exact lighting simulation and physical material textures before executing.',
      },
      {
        q: 'Can we request changes after reviewing the 3D renders?',
        a: 'Absolutely. Virtual space is the most cost-effective stage to iterate. We refine joinery profiles, paint tones, and furniture arrangements until you are completely satisfied.',
      },
    ],
  },
  {
    category: 'Turnkey Execution & Supervision',
    items: [
      {
        q: 'Can Studio Nirmiti handle execution if we already have an architect?',
        a: 'Yes. We frequently act as the specialized interior execution and turnkey build partner for clients who already have structural shell drawings.',
      },
      {
        q: 'What warranties are provided upon handover?',
        a: 'We provide comprehensive 5 to 10-year warranties on modular cabinetry and hardware, alongside manufacturer warranties for all electrical fittings, lighting drivers, and surface claddings.',
      },
    ],
  },
];

export default function FaqPage() {
  const schemaFaqs = faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  );

  return (
    <>
      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: schemaFaqs,
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
              <li style={{ color: 'var(--color-accent)' }}>FAQ</li>
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
            Client Knowledge Base
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
            Frequently Asked Questions
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '680px',
            }}
          >
            Transparent answers regarding design fees, milestone schedules, pre-construction
            3D visualization, material selection, and turnkey handover warranties.
          </p>
        </div>
      </section>

      {/* Categorized FAQs */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            {faqCategories.map((category) => (
              <div key={category.category}>
                <h2
                  style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: 'var(--text-2xl)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-6)',
                    paddingBottom: 'var(--space-3)',
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  {category.category}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {category.items.map((item, idx) => (
                    <details
                      key={idx}
                      style={{
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: 'clamp(1rem, 2.8vw, 1.5rem)',
                        cursor: 'pointer',
                      }}
                    >
                      <summary
                        style={{
                          fontFamily: 'var(--font-syne), sans-serif',
                          fontSize: 'var(--text-base)',
                          fontWeight: 600,
                          color: 'var(--color-text-primary)',
                          outline: 'none',
                          listStyle: 'none',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          minHeight: '44px',
                          gap: '12px',
                        }}
                      >
                        <span>{item.q}</span>
                        <span style={{ color: 'var(--color-accent)', fontSize: '18px' }}>+</span>
                      </summary>

                      <p
                        style={{
                          marginTop: 'var(--space-4)',
                          fontSize: 'var(--text-sm)',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 'var(--leading-relaxed)',
                          cursor: 'default',
                        }}
                      >
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="section theme-cream">
        <div className="container" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: 'var(--text-2xl)',
              marginBottom: 'var(--space-3)',
            }}
          >
            Have a Specific Project Query?
          </h2>
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--space-6)',
            }}
          >
            Every property has unique topography, regulations, and program desires.
            Our team is available for direct calls or WhatsApp messages.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Reach Studio Team →
            </Link>
            <a href="tel:+919573023509" className="btn btn-outline">
              Call +91 95730 23509
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner />
    </>
  );
}
