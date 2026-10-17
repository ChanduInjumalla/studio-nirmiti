import styles from './WhyStudioNirmiti.module.css';

const trustPillars = [
  {
    num: '01',
    title: 'Tailored Planning',
    desc: 'Every layout is designed around real circulation routines, daylight orientation, and specific family or business requirements — never generic templates.',
  },
  {
    num: '02',
    title: 'Visualization-First',
    desc: 'Photorealistic 3D architectural renders, material simulations, and sun studies resolve spatial decisions before concrete is poured or carpentry starts.',
  },
  {
    num: '03',
    title: 'Coordinated Execution',
    desc: 'Single-source responsibility aligning civil contracting, MEP services, bespoke millwork, and lighting under a unified architectural master schedule.',
  },
  {
    num: '04',
    title: 'Transparent Supervision',
    desc: 'Direct architect-led on-site quality audits, milestone milestone sign-offs, and clear communication ensuring what was approved in render is exactly what gets built.',
  },
];

export default function WhyStudioNirmiti() {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="why-nirmiti-title">
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>The Studio Standard</span>
          <h2 id="why-nirmiti-title" className={styles.title}>
            Why choose Studio Nirmiti.
          </h2>
          <p className={styles.subtitle}>
            An integrated practice where architectural rigour, interior finesse, and reliable execution
            operate as one cohesive discipline.
          </p>
        </div>

        <div className={styles.grid}>
          {trustPillars.map((pillar) => (
            <div key={pillar.num} className={styles.card}>
              <span className={styles.cardBadge}>Pillar {pillar.num}</span>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardBody}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
