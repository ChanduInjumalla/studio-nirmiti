'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import type { NavigationItem } from '@/types';
import styles from './Navbar.module.css';

interface NavbarProps {
  navigation: NavigationItem[];
  phone: string;
  businessName: string;
}

export default function Navbar({ navigation, phone, businessName }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isTransparent ? styles.transparent : ''} ${!isHome && !scrolled ? styles.innerPageHeader : ''}`}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label={`${businessName} — Home`}>
          <span className={styles.logoMark}>N</span>
          <div className={styles.logoText}>
            <span className={styles.logoName}>STUDIO NIRMITI</span>
            <span className={styles.logoTagline}>Architecture · Interiors</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navigation.map((item) => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href || pathname.startsWith(item.href + '/') ? styles.active : ''}`}
              >
                {item.label}
                {item.children && <ChevronDown size={13} className={styles.chevron} />}
              </Link>

              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (() => {
                const isMegaMenu = item.children.some((child) => Boolean(child.children && child.children.length > 0));
                const isMultiColumn = !isMegaMenu && item.children.length > 6;

                return (
                  <div
                    className={styles.dropdown}
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {isMegaMenu ? (
                      /* Multi-category Mega Menu (e.g. Services) */
                      <div className={styles.dropdownInnerMega}>
                        {item.children.map((group) => (
                          <div key={group.label} className={styles.dropdownGroup}>
                            {group.children ? (
                              <>
                                <span className={styles.dropdownLabel}>{group.label}</span>
                                {group.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={`${styles.dropdownLink} ${pathname === child.href ? styles.active : ''}`}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </>
                            ) : (
                              <Link
                                href={group.href}
                                className={`${styles.dropdownLink} ${pathname === group.href ? styles.active : ''}`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {group.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Straight Vertical Dropdown (e.g. Projects, Insights) — max 6 per column */
                      <div className={styles.dropdownInnerSimple}>
                        <div className={isMultiColumn ? styles.dropdownListMulti : styles.dropdownListSingle}>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`${styles.simpleDropdownLink} ${pathname === child.href ? styles.active : ''}`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className={styles.simpleDropdownText}>{child.label}</span>
                              <span className={styles.simpleDropdownIndicator} aria-hidden="true" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.desktopActions}>
          <a href={`tel:+91${phone}`} className={styles.phoneLink} aria-label="Call Studio Nirmiti">
            <Phone size={14} />
            <span>+91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}</span>
          </a>
          <Link href="/book-consultation" className={`btn btn-primary ${styles.ctaBtn}`}>
            Start a Project
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div key={item.label} className={styles.mobileNavGroup}>
              <Link href={item.href} className={styles.mobileNavLink}>
                {item.label}
              </Link>
              {item.children && (
                <div className={styles.mobileSubLinks}>
                  {item.children.map((group) =>
                    group.children ? (
                      group.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={styles.mobileSubLink}
                        >
                          {child.label}
                        </Link>
                      ))
                    ) : (
                      <Link
                        key={group.href}
                        href={group.href}
                        className={styles.mobileSubLink}
                      >
                        {group.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          <div className={styles.mobileDivider} />
          <a href={`tel:+91${phone}`} className={styles.mobilePhone}>
            <Phone size={15} />
            <span>+91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}</span>
          </a>
          <Link href="/book-consultation" className={`btn btn-primary ${styles.mobileCta}`}>
            Start a Project
            <ArrowRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}
