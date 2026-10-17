import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visual Editor | Studio Nirmiti',
  robots: { index: false, follow: false },
};

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  // Full-screen layout — no container, no nav padding
  return <>{children}</>;
}
