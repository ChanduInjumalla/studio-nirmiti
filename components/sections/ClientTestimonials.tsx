import styles from './ClientTestimonials.module.css';

const testimonials = [
  {
    quote:
      'What impressed us most was how accurately the finished villa matched the 3D walkthroughs shown during planning. The travertine hearth and custom oak millwork were executed without a single deviation.',
    name: 'Rajesh & Malini Varma',
    role: 'Homeowners, Jubilee Hills Villa',
  },
  {
    quote:
      'Studio Nirmiti handed over our 14,500 sq.ft headquarters in 75 days flat. The acoustic zoning and lighting have genuinely elevated daily team productivity. Exceptional architectural rigor.',
    name: 'Vikram Sundaram',
    role: 'Managing Director, Aura Tech Labs',
  },
  {
    quote:
      'Designing on a sensitive hill slope in Coorg required deep respect for topography. Their stepped pavilion solution preserved our century-old trees while delivering a world-class resort experience.',
    name: 'Anita Hegde',
    role: 'Co-Founder, Sereno Hospitality',
  },
];

export default function ClientTestimonials() {
  return (
    <section className={styles.sectionWrapper} aria-labelledby="testimonials-title">
      <div className="container">
        <div className={styles.headerArea}>
          <span className={styles.eyebrow}>Client Voices</span>
          <h2 id="testimonials-title" className={styles.title}>
            Enduring trust through crafted results.
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.authorArea}>
                <p className={styles.authorName}>{item.name}</p>
                <p className={styles.authorRole}>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
