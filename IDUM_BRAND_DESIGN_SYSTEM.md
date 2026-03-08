# IDUM Brand Design System

**Version:** 1.0
**Created:** March 2026
**Purpose:** Visual identity guidelines for IDUM communications

---

## Brand Essence

IDUM positions itself as the authoritative global voice on underwater munitions—comparable to IPCC (climate), IAEA (nuclear), and OPCW (chemical weapons). The visual identity must communicate:

- **Scientific Authority** — Credibility that commands respect from government ministers and UN leaders
- **Diplomatic Gravitas** — International sophistication befitting multilateral cooperation
- **Environmental Stewardship** — Ocean protection without activist aesthetics
- **Measured Urgency** — Serious concern without alarmism
- **Institutional Permanence** — An organization built for decades, not campaigns

**Core Principle:** Make the invisible visible with clarity, not drama.

---

## Color System

### Primary Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Abyss Navy** | `#0A1628` | 10, 22, 40 | Primary background, depth, authority |
| **Atlantic Blue** | `#0D2545` | 13, 37, 69 | Secondary backgrounds, cards |
| **Ocean Blue** | `#1A4A7A` | 26, 74, 122 | Tertiary accents, data visualization |
| **Signal Teal** | `#0E7C7B` | 14, 124, 123 | Primary action color, CTAs, links |
| **Archive Gold** | `#C8952A` | 200, 149, 42 | Accent, emphasis, institutional prestige |

### Extended Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Teal Light** | `#15A8A6` | Hover states, gradients |
| **Gold Light** | `#E8B84B` | Text accents, gradient endpoints |
| **Parchment** | `#F5F0E8` | Primary text on dark backgrounds |
| **Mist Gray** | `#E8EDF5` | Light mode backgrounds |
| **Steel Gray** | `#8A9AB5` | Secondary text, metadata |
| **Alert Red** | `#C23B3B` | Warnings, danger indicators (use sparingly) |

### Color Psychology & Rationale

**Abyss Navy (#0A1628)**
The dominant brand color. Deep, almost black navy conveys the hidden depths where munitions lie. It projects authority similar to defense ministries and scientific institutions. Unlike pure black, it has warmth and depth.

**Signal Teal (#0E7C7B)**
The action color. Teal bridges ocean (blue) and environment (green) without being either. It's distinctive, visible against navy, and avoids the activist connotations of bright green or the corporate feeling of pure blue.

**Archive Gold (#C8952A)**
The prestige marker. Gold communicates institutional weight—think UN chambers, government seals, archival documents. It's warm against cool ocean tones and signals importance without ostentation.

### Color Ratios

- **70%** Abyss Navy (backgrounds, negative space)
- **20%** Atlantic/Ocean Blues (cards, sections, depth layers)
- **7%** Signal Teal (interactive elements, emphasis)
- **3%** Archive Gold (highlights, accents, moments of importance)

### Gradients

**Primary CTA Gradient**
```css
background: linear-gradient(135deg, #0E7C7B, #15A8A6);
```

**Gold Accent Gradient**
```css
background: linear-gradient(135deg, #C8952A, #E8B84B);
```

**Depth Gradient (backgrounds)**
```css
background: linear-gradient(180deg, #040C1A 0%, #0A1628 60%, #081422 100%);
```

---

## Typography

### Type Scale

IDUM uses a three-family type system that balances institutional authority with modern clarity.

### Primary Typefaces

**Headlines: Playfair Display**
- Style: Serif, high contrast
- Weights: 400 (Regular), 700 (Bold), 900 (Black)
- Usage: Hero headlines, section titles, pull quotes
- Character: Classical authority, editorial gravitas, timeless credibility
- Similar to: The Economist, Foreign Affairs, Nature

**UI & Labels: Barlow Condensed**
- Style: Sans-serif, condensed
- Weights: 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)
- Usage: Navigation, buttons, labels, metadata, eyebrows
- Character: Efficient, modern, systematic
- Similar to: Government reports, data dashboards, scientific interfaces

**Body: Barlow**
- Style: Sans-serif, humanist
- Weights: 300 (Light), 400 (Regular), 500 (Medium)
- Usage: Paragraphs, descriptions, long-form content
- Character: Clear, readable, approachable without being casual
- Similar to: Modern policy documents, digital reports

### Type Hierarchy

| Element | Family | Weight | Size | Letter Spacing | Transform |
|---------|--------|--------|------|----------------|-----------|
| Hero Title | Playfair Display | 900 | 48–80px (fluid) | -0.02em | None |
| Section Title | Playfair Display | 700 | 32–48px | -0.01em | None |
| Subsection Title | Barlow | 500 | 24–28px | 0 | None |
| Eyebrow | Barlow Condensed | 600 | 12–14px | 0.15em | Uppercase |
| Navigation | Barlow Condensed | 600 | 13–14px | 0.1em | Uppercase |
| Button | Barlow Condensed | 600 | 14–15px | 0.05em | Uppercase |
| Body Large | Barlow | 300 | 18–20px | 0.01em | None |
| Body | Barlow | 300 | 16px | 0.01em | None |
| Caption | Barlow | 400 | 13–14px | 0.02em | None |
| Metadata | Barlow Condensed | 400 | 12px | 0.08em | Uppercase |

### Line Heights

| Use Case | Line Height |
|----------|-------------|
| Headlines | 1.05–1.15 |
| Subheadlines | 1.2–1.3 |
| Body text | 1.6–1.7 |
| Captions/metadata | 1.4 |

### Typography Principles

1. **Contrast creates hierarchy** — Playfair (serif) for emotional impact, Barlow (sans) for information
2. **Light weights for body** — 300 weight Barlow reads elegantly on dark backgrounds
3. **Condensed for efficiency** — Barlow Condensed maximizes information density without crowding
4. **Uppercase for system UI** — Navigation, labels, and buttons use uppercase for scannability
5. **No decorative fonts** — The content is serious; typography should be invisible

---

## Spacing System

### Base Unit

**8px base unit** — All spacing derives from multiples of 8px for visual consistency.

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps, inline elements |
| `--space-2` | 8px | Icon gaps, tight padding |
| `--space-3` | 12px | Small component padding |
| `--space-4` | 16px | Standard padding, list gaps |
| `--space-5` | 24px | Card padding, section gaps |
| `--space-6` | 32px | Component separation |
| `--space-7` | 48px | Section padding (small) |
| `--space-8` | 64px | Section padding (medium) |
| `--space-9` | 96px | Section padding (large) |
| `--space-10` | 128px | Major section breaks |

### Content Width

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Narrow | 680px | Long-form text, articles |
| Standard | 1000px | General content |
| Wide | 1200px | Cards, grids |
| Full | 1400px | Hero sections, full layouts |

---

## Border Radius

### Radius Scale

IDUM uses **subtle, functional rounding** — not pill shapes or sharp corners. The aesthetic balances institutional seriousness with modern approachability.

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Buttons, badges, small elements |
| `--radius-md` | 6px | Input fields, small cards |
| `--radius-lg` | 8px | Cards, containers |
| `--radius-xl` | 12px | Modal windows, large cards |
| `--radius-2xl` | 16px | Hero cards, featured elements |
| `--radius-full` | 100px | Pills, tags, circular elements |

### Radius Philosophy

- **Never fully rounded buttons** — Pills feel casual; 4–6px radius feels intentional
- **Larger radius for larger elements** — Scale radius proportionally
- **Consistent radius per component type** — All buttons same radius, all cards same radius
- **Interior radius matches exterior** — Nested elements maintain visual harmony

---

## Elevation & Depth

### Shadow System

IDUM uses subtle shadows that suggest depth without drama. On dark backgrounds, shadows are less visible; use border opacity and background gradients instead.

| Level | Shadow | Usage |
|-------|--------|-------|
| **Flat** | none | Default state |
| **Raised** | `0 2px 8px rgba(0,0,0,0.15)` | Hover states, subtle lift |
| **Elevated** | `0 4px 20px rgba(0,0,0,0.2)` | Cards, dropdowns |
| **Floating** | `0 8px 30px rgba(0,0,0,0.25)` | Modals, overlays |
| **Glow (Teal)** | `0 4px 20px rgba(14,124,123,0.35)` | Primary CTA buttons |
| **Glow (Gold)** | `0 4px 20px rgba(200,149,42,0.3)` | Gold accent elements |

### Depth Techniques on Dark Backgrounds

1. **Background lightening** — Lighter navy (#0D2545) for elevated surfaces
2. **Border opacity** — `border: 1px solid rgba(14,124,123,0.25)` for card edges
3. **Backdrop blur** — `backdrop-filter: blur(12–20px)` for glassmorphism
4. **Gradient overlays** — Radial gradients suggest light sources and depth

---

## Borders & Dividers

### Border Styles

| Type | Style | Usage |
|------|-------|-------|
| **Subtle** | `1px solid rgba(200,149,42,0.2)` | Navigation, light dividers |
| **Card** | `1px solid rgba(14,124,123,0.25)` | Card containers |
| **Emphasis** | `3px solid var(--gold)` | Pull quote left border |
| **Interactive** | `1px solid rgba(200,149,42,0.5)` | Secondary buttons |

### Divider Philosophy

- Prefer **spatial separation** over lines when possible
- Use **color shifts** (navy to lighter blue) instead of hard lines
- When lines are needed, use **low opacity** (15–25%)
- **Gold borders** signal importance or interactivity

---

## Iconography

### Icon Style

IDUM icons should be:

- **Line-based** — 1.5–2px stroke weight
- **Geometric** — Clean, simple shapes
- **Minimal** — Essential detail only
- **Teal or Parchment** — Match the color system

### Recommended Icon Sets

- **Phosphor Icons** — Modern, consistent, extensive
- **Heroicons** — Clean, professional
- **Lucide** — Lightweight, cohesive

### Icon Sizes

| Size | Dimensions | Usage |
|------|------------|-------|
| Small | 16px | Inline with text |
| Medium | 20px | Buttons, list items |
| Large | 24px | Navigation, cards |
| XL | 32px | Feature highlights |
| Hero | 48px+ | Section icons |

---

## Imagery

### Photography Style

**Tone:** Documentary, not commercial. Images should feel like evidence, not marketing.

**Subject Matter:**
- Ocean depths and underwater environments
- Scientific research activities
- International conferences and diplomacy
- Historic munitions (archival)
- Remediation operations
- Marine ecosystems

**Treatment:**
- **Color grading:** Cool, slightly desaturated, navy-teal bias
- **Contrast:** High enough for clarity, not HDR dramatic
- **Mood:** Serious, contemplative, urgent but not sensational

### Image Overlays

When placing text over images:
```css
/* Dark overlay for readability */
background: linear-gradient(
  180deg,
  rgba(10,22,40,0.7) 0%,
  rgba(10,22,40,0.9) 100%
);
```

### Partner Logos

- Display at consistent height (40–60px)
- Desaturate to grayscale or single color when needed for cohesion
- Maintain original proportions
- Add consistent spacing between logos

---

## Motion & Animation

### Animation Principles

1. **Purposeful** — Animation should guide attention, not decorate
2. **Subtle** — Movement should be felt more than seen
3. **Quick** — 200–400ms for most interactions
4. **Smooth** — Ease-out for entrances, ease-in for exits

### Timing

| Duration | Usage |
|----------|-------|
| 150ms | Micro-interactions (hover color) |
| 200ms | Button states, toggles |
| 300ms | Card hover, dropdown open |
| 400ms | Modal enter/exit |
| 600–1000ms | Page section reveals |

### Easing

```css
/* Standard ease */
transition-timing-function: ease;

/* Enter (elements appearing) */
transition-timing-function: ease-out;

/* Exit (elements leaving) */
transition-timing-function: ease-in;

/* Bounce (rare, for success states) */
transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Entrance Animations

**Fade In**
```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide Up**
```css
@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Interactive States

| State | Transform | Timing |
|-------|-----------|--------|
| Button hover | `translateY(-2px)` | 200ms |
| Card hover | `translateY(-4px)` | 300ms |
| Link hover | Color change only | 150ms |

---

## Component Patterns

### Buttons

**Primary Button**
- Background: Teal gradient
- Text: White, Barlow Condensed, uppercase
- Padding: 14px 32px
- Radius: 6px
- Shadow: Teal glow on hover
- Hover: Lift 2px, intensify glow

**Secondary Button**
- Background: Transparent
- Border: 1px gold at 50% opacity
- Text: Gold light, Barlow Condensed, uppercase
- Padding: 14px 32px
- Radius: 6px
- Hover: Background gold at 10%, border full opacity

### Cards

- Background: Atlantic Blue (#0D2545) at 60% opacity
- Border: 1px teal at 25% opacity
- Radius: 12–16px
- Padding: 24–40px
- Backdrop: blur(20px)

### Form Inputs

- Background: Navy at 50% opacity
- Border: 1px steel gray at 30% opacity
- Border focus: Teal at full opacity
- Text: Parchment
- Placeholder: Steel gray
- Radius: 6px
- Padding: 12px 16px

### Tags/Badges

- Background: Teal at 15% opacity
- Border: 1px teal at 40% opacity
- Text: Teal light, Barlow Condensed, uppercase
- Padding: 8px 16px
- Radius: 100px (pill)

---

## Grid System

### Layout Grid

**12-column grid** for flexibility across layouts.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
```

### Common Layouts

| Layout | Columns | Usage |
|--------|---------|-------|
| Full | 12 | Hero, full-width sections |
| Wide + Sidebar | 8 + 4 | Content with sidebar |
| Two Column | 6 + 6 | Split sections |
| Three Column | 4 + 4 + 4 | Card grids |
| Four Column | 3 + 3 + 3 + 3 | Logo grids, stats |

### Responsive Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Desktop | 1200px+ | 12 |
| Tablet | 768–1199px | 8 |
| Mobile | <768px | 4 |

---

## Accessibility

### Color Contrast

All text combinations must meet WCAG AA standards:

| Combination | Ratio | Pass |
|-------------|-------|------|
| Parchment on Abyss Navy | 12.5:1 | AAA |
| Parchment on Atlantic Blue | 10.2:1 | AAA |
| Teal Light on Abyss Navy | 5.8:1 | AA |
| Gold Light on Abyss Navy | 7.1:1 | AA |
| Steel Gray on Abyss Navy | 4.6:1 | AA (large text) |

### Focus States

All interactive elements must have visible focus indicators:
```css
:focus-visible {
  outline: 2px solid var(--teal-light);
  outline-offset: 2px;
}
```

### Motion Sensitivity

Respect user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Voice & Tone in Visual Design

### Headlines Should Feel:
- Declarative, not questioning
- Authoritative, not aggressive
- Urgent, not alarmist
- Global in scope

**Good:** "The Ocean's Hidden Crisis"
**Avoid:** "OMG! The Ocean is in DANGER!!!"

### Visual Hierarchy Should:
- Lead with the problem, then the solution
- Use data as evidence, not decoration
- Balance urgency with hope
- Present complexity with clarity

---

## Brand Don'ts

1. **Don't use bright, saturated colors** — No neon, no rainbow
2. **Don't use rounded/pill buttons** — Too casual for institutional brand
3. **Don't use playful illustrations** — Photography and data visualization only
4. **Don't use decorative fonts** — Stick to the type system
5. **Don't overcrowd layouts** — Generous whitespace signals confidence
6. **Don't use aggressive language** — "Crisis" not "catastrophe"
7. **Don't use stock photo aesthetics** — No handshakes, no pointing at screens
8. **Don't animate gratuitously** — Movement should inform, not entertain

---

## Quick Reference: CSS Variables

```css
:root {
  /* Colors */
  --navy: #0A1628;
  --deep-blue: #0D2545;
  --ocean: #1A4A7A;
  --teal: #0E7C7B;
  --teal-light: #15A8A6;
  --gold: #C8952A;
  --gold-light: #E8B84B;
  --cream: #F5F0E8;
  --white: #FFFFFF;
  --gray-light: #E8EDF5;
  --gray: #8A9AB5;
  --danger: #C23B3B;

  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-ui: 'Barlow Condensed', sans-serif;
  --font-body: 'Barlow', sans-serif;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 100px;

  /* Shadows */
  --shadow-raised: 0 2px 8px rgba(0,0,0,0.15);
  --shadow-elevated: 0 4px 20px rgba(0,0,0,0.2);
  --shadow-floating: 0 8px 30px rgba(0,0,0,0.25);
  --shadow-glow-teal: 0 4px 20px rgba(14,124,123,0.35);
  --shadow-glow-gold: 0 4px 20px rgba(200,149,42,0.3);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}
```

---

## Application Examples

### Website Header
- Fixed position with backdrop blur
- Navy at 92% opacity
- Gold border-bottom at 20% opacity
- Logo left, navigation center-right, CTA button far right

### Hero Section
- Full viewport height
- Depth gradient background
- Two-column layout (text left, visual right)
- Animated particle system (subtle, teal, slow-moving)

### Data Cards
- Atlantic Blue background with teal border
- Large Playfair number, small Barlow Condensed label
- Grid of 2x2 or 4x1 depending on space

### Partner Logos
- Horizontal scroll or grid
- Consistent height, grayscale or muted color
- Generous spacing

---

*This design system is a living document. Update as the brand evolves.*
