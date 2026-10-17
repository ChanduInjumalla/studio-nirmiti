'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import type { NavigationItem } from '@/types';
import styles from './Footer.module.css';

interface FooterProps {
  navigation: NavigationItem[];
  businessName: string;
  phone: string;
}

export default function Footer({ navigation, businessName, phone }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Top: Brand + CTA */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <span className={styles.logoMark}>N</span>
              <span className={styles.logoName}>STUDIO NIRMITI</span>
            </div>
            <p className={styles.brandDesc}>
              Architecture, interior design and turnkey execution for spaces that endure.
            </p>
          </div>
          <div className={styles.ctaBlock}>
            <p className={styles.ctaText}>Ready to start your project?</p>
            <Link href="/book-consultation" className={`btn btn-accent ${styles.ctaBtn}`}>
              Book a Consultation
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Navigation Columns */}
        <div className={styles.navGrid}>
          {navigation.map((column) => (
            <div key={column.label} className={styles.navColumn}>
              <h4 className={styles.navColumnTitle}>{column.label}</h4>
              {column.children?.map((item) => (
                <Link key={item.href} href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Contact Column */}
          <div className={styles.navColumn}>
            <h4 className={styles.navColumnTitle}>Contact</h4>
            <a
              href={`tel:+91${phone}`}
              className={styles.contactLink}
            >
              <Phone size={14} />
              <span>+91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}</span>
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {businessName}. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
