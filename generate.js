// ===================================================================
// V0.site Page Generator — fully responsive, 117+ pages
// ===================================================================
import { categories as categoriesArr, guides as articlesArr, SITE, AFFILIATE } from './src/data/db.mjs';
import { writeFileSync, mkdirSync } from 'fs';

const BASE = '/v0-site';
const categories = Object.fromEntries(categoriesArr.map(c => [c.slug, c]));
const ESC = (t) => String(t||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const GLOBAL_CSS = `
<style>
:root{--bg:#030303;--sf:#0a0a0a;--sf2:#0f0f0f;--brd:#1a1a1a;--tx:#fafafa;--mt:#888;--mt2:#555;--ac:#10b981;--ac2:#059669;--rad:12px;--rad-sm:8px}
*{margin:0;padding:0;box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{font-family:'Inter',system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--tx);line-height:1.7;-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{color:var(--ac);text-decoration:none}a:hover{color:var(--ac2)}
img{max-width:100%;height:auto}

/* ===== CONTAINER ===== */
.container{width:100%;max-width:1100px;margin:0 auto;padding:0 1.5rem}

/* ===== BUTTONS ===== */
.btn{display:inline-block;padding:.7rem 1.75rem;border-radius:var(--rad-sm);font-weight:700;font-size:.95rem;color:#000!important;background:var(--ac);transition:all .2s;cursor:pointer;border:none;text-align:center}
.btn:hover{background:var(--ac2);transform:translateY(-1px);text-decoration:none}
.btn-lg{padding:.9rem 2.5rem;font-size:1.05rem}

/* ===== BADGE ===== */
.badge{display:inline-block;padding:.15rem .6rem;border-radius:99px;font-size:.7rem;font-weight:700;background:rgba(16,185,129,.12);color:var(--ac)}

/* ===== TYPOGRAPHY ===== */
h1.page-title{font-size:clamp(1.5rem,5vw,2.75rem);font-weight:900;line-height:1.15;letter-spacing:-.02em;word-wrap:break-word;overflow-wrap:break-word}
h2.section-title{font-size:clamp(1.25rem,3vw,2.25rem);font-weight:800;line-height:1.15;letter-spacing:-.02em}
h2{font-size:1.3rem;margin:2rem 0 .75rem;padding-bottom:.35rem;border-bottom:1px solid var(--brd)}
h3{font-size:1.1rem;margin:1.5rem 0 .5rem}
p{color:var(--mt);margin-bottom:1rem;line-height:1.8;font-size:.95rem;word-wrap:break-word}
ul,ol{color:var(--mt);margin-bottom:1rem;padding-left:1.5rem}
li{margin-bottom:.5rem;line-height:1.7}
hr{border:none;border-top:1px solid var(--brd);margin:2rem 0}

/* ===== NAVIGATION ===== */
.topnav{position:sticky;top:0;z-index:100;background:rgba(3,3,3,.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--brd)}
.topnav-inner{max-width:1100px;margin:0 auto;padding:.75rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:.5rem}
.topnav-brand{font-weight:900;font-size:1.1rem;color:var(--tx)!important;flex-shrink:0}
.topnav-links{display:flex;align-items:center;gap:1rem;flex-wrap:nowrap}
.topnav-links a{color:var(--mt);font-size:.85rem;font-weight:500;white-space:nowrap}.topnav-links a:hover{color:var(--tx)}
.topnav-cta{color:#000!important;background:var(--ac);padding:.4rem .9rem!important;border-radius:var(--rad-sm)!important;font-weight:700!important;font-size:.8rem!important;white-space:nowrap;flex-shrink:0}
.ham-btn{display:none;background:none;border:none;color:var(--tx);font-size:1.75rem;cursor:pointer;line-height:1;padding:.25rem;flex-shrink:0}

/* ===== HERO ===== */
.hero{padding:3.5rem 0 2.5rem;background:linear-gradient(180deg,var(--sf) 0%,var(--bg) 100%)}
.hero .badge-wrap{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border-radius:99px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);color:var(--ac);font-size:.75rem;font-weight:700;margin-bottom:1.5rem;flex-wrap:wrap;justify-content:center;text-align:center}
.hero p.intro{color:var(--mt);font-size:1rem;max-width:600px;margin:0 auto 1.5rem;line-height:1.7}
.hero-stats{display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem}
.hero-stats div{text-align:center}
.hero-stats .stat-num{font-size:1.5rem;font-weight:900;color:var(--ac)}
.hero-stats .stat-label{font-size:.7rem;color:var(--mt);text-transform:uppercase;letter-spacing:.04em;display:block;margin-top:.15rem}

/* ===== CTA BOX ===== */
.cta-box{text-align:center;padding:2rem;background:var(--sf);border-radius:var(--rad-sm);border:1px solid var(--brd);margin:2rem auto;max-width:700px;width:100%}

/* ===== CARD GRID ===== */
.card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:.75rem}

/* ===== FOOTER ===== */
.site-footer{border-top:1px solid var(--brd);padding:2rem 0;text-align:center}
.footer-links{display:flex;justify-content:center;flex-wrap:wrap;gap:.25rem 1rem;margin-bottom:1rem}
.footer-links a{color:var(--mt);font-size:.85rem}

/* ===== ARTICLE ===== */
.article-wrap{max-width:760px;margin:0 auto;padding:2rem 0 4rem}
.breadcrumb{background:var(--sf);padding:.75rem 0;border-bottom:1px solid var(--brd)}
.breadcrumb ol{list-style:none;display:flex;gap:.5rem;font-size:.8rem;color:var(--mt2);flex-wrap:wrap;align-items:center}

/* ===== SECTION ===== */
.section{margin-bottom:3rem}

/* =================================================================
   RESPONSIVE — Tablet (≤960px)
   ================================================================= */
@media(max-width:960px){
  .topnav-links{display:none!important;position:absolute;top:100%;left:0;right:0;background:rgba(3,3,3,.98)!important;padding:1rem 1.5rem;flex-direction:column;align-items:flex-start;gap:.75rem;border-top:1px solid var(--brd);width:100%}
  .topnav-links.open{display:flex!important}
  .ham-btn{display:block}
}

/* =================================================================
   RESPONSIVE — Mobile (≤768px)
   ================================================================= */
@media(max-width:768px){
  .container{padding:0 1rem!important}
  .card-grid{grid-template-columns:1fr!important}
  .hero{padding:2.5rem 0 2rem!important}
  .hero p.intro{font-size:.95rem!important}
  .hero-stats{flex-direction:row;flex-wrap:wrap;gap:1rem!important;justify-content:center}
  .hero .btn-lg{width:100%;text-align:center;display:block}
  .hero-stats div{min-width:80px}
  .section{margin-bottom:2rem!important}
  .cta-box{margin:1.5rem 0!important;padding:1.5rem!important}
  footer{padding:1.5rem 0!important}
  .footer-links{flex-direction:column;gap:.5rem}
  .article-wrap{padding:1.5rem 0 3rem!important}
  .breadcrumb ol{font-size:.75rem!important}
  h1.page-title{font-size:1.5rem!important}
  h2.section-title{font-size:1.25rem!important}
  h2{font-size:1.15rem!important}
  p,ul,ol,li{font-size:.9rem!important}
}

/* =================================================================
   RESPONSIVE — Small phones (≤480px)
   ================================================================= */
@media(max-width:480px){
  .container{padding:0 .75rem!important}
  .topnav-inner{padding:.5rem .75rem!important}
  .topnav-brand{font-size:.9rem!important}
  .topnav-cta{font-size:.7rem!important;padding:.3rem .6rem!important}
  .hero{padding:2rem 0 1.5rem!important}
  .hero p.intro{font-size:.875rem!important}
  .hero-stats{flex-direction:column!important;gap:.5rem!important;align-items:center}
  .hero .badge-wrap{font-size:.7rem!important;padding:.3rem .75rem!important}
  .btn{padding:.6rem 1.25rem!important;font-size:.85rem!important}
  .btn-lg{padding:.75rem 1.5rem!important;font-size:.9rem!important}
  .cta-box{padding:1.25rem 1rem!important;margin:1rem 0!important}
  .section{margin-bottom:1.5rem!important}
  .article-wrap{padding:1rem 0 2rem!important}
  h1.page-title{font-size:1.3rem!important;line-height:1.2!important}
  h2{font-size:1rem!important;margin:1.5rem 0 .5rem!important}
  h3{font-size:.95rem!important;margin:1.25rem 0 .4rem!important}
  p,ul,ol,li{font-size:.85rem!important;line-height:1.6!important}
  footer{padding:1rem 0!important;font-size:.7rem!important}
}

/* =================================================================
   RESPONSIVE — Large screens
   ================================================================= */
@media(min-width:1200px){
  .container{max-width:1140px}
}
</style>`;

// ============================================
// LAYOUT
// ============================================
function layout(head, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
${head}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
${GLOBAL_CSS}
</head>
<body>
<nav class="topnav">
  <div class="topnav-inner">
    <a href="${BASE}/" class="topnav-brand">▲ v0 Guide</a>
    <button class="ham-btn" aria-label="Open menu" onclick="document.getElementById('nm').classList.toggle('open')">☰</button>
    <div class="topnav-links" id="nm">
      <a href="${BASE}/">Home</a>
      <a href="${BASE}/categories/getting-started/">Guides</a>
      <a href="${BASE}/categories/tutorials/">Tutorials</a>
      <a href="${BASE}/categories/comparisons/">Compare</a>
      <a href="${BASE}/categories/faq/">FAQ</a>
      <a href="${AFFILIATE}" target="_blank" rel="noopener sponsored" class="topnav-cta">Try v0 Free</a>
    </div>
  </div>
</nav>
<main>
${body}
</main>
<footer class="site-footer">
  <div class="container">
    <p style="color:var(--mt);font-size:.85rem;margin-bottom:.5rem"><strong>▲ v0 Guide</strong> — The definitive resource for Vercel v0</p>
    <div class="footer-links">
      <a href="${BASE}/">Home</a>
      <a href="${BASE}/categories/getting-started/">Getting Started</a>
      <a href="${BASE}/categories/tutorials/">Tutorials</a>
      <a href="${BASE}/categories/comparisons/">Comparisons</a>
      <a href="${BASE}/categories/faq/">FAQ</a>
      <a href="${AFFILIATE}" target="_blank" rel="noopener sponsored">Try v0 Free</a>
    </div>
    <p style="color:var(--mt);font-size:.7rem">© ${new Date().getFullYear()} v0 Guide — Independent reviews.</p>
  </div>
</footer>
</body>
</html>`;
}

// ============================================
// ARTICLE BODY
// ============================================
function articleHTML(g, cat) {
  const cn = cat.name;
  return `
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <div class="container">
        <ol>
          <li><a href="${BASE}/">Home</a></li>
          <li>›</li>
          <li><a href="${BASE}/categories/${g.cat}/">${cn}</a></li>
          <li>›</li>
          <li style="color:var(--tx);max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${ESC(g.title)}">${ESC(g.title)}</li>
        </ol>
      </div>
    </nav>
    <div class="article-wrap">
      <div class="container">
        <div style="display:flex;gap:.5rem;align-items:center;margin-bottom:1rem;flex-wrap:wrap">
          <span class="badge">${cat.icon||'📁'} ${cn}</span>
          <span style="font-size:.75rem;color:var(--mt2)">${g.updated||'Apr 4, 2026'} · ${g.readTime||'10'} min</span>
        </div>
        <h1 class="page-title">${ESC(g.title)}</h1>
        <p style="font-size:1.05rem;margin-top:.5rem">${ESC(g.desc)}</p>
        <hr>

        <h2>Introduction</h2>
        <p>${ESC(g.desc)} This guide covers everything you need to know.</p>
        <p>Vercel v0 is Vercel's AI-powered development tool that converts plain English into production-ready React code using Next.js, Tailwind CSS, and shadcn/ui.</p>
        <hr>

        <h2>What You'll Learn</h2>
        <p>This guide takes you from basics to advanced techniques with practical examples you can apply to your own projects.</p>
        <hr>

        <h2>Getting Started</h2>
        <p>Before starting, create a <a href="${AFFILIATE}">free v0 account</a>. It takes 30 seconds and includes $5 in free credits every month.</p>
        <div class="cta-box">
          <h3 style="margin-bottom:.5rem">Ready to Try v0?</h3>
          <p>Free account, no credit card required.</p>
          <a href="${AFFILIATE}" target="_blank" rel="noopener sponsored" class="btn btn-lg">Try v0 Free →</a>
        </div>

        <h2>Step-by-Step Guide</h2>
        <ol>
          <li>Start with the fundamentals and understand core concepts</li>
          <li>Progress to practical examples and hands-on tutorials</li>
          <li>Apply best practices for production-ready results</li>
          <li>Deploy your project and monitor performance</li>
          <li>Iterate and refine based on feedback</li>
        </ol>

        <h2>Key Takeaways</h2>
        <ul>
          <li>${ESC(g.title.replace(/V0/g,'v0'))} is essential for modern React development</li>
          <li>Start with the free tier to experiment before upgrading</li>
          <li>Use iterative refinement to perfect your results</li>
          <li>Always validate generated code before deploying</li>
          <li>Join the community for tips, support, and inspiration</li>
        </ul>

        <div style="padding:2rem;background:var(--sf);border-radius:var(--rad-sm);border:1px solid var(--brd);margin:2.5rem 0;text-align:center">
          <h3>Ready to Try v0?</h3>
          <p>Free account, no credit card required.</p>
          <a href="${AFFILIATE}" target="_blank" rel="noopener sponsored" class="btn btn-lg">Try v0 Free →</a>
        </div>

        <h2>FAQ</h2>
        <h3>What frameworks does v0 support?</h3>
        <p>Next.js and React with Tailwind CSS and shadcn/ui. Vue and Angular aren't supported.</p>
        <h3>How much does v0 cost?</h3>
        <p>Free tier: $5/month credits. Premium: $20/mo. Team: $30/user/mo. Business: $100/user/mo.</p>
        <h3>Can I export the code?</h3>
        <p>Yes — clipboard, zip download, GitHub push, or direct Vercel deploy.</p>

        <nav style="margin-top:2rem;padding-top:1rem;border-top:1px solid var(--brd)">
          <a href="${BASE}/categories/${g.cat}/" style="font-size:.9rem">← Back to ${cn}</a>
        </nav>
      </div>
    </div>`;
}

// ============================================
// HOMEPAGE
// ============================================
function homepage() {
  const n = articlesArr.length;
  const nc = Object.keys(categories).length;

  const sec = Object.entries(categories).map(([slug, cat]) => {
    const arts = articlesArr.filter(g => g.cat === slug);
    if (!arts.length) return '';
    const cards = arts.map((g,i) => `
      <a href="${BASE}/articles/${g.slug}/" style="display:block;padding:1rem;background:var(--sf);border:1px solid var(--brd);border-radius:var(--rad-sm);color:var(--tx)!important;transition:border-color .2s">
        <p style="color:var(--mt2);font-size:.7rem;text-transform:uppercase;margin-bottom:.15rem">Guide ${i+1} · ${g.readTime||'10'} min</p>
        <span style="font-weight:600;font-size:.9rem">${ESC(g.title)}</span>
        <p style="font-size:.75rem;margin:.2rem 0 0">${ESC(g.desc)}</p>
      </a>`).join('');
    return `
      <section class="section">
        <div class="container">
          <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem;flex-wrap:wrap">
            ${cat.icon?`<span style="font-size:1.5rem">${cat.icon}</span>`:''}
            <h2 class="section-title">${ESC(cat.name)}</h2>
            <a href="${BASE}/categories/${slug}/" style="margin-left:auto;color:var(--ac);font-size:.85rem;font-weight:600;white-space:nowrap">All ${arts.length} →</a>
          </div>
          <p style="color:var(--mt);margin-bottom:1rem">${ESC(cat.description)}</p>
          <div class="card-grid">${cards}</div>
        </div>
      </section>`;
  }).join('');

  const body = `
    <header class="hero">
      <div class="container" style="text-align:center">
        <div class="badge-wrap">Vercel v0: The Definitive Resource</div>
        <h1 class="page-title" style="margin-bottom:1rem">Learn Everything About <br><span style="background:linear-gradient(135deg,var(--ac),#06b6d4,var(--ac));-webkit-background-clip:text;-webkit-text-fill-color:transparent">Vercel v0</span></h1>
        <p class="intro">Prompts, tutorials, features, deployment, comparisons — everything in one place.</p>
        <a href="${AFFILIATE}" target="_blank" rel="noopener sponsored" class="btn btn-lg">Try v0 Free →</a>
        <div class="hero-stats">
          <div><span class="stat-num">${n}+</span><span class="stat-label">Guides</span></div>
          <div><span class="stat-num">${nc}</span><span class="stat-label">Categories</span></div>
          <div><span class="stat-num">Free</span><span class="stat-label">To Start</span></div>
        </div>
      </div>
    </header>
    ${sec}
    <div class="container">
      <div class="cta-box">
        <h3 style="margin-bottom:.5rem">Ready to Try v0?</h3>
        <p>Free account, no credit card required.</p>
        <a href="${AFFILIATE}" target="_blank" rel="noopener sponsored" class="btn btn-lg">Try v0 Free →</a>
      </div>
    </div>`;

  return layout(
    `<title>v0 Guide — The Definitive Guide to Vercel v0 (${n}+ Articles)</title>
<meta name="description" content="The most comprehensive Vercel v0 resource. ${n}+ guides covering prompts, tutorials, features, deployment, and comparisons.">
<link rel="canonical" href="${SITE}/">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:title" content="v0 Guide — The Definitive Guide to Vercel v0">
<meta property="og:description" content="The most comprehensive Vercel v0 resource.">
<meta name="twitter:card" content="summary_large_image">`, body);
}

// ============================================
// CATEGORY PAGE
// ============================================
function catPage(slug, cat) {
  const url = `${SITE}/categories/${slug}/`;
  const arts = articlesArr.filter(g => g.cat === slug);
  const cards = arts.map((g,i) => `
    <a href="${BASE}/articles/${g.slug}/" style="display:block;padding:1.25rem;background:var(--sf);border:1px solid var(--brd);border-radius:var(--rad-sm);color:var(--tx)!important;border-left:3px solid var(--ac)">
      <p style="font-size:.7rem;color:var(--mt);text-transform:uppercase;margin-bottom:.3rem">Guide ${i+1} · ${g.readTime||'10'} min</p>
      <h2 style="font-size:1rem;margin-bottom:.3rem;border:none">${ESC(g.title)}</h2>
      <p style="color:var(--mt);font-size:.8rem;line-height:1.5">${ESC(g.desc)}</p>
    </a>`).join('');

  const body = `
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <div class="container">
        <ol><li><a href="${BASE}/">Home</a></li><li>›</li><li style="color:var(--tx)">${ESC(cat.name)}</li></ol>
      </div>
    </nav>
    <div style="padding:2.5rem 0">
      <div class="container">
        <div style="font-size:2rem;margin-bottom:.75rem">${cat.icon||'📁'}</div>
        <h1 class="page-title">${ESC(cat.name)}</h1>
        <p style="color:var(--mt);font-size:1rem;margin-top:.5rem">${ESC(cat.description)}</p>
        <div class="card-grid" style="margin-top:2rem">${cards}</div>
      </div>
    </div>`;

  return layout(
    `<title>${ESC(cat.name)} — v0 Guide</title>
<meta name="description" content="${ESC(cat.description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index,follow">
<meta property="og:title" content="${ESC(cat.name)} — v0 Guide">
<meta property="og:description" content="${ESC(cat.description)}">
<meta name="twitter:card" content="summary_large_image">`, body);
}

// ============================================
// GENERATE EVERYTHING
// ============================================
let count = 0;
mkdirSync('dist', { recursive: true });

writeFileSync('dist/index.html', homepage());
count++;

for (const [slug, cat] of Object.entries(categories)) {
  mkdirSync(`dist/categories/${slug}`, { recursive: true });
  writeFileSync(`dist/categories/${slug}/index.html`, catPage(slug, cat));
  count++;
}

for (const g of articlesArr) {
  const cat = categories[g.cat];
  if (!cat) continue;
  mkdirSync(`dist/articles/${g.slug}`, { recursive: true });
  const url = `${SITE}/articles/${g.slug}/`;
  const jsonLd = {
    '@context':'https://schema.org','@type':'Article',
    'headline':g.title,'description':g.desc,'url':url,
    'datePublished':g.date||'2026-04-04','dateModified':g.updated||'2026-04-04',
    'author':{'@type':'Organization','name':'v0 Guide'}
  };
  writeFileSync(`dist/articles/${g.slug}/index.html`,
    layout(
      `<title>${ESC(g.title)}</title>
<meta name="description" content="${ESC(g.desc)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index,follow">
<meta property="og:type" content="article">
<meta property="og:title" content="${ESC(g.title)}">
<meta property="og:description" content="${ESC(g.desc)}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
      articleHTML(g, cat)
    ));
  count++;
}

console.log(`🎉 Generated ${count} pages\n   Home: 1 | Categories: ${Object.keys(categories).length} | Articles: ${articlesArr.length}`);
