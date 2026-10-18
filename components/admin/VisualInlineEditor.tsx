'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Monitor,
  Tablet,
  Smartphone,
  MousePointer2,
  Type,
  Image as ImageIcon,
  Undo2,
  Redo2,
  Save,
  Layers,
  X,
  Upload,
  ExternalLink,
  Maximize2,
  Minimize2,
  Trash2,
  Eye,
  EyeOff,
  Download,
  RotateCcw,
  Palette,
  Code2,
  Check,
  ArrowRight,
} from 'lucide-react';
import styles from './VisualInlineEditor.module.css';

export interface EditRecord {
  selector: string;
  property: 'textContent' | 'src' | 'style' | 'visibility';
  oldValue: string;
  newValue: string;
  timestamp: number;
}

export interface SelectedElement {
  tagName: string;
  className: string;
  id: string;
  textContent: string;
  src?: string;
  alt?: string;
  href?: string;
  linkText?: string;
  computedStyles: {
    fontSize: string;
    fontFamily: string;
    fontWeight: string;
    color: string;
    backgroundColor: string;
    lineHeight: string;
    letterSpacing: string;
    textAlign: string;
    padding: string;
    margin: string;
  };
  rect: { top: number; left: number; width: number; height: number };
  selector: string;
  isImage: boolean;
  isText: boolean;
  isHidden?: boolean;
}

interface ViewportPreset {
  label: string;
  width: string;
  icon: React.ReactNode;
}

const viewportPresets: ViewportPreset[] = [
  { label: 'Desktop', width: '100%', icon: <Monitor size={14} /> },
  { label: 'Laptop', width: '1280px', icon: <Monitor size={12} /> },
  { label: 'Tablet', width: '768px', icon: <Tablet size={14} /> },
  { label: 'Mobile', width: '390px', icon: <Smartphone size={14} /> },
];

export const availableRoutesGrouped = [
  {
    category: 'Core Pages',
    routes: [
      { label: 'Homepage (/)', path: '/' },
      { label: 'About Studio (/about)', path: '/about' },
      { label: 'Why Studio Nirmiti (/why-studio-nirmiti)', path: '/why-studio-nirmiti' },
      { label: 'Seven-Stage Process (/process)', path: '/process' },
      { label: 'Book Consultation (/book-consultation)', path: '/book-consultation' },
      { label: 'Contact Us (/contact)', path: '/contact' },
      { label: 'FAQ (/faq)', path: '/faq' },
    ],
  },
  {
    category: 'Architecture & Execution',
    routes: [
      { label: 'Architectural Design (/services/architectural-design)', path: '/services/architectural-design' },
      { label: 'Interior Design (/services/interior-design)', path: '/services/interior-design' },
      { label: 'Turnkey Interiors (/services/turnkey-interiors)', path: '/services/turnkey-interiors' },
      { label: 'Execution Works (/services/execution-works)', path: '/services/execution-works' },
      { label: 'Exterior & Facade (/services/exterior-design)', path: '/services/exterior-design' },
      { label: 'Facade Design (/services/facade-design)', path: '/services/facade-design' },
      { label: 'Space Planning (/services/space-planning)', path: '/services/space-planning' },
      { label: 'Project Supervision (/services/project-supervision)', path: '/services/project-supervision' },
      { label: 'Renovation & Remodeling (/services/renovation-remodeling)', path: '/services/renovation-remodeling' },
    ],
  },
  {
    category: 'Specialised Interior Craft',
    routes: [
      { label: 'Modular Kitchens (/services/modular-kitchens)', path: '/services/modular-kitchens' },
      { label: 'Wardrobes & Storage (/services/wardrobes-storage)', path: '/services/wardrobes-storage' },
      { label: 'Furniture Selection (/services/furniture-selection)', path: '/services/furniture-selection' },
      { label: 'Custom Furniture (/services/custom-furniture)', path: '/services/custom-furniture' },
      { label: 'Lighting & False Ceiling (/services/lighting-false-ceiling)', path: '/services/lighting-false-ceiling' },
      { label: 'Material & Finishes (/services/material-finishes)', path: '/services/material-finishes' },
      { label: '3D Visualization (/services/3d-visualization)', path: '/services/3d-visualization' },
      { label: '3D Walkthroughs (/services/3d-walkthroughs)', path: '/services/3d-walkthroughs' },
    ],
  },
  {
    category: 'Residential Spaces',
    routes: [
      { label: 'Living Room Design (/services/residential/living-room-design)', path: '/services/residential/living-room-design' },
      { label: 'Bedroom Design (/services/residential/bedroom-design)', path: '/services/residential/bedroom-design' },
      { label: 'Villa Interiors (/services/residential/villa-interiors)', path: '/services/residential/villa-interiors' },
      { label: 'Apartment Interiors (/services/residential/apartment-interiors)', path: '/services/residential/apartment-interiors' },
      { label: 'Dining Room Design (/services/residential/dining-room-design)', path: '/services/residential/dining-room-design' },
      { label: 'Pooja Room Design (/services/residential/pooja-room-design)', path: '/services/residential/pooja-room-design' },
      { label: 'Home Office & Study (/services/residential/home-office-study)', path: '/services/residential/home-office-study' },
    ],
  },
  {
    category: 'Commercial & Hospitality',
    routes: [
      { label: 'Office Interiors (/services/commercial/office-interiors)', path: '/services/commercial/office-interiors' },
      { label: 'Restaurant & Cafe (/services/commercial/restaurant-cafe-interiors)', path: '/services/commercial/restaurant-cafe-interiors' },
      { label: 'Retail Showroom (/services/commercial/retail-showroom-interiors)', path: '/services/commercial/retail-showroom-interiors' },
      { label: 'Hotel Interiors (/services/hospitality/hotel-interiors)', path: '/services/hospitality/hotel-interiors' },
      { label: 'Resort Interiors (/services/hospitality/resort-interiors)', path: '/services/hospitality/resort-interiors' },
    ],
  },
  {
    category: 'Projects Portfolio',
    routes: [
      { label: 'All Projects (/projects)', path: '/projects' },
      { label: 'Residential Portfolio (/projects/residential)', path: '/projects/residential' },
      { label: 'Commercial Portfolio (/projects/commercial)', path: '/projects/commercial' },
      { label: 'Hospitality Portfolio (/projects/hospitality)', path: '/projects/hospitality' },
    ],
  },
  {
    category: 'Insights & Legal',
    routes: [
      { label: 'Insights Overview (/insights)', path: '/insights' },
      { label: 'Architecture Insights (/insights/architecture)', path: '/insights/architecture' },
      { label: 'Interiors Insights (/insights/interiors)', path: '/insights/interiors' },
      { label: '3D Visualization Insights (/insights/3d-visualization)', path: '/insights/3d-visualization' },
      { label: 'Privacy Policy (/privacy-policy)', path: '/privacy-policy' },
      { label: 'Terms of Service (/terms)', path: '/terms' },
    ],
  },
];

const studioPresetPhotos = [
  { label: 'Residential Villa', src: '/images/project_residential_villa.jpg' },
  { label: 'Living Pavilion', src: '/images/hero_architectural_living.jpg' },
  { label: 'Modular Kitchen', src: '/images/project_modular_kitchen.jpg' },
  { label: 'Commercial Office', src: '/images/project_commercial_office.jpg' },
  { label: 'Hospitality Resort', src: '/images/project_hospitality_resort.jpg' },
  { label: 'Completed Living', src: '/images/after_completed_living.jpg' },
];

interface VisualInlineEditorProps {
  embedded?: boolean;
  initialRoute?: string;
}

export default function VisualInlineEditor({
  embedded = false,
  initialRoute = '/',
}: VisualInlineEditorProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [currentRoute, setCurrentRoute] = useState(initialRoute);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [viewportWidth, setViewportWidth] = useState('100%');
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null);
  const [editHistory, setEditHistory] = useState<EditRecord[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showSidebar, setShowSidebar] = useState(true);
  const [saveNotice, setSaveNotice] = useState('');
  const [editingText, setEditingText] = useState(false);
  const [hoveredInfo, setHoveredInfo] = useState<{ tag: string; dims: string } | null>(null);
  const [iframeSrc, setIframeSrc] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(!embedded);
  const [pendingLinkPrompt, setPendingLinkPrompt] = useState<{
    href: string;
    label: string;
    element: SelectedElement;
  } | null>(null);

  const handleNavigateToRoute = (targetRoute: string) => {
    let path = targetRoute;
    try {
      if (path.startsWith('http')) {
        const u = new URL(path);
        path = u.pathname + u.search;
      }
    } catch {
      // ignore
    }
    setCurrentRoute(path);
    setSelectedElement(null);
    setPendingLinkPrompt(null);
  };

  // Set iframe src on mount / route change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const glue = currentRoute.includes('?') ? '&' : '?';
      setIframeSrc(`${window.location.origin}${currentRoute}${glue}_editor=true&_t=${Date.now()}`);
      setIframeLoaded(false);
      setSelectedElement(null);
    }
  }, [currentRoute]);

  // Load saved edits from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('studio_visual_edits');
      if (saved) {
        const parsed = JSON.parse(saved) as EditRecord[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setEditHistory(parsed);
          setHistoryIndex(parsed.length - 1);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Inject the editing overlay script into the iframe once loaded
  const injectEditorScript = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument || !iframe.contentWindow) return;

    const doc = iframe.contentDocument;
    const win = iframe.contentWindow;

    // Inject editor CSS
    const styleId = '__visual_editor_styles';
    if (!doc.getElementById(styleId)) {
      const styleEl = doc.createElement('style');
      styleEl.id = styleId;
      styleEl.textContent = `
        .__editor-hover-outline {
          outline: 2px dashed rgba(176, 141, 87, 0.7) !important;
          outline-offset: 2px !important;
          cursor: pointer !important;
        }
        .__editor-selected-outline {
          outline: 2px solid #b08d57 !important;
          outline-offset: 2px !important;
          position: relative !important;
        }
        .__editor-selected-outline::after {
          content: attr(data-editor-tag) !important;
          position: absolute !important;
          top: -22px !important;
          left: 0 !important;
          background: #b08d57 !important;
          color: #141716 !important;
          font-size: 10px !important;
          font-family: 'SF Mono', monospace !important;
          font-weight: 700 !important;
          padding: 2px 6px !important;
          border-radius: 3px 3px 0 0 !important;
          z-index: 99999 !important;
          pointer-events: none !important;
          white-space: nowrap !important;
        }
        .__editor-editable {
          cursor: text !important;
          outline: 2px solid #4fc3f7 !important;
          outline-offset: 2px !important;
          min-height: 1em !important;
        }
        .__editor-image-hover {
          outline: 2px dashed #81c784 !important;
          outline-offset: 2px !important;
          cursor: pointer !important;
          position: relative !important;
        }
        .__editor-dim-tooltip {
          position: fixed !important;
          background: rgba(20, 23, 22, 0.95) !important;
          color: #e5e2db !important;
          font-size: 11px !important;
          font-family: 'SF Mono', monospace !important;
          padding: 4px 8px !important;
          border-radius: 4px !important;
          pointer-events: none !important;
          z-index: 99999 !important;
          border: 1px solid rgba(176, 141, 87, 0.4) !important;
          white-space: nowrap !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
        }
        [contenteditable="true"]:focus {
          outline: 2px solid #4fc3f7 !important;
          outline-offset: 2px !important;
        }
      `;
      doc.head.appendChild(styleEl);
    }

    // Dimension tooltip
    let tooltip = doc.querySelector('.__editor-dim-tooltip') as HTMLElement;
    if (!tooltip) {
      tooltip = doc.createElement('div');
      tooltip.className = '__editor-dim-tooltip';
      tooltip.style.display = 'none';
      doc.body.appendChild(tooltip);
    }

    // Helper to generate CSS selector for an element
    (win as any).__editorGetSelector = (el: Element): string => {
      if (el.id) return `#${el.id}`;
      const path: string[] = [];
      let current: Element | null = el;
      while (current && current !== doc.body) {
        let selector = current.tagName.toLowerCase();
        if (current.id) {
          path.unshift(`#${current.id}`);
          break;
        }
        if (current.className && typeof current.className === 'string') {
          const classes = current.className
            .split(/\s+/)
            .filter((c: string) => c && !c.startsWith('__editor'))
            .slice(0, 2)
            .join('.');
          if (classes) selector += `.${classes}`;
        }
        const parent = current.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter(
            (c) => c.tagName === current!.tagName
          );
          if (siblings.length > 1) {
            const idx = siblings.indexOf(current) + 1;
            selector += `:nth-of-type(${idx})`;
          }
        }
        path.unshift(selector);
        current = current.parentElement;
      }
      return path.join(' > ');
    };

    let hoveredEl: Element | null = null;
    let selectedEl: Element | null = null;

    const isEditable = (el: Element): boolean => {
      const tag = el.tagName.toLowerCase();
      const ignore = ['html', 'body', 'head', 'script', 'style', 'meta', 'link'];
      if (ignore.includes(tag)) return false;
      if ((el as HTMLElement).classList?.contains('__editor-dim-tooltip')) return false;
      return true;
    };

    const isTextElement = (el: Element): boolean => {
      const tag = el.tagName.toLowerCase();
      const textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'li', 'td', 'th', 'label', 'button', 'strong', 'em', 'b', 'i', 'small', 'cite'];
      if (textTags.includes(tag)) return true;
      const hasDirectText = Array.from(el.childNodes).some(
        (n) => n.nodeType === 3 && n.textContent?.trim()
      );
      return hasDirectText && el.children.length === 0;
    };

    const isImageElement = (el: Element): boolean => {
      const tag = el.tagName.toLowerCase();
      return tag === 'img' || tag === 'video' || tag === 'picture';
    };

    const getComputedProps = (el: Element) => {
      const cs = win.getComputedStyle(el);
      return {
        fontSize: cs.fontSize,
        fontFamily: cs.fontFamily.split(',')[0].replace(/['"]/g, ''),
        fontWeight: cs.fontWeight,
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        textAlign: cs.textAlign,
        padding: cs.padding,
        margin: cs.margin,
      };
    };

    // Reapply saved edits from history
    try {
      const savedEdits = JSON.parse(localStorage.getItem('studio_visual_edits') || '[]') as EditRecord[];
      if (Array.isArray(savedEdits)) {
        savedEdits.forEach((edit) => {
          try {
            const target = doc.querySelector(edit.selector);
            if (!target) return;
            if (edit.property === 'textContent') {
              target.textContent = edit.newValue;
            } else if (edit.property === 'src' && (target as HTMLImageElement).src !== undefined) {
              (target as HTMLImageElement).src = edit.newValue;
            } else if (edit.property === 'style') {
              const colonIdx = edit.newValue.indexOf(':');
              if (colonIdx > 0) {
                const prop = edit.newValue.slice(0, colonIdx);
                const val = edit.newValue.slice(colonIdx + 1);
                (target as HTMLElement).style.setProperty(prop, val);
              }
            } else if (edit.property === 'visibility') {
              (target as HTMLElement).style.display = edit.newValue;
            }
          } catch {
            // ignore selector error
          }
        });
      }
    } catch {
      // ignore
    }

    // Hover listener
    doc.addEventListener('mousemove', (e: MouseEvent) => {
      const el = doc.elementFromPoint(e.clientX, e.clientY);
      if (!el || !isEditable(el)) {
        if (hoveredEl) {
          hoveredEl.classList.remove('__editor-hover-outline', '__editor-image-hover');
          hoveredEl = null;
        }
        tooltip.style.display = 'none';
        window.parent.postMessage({ type: 'editor-hover', data: null }, '*');
        return;
      }
      if (el === hoveredEl) {
        tooltip.style.left = e.clientX + 14 + 'px';
        tooltip.style.top = e.clientY + 14 + 'px';
        return;
      }
      if (hoveredEl) {
        hoveredEl.classList.remove('__editor-hover-outline', '__editor-image-hover');
      }
      hoveredEl = el;
      if (el !== selectedEl) {
        if (isImageElement(el)) {
          el.classList.add('__editor-image-hover');
        } else {
          el.classList.add('__editor-hover-outline');
        }
      }
      const rect = el.getBoundingClientRect();
      const tag = el.tagName.toLowerCase();
      const dims = `${Math.round(rect.width)} × ${Math.round(rect.height)}`;
      tooltip.textContent = `<${tag}> ${dims}`;
      tooltip.style.display = 'block';
      tooltip.style.left = e.clientX + 14 + 'px';
      tooltip.style.top = e.clientY + 14 + 'px';

      window.parent.postMessage({
        type: 'editor-hover',
        data: { tag: `<${tag}>`, dims },
      }, '*');
    }, true);

    // Click listener — element selection
    doc.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const el = doc.elementFromPoint(e.clientX, e.clientY);
      if (!el || !isEditable(el)) return;

      if (selectedEl) {
        selectedEl.classList.remove('__editor-selected-outline');
        selectedEl.removeAttribute('data-editor-tag');
        selectedEl.removeAttribute('contenteditable');
      }

      selectedEl = el;
      el.classList.remove('__editor-hover-outline', '__editor-image-hover');
      el.classList.add('__editor-selected-outline');
      el.setAttribute('data-editor-tag', el.tagName.toLowerCase());

      const rect = el.getBoundingClientRect();
      const selector = (win as any).__editorGetSelector(el);
      const isImg = isImageElement(el);
      const isTxt = isTextElement(el);
      const isHidden = (el as HTMLElement).style.display === 'none';

      // Check if clicked element is an anchor link or enclosed in an anchor
      const anchorEl = (el.tagName.toLowerCase() === 'a' ? el : el.closest('a')) as HTMLAnchorElement | null;
      let linkHref: string | undefined = undefined;
      let linkText: string | undefined = undefined;
      if (anchorEl) {
        linkText = (anchorEl.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);
        const rawHref = anchorEl.getAttribute('href') || '';
        if (
          rawHref &&
          !rawHref.startsWith('#') &&
          !rawHref.startsWith('javascript:') &&
          !rawHref.startsWith('tel:') &&
          !rawHref.startsWith('mailto:')
        ) {
          try {
            const parsed = new URL(rawHref, win.location.href);
            if (parsed.origin === win.location.origin) {
              linkHref = parsed.pathname + parsed.search;
            } else {
              linkHref = rawHref;
            }
          } catch {
            if (rawHref.startsWith('/')) {
              linkHref = rawHref;
            }
          }
        }
      }

      window.parent.postMessage({
        type: 'editor-select',
        data: {
          tagName: el.tagName.toLowerCase(),
          className: el.className?.toString().replace(/__editor[^ ]*/g, '').trim() || '',
          id: el.id || '',
          textContent: (el.textContent || '').slice(0, 800),
          src: (el as HTMLImageElement).src || (el as HTMLVideoElement).src || '',
          alt: (el as HTMLImageElement).alt || '',
          href: linkHref,
          linkText,
          computedStyles: getComputedProps(el),
          rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
          selector,
          isImage: isImg,
          isText: isTxt,
          isHidden,
        } as SelectedElement,
      }, '*');
    }, true);

    // Double-click listener — inline text or image
    doc.addEventListener('dblclick', (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const el = doc.elementFromPoint(e.clientX, e.clientY);
      if (!el || !isEditable(el)) return;

      if (isTextElement(el)) {
        const htmlEl = el as HTMLElement;
        const oldText = htmlEl.textContent || '';
        htmlEl.setAttribute('contenteditable', 'true');
        htmlEl.classList.add('__editor-editable');
        htmlEl.focus();

        const range = doc.createRange();
        range.selectNodeContents(htmlEl);
        const sel = win.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);

        window.parent.postMessage({ type: 'editor-editing', data: true }, '*');

        const finishEdit = () => {
          htmlEl.removeAttribute('contenteditable');
          htmlEl.classList.remove('__editor-editable');
          const newText = htmlEl.textContent || '';
          if (newText !== oldText) {
            const selector = (win as any).__editorGetSelector(el);
            window.parent.postMessage({
              type: 'editor-changed',
              data: {
                selector,
                property: 'textContent',
                oldValue: oldText,
                newValue: newText,
              },
            }, '*');
          }
          window.parent.postMessage({ type: 'editor-editing', data: false }, '*');
          htmlEl.removeEventListener('blur', finishEdit);
          htmlEl.removeEventListener('keydown', handleKey);
        };

        const handleKey = (ev: KeyboardEvent) => {
          if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault();
            htmlEl.blur();
          }
          if (ev.key === 'Escape') {
            htmlEl.textContent = oldText;
            htmlEl.blur();
          }
        };

        htmlEl.addEventListener('blur', finishEdit);
        htmlEl.addEventListener('keydown', handleKey);
      } else if (isImageElement(el)) {
        window.parent.postMessage({
          type: 'editor-image-click',
          data: {
            selector: (win as any).__editorGetSelector(el),
            src: (el as HTMLImageElement).src || '',
            alt: (el as HTMLImageElement).alt || '',
          },
        }, '*');
      }
    }, true);

    // Prevent iframe link navigation
    doc.addEventListener('auxclick', (e) => { e.preventDefault(); e.stopPropagation(); }, true);

    // Listen to parent postMessages
    const messageListener = (e: MessageEvent) => {
      if (e.data?.type === 'editor-update-text' && selectedEl) {
        const htmlEl = selectedEl as HTMLElement;
        const oldText = htmlEl.textContent || '';
        htmlEl.textContent = e.data.value;
        window.parent.postMessage({
          type: 'editor-changed',
          data: {
            selector: (win as any).__editorGetSelector(selectedEl),
            property: 'textContent',
            oldValue: oldText,
            newValue: e.data.value,
          },
        }, '*');
      }
      if (e.data?.type === 'editor-update-image' && e.data.selector) {
        const target = doc.querySelector(e.data.selector);
        if (target && (target.tagName.toLowerCase() === 'img' || (target as any).src !== undefined)) {
          const oldSrc = (target as HTMLImageElement).src;
          (target as HTMLImageElement).src = e.data.src;
          window.parent.postMessage({
            type: 'editor-changed',
            data: {
              selector: e.data.selector,
              property: 'src',
              oldValue: oldSrc,
              newValue: e.data.src,
            },
          }, '*');
        }
      }
      if (e.data?.type === 'editor-update-style' && selectedEl) {
        const htmlEl = selectedEl as HTMLElement;
        const prop = e.data.property as string;
        const oldVal = htmlEl.style.getPropertyValue(prop);
        htmlEl.style.setProperty(prop, e.data.value);
        window.parent.postMessage({
          type: 'editor-changed',
          data: {
            selector: (win as any).__editorGetSelector(selectedEl),
            property: 'style',
            oldValue: `${prop}:${oldVal}`,
            newValue: `${prop}:${e.data.value}`,
          },
        }, '*');
      }
      if (e.data?.type === 'editor-toggle-visibility' && selectedEl) {
        const htmlEl = selectedEl as HTMLElement;
        const currentDisplay = htmlEl.style.display;
        const newDisplay = currentDisplay === 'none' ? '' : 'none';
        htmlEl.style.display = newDisplay;
        window.parent.postMessage({
          type: 'editor-changed',
          data: {
            selector: (win as any).__editorGetSelector(selectedEl),
            property: 'visibility',
            oldValue: currentDisplay,
            newValue: newDisplay,
          },
        }, '*');
      }
      if (e.data?.type === 'editor-deselect' && selectedEl) {
        selectedEl.classList.remove('__editor-selected-outline');
        selectedEl.removeAttribute('data-editor-tag');
        selectedEl.removeAttribute('contenteditable');
        selectedEl = null;
      }
      if (e.data?.type === 'editor-apply-record') {
        const rec = e.data.record as EditRecord;
        const target = doc.querySelector(rec.selector);
        if (target) {
          if (rec.property === 'textContent') {
            target.textContent = rec.newValue;
          } else if (rec.property === 'src') {
            (target as HTMLImageElement).src = rec.newValue;
          } else if (rec.property === 'style') {
            const colonIdx = rec.newValue.indexOf(':');
            if (colonIdx > 0) {
              const prop = rec.newValue.slice(0, colonIdx);
              const val = rec.newValue.slice(colonIdx + 1);
              (target as HTMLElement).style.setProperty(prop, val);
            }
          } else if (rec.property === 'visibility') {
            (target as HTMLElement).style.display = rec.newValue;
          }
        }
      }
    };

    win.addEventListener('message', messageListener);
    setIframeLoaded(true);
  }, []);

  // Listen to messages from the iframe
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'editor-select') {
        const sel = e.data.data as SelectedElement;
        setSelectedElement(sel);
        setShowSidebar(true);
        if (sel.href && (sel.href.startsWith('/') || sel.href.startsWith('http'))) {
          // Normalize relative path if same-origin
          let navPath = sel.href;
          try {
            if (navPath.startsWith('http')) {
              const u = new URL(navPath);
              if (u.origin === window.location.origin) {
                navPath = u.pathname + u.search;
              }
            }
          } catch {
            // ignore
          }
          if (navPath.startsWith('/')) {
            setPendingLinkPrompt({
              href: navPath,
              label: sel.linkText || sel.textContent || navPath,
              element: sel,
            });
          } else {
            setPendingLinkPrompt(null);
          }
        } else {
          setPendingLinkPrompt(null);
        }
      }
      if (e.data?.type === 'editor-hover') {
        setHoveredInfo(e.data.data);
      }
      if (e.data?.type === 'editor-editing') {
        setEditingText(e.data.data);
      }
      if (e.data?.type === 'editor-changed') {
        const record = e.data.data as EditRecord;
        record.timestamp = Date.now();
        setEditHistory((prev) => {
          const newHistory = [...prev.slice(0, historyIndex + 1), record];
          setHistoryIndex(newHistory.length - 1);
          try {
            localStorage.setItem('studio_visual_edits', JSON.stringify(newHistory));
            window.dispatchEvent(new Event('studio-visual-edits-updated'));
          } catch {
            // ignore quota error
          }
          return newHistory;
        });
      }
      if (e.data?.type === 'editor-image-click') {
        // Trigger file picker
        triggerImageUpload(e.data.data.selector);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [historyIndex]);

  const triggerImageUpload = (selector: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = () => {
      const file = input.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result as string;
          iframeRef.current?.contentWindow?.postMessage({
            type: 'editor-update-image',
            selector,
            src: dataUrl,
          }, '*');
          if (selectedElement) {
            setSelectedElement({ ...selectedElement, src: dataUrl });
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleDeselect = () => {
    iframeRef.current?.contentWindow?.postMessage({ type: 'editor-deselect' }, '*');
    setSelectedElement(null);
  };

  const handleSave = () => {
    const edits = editHistory.slice(0, historyIndex + 1);
    localStorage.setItem('studio_visual_edits', JSON.stringify(edits));
    setSaveNotice('Changes saved to storage!');
    setTimeout(() => setSaveNotice(''), 3000);
  };

  const handleExportJSON = () => {
    const edits = editHistory.slice(0, historyIndex + 1);
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(edits, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `studio-nirmiti-edits-${Date.now()}.json`);
    dlAnchor.click();
  };

  const handleResetAll = () => {
    if (confirm('Revert all visual modifications back to the original page?')) {
      localStorage.removeItem('studio_visual_edits');
      window.dispatchEvent(new Event('studio-visual-edits-updated'));
      setEditHistory([]);
      setHistoryIndex(-1);
      setSelectedElement(null);
      // Reload iframe
      if (iframeRef.current) {
        iframeRef.current.src = iframeRef.current.src;
      }
      setSaveNotice('Reset to original!');
      setTimeout(() => setSaveNotice(''), 3000);
    }
  };

  const handleUndo = () => {
    if (historyIndex < 0) return;
    const rec = editHistory[historyIndex];
    // Revert to oldValue
    iframeRef.current?.contentWindow?.postMessage({
      type: 'editor-apply-record',
      record: { ...rec, newValue: rec.oldValue },
    }, '*');
    const newIdx = historyIndex - 1;
    setHistoryIndex(newIdx);
    try {
      const activeEdits = editHistory.slice(0, newIdx + 1);
      localStorage.setItem('studio_visual_edits', JSON.stringify(activeEdits));
      window.dispatchEvent(new Event('studio-visual-edits-updated'));
    } catch {}
  };

  const handleRedo = () => {
    if (historyIndex >= editHistory.length - 1) return;
    const nextIdx = historyIndex + 1;
    const rec = editHistory[nextIdx];
    iframeRef.current?.contentWindow?.postMessage({
      type: 'editor-apply-record',
      record: rec,
    }, '*');
    setHistoryIndex(nextIdx);
    try {
      const activeEdits = editHistory.slice(0, nextIdx + 1);
      localStorage.setItem('studio_visual_edits', JSON.stringify(activeEdits));
      window.dispatchEvent(new Event('studio-visual-edits-updated'));
    } catch {}
  };

  const sendStyleUpdate = (prop: string, value: string) => {
    iframeRef.current?.contentWindow?.postMessage({
      type: 'editor-update-style',
      property: prop,
      value,
    }, '*');
  };

  const sendTextUpdate = (value: string) => {
    iframeRef.current?.contentWindow?.postMessage({
      type: 'editor-update-text',
      value,
    }, '*');
    if (selectedElement) {
      setSelectedElement({ ...selectedElement, textContent: value });
    }
  };

  const sendImageUpdate = (src: string) => {
    if (!selectedElement) return;
    iframeRef.current?.contentWindow?.postMessage({
      type: 'editor-update-image',
      selector: selectedElement.selector,
      src,
    }, '*');
    setSelectedElement({ ...selectedElement, src });
  };

  const toggleElementVisibility = () => {
    if (!selectedElement) return;
    iframeRef.current?.contentWindow?.postMessage({
      type: 'editor-toggle-visibility',
    }, '*');
    setSelectedElement({ ...selectedElement, isHidden: !selectedElement.isHidden });
  };

  return (
    <div
      className={`${styles.editorContainer} ${
        isFullscreen ? styles.editorContainerFullscreen : styles.editorContainerEmbedded
      }`}
    >
      {/* ── Top Toolbar ── */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          {isFullscreen && (
            <>
              <Link href="/admin" className={styles.toolBtn} title="Back to Admin">
                ←
              </Link>
              <div className={styles.toolbarDivider} />
            </>
          )}

          <span className={styles.toolbarTitle}>Live Website Clone Editor</span>

          {/* Route selector dropdown */}
          <select
            className={styles.pageSelect}
            value={currentRoute}
            onChange={(e) => setCurrentRoute(e.target.value)}
            title="Choose page to edit"
          >
            {availableRoutesGrouped.map((grp) => (
              <optgroup key={grp.category} label={grp.category}>
                {grp.routes.map((r) => (
                  <option key={r.path} value={r.path}>
                    {r.label}
                  </option>
                ))}
              </optgroup>
            ))}
            {!availableRoutesGrouped.some((grp) => grp.routes.some((r) => r.path === currentRoute)) && (
              <option value={currentRoute}>{currentRoute}</option>
            )}
          </select>

          {editingText && (
            <span className={styles.editingBadge}>
              <Type size={12} /> Live Typing…
            </span>
          )}
        </div>

        <div className={styles.toolbarCenter}>
          {/* Viewport presets */}
          <div className={styles.viewportSwitcher}>
            {viewportPresets.map((vp) => (
              <button
                key={vp.label}
                type="button"
                className={`${styles.vpBtn} ${viewportWidth === vp.width ? styles.vpBtnActive : ''}`}
                onClick={() => setViewportWidth(vp.width)}
                title={vp.label}
              >
                {vp.icon}
                <span>{vp.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.toolbarDivider} />

          {/* Undo / Redo */}
          <button
            type="button"
            className={styles.toolBtn}
            onClick={handleUndo}
            disabled={historyIndex < 0}
            title="Undo"
          >
            <Undo2 size={14} />
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={handleRedo}
            disabled={historyIndex >= editHistory.length - 1}
            title="Redo"
          >
            <Redo2 size={14} />
          </button>
        </div>

        <div className={styles.toolbarRight}>
          {hoveredInfo && (
            <span className={styles.hoverInfo}>
              {hoveredInfo.tag} {hoveredInfo.dims}
            </span>
          )}

          <span className={styles.editCount}>
            {historyIndex + 1} edit{historyIndex + 1 !== 1 ? 's' : ''}
          </span>

          <button
            type="button"
            className={styles.saveBtn}
            onClick={handleSave}
            title="Save changes to localStorage"
          >
            <Save size={13} /> Save Changes
          </button>

          {saveNotice && <span className={styles.savedBadge}>{saveNotice}</span>}

          <button
            type="button"
            className={styles.toolBtn}
            onClick={handleExportJSON}
            title="Export Edits as JSON"
          >
            <Download size={14} />
          </button>

          <button
            type="button"
            className={styles.toolBtn}
            onClick={handleResetAll}
            title="Reset All Edits"
          >
            <RotateCcw size={14} />
          </button>

          <button
            type="button"
            className={styles.toolBtn}
            onClick={() => setShowSidebar(!showSidebar)}
            title="Toggle Element Inspector"
          >
            <Layers size={14} />
          </button>

          {/* Fullscreen toggle */}
          {embedded ? (
            <Link
              href="/admin/editor"
              className={styles.toolBtn}
              title="Open in Dedicated Full-Screen Studio"
            >
              <Maximize2 size={14} />
            </Link>
          ) : (
            <button
              type="button"
              className={styles.toolBtn}
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          )}

          <Link
            href={currentRoute}
            target="_blank"
            className={styles.toolBtn}
            title="Open Live Page in New Tab"
          >
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>

      {/* ── Editor Body (Live Canvas + Sidebar) ── */}
      <div className={styles.editorBody}>
        {/* Canvas Area */}
        <div className={styles.canvasArea}>
          <div className={styles.canvasNotice}>
            <div className={styles.canvasNoticeLeft}>
              <span className={styles.canvasDot} />
              <span>
                <strong>Point & Click:</strong> Single-click any element to inspect & style · Double-click text to type inline · Double-click photo to replace
              </span>
            </div>
            <span>Page: {currentRoute}</span>
          </div>

          {/* Link Decision Prompt: Edit Option vs Navigate into Page */}
          {pendingLinkPrompt && (
            <div className={styles.linkDecisionOverlay}>
              <div className={styles.linkDecisionCard}>
                <div className={styles.linkDecisionHeader}>
                  <div className={styles.linkDecisionBadge}>
                    <ExternalLink size={13} />
                    <span>Link Detected</span>
                  </div>
                  <button
                    type="button"
                    className={styles.linkDecisionClose}
                    onClick={() => setPendingLinkPrompt(null)}
                    aria-label="Dismiss link option"
                  >
                    <X size={15} />
                  </button>
                </div>

                <h3 className={styles.linkDecisionTitle}>
                  &ldquo;{pendingLinkPrompt.label}&rdquo;
                </h3>
                <p className={styles.linkDecisionTarget}>
                  Destination: <code>{pendingLinkPrompt.href}</code>
                </p>

                <p className={styles.linkDecisionPromptText}>
                  What would you like to do with this option?
                </p>

                <div className={styles.linkDecisionGrid}>
                  <button
                    type="button"
                    className={styles.decisionBtnEdit}
                    onClick={() => {
                      setSelectedElement(pendingLinkPrompt.element);
                      setShowSidebar(true);
                      setPendingLinkPrompt(null);
                    }}
                  >
                    <div className={styles.decisionIconWrap}>
                      <Type size={16} />
                    </div>
                    <div className={styles.decisionBtnBody}>
                      <span className={styles.decisionBtnHeading}>Edit This Option</span>
                      <span className={styles.decisionBtnSub}>
                        Change words, styling, font or color directly in the sidebar
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    className={styles.decisionBtnNav}
                    onClick={() => {
                      const target = pendingLinkPrompt.href;
                      setPendingLinkPrompt(null);
                      handleNavigateToRoute(target);
                    }}
                  >
                    <div className={styles.decisionIconWrapNav}>
                      <ArrowRight size={16} />
                    </div>
                    <div className={styles.decisionBtnBody}>
                      <span className={styles.decisionBtnHeading}>Go into That Page</span>
                      <span className={styles.decisionBtnSub}>
                        Load &ldquo;{pendingLinkPrompt.href}&rdquo; in this live editor to edit it
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div
            className={styles.iframeWrapper}
            style={{
              maxWidth: viewportWidth,
            }}
          >
            {iframeSrc && (
              <iframe
                ref={iframeRef}
                src={iframeSrc}
                className={styles.iframe}
                onLoad={injectEditorScript}
                title="Studio Nirmiti Website Clone"
              />
            )}
            {!iframeLoaded && (
              <div className={styles.loadingOverlay}>
                <div className={styles.spinner} />
                <p>Loading cloned website preview…</p>
              </div>
            )}
          </div>
        </div>

        {/* ── Inspector Sidebar ── */}
        {showSidebar && (
          <div className={styles.inspectorSidebar}>
            <div className={styles.inspectorHeader}>
              <h3>
                <Layers size={13} /> Element Inspector
              </h3>
              <button
                type="button"
                className={styles.closeInspector}
                onClick={() => setShowSidebar(false)}
              >
                <X size={14} />
              </button>
            </div>

            {selectedElement ? (
              <div className={styles.inspectorContent}>
                {/* Element Tag & ID */}
                <div className={styles.elementTag}>
                  <span className={styles.tagBadge}>
                    &lt;{selectedElement.tagName}&gt;
                  </span>
                  {selectedElement.id && (
                    <span className={styles.idBadge}>#{selectedElement.id}</span>
                  )}
                  {selectedElement.className && (
                    <span className={styles.idBadge}>
                      .{selectedElement.className.split(' ')[0]}
                    </span>
                  )}
                </div>

                <div className={styles.dimBar}>
                  <span>
                    Size: {Math.round(selectedElement.rect.width)} ×{' '}
                    {Math.round(selectedElement.rect.height)} px
                  </span>
                </div>

                {/* Linked Destination Page Actions */}
                {selectedElement.href && (
                  <div className={styles.inspectorLinkBox}>
                    <div className={styles.inspectorLinkHeader}>
                      <ExternalLink size={12} />
                      <span>Destination Link</span>
                    </div>
                    <code className={styles.inspectorLinkPath}>
                      {selectedElement.href}
                    </code>
                    <div className={styles.inspectorLinkActions}>
                      <button
                        type="button"
                        className={styles.inspectorNavBtn}
                        onClick={() => handleNavigateToRoute(selectedElement.href!)}
                      >
                        🚀 Go into That Page in Editor
                      </button>
                      <a
                        href={selectedElement.href}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.inspectorLiveBtn}
                        title="Open live page in new browser tab"
                      >
                        ↗ Open Live Page
                      </a>
                    </div>
                  </div>
                )}

                {/* Text Content Editor */}
                {selectedElement.isText && (
                  <div className={styles.inspectorSection}>
                    <h4>
                      <Type size={12} /> Text Content
                    </h4>
                    <textarea
                      className={styles.fieldTextarea}
                      value={selectedElement.textContent}
                      onChange={(e) => sendTextUpdate(e.target.value)}
                      rows={3}
                      placeholder="Enter text..."
                    />
                    <p className={styles.hint}>
                      💡 Tip: You can also double-click directly on the text in the preview to edit inline!
                    </p>
                  </div>
                )}

                {/* Image Editor */}
                {selectedElement.isImage && (
                  <div className={styles.inspectorSection}>
                    <h4>
                      <ImageIcon size={12} /> Photo / Image
                    </h4>
                    {selectedElement.src && (
                      <div className={styles.imageThumbWrap}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={selectedElement.src}
                          alt={selectedElement.alt || 'Preview'}
                          className={styles.imageThumb}
                        />
                      </div>
                    )}

                    <button
                      type="button"
                      className={styles.replaceImageBtn}
                      onClick={() => triggerImageUpload(selectedElement.selector)}
                    >
                      <Upload size={13} /> Upload New Photo
                    </button>

                    <label className={styles.fieldLabel}>Image URL</label>
                    <input
                      type="text"
                      className={styles.fieldInput}
                      value={selectedElement.src || ''}
                      onChange={(e) => sendImageUpdate(e.target.value)}
                      placeholder="/images/... or https://..."
                    />

                    <label className={styles.fieldLabel} style={{ marginTop: '10px' }}>
                      Quick Swap (Studio Projects):
                    </label>
                    <div className={styles.galleryPresetGrid}>
                      {studioPresetPhotos.map((preset) => (
                        <button
                          key={preset.src}
                          type="button"
                          className={styles.presetThumbBtn}
                          onClick={() => sendImageUpdate(preset.src)}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={preset.src}
                            alt={preset.label}
                            className={styles.presetThumbImg}
                          />
                          <span>{preset.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Typography & Colors */}
                <div className={styles.inspectorSection}>
                  <h4>
                    <Palette size={12} /> Typography & Colors
                  </h4>

                  <div style={{ marginBottom: '8px' }}>
                    <label className={styles.fieldLabel}>Font Family</label>
                    <select
                      className={styles.fieldSelect}
                      defaultValue={selectedElement.computedStyles.fontFamily}
                      onChange={(e) => sendStyleUpdate('font-family', e.target.value)}
                    >
                      <option value="var(--font-cinzel), serif">Cinzel (Architectural Serif)</option>
                      <option value="var(--font-syne), sans-serif">Syne (Modern Display)</option>
                      <option value="var(--font-body), sans-serif">Plus Jakarta Sans (Body)</option>
                      <option value="'SF Mono', monospace">Monospace Code</option>
                    </select>
                  </div>

                  <div className={styles.styleRow}>
                    <div>
                      <label className={styles.fieldLabel}>Text Color</label>
                      <div className={styles.colorPickerWrap}>
                        <input
                          type="color"
                          className={styles.colorPicker}
                          defaultValue="#ffffff"
                          onChange={(e) => sendStyleUpdate('color', e.target.value)}
                        />
                        <input
                          type="text"
                          className={styles.fieldInput}
                          defaultValue={selectedElement.computedStyles.color}
                          onBlur={(e) => sendStyleUpdate('color', e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={styles.fieldLabel}>Background</label>
                      <div className={styles.colorPickerWrap}>
                        <input
                          type="color"
                          className={styles.colorPicker}
                          defaultValue="#141716"
                          onChange={(e) => sendStyleUpdate('background-color', e.target.value)}
                        />
                        <input
                          type="text"
                          className={styles.fieldInput}
                          defaultValue={selectedElement.computedStyles.backgroundColor}
                          onBlur={(e) => sendStyleUpdate('background-color', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles.styleRow}>
                    <div>
                      <label className={styles.fieldLabel}>Font Size</label>
                      <input
                        type="text"
                        className={styles.fieldInput}
                        defaultValue={selectedElement.computedStyles.fontSize}
                        onBlur={(e) => sendStyleUpdate('font-size', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={styles.fieldLabel}>Font Weight</label>
                      <select
                        className={styles.fieldSelect}
                        defaultValue={selectedElement.computedStyles.fontWeight}
                        onChange={(e) => sendStyleUpdate('font-weight', e.target.value)}
                      >
                        <option value="300">Light (300)</option>
                        <option value="400">Regular (400)</option>
                        <option value="500">Medium (500)</option>
                        <option value="600">Semi-Bold (600)</option>
                        <option value="700">Bold (700)</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.styleRow}>
                    <div>
                      <label className={styles.fieldLabel}>Text Align</label>
                      <select
                        className={styles.fieldSelect}
                        defaultValue={selectedElement.computedStyles.textAlign}
                        onChange={(e) => sendStyleUpdate('text-align', e.target.value)}
                      >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                        <option value="justify">Justify</option>
                      </select>
                    </div>
                    <div>
                      <label className={styles.fieldLabel}>Border Radius</label>
                      <input
                        type="text"
                        className={styles.fieldInput}
                        placeholder="e.g. 8px, 99px"
                        onBlur={(e) => sendStyleUpdate('border-radius', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.styleRow}>
                    <div>
                      <label className={styles.fieldLabel}>Padding</label>
                      <input
                        type="text"
                        className={styles.fieldInput}
                        defaultValue={selectedElement.computedStyles.padding}
                        onBlur={(e) => sendStyleUpdate('padding', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={styles.fieldLabel}>Margin</label>
                      <input
                        type="text"
                        className={styles.fieldInput}
                        defaultValue={selectedElement.computedStyles.margin}
                        onBlur={(e) => sendStyleUpdate('margin', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* CSS Selector */}
                <div className={styles.inspectorSection}>
                  <h4>
                    <Code2 size={12} /> Target Selector
                  </h4>
                  <code className={styles.selectorCode}>{selectedElement.selector}</code>
                </div>

                {/* Actions */}
                <div className={styles.actionBtnsRow}>
                  <button
                    type="button"
                    className={styles.hideElementBtn}
                    onClick={toggleElementVisibility}
                    title="Toggle element visibility"
                  >
                    {selectedElement.isHidden ? <Eye size={13} /> : <EyeOff size={13} />}
                    {selectedElement.isHidden ? 'Show Element' : 'Hide Element'}
                  </button>

                  <button
                    type="button"
                    className={styles.deselectBtn}
                    onClick={handleDeselect}
                  >
                    <X size={13} /> Deselect
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.emptyInspector}>
                <MousePointer2 size={36} strokeWidth={1} color="var(--color-accent)" />
                <p>Click any element on the cloned page to inspect, edit text, swap photos or adjust styles</p>
                <div className={styles.shortcutList}>
                  <div className={styles.shortcutItem}>
                    <span className={styles.shortcutKey}>Single Click</span>
                    <span>Select any element</span>
                  </div>
                  <div className={styles.shortcutItem}>
                    <span className={styles.shortcutKey}>Double Click</span>
                    <span>Direct inline text editing</span>
                  </div>
                  <div className={styles.shortcutItem}>
                    <span className={styles.shortcutKey}>Dbl-Click Image</span>
                    <span>Upload replacement photo</span>
                  </div>
                  <div className={styles.shortcutItem}>
                    <span className={styles.shortcutKey}>Save Changes</span>
                    <span>Persists to local storage</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
