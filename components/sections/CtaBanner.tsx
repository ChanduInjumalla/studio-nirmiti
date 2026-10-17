import Link from 'next/link';
import styles from './CtaBanner.module.css';

interface CtaBannerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  phone?: string;
}

export default function CtaBanner({
  eyebrow = 'Start Your Journey',
  title = "Let's shape your space together.",
  description = 'Book a private architectural consultation to discuss your land, floor plans, timeline, and interior aspirations with our design leadership.',
  primaryLabel = 'Book a Consultation →',
  primaryHref = '/book-consultation',
  phone = '+91 9573023509',
}: CtaBannerProps) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  return (
    <section className={styles.sectionWrapper} aria-labelledby="cta-banner-title">
      <div className="container">
        <div className={styles.innerContent}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id="cta-banner-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>{description}</p>

          <div className={styles.buttonGroup}>
            <Link href={primaryHref} className={styles.primaryButton}>
              {primaryLabel}
            </Link>

            <a
              href={`https://wa.me/${cleanPhone}?text=Hello%20Studio%20Nirmiti%2C%20I%20would%20like%20to%20discuss%20a%20new%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              WhatsApp Us
            </a>
          </div>

          <p className={styles.phoneNotice}>
            Or speak directly with our team at{' '}
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className={styles.phoneLink}>
              {phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
