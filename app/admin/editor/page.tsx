'use client';

import VisualInlineEditor from '@/components/admin/VisualInlineEditor';

export default function VisualEditorStandalonePage() {
  return <VisualInlineEditor embedded={false} initialRoute="/" />;
}
