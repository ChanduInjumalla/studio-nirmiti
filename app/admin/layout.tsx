import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ paddingTop: 'calc(var(--nav-height) + var(--space-8))' }}>
      <div className="container">
        {children}
      </div>
    </div>
  );
}
