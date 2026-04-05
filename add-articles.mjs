// Extra articles to reach 500+ pages
import { writeFileSync, readFileSync } from 'fs';

const DB_PATH = './src/data/db.mjs';
const content = readFileSync(DB_PATH, 'utf8');

const extraGuides = [
  // Getting Started (15 more)
  { cat:'getting-started', slug:'why-v0-matters', title:'Why V0 Matters for Modern Web Development', desc:'How v0 is reshaping frontend workflows and developer productivity.', readTime:'8', date:'2026-04-05', tags:['v0','developer-productivity'] },
  { cat:'getting-started', slug:'history-of-v0', title:'The History and Evolution of Vercel v0', desc:'From experimental tool to production-ready platform — v0\\'s journey.', readTime:'10', date:'2026-04-05', tags:['history','v0'] },
  { cat:'getting-started', slug:'v0-vs-traditional-coding', title:'V0 vs Traditional Coding: When to Use Which', desc:'When AI generation beats manual coding, and when it doesn\\'t.', readTime:'10', date:'2026-04-04', tags:['comparison'] },
  { cat:'getting-started', slug:'v0-career-impact', title:'How V0 Changes the Developer Career Path', desc:'From pure coding to AI-assisted prompt engineering — career advice.', readTime:'8', date:'2026-04-04', tags:['career'] },
  { cat:'getting-started', slug:'first-component-guide', title:'Your First V0 Component: Complete Walkthrough', desc:'Step-by-step walkthrough of creating your first component with v0.', readTime:'12', date:'2026-04-04', tags:['tutorial','beginner'] },
  { cat:'getting-started', slug:'v0-community', title:'The V0 Developer Community: Where to Find Help', desc:'Discord, GitHub, forums — the best places to ask questions.', readTime:'5', date:'2026-04-03', tags:['community'] },
  { cat:'getting-started', slug:'v0-glossary', title:'V0 Glossary: Every Term Explained', desc:'Prompt, agentic, shadcn, Tailwind — all terms you need to know.', readTime:'8', date:'2026-04-03', tags:['reference'] },
  { cat:'getting-started', slug:'v0-vs-no-code', title:'V0 vs No-Code Tools: What\\'s the Difference?', desc:'v0 generates real code vs no-code drag-and-drop — when to use each.', readTime:'10', date:'2026-04-03', tags:['comparison','no-code'] },
  { cat:'getting-started', slug:'v0-mistakes', title:'5 Mistakes Every V0 Beginner Makes', desc:'Common pitfalls and how to avoid them from day one.', readTime:'8', date:'2026-04-02', tags:['beginner'] },
  { cat:'getting-started', slug:'v0-for-designers', title:'V0 for Designers: From Mockup to Code', desc:'How designers can use v0 to turn mockups into real React code.', readTime:'10', date:'2026-04-02', tags:['designers'] },
  { cat:'getting-started', slug:'v0-for-pms', title:'V0 for Product Managers', desc:'How PMs can use v0 for rapid prototyping and stakeholder demos.', readTime:'5', date:'2026-04-02', tags:['product-management'] },
  { cat:'getting-started', slug:'v0-for-marketers', title:'V0 for Marketers: Landing Pages Made Easy', desc:'How marketers create campaign landing pages without developers.', readTime:'8', date:'2026-04-01', tags:['marketers'] },
  { cat:'getting-started', slug:'v0-productivity-tips', title:'10 V0 Productivity Tips', desc:'Shortcuts, workflows, and tricks to work faster with v0.', readTime:'8', date:'2026-04-01', tags:['productivity'] },
  { cat:'getting-started', slug:'v0-mental-model', title:'The V0 Mental Model: How to Think in Prompts', desc:'Shifting from writing code to describing what you want.', readTime:'10', date:'2026-03-31', tags:['learning'] },
  { cat:'getting-started', slug:'v0-ecosystem', title:'The V0 Ecosystem: Vercel, Next.js, and shadcn', desc:'How all the pieces fit together in the v0 stack.', readTime:'10', date:'2026-03-31', tags:['ecosystem'] },
  { cat:'getting-started', slug:'v0-first-day', title:'What to Do on Your First Day with V0', desc:'A structured first-day plan for new v0 users.', readTime:'5', date:'2026-03-30', tags:['beginner'] },
  { cat:'getting-started', slug:'v0-learning-roadmap', title:'Your V0 Learning Roadmap: 30 Days', desc:'A 30-day plan to go from v0 beginner to confident user.', readTime:'10', date:'2026-03-30', tags:['learning'] },
  { cat:'getting-started', slug:'v0-inspiration', title:'Where to Find Inspiration for V0 Prompts', desc:'Dribbble, Awwwards, and other sources for design inspiration.', readTime:'5', date:'2026-03-29', tags:['design'] },

  // Features (20 more)
  { cat:'features', slug:'v0-component-library', title:'Every V0 Component Explained', desc:'Buttons, cards, forms, tables — every component type v0 generates.', readTime:'15', date:'2026-04-05', tags:['components'] },
  { cat:'features', slug:'v0-dark-mode', title:'Dark Mode in V0: Implementation Guide', desc:'How v0 handles dark themes and customizing dark/light switching.', readTime:'8', date:'2026-04-04', tags:['dark-mode'] },
  { cat:'features', slug:'v0-forms', title:'Form Generation in V0: A Deep Dive', desc:'From simple contact forms to multi-step wizards.', readTime:'12', date:'2026-04-04', tags:['forms'] },
  { cat:'features', slug:'v0-routing', title:'Routing in V0-Generated Apps', desc:'How v0 sets up Next.js App Router for multi-page apps.', readTime:'10', date:'2026-04-04', tags:['routing'] },
  { cat:'features', slug:'v0-api-calls', title:'Making API Calls from V0 Apps', desc:'Fetch, axios, server actions — connecting your v0 app to APIs.', readTime:'12', date:'2026-04-03', tags:['api'] },
  { cat:'features', slug:'v0-custom-themes', title:'Custom Theming in V0', desc:'How to make v0 output match your brand identity perfectly.', readTime:'10', date:'2026-04-03', tags:['theming'] },
  { cat:'features', slug:'v0-testing', title:'Testing V0-Generated Components', desc:'Jest, Cypress, Playwright — how to test AI-generated code.', readTime:'10', date:'2026-04-02', tags:['testing'] },
  { cat:'features', slug:'v0-error-handling', title:'Error Handling in V0 Applications', desc:'Try/catch, error boundaries, and fallback UI patterns.', readTime:'8', date:'2026-04-02', tags:['errors'] },
  { cat:'features', slug:'v0-seo', title:'SEO Best Practices for V0 Sites', desc:'Meta tags, structured data, sitemaps — everything for search visibility.', readTime:'12', date:'2026-04-02', tags:['seo'] },
  { cat:'features', slug:'v0-images', title:'Image Optimization in V0 Apps', desc:'Next.js Image component, lazy loading, WebP — image best practices.', readTime:'8', date:'2026-04-01', tags:['images'] },
  { cat:'features', slug:'v0-animations', title:'Adding Animations to V0 Components', desc:'CSS transitions, Framer Motion, and scroll-triggered effects.', readTime:'10', date:'2026-04-01', tags:['animation'] },
  { cat:'features', slug:'v0-accessibility', title:'Accessibility Checklist for V0 Sites', desc:'ARIA, contrast ratios, keyboard nav, screen reader testing.', readTime:'10', date:'2026-04-01', tags:['accessibility'] },
  { cat:'features', slug:'v0-i18n', title:'Internationalization in V0 Apps', desc:'Multi-language support, date formatting, and RTL layouts.', readTime:'8', date:'2026-03-31', tags:['i18n'] },
  { cat:'features', slug:'v0-responsive', title:'Responsive Breakpoints in V0 Output', desc:'How v0 handles mobile, tablet, and desktop breakpoints.', readTime:'8', date:'2026-03-31', tags:['responsive'] },
  { cat:'features', slug:'v0-variants', title:'Component Variants in V0', desc:'How to generate different variants of the same component.', readTime:'5', date:'2026-03-30', tags:['components'] },
  { cat:'features', slug:'v0-export', title:'Copy and Export Code from V0', desc:'How to copy, export, and integrate v0 output into existing projects.', readTime:'8', date:'2026-03-30', tags:['export'] },
  { cat:'features', slug:'v0-sharing', title:'Sharing V0 Components with Your Team', desc:'Share links, collaborate, and get feedback on generations.', readTime:'5', date:'2026-03-29', tags:['collaboration'] },
  { cat:'features', slug:'v0-history', title:'Using the V0 History Panel', desc:'Track, compare, and restore previous versions of generations.', readTime:'5', date:'2026-03-29', tags:['features'] },
  { cat:'features', slug:'v0-collaboration', title:'Collaborative Editing in V0', desc:'Real-time collaboration, comments, and team workflows.', readTime:'8', date:'2026-03-28', tags:['team'] },
  { cat:'features', slug:'v0-code-quality', title:'Assessing Code Quality of V0 Output', desc:'How v0\\'s generated code measures up against human-written code.', readTime:'10', date:'2026-03-28', tags:['code-quality'] },

  // Pricing (8 more)
  { cat:'pricing', slug:'v0-worth-it', title:'Is V0 Worth the Money? Honest Analysis', desc:'ROI analysis comparing v0 costs vs hiring developers.', readTime:'10', date:'2026-04-04', tags:['roi'] },
  { cat:'pricing', slug:'v0-free-max', title:'How to Maximize Your Free V0 Credits', desc:'Tips and tricks to get the most out of the free tier.', readTime:'8', date:'2026-04-03', tags:['free'] },
  { cat:'pricing', slug:'v0-when-upgrade', title:'When to Upgrade from Free to Premium', desc:'Signs you\\'ve outgrown the free tier and need Premium.', readTime:'5', date:'2026-04-02', tags:['upgrade'] },
  { cat:'pricing', slug:'v0-cost-per-project', title:'Cost Per Project on V0', desc:'Calculate how much each project costs in credits.', readTime:'5', date:'2026-04-01', tags:['cost'] },
  { cat:'pricing', slug:'v0-budget', title:'Budget Planning for V0 Usage', desc:'How to plan and forecast v0 costs for your team.', readTime:'8', date:'2026-03-31', tags:['budget'] },
  { cat:'pricing', slug:'v0-free-vs-paid', title:'Free vs Paid V0: Complete Feature Comparison', desc:'Every difference between free and paid tiers side by side.', readTime:'10', date:'2026-03-30', tags:['comparison'] },
  { cat:'pricing', slug:'v0-annual-vs-monthly', title:'Monthly vs Annual V0 Plans: Which Saves More?', desc:'Cost breakdown and when switching to annual makes sense.', readTime:'5', date:'2026-03-29', tags:['savings'] },
  { cat:'pricing', slug:'v0-enterprise-pricing', title:'V0 Custom Enterprise Pricing', desc:'What enterprise plans include and how to negotiate pricing.', readTime:'8', date:'2026-03-28', tags:['enterprise'] },

  // Prompt Engineering (20 more)
  { cat:'prompt-engineering', slug:'v0-prompt-framework', title:'The V0 Prompt Framework: A Systematic Approach', desc:'A repeatable framework for prompts that always work.', readTime:'10', date:'2026-04-05', tags:['framework'] },
  { cat:'prompt-engineering', slug:'v0-context', title:'How Much Context Should You Give V0?', desc:'Finding the sweet spot between too little and too much information.', readTime:'8', date:'2026-04-04', tags:['context'] },
  { cat:'prompt-engineering', slug:'v0-iterative', title:'Iterative Prompting: The Secret to Great V0 Results', desc:'How to refine generated code through successive prompts.', readTime:'10', date:'2026-04-04', tags:['iteration'] },
  { cat:'prompt-engineering', slug:'v0-negative-prompts', title:'Negative Prompts in V0: What NOT to Include', desc:'Common mistakes that lead to poor generated code.', readTime:'8', date:'2026-04-03', tags:['mistakes'] },
  { cat:'prompt-engineering', slug:'v0-prompt-length', title:'How Long Should Your V0 Prompts Be?', desc:'Short vs long prompts — which works better and when.', readTime:'5', date:'2026-04-03', tags:['length'] },
  { cat:'prompt-engineering', slug:'v0-css-prompts', title:'Writing CSS-Focused Prompts for V0', desc:'How to get exactly the styling you want from v0.', readTime:'10', date:'2026-04-02', tags:['css'] },
  { cat:'prompt-engineering', slug:'v0-dark-prompts', title:'Dark Theme Prompts for V0', desc:'How to prompt v0 for beautiful dark mode interfaces.', readTime:'8', date:'2026-04-02', tags:['dark-mode'] },
  { cat:'prompt-engineering', slug:'v0-form-prompts', title:'Complex Form Prompts for V0', desc:'Multi-step forms, validation, error states — complete examples.', readTime:'12', date:'2026-04-01', tags:['forms'] },
  { cat:'prompt-engineering', slug:'v0-responsive-prompts', title:'Responsive Design Prompts for V0', desc:'Prompts that generate mobile-first, responsive layouts.', readTime:'10', date:'2026-04-01', tags:['responsive'] },
  { cat:'prompt-engineering', slug:'v0-a11y-prompts', title:'Accessibility-Focused Prompts for V0', desc:'Prompts that enforce WCAG 2.1 AA standards in generated code.', readTime:'10', date:'2026-03-31', tags:['accessibility'] },
  { cat:'prompt-engineering', slug:'v0-beginner-prompts', title:'Simple Prompts for V0 Beginners', desc:'10 easy-to-use prompts perfect for your first v0 experience.', readTime:'5', date:'2026-03-31', tags:['beginner'] },
  { cat:'prompt-engineering', slug:'v0-expert-prompts', title:'Expert-Level Prompts for V0', desc:'Advanced patterns for complex, production-grade components.', readTime:'15', date:'2026-03-30', tags:['advanced'] },
  { cat:'prompt-engineering', slug:'v0-debug-prompts', title:'Debugging Prompts: Fixing Bad V0 Output', desc:'When v0 generates wrong code — how to fix it with better prompts.', readTime:'10', date:'2026-03-30', tags:['debugging'] },
  { cat:'prompt-engineering', slug:'v0-prompt-test', title:'Testing and Validating Your V0 Prompts', desc:'How to measure prompt quality and iterate on your techniques.', readTime:'5', date:'2026-03-29', tags:['testing'] },
  { cat:'prompt-engineering', slug:'v0-style-prompts', title:'Style Guide Prompts for V0', desc:'Prompts that enforce your brand\\'s design system consistently.', readTime:'8', date:'2026-03-29', tags:['style'] },
  { cat:'prompt-engineering', slug:'v0-error-state-prompts', title:'Error State Prompts for V0', desc:'How to prompt for empty states, error screens, and loading states.', readTime:'8', date:'2026-03-28', tags:['error-states'] },
  { cat:'prompt-engineering', slug:'v0-data-display-prompts', title:'Data Display Prompts: Tables, Charts, Cards', desc:'How to prompt for data visualization components.', readTime:'10', date:'2026-03-28', tags:['data'] },
  { cat:'prompt-engineering', slug:'v0-multi-component', title:'Multi-Component Prompts for V0', desc:'How to prompt for entire page layouts with multiple components.', readTime:'10', date:'2026-03-27', tags:['multi-component'] },
  { cat:'prompt-engineering', slug:'v0-prompt-library', title:'Building Your Personal V0 Prompt Library', desc:'How to organize, save, and reuse your best v0 prompts.', readTime:'8', date:'2026-03-27', tags:['library'] },
  { cat:'prompt-engineering', slug:'v0-prompt-chaining', title:'Prompt Chaining in V0: Multi-Step Workflows', desc:'Chain prompts together for complex multi-step generations.', readTime:'10', date:'2026-03-26', tags:['chaining'] },

  // Tutorials (20 more)
  { cat:'tutorials', slug:'build-event-landing', title:'Build an Event Landing Page with V0', desc:'Date, venue, speaker cards, schedule grid, and registration form.', readTime:'15', date:'2026-04-04', tags:['event'] },
  { cat:'tutorials', slug:'build-survey', title:'Build a Survey Form with V0', desc:'Multi-question survey with progress bar, validation, and results.', readTime:'10', date:'2026-04-04', tags:['survey'] },
  { cat:'tutorials', slug:'build-user-dashboard', title:'Build a User Dashboard with V0', desc:'User profile, activity feed, settings panel, and notifications.', readTime:'15', date:'2026-04-03', tags:['dashboard'] },
  { cat:'tutorials', slug:'build-product-showcase', title:'Build a Product Showcase with V0', desc:'Grid layout, filters, hover effects, and quick-view modals.', readTime:'12', date:'2026-04-03', tags:['showcase'] },
  { cat:'tutorials', slug:'build-newsletter', title:'Build a Newsletter Landing Page with V0', desc:'Hero, benefits, social proof, email capture, and thank-you.', readTime:'8', date:'2026-04-02', tags:['newsletter'] },
  { cat:'tutorials', slug:'build-job-board', title:'Build a Job Board UI with V0', desc:'Job listings, filters, company profiles, and application forms.', readTime:'12', date:'2026-04-02', tags:['job-board'] },
  { cat:'tutorials', slug:'build-social-feed', title:'Build a Social Feed UI with V0', desc:'Post cards, comments, likes, and user profiles.', readTime:'10', date:'2026-04-01', tags:['social'] },
  { cat:'tutorials', slug:'build-weather-app', title:'Build a Weather App UI with V0', desc:'Current conditions, forecast cards, and location search.', readTime:'10', date:'2026-04-01', tags:['weather'] },
  { cat:'tutorials', slug:'build-dark-toggle', title:'Build a Dark/Light Mode Toggle with V0', desc:'Theme switching, persistence, and system preference detection.', readTime:'8', date:'2026-03-31', tags:['theme'] },
  { cat:'tutorials', slug:'build-search-results', title:'Build a Search Results Page with V0', desc:'Search bar, filters, results grid, and pagination.', readTime:'10', date:'2026-03-31', tags:['search'] },
  { cat:'tutorials', slug:'build-user-profile', title:'Build a User Profile Page with V0', desc:'Avatar, bio, stats, activity feed, and settings.', readTime:'8', date:'2026-03-30', tags:['profile'] },
  { cat:'tutorials', slug:'build-faq-page', title:'Build an FAQ Page with V0', desc:'Accordion FAQ with search, category filters, and contact CTA.', readTime:'8', date:'2026-03-30', tags:['faq'] },
  { cat:'tutorials', slug:'build-about-page', title:'Build an About Page with V0', desc:'Company story, team photos, mission, and values section.', readTime:'5', date:'2026-03-29', tags:['about'] },
  { cat:'tutorials', slug:'build-contact', title:'Build a Contact Page with V0', desc:'Contact form, map, social links, and office info.', readTime:'5', date:'2026-03-29', tags:['contact'] },
  { cat:'tutorials', slug:'build-team-page', title:'Build a Team Page with V0', desc:'Team member cards, org chart, and open positions.', readTime:'8', date:'2026-03-28', tags:['team'] },
  { cat:'tutorials', slug:'build-features-page', title:'Build a Features Page with V0', desc:'Feature breakdown, comparison table, and benefit highlights.', readTime:'8', date:'2026-03-28', tags:['features'] },
  { cat:'tutorials', slug:'build-stats-section', title:'Build a Stats Section with V0', desc:'Counter animations, big numbers, and KPI display layouts.', readTime:'5', date:'2026-03-27', tags:['stats'] },
  { cat:'tutorials', slug:'build-hero-section', title:'Build a Hero Section with V0', desc:'Animated hero, gradient backgrounds, and CTA placement.', readTime:'8', date:'2026-03-27', tags:['hero'] },

  // Deployment (15 more)
  { cat:'deployment', slug:'deploy-netlify', title:'Deploy V0 Apps to Netlify', desc:'Alternative deployment guide for Netlify hosting.', readTime:'8', date:'2026-04-04', tags:['netlify'] },
  { cat:'deployment', slug:'deploy-cloudflare', title:'Deploy V0 Apps to Cloudflare Pages', desc:'Cloudflare deployment with Workers and edge functions.', readTime:'8', date:'2026-04-04', tags:['cloudflare'] },
  { cat:'deployment', slug:'edge-functions', title:'Vercel Edge Functions with V0 Apps', desc:'Adding server-side logic to your v0-generated applications.', readTime:'10', date:'2026-04-03', tags:['edge'] },
  { cat:'deployment', slug:'analytics-setup', title:'Setting Up Analytics for V0 Sites', desc:'Google Analytics, Plausible, and Vercel Analytics integration.', readTime:'8', date:'2026-04-03', tags:['analytics'] },
  { cat:'deployment', slug:'v0-cache', title:'Caching Strategies for V0 Apps', desc:'CDN caching, ISR, revalidation — when and how to cache.', readTime:'10', date:'2026-04-02', tags:['caching'] },
  { cat:'deployment', slug:'v0-monitoring', title:'Production Monitoring for V0 Apps', desc:'Uptime, error tracking, and performance monitoring.', readTime:'8', date:'2026-04-02', tags:['monitoring'] },
  { cat:'deployment', slug:'v0-staging', title:'Setting Up Staging Environments', desc:'Preview changes before pushing to production.', readTime:'5', date:'2026-04-01', tags:['staging'] },
  { cat:'deployment', slug:'v0-lighthouse', title:'Improving Lighthouse Scores for V0 Sites', desc:'Step-by-step guide to achieving 100/100 Lighthouse scores.', readTime:'12', date:'2026-04-01', tags:['lighthouse'] },
  { cat:'deployment', slug:'v0-ci', title:'Setting Up CI/CD for V0 Projects', desc:'GitHub Actions, preview deployments, and automated testing.', readTime:'10', date:'2026-03-31', tags:['ci-cd'] },
  { cat:'deployment', slug:'v0-dns', title:'DNS Setup Guide for V0 Sites', desc:'A records, CNAMEs, and nameserver configuration.', readTime:'5', date:'2026-03-30', tags:['dns'] },
  { cat:'deployment', slug:'v0-email', title:'Setting Up Email for V0 Sites', desc:'Contact forms, transactional email, and notifications.', readTime:'8', date:'2026-03-30', tags:['email'] },
  { cat:'deployment', slug:'v0-gtm', title:'Google Tag Manager Integration for V0', desc:'GTM setup, custom events, and analytics tracking.', readTime:'5', date:'2026-03-29', tags:['gtm'] },
  { cat:'deployment', slug:'v0-redirects', title:'Setting Up Redirects for V0 Sites', desc:'vercel.json redirects, 301s, and maintaining SEO value.', readTime:'5', date:'2026-03-29', tags:['redirects'] },
  { cat:'deployment', slug:'v0-404', title:'Custom 404 Pages for V0 Apps', desc:'Creating helpful error pages when routes don\\'t match.', readTime:'5', date:'2026-03-28', tags:['error-pages'] },

  // Comparisons (12 more)
  { cat:'comparisons', slug:'v0-vs-framer', title:'V0 vs Framer: AI Website Builder Comparison', desc:'Design-to-code vs prompt-to-code — which approach wins?', readTime:'10', date:'2026-04-04', tags:['framer'] },
  { cat:'comparisons', slug:'v0-vs-webflow', title:'V0 vs Webflow: AI vs Visual Builder', desc:'When to use AI generation vs visual drag-and-drop.', readTime:'10', date:'2026-04-03', tags:['webflow'] },
  { cat:'comparisons', slug:'v0-vs-codeium', title:'V0 vs Codeium: Code Generation Compared', desc:'Component generation vs code completion — different tools.', readTime:'8', date:'2026-04-03', tags:['codeium'] },
  { cat:'comparisons', slug:'v0-vs-tabnine', title:'V0 vs Tabnine: AI Coding Assistants', desc:'Tabnine autocomplete vs v0 prompt generation — comparison.', readTime:'8', date:'2026-04-02', tags:['tabnine'] },
  { cat:'comparisons', slug:'v0-vs-figma', title:'V0 vs Figma: Design to Code', desc:'Design tools vs AI generation — can v0 replace Figma?', readTime:'10', date:'2026-04-02', tags:['figma'] },
  { cat:'comparisons', slug:'v0-vs-screenshot', title:'V0 vs Screenshot-to-Code Tools', desc:'Prompting v0 vs uploading screenshots — which works better?', readTime:'10', date:'2026-04-01', tags:['screenshot'] },
  { cat:'comparisons', slug:'v0-vs-gpt-eng', title:'V0 vs GPT Engineer: Full App Generation', desc:'GPT Engineer\\'s approach vs v0\\'s component-focused generation.', readTime:'10', date:'2026-04-01', tags:['gpt-engineer'] },
  { cat:'comparisons', slug:'v0-vs-builder', title:'V0 vs Builder.io: Visual vs AI Generation', desc:'Visual drag-and-drop vs AI prompt generation.', readTime:'8', date:'2026-03-31', tags:['builder-io'] },
  { cat:'comparisons', slug:'v0-vs-plasmic', title:'V0 vs Plasmic: Code Generation Showdown', desc:'Which tool generates better React code for production?', readTime:'10', date:'2026-03-30', tags:['plasmic'] },
  { cat:'comparisons', slug:'v0-vs-weweb', title:'V0 vs WeWeb: Low-Code vs AI Generation', desc:'Low-code platforms vs AI prompt generation.', readTime:'8', date:'2026-03-29', tags:['weweb'] },
  { cat:'comparisons', slug:'v0-vs-bubble', title:'V0 vs Bubble: AI vs No-Code Apps', desc:'Bubble\\'s visual builder vs v0\\'s AI code generation.', readTime:'10', date:'2026-03-28', tags:['bubble'] },
  { cat:'comparisons', slug:'v0-vs-dora', title:'V0 vs Dora: 3D vs 2D AI Generation', desc:'Dora\\'s 3D web generation vs v0\\'s 2D components.', readTime:'8', date:'2026-03-27', tags:['dora'] },

  // Best Practices (15 more)
  { cat:'best-practices', slug:'v0-refactoring', title:'Refactoring V0-Generated Code', desc:'How to clean up and organize AI-generated code for production.', readTime:'10', date:'2026-04-04', tags:['refactoring'] },
  { cat:'best-practices', slug:'v0-git-workflow', title:'Git Workflow for V0 Projects', desc:'Branching strategies, commit patterns, and PR templates.', readTime:'8', date:'2026-04-03', tags:['git'] },
  { cat:'best-practices', slug:'v0-code-review', title:'Code Review Checklist for V0 Output', desc:'What to check before merging AI-generated code.', readTime:'5', date:'2026-04-03', tags:['review'] },
  { cat:'best-practices', slug:'v0-naming', title:'Naming Conventions for V0 Components', desc:'How to name and organize components generated by v0.', readTime:'5', date:'2026-04-02', tags:['naming'] },
  { cat:'best-practices', slug:'v0-file-structure', title:'Optimal File Structure for V0 Projects', desc:'How to organize Next.js apps generated by v0.', readTime:'8', date:'2026-04-02', tags:['structure'] },
  { cat:'best-practices', slug:'v0-docs', title:'Documenting V0-Generated Projects', desc:'README templates, JSDoc, and component documentation.', readTime:'8', date:'2026-04-01', tags:['documentation'] },
  { cat:'best-practices', slug:'v0-collab', title:'Collaborating on V0 Projects', desc:'Sharing prompts, version control, and team review.', readTime:'5', date:'2026-04-01', tags:['collaboration'] },
  { cat:'best-practices', slug:'v0-maintenance', title:'Maintaining V0 Projects Long Term', desc:'Keeping AI-generated codebases healthy and up to date.', readTime:'8', date:'2026-03-31', tags:['maintenance'] },
  { cat:'best-practices', slug:'v0-lazy-loading', title:'Lazy Loading Strategies for V0 Sites', desc:'Dynamic imports, intersection observer, and route splitting.', readTime:'8', date:'2026-03-30', tags:['performance'] },
  { cat:'best-practices', slug:'v0-error-boundaries', title:'Error Boundaries in V0 Applications', desc:'Adding error boundaries to catch and display errors.', readTime:'5', date:'2026-03-30', tags:['errors'] },
  { cat:'best-practices', slug:'v0-semantic-html', title:'Semantic HTML in V0 Output', desc:'How to ensure v0 generates semantically correct HTML.', readTime:'5', date:'2026-03-29', tags:['html'] },
  { cat:'best-practices', slug:'v0-reusability', title:'Making V0 Components Reusable', desc:'Props, variants, and composition patterns for AI-generated code.', readTime:'10', date:'2026-03-29', tags:['reusable'] },
  { cat:'best-practices', slug:'v0-cleanup', title:'Cleaning Up V0-Generated Code', desc:'Removing unused styles, consolidating components.', readTime:'5', date:'2026-03-28', tags:['cleanup'] },
  { cat:'best-practices', slug:'v0-audit', title:'Running Accessibility Audits on V0 Sites', desc:'Lighthouse, axe, and manual a11y testing.', readTime:'8', date:'2026-03-28', tags:['audit'] },
  { cat:'best-practices', slug:'v0-perf-audit', title:'Performance Auditing for V0 Sites', desc:'WebPageTest, Lighthouse CI, and Core Web Vitals.', readTime:'8', date:'2026-03-27', tags:['performance'] },

  // FAQ (15 more)
  { cat:'faq', slug:'v0-enterprise', title:'Is V0 Ready for Enterprise Use?', desc:'Security, compliance, and scalability for enterprises.', readTime:'8', date:'2026-04-04', tags:['enterprise'] },
  { cat:'faq', slug:'v0-license', title:'V0 License and Legal Questions', desc:'Who owns the code, commercial use, legal considerations.', readTime:'5', date:'2026-04-03', tags:['license'] },
  { cat:'faq', slug:'v0-team-size', title:'What Team Size is V0 Best For?', desc:'Solo devs, small teams, and enterprise — where v0 fits.', readTime:'5', date:'2026-04-03', tags:['teams'] },
  { cat:'faq', slug:'v0-integrations', title:'What Tools Does V0 Integrate With?', desc:'GitHub, Vercel, databases, APIs — all supported integrations.', readTime:'5', date:'2026-04-02', tags:['integrations'] },
  { cat:'faq', slug:'v0-future', title:'The Future of V0: What\\'s Coming Next?', desc:'Roadmap predictions, rumored features, and future directions.', readTime:'8', date:'2026-04-02', tags:['future'] },
  { cat:'faq', slug:'v0-support', title:'How to Get Help with V0', desc:'Official support channels, community resources, tips.', readTime:'5', date:'2026-04-01', tags:['support'] },
  { cat:'faq', slug:'v0-update-freq', title:'How Often Is V0 Updated?', desc:'Release cadence, new features, staying current.', readTime:'5', date:'2026-04-01', tags:['updates'] },
  { cat:'faq', slug:'v0-mobile-use', title:'Using V0 on Mobile Devices', desc:'Can you use v0 on phones and tablets?', readTime:'5', date:'2026-03-31', tags:['mobile'] },
  { cat:'faq', slug:'v0-browser-compat', title:'Browser Compatibility of V0 Apps', desc:'What browsers your v0 apps will work in.', readTime:'5', date:'2026-03-31', tags:['browser'] },
  { cat:'faq', slug:'v0-output-formats', title:'What Output Formats Does V0 Support?', desc:'React, Next.js, HTML/CSS — what v0 generates.', readTime:'5', date:'2026-03-30', tags:['formats'] },
  { cat:'faq', slug:'v0-third-party', title:'Can V0 Use Third-Party Libraries?', desc:'Integrating external npm packages with v0.', readTime:'5', date:'2026-03-30', tags:['libraries'] },
  { cat:'faq', slug:'v0-customization', title:'What Are the Limits of V0 Customization?', desc:'Where v0 excels and where you need custom code.', readTime:'8', date:'2026-03-29', tags:['limits'] },
  { cat:'faq', slug:'v0-free-limits', title:'V0 Free Tier Limits Explained', desc:'Exactly what\\'s included and when you\\'ll hit limits.', readTime:'8', date:'2026-03-29', tags:['limits'] },
  { cat:'faq', slug:'v0-cancel', title:'How to Cancel Your V0 Subscription', desc:'Steps to downgrade or cancel, what happens to projects.', readTime:'5', date:'2026-03-28', tags:['cancel'] },

  // Advanced (10 more)
  { cat:'advanced', slug:'v0-server-actions', title:'Server Actions with V0 Apps', desc:'Adding server functions to your v0-generated Next.js apps.', readTime:'12', date:'2026-04-04', tags:['server-actions'] },
  { cat:'advanced', slug:'v0-middleware', title:'Vercel Middleware with V0', desc:'Authentication, redirects, rewrites, and A/B testing.', readTime:'10', date:'2026-04-03', tags:['middleware'] },
  { cat:'advanced', slug:'v0-hooks', title:'Custom React Hooks in V0', desc:'Creating reusable hooks for v0-generated components.', readTime:'10', date:'2026-04-03', tags:['hooks'] },
  { cat:'advanced', slug:'v0-graphql', title:'GraphQL Integration in V0 Apps', desc:'Apollo Client, urql, and schema integration.', readTime:'12', date:'2026-04-02', tags:['graphql'] },
  { cat:'advanced', slug:'v0-monorepo', title:'Using V0 in a Monorepo Setup', desc:'Nx, Turborepo, and pnpm workspaces with v0.', readTime:'10', date:'2026-04-01', tags:['monorepo'] },
  { cat:'advanced', slug:'v0-storybook', title:'Integrating V0 with Storybook', desc:'Documenting and testing v0 components in Storybook.', readTime:'8', date:'2026-04-01', tags:['storybook'] },
  { cat:'advanced', slug:'v0-tokens', title:'Using Design Tokens with V0', desc:'Applying consistent design tokens across v0 generations.', readTime:'8', date:'2026-03-31', tags:['design-tokens'] },
  { cat:'advanced', slug:'v0-edge', title:'Edge Computing with V0 Apps', desc:'Edge Functions, middleware, and caching strategies.', readTime:'10', date:'2026-03-30', tags:['edge'] },
  { cat:'advanced', slug:'v0-cms', title:'CMS Integration with V0', desc:'Sanity, Contentful, and headless CMS patterns.', readTime:'10', date:'2026-03-30', tags:['cms'] },

  // Case Studies (8 more)
  { cat:'case-studies', slug:'agency-case', title:'Agency Cuts Delivery Time by 60% with V0', desc:'Case study of a web agency using v0 for client projects.', readTime:'10', date:'2026-04-04', tags:['agency'] },
  { cat:'case-studies', slug:'saas-dash', title:'SaaS Company Rebuilt Dashboard in 1 Day', desc:'How a SaaS company migrated their dashboard to v0.', readTime:'10', date:'2026-04-03', tags:['saas'] },
  { cat:'case-studies', slug:'ecommerce-gen', title:'E-Commerce Store Generated 50 Pages with V0', desc:'Rapid e-commerce page generation case study.', readTime:'10', date:'2026-04-03', tags:['ecommerce'] },
  { cat:'case-studies', slug:'nonprofit', title:'Nonprofit Built Their Website with V0', desc:'Budget constraints and zero coding experience.', readTime:'8', date:'2026-04-02', tags:['nonprofit'] },
  { cat:'case-studies', slug:'bootcamp', title:'Coding Bootcamp Uses V0 in Curriculum', desc:'Teaching AI-assisted development to students.', readTime:'8', date:'2026-04-01', tags:['education'] },
  { cat:'case-studies', slug:'portfolio', title:'From Blank Canvas to Portfolio in 2 Hours', desc:'Developer builds portfolio site with v0.', readTime:'5', date:'2026-04-01', tags:['portfolio'] },
  { cat:'case-studies', slug:'podcast', title:'Podcast Network Built Site with V0', desc:'Episode listings, player integration, subscription forms.', readTime:'8', date:'2026-03-31', tags:['podcast'] },
  { cat:'case-studies', slug:'teacher', title:'Teacher Built Lesson Planner with V0', desc:'Non-technical user creates useful tool without coding.', readTime:'5', date:'2026-03-30', tags:['education'] },

  // Components (30 more)
  { cat:'components', slug:'testimonial-sections', title:'8 Testimonial Section Templates for V0', desc:'Carousel, grid, slider, and minimalist testimonial layouts.', readTime:'10', date:'2026-04-04', tags:['testimonials'] },
  { cat:'components', slug:'cta-sections', title:'12 Call-to-Action Templates for V0', desc:'Hero CTAs, inline CTAs, and end-of-page conversion sections.', readTime:'12', date:'2026-04-04', tags:['cta'] },
  { cat:'components', slug:'stats-sections', title:'6 Stats/Metrics Section Templates for V0', desc:'Counter animations, big numbers, and KPI displays.', readTime:'8', date:'2026-04-03', tags:['stats'] },
  { cat:'components', slug:'faq-component', title:'5 FAQ Section Templates for V0', desc:'Accordion, grid, and expandable FAQ layouts.', readTime:'8', date:'2026-04-03', tags:['faq'] },
  { cat:'components', slug:'team-sections', title:'7 Team/People Section Templates for V0', desc:'Team cards, profiles, and org chart layouts.', readTime:'8', date:'2026-04-03', tags:['team'] },
  { cat:'components', slug:'blog-sections', title:'8 Blog Section Templates for V0', desc:'Latest posts grid, featured article, and masonry layouts.', readTime:'10', date:'2026-04-02', tags:['blog'] },
  { cat:'components', slug:'sidebar-templates', title:'6 Sidebar Templates for V0', desc:'Navigation, widget, and filter panel sidebars.', readTime:'8', date:'2026-04-02', tags:['sidebar'] },
  { cat:'components', slug:'toggle-templates', title:'5 Toggle/Switch Templates for V0', desc:'Simple toggle, segmented control, and pill-style toggles.', readTime:'5', date:'2026-04-02', tags:['toggle'] },
  { cat:'components', slug:'progress-templates', title:'4 Progress Bar Templates for V0', desc:'Linear, circular, stepper, and multi-stage progress.', readTime:'5', date:'2026-04-02', tags:['progress'] },
  { cat:'components', slug:'dropdown-templates', title:'6 Dropdown Menu Templates for V0', desc:'Single select, multi-select, mega dropdown, context menus.', readTime:'8', date:'2026-04-01', tags:['dropdown'] },
  { cat:'components', slug:'avatar-templates', title:'5 Avatar Templates for V0', desc:'Profile avatars, group avatars, and status indicators.', readTime:'5', date:'2026-04-01', tags:['avatar'] },
  { cat:'components', slug:'badge-templates', title:'6 Badge/Label Templates for V0', desc:'Status badges, role badges, notification badges.', readTime:'5', date:'2026-04-01', tags:['badges'] },
  { cat:'components', slug:'accordion-templates', title:'4 Accordion Templates for V0', desc:'Single open, multi-open, and nested accordion layouts.', readTime:'5', date:'2026-04-01', tags:['accordion'] },
  { cat:'components', slug:'skeleton-templates', title:'4 Skeleton/Loading Templates for V0', desc:'Skeleton loaders for cards, text, lists, and pages.', readTime:'5', date:'2026-04-01', tags:['skeleton'] },
  { cat:'components', slug:'toast-templates', title:'5 Toast/Flash Templates for V0', desc:'Success, error, warning, and info notifications.', readTime:'5', date:'2026-04-01', tags:['toast'] },
  { cat:'components', slug:'search-bar-templates', title:'5 Search Bar Templates for V0', desc:'Simple search, filters, autocomplete, and global search.', readTime:'8', date:'2026-04-01', tags:['search'] },
  { cat:'components', slug:'newsletter-forms', title:'6 Newsletter Form Templates for V0', desc:'Inline, popup, sidebar, and full-width forms.', readTime:'5', date:'2026-04-01', tags:['newsletter'] },
  { cat:'components', slug:'rating-templates', title:'5 Rating/Review Templates for V0', desc:'Star ratings, numeric scores, and review forms.', readTime:'5', date:'2026-04-01', tags:['rating'] },
  { cat:'components', slug:'chat-ui-templates', title:'3 Chat UI Templates for V0', desc:'Chat window, message list, and input area.', readTime:'8', date:'2026-04-01', tags:['chat'] },
  { cat:'components', slug:'pagination-templates', title:'4 Pagination Templates for V0', desc:'Numbered, load more, infinite scroll, and prev/next.', readTime:'5', date:'2026-04-01', tags:['pagination'] },
  { cat:'components', slug:'comparison-tables', title:'4 Comparison Table Templates for V0', desc:'Feature comparison, pricing, and side-by-side layouts.', readTime:'8', date:'2026-04-01', tags:['comparison'] },
  { cat:'components', slug:'breadcrumb-templates', title:'3 Breadcrumb Templates for V0', desc:'Standard, compact, and icon-enhanced breadcrumbs.', readTime:'5', date:'2026-04-01', tags:['breadcrumb'] },
  { cat:'components', slug:'tab-templates', title:'4 Tab/Tab Panel Templates for V0', desc:'Horizontal tabs, vertical tabs, and pill-style tabs.', readTime:'5', date:'2026-04-01', tags:['tabs'] },
  { cat:'components', slug:'alert-templates', title:'6 Alert/Notification Templates for V0', desc:'Success, error, warning, info, and toast alerts.', readTime:'5', date:'2026-04-01', tags:['alerts'] },
  { cat:'components', slug:'cookie-banner', title:'3 Cookie Consent Banner Templates for V0', desc:'GDPR-compliant banners with accept/reject options.', readTime:'5', date:'2026-04-01', tags:['cookie'] },
  { cat:'components', slug:'countdown-templates', title:'3 Countdown Timer Templates for V0', desc:'Launch countdown, event countdown, and promo timer.', readTime:'5', date:'2026-04-01', tags:['countdown'] },
  { cat:'components', slug:'back-to-top', title:'2 Back-to-Top Button Templates for V0', desc:'Floating and scroll-triggered back-to-top buttons.', readTime:'5', date:'2026-04-01', tags:['back-to-top'] },
  { cat:'components', slug:'timeline-templates', title:'4 Timeline Templates for V0', desc:'Vertical timeline, horizontal, and milestone displays.', readTime:'8', date:'2026-04-01', tags:['timeline'] },
  { cat:'components', slug:'file-upload', title:'3 File Upload Templates for V0', desc:'Drag-and-drop, progress indicator, multi-file upload.', readTime:'8', date:'2026-04-01', tags:['file-upload'] },
  { cat:'components', slug:'calendar-templates', title:'3 Calendar Templates for V0', desc:'Monthly calendar, event list, scheduling views.', readTime:'8', date:'2026-04-01', tags:['calendar'] },
];

// Update db.mjs to include extra guides
const insertPoint = content.lastIndexOf('export function allArticles()');
if (insertPoint === -1) {
  console.error('Could not find insertion point in db.mjs');
  process.exit(1);
}

const extraBlock = extraGuides.map(g => 
  `  { cat: '${g.cat}', slug: '${g.slug}', title: '${g.title.replace(/'/g,"\\'")}', desc: '${g.desc.replace(/'/g,"\\'")}', date: '${g.date}', readTime: '${g.readTime}', tags: [${g.tags.map(t=>`'${t}'`).join(',')}] },`
).join('\n');

const newContent = content.slice(0, insertPoint) + extraBlock + '\n\n' + content.slice(insertPoint);
writeFileSync(DB_PATH, newContent);

console.log(`✅ Added ${extraGuides.length} new articles`);
