# STEP-BY-STEP REFACTORING PLAN
## Detailed Action Plan for v0-guide.com Rebuild

**Start Date:** April 11, 2026  
**Estimated Duration:** 4-6 weeks (can be done in 2 weeks if full-time)  
**Risk Level:** LOW (keeping old site, building new alongside)

---

## PHASE 0: PREPARATION & SETUP (Days 1-2)

### Goal: Set up the development environment for refactoring

#### Task 0.1: Backup Current Site
```bash
# Create backup
cd /home/yamajid/Desktop
cp -r v0-site v0-site-backup-$(date +%Y%m%d)
```
- [ ] Backup created in /Desktop/
- [ ] Verify backup is complete
- [ ] Mark location: `/Desktop/v0-site-backup-20260411/`

#### Task 0.2: Read Planning Documents
- [ ] Read REFACTORING_GUIDE.md (10 min)
- [ ] Read CURRENT_VS_PROPOSED.md (15 min)
- [ ] Skim SITE_STRUCTURE_REFACTORED.md (20 min)
- [ ] Understand the target structure
- [ ] Note any questions or concerns

#### Task 0.3: Set Up Git for Safe Tracking
```bash
# If not already a git repo
cd /home/yamajid/Desktop/v0-site
git status

# If not initialized
git init
git add .
git commit -m "Initial backup before refactoring"

# Create feature branch for refactoring
git checkout -b refactor/new-hierarchy
```
- [ ] Git initialized
- [ ] Initial commit created
- [ ] Feature branch created
- [ ] Ready to track changes

#### Task 0.4: Create Project Structure for New Build
```bash
cd /home/yamajid/Desktop/v0-site

# Create new directories for refactored content
mkdir -p src/pages/{getting-started,learn,build,components,compare,blog,tools}
mkdir -p src/layouts
mkdir -p src/components/{base,forms,layout,feedback,composite}
mkdir -p src/data
mkdir -p src/utils

# Create new CSS structure
mkdir -p public/css
```
- [ ] New directories created
- [ ] Structure mirrors proposed hierarchy
- [ ] Ready for file creation

#### Task 0.5: Create Refactoring Checklist
Create a detailed checklist file in your project:
- [ ] File created: REFACTORING_CHECKLIST.md
- [ ] All phases documented
- [ ] Mark as you complete tasks

**Status: Phase 0 Complete ✓**

---

## PHASE 1: FOUNDATION & CONFIGURATION (Days 3-4)

### Goal: Update Astro config and create data structures

#### Task 1.1: Update astro.config.mjs
- [ ] Review current config
- [ ] Add proper routing configuration
- [ ] Enable directory format for URLs
- [ ] Add redirect mapping
- Reference: IMPLEMENTATION_GUIDE.md → Phase 1, Step 1

**File to modify:** `astro.config.mjs`

#### Task 1.2: Create Site Data Structure
Create new file: `src/data/site.ts`
- [ ] Define SITE_NAME, SITE_URL, SITE_DESCRIPTION
- [ ] Create SECTIONS array with all major sections
- [ ] Export section types
- Reference: IMPLEMENTATION_GUIDE.md → Phase 1, Step 2

**File to create:** `src/data/site.ts`

#### Task 1.3: Create Navigation Utilities
Create new file: `src/utils/navigation.ts`
- [ ] Function: generateBreadcrumbs()
- [ ] Function: getSectionBySlug()
- [ ] Function: getRelatedSections()
- [ ] Function: getNextSection()
- Reference: IMPLEMENTATION_GUIDE.md → Phase 1, Step 3

**File to create:** `src/utils/navigation.ts`

#### Task 1.4: Create Design Tokens CSS
Create new file: `public/css/tokens.css`
- [ ] Define color variables
- [ ] Define spacing scale
- [ ] Define typography variables
- [ ] Define border radius tokens
- [ ] Define shadows
- [ ] Define z-index hierarchy
- Reference: UI_FIXES_COMPONENT_SYSTEM.md → Design Tokens

**File to create:** `public/css/tokens.css`

#### Task 1.5: Create Main Stylesheet
Create new file: `public/css/styles.css`
- [ ] Import tokens.css
- [ ] Reset default styles
- [ ] Define base element styles
- [ ] Create utility classes
- [ ] Mobile-first responsive patterns

**File to create:** `public/css/styles.css`

**Status: Phase 1 Complete ✓**

---

## PHASE 2: CREATE LAYOUT COMPONENTS (Days 5-6)

### Goal: Build reusable layout components for all pages

#### Task 2.1: Create Base Layout Component
Create file: `src/layouts/Base.astro`
- [ ] Head with meta tags
- [ ] Open Graph tags
- [ ] Favicon links
- [ ] Stylesheet imports
- [ ] Navigation slot
- [ ] Main content slot
- [ ] Footer slot
- [ ] Schema.org JSON-LD support
- Reference: IMPLEMENTATION_GUIDE.md → Phase 2

**File to create:** `src/layouts/Base.astro`

#### Task 2.2: Create Article Layout Component
Create file: `src/layouts/Article.astro`
- [ ] Extends Base layout
- [ ] Breadcrumbs integration
- [ ] Article header (author, date, read time)
- [ ] Main content area
- [ ] Table of contents
- [ ] Related content section
- [ ] Schema.org Article markup
- Reference: IMPLEMENTATION_GUIDE.md → Phase 2

**File to create:** `src/layouts/Article.astro`

#### Task 2.3: Create Category Hub Layout
Create file: `src/layouts/CategoryHub.astro`
- [ ] Extends Base layout
- [ ] Category header with icon
- [ ] Grid of content cards
- [ ] Schema.org CollectionPage markup
- [ ] Proper breadcrumbs

**File to create:** `src/layouts/CategoryHub.astro`

#### Task 2.4: Create Base Components
Create directory: `src/components/base/`

Create file: `src/components/base/Button.astro`
- [ ] Primary, secondary, ghost variants
- [ ] Small, medium, large sizes
- [ ] Disabled state
- [ ] Focus states for accessibility
- Reference: UI_FIXES_COMPONENT_SYSTEM.md → Button Component

**File to create:** `src/components/base/Button.astro`

Create file: `src/components/base/Card.astro`
- [ ] Default, interactive, highlight variants
- [ ] Hover effects
- [ ] Responsive padding
- Reference: UI_FIXES_COMPONENT_SYSTEM.md → Card Component

**File to create:** `src/components/base/Card.astro`

#### Task 2.5: Create Navigation Components
Create file: `src/components/Navigation.astro`
- [ ] Logo/branding
- [ ] Main navigation menu
- [ ] Mobile hamburger menu
- [ ] Responsive design
- [ ] Links to all main sections

**File to create:** `src/components/Navigation.astro`

Create file: `src/components/Breadcrumbs.astro`
- [ ] Accepts breadcrumb array
- [ ] Renders with proper schema
- [ ] Mobile-friendly display
- [ ] Schema.org BreadcrumbList markup

**File to create:** `src/components/Breadcrumbs.astro`

Create file: `src/components/Footer.astro`
- [ ] Site name and description
- [ ] Main navigation links
- [ ] Social links
- [ ] Copyright notice

**File to create:** `src/components/Footer.astro`

#### Task 2.6: Create Utility Components
Create file: `src/components/RelatedContent.astro`
- [ ] Display related pages/articles
- [ ] Card-based layout

**File to create:** `src/components/RelatedContent.astro`

Create file: `src/components/TableOfContents.astro`
- [ ] Generate from markdown headings
- [ ] Sticky navigation
- [ ] Scroll highlighting

**File to create:** `src/components/TableOfContents.astro`

**Status: Phase 2 Complete ✓**

---

## PHASE 3: CREATE PAGE STRUCTURE (Days 7-10)

### Goal: Build the main page hierarchy

#### Task 3.1: Create Home Page
Create file: `src/pages/index.astro`
- [ ] Hero section with overview
- [ ] Links to main sections
- [ ] Quick start callout
- [ ] Feature highlights
- [ ] Schema.org WebSite markup

**File to create:** `src/pages/index.astro`

**Checklist:**
- [ ] Page loads without errors
- [ ] All links work
- [ ] Mobile responsive
- [ ] SEO tags correct

#### Task 3.2: Create Getting Started Section

Create directory structure:
```
src/pages/getting-started/
├── index.astro              (hub page)
├── what-is-v0.astro        (article)
├── pricing-overview.astro  (article)
└── faq.astro               (article)
```

Create file: `src/pages/getting-started/index.astro`
- [ ] Hub page listing all getting started content
- [ ] Use CategoryHub layout
- [ ] 3-5 main entries

**File to create:** `src/pages/getting-started/index.astro`

Create file: `src/pages/getting-started/what-is-v0.astro`
- [ ] What is v0? article
- [ ] Use Article layout
- [ ] Proper breadcrumbs
- [ ] Related content links

**File to create:** `src/pages/getting-started/what-is-v0.astro`

Create files: `pricing-overview.astro`, `faq.astro`
- [ ] Follow same structure as what-is-v0

**Checklist for each page:**
- [ ] Loads without errors
- [ ] Breadcrumbs show correctly
- [ ] SEO meta tags present
- [ ] Internal links work
- [ ] Mobile responsive

#### Task 3.3: Create Learning Center Section

Create directory structure:
```
src/pages/learn/
├── index.astro
├── guides/
│   ├── index.astro
│   ├── v0-beginner-guide.astro
│   ├── v0-for-designers.astro
│   └── [more guides]
├── features/
│   ├── index.astro
│   ├── text-to-code.astro
│   └── [more features]
├── integrations/
│   ├── index.astro
│   └── [integration guides]
└── best-practices/
    ├── index.astro
    └── [practice guides]
```

Create all hub pages (index.astro in each directory):
- [ ] `/learn/index.astro` - Main learning hub
- [ ] `/learn/guides/index.astro` - Guides hub
- [ ] `/learn/features/index.astro` - Features hub
- [ ] `/learn/integrations/index.astro` - Integrations hub
- [ ] `/learn/best-practices/index.astro` - Best practices hub

Create individual guide/feature pages:
- [ ] Migrate content from old `/blog/` posts
- [ ] Use Article layout
- [ ] Add proper breadcrumbs
- [ ] Create internal links

**Content to migrate:**
From `/blog/` → `/learn/guides/`:
- v0-beginner-guide
- v0-for-designers
- v0-for-developers
- v0-for-product-managers
- v0-full-stack-apps-guide
- v0-saas-starter-kit

From `/blog/` → `/learn/features/`:
- v0-agentic-features
- v0-design-mode-tutorial
- v0-figma-to-code
- v0-templates-guide

From `/blog/` → `/learn/integrations/`:
- v0-github-integration-guide
- v0-stripe-integration
- v0-supabase-integration
- v0-database-integrations

From `/blog/` → `/learn/best-practices/`:
- v0-security-best-practices
- v0-team-collaboration-guide

#### Task 3.4: Create Build Projects Section

Create directory structure:
```
src/pages/build/
├── index.astro
├── landing-pages/
│   ├── index.astro
│   └── [landing page tutorials]
├── applications/
│   ├── index.astro
│   └── [app tutorials]
└── deployment/
    ├── index.astro
    └── [deployment guides]
```

Create hub pages:
- [ ] `/build/index.astro`
- [ ] `/build/landing-pages/index.astro`
- [ ] `/build/applications/index.astro`
- [ ] `/build/deployment/index.astro`

Migrate content:
From `/blog/` → `/build/landing-pages/`:
- v0-build-landing-page
- v0-prompts-for-landing-pages

From `/blog/` → `/build/applications/`:
- v0-build-mvp
- v0-build-saas
- v0-saas-starter-kit

From `/blog/` → `/build/deployment/`:
- v0-deployment-guide-2026

#### Task 3.5: Create Comparison Section

Create directory structure:
```
src/pages/compare/
├── index.astro
├── v0-vs-cursor.astro
├── v0-vs-bolt.astro
├── v0-vs-lovable.astro
├── analysis/
│   ├── index.astro
│   ├── features.astro
│   └── pricing.astro
└── alternatives/
    ├── index.astro
    └── free-tools.astro
```

Create all pages:
- [ ] `/compare/index.astro` - Comparison hub
- [ ] `/compare/v0-vs-cursor.astro` - Cursor comparison
- [ ] `/compare/v0-vs-bolt.astro` - Bolt comparison
- [ ] `/compare/v0-vs-lovable.astro` - Lovable comparison
- [ ] And sub-sections

Migrate content:
From `/blog/` → `/compare/`:
- is-v0-worth-it
- v0-vs-bolt-new
- v0-vs-bolt-vs-lovable
- v0-vs-cursor
- v0-vs-cursor-vs-bolt-2026
- v0-vs-lovable

#### Task 3.6: Create Blog Section

Create directory structure:
```
src/pages/blog/
├── index.astro
└── [slug].astro (dynamic route)
```

Create file: `src/pages/blog/index.astro`
- [ ] Blog listing page
- [ ] Shows all posts in reverse chronological order
- [ ] Pagination if needed

Migrate remaining blog posts:
- [ ] All 41 blog posts moved to `/blog/`
- [ ] URLs updated in existing links
- [ ] All posts use Article layout

**Checklist:**
- [ ] All blog posts accessible
- [ ] Latest posts show first
- [ ] Each post has breadcrumbs
- [ ] Search/filter works (optional)

#### Task 3.7: Create Tools & Resources Section

Create directory structure:
```
src/pages/tools/
├── index.astro
├── prompts/
│   ├── index.astro
│   ├── landing-page-prompts.astro
│   └── saas-dashboards.astro
└── templates/
    ├── index.astro
    └── [template guides]
```

Create hub pages and content:
- [ ] `/tools/index.astro` - Tools hub
- [ ] `/tools/prompts/index.astro` - Prompt library hub
- [ ] `/tools/templates/index.astro` - Templates hub

**Status: Phase 3 Complete ✓**

---

## PHASE 4: REORGANIZE COMPONENTS (Days 11-17)

### Goal: Organize 227 components into logical categories

#### Task 4.1: Create Component Index Pages

Create file: `src/pages/components/index.astro`
- [ ] Main components hub
- [ ] Lists all component categories
- [ ] Navigation to each category

Create directory structure:
```
src/pages/components/
├── index.astro
├── layout/
│   ├── index.astro
│   ├── navigation/
│   │   ├── index.astro
│   │   ├── navbar.astro
│   │   ├── sidebar.astro
│   │   └── breadcrumbs.astro
│   ├── hero-sections/
│   │   ├── index.astro
│   │   └── [component examples]
│   └── [other layout components]
├── forms/
│   ├── index.astro
│   └── [form components]
├── inputs/
│   ├── index.astro
│   └── [input components]
├── tables/
│   ├── index.astro
│   └── [table components]
├── cards/
│   ├── index.astro
│   └── [card components]
├── modals/
│   ├── index.astro
│   └── [modal components]
├── notifications/
│   ├── index.astro
│   └── [notification components]
├── interactive/
│   ├── index.astro
│   └── [interactive components]
├── ecommerce/
│   ├── index.astro
│   └── [ecommerce components]
└── misc/
    ├── index.astro
    └── [misc components]
```

#### Task 4.2: Create Component Category Hubs

For EACH category, create:
- [ ] `/components/layout/index.astro` - Lists all layout components
- [ ] `/components/forms/index.astro` - Lists all form components
- [ ] `/components/inputs/index.astro` - Lists all input components
- [ ] `/components/tables/index.astro` - Lists all table components
- [ ] `/components/cards/index.astro` - Lists all card components
- [ ] `/components/modals/index.astro` - Lists all modal components
- [ ] `/components/notifications/index.astro` - Lists all notification components
- [ ] `/components/interactive/index.astro` - Lists all interactive components
- [ ] `/components/ecommerce/index.astro` - Lists all ecommerce components
- [ ] `/components/misc/index.astro` - Lists miscellaneous components

Each category hub should:
- [ ] Use CategoryHub layout
- [ ] List all components in that category
- [ ] Link to individual components

#### Task 4.3: Migrate Components from /demos/

Group components by category:

**Layout Components (25+):**
```
Navigation:
- navbar, sidebar, breadcrumbs, footer, header-menu, mega-menu

Hero Sections (8+):
- hero-section, hero-center-layout, hero-left-visual, hero-asymmetric
- hero-with-countdown, hero-with-stats, hero-with-video-bg, minimal-hero
- modern-saas-hero, split-screen-hero

Section Grids (6+):
- masonry-grid, bento-grid, card-grid-layout, responsive-grid-cards

Other Layout (8+):
- content-with-sidebar, multi-column-footer, off-canvas-sidebar, etc.
```

**Form Components (15+):**
```
- login-form, login-auth-form, contact-form, signup-form
- multi-step-form, survey-form, form-builder, booking-form
- mobile-first-form, reset-password, etc.
```

**Input Components (10+):**
```
- input-fields, select-dropdown, date-picker, file-upload
- search-input, textarea, checkbox-radio, etc.
```

**Table Components (5+):**
```
- table-data, responsive-table-data, responsive-data-table
- kanban-board, data-grid
```

**Card Components (10+):**
```
- product-card, blog-card, team-card, pricing-card
- event-card, job-card, testimonial-card, feature-card, etc.
```

**Modal Components (5+):**
```
- modal-dialog, confirm-modal, slide-over-panel, drawer
- popup-menu
```

**Notification Components (6+):**
```
- toast-notification, alert-banners, inline-alert
- badge, tooltip, popover
```

**Interactive Components (20+):**
```
- tabs, accordion, carousel, dropdown-menu, slider
- stepper, wizard, progress-bar, toggle-switch, etc.
```

**E-commerce Components (15+):**
```
- ecommerce-product-page, cart-summary, checkout-page
- payment-form, invoice, billing-page, coupon-code, etc.
```

**Miscellaneous (40+):**
```
- loader/spinner, rating-component, counter, timer
- calendar, qr-code, gallery, video-player, etc.
```

**Migration checklist:** For each component:
- [ ] Identify correct category
- [ ] Create new directory: `/components/[category]/[component-name]/`
- [ ] Copy HTML/code from `/demos/[component]/`
- [ ] Create index.astro file
- [ ] Add breadcrumbs
- [ ] Add related components
- [ ] Test component displays correctly
- [ ] Update styling to use design tokens
- [ ] Add accessibility attributes

#### Task 4.4: Create Component Pages

For EACH component, create file structure:
```
src/pages/components/[category]/[component-name].astro
```

Example: `src/pages/components/forms/multi-step-form.astro`
Should include:
- [ ] Live preview/demo
- [ ] Code snippet
- [ ] Features list
- [ ] When to use
- [ ] Related components
- [ ] Use Article layout
- [ ] Proper breadcrumbs

**Status: Phase 4 Complete ✓**

---

## PHASE 5: SETUP REDIRECTS & SITEMAPS (Days 18-19)

### Goal: Ensure old URLs are properly redirected for SEO

#### Task 5.1: Create Redirect Map

Create file: `src/utils/redirects.ts`

Map old URLs → new URLs:

```typescript
Old Blog Posts → New Locations:
/blog/v0-beginner-guide/ → /learn/guides/v0-beginner-guide/
/blog/v0-vs-bolt-new/ → /compare/v0-vs-bolt/
/blog/v0-beginner-tips/ → /blog/v0-beginner-tips/
[all 41 blog posts mapped]

Old Categories → New Locations:
/categories/advanced/ → /learn/guides/
/categories/best-practices/ → /learn/best-practices/
/categories/features/ → /learn/features/
[all 12 categories mapped]

Old Demos → New Locations:
/demos/ → /components/
/demos/accordion/ → /components/interactive/accordion/
/demos/admin-dashboard/ → /components/layout/admin-dashboard/
[all 227 components mapped]

Old Comparisons → New Locations:
/compare/v0-vs-bolt-new/ → /compare/v0-vs-bolt/
[mapped comparisons]
```

- [ ] Redirect map created
- [ ] All old URLs mapped to new URLs
- [ ] 301 redirects ready to implement

#### Task 5.2: Implement Redirects in Astro Config

Update: `astro.config.mjs`
```javascript
redirects: {
  '/blog/v0-deployment-guide-2026/': '/build/deployment/vercel-deployment/',
  '/categories/features/': '/learn/features/',
  '/demos/accordion-faq/': '/components/interactive/accordion/',
  // ... all 280+ mappings
}
```

- [ ] All redirects added to config
- [ ] Tested locally
- [ ] Ready to deploy

#### Task 5.3: Create Sitemap

Astro sitemap plugin should auto-generate:
- [ ] Verify `sitemap.xml` generates correctly
- [ ] All new URLs included
- [ ] Priority and changefreq set correctly
- [ ] Test at `your-domain.com/sitemap.xml`

#### Task 5.4: Update robots.txt

Create/update: `public/robots.txt`
```
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://v0-guide.com/sitemap.xml
```

- [ ] robots.txt updated
- [ ] Sitemap URL included
- [ ] Disallow rules set if needed

**Status: Phase 5 Complete ✓**

---

## PHASE 6: SEO & SCHEMA MARKUP (Days 20-21)

### Goal: Optimize for search engines

#### Task 6.1: Add Schema.org Markup

For each page type, ensure schema is present:

**Article pages:**
- [ ] Use Article schema
- [ ] Include datePublished
- [ ] Include author
- [ ] Include wordCount
- [ ] Include mainEntityOfPage

**CategoryPage (hub pages):**
- [ ] Use CollectionPage schema
- [ ] Include hasPart for all items
- [ ] Include name and description

**WebSite (home page):**
- [ ] WebSite schema present
- [ ] SearchAction included
- [ ] Organization info included

**BreadcrumbList (all pages with breadcrumbs):**
- [ ] Every page with breadcrumbs includes BreadcrumbList schema
- [ ] Proper itemListElement structure

#### Task 6.2: Add Internal Linking Strategy

Implement linking between related content:

**What links to what:**
- Getting started → Learn center
- Learn guides → Related features
- Learn features → Build tutorials using that feature
- Build tutorials → Components used
- Components → Related components
- Blog posts → Related sections
- Comparisons → Learn center articles

Each page should have:
- [ ] 3-5 internal links naturally in content
- [ ] "Related content" section with 3-5 suggestions
- [ ] Next/Previous navigation where applicable
- [ ] Link density: 10% (max)

#### Task 6.3: Optimize Meta Tags

For every page, verify:
- [ ] Unique title tag (60 chars max)
- [ ] Descriptive meta description (160 chars max)
- [ ] Canonical URL correct
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Language tags correct
- [ ] Viewport meta tag present

#### Task 6.4: Create SEO Checklist Component

Create file: `src/components/SEOChecklist.astro`

Can be used to verify each page:
```
- [ ] H1 present and unique
- [ ] Keyword in title
- [ ] Keyword in meta description
- [ ] Keyword in first 100 words
- [ ] Subheadings (H2, H3) used
- [ ] Internal links (3-5)
- [ ] Schema markup present
- [ ] Image alt text
- [ ] Mobile responsive
- [ ] Fast load time
```

**Status: Phase 6 Complete ✓**

---

## PHASE 7: TESTING & VALIDATION (Days 22-23)

### Goal: Ensure everything works correctly

#### Task 7.1: Local Testing

```bash
# Build the site locally
npm run build

# Check for build errors
# Fix any errors found
```

Checklist:
- [ ] Build completes without errors
- [ ] No console warnings
- [ ] All assets load
- [ ] No missing files

#### Task 7.2: Link Validation

Test all links:
- [ ] All internal links work (404s?)
- [ ] All redirects work (301 status)
- [ ] External links valid
- [ ] Image links work

Tool: Use a link checker
```bash
# Example: linkinator can help
npx linkinator https://localhost:3000 --markdown
```

#### Task 7.3: Mobile Testing

Test on different devices:
- [ ] Mobile (iPhone SE, 375px)
- [ ] Tablet (iPad, 768px)
- [ ] Desktop (1920px)
- [ ] No horizontal scrolling
- [ ] Buttons clickable
- [ ] Text readable

#### Task 7.4: SEO Validation

```bash
# Run Lighthouse
# Check Core Web Vitals
# Verify schema.org markup

# Use: https://search.google.com/test/rich-results
# Paste sitemap.xml URLs
# Verify all schemas show as valid
```

Checklist:
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals good
- [ ] All schema.org markup valid
- [ ] Mobile-friendly test passes

#### Task 7.5: Browser Compatibility

Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

#### Task 7.6: Performance Testing

```bash
# Build for production
npm run build

# Run Lighthouse in production mode
# Check:
# - Page load time
# - First Contentful Paint
# - Largest Contentful Paint
# - Cumulative Layout Shift
```

Targets:
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

#### Task 7.7: Analytics Test

- [ ] Google Analytics tracking code working
- [ ] Events firing correctly
- [ ] Conversions tracked
- [ ] No blocked scripts

**Status: Phase 7 Complete ✓**

---

## PHASE 8: DEPLOYMENT & MONITORING (Days 24-25)

### Goal: Deploy new site and monitor for issues

#### Task 8.1: Pre-Deployment Checklist

Final verification:
- [ ] All tests passing
- [ ] No broken links
- [ ] All redirects working
- [ ] Analytics tracking enabled
- [ ] Backups created
- [ ] Deployment script ready

#### Task 8.2: Submit to Search Engines

```bash
# Google Search Console
- [ ] Verify domain ownership (if not already)
- [ ] Submit sitemap.xml
- [ ] Request crawl of homepage
- [ ] Monitor for crawl errors

# Bing Webmaster Tools
- [ ] Verify domain ownership
- [ ] Submit sitemap.xml
- [ ] Request crawl
```

#### Task 8.3: Deploy to Vercel

If on Vercel, deployment is simple:
```bash
git push origin refactor/new-hierarchy
# Create pull request
# Deploy from PR
# Merge when ready
```

If self-hosted:
- [ ] Build production version: `npm run build`
- [ ] Upload to hosting
- [ ] Verify all routes work
- [ ] Test redirects

#### Task 8.4: First Week Monitoring

Track for 7 days:

**Daily checks:**
- [ ] No server errors in logs
- [ ] All pages loading
- [ ] Redirects working
- [ ] Analytics data flowing

**Weekly report:**
- [ ] Check Search Console for errors
- [ ] Monitor page speed
- [ ] Check user behavior
- [ ] Fix any issues found

#### Task 8.5: Second Week Monitoring

- [ ] Crawl errors in Search Console
- [ ] Mobile usability issues
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals

#### Task 8.6: SEO Rankings

- [ ] Track keyword rankings
- [ ] Monitor traffic trends
- [ ] Check click-through rates
- [ ] Compare to pre-refactor metrics

**Status: Phase 8 Complete ✓**

---

## SUMMARY TIMELINE

| Phase | Days | Tasks | Difficulty |
|-------|------|-------|------------|
| 0: Prep | 1-2 | 5 | Easy |
| 1: Config | 3-4 | 5 | Easy |
| 2: Layouts | 5-6 | 6 | Easy |
| 3: Pages | 7-10 | 7 | Medium |
| 4: Components | 11-17 | 4 | Medium |
| 5: Redirects | 18-19 | 4 | Easy |
| 6: SEO | 20-21 | 4 | Medium |
| 7: Testing | 22-23 | 7 | Medium |
| 8: Deploy | 24-25 | 6 | Easy |
| **TOTAL** | **25 days** | **48 tasks** | **Medium** |

**Note:** Can be compressed to 2 weeks full-time, or extended over 6 weeks part-time.

---

## RISK MITIGATION

### Safety Measures:
- [ ] All changes in git feature branch
- [ ] Full backup created before starting
- [ ] Old site remains untouched
- [ ] Staging environment for testing
- [ ] 301 redirects preserve SEO value
- [ ] Analytics tracking preserved

### Rollback Plan:
If critical issue found:
1. Git revert to previous commit
2. Deploy backup of old site
3. No permanent data loss
4. No SEO damage (via 301 redirects)

---

## Success Criteria

After refactoring, the site should have:

✅ Clear hierarchy: Home → Section → Category → Content  
✅ All 280+ pages reorganized logically  
✅ 227 components in 12 categories  
✅ Breadcrumbs on every page  
✅ 8-12 internal links per page (average)  
✅ Complete schema.org markup  
✅ All old URLs redirect (301) to new locations  
✅ Mobile responsive  
✅ Passes Lighthouse > 90  
✅ Zero broken links  
✅ All SEO tags optimized  
✅ Analytics tracking working  
✅ Expected +25-50% ranking improvement in 3 months  

---

## Next Steps

Choose one:

1. **Start Phase 0** → Tell me "Let's start Phase 0"
2. **Ask questions** → Ask specific questions about steps
3. **Get more detail** → Tell me which task to expand on
4. **Set timeline** → Tell me your preferred pace

**I'm ready to help with each phase step-by-step!**

