# AgenticEverything.ai — Session Handoff

## What This Is

AgenticEverything.ai is TJ Cichecki's AI readiness consulting practice. The site is live at **agenticeverything.ai** and deployed on Vercel. It's a single-scroll marketing page + article section targeting agency owners and creative directors who know AI matters but haven't operationalized it yet. Premium positioning: $2,500 discovery / $10,000/mo retainer.

---

## Live URLs

- **Production**: https://agenticeverything.ai
- **Vercel alias**: https://elastic-murdock-11e7a8.vercel.app
- **Domain registrar**: iwantmyname.com (DNS: A record → 76.76.21.21, CNAME www → cname.vercel-dns.com)

---

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4 with `@theme inline` and CSS custom properties
- **Fonts**: Google Fonts — Instrument Serif (headlines), Inter (body), Space Mono (labels/mono)
- **Deploy**: Vercel, `npx vercel deploy --prod`
- **Dev server**: `npm run dev` on port 3000 (configured in `.claude/launch.json`)

---

## Project Structure

```
src/
  app/
    layout.tsx              — Root layout, font loading, metadata
    page.tsx                — Home page (single scroll, all sections inline)
    globals.css             — CSS variables, theme, article body styles
    thinking/
      page.tsx              — Article index page
      [slug]/page.tsx       — Dynamic article pages (SSG via generateStaticParams)
  components/
    rotating-headline.tsx   — Client component: shuffled rotating hero headlines (10s interval)
  lib/
    articles.ts             — Article metadata array (9 articles, type definitions)
    article-content.ts      — Article body HTML as Record<slug, string>
public/
  images/
    studio.jpg              — Workhorse studio (hero background, parallax)
    ai-panel.png            — "Future of Creative and AI" panel photo (full-width section)
    tj-studio.jpg           — TJ with balloons in studio (founder section)
    tj-dcdw.png             — TJ at AIGA DC Design Week
    tj-action.png           — TJ playing pool (not currently used)
```

---

## Design System

### Colors (CSS custom properties in globals.css)
- `--background`: #0a0a0a (near-black)
- `--foreground`: #e5e5e5 (off-white)
- `--muted`: #888888 (mid-gray, body text)
- `--surface`: #141414 (card backgrounds)
- `--surface-raised`: #1c1c1c (elevated cards)
- `--border`: #1e1e1e
- `--accent`: #e2c044 (bright yellow, CTAs, labels, hover states)
- `--accent-hover`: #f0d060

### Typography
- Body: 17px base (`globals.css`), Inter
- Headlines: Instrument Serif
- Labels/metadata: Space Mono, uppercase, tracking-[0.15em]
- Article body: custom styles in `.article-body` class (globals.css)

### Visual Direction
- Dark, premium, restrained. Architecture firm aesthetic, not SaaS.
- No glow effects, no stock photography, no logo bars.
- `::selection` uses accent yellow on dark background.

---

## Page Sections (scroll order)

The home page (`src/app/page.tsx`) is built as inline function components:

1. **Nav** — Sticky, blur backdrop. Logo "AGENTIC_EVERYTHING" (uppercase, "EVERYTHING" in yellow, tracking-[0.1em]). Links: Approach, How It Works, Thinking, See Pricing.

2. **Hero** — Full-viewport parallax background (`bg-fixed`) using studio.jpg with 75% dark overlay. Static top line "AI READINESS FOR MODERN AGENCIES." + rotating headlines (9 customer-problem-focused headlines, shuffled on load, 10s fade rotation). Single CTA "Explore Our Work" → #approach.

3. **GapSection** — "The Opportunity" — Aspirational headline about agencies figuring it out first. Two paragraphs about the gap between buying tools and changing work.

4. **PanelPhoto** — Full-width edge-to-edge ai-panel.png (TJ on a panel about AI and creative work, 2024).

5. **ProblemSection** — "The Problem" — Three cards on `bg-surface`: efficiency race, team sabotage, personal-vs-organizational productivity gap. Cards use `bg-surface-raised` with border.

6. **ApproachSection** — "The Approach" — Three comparison cards (Traditional Consultant, Internal Hire, Agentic Operator) with SVG icons (clipboard, building, lightning bolt). Each has border-border styling.

7. **HowItWorks** — "How It Works" — Three numbered pillars: Executive Alignment, Team Enablement, Operational Redesign. Grid layout with pillar numbers. Includes retainer note and "See Pricing" CTA.

8. **ThinkingSection** — "Thinking" — Grid of first 5 article cards linking to /thinking/[slug]. "Read everything →" link.

9. **FounderSection** — "Meet the Founder" — Two-column: bio text left (headline "Designer & Creative Technologist", three paragraphs about TJ, stats: 15 years/2+ AI/DC) + tj-studio.jpg right.

10. **PricingSection** — "Two ways to work together" — Two cards: Paid Discovery ($2,500, bg-surface) and Monthly Engagement ($10,000/mo, bg-surface-raised). No borders. CTAs: "Schedule Discovery Call" / "Get Started" (mailto links).

11. **Footer** — 4-column grid: brand description + email, navigation links, studio address (320 3rd St NE Rear, DC) with Google Maps link, bottom bar with copyright + attribution links to tjcichecki.com and wrkhrs.co.

---

## Articles System

9 articles hosted on the domain at `/thinking/[slug]`:

| Slug | Title | Tag |
|------|-------|-----|
| the-role-agencies-dont-have-yet | The Role Agencies Don't Have Yet | AI + Leadership |
| ai-strategy-wrong-thing | Your AI Strategy Is Pointed at the Wrong Thing | AI + Strategy |
| efficiency-for-what | Efficiency For What? | AI + Leadership |
| who-owns-the-workplace | Who Owns the Workplace? | AI + Operations |
| ai-assisted-brand-workshop | Building an AI-Assisted Brand Workshop from Scratch | AI + Process |
| designers-are-building-again | Designers Are Building Again | AI + Design |
| ai-wont-replace-designers | Why AI Won't Replace Designers | AI + Design |
| cross-industry-pattern-recognition | Cross-Industry Pattern Recognition as a Design Advantage | Strategy |
| clarity-problem | The Clarity Problem Most Brands Don't Know They Have | Brand Strategy |

- Metadata in `src/lib/articles.ts` (title, slug, tag, excerpt, date, publishedDate, url)
- HTML content in `src/lib/article-content.ts` (Record<string, string>)
- Rendered via `dangerouslySetInnerHTML` with `.article-body` CSS class
- Article pages include nav, back link, header, body, "More from Thinking" section, footer
- Internal cross-links between articles use `/thinking/[slug]` format

---

## Writing Rules (CRITICAL)

The `human-voice` skill must be applied to ALL prose on this site. Hard rules:
- **Zero em dashes.** Replace with commas, periods, colons, or "which"/"because" clauses.
- No triple parallels ("It doesn't X. It doesn't Y. It doesn't Z.")
- No hedge-then-reveal ("This isn't about X. It's about Y.")
- No "not just X, it's Y" escalation
- No fragment-rhythm stacks (punchy Substack style) unless it matches TJ's voice
- No fortune-cookie closers
- No generic transitions ("That said," "Moreover," "Furthermore")
- TJ writes in flowing, connected sentences. Match that voice.

---

## Key Decisions Already Made

- **Target audience**: Agencies and creative teams, 50-500 employees
- **Price tier**: $2,500 discovery + $10,000/mo retainer (premium, pre-qualifying)
- **Workhorse relationship**: Subtle. Mentioned in founder bio, footer attribution. Not lead positioning.
- **Email**: tj@wrkhrs.co (mailto links throughout)
- **No pricing contracts**: Month-to-month, cancel anytime for the $10K engagement
- **Article hosting**: All on this domain, not linked to tjcichecki.com
- **Accent color**: Bright yellow (#e2c044), confirmed after iteration

---

## Images Available

| File | Description | Used Where |
|------|-------------|------------|
| studio.jpg | Workhorse Collective studio interior | Hero background (parallax) |
| ai-panel.png | "New Horizons: Future of Creative and AI" panel | Full-width section between Opportunity and Problem |
| tj-studio.jpg | TJ holding balloons in studio | Founder section |
| tj-dcdw.png | TJ at AIGA DC Design Week closing party | Not currently on site (was removed) |
| tj-action.png | TJ playing pool | Not currently on site |

Source images also available at `/Users/tjcichecki/projects/tjcichecki-portfolio/images/` if more are needed.

---

## Deployment

```bash
# Dev
npm run dev

# Build check
npx next build

# Deploy to production
npx vercel deploy --prod
```

The site auto-aliases to agenticeverything.ai on production deploy.
