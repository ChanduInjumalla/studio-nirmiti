import type { Metadata } from 'next';
import Link from 'next/link';
import ProcessRibbon from '@/components/sections/ProcessRibbon';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Our Architecture & Execution Process | Studio Nirmiti',
  description:
    'A transparent seven-stage architectural delivery model: from initial brief and 3D visualization through precision civil build to turnkey handover.',
  alternates: {
    canonical: '/process',
  },
};

const processDetails = [
  {
    step: '01',
    title: 'Discovery & Client Brief',
    subtitle: 'Understanding living rituals and structural parameters',
    desc: 'Every project begins with a structured interview exploring your aesthetic aspirations, space utilization requirements, timeline constraints, and investment budget. We evaluate orientation, wind, and local municipal bylaws.',
    deliverables: ['Design brief sign-off', 'Zoning & regulatory feasibility', 'Initial budget framework'],
  },
  {
    step: '02',
    title: 'Concept & Spatial Planning',
    subtitle: 'Floor plans, functional flow, and volumetric zoning',
    desc: 'We explore alternative floor plan layouts, circulation pathways, and room proportions. Daylight studies ensure primary living zones harvest optimal natural illumination while maintaining acoustic privacy.',
    deliverables: ['2D architectural floor plans', 'Furniture placement layouts', 'Structural grid alignment'],
  },
  {
    step: '03',
    title: 'Photorealistic 3D Visualization',
    subtitle: 'Eliminating guesswork before a single brick is laid',
    desc: 'Our in-house 3D CGI studio creates true-to-scale virtual models. We simulate real lighting angles, ceiling coves, and physical materials so you experience your space in photorealistic detail before construction.',
    deliverables: ['High-resolution 3D renders', 'Daylight & twilight lighting studies', 'Virtual walkthrough flythroughs'],
  },
  {
    step: '04',
    title: 'Material Selection & Swatches',
    subtitle: 'Tangible tactile verification and joinery specs',
    desc: 'Renderings are matched with physical material boards: rough-hewn travertine, Italian quartz, smoked oak veneers, metal coatings, and upholstery textiles reviewed and approved together.',
    deliverables: ['Physical material sample boards', 'Finish specifications schedule', 'Hardware & fixture selections'],
  },
  {
    step: '05',
    title: 'Precision Turnkey Execution',
    subtitle: 'Single-source civil, MEP, and joinery fabrication',
    desc: 'With drawings locked, our contracting and fabrication teams initiate work on-site and in our controlled millwork facilities. All civil, electrical, plumbing, HVAC, and carpentry operate under a master schedule.',
    deliverables: ['Gantt milestone schedule', 'Daily contractor coordination', 'Procurement & vendor management'],
  },
  {
    step: '06',
    title: 'Architect Supervision & Quality Audits',
    subtitle: 'Zero drift between 3D design and on-site reality',
    desc: 'Our design leadership conducts regular milestone site audits. We inspect structural alignment, joinery tolerances, tile grouting, and electrical switch placements to maintain architectural perfection.',
    deliverables: ['Weekly photographic progress reports', 'Quality tolerance audit logs', 'Snag list resolutions'],
  },
  {
    step: '07',
    title: 'Snag Clearance & Handover',
    subtitle: 'Move-in ready spaces with complete warranties',
    desc: 'Before handing over keys, we perform a deep clean, test all electrical and plumbing systems, and provide full as-built documentation alongside warranty binders for all installed equipment and joinery.',
    deliverables: ['Final keys & handover sign-off', 'Comprehensive warranty manual', 'As-built electrical & plumbing layouts'],
  },
];

export default function ProcessPage() {
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
              <li style={{ color: 'var(--color-accent)' }}>Process</li>
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
            Methodology & Delivery
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
            Our Seven-Stage Delivery Process
          </h1>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '680px',
            }}
          >
            A disciplined, predictable journey from initial concept to turnkey handover.
            Our methodology protects your investment, eliminates costly on-site change orders,
            and guarantees that what was approved in render is what gets built.
          </p>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <ProcessRibbon />

      {/* Detailed Stage-by-Stage Breakdown */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            {processDetails.map((stage) => (
              <div
                key={stage.step}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-8)',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 'var(--space-8)',
                  alignItems: 'start',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.03)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    lineHeight: 1,
                  }}
                >
                  {stage.step}
                </div>

                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'var(--text-2xl)',
                      color: 'var(--color-text-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    {stage.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-syne), sans-serif',
                      fontSize: 'var(--text-xs)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-text-muted)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    {stage.subtitle}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 'var(--leading-relaxed)',
                      marginBottom: 'var(--space-6)',
                    }}
                  >
                    {stage.desc}
                  </p>

                  <div
                    style={{
                      background: 'var(--color-bg-secondary)',
                      borderRadius: 'var(--radius-sm)',
                      padding: 'var(--space-4) var(--space-6)',
                      borderLeft: '3px solid var(--color-accent)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-syne), sans-serif',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: 'var(--color-text-primary)',
                        marginBottom: '6px',
                      }}
                    >
                      Key Stage Deliverables
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                      {stage.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner
        eyebrow="Initiate Stage 01"
        title="Ready to begin your architectural discovery?"
        description="Book an initial consultation to review your property dimensions, aspirations, and budget."
      />
    </>
  );
}
