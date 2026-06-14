# Refactor Plan: Documentation-Style Portfolio

## Goal

Transform the current single-page React portfolio into a clean, documentation-style website with a fixed sidebar, main content area, dark/light mode toggle, and typography-first design — while keeping all existing content and remaining on the current Create React App stack.

## Scope

- **Keep:** React 18 + react-scripts + Tailwind CSS + framer-motion
- **Add:** Fixed docs sidebar, theme provider, dark mode toggle, docs typography
- **Navigation:** Single-page anchors via sidebar (`#hero`, `#about`, `#skills`, `#projects`, `#education`, `#contact`)
- **Pages:** No separate pages in this MVP; sections stay inline like docs chapters
- **No migration** to Next.js/Astro in this phase

## Design System

### Colors
- Light mode: white page bg, `slate-50` sidebar, `slate-900` text, `slate-200` borders
- Dark mode: `slate-950` page bg, `slate-900` sidebar, `slate-100` text, `slate-800` borders
- Accent: existing `primary` (blue-600)
- Code/tech labels: `slate-100` light / `slate-800` dark with monospace font

### Typography
- Body: Inter (already imported)
- Monospace accents: JetBrains Mono via Google Fonts
- Headings: `font-semibold tracking-tight`, sizes from `text-3xl` (hero) down to `text-xl` (section H3)
- Prose-style content: `max-w-3xl` main column for readable line lengths

### Layout
- Sidebar: fixed `w-64` on `lg:`, collapsible drawer on mobile
- Main: `lg:ml-64` offset, `max-w-3xl` centered content column, generous `py-16` section spacing
- Header (mobile): `lg:hidden` top bar with menu button + theme toggle + logo

## Affected Files

### Files to Create

| File | Purpose |
|------|---------|
| `src/context/ThemeContext.js` | React context for dark/light mode, persists to localStorage, syncs `<html>` class |
| `src/hooks/useScrollSpy.js` | Returns active section id for sidebar highlighting |
| `src/components/layout/DocsLayout.js` | Top-level layout: sidebar + header + main scroll area |
| `src/components/layout/Sidebar.js` | Fixed sidebar nav with logo, links, active state |
| `src/components/layout/Header.js` | Mobile-only top bar with menu toggle + theme toggle |
| `src/components/shared/ThemeToggle.js` | Sun/Moon toggle button |

### Files to Modify

| File | Changes |
|------|---------|
| `tailwind.config.js` | `darkMode: 'class'`, add `fontFamily.mono: ['JetBrains Mono', 'monospace']` |
| `src/index.css` | Add dark mode base styles, import JetBrains Mono, scrollbar dark styles |
| `public/index.html` | Keep `<html>` unclassed; handled by JS context |
| `src/index.js` | Wrap `<App />` with `ThemeProvider` |
| `src/App.js` | Replace top `<Navigation />` with `<DocsLayout>`; sections rendered inside main content |
| `src/components/sections/Hero.js` | Remove full-bleed black bg; adapt to docs light/dark surface; keep intro content, CTA, social links |
| `src/components/sections/About.js` | Remove full-bleed white bg; use docs card style; keep summary, stats, tech tags |
| `src/components/sections/Skills.js` | Remove full-bleed gray bg; use docs cards; keep skill bars + competencies |
| `src/components/sections/Projects.js` | Remove full-bleed white bg; keep project grid with docs-friendly borders |
| `src/components/sections/Education.js` | Remove full-bleed gray bg; keep timeline + cert grid |
| `src/components/sections/Contact.js` | Remove full-bleed black bg; adapt form to docs surface colors |
| `src/data/navigation.js` | Keep `navItems` array; sidebar imports it directly |

### Files to Remove / Deprecate

| File | Action |
|------|--------|
| `src/components/layout/Navigation.js` | Remove from `App.js`; no longer used (sidebar replaces it) |

## Step-by-Step Implementation

### Step 1: Theme Infrastructure

1.1 Update `tailwind.config.js`:
- Add `darkMode: 'class'` at top level.
- Extend `fontFamily` to include `mono: ['"JetBrains Mono"', 'monospace']`.

1.2 Create `src/context/ThemeContext.js`:
- `ThemeProvider` manages `theme` state (`'light' | 'dark'`).
- On mount, read `localStorage.theme` or system preference.
- Apply/remove `dark` class on `<html>`.
- Expose `toggleTheme()` and `theme`.

1.3 Create `src/components/shared/ThemeToggle.js`:
- Button with `Sun` / `Moon` icons from lucide-react.
- Use `ThemeContext`.
- Accessible `aria-label`.

1.4 Update `src/index.js`:
- Wrap `<App />` with `<ThemeProvider>`.

### Step 2: Scroll Spy Hook

2.1 Create `src/hooks/useScrollSpy.js`:
- Accept array of section ids.
- Use `IntersectionObserver` or scroll listener to find which section is nearest top.
- Return `activeId`.

### Step 3: Docs Layout Shell

3.1 Create `src/components/layout/Sidebar.js`:
- Accept `navItems`, `activeId`, `onNavClick`, `onClose` props.
- Fixed position on desktop (`lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64`).
- Logo/name at top.
- Vertical nav list with active pill indicator.
- Footer with social icons and copyright.
- Mobile: hidden by default, shown inside drawer.

3.2 Create `src/components/layout/Header.js`:
- `lg:hidden` top bar.
- Left: hamburger menu button.
- Center/right: logo, theme toggle.

3.3 Create `src/components/layout/DocsLayout.js`:
- State: `sidebarOpen` for mobile.
- Include `<Sidebar>` (desktop visible, mobile drawer) and `<Header>`.
- Main content wrapper: `lg:ml-64 min-h-screen`.
- Apply `bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100` to main area.
- Children render inside a `max-w-3xl mx-auto px-6 py-8` container.

### Step 4: Refactor App.js

4.1 `src/App.js`:
- Import `DocsLayout`.
- Remove `Navigation` import.
- Render sections as children of `DocsLayout`.
- Keep `Analytics` at bottom.

### Step 5: Refactor Sections for Docs Layout

For each section, apply these general rules:
- Remove `max-w-7xl mx-auto` outer wrappers (layout handles width).
- Remove full-bleed background colors; use inherited docs background.
- Replace centered big headings with left-aligned docs headings.
- Use `prose` style content widths (`max-w-none` inside the 3xl container).
- Convert card backgrounds from pure white/black to `bg-slate-50 dark:bg-slate-900` or `bg-white dark:bg-slate-900` with `border-slate-200 dark:border-slate-800`.
- Preserve all animations, data imports, and functionality.

5.1 `Hero.js`:
- Remove `min-h-screen`, black bg, grid background, blur blobs.
- Keep intro text, name, tagline, CTA buttons, social links.
- Style as docs "home" chapter: large name, mono tagline, two CTAs.
- Move the 3 feature cards below intro (no longer hidden; show stacked on all screens).
- Keep off-screen `<Resume>` for PDF export.

5.2 `About.js`:
- Remove white background, radial dots, decorative square.
- Convert summary card into a bordered docs card.
- Keep stats grid (2x2) inside a card.
- Keep tech tags; use mono font.

5.3 `Skills.js`:
- Remove gray background.
- Convert category cards to docs cards.
- Keep masonry columns layout from previous fix.
- Future-Ready Competencies chips use docs badge style.

5.4 `Projects.js`:
- Remove white background.
- Keep 1/2/3 column grid with docs card borders.
- Keep hover overlay; add `focus-within`/`active` state for touch accessibility (small enhancement).

5.5 `Education.js`:
- Remove gray background.
- Keep education card and certification grid.
- Convert card backgrounds to docs surfaces.

5.6 `Contact.js`:
- Remove black background, grid overlay, blur blobs.
- Convert contact info and form to docs cards on light/dark surface.
- Keep EmailJS form logic exactly as-is.
- Move footer copyright to `DocsLayout` sidebar footer.

### Step 6: Responsive & Mobile Drawer

6.1 Mobile sidebar drawer:
- `Header` toggles `sidebarOpen`.
- `DocsLayout` renders backdrop + slide-in `Sidebar` on mobile.
- Close drawer when a nav link is clicked.

6.2 Ensure main content is scrollable:
- Sidebar fixed; main area has `overflow-y-auto` or relies on body scroll.
- Keep `html { scroll-behavior: smooth }`.

6.3 Touch targets:
- Sidebar links at least `py-3`.
- Theme toggle min 44x44px.

### Step 7: Polish

7.1 Update `src/index.css`:
- Import JetBrains Mono.
- Add dark mode scrollbar colors.
- Add `selection:bg-primary-500 selection:text-white`.

7.2 Update `public/index.html`:
- Update `<title>` to "Ou Thorninvithyea — Software Engineer".
- Update meta description if desired.

7.3 Verify PDF export still works:
- `<Resume>` remains off-screen and unchanged.
- Hero Download CV button must still call `exportResumePdf`.

## Risks

- **Hero redesign changes visual identity** — the dark cinematic hero becomes a docs chapter. The user wants this per plan, but it is the most noticeable change.
- **Contact section loses dark bg** — need careful dark-mode color choices to keep contrast.
- **Resume PDF export should keep its current styling** — not affected by docs theme because it's off-screen with inline styles.
- **Mobile drawer complexity** — needs proper z-index and body scroll lock.
- **localStorage theme flash** — without SSR there is minimal risk; class is set early in provider mount.

## Verification

- `npx react-scripts build` compiles without errors.
- Toggle dark mode; colors switch across all sections.
- Resize to 320px, 768px, 1024px, 1440px; layout is usable and readable.
- Click sidebar links; page scrolls to correct section and active state updates.
- Click "Download CV" in Hero; PDF still generates.
- Submit contact form; EmailJS still works.

## Post-MVP Enhancements (Not in this plan)

- Multi-page routing with React Router.
- Blog / Writing section.
- Case-study project pages.
- Search in sidebar.
- Breadcrumbs or "On this page" right-side TOC.
