# AGENTS.md — Build Rules for Power Exchange Platform

You are building against two authoritative source documents in this repo:
- `dev-spec.md` — the product requirements, site map, user flows, and data model. This is *what* to build.
- `DESIGN.md` — the visual/interaction system. This is *how it should look and feel*.

If any instruction you receive conflicts with either document, **say so explicitly and ask before proceeding** rather than silently picking one interpretation. These two documents encode real business requirements traced to the operational reality of a WhatsApp-native crypto exchange — deviating from them isn't a style choice, it's a scope change that needs sign-off.

---

## 0. The one sentence that governs everything

The brand's own positioning: **"fast, secure, and reliable digital solutions"** — with a hard emphasis on **trust over hype**. Before writing any client-facing screen, ask whether it looks like a trusted financial services brand or a crypto casino. If it's the latter, stop and redo it before moving on — don't ship it and flag it for later cleanup.

---

## 1. Non-negotiable product rules

These aren't preferences — they're direct requirements from the business model and the brand's positioning. Treat every one of these as a hard constraint that overrides convenience, common crypto-app defaults, or "that's how it's usually done."

1. **Never display a rate as final on any public surface.** Every rate shown must be labeled "Estimate only — final rate confirmed on WhatsApp" or similar. If you find yourself rendering a rate without a disclaimer, stop — rates change, and a hard-locked number that turns out to be wrong destroys trust.
2. **Never build a countdown timer, live price ticker, "rate expiring in X seconds," or any urgency pattern anywhere client-facing.** No flashing numbers, no red/green price changes, no FOMO copy. See DESIGN.md §4.16 for the exact banned-pattern → replacement table.
3. **Quotes and trade confirmations are delivered via WhatsApp as the primary channel, not email.** If a trade-request feature is being built and email is the only channel implemented, it's incomplete — the WhatsApp integration (`packages/whatsapp`) is not optional.
4. **No cart, no "add to trade," no checkout flow.** The "Trade Now" / "Start Trade" button opens a pre-filled WhatsApp conversation. This is a concierge model, not an e-commerce store. If a component or copy string implies a cart, it's wrong regardless of how standard the pattern is elsewhere.
5. **Every trade request, rate update, WhatsApp interaction, and trade completion writes an entry to the Communication Log.** This is not optional logging for debugging — it's a product requirement (FR-9) that the CRM and Analytics dashboard depend on. If you build a flow that changes state without writing a log entry, it's incomplete.
6. **Rates are editable inline by admins, and every rate change is logged with a timestamp.** The Rate History table must be append-only — you cannot retroactively reconstruct "what was the rate on March 15" if rate changes overwrite the previous value.
7. **Asset availability can be toggled by admins, and unavailable assets must gracefully disappear from the Trade Calculator.** No error states, no "asset unavailable" red banners — the asset simply isn't an option, with a polite fallback message if it was previously selected.

---

## 2. Tech stack & architecture rules

- **Monorepo structure**: `apps/web` (public site + client account), `apps/admin` (CRM/dashboard), `packages/ui` (shared components), `packages/db` (Prisma schema), `packages/whatsapp` (WhatsApp API wrapper), `packages/config` (design tokens). Follow the folder tree in dev-spec.md §9 exactly. **Ask before**: adding a new top-level directory, restructuring the layout, or moving the Prisma schema out of `packages/db`.
- **Database schema** (`packages/db/schema.prisma`) is the single source of truth for the data model in dev-spec.md §6. Don't define a parallel/duplicate shape of the same entity elsewhere — derive types from Prisma, don't hand-roll them.
- **WhatsApp integration** goes through `packages/whatsapp` only. Never call the Meta Cloud API / Twilio SDK directly from a route handler or component — the wrapper is the one place that knows about message templates, retry logic, and delivery-status webhooks (NFR-2).
- **Payments** (future phase) go through `packages/payments` only, same reasoning — one place that knows about Paystack/Flutterwave specifics, everything else calls a generic interface.
- **Design tokens** (colors, spacing, type scale from DESIGN.md §2) live in `packages/config` and get consumed throughout both apps — no hardcoded hex values or magic spacing numbers in component files. If a color isn't in the token set, that's a signal to check DESIGN.md before inventing one.

---

## 3. Design system enforcement

- Every new client-facing component should be checked against DESIGN.md §3's component index before being built from scratch — if the pattern already exists (Glass Card, Primary CTA, Trade Calculator, Status Badge, etc.), reuse and extend it rather than inventing a visually different variant for the same job.
- Brand orange (`color-brand-orange`) is the action color, not a surface color — if a PR introduces orange as a large background fill or uses it for more than roughly 15% of a screen's visual weight, flag it against DESIGN.md §2.1's explicit rule before merging.
- Any motion added to a component must be checked against DESIGN.md §2.4 — specifically, nothing that could read as urgency (fast pulsing, rapid flashing, shaking) is acceptable, and `prefers-reduced-motion` must be respected for the marquee and any auto-playing element.
- Icon choices are constrained by DESIGN.md §2.5 — no crypto-casino iconography (rockets, moons, dice, gambling chips) and no delivery-app iconography (scooters, timers, live map pins). If an icon library's default choice for "trade" or "rate" is one of these, swap it for a plain line icon instead.
- Glassmorphism treatment must be consistent — every card, panel, and modal uses the same glass tokens (background, blur, border, radius). No "almost glass" variants.

---

## 4. Coding conventions

- TypeScript strict mode across both apps; no `any` — if a third-party integration (WhatsApp/payment webhooks) returns loosely-typed payloads, define a proper interface for the shape you actually use rather than typing the whole payload as `any`.
- Component files colocate with the route/feature they belong to under each app's `components/` directory (per the dev-spec's folder tree) rather than a single flat `components/` dump — shared cross-app components belong in `packages/ui`, not duplicated in both apps.
- Server actions/API routes should be thin — validation and business logic belong in a service layer (e.g., `lib/trades/`, `lib/rates/`), not inlined into the route handler, so the same logic is reusable between the public trade-request endpoint and any admin-side manual trade creation.
- Every form (trade request, contact, rate update) validates on both client and server — never trust client-side validation alone, especially for the fields that seed the CRM/analytics data (NFR-5 depends on this data being clean from day one).
- Rate calculations must use a single source of truth (the `Asset` record's `buy_rate`/`sell_rate`) — no duplicate rate values hardcoded anywhere.

---

## 5. Definition of Done (per feature/screen)

Before considering any screen finished, confirm:

- [ ] Matches a DESIGN.md component pattern, or a clear, deliberate reason is documented for a new one.
- [ ] All realistic states covered: loading, empty, error, and the "asset unavailable" edge case for the Trade Calculator — not just the happy path.
- [ ] No rate displayed as final anywhere on a public surface; no countdown/ticker/urgency pattern anywhere client-facing (Section 1, rules 1–2).
- [ ] Any state-changing client action writes a Communication Log entry (Section 1, rule 5).
- [ ] Rate changes are logged to the append-only Rate History table (Section 1, rule 6).
- [ ] Keyboard-operable and screen-reader-reachable, including the Trade Calculator dropdowns and the FAQ accordion panels.
- [ ] Contrast-checked if it uses orange-on-dark or gold-on-dark text combinations (DESIGN.md §2.1).
- [ ] Copy reviewed against the Section 0 tone mandate — calm, confident, never hype-y or transactional ("Rate locked for 30s!" is a fail).

---

## 6. When to stop and ask, rather than deciding alone

- Before adding any new top-level nav item or admin section not already in the dev-spec's site map (§2).
- Before changing anything about how rates are displayed or confirmed — this is the platform's core trust mechanism and the client's most explicit requirement; don't "simplify" it toward a hard-locked rate model even temporarily for a demo.
- Before adding anything that could read as urgency or scarcity, even if it seems harmless (e.g., "1,247 trades today!" on the homepage) — run it past the no-urgency mandate first.
- Before integrating any live rate API (CoinGecko, Binance) — the current model is manual rate entry with full admin control, and switching to automated rates is a significant operational change that needs sign-off.
- Before adding a new social platform integration beyond Twitter/X, Instagram, and WhatsApp (FR-11) — the brief names exactly these three.
- Before introducing any third-party UI library's default "trading" or "price ticker" component wholesale — these almost always carry crypto-casino assumptions (flashing prices, countdowns, green/red urgency) baked in that need to be stripped out, and it's usually cleaner to build the specific components this platform needs than to fight a library's defaults.

---

## 7. Explicitly out of scope / banned outright

- Cart, "add to trade," cart-based checkout flow.
- Any live price ticker, countdown timer, "rate expiring in X," or green/red flashing price change.
- Rocket ships, moons, dice, gambling chips, or any crypto-casino iconography.
- Star ratings, review counts, or generic testimonial-carousel widgets (the founder photo and track record are this platform's trust signal instead — see dev-spec.md §3.1).
- Any hard-locked final rate on a public surface without the "estimate only" disclaimer.
- Manufactured urgency copy ("Only 2 slots left at this rate!", "1,247 trades today! 🔥") anywhere client-facing.
- Generic stock-photo people (handshakes, smiling office workers) — the founder photo is the only human photography on the site, and it's real. Keep it that way.

---

## 8. Iterative additions

The business will request small additional features after launch as they come to mind (new assets, new services, new social platforms). When one arrives:
- Check whether it fits an existing pattern in DESIGN.md / the dev-spec before building something new.
- Add it to the relevant section of both documents once built, so they stay the actual source of truth rather than drifting out of date — an agent picking this project back up in three months should be able to trust these files completely.
- Any new asset (crypto or gift card) added must be data-driven (an admin action, not a code change) — if adding a new asset requires a deploy, the extensibility mandate (NFR-4) has been violated.
