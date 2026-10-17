'use client';

import { useState, useEffect } from 'react';
import VisualInlineEditor from '@/components/admin/VisualInlineEditor';
import Link from 'next/link';

export default function VisualEditorStandalonePage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const auth = localStorage.getItem('studio_admin_auth') || sessionStorage.getItem('studio_admin_auth');
      setIsAuthenticated(auth === 'true');
    } catch {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight: '100vh', background: '#141716', color: '#e5e2db', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading editor...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', background: '#141716', color: '#e5e2db', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: '#1c201e', border: '1px solid rgba(176,141,87,0.35)', borderRadius: '8px', padding: '32px', maxWidth: '420px', textAlign: 'center', width: '100%' }}>
          <h2 style={{ fontFamily: 'var(--font-cinzel), serif', color: '#ffffff', marginBottom: '8px' }}>Portal Authentication Required</h2>
          <p style={{ fontSize: '13px', color: '#a09d95', marginBottom: '24px' }}>Please sign in through the Admin Portal to access the Visual Inline Editor.</p>
          <Link
            href="/admin"
            style={{
              display: 'block',
              width: '100%',
              padding: '12px',
              background: 'var(--color-accent, #b08d57)',
              color: '#141716',
              fontWeight: 700,
              borderRadius: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              fontSize: '12px',
            }}
          >
            Go to Admin Login →
          </Link>
        </div>
      </div>
    );
  }

  return <VisualInlineEditor embedded={false} initialRoute="/" />;
}
