import os

articles = [
    ("what-is-v0", "What Is Vercel v0? Complete Guide", "Learn what v0 is, how it works, and why it's revolutionizing web development.", "Getting Started"),
    ("how-v0-works", "How v0 Works: From Prompt to Code", "Understand the AI technology behind v0 and how it generates React code.", "Features"),
    ("v0-setup", "Vercel v0 Setup Guide", "Step-by-step guide to setting up your v0 account and first project.", "Getting Started"),
    ("v0-interface", "V0 Interface Tutorial", "Complete tour of the v0 editor interface and features.", "Features"),
    ("v0-prompts-advanced", "Advanced v0 Prompting Techniques", "Master complex prompting for production-ready code.", "Prompt Engineering"),
    ("v0-prompts-beginner", "Beginner v0 Prompts", "Start with these simple prompts to generate your first components.", "Prompt Engineering"),
    ("v0-components", "v0 Component Library", "Explore components v0 can generate: buttons, forms, layouts, and more.", "Features"),
    ("v0-sharedcn", "v0 and shadcn/ui", "How v0 uses shadcn/ui for beautiful, accessible components.", "Features"),
    ("v0-nextjs", "v0 with Next.js", "Build Next.js apps faster with v0 AI code generation.", "Tutorials"),
    ("v0-tailwind", "v0 with Tailwind CSS", "How v0 generates clean Tailwind CSS code.", "Features"),
    ("v0-typescript", "v0 with TypeScript", "Generate type-safe React code with v0.", "Features"),
    ("v0-responsive", "Responsive Design with v0", "How v0 creates mobile-responsive components.", "Features"),
    ("v0-deploy-vercel", "Deploy v0 to Vercel", "One-click deployment from v0 to production.", "Deployment"),
    ("v0-custom-domain", "Custom Domains", "Connect your own domain to v0 projects.", "Deployment"),
    ("v0-env-variables", "Environment Variables", "Managing secrets and config in v0.", "Deployment"),
    ("v0-github", "GitHub Integration", "Connect and sync v0 projects with GitHub.", "Features"),
    ("v0-team", "Team Collaboration", "Work together on v0 projects.", "Features"),
    ("v0-api", "v0 API Reference", "Programmatic access to v0 for automation.", "Features"),
    ("v0-pricing", "v0 Pricing Plans", "Free vs Premium: what's included.", "Pricing"),
    ("v0-free-credits", "Free Credits Guide", "How to maximize your free v0 credits.", "Pricing"),
    ("v0-vs-cursor", "v0 vs Cursor", "Compare v0 with the popular AI code editor.", "Comparisons"),
    ("v0-vs-windsurf", "v0 vs Windsurf", "Compare v0 with Codeium's Windsurf.", "Comparisons"),
    ("v0-vs-replit", "v0 vs Replit", "Compare v0 with Replit Agent.", "Comparisons"),
    ("v0-vs-lovable", "v0 vs Lovable", "Detailed comparison with Lovable.dev.", "Comparisons"),
    ("v0-vs-bolt", "v0 vs Bolt.new", "Compare v0 with StackBlitz Bolt.new.", "Comparisons"),
    ("v0-vs-copilot", "v0 vs GitHub Copilot", "v0 vs Microsoft's AI coding assistant.", "Comparisons"),
    ("v0-vs-claude", "v0 vs Claude AI", "Compare with Anthropic's Claude.", "Comparisons"),
    ("v0-vs-gemini", "v0 vs Google Gemini", "Compare with Google's AI.", "Comparisons"),
    ("v0-business", "v0 for Business", "Team plans and enterprise features.", "Pricing"),
    ("v0-startups", "v0 for Startups", "Build MVPs faster with v0.", "Use Cases"),
    ("v0-freelancers", "v0 for Freelancers", "Deliver projects faster.", "Use Cases"),
    ("v0-agencies", "v0 for Agencies", "Scale your agency with v0.", "Use Cases"),
    ("v0-education", "v0 for Education", "Learn web development with v0.", "Use Cases"),
    ("v0-no-code", "v0 for No-Code", "Bridge the gap between no-code and code.", "Use Cases"),
    ("v0-security", "v0 Security Best Practices", "Keep your v0 projects secure.", "Best Practices"),
    ("v0-performance", "v0 Performance Optimization", "Speed up your v0 apps.", "Best Practices"),
    ("v0-seo", "SEO for v0 Sites", "Optimize your v0-generated sites.", "Best Practices"),
    ("v0-analytics", "Add Analytics", "Integrate analytics into v0 apps.", "Tutorials"),
    ("v0-database", "Connect Database", "Add database to your v0 app.", "Tutorials"),
    ("v0-authentication", "Add Authentication", "User auth with v0.", "Tutorials"),
    ("v0-payments", "Add Payments", "Stripe integration with v0.", "Tutorials"),
    ("v0-email", "Send Emails", "Email integration with v0.", "Tutorials"),
    ("v0-storage", "File Storage", "Upload files with v0.", "Tutorials"),
    ("v0-webhooks", "Webhooks", "Automate with webhooks.", "Tutorials"),
    ("v0-middleware", "Middleware", "Add middleware to v0 apps.", "Tutorials"),
    ("v0-server-actions", "Server Actions", "Use Next.js server actions.", "Tutorials"),
    ("v0-api-routes", "API Routes", "Create API endpoints.", "Tutorials"),
    ("v0-cms", "CMS Integration", "Connect headless CMS.", "Tutorials"),
    ("v0-ecommerce", "Build E-commerce", "Full e-commerce with v0.", "Tutorials"),
    ("v0-saas", "Build SaaS", "Software as a Service with v0.", "Tutorials"),
    ("v0-blog", "Build Blog", "Create a blog with v0.", "Tutorials"),
    ("v0-portfolio", "Build Portfolio", "Developer portfolio with v0.", "Tutorials"),
    ("v0-dashboard", "Build Dashboard", "Admin dashboard with v0.", "Tutorials"),
    ("v0-landing", "Build Landing Page", "Landing page with v0.", "Tutorials"),
    ("v0-mobile", "Mobile App", "PWA with v0.", "Tutorials"),
    ("v0-ai-app", "AI Application", "AI-powered app with v0.", "Tutorials"),
    ("v0-real-time", "Real-time App", "WebSockets with v0.", "Tutorials"),
    ("v0-testing", "Testing v0 Apps", "Test your v0-generated code.", "Best Practices"),
    ("v0-debugging", "Debugging v0 Code", "Fix issues in v0 output.", "Best Practices"),
    ("v0-refactoring", "Refactoring v0 Code", "Improve generated code.", "Best Practices"),
    ("v0-code-review", "Code Review", "Review v0-generated code.", "Best Practices"),
    ("v0-migrations", "Migrating to v0", "Move existing projects to v0.", "Tutorials"),
    ("v0-export", "Export Code", "Download v0 code for other platforms.", "Features"),
    ("v0-templates", "v0 Templates", "Start with pre-built templates.", "Features"),
    ("v0-examples", "v0 Examples", "Real-world examples built with v0.", "Resources"),
    ("v0-showcase", "v0 Showcase", "Sites built with v0.", "Resources"),
    ("v0-community", "v0 Community", "Join the v0 community.", "Resources"),
    ("v0-changelog", "v0 Changelog", "Latest updates and features.", "Resources"),
    ("v0-roadmap", "v0 Roadmap", "What's coming next.", "Resources"),
    ("v0-blogs", "v0 Blog", "Official v0 blog posts.", "Resources"),
    ("v0-docs", "v0 Documentation", "Official documentation.", "Resources"),
    ("v0-faq", "v0 FAQ", "Frequently asked questions.", "FAQ"),
    ("v0-privacy", "Privacy & Data", "How v0 handles your data.", "FAQ"),
    ("v0-terms", "Terms of Service", "v0 terms and conditions.", "Legal"),
    ("v0-license", "License & Commercial Use", "Using v0 code commercially.", "Legal"),
    ("v0-alternatives", "v0 Alternatives", "Other AI code generators.", "Comparisons"),
    ("v0-history", "History of v0", "How v0 was created.", "Getting Started"),
    ("v0-future", "Future of v0", "What's next for v0.", "Features"),
    ("v0-tips", "v0 Pro Tips", "Expert tips for v0.", "Best Practices"),
    ("v0-tricks", "v0 Hidden Features", "Lesser-known v0 features.", "Features"),
    ("v0-shortcuts", "v0 Keyboard Shortcuts", "Speed up your workflow.", "Features"),
    ("v0-workflows", "v0 Workflows", "Efficient development workflows.", "Best Practices"),
    ("v0-integration", "Integration Guide", "Connect with other tools.", "Tutorials"),
    ("v0-web3", "Web3 with v0", "Blockchain apps with v0.", "Tutorials"),
    ("v0-game", "Build Games", "Simple games with v0.", "Tutorials"),
    ("v0-widgets", "Build Widgets", "Embeddable widgets.", "Tutorials"),
    ("v0-pwa", "PWA Features", "Progressive web app with v0.", "Tutorials"),
    ("v0-ssr", "Server-Side Rendering", "SSR with v0.", "Features"),
    ("v0-ssg", "Static Generation", "SSG with v0.", "Features"),
    ("v0-edge", "Edge Functions", "Edge deployment.", "Features"),
    ("v0-preview", "Preview Deployments", "Test before production.", "Deployment"),
    ("v0-branch", "Branch Previews", "Feature branch testing.", "Deployment"),
    ("v0-rollback", "Rollback Guide", "Revert to previous version.", "Deployment"),
    ("v0-monitor", "Monitoring", "Track app performance.", "Best Practices"),
    ("v0-logs", "View Logs", "Debug with logs.", "Best Practices"),
    ("v0-errors", "Error Handling", "Handle errors gracefully.", "Best Practices"),
    ("v0-cache", "Caching", "Improve performance.", "Best Practices"),
    ("v0-cdn", "CDN Setup", "Content delivery network.", "Deployment"),
    ("v0-ssl", "SSL Certificates", "Secure your site.", "Deployment"),
    ("v0-redirects", "URL Redirects", "Manage redirects.", "Deployment"),
    ("v0-robots", "Robots.txt", "SEO configuration.", "Deployment"),
    ("v0-sitemap", "Sitemap", "Generate sitemap.", "Deployment"),
]

for slug, title, desc, category in articles:
    os.makedirs(slug, exist_ok=True)
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} — v0 Guide</title>
    <meta name="description" content="{desc}">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        :root {{ --bg: #030303; --sf: #0a0a0a; --brd: #1a1a1a; --tx: #fafafa; --mt: #888; --ac: #10b981; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{ font-family: 'Inter', system-ui, sans-serif; background: var(--bg); color: var(--tx); line-height: 1.7; }}
        .wrap {{ max-width: 760px; margin: 0 auto; padding: 0 1.5rem; }}
        .nav {{ position: sticky; top: 0; background: rgba(3,3,3,0.95); border-bottom: 1px solid var(--brd); }}
        .nav-wrap {{ max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; padding: 0.85rem 1.5rem; }}
        .nav a {{ font-weight: 900; font-size: 1.1rem; color: var(--tx); text-decoration: none; }}
        h1 {{ font-size: clamp(1.5rem,4vw,2.5rem); font-weight: 800; margin: 2rem 0 1rem; }}
        h2 {{ font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem; }}
        p {{ color: var(--mt); margin-bottom: 1rem; }}
        .badge {{ display: inline-block; padding: 0.25rem 0.75rem; background: var(--ac); color: #000; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }}
        .content {{ background: var(--sf); border: 1px solid var(--brd); border-radius: 12px; padding: 2rem; margin: 1.5rem 0; }}
        .cta {{ display: inline-flex; padding: 0.75rem 1.5rem; background: var(--ac); color: #000; border-radius: 8px; font-weight: 700; text-decoration: none; }}
        footer {{ border-top: 1px solid var(--brd); padding: 2rem 0; margin-top: 4rem; text-align: center; }}
    </style>
</head>
<body>
    <nav class="nav"><div class="nav-wrap"><a href="/v0-site/">▲ v0 Guide</a><a href="https://vercel.com/affiliates" target="_blank" class="cta">Try v0 Free →</a></div></nav>
    <main class="wrap">
        <span class="badge">{category}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div class="content">
            <h2>Overview</h2>
            <p>This guide covers everything you need to know about {title.lower()}.</p>
            <h2>Key Points</h2>
            <ul style="margin: 1rem 0 1rem 1.5rem; color: var(--mt);">
                <li>Easy to get started</li>
                <li>Production-ready code</li>
                <li>Fully responsive</li>
                <li>Dark theme support</li>
            </ul>
            <h2>Getting Started</h2>
            <p>Visit <a href="https://v0.dev" style="color: var(--ac);">v0.dev</a> to try it yourself. The free tier gives you enough to explore all features.</p>
        </div>
        <div style="margin: 3rem 0; padding: 2rem; background: var(--sf); border: 1px solid var(--brd); border-radius: 12px; text-align: center;">
            <a href="https://vercel.com/affiliates" target="_blank" class="cta">Try v0 Free →</a>
        </div>
    </main>
    <footer><div class="wrap"><p><strong>▲ v0 Guide</strong> — The definitive resource for Vercel v0</p></div></footer>
</body>
</html>'''
    with open(f"{slug}/index.html", "w") as f:
        f.write(html)

print(f"Created {len(articles)} article pages")

more_articles = [
    ("v0-twitter", "v0 on Twitter", "Best Twitter accounts to follow for v0", "Resources"),
    ("v0-youtube", "v0 YouTube Channels", "Best YouTube tutorials for v0", "Resources"),
    ("v0-podcasts", "v0 Podcasts", "Podcasts featuring v0", "Resources"),
    ("v0-courses", "v0 Online Courses", "Learn v0 with courses", "Resources"),
    ("v0-books", "v0 Books", "Books about AI coding", "Resources"),
    ("v0-events", "v0 Events", "Conferences and meetups", "Resources"),
    ("v0-newsletter", "v0 Newsletter", "Best newsletters for v0", "Resources"),
    ("v0-discord", "v0 Discord", "Join the community", "Resources"),
    ("v0-reddit", "v0 Subreddit", "r/v0 community", "Resources"),
    ("v0-slack", "v0 Slack", "Slack communities", "Resources"),
    ("v0-meetups", "v0 Meetups", "Local meetups", "Resources"),
    ("v0-hackathons", "v0 Hackathons", "Hackathon events", "Resources"),
    ("v0-awards", "v0 Awards", "Awards and recognition", "Resources"),
    ("v0-case-studies", "v0 Case Studies", "Success stories", "Case Studies"),
    ("v0-testimonials", "v0 Testimonials", "User testimonials", "Case Studies"),
    ("v0-reviews", "v0 Reviews", "User reviews", "Case Studies"),
    ("v0-comparisons-deep", "v0 Deep Comparison", "Detailed feature comparison", "Comparisons"),
    ("v0-pricing-analysis", "v0 Pricing Analysis", "Is v0 worth it?", "Pricing"),
    ("v0-cost-saving", "v0 Cost Savings", "Money saved with v0", "Pricing"),
    ("v0-roi", "v0 ROI Calculator", "Calculate your ROI", "Pricing"),
    ("v0-discounts", "v0 Discounts", "Promotions and discounts", "Pricing"),
    ("v0-coupons", "v0 Coupons", "Coupon codes", "Pricing"),
    ("v0-referral", "v0 Referral Program", "Earn credits", "Pricing"),
    ("v0-affiliate", "v0 Affiliate Program", "Become an affiliate", "Pricing"),
    ("v0-support", "v0 Support", "Get help", "Support"),
    ("v0-contact", "Contact v0", "Contact support", "Support"),
    ("v0-status", "v0 Status", "System status", "Support"),
    ("v0-outages", "v0 Outages", "Past incidents", "Support"),
    ("v0-sla", "v0 SLA", "Service agreement", "Legal"),
    ("v0-dpa", "v0 DPA", "Data processing", "Legal"),
    ("v0-gdpr", "v0 GDPR", "GDPR compliance", "Legal"),
    ("v0-ccpa", "v0 CCPA", "CCPA compliance", "Legal"),
    ("v0-security-whitepaper", "v0 Security", "Security whitepaper", "Legal"),
    ("v0-architecture", "v0 Architecture", "Technical architecture", "Engineering"),
    ("v0-limitations", "v0 Limitations", "Known limitations", "Best Practices"),
    ("v0-known-issues", "v0 Known Issues", "Current issues", "Support"),
    ("v0-beta", "v0 Beta", "Beta features", "Features"),
    ("v0-alpha", "v0 Alpha", "Alpha features", "Features"),
    ("v0-experimental", "v0 Experimental", "Experimental features", "Features"),
    ("v0-deprecated", "v0 Deprecated", "Deprecated features", "Features"),
    ("v0-migration-guide", "v0 Migration", "Migrating between versions", "Tutorials"),
    ("v0-upgrade", "v0 Upgrade Guide", "Upgrading your app", "Tutorials"),
    ("v0-downgrade", "v0 Downgrade", "Downgrading", "Tutorials"),
    ("v0-backup", "v0 Backup", "Backup your code", "Best Practices"),
    ("v0-restore", "v0 Restore", "Restore from backup", "Best Practices"),
    ("v0-export-import", "v0 Export Import", "Move data", "Tutorials"),
    ("v0-migration-errors", "v0 Migration Errors", "Fix migration issues", "Troubleshooting"),
    ("v0-errors", "v0 Common Errors", "Fix common errors", "Troubleshooting"),
    ("v0-debug", "v0 Debug Guide", "Debug issues", "Troubleshooting"),
    ("v0-troubleshoot", "v0 Troubleshooting", "Troubleshoot issues", "Troubleshooting"),
    ("v0-fix", "v0 Fixes", "Quick fixes", "Troubleshooting"),
]

for slug, title, desc, category in more_articles:
    os.makedirs(slug, exist_ok=True)
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} — v0 Guide</title>
    <meta name="description" content="{desc}">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        :root {{ --bg: #030303; --sf: #0a0a0a; --brd: #1a1a1a; --tx: #fafafa; --mt: #888; --ac: #10b981; }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{ font-family: 'Inter', system-ui, sans-serif; background: var(--bg); color: var(--tx); line-height: 1.7; }}
        .wrap {{ max-width: 760px; margin: 0 auto; padding: 0 1.5rem; }}
        .nav {{ position: sticky; top: 0; background: rgba(3,3,3,0.95); border-bottom: 1px solid var(--brd); }}
        .nav-wrap {{ max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; padding: 0.85rem 1.5rem; }}
        .nav a {{ font-weight: 900; font-size: 1.1rem; color: var(--tx); text-decoration: none; }}
        h1 {{ font-size: clamp(1.5rem,4vw,2.5rem); font-weight: 800; margin: 2rem 0 1rem; }}
        h2 {{ font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem; }}
        p {{ color: var(--mt); margin-bottom: 1rem; }}
        .badge {{ display: inline-block; padding: 0.25rem 0.75rem; background: var(--ac); color: #000; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }}
        .content {{ background: var(--sf); border: 1px solid var(--brd); border-radius: 12px; padding: 2rem; margin: 1.5rem 0; }}
        .cta {{ display: inline-flex; padding: 0.75rem 1.5rem; background: var(--ac); color: #000; border-radius: 8px; font-weight: 700; text-decoration: none; }}
        footer {{ border-top: 1px solid var(--brd); padding: 2rem 0; margin-top: 4rem; text-align: center; }}
    </style>
</head>
<body>
    <nav class="nav"><div class="nav-wrap"><a href="/v0-site/">▲ v0 Guide</a><a href="https://vercel.com/affiliates" target="_blank" class="cta">Try v0 Free →</a></div></nav>
    <main class="wrap">
        <span class="badge">{category}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div class="content">
            <h2>Overview</h2>
            <p>Everything you need to know about {title.lower()}.</p>
            <h2>Key Information</h2>
            <ul style="margin: 1rem 0 1rem 1.5rem; color: var(--mt);">
                <li>Comprehensive guide</li>
                <li>Step-by-step instructions</li>
                <li>Best practices</li>
                <li>Expert tips</li>
            </ul>
        </div>
        <div style="margin: 3rem 0; padding: 2rem; background: var(--sf); border: 1px solid var(--brd); border-radius: 12px; text-align: center;">
            <a href="https://vercel.com/affiliates" target="_blank" class="cta">Try v0 Free →</a>
        </div>
    </main>
    <footer><div class="wrap"><p><strong>▲ v0 Guide</strong> — The definitive resource for Vercel v0</p></div></footer>
</body>
</html>'''
    with open(f"{slug}/index.html", "w") as f:
        f.write(html)

print(f"Created {len(more_articles)} more article pages")
