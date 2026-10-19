import type { Metadata } from 'next';
import AdminDesktopGatekeeper from '@/components/admin/AdminDesktopGatekeeper';

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminDesktopGatekeeper>{children}</AdminDesktopGatekeeper>;
}
