# DESIGN.md — Power Exchange Digital Services Platform

This is the authoritative visual/interaction reference for the build. It synthesizes the current live site's aesthetic (dark, glassmorphic, orange-accented) with the operational reality of the business: a WhatsApp-first crypto/gift-card exchange that must read as **fast, secure, and trustworthy**, not as a flashy gambling or trading app.

Read this alongside the product spec (`dev-spec.md`) — that document says *what* every screen needs to do; this one says *how it should look and feel*.

---

## 0. What we're taking from the current site, and why

The current SPA has strong bones. We are formalizing and extending them rather than replacing them.

**What to keep (and standardize):**
- The **dark navy/black base** with **orange accent** — already distinctive and memorable
- The **founder-forward hero** — the image of the founder in a branded tee is the single strongest trust signal on the site; it stays and gets a proper frame
- The **glassmorphic cards** — already present in the "Why Choose Us" and "Our Values" sections; we make this a formal system
- The **marquee** of crypto/gift-card logos — reads as abundance and legitimacy; keep it, polish the animation
- The **"What we trade"** framing — this is the core value prop, keep it prominent

**What to formalize (currently inconsistent):**
- Glass opacity, border, and blur values vary slightly between sections — unify into tokens
- Button styles (orange fill vs. ghost vs. link) are not consistently applied — define a clear hierarchy
- Spacing rhythm is uneven — adopt a strict 8px base grid
- Typography weight/size for section headings varies — lock to a scale

**What to explicitly *not* adopt from the current site:**
- **No price or rate displayed on any public-facing surface without a clear "subject to confirmation" disclaimer.** Rates change; a user seeing "1 USDT = ₦1,500" and arriving at WhatsApp to find ₦1,480 creates distrust. The Trade page calculator can show an *estimate* clearly labeled as such; everywhere else uses "Request a Quote" language.
- **No countdown timers, "rates expiring in X minutes," or live price tickers.** Directly conflicts with the trust mandate — rate changes are communicated by a human on WhatsApp, not by a flashing UI element.
- **No cart, no "add to trade," no checkout flow.** This is a WhatsApp-first concierge model. The "Trade Now" button opens a pre-filled WhatsApp conversation; it does not add to a basket.
- **No generic stock-photo people** (handshakes, smiling office workers, etc.). The founder image is the only human photography on the site, and it's real. Keep it that way.

---

## 1. Design Philosophy

This is a **concierge exchange desk**, not a trading terminal. The user is likely a Nigerian trader, a freelancer receiving international payments, or someone converting a gift card — they want three things: to know the rate is fair, to know the money will arrive, and to know a human is on the other end if something goes wrong. Every pattern below should reinforce those three things.

When in doubt, ask: *does this look like a trusted financial services brand, or does it look like a crypto casino?* If it's the latter, redo it.

The glassmorphism is the brand's signature. It should feel like **frosted glass over a deep, dark, expensive surface** — think premium fintech (Revolut, Monzo dark mode), not a gaming UI.

---

## 2. Foundations

### 2.1 Color

| Token | Value | Usage |
|---|---|---|
| `color-bg-base` | `#05080F` | Default body background — deepest layer |
| `color-bg-surface` | `#0F141E` | Elevated surfaces, footer base |
| `color-bg-deep` | `#020408` | Footer bottom bar, deepest accents |
| `color-brand-orange` | `#F97316` | Primary accent — CTAs, active states, highlights |
| `color-brand-orange-hover` | `#EA580C` | Orange hover/pressed state |
| `color-brand-gold` | `#FBBF24` | Secondary accent — rate highlights, crypto icons, celebratory moments |
| `color-text-primary` | `#FFFFFF` | Headlines, primary body text |
| `color-text-secondary` | `#94A3B8` | Paragraphs, labels, muted text |
| `color-text-tertiary` | `#64748B` | Captions, timestamps, disabled text |
| `color-success` | `#10B981` | "Secure", "Confirmed", success states |
| `color-warning` | `#F59E0B` | Rate warnings, "subject to confirmation" |
| `color-error` | `#EF4444` | Validation errors, failed states |
| `color-border-subtle` | `rgba(255,255,255,0.08)` | Default glass panel border |
| `color-border-accent` | `rgba(249,115,22,0.30)` | Orange-tinted border on hover/focus |

**Rule:** Orange is the action color. It appears on CTAs, active nav items, and interactive elements. If more than roughly 15% of a screen is orange, it's being overused — pull back to glass and typography.

**Contrast check needed before build:** White on `color-bg-base` passes AAA. `color-text-secondary` on `color-bg-base` passes AA for body text. `color-brand-orange` on `color-bg-base` passes AA for large text (headings, buttons) but **must be verified for body copy under 16px** — default to white for small text on dark, using orange only for emphasis or interactive states.

### 2.2 Typography

Two families, same discipline: a geometric display face for brand moments, a clean humanist sans for everything functional.

- **Display sans (Outfit)** — geometric, modern, slightly condensed. Used for the wordmark, hero headlines, section headings, and stat numbers. Should feel confident and contemporary.
- **Body sans (Inter)** — highly legible, neutral. Used for nav links, buttons, form labels, paragraphs, and any content that needs to be read quickly.

| Scale | Size (Desktop) | Size (Mobile) | Weight | Use |
|---|---|---|---|---|
| Display XL | 72–96px | 40–48px | 800 | Home hero headline only |
| Display L | 48–64px | 32–40px | 700 | Section headings, page titles |
| Display M | 32–40px | 24–28px | 700 | Sub-section headings, card titles |
| Display S | 24–28px | 20–22px | 600 | Feature titles, value cards |
| Body L | 18px | 16px | 400 | Hero paragraph, lead paragraphs |
| Body M | 16px | 15px | 400 | Default body text |
| Body S | 14px | 14px | 500 | UI labels, form fields, nav links |
| Caption | 12px | 12px | 500 | Metadata, disclaimers, timestamps |

**Letter-spacing:** Display sizes get `-0.02em` tracking (tight, modern). Body sizes get `0em`. Caption/uppercase labels get `+0.05em`.

### 2.3 Spacing & Grid

8px base unit. All spacing values are multiples of 8 (with 4px allowed for tight inline adjustments).

- **Section vertical padding:** 96–128px desktop, 64–80px mobile
- **Container max-width:** 1280px, with 24px horizontal padding on mobile, 48px on desktop
- **Grid:** 12-column on desktop, 6-column on tablet, single-column on mobile
- **Gutter:** 24px mobile, 32px desktop
- **Card internal padding:** 24px mobile, 32px desktop
- **Stack spacing between related elements:** 8, 16, 24, 32, 48, 64 (never arbitrary values)

### 2.4 Motion

Editorial and calm. This is financial services — motion should feel *considered*, not *exciting*.

- **Hero elements:** 400–600ms fade-up on load, staggered by 100ms per element. Never bounce, never spring.
- **Marquee:** Continuous linear scroll, 40–60s per loop. Pauses on hover. Respects `prefers-reduced-motion` (falls back to static row).
- **Hover states on cards:** 200ms ease — background lightens from 3% to 6% white, border shifts to orange-tinted.
- **Page transitions:** 250ms fade between routes (via Framer Motion `AnimatePresence`).
- **Accordion/modal open:** 200–250ms ease-out. No spring.
- **Rate calculation update:** 150ms number transition (cross-fade or subtle slide). Never a rapid ticking animation.
- **Banned outright:** any pulsing, flashing, shaking, or rapid color-change motion. No animation that could read as urgency. No loading spinners that pulse aggressively — use a calm rotating ring or skeleton shimmer at low opacity.

### 2.5 Iconography

Minimal, line-style icons throughout (Lucide React is the chosen library). Stroke width 1.5–2px. Size 20px default, 24px for feature cards, 32–40px for section icons.

**Recurring custom element:** The Power Exchange logo mark (the stacked "N" / lightning shape) — treat this as the one brand-specific icon. Reuse it as a subtle watermark or section accent where appropriate.

**Explicitly banned icon vocabulary:**
- Casino/gambling icons (dice, chips, spades)
- Fast-food or delivery icons (scooters, timers, map pins with tracking)
- Generic "finance bro" icons (rocket ships, moons, charts going up-and-to-the-right)
- Anything that implies speed over security

**Allowed and encouraged:**
- Shield, lock, checkmark (security and confirmation)
- Handshake, users (trust and human service)
- Globe, arrows (cross-border, exchange)
- Wallet, coins, card (financial instruments)
- WhatsApp glyph (for the WhatsApp float and CTAs)
- Clock (only in "fast" contexts, never "limited time")

---

## 3. Component Patterns Reference

Quick index — see Section 4 for full detail on each.

| Component | Used on | Purpose |
|---|---|---|
| Glass Navbar | All pages | Sticky navigation with active state |
| Glass Card | All pages | Default container for grouped content |
| Glass Input | Forms, Trade | Text/number/select inputs on dark |
| Primary CTA Button | All pages | Solid orange, main action |
| Secondary Button | All pages | Ghost/outline, alternate action |
| WhatsApp Float | All pages | Fixed bottom-right concierge entry |
| Founder Hero | Home | Trust-forward hero with real photo |
| Trade Marquee | Home | Scrolling crypto/gift-card logos |
| Services Grid | Home, Services | 5-card grid of service offerings |
| Why Choose Us Grid | Home, Why Choose Us | Numbered value props in glass cards |
| Values Grid | Home, About | 4-card values row |
| Trade Calculator | Trade | Two-dropdown rate estimator |
| Asset Card | Home, Trade | Individual crypto/gift-card tile |
| Section Divider | Home, Services | Scalloped or angled divider between sections |
| Footer | All pages | 4-column global footer |
| Mobile Menu | All pages | Full-screen glass overlay nav |
| Status Badge | Trade, Admin | Discrete state label (no timers) |

---

## 4. Component Detail

### 4.1 Glass Navbar (all pages)

Fixed top, full-width. Background: `rgba(5,8,15,0.70)` with `backdrop-filter: blur(16px)`. Bottom border: 1px `rgba(255,255,255,0.05)`.

- **Left:** Power Exchange logo (orange mark + white wordmark), links to `/`
- **Center (desktop only):** Nav links — Home, About, Services, Trade, Contact. Active link has orange text + 2px orange underline offset 8px below.
- **Right:** "Trade Now →" primary CTA button (solid orange, rounded-lg, px-5 py-2.5). On scroll past 80px, navbar gains a stronger background (`rgba(5,8,15,0.90)`) and a subtle shadow.
- **Mobile:** Hamburger icon on right (replaces center links + CTA). Opens full-screen glass overlay with large vertical nav links in Display S, CTA at bottom, and close button top-right.

### 4.2 Glass Card (default container)

The core building block. Every grouped piece of content sits in one of these unless there's a specific reason not to.

```
background: rgba(255,255,255,0.03)
backdrop-filter: blur(12px)
border: 1px solid rgba(255,255,255,0.08)
border-radius: 16px
box-shadow: 0 4px 30px rgba(0,0,0,0.10)
padding: 32px (desktop) / 24px (mobile)
```

**Hover variant (for clickable cards):** background lightens to `rgba(255,255,255,0.06)`, border shifts to `rgba(249,115,22,0.30)`, transition 200ms ease. Cursor pointer.

### 4.3 Primary CTA Button

Solid orange (`#F97316`), white text, `font-weight: 600`, `font-size: 15px`, `padding: 12px 24px`, `border-radius: 10px`.

**States:**
- Hover: background `#EA580C`, subtle scale 1.02
- Pressed: scale 0.98
- Disabled: opacity 0.5, cursor not-allowed, no hover state
- Loading: text replaced with a calm rotating ring (1.5px stroke, 16px), no pulse

**Optional right-arrow icon** (`→`) for forward-action CTAs like "Trade Now."

### 4.4 Secondary Button (Ghost)

Transparent background, `border: 1px solid rgba(255,255,255,0.20)`, white text, same padding/radius as primary.

**States:**
- Hover: `background: rgba(255,255,255,0.08)`, border lightens to `rgba(255,255,255,0.30)`
- Pressed: background `rgba(255,255,255,0.12)`
- Disabled: opacity 0.4

Used for: "Learn More," "View All Services," "Contact Support."

### 4.5 WhatsApp Float (all pages)

Fixed bottom-right, 24px from edge, 56×56px circle. Background `#25D366` (WhatsApp brand green). White WhatsApp glyph, 28px. Shadow: `0 8px 24px rgba(37,211,102,0.40)`.

- Hover: scale 1.05, shadow intensifies
- Click: opens `https://wa.me/{number}?text={encoded message}`
- On mobile: same size, 16px from edge
- `z-index: 50`, above all content but below modals

### 4.6 Founder Hero (Home)

Two-column grid on desktop (60/40 split), single column on mobile (image first, then text).

**Left column:**
- Small badge above headline: glass pill with "Fast · Secure · Reliable" in Body S, orange dot separator
- H1: "Power Exchange" in Display XL, white
- Orange subhead: "Making a Difference" in Display M, `color-brand-orange`
- Body paragraph in Body L, `color-text-secondary`, max-width 560px
- Request input: a glass panel containing a text input ("Hello Power Exchange, I would like to place a trade for…") + primary CTA button on the right ("Make a Request"). On submit, opens WhatsApp with the message pre-filled.

**Right column:**
- The founder photo, cut out (transparent background PNG), inside a rounded glass frame with a soft orange glow behind (`box-shadow: 0 0 80px rgba(249,115,22,0.20)`)
- Small floating badge in bottom-left of the image frame: glass pill with "4+ Years" or "Trusted Since 2021"

### 4.7 Trade Marquee (Home)

Two rows of infinitely scrolling asset cards. Top row scrolls left, bottom row scrolls right, at slightly different speeds (50s and 60s per loop) to create depth.

Each card: 160×100px glass panel with a 40×40px asset icon centered and the asset name below in Body S. Cards include: Bitcoin, USDT (TRC-20), USDT (ERC-20), USDC, BNB, Ethereum, Amazon, Apple, Steam, iTunes, Walmart, Tron.

- Pauses on hover (both rows)
- On mobile, cards shrink to 120×80px and only one row shows
- Respects `prefers-reduced-motion` — falls back to a static, centered grid of the same cards

### 4.8 Services Grid (Home, Services)

5 cards in a responsive grid (3+2 on desktop, 2+2+1 on tablet, single column on mobile). Each card is a glass panel with:
- A 40×40px icon in orange (or a small asset icon for E-Currency/Gift Cards)
- Title in Display S
- 2-line description in Body M, `color-text-secondary`
- A text-link "Learn more →" in orange at the bottom (not a full button — the whole card is clickable)

Services: E-Currency, Gift Cards, Digital Services, Cross-Border Payouts, Sending Gifts Abroad.

### 4.9 Why Choose Us Grid (Home, Why Choose Us)

5 numbered points in a 3+2 grid on desktop. Each point is a glass card containing:
- Number in Display S, `color-brand-orange` ("01", "02", …)
- Title in Display S, white ("Fast", "Secure", …)
- Description in Body M, `color-text-secondary`

Points: Fast, Secure, Reliable, Competitive, Customer-Focused.

**Alternate layout (Why Choose Us page):** Two-column — grid on the left, founder image on the right inside a large glass panel with a floating "Secure Transaction" status badge near the image.

### 4.10 Values Grid (Home, About)

4 values in a single row on desktop (2×2 on tablet, stacked on mobile). Each is a glass card with:
- Icon in orange (24px): Scale (Integrity), Eye (Transparency), Shield (Security), Star (Excellence)
- Title in Display S
- 1–2 line description in Body M

### 4.11 Trade Calculator (Trade page)

Two-column layout on desktop (calculator left, action panel right), stacked on mobile.

**Calculator panel (glass card):**
- Label "I want to sell" in Body S, `color-text-secondary`
- Dropdown: full-width glass input with asset icon + name
- Label "Amount"
- Number input: full-width glass input, `font-size: 24px`, right-aligned
- Swap icon button (circular, glass, orange on hover) centered between the two dropdowns
- Label "I want to receive"
- Dropdown: second asset
- Estimated payout display: large number in Display M, `color-brand-gold`, with a small "≈" prefix and a `color-text-tertiary` caption below: "Estimate only. Final rate confirmed on WhatsApp."

**Action panel (glass card):**
- "Start Trade" primary CTA (full width)
- Below it, two trust rows: shield icon + "Secure transaction", clock icon + "Average response: 5 min"
- Small print in Caption: "Rates are indicative. A Power Exchange agent will confirm your final rate before any transaction is finalized."

**Behavior:** Rate updates on input change with a 150ms cross-fade. No live ticking. No countdown.

### 4.12 Asset Card (used in marquee and dropdowns)

For marquee: as described in 4.7.

For dropdowns: a horizontal row with a 24×24px asset icon, asset name in Body S white, and network/symbol in Caption `color-text-tertiary` (e.g. "USDT — TRC-20").

### 4.13 Section Divider

Optional scalloped or angled SVG divider between major Home sections, in a subtle gradient from `color-bg-base` to `color-bg-surface`. Use sparingly — at most 2 dividers per page. Never a hard 1px line across the full width; that reads as generic.

### 4.14 Footer

Background: `color-bg-deep` (`#020408`). Top border: 1px `rgba(255,255,255,0.05)`. Padding: 64px vertical desktop, 48px mobile.

**4-column grid (desktop), stacked (mobile):**

1. **Brand column:** Logo + one-line tagline ("Making a difference in every transaction.") + social icons row (Twitter/X, Instagram, WhatsApp) as 40×40px glass circles.
2. **Quick Links:** Home, About, Services, Trade, Contact — Body S, `color-text-secondary`, hover `color-brand-orange`.
3. **Services:** E-Currency, Gift Cards, Digital Services, Cross-Border Payouts, Sending Gifts Abroad.
4. **Contact:** Email (`hello@powerexchange.com`), Phone (`+234 …`), WhatsApp button (small, outlined, opens wa.me link).

**Bottom bar:** Separated by a 1px divider. Left: "© 2025 Power Exchange. All rights reserved." Right: "Built with trust in Nigeria." Both in Caption, `color-text-tertiary`.

### 4.15 Mobile Menu

Full-screen overlay, background `rgba(5,8,15,0.95)` with `backdrop-filter: blur(20px)`. Fade-in 200ms.

- Top-right: close (X) icon, 24px, white
- Center: nav links stacked vertically, Display S size, 32px gap between, white, active link in orange
- Bottom: primary CTA "Trade Now" full-width, and a small WhatsApp link below it
- Locks body scroll when open
- Closes on link click or Escape key

### 4.16 Status Badge

Used in Trade confirmation and (future) Admin. A discrete pill with a colored dot + text label. **Never a countdown, never a progress bar, never an ETA.**

States:
- `Pending` — amber dot, amber-tinted background
- `Confirmed` — green dot, green-tinted background
- `Completed` — green dot, filled green-tinted background
- `Cancelled` — red dot, red-tinted background

---

## 5. Page-Specific Direction

- **Home:** Founder Hero (4.6) is the default. Trade Marquee (4.7) immediately below. Then Services Grid (4.8), Why Choose Us (4.9), Values (4.10), and a final CTA section with the Trade Calculator preview or a direct link to `/trade`. WhatsApp Float always present.

- **About:** Simple, editorial. Hero with "About Us" in Display L, a mission paragraph in Body L with max-width 720px centered, then a two-column section with the founder image and a longer story. Values Grid (4.10) repeated. Footer.

- **Services:** Hero with "Our Services" in Display L. Vertical stack of 5 service cards, each a large glass panel with icon, title, description, and a "Start a trade →" link. CTA section at the bottom linking to `/trade`.

- **Trade:** The most functional page. Trade Calculator (4.11) is the centerpiece, above the fold. Below it, a "How it works" 3-step section (Request → Confirm on WhatsApp → Receive funds) in glass cards. Trust badges and a short FAQ. WhatsApp Float prominent.

- **Contact:** Two-column. Left: contact form (Name, Email, Message) in a glass card with proper labels and validation. Right: contact info card with email, phone, WhatsApp button, and business hours. No map (avoids the "delivery tracking" association).

- **Why Choose Us:** Editorial long-form. Hero with "Why Choose Us?" in Display L. Two-column layout with the 5 numbered points on the left (as detailed cards, not just a grid) and the founder image on the right in a large glass panel. A closing CTA to `/trade`.

---

## 6. Accessibility Carryover

- Verify all text contrast against WCAG AA before shipping. Orange on dark passes for large text but must be tested for small text.
- All interactive elements keyboard-accessible with visible `:focus-visible` rings (2px orange outline, 2px offset).
- All images have descriptive `alt` text. Decorative images use `alt=""`.
- Form inputs have associated `<label>` elements, not just placeholders.
- `prefers-reduced-motion` is respected: marquee stops, hero fade-ups become instant, hover transitions remain but no auto-playing motion.
- Modals and mobile menu trap focus and restore it on close.
- Color is never the sole indicator of state — icons and text accompany it.

---

## 7. Component States Checklist

| Component | Required states |
|---|---|
| Primary CTA | default · hover · pressed · disabled · loading |
| Secondary Button | default · hover · pressed · disabled |
| Glass Card (clickable) | default · hover · focus-visible · active |
| Glass Input | default · focus · filled · error · disabled |
| Dropdown | closed · open · item-hovered · item-selected · disabled |
| WhatsApp Float | default · hover · focus-visible |
| Nav Link | default · hover · active (current page) · focus-visible |
| Mobile Menu | closed · open · link-hovered |
| Trade Calculator | idle · calculating · result-ready · error (invalid input) |
| Status Badge | pending · confirmed · completed · cancelled |
| Marquee | playing · paused (hover) · static (reduced motion) |

---

## 8. Reference

The current live site (screenshots provided) is the visual baseline. All choices in this document either formalize what's already there or deliberately extend it. No element should feel foreign to a returning user — it should feel like the same brand, more polished.
