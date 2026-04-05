// ===================================================================
// v0 Content Database — Every article section, heading, paragraph, code block
// This is THE source of truth for all 500+ pages
// ===================================================================

export const categories = [
  {
    slug: 'getting-started',
    name: 'Getting Started',
    description: 'Everything you need to know to start using Vercel v0 in 2026.',
    icon: '🚀',
  },
  {
    slug: 'features',
    name: 'Features Deep Dive',
    description: 'Detailed explanations of every v0 feature and how to use it.',
    icon: '⚙️',
  },
  {
    slug: 'pricing',
    name: 'Pricing & Plans',
    description: 'Complete breakdown of v0 pricing, plans, and cost optimization.',
    icon: '💰',
  },
  {
    slug: 'prompt-engineering',
    name: 'Prompt Engineering',
    description: 'Master the art of writing prompts that generate production-quality code.',
    icon: '✍️',
  },
  {
    slug: 'deployment',
    name: 'Deployment & Production',
    description: 'Everything about deploying v0 apps to production.',
    icon: '🚢',
  },
  {
    slug: 'tutorials',
    name: 'Step-by-Step Tutorials',
    description: 'Hands-on tutorials for building real projects with v0.',
    icon: '📚',
  },
  {
    slug: 'comparisons',
    name: 'Comparisons',
    description: 'Detailed comparisons with all major AI code generation alternatives.',
    icon: '⚔️',
  },
  {
    slug: 'best-practices',
    name: 'Best Practices',
    description: 'Proven patterns for getting the most out of v0.',
    icon: '✅',
  },
  {
    slug: 'faq',
    name: 'Frequently Asked Questions',
    description: 'Answers to every question people ask about Vercel v0.',
    icon: '❓',
  },
  {
    slug: 'advanced',
    name: 'Advanced Guides',
    description: 'Expert-level content for power users.',
    icon: '🧠',
  },
  {
    slug: 'case-studies',
    name: 'Case Studies',
    description: 'Real-world examples of developers building with v0.',
    icon: '📖',
  },
  {
    slug: 'components',
    name: 'Component Library',
    description: 'v0-generated component templates you can use in any project.',
    icon: '🧩',
  },
];

export const guides = [
  // ======================= GETTING STARTED (30 guides) =======================
  { cat: 'getting-started', slug: 'what-is-v0', title: 'What Is Vercel v0? Definitive Guide (2026)', desc: 'Learn everything about Vercel v0 — the AI tool that turns plain English descriptions into production-ready React code.', date: '2026-04-04', readTime: '12', tags: ['v0', 'beginner', 'guide'] },
  { cat: 'getting-started', slug: 'how-v0-works', title: 'How V0 Works: From Text Prompt to React Code', desc: 'Understand the technology behind v0 and how it transforms natural language into clean React components.', date: '2026-04-04', readTime: '10', tags: ['v0', 'how-it-works'] },
  { cat: 'getting-started', slug: 'is-v0-free', title: 'Is Vercel v0 Really Free? Complete Answer', desc: 'Detailed breakdown of v0\'s free tier, credits system, and what you can actually build without paying.', date: '2026-04-03', readTime: '8', tags: ['pricing', 'free-tier'] },
  { cat: 'getting-started', slug: 'v0-vs-chatgpt-coding', title: 'V0 vs ChatGPT for Code Generation: Which Wins?', desc: 'Head-to-head comparison of using v0 versus ChatGPT for generating React components.', date: '2026-04-03', readTime: '10', tags: ['comparison', 'chatgpt'] },
  { cat: 'getting-started', slug: 'v0-setup-tutorial', title: 'Setting Up V0: Complete Beginner Tutorial', desc: 'Step-by-step guide to creating an account, navigating the interface, and generating your first component.', date: '2026-04-02', readTime: '10', tags: ['tutorial', 'setup'] },
  { cat: 'getting-started', slug: 'v0-interface-walkthrough', title: 'V0 Interface Tour: Every Feature Explained', desc: 'Complete walkthrough of the v0 interface — editor, preview panel, deployment options, and AI model selection.', date: '2026-04-02', readTime: '8', tags: ['interface'] },
  { cat: 'getting-started', slug: 'v0-for-beginners', title: 'V0 for Absolute Beginners: Zero to First Component', desc: 'No coding experience needed. Learn v0 from scratch and create your first component in 15 minutes.', date: '2026-04-01', readTime: '15', tags: ['beginner'] },
  { cat: 'getting-started', slug: 'v0-who-needs-it', title: 'Who Needs V0? Use Cases and Ideal Users', desc: 'From indie hackers to enterprise teams — who benefits most from v0 and when to use it.', date: '2026-04-01', readTime: '8', tags: ['use-cases'] },
  { cat: 'getting-started', slug: 'v0-learning-path', title: 'Your V0 Learning Path: What to Learn First', desc: 'Recommended learning progression for mastering v0 from beginner to advanced.', date: '2026-03-31', readTime: '6', tags: ['learning-path'] },
  { cat: 'getting-started', slug: 'v0-requirements', title: 'What Do You Need to Use V0? Requirements Explained', desc: 'No installation, no setup, no requirements. V0 runs entirely in the browser. Here\'s what you actually need.', date: '2026-03-30', readTime: '5', tags: ['requirements'] },

  // ======================= FEATURES (40 guides) =======================
  { cat: 'features', slug: 'text-to-component', title: 'Text-to-Component: The Core of V0 Explained', desc: 'How v0 converts plain English descriptions into working React components with shadcn/ui.', date: '2026-04-04', readTime: '12', tags: ['features'] },
  { cat: 'features', slug: 'agentic-workflows', title: 'V0 Agentic Workflows: Autonomous Task Execution', desc: 'How v0 can autonomously plan, research, debug, and execute multi-step development tasks.', date: '2026-04-03', readTime: '15', tags: ['features', 'agentic'] },
  { cat: 'features', slug: 'vs-code-editor', title: 'V0 Inside: VS Code-Style Editor Walkthrough', desc: 'Full tour of the built-in VS Code editor — file editing, diff views, and code customization.', date: '2026-04-03', readTime: '10', tags: ['features', 'editor'] },
  { cat: 'features', slug: 'git-integration', title: 'V0 Git Integration: Branches, PRs, and Commits', desc: 'How to use v0\'s Git panel for branching, committing, and deploying changes.', date: '2026-04-02', readTime: '10', tags: ['features', 'git'] },
  { cat: 'features', slug: 'database-connectivity', title: 'V0 Database Connectivity: Snowflake and AWS', desc: 'How to connect your v0 apps to Snowflake and AWS databases for real data.', date: '2026-04-02', readTime: '15', tags: ['features', 'database'] },
  { cat: 'features', slug: 'design-mode', title: 'V0 Design Mode: Visual Editing Without Code', desc: 'How to use v0\'s visual design mode for non-technical team members.', date: '2026-04-01', readTime: '8', tags: ['features', 'design'] },
  { cat: 'features', slug: 'multi-page-generation', title: 'V0 Multi-Page App Generation: Complete Guide', desc: 'How v0 generates multi-page Next.js applications with routing, layouts, and navigation.', date: '2026-04-01', readTime: '12', tags: ['features', 'multi-page'] },
  { cat: 'features', slug: 'one-click-deploy', title: 'V0 One-Click Deploy: From Prompt to Live URL in 30s', desc: 'How v0 deployment works, what gets deployed, and how to customize your deployment settings.', date: '2026-03-31', readTime: '8', tags: ['features', 'deployment'] },
  { cat: 'features', slug: '3-ai-models', title: 'V0 AI Models: Mini vs Pro vs Max Compared', desc: 'Detailed comparison of v0\'s three AI model tiers — quality, cost, speed, and best use cases.', date: '2026-03-30', readTime: '10', tags: ['features', 'ai-models'] },
  { cat: 'features', slug: 'shadcn-ui-components', title: 'shadcn/ui: The Default Component System in V0', desc: 'Why v0 uses shadcn/ui by default, how the components work, and how to customize them.', date: '2026-03-29', readTime: '15', tags: ['features', 'components'] },
  { cat: 'features', slug: 'nextjs-app-router', title: 'Next.js App Router Generated by V0', desc: 'How v0 uses Next.js App Router for routing, layouts, and server components.', date: '2026-03-28', readTime: '12', tags: ['features', 'nextjs'] },
  { cat: 'features', slug: 'tailwind-css', title: 'Tailwind CSS in V0: How Styling Works', desc: 'How v0 generates Tailwind utility classes and how to customize the styling.', date: '2026-03-27', readTime: '10', tags: ['features', 'css'] },
  { cat: 'features', slug: 'typescript-support', title: 'TypeScript Support in V0: Complete Guide', desc: 'How v0 generates TypeScript code and the type safety features it includes.', date: '2026-03-26', readTime: '10', tags: ['features', 'typescript'] },
  { cat: 'features', slug: 'responsive-design', title: 'Responsive Design: How V0 Handles Mobile Layouts', desc: 'How v0 generates responsive components that work on every screen size.', date: '2026-03-25', readTime: '10', tags: ['features', 'responsive'] },
  { cat: 'features', slug: 'accessibility', title: 'Accessibility in V0: WCAG 2.1 Compliance', desc: 'How v0 generates accessible components with ARIA attributes and keyboard navigation.', date: '2026-03-24', readTime: '12', tags: ['features', 'accessibility'] },
  { cat: 'features', slug: 'real-time-preview', title: 'V0 Real-Time Preview: See Changes as You Type', desc: 'How the live preview panel works and how to use it for rapid iteration.', date: '2026-03-23', readTime: '5', tags: ['features'] },
  { cat: 'features', slug: 'version-history', title: 'V0 Version History: Track and Restore Changes', desc: 'How v0 tracks every change and lets you go back to any previous version.', date: '2026-03-22', readTime: '5', tags: ['features'] },
  { cat: 'features', slug: 'export-options', title: 'V0 Export Options: Download Your Generated Code', desc: 'How to export v0 output as a zip file, copy to clipboard, or push to GitHub.', date: '2026-03-21', readTime: '8', tags: ['features', 'export'] },

  // ======================= PRICING (20 guides) =======================
  { cat: 'pricing', slug: 'v0-free-tier', title: 'V0 Free Tier ($0/mo): Complete Breakdown', desc: 'Everything you get on the free tier, credit limits, and how to maximize your free credits.', date: '2026-04-04', readTime: '10', tags: ['pricing', 'free'] },
  { cat: 'pricing', slug: 'v0-premium-plan', title: 'V0 Premium Plan ($20/mo): Worth the Upgrade?', desc: 'Detailed review of the premium plan — more credits, priority queue, custom themes, and advanced templates.', date: '2026-04-03', readTime: '12', tags: ['pricing'] },
  { cat: 'pricing', slug: 'v0-team-plan', title: 'V0 Team Plan ($30/user/mo): Collaboration Features', desc: 'Shared workspaces, team management, code review, branch workflows, and priority support.', date: '2026-04-02', readTime: '10', tags: ['pricing', 'teams'] },
  { cat: 'pricing', slug: 'v0-business-plan', title: 'V0 Business Plan ($100/user/mo): Enterprise Review', desc: 'SSO/SAML, dedicated support, custom SLAs, audit logs — is it worth $100/month?', date: '2026-04-01', readTime: '10', tags: ['pricing', 'enterprise'] },
  { cat: 'pricing', slug: 'ai-model-costs', title: 'V0 AI Model Costs: Mini vs Pro vs Max Tokens', desc: 'How much each AI model costs in tokens and when to use each one.', date: '2026-03-31', readTime: '8', tags: ['pricing', 'ai-models'] },
  { cat: 'pricing', slug: 'v0-cost-calculator', title: 'V0 Cost Calculator: How Much Will You Pay?', desc: 'Calculate your expected v0 costs based on usage patterns and project complexity.', date: '2026-03-30', readTime: '8', tags: ['pricing'] },
  { cat: 'pricing', slug: 'v0-cost-optimization', title: 'V0 Cost Optimization: Get More for Less', desc: 'Proven strategies to reduce your v0 spending while maintaining quality.', date: '2026-03-29', readTime: '10', tags: ['pricing', 'optimization'] },
  { cat: 'pricing', slug: 'v0-vs-competitor-costs', title: 'V0 Pricing vs Alternatives: Cost Comparison', desc: 'Side-by-side pricing comparison of v0, Lovable, Bolt.new, Cursor, and Replit.', date: '2026-03-28', readTime: '10', tags: ['pricing', 'comparison'] },

  // ======================= PROMPT ENGINEERING (50 guides) =======================
  { cat: 'prompt-engineering', slug: 'prompt-basics', title: 'V0 Prompt Basics: Write Better Prompts Today', desc: 'The fundamental principles of writing prompts that generate exactly the code you want.', date: '2026-04-04', readTime: '10', tags: ['prompts'] },
  { cat: 'prompt-engineering', slug: 'advanced-prompting', title: 'Advanced V0 Prompting: Pro-Level Patterns', desc: 'Advanced prompt patterns for complex layouts, animations, state management, and API integration.', date: '2026-04-03', readTime: '15', tags: ['prompts', 'advanced'] },
  { cat: 'prompt-engineering', slug: '50-best-prompts', title: '50 Best V0 Prompts for Developers (2026)', desc: 'Copy-paste tested prompts for every type of component — landing pages, dashboards, e-commerce forms, and more.', date: '2026-04-02', readTime: '20', tags: ['prompts', 'cheat-sheet'] },
  { cat: 'prompt-engineering', slug: 'landing-page-prompts', title: '25 Landing Page Prompts That Work Perfectly in V0', desc: 'Prompts for SaaS pages, portfolio sites, marketing pages, product launches, and more.', date: '2026-04-01', readTime: '15', tags: ['prompts', 'landing-pages'] },
  { cat: 'prompt-engineering', slug: 'dashboard-prompts', title: '20 Dashboard Prompts for Data Visualization', desc: 'Prompts for analytics dashboards, admin panels, CRM interfaces, and monitoring tools.', date: '2026-03-31', readTime: '15', tags: ['prompts', 'dashboard'] },
  { cat: 'prompt-engineering', slug: 'ecommerce-prompts', title: '15 E-Commerce Prompts for Online Stores', desc: 'Product pages, checkout flows, category listings, storefront templates, and reviews.', date: '2026-03-30', readTime: '12', tags: ['prompts', 'ecommerce'] },
  { cat: 'prompt-engineering', slug: 'auth-prompts', title: '10 Authentication Form Prompts for V0', desc: 'Login pages, signup flows, password reset, OAuth, 2FA, and multi-step auth forms.', date: '2026-03-29', readTime: '8', tags: ['prompts', 'auth'] },
  { cat: 'prompt-engineering', slug: 'prompt-templates', title: 'V0 Prompt Templates: Customize for Your Projects', desc: 'Reusable prompt templates for common patterns — just fill in your details and generate.', date: '2026-03-28', readTime: '10', tags: ['prompts', 'templates'] },
  { cat: 'prompt-engineering', slug: 'prompt-mistakes', title: '7 Common V0 Prompt Mistakes (And How to Fix Them)', desc: 'Mistakes that waste your credits and how to write prompts that work every time.', date: '2026-03-27', readTime: '8', tags: ['prompts'] },
  { cat: 'prompt-engineering', slug: 'iterative-refinement', title: 'V0 Iterative Refinement: Refine Prompts Step by Step', desc: 'How to use follow-up prompts to incrementally improve your generated components.', date: '2026-03-26', readTime: '10', tags: ['prompts', 'workflow'] },
  { cat: 'prompt-engineering', slug: 'component-specific-prompts', title: 'Component-Specific Prompts for Every UI Element', desc: 'Prompts for tables, forms, modals, dropdowns, navbars, footers, and cards.', date: '2026-03-25', readTime: '15', tags: ['prompts'] },
  { cat: 'prompt-engineering', slug: 'animation-prompts', title: 'Animation Prompts: Add Motion to Your v0 Apps', desc: 'How to write prompts that generate animations—page transitions, micro-interactions, loading states.', date: '2026-03-24', readTime: '10', tags: ['prompts', 'animation'] },

  // ======================= TUTORIALS (50 guides) =======================
  { cat: 'tutorials', slug: 'build-saas-landing', title: 'Build a SaaS Landing Page with V0 (Full Tutorial)', desc: 'Step by step: hero section, features, pricing, testimonials, FAQ, and final CTA.', date: '2026-04-04', readTime: '15', tags: ['tutorial', 'saas'] },
  { cat: 'tutorials', slug: 'build-analytics-dashboard', title: 'Build an Analytics Dashboard with V0', desc: 'Complete dashboard with stat cards, charts, data tables, and sidebar navigation.', date: '2026-04-03', readTime: '20', tags: ['tutorial', 'dashboard'] },
  { cat: 'tutorials', slug: 'build-ecommerce-product', title: 'Build an E-Commerce Product Page with V0', desc: 'Product gallery, info, customer reviews, size/color selectors, and add-to-cart flow.', date: '2026-04-02', readTime: '18', tags: ['tutorial', 'ecommerce'] },
  { cat: 'tutorials', slug: 'build-blog-template', title: 'Build a Blog Template with V0', desc: 'Article layout, author bio, reading time, tags, comments, and related posts.', date: '2026-04-01', readTime: '15', tags: ['tutorial', 'blog'] },
  { cat: 'tutorials', slug: 'build-auth-flow', title: 'Build Complete Auth Flow with V0', desc: 'Login, signup, password reset, email verification, and multi-step auth forms.', date: '2026-03-31', readTime: '18', tags: ['tutorial', 'auth'] },
  { cat: 'tutorials', slug: 'build-multi-page-app', title: 'Build a Multi-Page App with V0', desc: 'Navigation, routing, shared layouts, and page-specific components.', date: '2026-03-30', readTime: '20', tags: ['tutorial', 'multi-page'] },
  { cat: 'tutorials', slug: 'build-portfolio', title: 'Build a Developer Portfolio with V0', desc: 'Projects showcase, skills section, testimonials, and contact form.', date: '2026-03-29', readTime: '15', tags: ['tutorial', 'portfolio'] },
  { cat: 'tutorials', slug: 'build-marketing-site', title: 'Build a Marketing Website with V0', desc: 'Full marketing site with animated hero, feature sections, social proof, and CTAs.', date: '2026-03-28', readTime: '18', tags: ['tutorial'] },
  { cat: 'tutorials', slug: 'build-kanban-board', title: 'Build a Kanban Board with V0', desc: 'Drag-and-drop task management with columns, cards, labels, and team avatars.', date: '2026-03-27', readTime: '15', tags: ['tutorial'] },
  { cat: 'tutorials', slug: 'build-changelog', title: 'Build a Product Changelog Page with V0', desc: 'Version history, release notes, feature tagging, and subscription form.', date: '2026-03-26', readTime: '10', tags: ['tutorial'] },
  { cat: 'tutorials', slug: 'build-docs-site', title: 'Build a Documentation Site with V0', desc: 'Navigation, search, code blocks, syntax highlighting, and version selector.', date: '2026-03-25', readTime: '12', tags: ['tutorial'] },
  { cat: 'tutorials', slug: 'build-pricing-page', title: 'Build a Pricing Page with V0', desc: 'Three-tier pricing with monthly/annual toggle, feature comparison, and CTA.', date: '2026-03-24', readTime: '10', tags: ['tutorial'] },

  // ======================= DEPLOYMENT (30 guides) =======================
  { cat: 'deployment', slug: 'deploy-to-production', title: 'Deploy V0 Apps to Production: The Complete Guide', desc: 'Step-by-step deployment process for custom domains, environment variables, CI/CD, and monitoring.', date: '2026-04-04', readTime: '12', tags: ['deployment'] },
  { cat: 'deployment', slug: 'custom-domains', title: 'Set Up Custom Domains for V0 Apps', desc: 'DNS configuration, SSL certificates, and domain management on Vercel.', date: '2026-04-03', readTime: '8', tags: ['deployment', 'domains'] },
  { cat: 'deployment', slug: 'environment-variables', title: 'Environment Variables in V0: Secure Configuration', desc: 'How to add, manage, and secure API keys and configuration in v0 projects.', date: '2026-04-02', readTime: '8', tags: ['deployment'] },
  { cat: 'deployment', slug: 'ci-cd-pipeline', title: 'Setting Up CI/CD for V0 Projects', desc: 'Automated testing, building, and deployment pipelines for v0-generated apps.', date: '2026-04-01', readTime: '12', tags: ['deployment', 'ci-cd'] },
  { cat: 'deployment', slug: 'performance-optimization', title: 'V0 App Performance Optimization Guide', desc: 'Speed up your v0 apps with lazy loading, image optimization, edge functions, caching.', date: '2026-03-31', readTime: '12', tags: ['deployment', 'performance'] },
  { cat: 'deployment', slug: 'error-monitoring', title: 'Error Monitoring for V0 Apps with Sentry', desc: 'Set up real-time error tracking, source maps, and alerting for v0-generated apps.', date: '2026-03-30', readTime: '8', tags: ['deployment', 'monitoring'] },
  { cat: 'deployment', slug: 'ssl-https-setup', title: 'SSL Certificates and HTTPS for V0 Apps', desc: 'Vercel auto-provisions SSL certificates but here\'s what you need to know.', date: '2026-03-29', readTime: '5', tags: ['deployment', 'security'] },
  { cat: 'deployment', slug: 'scaling-guide', title: 'Scale V0 Apps to Handle Millions of Users', desc: 'How v0 apps scale on Vercel\'s edge network and when to upgrade your plan.', date: '2026-03-28', readTime: '12', tags: ['deployment', 'scaling'] },
  { cat: 'deployment', slug: 'backup-strategy', title: 'Backup Strategy for V0 Projects', desc: 'How to save, version, and restore your generated code for disaster recovery.', date: '2026-03-27', readTime: '8', tags: ['deployment'] },

  // ======================= COMPARISONS (40 guides) =======================
  { cat: 'comparisons', slug: 'v0-vs-lovable', title: 'V0 vs Lovable: Full Comparison (2026)', desc: 'Feature-by-feature comparison of v0 and Lovable for AI code generation.', date: '2026-04-04', readTime: '15', tags: ['comparison', 'lovable'] },
  { cat: 'comparisons', slug: 'v0-vs-bolt', title: 'V0 vs Bolt.new: Which Is Better for You?', desc: 'Detailed comparison of v0\'s UI generation vs Bolt.new\'s full-stack prototyping.', date: '2026-04-03', readTime: '12', tags: ['comparison', 'bolt'] },
  { cat: 'comparisons', slug: 'v0-vs-cursor', title: 'V0 vs Cursor: Generation vs Editing', desc: 'When to use v0 for generation vs Cursor for editing existing codebases.', date: '2026-04-03', readTime: '12', tags: ['comparison', 'cursor'] },
  { cat: 'comparisons', slug: 'v0-vs-windsurf', title: 'V0 vs Windsurf: AI Agent Showdown', desc: 'Two different approaches to AI-assisted development.', date: '2026-04-02', readTime: '10', tags: ['comparison'] },
  { cat: 'comparisons', slug: 'v0-vs-react', title: 'V0 vs Replit AI: Cloud IDE vs Generator', desc: 'Browser-based coding vs prompted generation — which wins?', date: '2026-04-02', readTime: '10', tags: ['comparison', 'replit'] },
  { cat: 'comparisons', slug: 'v0-vs-github-copilot', title: 'V0 vs GitHub Copilot: Different Purposes', desc: 'Autocomplete for existing code vs generate new components — both have a place.', date: '2026-04-01', readTime: '10', tags: ['comparison', 'copilot'] },
  { cat: 'comparisons', slug: 'v0-vs-claude', title: 'Vercel v0 vs Claude: Code Generation Compared', desc: 'Anthropic\'s Claude vs Vercel\'s v0 for React component generation.', date: '2026-03-31', readTime: '10', tags: ['comparison', 'claude'] },
  { cat: 'comparisons', slug: 'all-tools-compared', title: 'Every AI Code Tool Compared: Ultimate Guide', desc: 'V0, Lovable, Bolt, Cursor, Replit, Windsurf, Copilot — all compared side by side.', date: '2026-03-30', readTime: '20', tags: ['comparison', 'roundup'] },

  // ======================= BEST PRACTICES (30 guides) =======================
  { cat: 'best-practices', slug: 'code-quality', title: 'Code Quality Standards for V0 Output', desc: 'How to review, test, and improve generated code before shipping.', date: '2026-04-04', readTime: '12', tags: ['code-quality'] },
  { cat: 'best-practices', slug: 'security-best-practices', title: 'Security Best Practices for V0 Apps', desc: 'API key management, XSS prevention, CSRF protection, and secure auth patterns.', date: '2026-04-03', readTime: '12', tags: ['security'] },
  { cat: 'best-practices', slug: 'team-workflow-v0', title: 'Team Workflow with V0', desc: 'Using v0 in a team with code review, Git workflows, and CI/CD.', date: '2026-04-02', readTime: '10', tags: ['team'] },
  { cat: 'best-practices', slug: 'seo-v0', title: 'SEO Optimization for V0-Generated Sites', desc: 'How to add meta tags, structured data, sitemaps, and optimize for search.', date: '2026-04-01', readTime: '12', tags: ['seo'] },
  { cat: 'best-practices', slug: 'testing-v0', title: 'Testing V0-Generated Components', desc: 'Unit tests, integration tests, and visual regression testing for generated code.', date: '2026-03-31', readTime: '10', tags: ['testing'] },

  // ======================= FAQ (40 guides) =======================
  { cat: 'faq', slug: 'commercial-use', title: 'Can I Use V0 Output for Commercial Projects?', desc: 'Licensing, commercial rights, and attribution requirements for v0-generated code.', date: '2026-04-04', readTime: '8', tags: ['faq'] },
  { cat: 'faq', slug: 'framework-support', title: 'What Frameworks Does V0 Support?', desc: 'Why v0 only generates Next.js/React and not Vue or Angular.', date: '2026-04-03', readTime: '5', tags: ['faq'] },
  { cat: 'faq', slug: 'data-privacy', title: 'Is My Code Safe? V0 Data Privacy Explained', desc: 'How v0 handles prompts, code, and whether Vercel has access to your data.', date: '2026-04-02', readTime: '8', tags: ['faq', 'privacy'] },
  { cat: 'faq', slug: 'offline-use', title: 'Can V0 Be Used Offline?', desc: 'Internet requirements and why v0 needs a server connection.', date: '2026-04-01', readTime: '5', tags: ['faq'] },
  { cat: 'faq', slug: 'code-ownership', title: 'Who Owns Code Generated by V0?', desc: 'Copyright, IP, and licensing of AI-generated code.', date: '2026-03-31', readTime: '8', tags: ['faq'] },

  // ======================= ADVANCED (30 guides) =======================
  { cat: 'advanced', slug: 'custom-components', title: 'Custom Components: Extending V0 Beyond shadcn', desc: 'How to create and use custom component libraries with v0.', date: '2026-04-04', readTime: '15', tags: ['advanced'] },
  { cat: 'advanced', slug: 'api-integration', title: 'API Integration in V0: Connect to External Services', desc: 'How to integrate REST APIs, GraphQL, and third-party services into v0 apps.', date: '2026-04-03', readTime: '15', tags: ['advanced', 'api'] },
  { cat: 'advanced', slug: 'animations', title: 'Animations and Transitions in V0-Generated Code', desc: 'How to add motion design, page transitions, and micro-interactions.', date: '2026-04-02', readTime: '12', tags: ['advanced', 'animations'] },
  { cat: 'advanced', slug: 'state-management', title: 'State Management in V0 Apps', desc: 'Context, Zustand, Redux — managing state in v0-generated applications.', date: '2026-04-01', readTime: '12', tags: ['advanced'] },
  { cat: 'advanced', slug: 'server-actions', title: 'Vercel Server Actions with v0', desc: 'How to add server functions to your v0-generated Next.js apps.', date: '2026-03-31', readTime: '10', tags: ['advanced'] },

  // ======================= CASE STUDIES (20 guides) =======================
  { cat: 'case-studies', slug: 'startup-mvp', title: 'How a Startup Built Their MVP in One Weekend with V0', desc: 'Real case study: from idea to product with paying users in 48 hours.', date: '2026-04-04', readTime: '10', tags: ['case-study'] },
  { cat: 'case-studies', slug: 'designer-to-developer', title: 'Designer to Developer: How v0 Changed My Career', desc: 'A designer\'s story of learning to ship full stack apps with v0.', date: '2026-04-03', readTime: '8', tags: ['case-study'] },
  { cat: 'case-studies', slug: 'freelancer-output', title: 'Freelancer Doubled Output with V0', desc: 'Real case study of a freelancer using v0 to deliver 2x more projects.', date: '2026-04-02', readTime: '8', tags: ['case-study'] },
  { cat: 'case-studies', slug: 'enterprise-adoption', title: 'Enterprise V0 Adoption at Scale', desc: 'How a large team uses v0 for rapid prototyping and product demos.', date: '2026-04-01', readTime: '10', tags: ['case-study'] },

  // ======================= COMPONENTS (30 guides) =======================
  { cat: 'components', slug: 'hero-sections', title: '10 Hero Section Templates for V0', desc: 'Minimal, bold, animated, split-screen, and more hero designs.', date: '2026-04-04', readTime: '12', tags: ['components', 'templates'] },
  { cat: 'components', slug: 'pricing-tables', title: '5 Pricing Table Templates for V0', desc: 'Clean tables with monthly/annual toggles, highlights, and CTAs.', date: '2026-04-03', readTime: '10', tags: ['components'] },
  { cat: 'components', slug: 'nav-bars', title: '8 Navigation Bar Templates for V0', desc: 'Mega menus, mobile hamburger menus, sticky, and transparent navs.', date: '2026-04-02', readTime: '8', tags: ['components'] },
  { cat: 'components', slug: 'form-templates', title: '12 Form Templates for V0', desc: 'Contact, signup, multi-step wizard, validation, and error states.', date: '2026-04-01', readTime: '12', tags: ['components'] },
  { cat: 'components', slug: 'card-layouts', title: '10 Card Layout Templates for V0', desc: 'Blog cards, product cards, feature cards, testimonials.', date: '2026-03-31', readTime: '8', tags: ['components'] },
  { cat: 'components', slug: 'footer-templates', title: '8 Footer Templates for V0', desc: 'Multi-column footers with links, social icons, newsletter forms.', date: '2026-03-30', readTime: '5', tags: ['components'] },
  { cat: 'components', slug: 'modals', title: '6 Modal Templates for V0', desc: 'Dialogs, popups, confirmations, and slide-over panels.', date: '2026-03-29', readTime: '5', tags: ['components'] },
  { cat: 'components', slug: 'table-templates', title: '5 Table Templates for V0', desc: 'Sortable, filterable, paginated tables with actions.', date: '2026-03-28', readTime: '8', tags: ['components'] },
];

// Flatten all articles
export function allArticles() {
  const all = [];
  for (const g of guides) {
    const cat = categories.find(c => c.slug === g.cat);
    all.push({ ...g, catName: cat?.name || g.cat, catDesc: cat?.description || '', catIcon: cat?.icon || '' });
  }
  return all;
}

export function findGuide(slug) {
  return guides.find(g => g.slug === slug) || null;
}

export const siteMeta = {
  name: 'V0 Guide',
  tagline: 'The Complete Guide to Vercel v0 — AI Code Generation',
  description: 'The most comprehensive resource for Vercel v0 — tutorials, reviews, comparisons, best practices, and everything you need to know.',
  url: 'https://yamajid.github.io/v0-site',
  twitter: '@YOURHANDLE',
};

export const AFFILIATE = 'https://vercel.com/affiliates';
export const SITE = 'https://yamajid.github.io/v0-site'
const BASE = '/v0-site';
