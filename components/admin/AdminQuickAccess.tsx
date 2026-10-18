'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Shield, Edit3, LayoutDashboard, X, Minus, Key } from 'lucide-react';
import styles from './AdminQuickAccess.module.css';

export default function AdminQuickAccess() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedMin = localStorage.getItem('studio_admin_widget_min');
      if (savedMin === 'true') setIsMinimized(true);
    } catch {
      // ignore
    }

    // Global keyboard shortcut: Ctrl+Shift+A or Cmd+Shift+A
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        router.push('/admin');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  // Don't render inside the admin routes or inside the editor iframe preview
  if (!mounted) return null;
  if (pathname?.startsWith('/admin')) return null;
  if (typeof window !== 'undefined' && window.location.search.includes('_editor=true')) {
    return null;
  }

  const toggleMinimize = (min: boolean) => {
    setIsMinimized(min);
    try {
      localStorage.setItem('studio_admin_widget_min', String(min));
    } catch {
      // ignore
    }
  };

  return (
    <div className={styles.quickAccessContainer}>
      {/* Minimized Icon Bubble */}
      {isMinimized ? (
        <button
          type="button"
          className={styles.minimizedCircle}
          onClick={() => toggleMinimize(false)}
          title="Open Studio Nirmiti Admin & Visual Editor"
          aria-label="Open Admin Quick Access"
        >
          <Key size={18} />
        </button>
      ) : (
        <>
          {/* Popover Menu */}
          {isOpen && (
            <div className={styles.popover} role="dialog" aria-label="Admin Navigation">
              <div className={styles.popoverHeader}>
                <div className={styles.popoverTitleBlock}>
                  <Shield size={15} color="#b08d57" />
                  <span className={styles.popoverTitle}>Studio Nirmiti Admin</span>
                </div>
                <div className={styles.popoverHeaderActions}>
                  <button
                    type="button"
                    className={styles.headerActionBtn}
                    onClick={() => toggleMinimize(true)}
                    title="Minimize to icon"
                    aria-label="Minimize"
                  >
                    <Minus size={14} />
                  </button>
                  <button
                    type="button"
                    className={styles.headerActionBtn}
                    onClick={() => setIsOpen(false)}
                    title="Close"
                    aria-label="Close"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              <div className={styles.popoverLinks}>
                <Link
                  href="/admin"
                  className={styles.popoverLink}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={styles.linkIcon}>
                    <LayoutDashboard size={16} />
                  </div>
                  <div className={styles.linkContent}>
                    <span className={styles.linkLabel}>Admin Dashboard</span>
                    <span className={styles.linkDesc}>Analytics, leads inbox & management</span>
                  </div>
                </Link>

                <Link
                  href="/admin/editor"
                  className={styles.popoverLink}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={styles.linkIcon}>
                    <Edit3 size={16} />
                  </div>
                  <div className={styles.linkContent}>
                    <span className={styles.linkLabel}>Live Website Clone Editor</span>
                    <span className={styles.linkDesc}>Click, inspect & edit text/photos live</span>
                  </div>
                </Link>
              </div>

              <div className={styles.popoverFooter}>
                <span>Quick Access</span>
                <span className={styles.shortcutBadge}>Ctrl + Shift + A</span>
              </div>
            </div>
          )}

          {/* Floating Pill Trigger */}
          <button
            type="button"
            className={styles.floatingTrigger}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            title="Studio Nirmiti Admin & Visual Editor (Ctrl+Shift+A)"
          >
            <span className={styles.triggerIcon}>
              <Shield size={14} />
            </span>
            <span className={styles.triggerText}>Admin Portal</span>
            <span className={styles.triggerBadge}>Live</span>
          </button>
        </>
      )}
    </div>
  );
}
