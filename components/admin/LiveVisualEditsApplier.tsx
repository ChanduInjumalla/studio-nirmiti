'use client';

import { useEffect } from 'react';

export default function LiveVisualEditsApplier() {
  useEffect(() => {
    const applyEdits = () => {
      try {
        const saved = localStorage.getItem('studio_visual_edits');
        if (!saved) return;
        const edits = JSON.parse(saved);
        if (!Array.isArray(edits)) return;

        edits.forEach((edit) => {
          if (!edit.selector) return;
          try {
            const elements = document.querySelectorAll(edit.selector);
            elements.forEach((el) => {
              if (edit.property === 'textContent') {
                if (el.textContent !== edit.newValue) {
                  el.textContent = edit.newValue;
                }
              } else if (edit.property === 'src') {
                const img = el as HTMLImageElement;
                if (img.src !== undefined && img.src !== edit.newValue) {
                  img.src = edit.newValue;
                }
              } else if (edit.property === 'style') {
                const colonIdx = edit.newValue.indexOf(':');
                if (colonIdx > 0) {
                  const prop = edit.newValue.slice(0, colonIdx);
                  const val = edit.newValue.slice(colonIdx + 1);
                  (el as HTMLElement).style.setProperty(prop, val);
                }
              } else if (edit.property === 'visibility') {
                (el as HTMLElement).style.display = edit.newValue;
              }
            });
          } catch {
            // Ignore individual query selector exceptions
          }
        });
      } catch {
        // Ignore localStorage JSON parse error
      }
    };

    // Apply on initial mount
    applyEdits();

    // Listen for storage events (cross-tab / iframe sync)
    window.addEventListener('storage', applyEdits);
    window.addEventListener('studio-visual-edits-updated', applyEdits);

    // Watch for dynamic DOM rehydration
    const observer = new MutationObserver(() => {
      applyEdits();
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('storage', applyEdits);
      window.removeEventListener('studio-visual-edits-updated', applyEdits);
      observer.disconnect();
    };
  }, []);

  return null;
}
