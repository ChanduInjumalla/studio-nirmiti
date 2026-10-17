# Studio Nirmiti — 3D Architecture & Interior Design Platform

> **Authoritative Production Build** aligned with the 60-Page Website Blueprint and Master Build Prompt.

---

## 1. Executive Summary & Brand Overview

- **Studio Name**: Studio Nirmiti
- **Founder & Principal Designer**: Kushal Kumar Pendekatla
- **Direct Phone**: +91 95730 23509
- **Email**: contact@studionirmiti.com
- **Territory**: Hyderabad, Bengaluru, and Pan-India for select turnkey commissions.
- **Brand Position**: Studio Nirmiti integrates architectural planning, interior craft, 3D pre-visualization, and turnkey civil execution under single-source architectural accountability.

---

## 2. Technical Stack & Architecture

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | **Next.js 16 (App Router)** | Full static prerendering (SSG), dynamic routes, sitemaps, robots, metadata |
| **Language** | **TypeScript 5** | Strict type safety, CMS schemas, and interface contracts |
| **3D Rendering** | **Three.js + React Three Fiber (v9) + Drei (v10)** | Progressive 3D WebGL scene with soft pointer parallax and lighting moods |
| **Motion Engine** | **Anime.js v4 (`animejs`)** | Coordinated entrance timelines, scroll progress lines, and interactive UI micro-animations |
| **Styling** | **Vanilla CSS & CSS Modules** | Architectural design tokens, warm neutral palettes, clamp-based typography |
| **Typography** | **Google Fonts (Syne, Plus Jakarta Sans, Cinzel)** | Editorial luxury serif and contemporary structural sans |
| **Admin & CMS** | **Custom Admin Studio (`/admin`)** | Visual page editor, leads inbox, responsive viewports, revision logging |

---

## 3. The 46-Route Blueprint Inventory

All 46 static blueprint routes + 2 dynamic route patterns are implemented and validated:

### A. Core & Brand Discovery
1. `/` — Home (The **ONLY** page with full 3D hero)
2. `/about` — About Studio Nirmiti & Leadership
3. `/contact` — Direct Contact, Verified Phone & Interactive Enquiry Form
4. `/book-consultation` — Dedicated Consultation Questionnaire & Roadmap
5. `/process` — Seven-Stage Delivery Methodology
6. `/why-studio-nirmiti` — Trust Pillars & Comparison Matrix
7. `/faq` — Categorized Knowledge Base & Pricing FAQs
8. `/privacy-policy` — Privacy & Data Protection Policy
9. `/terms` — Terms of Architectural Engagement

### B. Portfolio & Case Studies
10. `/projects` — Curated Case Studies Portfolio Overview
11. `/projects/residential` — Luxury Residential Villas & Penthouses
12. `/projects/commercial` — Executive Corporate Workplaces
13. `/projects/hospitality` — Boutique Resorts & Hotel Retreats
14. `/projects/[slug]` — Dynamic Case Study (e.g. `/projects/the-glass-pavilion-villa`, `/projects/the-stone-timber-residence`, `/projects/aura-corporate-suite`, `/projects/sereno-boutique-resort`)

### C. Primary Services
15. `/services/architectural-design` — Architectural Planning, Zoning & Working Drawings
16. `/services/interior-design` — Interior Architecture, Joinery & Finishes
17. `/services/exterior-design` — Exterior Envelopes & Kinetic Screens
18. `/services/execution-works` — Turnkey Civil Execution & Contracting
19. `/services/space-planning` — Flow, Ergonomics & Floor Plan Optimization
20. `/services/modular-kitchens` — Luxury Italian/German Modular Kitchens
21. `/services/furniture-selection` — Curated Designer Furnishings & Objects
22. `/services/custom-furniture` — Bespoke Millwork & Artisan Joinery
23. `/services/3d-visualization` — Photorealistic CGI & Architectural Renders
24. `/services/3d-walkthroughs` — 4K Spatial Animation & VR Tours
25. `/services/project-supervision` — Direct Architect-Led Site Quality Audits
26. `/services/turnkey-interiors` — Single-Source Interior Delivery
27. `/services/renovation-remodeling` — Structural Remodeling & Adaptive Reuse
28. `/services/lighting-false-ceiling` — Layered Architectural Illumination
29. `/services/material-finishes` — Travertine, Oak, Brass & Microcement
30. `/services/wardrobes-storage` — Concealed Storage & Walk-In Wardrobes
31. `/services/facade-design` — Contemporary Facade Engineering

### D. Specialized Residential Typologies
32. `/services/residential/apartment-interiors`
33. `/services/residential/villa-interiors`
34. `/services/residential/living-room-design`
35. `/services/residential/bedroom-design`
36. `/services/residential/dining-room-design`
37. `/services/residential/home-office-study`
38. `/services/residential/pooja-room-design`

### E. Commercial & Hospitality Specializations
39. `/services/commercial/office-interiors`
40. `/services/commercial/retail-showroom-interiors`
41. `/services/commercial/restaurant-cafe-interiors`
42. `/services/hospitality/hotel-interiors`
43. `/services/hospitality/resort-interiors`

### F. Insights & Articles
44. `/insights` — Studio Perspectives & Thought Leadership
45. `/insights/architecture` — Architecture Insights
46. `/insights/interiors` — Interior Insights
47. `/insights/3d-visualization` — 3D Technology Insights
48. `/insights/[slug]` — Dynamic Article (e.g. `/insights/natural-light-residential-planning`, `/insights/material-continuity-architecture-interiors`)

### G. Admin & System
49. `/admin` — Admin Studio (Dashboard, Visual Editor, Leads Inbox)
50. `/sitemap.xml` — Automatic Dynamic Sitemap
51. `/robots.txt` — Search Engine Crawling Rules

---

## 4. Key Architectural Rules Implemented

### The "Home-Only Hero" Rule
- **Rule**: Only the Home page (`/`) contains a full-viewport hero section.
- **Inner Pages**: All 45 inner pages start immediately with an editorial/contextual intro band featuring breadcrumbs, categorized eyebrow badges, and concise studio narrative.

### Progressive 3D Experience
- **Home Hero**: Lightweight 3D room/facade composition with pointer parallax (2–4 degrees).
- **Lighting Controls**: Interactive mood switcher (`daylight`, `golden`, `evening`) in the bottom right corner of the Hero.
- **Accessibility & Low Power**: Automatically detects `prefers-reduced-motion` and displays a high-resolution architectural poster fallback without trapping scrolling.
- **Capabilities Matrix**: Interactive 3D CSS tilt cards responding to cursor movement on desktop; swipeable horizontal track on mobile.
- **Before / After Slider**: Draggable/touch-friendly divider comparing pre-construction 3D clay wireframe with finalized turnkey execution.

---

## 5. Admin Studio (`/admin`)

The custom Admin Studio provides no-code client autonomy:
1. **Overview Dashboard**: Live counters for all 46 public routes, published case studies, services, and incoming client leads.
2. **Visual Page Editor**:
   - Sidebar with all section blocks (Hero, Capabilities, Project Typologies, Before/After, Process, Trust Pillars).
   - In-place editing of eyebrows, headings, and description copy.
   - Visibility toggle (`Visible` / `Hidden`) for every section.
   - Live responsive preview switcher (`Desktop`, `Tablet`, `Mobile`).
   - One-click `Save & Publish Live` with revision timestamp.
3. **Leads Inbox**:
   - Captures submissions from the public `/contact` and `/book-consultation` enquiry forms.
   - Displays client name, phone, email, project location, built-up area, and requirements.
   - Interactive status dropdown (`New`, `Contacted`, `Consulted`).
   - One-click direct WhatsApp communication button with pre-filled greeting.

---

## 6. SEO & Schema.org Implementation

- **Next.js Metadata API**: Every page includes tailored `<title>`, `<meta name="description">`, `canonical`, and OpenGraph cards.
- **Structured Data (JSON-LD)**:
  - `ArchitectureFirm` & `Organization` on Home and About
  - `WebSite` with publisher identity
  - `ContactPage` on `/contact`
  - `VisualArtwork` on project case studies
  - `Article` on insights pages
  - `FAQPage` on `/faq`
  - `BreadcrumbList` across all inner pages
- **Robots & Sitemap**:
  - `app/robots.ts` allows indexation of all public routes while protecting `/admin`.
  - `app/sitemap.ts` dynamically generates canonical URLs for all 46 static pages and dynamic slugs.

---

## 7. Development & Production Commands

```bash
# Start local development server on port 3000
npm run dev

# Run production build and static prerender verification
npm run build

# Start production server
npm run start
```
