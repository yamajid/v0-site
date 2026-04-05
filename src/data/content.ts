export const AFFILIATE = 'https://vercel.com/affiliates';
export const SITE = 'https://yamajid.github.io/v0-site';

export const posts = [
  {
    slug: 'v0-review',
    title: 'Vercel v0 Review 2026: AI Code Generator That Ships',
    description: 'After 30 days of testing v0, here\'s our honest verdict on Vercel\'s AI code generator — features, pricing, pros, cons, and alternatives.',
    date: '2026-04-04',
    readTime: '12',
    category: 'Review',
    tags: ['v0', 'review'],
    content: `## What Is V0?

v0 is Vercel's AI-powered development tool that generates production-ready React code from plain text prompts. Built on Next.js, Tailwind CSS, and the shadcn/ui component library.

## Key Features

- **Text-to-ui**: Describe any UI and get clean React code instantly
- **Multi-page generation**: Build entire apps with routing and navigation
- **Agentic workflows**: v0 plans, reasons, executes multi-step tasks autonomously
- **vs Code-style editor**: Full code editing with file-by-file views and diffs
- **Git integration**: Create branches, open PRs, deploy on merge
- **Database connect**: Connect to Snowflake and AWS databases
- **One-click deploy**: Ship to Vercel's global edge network in seconds`
  },
  {
    slug: 'v0-vs-competitors',
    title: 'v0 vs Lovable vs Bolt.new vs Cursor: Comparison 2026',
    description: 'We tested all four AI code generators for 30 days. Here\'s the honest feature-by-feature comparison.',
    date: '2026-04-03',
    readTime: '10',
    category: 'Comparison',
    tags: ['v0', 'lovable', 'bolt', 'cursor'],
    content: `## The AI Code Generation Landscape

As of March 2026, four major tools dominate the space. We tested each across 15 criteria.

## v0 — Best for React Development

**Pricing**: Free ($5/mo credits), Premium ($20/mo), Team ($30/user/mo)

**Rating**: 4.6/5

- Best-in-class React code generation
- shadcn/ui components by default
- VS Code-style editor
- Git integration with GitHub sync
- Agentic workflows

## Lovable — Best for Full-Stack Apps

**Pricing**: $20/mo
**Rating**: 4.4/5

- Most intuitive AI app builder
- Generates full-stack apps with Supabase
- Beautiful UI by default
- No free tier

## Bolt.new — Best for Prototyping

**Pricing**: Free tier, $20/mo paid
**Rating**: 4.2/5

- Generate full-stack apps in browser
- Includes database and API
- Fastest zero-to-prototype path

## Cursor — Best IDE

**Pricing**: $20/mo Pro
**Rating**: 4.5/5

- Deep codebase understanding
- Works with any framework
- Best for complex projects`
  }
];

export const tutorials = [
  { title: 'Getting Started with v0', desc: 'Complete beginner guide: account setup, AI models, your first prompt, and deploying your first app.', tag: 'Beginner', tagClass: 'b-ac' },
  { title: 'Build a SaaS Landing Page', desc: 'Step-by-step: hero, features, pricing, and CTA sections in minutes.', tag: 'UI', tagClass: 'b-pur' },
  { title: 'Create an Analytics Dashboard', desc: 'Cards, charts, tables — a complete admin dashboard from a single prompt.', tag: 'Advanced', tagClass: 'b-blu' },
];

export const resources = [
  { icon: '📋', title: 'Prompt Cheat Sheet', desc: '50+ copy-paste prompts for landing pages, dashboards, forms.' },
  { icon: '🎨', title: 'Design Systems', desc: 'Make v0 output match your brand identity.' },
  { icon: '🚀', title: 'Deployment Checklist', desc: 'Domains, env vars, monitoring, CI/CD — everything before going live.' },
  { icon: '♿', title: 'Accessibility Guide', desc: 'ARIA roles, keyboard nav, contrast — don\'t skip this.' },
];
