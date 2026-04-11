# IMPLEMENTATION GUIDE - How to Build the New Structure

## Phase 1: Foundation Setup (Week 1)

### Step 1: Update Astro Configuration

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://v0-guide.com',
  base: '/',
  integrations: [sitemap()],
  
  // Important: Enable proper routing
  build: {
    format: 'directory', // Creates /section/page/index.html (best for SEO)
  },
  
  // Redirects for old URLs
  redirects: {
    '/blog/v0-deployment-guide-2026/': '/build/deployment/vercel-deployment/',
    '/categories/features/': '/learn/features/',
    '/demos/accordion-faq/': '/components/interactive/accordion/',
  }
});
```

### Step 2: Create Data Structure

```typescript
// src/data/site.ts
export const SITE_NAME = 'v0 Guide';
export const SITE_URL = 'https://v0-guide.com';
export const SITE_DESCRIPTION = 'The definitive resource for Vercel v0';

export interface Section {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export const SECTIONS: Section[] = [
  {
    id: 'getting-started',
    slug: '/getting-started',
    title: 'Getting Started',
    description: 'Start your v0 journey here',
    icon: '🚀',
    order: 1,
  },
  {
    id: 'learn',
    slug: '/learn',
    title: 'Learning Center',
    description: 'Complete guides and documentation',
    icon: '📚',
    order: 2,
  },
  {
    id: 'build',
    slug: '/build',
    title: 'Build Projects',
    description: 'Hands-on tutorials and examples',
    icon: '🛠️',
    order: 3,
  },
  {
    id: 'components',
    slug: '/components',
    title: 'Components Library',
    description: 'Reusable UI components and patterns',
    icon: '⚙️',
    order: 4,
  },
  {
    id: 'compare',
    slug: '/compare',
    title: 'Comparisons',
    description: 'How v0 compares to competitors',
    icon: '⚖️',
    order: 5,
  },
  {
    id: 'blog',
    slug: '/blog',
    title: 'Blog',
    description: 'News and articles',
    icon: '📰',
    order: 6,
  },
];

export type SectionId = typeof SECTIONS[number]['id'];
```

### Step 3: Create Navigation Helper

```typescript
// src/utils/navigation.ts
import { SECTIONS, type SectionId } from '@data/site';

export interface Breadcrumb {
  label: string;
  url: string;
  current?: boolean;
}

export function generateBreadcrumbs(items: Breadcrumb[]): Breadcrumb[] {
  return [
    { label: 'Home', url: '/' },
    ...items,
  ];
}

export function getSectionBySlug(slug: string): typeof SECTIONS[number] | undefined {
  return SECTIONS.find(s => s.slug === slug);
}

export function getRelatedSections(current: SectionId): typeof SECTIONS[number][] {
  return SECTIONS.filter(s => s.id !== current).slice(0, 3);
}

export function getNextSection(current: SectionId): typeof SECTIONS[number] | undefined {
  const currentIndex = SECTIONS.findIndex(s => s.id === current);
  return SECTIONS[currentIndex + 1];
}
```

---

## Phase 2: Create Layout Components (Week 2)

### Base Layout

```astro
// src/layouts/Base.astro
---
import Navigation from '@components/Navigation.astro';
import Footer from '@components/Footer.astro';

interface Props {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, any>;
}

const { 
  title, 
  description, 
  canonical = Astro.url.href,
  ogImage = 'https://v0-guide.com/og-image.png',
  jsonLd 
} = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title} — v0 Guide</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={canonical} />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    
    <!-- Styles -->
    <link rel="stylesheet" href="/css/styles.css" />
    
    {jsonLd && (
      <script type="application/ld+json" set:html={JSON.stringify(jsonLd)} />
    )}
  </head>
  
  <body>
    <Navigation />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

### Article Layout

```astro
// src/layouts/Article.astro
---
import Base from './Base.astro';
import Breadcrumbs from '@components/Breadcrumbs.astro';
import RelatedContent from '@components/RelatedContent.astro';
import TableOfContents from '@components/TableOfContents.astro';
import { generateBreadcrumbs } from '@utils/navigation';

interface Props {
  title: string;
  description: string;
  breadcrumbs?: Array<{ label: string; url: string }>;
  readTime?: number;
  category?: string;
  tags?: string[];
  relatedContent?: any[];
  canonical?: string;
}

const {
  title,
  description,
  breadcrumbs = [],
  readTime,
  category,
  tags = [],
  relatedContent = [],
  canonical,
} = Astro.props;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url: canonical,
  datePublished: new Date().toISOString(),
};
---

<Base title={title} description={description} canonical={canonical} jsonLd={schema}>
  <Breadcrumbs items={breadcrumbs} />
  
  <article class="article-container">
    <header class="article-header">
      {category && <span class="badge">{category}</span>}
      {tags.map(tag => <span class="badge secondary">{tag}</span>)}
      {readTime && <span class="read-time">{readTime} min read</span>}
    </header>
    
    <h1>{title}</h1>
    <p class="lead">{description}</p>
    
    <TableOfContents />
    
    <div class="article-content">
      <slot />
    </div>
    
    {relatedContent.length > 0 && (
      <RelatedContent items={relatedContent} />
    )}
  </article>
</Base>

<style>
  .article-container {
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
  }
  
  .article-header {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
  
  .badge {
    padding: 0.25rem 0.75rem;
    background: var(--accent);
    color: white;
    border-radius: 4px;
    font-size: 0.8rem;
  }
</style>
```

### Category Hub Layout

```astro
// src/layouts/CategoryHub.astro
---
import Base from './Base.astro';
import Breadcrumbs from '@components/Breadcrumbs.astro';

interface Props {
  title: string;
  description: string;
  icon: string;
  breadcrumbs?: Array<{ label: string; url: string }>;
  items: Array<{
    title: string;
    description: string;
    url: string;
    readTime?: number;
  }>;
}

const { title, description, icon, breadcrumbs = [], items } = Astro.props;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: title,
  description,
  hasPart: items.map(item => ({
    '@type': 'Article',
    name: item.title,
    url: item.url,
  })),
};
---

<Base title={title} description={description} jsonLd={schema}>
  <Breadcrumbs items={breadcrumbs} />
  
  <section class="category-hero">
    <span class="icon">{icon}</span>
    <h1>{title}</h1>
    <p>{description}</p>
  </section>
  
  <section class="content-grid">
    {items.map(item => (
      <a href={item.url} class="content-card">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {item.readTime && <span class="read-time">{item.readTime} min</span>}
      </a>
    ))}
  </section>
</Base>

<style>
  .category-hero {
    text-align: center;
    padding: 3rem 1.5rem;
    border-bottom: 1px solid var(--border);
  }
  
  .icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
  }
  
  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    padding: 2rem 1.5rem;
  }
  
  .content-card {
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
  }
</style>
```

---

## Phase 3: Create Page Files (Week 3)

### Getting Started Hub

```astro
// src/pages/getting-started/index.astro
---
import CategoryHub from '@layouts/CategoryHub.astro';

const items = [
  {
    title: 'What is v0?',
    description: 'A brief introduction to Vercel v0 and how it works',
    url: '/getting-started/what-is-v0/',
    readTime: 5,
  },
  {
    title: 'Pricing Overview',
    description: 'Free tier, paid plans, and what each includes',
    url: '/getting-started/pricing-overview/',
    readTime: 8,
  },
  {
    title: 'FAQ',
    description: 'Common questions and answers',
    url: '/getting-started/faq/',
    readTime: 6,
  },
];
---

<CategoryHub
  title="Getting Started"
  description="Start your v0 journey here"
  icon="🚀"
  items={items}
/>
```

### Learn Hub

```astro
// src/pages/learn/index.astro
---
import CategoryHub from '@layouts/CategoryHub.astro';

const sections = [
  {
    title: 'Guides',
    description: 'Complete guides covering different use cases',
    url: '/learn/guides/',
    readTime: null,
  },
  {
    title: 'Features',
    description: 'Deep dive into each v0 feature',
    url: '/learn/features/',
    readTime: null,
  },
  {
    title: 'Integrations',
    description: 'Connect v0 with your favorite tools',
    url: '/learn/integrations/',
    readTime: null,
  },
  {
    title: 'Best Practices',
    description: 'Security, performance, and optimization guides',
    url: '/learn/best-practices/',
    readTime: null,
  },
];
---

<CategoryHub
  title="Learning Center"
  description="Master v0 with comprehensive guides and documentation"
  icon="📚"
  items={sections}
/>
```

### Learn Guides Hub

```astro
// src/pages/learn/guides/index.astro
---
import CategoryHub from '@layouts/CategoryHub.astro';

const guides = [
  {
    title: 'V0 Beginner Guide',
    description: 'Start here if you are new to v0',
    url: '/learn/guides/v0-beginner-guide/',
    readTime: 15,
  },
  {
    title: 'V0 for Designers',
    description: 'Design-focused workflows and tips',
    url: '/learn/guides/v0-for-designers/',
    readTime: 12,
  },
  {
    title: 'V0 for Developers',
    description: 'Deep dive for technical users',
    url: '/learn/guides/v0-for-developers/',
    readTime: 18,
  },
  {
    title: 'Full Stack Apps Guide',
    description: 'Build complete applications with v0',
    url: '/learn/guides/v0-full-stack-apps/',
    readTime: 20,
  },
];
---

<CategoryHub
  title="V0 Guides"
  description="Choose a guide based on your role or use case"
  icon="📖"
  breadcrumbs={[{ label: 'Learn', url: '/learn/' }]}
  items={guides}
/>
```

### Components Hub

```astro
// src/pages/components/index.astro
---
import CategoryHub from '@layouts/CategoryHub.astro';

const categories = [
  {
    title: 'Layout',
    description: 'Navigation, heroes, grids, and page sections',
    url: '/components/layout/',
    readTime: null,
  },
  {
    title: 'Forms',
    description: 'Text inputs, buttons, and form patterns',
    url: '/components/forms/',
    readTime: null,
  },
  {
    title: 'Tables',
    description: 'Data tables, grids, and data display',
    url: '/components/tables/',
    readTime: null,
  },
  {
    title: 'Cards',
    description: 'Product cards, blog cards, and more',
    url: '/components/cards/',
    readTime: null,
  },
  {
    title: 'Modals',
    description: 'Dialogs, popovers, and overlays',
    url: '/components/modals/',
    readTime: null,
  },
  {
    title: 'Notifications',
    description: 'Toasts, alerts, and banners',
    url: '/components/notifications/',
    readTime: null,
  },
];
---

<CategoryHub
  title="Components Library"
  description="Copy-paste ready UI components"
  icon="⚙️"
  items={categories}
/>
```

### Individual Component Page

```astro
// src/pages/components/forms/multi-step.astro
---
import Article from '@layouts/Article.astro';

const breadcrumbs = [
  { label: 'Components', url: '/components/' },
  { label: 'Forms', url: '/components/forms/' },
  { label: 'Multi-Step Form', url: '/components/forms/multi-step/' },
];

const related = [
  { title: 'Basic Form', url: '/components/forms/basic-form/' },
  { title: 'Stepper', url: '/components/interactive/stepper/' },
];
---

<Article
  title="Multi-Step Form Component"
  description="Build beautiful multi-step forms with progress tracking and validation"
  breadcrumbs={breadcrumbs}
  category="Forms"
  tags={['forms', 'input', 'validation']}
  readTime={10}
  canonical="https://v0-guide.com/components/forms/multi-step/"
  relatedContent={related}
>
  <h2>Overview</h2>
  <p>Multi-step forms are perfect for complex data collection while keeping users engaged.</p>

  <h2>Features</h2>
  <ul>
    <li>Step progress tracking</li>
    <li>Form validation</li>
    <li>Error handling</li>
    <li>Responsive design</li>
  </ul>

  <h2>Code</h2>
  <pre><code class="language-jsx">{`
    // Your component code here
  `}</code></pre>

  <h2>When to Use</h2>
  <ul>
    <li>Onboarding flows</li>
    <li>Multi-page forms</li>
    <li>Signup wizards</li>
  </ul>
</Article>
```

---

## Phase 4: Create Redirect Strategy

```typescript
// src/utils/redirects.ts
export const REDIRECTS: Record<string, string> = {
  // Blog posts → Blog section
  '/blog/v0-beginner-guide/': '/blog/v0-beginner-guide/',
  '/blog/v0-vs-bolt-new/': '/compare/v0-vs-bolt/',
  
  // Categories → Learn section
  '/categories/advanced/': '/learn/guides/',
  '/categories/best-practices/': '/learn/best-practices/',
  '/categories/features/': '/learn/features/',
  '/categories/tutorials/': '/build/',
  
  // Demos → Components section
  '/demos/': '/components/',
  '/demos/accordion-faq/': '/components/interactive/accordion/',
  '/demos/admin-dashboard/': '/components/layout/dashboards/',
  '/demos/forms-example/': '/components/forms/basic-form/',
  
  // Comparisons stay mostly same
  '/compare/v0-vs-bolt-new/': '/compare/v0-vs-bolt/',
};
```

---

## Phase 5: Data Migration

### Old Content to New Structure

```typescript
// Migration script
import fs from 'fs';
import path from 'path';

// Scan old blog posts
const blogPath = './blog';
const blogs = fs.readdirSync(blogPath).filter(f => f !== 'index.html');

blogs.forEach(blog => {
  // Parse existing HTML
  const content = fs.readFileSync(path.join(blogPath, blog, 'index.html'), 'utf-8');
  
  // Create new markdown file
  const newPath = `./src/pages/blog/${blog}/index.md`;
  fs.writeFileSync(newPath, extractMarkdownFromHTML(content));
});
```

---

## Testing Checklist

- [ ] All pages load without errors
- [ ] Breadcrumbs appear on all pages
- [ ] Internal links work correctly
- [ ] Schema markup validates (schema.org)
- [ ] Redirects work (301 status)
- [ ] Mobile responsive
- [ ] Navigation works
- [ ] Search console shows new URLs
- [ ] Analytics tracking updated
- [ ] Meta descriptions show correctly

---

## Deployment Strategy

1. **Build & Test** locally
2. **Deploy to staging** (staging.v0-guide.com)
3. **QA check** - all pages, all links
4. **301 Redirects** - set up all redirects
5. **DNS update** - point to new version
6. **Monitor** - check Google Search Console
7. **Analytics** - verify tracking works
8. **Remove old** files after 2 weeks

