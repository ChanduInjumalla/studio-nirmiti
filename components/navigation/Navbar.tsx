'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, ArrowRight, Menu, X, ChevronDown, User } from 'lucide-react';
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

  const [expandedMobileGroups, setExpandedMobileGroups] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('menu-locked');
    } else {
      document.body.classList.remove('menu-locked');
    }
    return () => {
      document.body.classList.remove('menu-locked');
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setExpandedMobileGroups({});
  }, [pathname]);

  const toggleMobileGroup = (label: string) => {
    setExpandedMobileGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

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
          <div className={styles.logoMarkContainer}>
            <Image
              src="/images/logo.png"
              alt="Studio Nirmiti Logo"
              width={38}
              height={38}
              className={styles.logoImg}
              priority
            />
          </div>
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
          <Link
            href="/profile"
            className={styles.profileBtn}
            title="Client Profile & Studio Access"
            aria-label="Open Client Profile"
          >
            <User size={18} />
          </Link>
          <a href={`tel:+91${phone}`} className={styles.phoneLink} aria-label="Call Studio Nirmiti">
            <Phone size={14} />
            <span>+91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}</span>
          </a>
          <Link href="/book-consultation" className={`btn btn-primary ${styles.ctaBtn}`}>
            Start a Project
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className={styles.mobileDrawerBackdrop} onClick={() => setMobileOpen(false)}>
          <div
            className={styles.mobileDrawer}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Drawer Header */}
            <div className={styles.mobileDrawerHeader}>
              <div className={styles.drawerLogoRow}>
                <Image
                  src="/images/logo.png"
                  alt="Studio Nirmiti"
                  width={30}
                  height={30}
                  className={styles.drawerLogoImg}
                />
                <span className={styles.drawerLogoText}>STUDIO NIRMITI</span>
              </div>
              <button
                type="button"
                className={styles.drawerCloseBtn}
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation List with Accordions */}
            <nav className={styles.mobileNavList} aria-label="Mobile main navigation">
              {navigation.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isExpanded = Boolean(expandedMobileGroups[item.label]);

                return (
                  <div key={item.label} className={styles.mobileNavGroup}>
                    {hasChildren ? (
                      <div className={styles.accordionHeader}>
                        <Link
                          href={item.href}
                          className={styles.accordionTitleLink}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          className={`${styles.accordionToggleBtn} ${isExpanded ? styles.accordionOpen : ''}`}
                          onClick={() => toggleMobileGroup(item.label)}
                          aria-expanded={isExpanded}
                          aria-label={`Toggle ${item.label} sub-menu`}
                        >
                          <ChevronDown size={18} />
                        </button>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={styles.mobileNavLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Accordion Sub-links */}
                    {hasChildren && isExpanded && (
                      <div className={styles.mobileSubLinks}>
                        {item.children?.map((group) =>
                          group.children ? (
                            <div key={group.label} className={styles.mobileSubGroup}>
                              <span className={styles.mobileGroupHeader}>{group.label}</span>
                              {group.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={styles.mobileSubLink}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <Link
                              key={group.href}
                              href={group.href}
                              className={styles.mobileSubLink}
                              onClick={() => setMobileOpen(false)}
                            >
                              {group.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Quick Action Footer in Drawer */}
            <div className={styles.mobileDrawerFooter}>
              <div className={styles.mobileContactRow}>
                <a
                  href={`tel:+91${phone}`}
                  className={styles.mobileContactButton}
                  aria-label="Direct phone call"
                >
                  <Phone size={15} />
                  <span>Call +91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}</span>
                </a>
                <a
                  href={`https://wa.me/91${phone}?text=Hello%20Studio%20Nirmiti%2C%20I%20would%20like%20to%20consult%20about%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mobileWhatsappButton}
                  aria-label="Chat on WhatsApp"
                >
                  <span>💬 WhatsApp</span>
                </a>
              </div>

              <Link
                href="/book-consultation"
                className={`btn btn-primary ${styles.mobileCtaBtn}`}
                onClick={() => setMobileOpen(false)}
              >
                <span>Start a Project</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
