# README.md — Power Exchange Digital Services Platform

![Dashboard](public/docs/dashboard.png)

## Overview
A full-stack, bespoke digital storefront and comprehensive administration suite tailored for a **WhatsApp-first crypto, gift card, and cross-border payout exchange business**. The platform bridges the gap between customer engagement (rate quotes, trade calculator, integrated WhatsApp trading) and business operations (trade pipeline, live rate management, transaction logs, and analytics).

Built to avoid the flashy, high-anxiety "crypto trading terminal" energy while still feeling fast, secure, and modern. This platform is designed as a **premium concierge exchange desk**, not a gambling app or a generic e-commerce store. It handles everything from initial trade requests and WhatsApp negotiations to dynamic rate management and business analytics.

## Key Features & Capabilities

### 📈 Live Operations Dashboard
A command center for daily trading operations. Track total trades, pending quotes, and completed transactions at a glance. Features a live pipeline of recent trade requests and quick access to the latest unread WhatsApp conversations.

### 💰 Dynamic Rate & Asset Management
Categorized, inline-editable asset management. Quickly adjust buy/sell rates, toggle asset availability (e.g., pause a specific network during congestion), and apply bulk percentage adjustments across entire asset categories. Changes reflect instantly on the storefront calculator.

### 💬 Integrated Chat & Quote Flow
Customers request trade quotes seamlessly through the public Trade Calculator. Admins can review these requests, adjust rates for high-volume trades, and push generated quotes directly to the customer's WhatsApp. The platform tracks chat threads and communication logs natively, keeping all context in one place.

### 📊 Real-Time Analytics & Reports
Understand business health with interactive analytics. Track trade volume over time, review asset performance (which cryptos and gift cards drive the most volume), calculate average trade values, and identify peak trading hours to make informed operational decisions.

### ⚙️ Complete Brand Control
A robust settings dashboard that gives admins full control over the storefront. Manage brand details, business hours, social media handles (Twitter/X, Instagram), WhatsApp numbers, and admin access lists dynamically.

### ☁️ Scalable File Uploads
Seamlessly handle large file uploads (like proof-of-payment screenshots or gift card receipt photos) utilizing **Vercel Blob** for zero-config, edge network CDN hosting.

## Tech Stack
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS & Framer Motion
* **Database & Auth:** Firebase Firestore & Firebase Auth
* **Storage:** Vercel Blob API
* **State Management:** Zustand

---

<details>
<summary><strong>View Original Technical Specification</strong></summary>

# Power Exchange — Digital Services Platform
## Full Product Requirements, Site Architecture & Codebase Structure

Built from the current SPA's structure and the operational reality of a WhatsApp-native, Nigeria-first crypto exchange business. Every requirement below traces back to a specific constraint of the business model, and every design/technical decision explains *why*, not just *what*, so nothing here is guesswork dressed up as certainty.

---

## 0. Brand Identity & Tone Mandate

This is the single governing constraint for the entire build, stated explicitly by the current site's own positioning: **"fast, secure, and reliable digital solutions"** — with a hard emphasis on **trust over hype**.

**What "flashy crypto casino energy" looks like (avoid these, explicitly):**
- Live price tickers with green/red flashing numbers
- Countdown timers, "rate expiring in X seconds," FOMO banners
- Rocket ship icons, "to the moon" copy, memes
- Gambling-adjacent iconography (dice, chips, spades)
- Aggressive promo banners, "limited time bonus" popups
- Dark-pattern urgency ("Only 2 slots left at this rate!")

**What "premium concierge exchange desk" looks like instead (build toward these):**
- Editorial, glassmorphic dark UI — deep navy/black with orange accents, calm and confident
- Real human trust signals (founder photo, "4+ Years experience," WhatsApp support) rather than anonymous corporate branding
- Calm, honest rate language: **"Estimate only. Final rate confirmed on WhatsApp."** — never a hard-locked number that could be wrong by the time the user acts
- Social proof through real transaction history, repeat clients, and the founder's actual face, not star ratings or fake testimonials

**Color palette:** Deep navy/black base (primary — trust, premium, focus) and brand orange (accent — action, energy, used deliberately so CTAs pop without the whole page screaming).

| Role | Color | Approx. hex |
|---|---|---|
| Background base | Deep navy/black | `#05080F` |
| Surface/card base | Slightly lighter navy | `#0F141E` |
| Deep accent (footer) | Almost black | `#020408` |
| Primary / brand action | Brand orange | `#F97316` |
| Primary hover/active | Deeper orange | `#EA580C` |
| Accent (rate highlights, crypto icons) | Golden yellow | `#FBBF24` |
| Text primary | White | `#FFFFFF` |
| Text secondary | Muted slate | `#94A3B8` |
| Success | Emerald | `#10B981` |

**Typography direction:** a geometric display sans (Outfit) for headings and brand moments, paired with a clean humanist sans (Inter) for body/UI text — same two-typeface discipline used successfully in prior builds: decorative type for branding moments, plain type for anything functional (forms, rates, dates).

---

## 1. Project Requirements (formal)

### 1.1 Functional Requirements

| ID | Requirement | Source (business need) |
|---|---|---|
| FR-1 | Homepage must showcase what we trade (crypto + gift cards), the trust story (founder), and clear instructions on how to trade | Trust-first positioning; user needs to know *what* and *how* immediately |
| FR-2 | Trade Calculator page with two dropdowns (sell asset, receive asset), amount input, and estimated payout display | Core conversion tool — user needs to know roughly what they'll get before opening WhatsApp |
| FR-3 | No locked/hard rate displayed as final anywhere public — always labeled "estimate only" | Rates change; a user seeing a hard number and arriving at WhatsApp to find a different one destroys trust |
| FR-4 | Admin can set and update buy/sell rates per asset inline | Rates change multiple times daily; must be editable without a deploy |
| FR-5 | Admin can toggle asset availability (e.g., pause USDT-TRC20 during network congestion) | Operational reality — sometimes an asset shouldn't be tradeable |
| FR-6 | Trade requests and quotes delivered via WhatsApp as primary channel | Business is WhatsApp-native; forcing email would add friction |
| FR-7 | No cart, no "add to trade," no checkout flow — "Start Trade" opens a pre-filled WhatsApp conversation | This is a concierge model, not a shopping cart; the human on WhatsApp closes the sale |
| FR-8 | No countdown timers, "rate expiring in X," or live price tickers anywhere client-facing | Directly conflicts with the trust mandate — urgency is not how you build a financial services brand |
| FR-9 | System logs every trade request, quote, and WhatsApp interaction to a Communication Log | CRM and analytics depend on complete historical data from day one |
| FR-10 | Analytics dashboard for tracking volume over time, asset performance, and peak hours | Operational insight — which assets move, when, and how much |
| FR-11 | Platform links prominently to Twitter/X, Instagram, and WhatsApp as social hub | These are the brand's public-facing channels |

### 1.2 Non-Functional Requirements

- **NFR-1 (Tone/UX):** Every screen must be reviewed against the Section 0 tone mandate before shipping — trust over hype, no urgency patterns, no gambling-adjacent language. This is a design QA gate, not a suggestion.
- **NFR-2 (Rate accuracy):** Since rates change frequently, the platform must never display a rate as if it were final. The Trade Calculator always shows "Estimate only — final rate confirmed on WhatsApp," and the admin must be able to update rates in under 30 seconds.
- **NFR-3 (Security & trust signaling):** Every public-facing page must reinforce security (shield icons, "Secure transaction" badges, HTTPS, no sketchy redirects). This is a financial services brand — trust is the product.
- **NFR-4 (Extensibility):** New assets (new cryptos, new gift card brands) will be added regularly — the asset system must be data-driven, not hardcoded, so adding "Solana" or "Sephora gift cards" is an admin action, not a deploy.
- **NFR-5 (Data integrity for CRM/analytics):** Every trade request, rate update, and communication event must be persisted (not just the current state) from day one — you cannot retroactively reconstruct "peak trading hours over the last year" if the events weren't captured.
- **NFR-6 (Local payment/comms context):** WhatsApp Business API (Meta Cloud API or a provider like Twilio/360dialog) for trade delivery — consistent with a Nigeria-first, WhatsApp-native client base. Paystack/Flutterwave for any future direct-payment flows.

---

## 2. Site Map / Information Architecture

```
PUBLIC [No login required for general browsing]
├── Home [Landing page featuring hero, trust signals, what we trade, how it works]
├── About [Brand story, founder, mission, values]
├── Services [Overview of all services offered]
│   ├── E-Currency [Crypto trading detail]
│   ├── Gift Cards [Gift card trading detail]
│   ├── Digital Services
│   ├── Cross-Border Payouts
│   └── Sending Gifts Abroad
├── Trade [Core functionality — rate calculator + WhatsApp integration]
├── Why Choose Us [Trust and differentiator page]
├── Contact [Contact form, WhatsApp, social links]
└── Policy [Terms, rates policy, transaction policy — own page, not buried]

CLIENT ACCOUNT [Requires user login - future phase]
├── Dashboard [Personalized overview]
├── My Trades [Trade history and statuses]
└── Profile [Contact details and preferences]

ADMIN / CRM DASHBOARD [Strictly Auth required - Admins Only]
├── Dashboard Overview [Live stats, recent trades, pending requests]
├── Asset Management [Add/edit assets, buy/sell rates, availability toggles]
├── Rate Management [Bulk rate adjustments, historical rate log]
├── Trades & Requests [Track incoming trade requests, update statuses]
├── Analytics & Reports [Volume trends, asset performance, peak hours]
├── Gallery Management [Upload and categorize brand/portfolio images]
├── Chat CRM [View and respond to customer WhatsApp messages]
├── Customers [CRM directory of all clients, interaction history, lifetime value]
├── Communication Log [Full searchable history of all touchpoints]
└── Global Settings [Brand config, social handles, WhatsApp numbers, admin access]
```

---

## 3. Page-by-Page Breakdown

### 3.1 Home — full section-by-section breakdown

**1. Nav bar** — Logo, Home, About, Services, Trade, Contact — **"Trade Now →"** as the single primary CTA in orange. Social icons (Twitter/X, Instagram, WhatsApp) accessible from the nav or a persistent header strip. The nav is a sticky glass panel — `rgba(5,8,15,0.70)` with `backdrop-filter: blur(16px)` and a subtle bottom border.

**2. Hero** — Two-column layout on desktop. Left: a "Fast · Secure · Reliable" badge, H1 "Power Exchange" in Display XL white, orange subhead "Making a Difference" in Display M, a body paragraph in Body L, and a "Make a Request" input+button that opens a pre-filled WhatsApp conversation. Right: the founder photo (cutout, transparent background) inside a rounded glass frame with a soft orange glow behind it. No price or rate anywhere near the hero.

**3. Trade Marquee** — Two rows of infinitely scrolling asset cards (Bitcoin, USDT-TRC20, USDT-ERC20, USDC, BNB, Ethereum, Amazon, Apple, Steam, iTunes, Walmart, Tron). Top row scrolls left, bottom row scrolls right. Pauses on hover. Falls back to a static grid on `prefers-reduced-motion`. This is the "what we trade" strip — visible abundance, not a dense catalog.

**4. Services Grid** — 5 glass cards: E-Currency, Gift Cards, Digital Services, Cross-Border Payouts, Sending Gifts Abroad. Each has an orange icon, a Display S title, a 2-line description in Body M, and a "Learn more →" text link. The whole card is clickable.

**5. Why Choose Us** — 5 numbered points (01 Fast, 02 Secure, 03 Reliable, 04 Competitive, 05 Customer-Focused) in a 3+2 grid of glass cards. Each shows the number in orange Display S, a white Display S title, and a Body M description. On the Home page, keep it compact. On the dedicated `/why-choose-us` page, expand it.

**6. Our Values** — 4 glass cards in a row: Integrity (Scale icon), Transparency (Eye icon), Security (Shield icon), Excellence (Star icon). Icon in orange, title in Display S, 1–2 line description.

**7. How It Works** — 3-step visual: **1. Request a trade → 2. Confirm rate on WhatsApp → 3. Receive funds.** Each step in a glass card with a number in orange, a title in Display S, and a short description. This is the section that removes friction for first-time users.

**8. Trust / Founder Section** — A short editorial section with the founder's photo (a second, different image from the hero), a short quote or message, and trust markers: "4+ Years of Experience," "Trusted by [X] clients," "Fast · Secure · Reliable."

**9. Footer** — 4-column glass footer (Brand, Quick Links, Services, Contact) with social icons and a WhatsApp button. Bottom bar with copyright and "Built with trust in Nigeria."

### 3.2 About

- Hero with "About Us" in Display L.
- Mission statement in Body L, max-width 720px, centered.
- Founder section with a longer story, the founder's image, and a personal quote.
- Values grid (reused from Home).
- CTA section linking to `/trade`.

### 3.3 Services

- Hero with "Our Services" in Display L.
- Vertical stack of 5 large glass service cards, each with a larger icon, a Display M title, a richer description, and a "Start a trade →" link that goes to `/trade`.
- Optional sub-pages for `/services/crypto` and `/services/gift-cards` with deeper detail.
- CTA at the bottom: "Ready to trade? Start here →"

### 3.4 Trade (Core Functionality)

This is the platform's most important page.

**Layout:** Two columns on desktop, stacked on mobile.

**Left column — Trade Calculator (glass card):**
- "I want to sell" label
- Dropdown: full-width glass input with asset icon + name + network (e.g., "USDT — TRC-20")
- "Amount" label + number input (large, right-aligned, `font-size: 24px`)
- Swap icon button (circular, glass, orange on hover) centered between the two dropdowns
- "I want to receive" label
- Dropdown: second asset
- **Estimated payout display:** a large number in Display M `color-brand-gold`, prefixed with "≈", and a caption below in `color-text-tertiary`: **"Estimate only. Final rate confirmed on WhatsApp."**

**Right column — Action panel (glass card):**
- "Start Trade" primary CTA (full width, solid orange)
- Two trust rows: Shield icon + "Secure transaction", Clock icon + "Average response: 5 min"
- Small print: "Rates are indicative. A Power Exchange agent will confirm your final rate before any transaction is finalized."

**Below the fold:**
- 3-step "How it works" visual (same as Home)
- FAQ section (4–6 common questions about rates, timing, security, supported assets) in glass accordion panels
- Trust badges row

**Behavior:** Rate updates on input change with a 150ms cross-fade (no rapid ticking). No countdown. No live ticker. "Start Trade" generates a `wa.me` link with the trade details pre-filled.

### 3.5 Why Choose Us

- Hero with "Why Choose Us?" in Display L.
- Two-column layout: the 5 numbered points on the left as detailed glass cards (with expanded descriptions), the founder image on the right in a large glass panel with a floating "Secure Transaction" badge.
- A closing CTA section linking to `/trade`.

### 3.6 Contact

- Two-column layout. Left: contact form (Name, Email, Message) in a glass card with proper labels and validation. Right: contact info card with email, phone, WhatsApp button, business hours, and social links.
- No map (avoids "delivery tracking" association). Instead, a simple text address if needed.
- Below: a small FAQ block for common questions.

### 3.7 Policy

- Terms of service, rates policy, transaction policy, refund policy, and privacy policy — all on one page with anchor navigation.
- Explicit rates disclaimer: "All rates displayed on this site are estimates. Final rates are confirmed by a Power Exchange agent on WhatsApp before any transaction is finalized."

---

## 4. Core User Flows

### 4.1 User requests a trade → receives rate on WhatsApp → completes

1. User lands on Home or `/trade`.
2. Uses the Trade Calculator to see an estimated payout.
3. Clicks "Start Trade" → opens WhatsApp with a pre-filled message: *"Hello Power Exchange, I would like to trade [amount] [asset] for [asset]. Estimated payout from your site: [amount]."*
4. Admin receives the WhatsApp message, confirms the final rate, and responds on WhatsApp.
5. Trade is completed via bank transfer / wallet transfer as agreed on WhatsApp.
6. Admin logs the trade in the Admin dashboard (Phase 2 will automate this).
7. Communication Log entry is created.

### 4.2 Admin updates rates

1. Admin logs into the Admin dashboard.
2. Navigates to Asset Management.
3. Sees a table of all assets with current buy/sell rates, availability toggle, and last-updated timestamp.
4. Clicks a rate cell → inline edit → saves.
5. Rate updates in the storefront within 60 seconds (or on next page load).
6. Rate change is logged with timestamp for the historical record.

### 4.3 Admin toggles asset availability

1. Admin toggles an asset's availability switch (e.g., pause USDT-TRC20 during network congestion).
2. The asset disappears from the Trade Calculator dropdowns on the public site.
3. If a user had it selected, the calculator shows a polite message: "This asset is temporarily unavailable. Please choose another."
4. The toggle is logged.

### 4.4 The no-urgency mandate, operationalized

FR-8 isn't satisfied by simply not building a countdown widget — it requires a deliberate replacement pattern everywhere a crypto app would normally show urgency:

| Situation | Crypto-casino pattern (banned) | This platform's replacement |
|---|---|---|
| Rate displayed | "1 USDT = ₦1,500 (locked for 30s!)" with countdown | "≈ ₦1,500 (estimate only — confirmed on WhatsApp)" |
| Rate changes | Flashing red/green ticker | Rates update on page reload; no live ticker, no flashing |
| Network congestion | "HURRY! Rates dropping!" | Asset gracefully hidden or labeled "temporarily unavailable" |
| Trade request submitted | "Complete in the next 10 minutes or rate expires!" | "Message sent. We'll confirm your rate on WhatsApp shortly." |
| Volume / popularity | "1,247 trades today! 🔥" | Silent — trust is built through the founder photo and the track record, not live counters |

### 4.5 CRM & Communication Logging

Every meaningful touchpoint — trade request submitted, WhatsApp conversation started, rate quoted, trade completed — writes an entry to that client's Communication Log, timestamped, so a client's full history is reconstructable from one screen rather than scattered across WhatsApp chat history that could be lost if a phone is changed.

### 4.6 Analytics

- **Volume over time:** trades per day/week/month, with year-over-year comparison.
- **Asset performance:** which cryptos and gift cards drive the most volume — useful for prioritizing which assets to add next.
- **Peak hours:** when users are most active on the calculator and submitting trade requests — useful for staffing decisions.
- **Conversion rate:** calculator uses vs. WhatsApp trade requests vs. completed trades — identifies where users drop off.

---

## 5. Feature List by Priority

### Must-have (v1) — the current SPA, formalized
- Homepage with hero, marquee, services, why-choose-us, values, footer (FR-1)
- Trade Calculator page with WhatsApp integration (FR-2, FR-7)
- Rate disclaimer everywhere a rate is shown (FR-3)
- No urgency patterns anywhere (FR-8)
- Social links (Twitter/X, Instagram, WhatsApp) integrated platform-wide (FR-11)

### High-value (v1.5)
- Admin dashboard with Asset Management and Rate Management (FR-4, FR-5)
- Communication Logging (FR-9) — must exist from day one per NFR-5
- Admin Trades & Requests view
- Policy page

### Nice-to-have (v2)
- Analytics dashboard (FR-10) — needs real trade data to be meaningful
- Client accounts (optional login, trade history)
- Live rate API integration (CoinGecko / Binance) with manual override
- Paystack/Flutterwave direct payment for future automated trades
- SMS as a secondary notification channel alongside WhatsApp
- Multi-staff support

---

## 6. Data Model

**User**
- id, name, phone (WhatsApp number — primary contact method, validated), email (optional), role (`client`|`admin`), created_at

**Client (CRM record — may exist without a User account, for guest trade requests)**
- id, name, phone, email, first_contact_date, total_lifetime_value, last_trade_date, notes

**Asset**
- id, name, symbol, type (`crypto`|`giftcard`), icon_url, network (nullable, e.g., "TRC-20"), buy_rate, sell_rate, min_amount, max_amount, is_active (bool), last_updated_at

**Rate History**
- id, asset_id, buy_rate, sell_rate, changed_by (admin user id), changed_at
- Every rate change creates a new row, so historical rates are reconstructable

**Trade Request**
- id, client_id, from_asset_id, to_asset_id, from_amount, estimated_to_amount, status (`requested`|`quoted`|`completed`|`cancelled`), source (`calculator`|`direct_whatsapp`), notes, created_at

**Payment** (future phase)
- id, trade_id, method (`online`|`whatsapp_manual`), gateway (`paystack`|`flutterwave`, nullable), amount, status (`pending`|`paid`|`failed`), reference

**Communication Log Entry**
- id, client_id, type (`trade_request`|`whatsapp_message`|`rate_quoted`|`trade_completed`|`note`), detail (text/JSON), created_at

**Social Link**
- id, platform (`twitter`|`instagram`|`whatsapp`), url, active (bool)

---

## 7. Specific Fixes vs. "Crypto Casino Energy" (explicit anti-pattern list)

| Crypto-casino pattern | This platform's replacement |
|---|---|
| Live price ticker with flashing numbers | Static rates updated on page reload; no ticker |
| "Rate locked for 30s" countdown | "Estimate only — confirmed on WhatsApp" |
| Rocket/moon iconography | Shield, lock, checkmark — security and confirmation |
| "1,247 trades today! 🔥" hype | Silent trust signals: founder photo, "4+ Years experience" |
| Green/red flashing price changes | Calm rate display, no color-coded flashing |
| Anonymous corporate branding | Real founder photo, personal story, WhatsApp-first contact |
| "Limited time bonus" banners | No promos, no bonuses, no urgency |

---

## 8. Design System Notes (dark navy / orange, applied)

- Deep navy/black as the dominant surface — body, cards, nav. The dark theme signals "premium financial services," not "gaming app."
- Brand orange reserved for **moments of action**: primary CTAs, active nav states, icon accents. If more than ~15% of a screen is orange, it's being overused.
- Golden yellow used sparingly for **rate highlights and crypto icons** — it's the "attention" color, not the action color.
- Glassmorphism as the signature — every card, panel, and modal uses the same glass treatment: `rgba(255,255,255,0.03)` background, `backdrop-blur(12px)`, 1px `rgba(255,255,255,0.08)` border, 16px radius.
- Photography-first for the founder sections — real human trust signals matter more than stock imagery.
- Generous whitespace, restrained UI chrome — closer to an editorial fintech site than a dense trading dashboard.

---

## 9. Folder / Codebase Architecture

Recommended stack: **Next.js (App Router)** for the frontend + API routes, **PostgreSQL** (via Prisma) for the database, **WhatsApp Business Cloud API** (Meta) or a provider like Twilio/360dialog for trade delivery, **Paystack/Flutterwave** for future direct payments — same proven pattern as prior builds, chosen for the same reasons (Nigeria-first, WhatsApp-native audience).

```
power-exchange-platform/
├── apps/
│   ├── web/                          # Public-facing site + client account area
│   │   ├── app/
│   │   │   ├── (public)/
│   │   │   │   ├── page.tsx                    # Home (3.1)
│   │   │   │   ├── about/page.tsx              # (3.2)
│   │   │   │   ├── services/
│   │   │   │   │   ├── page.tsx                # (3.3)
│   │   │   │   │   ├── crypto/page.tsx
│   │   │   │   │   └── gift-cards/page.tsx
│   │   │   │   ├── trade/page.tsx              # (3.4)
│   │   │   │   ├── why-choose-us/page.tsx      # (3.5)
│   │   │   │   ├── contact/page.tsx            # (3.6)
│   │   │   │   └── policy/page.tsx             # (3.7)
│   │   │   ├── (account)/
│   │   │   │   ├── dashboard/page.tsx          # future
│   │   │   │   └── trades/page.tsx             # future
│   │   │   ├── api/
│   │   │   │   ├── assets/route.ts             # GET — public asset list (rates, availability)
│   │   │   │   ├── trade-requests/route.ts     # POST — log a trade request
│   │   │   │   └── payments/                   # future
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── layout/ (Navbar, Footer, MobileMenu)
│   │   │   ├── home/ (Hero, TradeMarquee, ServicesGrid, WhyChooseUs, ValuesGrid, HowItWorks, FounderSection)
│   │   │   ├── trade/ (TradeCalculator, RateDisplay, WhatsAppCTA, FAQAccordion)
│   │   │   ├── services/ (ServiceCard, ServiceList)
│   │   │   └── shared/ (GlassCard, Button, Input, Select, StatusBadge, WhatsAppFloat)
│   │   └── lib/ (api-client.ts, whatsapp-link-builder.ts, formatters.ts)
│   │
│   └── admin/                        # CRM / Admin dashboard
│       ├── app/
│       │   ├── (dashboard)/
│       │   │   ├── page.tsx                    # Admin Home — today's stats, recent trades
│       │   │   ├── assets/
│       │   │   │   ├── page.tsx                # Asset list, inline rate edit
│       │   │   │   └── [id]/page.tsx           # Asset detail + rate history
│       │   │   ├── rates/
│       │   │   │   └── page.tsx                # Bulk rate adjustment
│       │   │   ├── trades/
│       │   │   │   ├── page.tsx                # All trade requests
│       │   │   │   └── [id]/page.tsx           # Trade detail + comms log
│       │   │   ├── clients/
│       │   │   │   ├── page.tsx                # CRM list
│       │   │   │   └── [id]/page.tsx           # Client detail, history, comms log
│       │   │   ├── analytics/
│       │   │   │   ├── page.tsx                # Volume over time
│       │   │   │   ├── assets/page.tsx         # Asset performance
│       │   │   │   └── peak-hours/page.tsx     # Peak hours
│       │   │   ├── communications/page.tsx     # Full searchable comms log
│       │   │   └── settings/
│       │   │       ├── social/page.tsx         # Twitter/Instagram/WhatsApp links
│       │   │       └── team/page.tsx
│       │   └── api/
│       │       ├── assets/route.ts             # CRUD for assets and rates
│       │       ├── whatsapp/
│       │       │   ├── send-message/route.ts
│       │       │   └── delivery-status/route.ts
│       │       └── analytics/route.ts
│       └── components/
│           ├── assets/ (AssetTable, InlineRateEditor, RateHistoryChart)
│           ├── trades/ (TradeQueueTable, TradeDetailPanel)
│           ├── clients/ (ClientTimeline, CommsLogEntry)
│           └── analytics/ (VolumeChart, AssetPerformanceChart, PeakHoursHeatmap)
│
├── packages/                          # Shared across web + admin
│   ├── ui/                            # Shared design-system components (buttons, badges, glass cards)
│   ├── db/                            # Prisma schema + client (Section 6's data model lives here)
│   │   └── schema.prisma
│   ├── whatsapp/                      # WhatsApp Business API client wrapper
│   │   ├── client.ts
│   │   └── templates.ts               # Message templates for trade confirmations
│   ├── payments/                      # Paystack/Flutterwave client wrapper (future)
│   └── config/                        # Shared env/config, design tokens (dark navy/orange palette)
│
├── docs/
│   └── this-spec.md                   # This document, kept in-repo for reference
├── .env.example
├── package.json                       # Monorepo root (Turborepo or Nx)
└── README.md
```

## 10. Suggested Build Order

1. **Data model + shared packages** (`packages/db`, `packages/ui`, `packages/config`) — everything else depends on these existing first.
2. **Public: Home + About + Services + Why Choose Us + Contact + Policy** — the full public site, formalizing the current SPA into routed pages.
3. **Public: Trade Calculator** — the core conversion tool, with WhatsApp integration.
4. **Admin: Asset Management + Rate Management** — so rates can be updated without a deploy (FR-4, FR-5).
5. **Communication Logging** — must exist from day one (NFR-5), even if the admin view is minimal at first.
6. **Admin: Trades & Requests + Client CRM** — closes the loop on inbound requests.
7. **Admin: Analytics** — deliberately last among the "high-value" items, since it needs real trade data flowing through steps 4–6 to be meaningful.
8. **Future: Client accounts, live rate API, direct payments.**

</details>

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-org/power-exchange-platform.git
cd power-exchange-platform

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run database migrations
pnpm db:migrate

# Start the dev servers
pnpm dev          # Public site on :3000
pnpm dev:admin    # Admin dashboard on :3001
```

## Environment Variables

See `.env.example` for the full list. Key variables:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=2348012345678
NEXT_PUBLIC_SITE_URL=https://powerexchange.com
DATABASE_URL=postgresql://...
WHATSAPP_API_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
```

## License

Proprietary. All rights reserved.
