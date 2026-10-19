import styles from './ClientTestimonials.module.css';

const testimonials = [
  {
    category: 'Residential Villa',
    quote:
      'The finished villa matched the 3D walkthrough with millimeter precision. Outstanding travertine hearth and bespoke oak joinery.',
    name: 'Rajesh & Malini Varma',
    role: 'Jubilee Hills Villa',
  },
  {
    category: 'Penthouse Interiors',
    quote:
      'Seamless turnkey execution from structural reconfiguration to Italian marble detailing. Uncompromising design clarity.',
    name: 'Dr. Arvind & Sunita Rao',
    role: 'Skyline Residence',
  },
  {
    category: 'Commercial HQ',
    quote:
      'Handed over our 14,500 sq.ft headquarters in 75 days. Precision acoustic zoning and lighting noticeably elevated team focus.',
    name: 'Vikram Sundaram',
    role: 'Aura Tech Labs',
  },
  {
    category: 'Hospitality Resort',
    quote:
      'Stepped hillside pavilions preserved our century-old trees while crafting a world-class resort atmosphere. Exemplary craft.',
    name: 'Anita Hegde',
    role: 'Sereno Hospitality',
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
              <span className={styles.categoryBadge}>{item.category}</span>
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
