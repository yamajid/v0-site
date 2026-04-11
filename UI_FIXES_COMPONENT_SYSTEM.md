# UI FIXES & COMPONENT VISIBILITY - Best Practices

## What's Wrong With Current Components

### Issues Found:
1. **Inline styles with CSS variables** that may not be defined globally
2. **Missing responsive validation** - components break on mobile
3. **Z-index conflicts** - modals, dropdowns appearing behind other elements
4. **Component isolation issues** - styles leak between pages
5. **Missing focus states** - accessibility problems
6. **Inconsistent spacing** - different gaps/padding everywhere
7. **No loading states** - skeleton, spinners missing
8. **No error states** - form validation unclear

---

## Solution: Component System with Design Tokens

### Design Tokens (Single Source of Truth)

```css
/* src/styles/tokens.css */

:root {
  /* Colors */
  --color-bg: #030303;
  --color-text: #fafafa;
  --color-text-secondary: #888;
  --color-border: #1a1a1a;
  --color-accent: #10b981;
  --color-accent-hover: #059669;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-success: #10b981;
  
  /* Spacing Scale */
  --space-xs: 0.25rem;    /* 4px */
  --space-sm: 0.5rem;     /* 8px */
  --space-md: 1rem;       /* 16px */
  --space-lg: 1.5rem;     /* 24px */
  --space-xl: 2rem;       /* 32px */
  --space-2xl: 3rem;      /* 48px */
  
  /* Typography */
  --font-family: 'Inter', system-ui, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
  
  /* Z-index */
  --z-hidden: -1;
  --z-base: 0;
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-modal: 1030;
  --z-tooltip: 1040;
}
```

### Component Template (Base)

```astro
---
// src/components/BaseComponent.astro
// All components should extend this pattern

interface Props {
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const { 
  variant = 'default', 
  size = 'md',
  disabled = false,
  className = ''
} = Astro.props;
---

<!-- Component markup -->
<div class={`component component--${variant} component--${size} ${className}`}>
  <slot />
</div>

<style>
  /* Use CSS custom properties instead of inline styles */
  .component {
    font-family: var(--font-family);
    color: var(--color-text);
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-md);
    transition: all var(--transition-normal);
  }

  .component--primary {
    background: var(--color-accent);
    color: white;
    border-color: var(--color-accent);
  }

  .component--primary:hover:not(:disabled) {
    background: var(--color-accent-hover);
    box-shadow: var(--shadow-md);
  }

  .component--primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .component--sm {
    padding: var(--space-sm);
    font-size: var(--font-size-sm);
  }

  .component--lg {
    padding: var(--space-lg);
    font-size: var(--font-size-lg);
  }

  /* Accessibility */
  .component:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
</style>
```

---

## Component Examples with Fixes

### 1. Button Component (Fixed)

```astro
---
// src/components/Button.astro
interface Props {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const { 
  href, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  className = ''
} = Astro.props;

const Tag = href ? 'a' : 'button';
---

<Tag
  href={href}
  disabled={disabled}
  class={`btn btn--${variant} btn--${size} ${className}`}
>
  <slot />
</Tag>

<style>
  .btn {
    font-family: var(--font-family);
    font-weight: var(--font-weight-semibold);
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-normal);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    white-space: nowrap;
    text-decoration: none;
  }

  /* Primary variant */
  .btn--primary {
    background: var(--color-accent);
    color: white;
    padding: var(--space-sm) var(--space-lg);
  }

  .btn--primary:hover:not(:disabled) {
    background: var(--color-accent-hover);
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
  }

  /* Secondary variant */
  .btn--secondary {
    background: var(--color-border);
    color: var(--color-text);
    padding: var(--space-sm) var(--space-lg);
  }

  .btn--secondary:hover:not(:disabled) {
    background: var(--color-text);
    color: var(--color-bg);
  }

  /* Ghost variant */
  .btn--ghost {
    background: transparent;
    color: var(--color-accent);
    padding: var(--space-sm) var(--space-lg);
  }

  .btn--ghost:hover:not(:disabled) {
    background: var(--color-border);
  }

  /* Sizes */
  .btn--sm {
    padding: var(--space-xs) var(--space-md);
    font-size: var(--font-size-sm);
  }

  .btn--lg {
    padding: var(--space-md) var(--space-xl);
    font-size: var(--font-size-lg);
  }

  /* Disabled state */
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Focus visible for accessibility */
  .btn:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
</style>
```

### 2. Card Component (Fixed)

```astro
---
// src/components/Card.astro
interface Props {
  href?: string;
  variant?: 'default' | 'interactive' | 'highlight';
  className?: string;
}

const { 
  href, 
  variant = 'default',
  className = ''
} = Astro.props;

const Tag = href ? 'a' : 'div';
---

<Tag
  href={href}
  class={`card card--${variant} ${className}`}
>
  <slot />
</Tag>

<style>
  .card {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    transition: all var(--transition-normal);
  }

  .card--interactive {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  .card--interactive:hover {
    border-color: var(--color-accent);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  .card--highlight {
    border-left: 4px solid var(--color-accent);
  }

  .card--highlight:hover {
    box-shadow: var(--shadow-lg);
  }

  /* Responsive */
  @media (max-width: 640px) {
    .card {
      padding: var(--space-md);
    }
  }
</style>
```

### 3. Modal Component (Fixed - Z-index properly managed)

```astro
---
// src/components/Modal.astro
interface Props {
  title: string;
  open: boolean;
  onClose?: string;
  className?: string;
}

const { 
  title, 
  open = false, 
  onClose,
  className = ''
} = Astro.props;
---

{open && (
  <div class={`modal-overlay ${className}`}>
    <div class="modal-content" role="dialog" aria-labelledby="modal-title">
      <div class="modal-header">
        <h2 id="modal-title">{title}</h2>
        <button 
          class="modal-close" 
          aria-label="Close dialog"
          onclick={onClose}
        >
          ✕
        </button>
      </div>
      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
)}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* IMPORTANT: Correct z-index */
    z-index: var(--z-modal);
  }

  .modal-content {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: var(--shadow-lg);
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-lg);
    border-bottom: 1px solid var(--color-border);
  }

  .modal-close {
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
    font-size: var(--font-size-lg);
    cursor: pointer;
    transition: color var(--transition-fast);
  }

  .modal-close:hover {
    color: var(--color-text);
  }

  .modal-body {
    padding: var(--space-lg);
  }

  /* Responsive */
  @media (max-width: 640px) {
    .modal-content {
      max-width: 100%;
      border-radius: 0;
    }
  }
</style>
```

### 4. Form Component (Fixed - Validation states)

```astro
---
// src/components/Form/Input.astro
interface Props {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'url';
  error?: string;
  required?: boolean;
  placeholder?: string;
}

const { 
  name, 
  label, 
  type = 'text',
  error,
  required = false,
  placeholder
} = Astro.props;
---

<div class="form-group">
  <label for={name} class="form-label">
    {label}
    {required && <span class="required" aria-label="required">*</span>}
  </label>
  
  <input
    id={name}
    name={name}
    type={type}
    placeholder={placeholder}
    aria-invalid={!!error}
    aria-describedby={error ? `${name}-error` : undefined}
    class={`form-input ${error ? 'form-input--error' : ''}`}
    required={required}
  />
  
  {error && (
    <p id={`${name}-error`} class="form-error" role="alert">
      {error}
    </p>
  )}
</div>

<style>
  .form-group {
    margin-bottom: var(--space-lg);
  }

  .form-label {
    display: block;
    margin-bottom: var(--space-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-text);
  }

  .required {
    color: var(--color-error);
  }

  .form-input {
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    transition: all var(--transition-normal);
  }

  .form-input:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  .form-input--error {
    border-color: var(--color-error);
  }

  .form-input--error:focus {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .form-error {
    color: var(--color-error);
    font-size: var(--font-size-sm);
    margin-top: var(--space-xs);
  }
</style>
```

---

## Responsive Design Pattern

```css
/* Mobile First Approach */

/* Base styles (mobile) */
.component {
  font-size: var(--font-size-base);
  padding: var(--space-md);
}

/* Tablet */
@media (min-width: 640px) {
  .component {
    font-size: var(--font-size-lg);
    padding: var(--space-lg);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    font-size: var(--font-size-xl);
    padding: var(--space-xl);
  }
}
```

---

## Preventing Component Disappearing Issues

### 1. Visibility Management

```css
/* NEVER use these combinations */
❌ display: none + opacity: 0
❌ width: 0 + height: 0
❌ position: absolute + top: -9999px
❌ visibility: hidden without backup

/* INSTEAD use proper hiding */
✓ display: none (when truly hidden)
✓ visibility: hidden (but space reserved)
✓ pointer-events: none (but visible)
✓ opacity: 0 (with transition)
```

### 2. Z-index Stack

```css
/* Global z-index hierarchy */
:root {
  --z-hidden: -1;          /* Below everything */
  --z-base: 0;             /* Normal flow */
  --z-sticky: 20;          /* Sticky headers/nav */
  --z-dropdown: 1000;      /* Dropdown menus */
  --z-modal: 1030;         /* Modal dialogs */
  --z-tooltip: 1040;       /* Tooltips */
}

/* Use consistently */
.nav { z-index: var(--z-sticky); }
.dropdown { z-index: var(--z-dropdown); }
.modal { z-index: var(--z-modal); }
```

### 3. Overflow Management

```css
/* Container visibility issues */
.container {
  overflow: visible;  /* Default - allow children to overflow */
}

.container--clip {
  overflow: hidden;   /* Clip overflowing content */
}

.container--scroll {
  overflow-y: auto;   /* Scrollable content */
  max-height: 500px;
}
```

---

## Testing Component Visibility

```javascript
// Check if component is actually visible
function isComponentVisible(element) {
  const style = window.getComputedStyle(element);
  
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    style.opacity !== '0' &&
    element.offsetParent !== null &&
    element.offsetHeight > 0 &&
    element.offsetWidth > 0
  );
}

// Use in tests
if (!isComponentVisible(componentElement)) {
  console.error('Component is not visible!');
}
```

---

## Recommended File Structure for Components

```
src/components/
├── base/
│   ├── Button.astro           (primary button styles)
│   ├── Card.astro             (card wrapper)
│   ├── Text.astro             (typography)
│   └── Container.astro        (layout container)
│
├── forms/
│   ├── Input.astro            (text input)
│   ├── Select.astro           (dropdown)
│   ├── Checkbox.astro         (checkbox)
│   └── Textarea.astro         (textarea)
│
├── layout/
│   ├── Header.astro
│   ├── Sidebar.astro
│   ├── Navigation.astro
│   └── Footer.astro
│
├── feedback/
│   ├── Toast.astro            (notifications)
│   ├── Alert.astro            (alerts)
│   ├── Modal.astro            (dialogs)
│   └── Spinner.astro          (loading)
│
└── composite/
    ├── ProductCard.astro      (combines multiple components)
    └── BlogCard.astro         (combines multiple components)
```

---

## Checklist for Component Visibility

- [ ] No `display: none` without `visibility: hidden` verification
- [ ] All z-indexes use CSS variables
- [ ] Modals have `z-index: var(--z-modal)` or higher
- [ ] Overflow hidden doesn't clip important content
- [ ] Responsive breakpoints tested
- [ ] Mobile view doesn't hide components
- [ ] Focus states visible
- [ ] Missing fonts don't break layout
- [ ] Images load without layout shift
- [ ] All components tested across browsers

