# Santo Glam — Conversion Rebuild

A full conversion-focused rebuild of [santoglam.com](https://santoglam.com), a curated
affiliate storefront for hotel-quality bedroom, vanity, and travel objects. Built with
**Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## What changed vs. the original

The original site had a beautiful, cinematic "atmosphere" voice but very little built
for turning cold visitors into buyers. This rebuild keeps the luxury hotel-room
aesthetic and adds the conversion mechanics on top of it:

- **Benefit-led hero** with a clear promise, social proof, trust badges, and a single
  primary CTA above the fold.
- **Scrolling proof bar** + stats strip (rating, review count, repeat-purchase rate).
- **Problem/agitation section** that bridges "why should I care" before any product is shown.
- **Product cards** with star ratings, review counts, price, urgency badges
  (Bestseller / Editor's Pick / Trending), and a one-tap "Shop Now" CTA that opens the
  real Amazon affiliate link.
- **Value-stack section** reframing price against a hotel stay / spa day.
- **Testimonials** section for social proof right before the ask.
- **Email capture** with a clear lead magnet (weekly curated drop) and no-pressure framing.
- **FAQ accordion** that pre-answers the objections that stop a purchase (affiliate
  disclosure, returns, checkout flow, curation criteria).
- **Sticky mobile CTA bar** that appears after the visitor has scrolled past the hero.
- Full **SEO metadata**, Open Graph tags, and `Product` structured data (JSON-LD) for
  every item in the edit.

## Stack

- Next.js 15 / React 19 / TypeScript
- Tailwind CSS
- `next/font/google` — Fraunces (display) + Manrope (body)
- `lucide-react` icons
- Zero client-side state libraries — plain `useState` where needed (nav menu, FAQ
  accordion, email form, sticky CTA)

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Homepage composition + JSON-LD
  globals.css         Design tokens + Tailwind directives
components/
  nav.tsx             Sticky nav with mobile menu
  hero.tsx            Above-the-fold hero
  trust-bar.tsx        Stats strip
  agitation.tsx        Problem/bridge section
  collection-section.tsx  Reusable product grid section
  product-card.tsx      Product card (rating, price, CTA)
  value-stack.tsx       Price-anchoring comparison
  testimonials.tsx        Social proof quotes
  email-capture.tsx        Lead capture form
  faq.tsx                    Objection-handling accordion
  sticky-mobile-cta.tsx        Mobile sticky CTA bar
  footer.tsx                    Footer + affiliate disclosure
lib/
  products.ts                   Collection + product data (edit this to add/remove products)
```

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing products

All product/collection copy, pricing, ratings, and affiliate links live in
`lib/products.ts`. Add a product to the relevant collection's `products` array and it
will automatically render with a card, rating, and CTA.

## Deploying

This is a standard Next.js app — deploy directly to [Vercel](https://vercel.com/new) by
importing this repository, or run `npm run build && npm start` on any Node host.

## Disclosure

Santo Glam is an Amazon Associate. Links to Amazon include an affiliate tag; this does
not change the price a buyer pays.
