// ─── Studio Nirmiti — Core Type System ───

// ── Animation & Depth Presets ──
export type AnimationPreset =
  | 'none'
  | 'reveal'
  | 'depth'
  | 'mask'
  | 'stagger'
  | 'perspective'
  | 'camera-soft'
  | 'line-draw';

export type DepthPreset = 'flat' | 'low' | 'medium' | 'elevated';

// ── Media ──
export interface MediaAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  focalPoint?: { x: number; y: number };
  blurDataURL?: string;
  type?: 'image' | 'video';
}

// ── SEO ──
export interface SEOData {
  seoTitle: string;
  metaDescription: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  indexable?: boolean;
}

// ── CTA ──
export interface CTAData {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: string;
}

// ── Section Block ──
export type SectionType =
  | 'editorialIntro'
  | 'mediaSplit'
  | 'scopeMatrix'
  | 'cardGrid'
  | 'materialBoard'
  | 'process'
  | 'projectGallery'
  | 'beforeAfter'
  | 'capabilities'
  | 'projectSwitcher'
  | 'cta'
  | 'faq'
  | 'richContent'
  | '3dScene'
  | 'hero'
  | 'imageRail'
  | 'testimonial'
  | 'timeline'
  | 'stats';

export type SectionVariant =
  | 'default'
  | 'full-width'
  | 'contained'
  | 'split'
  | 'media-left'
  | 'media-right'
  | 'grid-2'
  | 'grid-3'
  | 'grid-4'
  | 'gallery'
  | 'masonry';

export type SectionTheme = 'light' | 'dark' | 'cream' | 'charcoal' | 'sage';

export type SectionSpacing = 'compact' | 'default' | 'generous';

export interface SectionItem {
  id: string;
  title?: string;
  subtitle?: string;
  body?: string;
  media?: MediaAsset;
  icon?: string;
  href?: string;
  tags?: string[];
}

export interface SectionBlock {
  id: string;
  type: SectionType;
  order: number;
  enabled: boolean;
  variant: SectionVariant;
  theme: SectionTheme;
  spacing: SectionSpacing;
  heading?: string;
  eyebrow?: string;
  body?: string;
  media?: MediaAsset;
  items?: SectionItem[];
  cta?: CTAData;
  animationPreset: AnimationPreset;
  depthPreset: DepthPreset;
  responsiveOverrides?: Record<string, unknown>;
}

// ── Page Content ──
export interface PageContent {
  id: string;
  title: string;
  slug: string;
  route: string;
  status: 'draft' | 'published';
  seo: SEOData;
  sections: SectionBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revision?: number;
}

// ── Service ──
export interface Service {
  title: string;
  slug: string;
  summary: string;
  body?: string;
  category?: string;
  relatedServices?: string[];
  relatedProjects?: string[];
  media?: MediaAsset[];
  seo: SEOData;
}

// ── Project ──
export type ProjectType = 'residential' | 'commercial' | 'hospitality';

export interface Project {
  title: string;
  slug: string;
  projectType: ProjectType;
  serviceTags: string[];
  location?: string;
  scope?: string;
  summary: string;
  challenge?: string;
  approach?: string;
  gallery?: MediaAsset[];
  beforeAfter?: { before: MediaAsset; after: MediaAsset }[];
  video?: string;
  seo: SEOData;
}

// ── Article ──
export interface Article {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  bodyBlocks?: SectionBlock[];
  cover?: MediaAsset;
  author?: string;
  publishedAt: string;
  relatedPages?: string[];
  seo: SEOData;
}

// ── Navigation ──
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  featured?: {
    title: string;
    description: string;
    media?: MediaAsset;
    href: string;
  };
}

// ── Global Settings ──
export interface GlobalSettings {
  businessName: string;
  phone: string;
  email?: string;
  socialUrls?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  address?: string;
  serviceArea?: string;
  navigation: NavigationItem[];
  footerNavigation: NavigationItem[];
  defaultSeo: SEOData;
  themeTokens?: Record<string, string>;
}
