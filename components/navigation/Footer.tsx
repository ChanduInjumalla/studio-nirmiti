'use client';

import Link from 'next/link';
import Image from 'next/image';
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
              <div className={styles.logoMarkContainer}>
                <Image
                  src="/images/logo.png"
                  alt="Studio Nirmiti Logo"
                  width={38}
                  height={38}
                  className={styles.logoImg}
                />
              </div>
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
              {column.children?.map((item) => {
                const isAdmin = item.href === '/admin' || item.label.toLowerCase().includes('admin');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.navLink} ${isAdmin ? styles.desktopOnly : ''}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}

          {/* Contact Column */}
          <div className={styles.navColumn}>
            <h4 className={styles.navColumnTitle}>Contact & Connect</h4>
            <a
              href={`tel:+91${phone}`}
              className={styles.contactLink}
            >
              <Phone size={14} />
              <span>+91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}</span>
            </a>
            <a
              href={`https://wa.me/91${phone}?text=Hello%20Studio%20Nirmiti%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
              style={{ color: '#25d366' }}
            >
              <span>💬 WhatsApp Consultation</span>
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
            <Link
              href="/admin"
              className={styles.desktopOnlyAdminLink}
              title="Studio Nirmiti Admin Dashboard & Site Editor (Desktop Only)"
            >
              🔒 Admin Portal & Live Editor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
