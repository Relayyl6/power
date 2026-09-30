# Developer Specification: Power Exchange Platform

**Document Type:** `dev-spec.md`
**Target Audience:** Frontend/Full-Stack Developers, AI Coding Agents
**Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React

---

## 1. Project Overview
Power Exchange is a digital financial services platform enabling users to trade cryptocurrencies, gift cards, and access cross-border payout services. The application must transition from a static SPA to a multi-page, SEO-friendly, functional web app with a premium **Glassmorphism** UI.

---

## 2. Technology Stack & Dependencies

### Core
*   **Framework:** Next.js 14+ (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animation:** Framer Motion
*   **Icons:** Lucide React
*   **Fonts:** Google Fonts (Outfit, Inter) via `next/font`

### Utilities
*   **Form Handling:** React Hook Form + Zod (validation)
*   **State Management:** Zustand (for trade calculator state)
*   **HTTP Client:** Axios (for future API integration)
*   **Date Formatting:** date-fns
*   **Class Merging:** `clsx` + `tailwind-merge`

### Dev Dependencies
*   ESLint + Prettier
*   Husky (pre-commit hooks)
*   TypeScript Strict Mode

---

## 3. Folder Structure

```
power-exchange/
├── public/
│   ├── images/
│   │   ├── founder.png
│   │   ├── logo.svg
│   │   └── hero-bg.jpg
│   ├── icons/
│   │   ├── crypto/          # BTC, USDT, ETH icons
│   │   └── giftcards/       # Amazon, Apple, Steam icons
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (fonts, navbar, footer)
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Tailwind + custom glass utilities
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── crypto/
│   │   │   │   └── page.tsx
│   │   │   └── gift-cards/
│   │   │       └── page.tsx
│   │   │
│   │   ├── trade/
│   │   │   ├── page.tsx
│   │   │   └── components/
│   │   │       ├── TradeCalculator.tsx
│   │   │       ├── RateDisplay.tsx
│   │   │       └── WhatsAppCTA.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── why-choose-us/
│   │   │   └── page.tsx
│   │   │
│   │   └── api/                 # Future API routes
│   │       └── rates/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Container.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Card.tsx          # Glass panel wrapper
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Marquee.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── ValuesSection.tsx
│   │   │   └── TradeMarquee.tsx
│   │   │
│   │   └── shared/
│   │       ├── SectionHeading.tsx
│   │       ├── GlassPanel.tsx
│   │       └── WhatsAppFloat.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts         # Nav links, service data, rates
│   │   ├── utils.ts             # cn() helper, formatters
│   │   ├── validators.ts        # Zod schemas
│   │   └── whatsapp.ts          # WhatsApp link generator
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   ├── useTradeCalculator.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── types/
│   │   ├── trade.ts
│   │   ├── service.ts
│   │   └── index.ts
│   │
│   └── styles/
│       ├── glass.css            # Glassmorphism utilities
│       └── animations.css       # Keyframes for marquee, glow
│
├── .env.local
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Design Tokens & Tailwind Configuration

### 4.1 `tailwind.config.ts`
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#05080F",
          surface: "#0F141E",
          deep: "#020408",
        },
        brand: {
          orange: "#F97316",
          gold: "#FBBF24",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        glass: "1rem",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        glow: "0 0 40px rgba(249, 115, 22, 0.3)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### 4.2 `src/app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 5 8 15;
    --foreground: 255 255 255;
  }

  body {
    @apply bg-background text-text-primary font-body antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer components {
  .glass-panel {
    @apply bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-glass shadow-glass;
  }

  .glass-panel-hover {
    @apply transition-all duration-300 hover:bg-white/[0.06] hover:border-brand-orange/30;
  }

  .glass-nav {
    @apply bg-background/70 backdrop-blur-lg border-b border-white/[0.05];
  }

  .glass-input {
    @apply bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/50 outline-none transition-all;
  }

  .btn-primary {
    @apply bg-brand-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200 active:scale-95;
  }

  .btn-secondary {
    @apply bg-transparent border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200;
  }

  .btn-glass {
    @apply glass-panel glass-panel-hover text-white font-semibold px-6 py-3;
  }
}

@layer utilities {
  .text-gradient-orange {
    @apply bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

---

## 5. TypeScript Type Definitions

### 5.1 `src/types/trade.ts`
```typescript
export type AssetType = "crypto" | "giftcard";

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  type: AssetType;
  icon: string;
  network?: string;
  buyRate: number;  // Rate at which we buy from user
  sellRate: number; // Rate at which we sell to user
  minAmount: number;
  maxAmount: number;
}

export interface TradeState {
  fromAsset: Asset | null;
  toAsset: Asset | null;
  fromAmount: number;
  toAmount: number;
  isCalculating: boolean;
}

export interface TradeRequest {
  fromAssetId: string;
  toAssetId: string;
  amount: number;
  userEmail?: string;
  userPhone?: string;
}
```

### 5.2 `src/types/service.ts`
```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  features: string[];
}
```

### 5.3 `src/types/index.ts`
```typescript
export * from "./trade";
export * from "./service";

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}
```

---

## 6. Core Components Specification

### 6.1 `src/components/layout/Navbar.tsx`
**Props:** None (uses `usePathname` for active states)
**Features:**
- Sticky top with `glass-nav` background
- Logo on left (links to `/`)
- Center nav links (Home, About, Services, Trade, Contact)
- "Trade Now" CTA button on right
- Mobile: Hamburger icon toggles `MobileMenu`
- Active link highlighted with `text-brand-orange`

### 6.2 `src/components/layout/Footer.tsx`
**Props:** None
**Layout:** 4-column grid
- **Col 1:** Logo + tagline "Making a difference..."
- **Col 2:** Quick Links (Home, About, Services, Trade)
- **Col 3:** Services (Crypto, Gift Cards, Payouts, Gifts Abroad)
- **Col 4:** Contact (Email, Phone, WhatsApp, Social Icons)
- **Bottom Bar:** Copyright + "Powered by Power Exchange"

### 6.3 `src/components/ui/Card.tsx` (Glass Panel Wrapper)
```typescript
interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  glow?: boolean;
}
```
Renders a `div` with `glass-panel` class, optional `glass-panel-hover` and `shadow-glow`.

### 6.4 `src/components/home/Hero.tsx`
**Layout:** Two-column grid on desktop
- **Left:** Badge ("Fast · Secure · Reliable"), H1 "Power Exchange", orange subtext "Making a Difference", paragraph, request input + button
- **Right:** Founder image inside glass frame with orange glow behind
- **Request Input:** Text input + "Make a Request" button that opens WhatsApp with pre-filled message

### 6.5 `src/components/home/TradeMarquee.tsx`
**Features:**
- Two rows of scrolling cards (top: left-to-right, bottom: right-to-left)
- Each card: glass panel with icon + name
- Uses `animation: marquee` from Tailwind config
- Duplicated content for seamless loop

### 6.6 `src/components/trade/TradeCalculator.tsx`
**State (Zustand):**
```typescript
interface CalculatorStore {
  fromAsset: Asset | null;
  toAsset: Asset | null;
  fromAmount: number;
  setFromAsset: (asset: Asset) => void;
  setToAsset: (asset: Asset) => void;
  setFromAmount: (amount: number) => void;
  calculateRate: () => number;
}
```
**Features:**
- Two `Select` dropdowns (From/To)
- Amount input
- Real-time calculation display
- "Start Trade" button → generates WhatsApp link

### 6.7 `src/components/shared/WhatsAppFloat.tsx`
**Features:**
- Fixed bottom-right floating button
- Green WhatsApp icon with pulse animation
- Links to `https://wa.me/234XXXXXXXXXX?text=Hello%20Power%20Exchange`

---

## 7. Page Implementation Details

### 7.1 Home (`/`)
**Sections (in order):**
1. `Hero` — Headline, subtext, founder image, request input
2. `TradeMarquee` — "Cryptocurrency and gift cards we trade"
3. `ServicesGrid` — 5 service cards in glass panels
4. `WhyChooseUs` — 5 points (Fast, Secure, Reliable, Competitive, Customer-Focused)
5. `ValuesSection` — 4 values (Integrity, Transparency, Security, Excellence)
6. `WhatsAppFloat` — Floating button

### 7.2 About (`/about`)
**Sections:**
1. Hero heading "About Us"
2. Mission statement (large text)
3. Founder section with quote
4. Values grid (reuse `ValuesSection`)
5. CTA to `/trade`

### 7.3 Services (`/services`)
**Sections:**
1. Hero heading "Our Services"
2. Vertical stack of service cards (E-Currency, Gift Cards, Digital Services, Cross-Border Payouts, Sending Gifts Abroad)
3. CTA to `/trade`

### 7.4 Trade (`/trade`)
**Layout:** Two-column grid
- **Left:** `TradeCalculator` component
- **Right:** Rate display, "Start Trade" button, trust badges
- **Modal:** Opens on "Start Trade" with WhatsApp link + copy button

### 7.5 Contact (`/contact`)
**Layout:** Two-column grid
- **Left:** Contact form (Name, Email, Message) with Zod validation
- **Right:** Contact info card (Email, Phone, WhatsApp, Address)
- **Bottom:** Optional embedded Google Map

### 7.6 Why Choose Us (`/why-choose-us`)
**Sections:**
1. Hero heading "Why Choose Us?"
2. Detailed breakdown of 5 points with icons
3. Founder image with floating "Secure Transaction" badge
4. CTA to `/trade`

---

## 8. Data Layer (`src/lib/constants.ts`)

```typescript
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Trade", href: "/trade" },
  { label: "Contact", href: "/contact" },
];

export const ASSETS: Asset[] = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    type: "crypto",
    icon: "/icons/crypto/btc.svg",
    buyRate: 95000000,
    sellRate: 96000000,
    minAmount: 0.001,
    maxAmount: 10,
  },
  {
    id: "usdt-trc20",
    name: "USDT (TRC-20)",
    symbol: "USDT",
    type: "crypto",
    icon: "/icons/crypto/usdt.svg",
    network: "TRC-20",
    buyRate: 1480,
    sellRate: 1520,
    minAmount: 10,
    maxAmount: 100000,
  },
  {
    id: "amazon",
    name: "Amazon Gift Card",
    symbol: "AMZN",
    type: "giftcard",
    icon: "/icons/giftcards/amazon.svg",
    buyRate: 1100,
    sellRate: 1300,
    minAmount: 10,
    maxAmount: 5000,
  },
  // ... more assets
];

export const SERVICES: Service[] = [
  {
    id: "e-currency",
    title: "E-Currency",
    description: "Buy and sell Bitcoin, USDT, and other cryptocurrencies at competitive rates.",
    icon: "Bitcoin",
    route: "/services/crypto",
    features: ["BTC, USDT, ETH", "Multiple networks", "Instant payout"],
  },
  // ... more services
];

export const WHATSAPP_NUMBER = "2348012345678";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
```

---

## 9. Utility Functions (`src/lib/utils.ts`)

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = "NGN"): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatCrypto(amount: number, symbol: string): string {
  return `${amount.toFixed(6)} ${symbol}`;
}

export function generateWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
```

---

## 10. WhatsApp Integration (`src/lib/whatsapp.ts`)

```typescript
import { generateWhatsAppLink } from "./utils";

export function createTradeMessage(
  fromAsset: string,
  toAsset: string,
  amount: number,
  estimatedPayout: number
): string {
  return `Hello Power Exchange,

I would like to place a trade:
- Selling: ${amount} ${fromAsset}
- Receiving: ${estimatedPayout.toLocaleString()} ${toAsset}

Please confirm the rate and next steps.`;
}

export function createGeneralInquiry(message: string): string {
  return `Hello Power Exchange,\n\n${message}`;
}

export function openWhatsApp(message: string) {
  const link = generateWhatsAppLink(message);
  window.open(link, "_blank");
}
```

---

## 11. SEO & Metadata

### 11.1 `src/app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: {
    default: "Power Exchange | Fast, Secure, Reliable Digital Solutions",
    template: "%s | Power Exchange",
  },
  description: "Your trusted partner for fast, secure, and reliable digital solutions. We buy Bitcoin, USDT, and gift cards.",
  keywords: ["crypto exchange", "gift card trading", "USDT", "Bitcoin", "Nigeria"],
  openGraph: {
    title: "Power Exchange",
    description: "Making a Difference in Digital Transactions",
    url: "https://powerexchange.com",
    siteName: "Power Exchange",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Exchange",
    description: "Fast, Secure, Reliable Digital Solutions",
    images: ["/images/og-image.jpg"],
  },
};
```

### 11.2 Per-Page Metadata
Each `page.tsx` should export its own `metadata` object with page-specific title and description.

---

## 12. Performance & Accessibility

### Performance
- Use `next/image` for all images
- Lazy load below-the-fold sections with `dynamic` imports
- Use `React.memo` for static components
- Optimize fonts with `next/font`
- Enable ISR for service pages

### Accessibility
- All images have `alt` text
- Buttons have `aria-label` when icon-only
- Form inputs have associated `<label>` elements
- Color contrast meets WCAG AA (orange on dark passes)
- Keyboard navigation supported for all interactive elements
- Focus states visible with `focus:ring-2`

---

## 13. Environment Variables (`.env.local`)

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=2348012345678
NEXT_PUBLIC_SITE_URL=https://powerexchange.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Future API keys
BINANCE_API_KEY=
COINGECKO_API_KEY=
```

---

## 14. Scripts (`package.json`)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 15. Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Initialize Next.js project with TypeScript + Tailwind
- [ ] Configure Tailwind with custom tokens
- [ ] Set up fonts (Outfit, Inter) via `next/font`
- [ ] Build `Navbar`, `Footer`, `Container`, `MobileMenu`
- [ ] Create `Button`, `Input`, `Select`, `Card` UI components
- [ ] Implement `globals.css` with glass utilities

### Phase 2: Home Page (Week 1-2)
- [ ] Build `Hero` section with founder image
- [ ] Build `TradeMarquee` with infinite scroll
- [ ] Build `ServicesGrid`, `WhyChooseUs`, `ValuesSection`
- [ ] Add `WhatsAppFloat` component

### Phase 3: Inner Pages (Week 2-3)
- [ ] Build `/about` page
- [ ] Build `/services` page
- [ ] Build `/why-choose-us` page
- [ ] Build `/contact` page with form validation

### Phase 4: Trade Calculator (Week 3-4)
- [ ] Set up Zustand store for trade state
- [ ] Build `TradeCalculator` with dropdowns and input
- [ ] Implement rate calculation logic
- [ ] Generate WhatsApp link on "Start Trade"
- [ ] Add modal for confirmation

### Phase 5: Polish & Launch (Week 4)
- [ ] Add Framer Motion page transitions
- [ ] SEO metadata for all pages
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit
- [ ] Deploy to Vercel

### Phase 6: Future Enhancements
- [ ] User authentication (NextAuth.js)
- [ ] Database integration (Prisma + PostgreSQL)
- [ ] Live rate API integration (CoinGecko/Binance)
- [ ] User dashboard with trade history
- [ ] File upload for gift card proofs
- [ ] Email notifications (Resend)

---

## 16. AI Agent Prompts (Ready-to-Use)

### Prompt 1: Project Setup
> "Initialize a Next.js 14 project with TypeScript, Tailwind CSS, and App Router. Configure `tailwind.config.ts` with custom colors (background: #05080F, surface: #0F141E, brand orange: #F97316, gold: #FBBF24). Add custom fonts Outfit (display) and Inter (body) via `next/font`. Create a `globals.css` with glassmorphism utility classes: `.glass-panel`, `.glass-panel-hover`, `.glass-nav`, `.glass-input`, `.btn-primary`, `.btn-secondary`, `.btn-glass`."

### Prompt 2: Layout Components
> "Build a `Navbar` component with a sticky glass effect (backdrop-blur, semi-transparent background). It should have a logo on the left, nav links (Home, About, Services, Trade, Contact) in the center, and a 'Trade Now' orange CTA button on the right. Include a mobile hamburger menu that opens a glass overlay. Also build a `Footer` with 4 columns: Brand + tagline, Quick Links, Services, Contact info. Add a bottom bar with copyright."

### Prompt 3: Hero Section
> "Create a Hero section for the Home page. Left side: a badge saying 'Fast · Secure · Reliable', a large H1 'Power Exchange', an orange subtext 'Making a Difference', a paragraph description, and a request input with a 'Make a Request' button. Right side: a founder image inside a glass-panel frame with an orange glow behind it. The request input should generate a WhatsApp link when submitted."

### Prompt 4: Trade Calculator
> "Build a TradeCalculator component using Zustand for state. It needs two select dropdowns (From Asset, To Asset), an amount input, and a real-time calculation display showing the estimated payout. Use the ASSETS array from constants.ts. Style it as a glass panel. The 'Start Trade' button should generate a pre-filled WhatsApp message with the trade details."

### Prompt 5: Marquee
> "Create a TradeMarquee component with two rows of infinitely scrolling cards. Top row scrolls left-to-right, bottom row scrolls right-to-left. Each card is a glass panel with an icon and name (Amazon, Apple, USDT, Bitcoin, etc.). Use CSS keyframe animations defined in tailwind.config.ts."

### Prompt 6: Contact Form
> "Build a Contact page with a two-column layout. Left: a contact form (Name, Email, Message) with React Hook Form + Zod validation, styled with glass inputs. Right: a glass card with contact information (Email, Phone, WhatsApp button, Office Address). Add a submit handler that opens a WhatsApp link with the message."

---

## 17. Code Quality Standards

- **TypeScript:** Strict mode enabled, no `any` types
- **Components:** Functional components with explicit return types
- **Naming:** PascalCase for components, camelCase for functions/variables
- **File Organization:** One component per file, co-located styles if needed
- **Commits:** Conventional commits (`feat:`, `fix:`, `chore:`, `docs:`)
- **Testing:** Jest + React Testing Library (Phase 2)

---

## 18. Deployment Checklist

- [ ] Environment variables set in Vercel
- [ ] WhatsApp number configured correctly
- [ ] OG images generated and placed in `/public/images`
- [ ] Favicon and app icons added
- [ ] `robots.txt` and `sitemap.xml` generated
- [ ] Analytics (Google Analytics or Vercel Analytics) integrated
- [ ] Custom domain configured
- [ ] SSL certificate active (automatic on Vercel)
- [ ] Lighthouse score > 90 on all metrics

---

**End of Developer Specification**
