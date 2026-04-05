import os

demos = [
    ("toast-notifications", "Toast Notifications", "Create toast notifications with success, error, warning, info variants. Show icon, message, close button. Stack from top-right."),
    ("tabs-component", "Tabs Component", "Create tab navigation with 3 tabs. Underline active tab. Tab content area. Dark theme."),
    ("alert-banners", "Alert Banners", "Create alert banners: success (green), error (red), warning (yellow), info (blue). Include icon, message, close button."),
    ("avatar-component", "Avatar Component", "Create avatar with image, fallback initials, different sizes (sm, md, lg). Status indicator dot."),
    ("badges-chips", "Badges & Chips", "Create badges: status (success/warning/error), notification count, category tags. Various colors and sizes."),
    ("dropdown-menu", "Dropdown Menu", "Create dropdown menu with trigger button and floating menu. Items with icons. Dark theme."),
    ("input-fields", "Input Fields", "Create input field with label, placeholder, helper text, error state. Dark theme styling."),
    ("textarea", "Textarea", "Create textarea with label, placeholder, character count. Auto-resize option."),
    ("checkbox-radio", "Checkbox & Radio", "Create checkbox and radio button with labels. Checked/unchecked states. Dark theme."),
    ("select-dropdown", "Select Dropdown", "Create select dropdown with options, search/filter. Custom styled dropdown."),
    ("date-picker", "Date Picker", "Create date picker with calendar view, month navigation. Dark theme."),
    ("file-upload", "File Upload", "Create file upload with drag-drop zone, file list, progress bars. Dark theme."),
    ("search-input", "Search Input", "Create search input with icon, clear button, loading state. Dark theme."),
    ("toggle-switch", "Toggle Switch", "Create toggle switch with on/off states. Smooth animation. Dark theme."),
    ("progress-bar", "Progress Bar", "Create progress bar with percentage label. Animated fill. Dark theme."),
    ("skeleton-loader", "Skeleton Loader", "Create skeleton loaders for text, image, card. Animated shimmer effect."),
    ("loading-spinner", "Loading Spinner", "Create animated loading spinner. Emerald color. Multiple sizes."),
    ("empty-state", "Empty State", "Create empty state with illustration, message, action button. Dark theme."),
    ("card-component", "Card Component", "Create card with image, title, description, action button. Hover effects."),
    ("list-items", "List Items", "Create list with items having icon, title, subtitle, action. Hover states."),
    ("table-data", "Data Table", "Create data table with headers, rows, pagination. Sortable columns."),
    ("sidebar-navigation", "Sidebar Navigation", "Create sidebar with logo, nav items with icons, section dividers. Collapsible."),
    ("header-menu", "Header Menu", "Create header with logo, nav links, search, user menu. Sticky on scroll."),
    ("mega-menu", "Mega Menu", "Create mega menu dropdown with categories, images, links. Dark theme."),
    ("breadcrumbs", "Breadcrumbs", "Create breadcrumbs showing current path. Clickable links. Dark theme."),
    ("pagination", "Pagination", "Create pagination with page numbers, prev/next buttons. Dark theme."),
    ("stepper", "Stepper", "Create stepper with steps, labels, progress indicator. Dark theme."),
    ("wizard", "Wizard Form", "Create multi-step wizard form with progress, validation. Dark theme."),
]

# Additional UI component demos
more_demos = [
    ("stats-card", "Stats Card", "Create stats card with icon, label, value, change percentage. Dark theme."),
    ("feature-card", "Feature Card", "Create feature card with icon, title, description. Hover lift effect."),
    ("testimonial-card", "Testimonial Card", "Create testimonial with quote, avatar, name, company, rating."),
    ("pricing-card", "Pricing Card", "Create pricing card with tier name, price, features list, CTA button."),
    ("product-card", "Product Card", "Create product card with image, title, price, rating, add to cart."),
    ("blog-card", "Blog Card", "Create blog card with image, category, title, excerpt, author, date."),
    ("user-card", "User Card", "Create user card with avatar, name, role, social links."),
    ("team-card", "Team Card", "Create team member card with photo, name, role, bio."),
    ("profile-card", "Profile Card", "Create profile card with avatar, info, stats, action buttons."),
    ("timeline", "Timeline", "Create timeline with events, dates, descriptions. Vertical layout."),
    ("chart-line", "Line Chart", "Create line chart with data points, tooltips. Dark theme."),
    ("chart-bar", "Bar Chart", "Create bar chart with labels, values. Dark theme."),
    ("chart-donut", "Donut Chart", "Create donut chart with segments, legend. Dark theme."),
    ("calendar", "Calendar", "Create calendar with days, events, navigation. Dark theme."),
    ("kanban-board", "Kanban Board", "Create kanban with columns, draggable cards. Dark theme."),
    ("chat-interface", "Chat Interface", "Create chat with messages, input, send button. Dark theme."),
    ("comment-section", "Comment Section", "Create comments with avatar, name, text, timestamp, replies."),
    ("rating-component", "Rating Component", "Create star rating with hover, click states. 5 stars."),
    ("slider-component", "Slider Component", "Create range slider with min/max, value tooltip. Dark theme."),
    ("tooltip", "Tooltip", "Create tooltip that appears on hover with arrow. Dark theme."),
    ("popover", "Popover", "Create popover with trigger, content. Dark theme."),
    ("menu-context", "Context Menu", "Create right-click context menu with actions. Dark theme."),
    ("drawer", "Drawer", "Create slide-out drawer from right. Dark theme."),
    ("carousel", "Carousel", "Create image carousel with navigation, indicators. Dark theme."),
    ("gallery", "Image Gallery", "Create image gallery with thumbnails, lightbox. Dark theme."),
    ("video-player", "Video Player", "Create video player with custom controls. Dark theme."),
    ("audio-player", "Audio Player", "Create audio player with play/pause, progress. Dark theme."),
    ("qr-code", "QR Code", "Create QR code generator display. Dark theme."),
    ("clipboard", "Clipboard", "Create copy to clipboard button with feedback. Dark theme."),
    ("timer", "Timer", "Create countdown timer with start/pause/reset. Dark theme."),
    ("counter", "Counter", "Create counter with increment/decrement. Dark theme."),
    ("infinite-scroll", "Infinite Scroll", "Create infinite scroll loading. Dark theme."),
    ("lazy-load", "Lazy Loading", "Create lazy load image component. Dark theme."),
    ("image-carousel", "Image Carousel", "Create auto-advancing image carousel. Dark theme."),
    ("newsletter", "Newsletter Signup", "Create newsletter form with email input, submit. Dark theme."),
    ("subscribe", "Subscribe Form", "Create subscribe form with validation. Dark theme."),
    ("contact-card", "Contact Card", "Create contact card with info, map, form. Dark theme."),
    ("location-card", "Location Card", "Create location with address, map, hours. Dark theme."),
    ("event-card", "Event Card", "Create event card with date, title, location. Dark theme."),
    ("job-card", "Job Card", "Create job listing with title, company, location. Dark theme."),
    ("recipe-card", "Recipe Card", "Create recipe with image, ingredients, steps. Dark theme."),
    ("weather-widget", "Weather Widget", "Create weather display with icon, temp. Dark theme."),
    ("stock-ticker", "Stock Ticker", "Create stock price display with change. Dark theme."),
    ("crypto-price", "Crypto Price", "Create cryptocurrency price display. Dark theme."),
    ("currency-converter", "Currency Converter", "Create currency converter with rates. Dark theme."),
    ("calculator", "Calculator", "Create calculator with buttons, display. Dark theme."),
    ("form-builder", "Form Builder", "Create form with drag-drop fields. Dark theme."),
    ("survey-form", "Survey Form", "Create survey with questions, options. Dark theme."),
    ("poll-voting", "Poll Voting", "Create poll with options, vote button. Dark theme."),
    ("quiz-component", "Quiz Component", "Create quiz with questions, answers, score. Dark theme."),
    ("leaderboard", "Leaderboard", "Create leaderboard with rankings, scores. Dark theme."),
    ("achievement", "Achievement Badge", "Create achievement with icon, title, description."),
    ("notification-center", "Notification Center", "Create notification list with read/unread. Dark theme."),
    ("activity-feed", "Activity Feed", "Create activity stream with timestamps. Dark theme."),
    ("news-feed", "News Feed", "Create news feed with articles. Dark theme."),
    ("social-share", "Social Share", "Create share buttons for social media. Dark theme."),
    ("share-button", "Share Button", "Create share button with options. Dark theme."),
    ("download-btn", "Download Button", "Create download button with progress. Dark theme."),
    ("upload-btn", "Upload Button", "Create upload button with progress. Dark theme."),
    ("login-social", "Social Login", "Create login with Google, GitHub, Apple. Dark theme."),
    ("oauth-buttons", "OAuth Buttons", "Create OAuth sign-in buttons. Dark theme."),
    ("password-strength", "Password Strength", "Create password strength indicator. Dark theme."),
    ("captcha", "Captcha", "Create captcha verification. Dark theme."),
    ("2fa-code", "2FA Code", "Create 2FA code input. Dark theme."),
    ("verify-email", "Verify Email", "Create email verification form. Dark theme."),
    ("reset-password", "Reset Password", "Create password reset form. Dark theme."),
    ("verify-phone", "Verify Phone", "Create phone verification. Dark theme."),
    ("onboarding", "Onboarding", "Create multi-step onboarding. Dark theme."),
    ("welcome-screen", "Welcome Screen", "Create welcome screen with steps. Dark theme."),
    ("getting-started", "Getting Started", "Create getting started guide. Dark theme."),
    ("setup-wizard", "Setup Wizard", "Create setup wizard with configuration. Dark theme."),
    ("settings-panel", "Settings Panel", "Create settings with toggles. Dark theme."),
    ("preferences", "Preferences", "Create preferences form. Dark theme."),
    ("account-settings", "Account Settings", "Create account settings page. Dark theme."),
    ("billing-page", "Billing Page", "Create billing information form. Dark theme."),
    ("invoice", "Invoice", "Create invoice with items, total. Dark theme."),
    ("receipt", "Receipt", "Create receipt with details. Dark theme."),
    ("order-summary", "Order Summary", "Create order summary. Dark theme."),
    ("cart-summary", "Cart Summary", "Create cart with items, total. Dark theme."),
    ("checkout-page", "Checkout Page", "Create checkout with steps. Dark theme."),
    ("payment-form", "Payment Form", "Create payment input. Dark theme."),
    ("credit-card", "Credit Card", "Create credit card form. Dark theme."),
    ("shipping-form", "Shipping Form", "Create shipping address form. Dark theme."),
    ("billing-address", "Billing Address", "Create billing address form. Dark theme."),
    ("coupon-code", "Coupon Code", "Create coupon input with apply. Dark theme."),
    ("discount-code", "Discount Code", "Create discount code input. Dark theme."),
    ("gift-card", "Gift Card", "Create gift card form. Dark theme."),
    ("loyalty-points", "Loyalty Points", "Create points display. Dark theme."),
    ("referral-program", "Referral Program", "Create referral with link. Dark theme."),
    ("affiliate-dashboard", "Affiliate Dashboard", "Create affiliate stats. Dark theme."),
]

for slug, title, desc in demos + more_demos:
    os.makedirs(slug, exist_ok=True)
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} Demo — v0</title>
    <meta name="description" content="Build {title.lower()} with v0. Copy prompt and get started.">
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
        p {{ color: var(--mt); margin-bottom: 1rem; }}
        .prompt-box {{ background: var(--sf); border: 1px solid var(--brd); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; }}
        .prompt-box code {{ display: block; background: #000; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.85rem; color: #e5e5e5; white-space: pre-wrap; }}
        .copy-btn {{ background: var(--ac); color: #000; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; cursor: pointer; margin-top: 0.5rem; }}
        .cta {{ display: inline-flex; padding: 0.75rem 1.5rem; background: var(--ac); color: #000; border-radius: 8px; font-weight: 700; text-decoration: none; }}
        .badge {{ display: inline-block; padding: 0.25rem 0.75rem; background: var(--ac); color: #000; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }}
        footer {{ border-top: 1px solid var(--brd); padding: 2rem 0; margin-top: 4rem; text-align: center; }}
    </style>
</head>
<body>
    <nav class="nav"><div class="nav-wrap"><a href="/v0-site/">▲ v0 Guide</a><a href="https://vercel.com/affiliates" target="_blank" class="cta">Try v0 Free →</a></div></nav>
    <main class="wrap">
        <span class="badge">Demo</span>
        <h1>{title} Demo</h1>
        <p>{desc}</p>
        <div class="prompt-box">
            <code>Create a {title.lower()} with dark theme, emerald accents, responsive design, hover animations. Use Tailwind CSS and React.</code>
            <button class="copy-btn" onclick="navigator.clipboard.writeText(this.previousElementSibling.textContent)">Copy</button>
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

print(f"Created {len(demos + more_demos)} demo pages")

final_demos = [
    ("widget-weather", "Weather Widget"),
    ("widget-stock", "Stock Widget"),
    ("widget-crypto", "Crypto Widget"),
    ("widget-calendar", "Calendar Widget"),
    ("widget-clock", "Clock Widget"),
    ("widget-timer", "Timer Widget"),
    ("widget-stopwatch", "Stopwatch Widget"),
]

for slug, title in final_demos:
    os.makedirs(slug, exist_ok=True)
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} Demo — v0</title>
    <meta name="description" content="Build {title.lower()} with v0. Copy prompt and get started.">
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
        p {{ color: var(--mt); margin-bottom: 1rem; }}
        .prompt-box {{ background: var(--sf); border: 1px solid var(--brd); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; }}
        .prompt-box code {{ display: block; background: #000; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.85rem; color: #e5e5e5; white-space: pre-wrap; }}
        .copy-btn {{ background: var(--ac); color: #000; border: none; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; cursor: pointer; margin-top: 0.5rem; }}
        .cta {{ display: inline-flex; padding: 0.75rem 1.5rem; background: var(--ac); color: #000; border-radius: 8px; font-weight: 700; text-decoration: none; }}
        .badge {{ display: inline-block; padding: 0.25rem 0.75rem; background: var(--ac); color: #000; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; }}
        footer {{ border-top: 1px solid var(--brd); padding: 2rem 0; margin-top: 4rem; text-align: center; }}
    </style>
</head>
<body>
    <nav class="nav"><div class="nav-wrap"><a href="/v0-site/">▲ v0 Guide</a><a href="https://vercel.com/affiliates" target="_blank" class="cta">Try v0 Free →</a></div></nav>
    <main class="wrap">
        <span class="badge">Demo</span>
        <h1>{title} Demo</h1>
        <p>Build {title.lower()} with v0. Copy the prompt below.</p>
        <div class="prompt-box">
            <code>Create a {title.lower()} with dark theme, emerald accents, responsive design, hover animations. Use Tailwind CSS and React.</code>
            <button class="copy-btn" onclick="navigator.clipboard.writeText(this.previousElementSibling.textContent)">Copy</button>
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

print(f"Created {len(final_demos)} final demo pages")
