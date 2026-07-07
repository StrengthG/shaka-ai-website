# SHAKA AI — Website Design Brief

## Three Stylistic Approaches

### Approach A — Terminal Intelligence
**Theme:** Bloomberg Terminal × Palantir Gotham — dark enterprise command center
**Intro:** Near-black backgrounds with electric amber/gold accents, monospace data elements, sharp grid lines. Feels like a live operational dashboard.
**Probability:** 0.07

### Approach B — African Modernism
**Theme:** Contemporary African tech — geometric Kente-inspired accents on a dark canvas
**Intro:** Deep navy/charcoal backgrounds with electric amber gold as the signature color. Subtle geometric African pattern motifs (angular, not tribal) woven into dividers and section backgrounds. Clean, confident, globally ambitious.
**Probability:** 0.06

### Approach C — Obsidian Command
**Theme:** Premium dark enterprise with minimal African geometric signature
**Intro:** True near-black (#0A0C0F) backgrounds, electric amber (#F59E0B) as the single ownable accent, razor-sharp typography, monospace data callouts, and a subtle repeating angular geometric pattern (inspired by Ndebele/Kente geometry) used only as a texture — not decoration.
**Probability:** 0.04

---

## Chosen Approach: **Approach C — Obsidian Command**

### Design Movement
**Bloomberg Terminal × Palantir Gotham** — enterprise command intelligence. Dark, authoritative, data-dense but never cluttered. Think: the screen a CFO trusts with $200M decisions.

### Core Principles
1. **Darkness as authority** — near-black backgrounds signal seriousness and focus; light is used only to draw attention to what matters
2. **Amber as intelligence** — electric amber (#F59E0B) is the single accent color; it appears only on data, CTAs, and key claims — never decoratively
3. **Monospace for data, serif for narrative** — data elements use JetBrains Mono; headlines use DM Serif Display; body uses DM Sans
4. **Geometric restraint** — one subtle angular pattern texture (Ndebele-inspired) used as a background texture in 2–3 sections only

### Color Philosophy
- **Background:** `#080A0D` (obsidian black) — deeper than standard dark mode, signals premium
- **Surface:** `#0F1318` (dark slate) — card backgrounds, slightly lifted from base
- **Border:** `#1E2530` (steel edge) — sharp grid lines, section dividers
- **Accent:** `#F59E0B` (electric amber) — the single ownable color; used sparingly
- **Text primary:** `#E8EAF0` (near-white) — high contrast, readable
- **Text secondary:** `#7A8499` (steel grey) — supporting copy, metadata
- **Success/Risk green:** `#10B981` — risk indicators, positive metrics
- **Risk red:** `#EF4444` — risk alerts

### Layout Paradigm
Asymmetric grid with deliberate left-weight. Navigation is a thin top bar with monospace logo. Sections alternate between full-bleed dark and slightly lifted surface cards. The architecture diagram is a custom SVG flow diagram. No centered hero — the headline anchors left with a product mock frame on the right.

### Signature Elements
1. **Amber data callouts** — key statistics (92% token reduction, 18,000→280 tokens) rendered in monospace amber type, large and prominent
2. **Angular geometric texture** — a subtle repeating pattern of angular lines (Ndebele-inspired) used as a section background overlay at ~4% opacity
3. **Terminal-style code/data frames** — the product mock and architecture diagram use a dark terminal frame with amber corner accents

### Interaction Philosophy
Minimal, purposeful motion. Scroll-triggered fade-up for section content. Hover states on feature cards reveal a subtle amber left-border glow. CTAs have a crisp scale(0.97) press effect. No gratuitous animation.

### Animation
- Entrance: `opacity: 0 → 1` + `translateY(16px → 0)` over 400ms ease-out, staggered 60ms per card
- Hover on feature cards: amber left border slides in over 150ms
- CTA buttons: scale(0.97) on active, 160ms ease-out
- Architecture diagram layers: sequential fade-in on scroll, 80ms stagger per layer

### Typography System
- **Display/H1:** DM Serif Display, 56–72px, normal weight — authority and gravitas
- **H2:** DM Sans, 36–44px, 700 weight — section headers
- **H3:** DM Sans, 20–24px, 600 weight — feature titles
- **Body:** DM Sans, 16px, 400 weight, 1.7 line-height — readable, professional
- **Data/Code:** JetBrains Mono, 13–15px — statistics, code snippets, layer labels
- **Micro:** DM Sans, 12–13px, 500 weight, uppercase letter-spacing — labels, badges

### Brand Essence
**SHAKA AI** — the operational intelligence layer for enterprises that can't afford to wait for analysts. Built in Africa, for the world. Precise, grounded, trusted.
Personality: **Authoritative. Precise. Ambitious.**

### Brand Voice
Headlines are declarative, not interrogative. CTAs are direct verbs. No hype words.
- Example headline: "Turn operational data into decisions — in plain English."
- Example CTA: "See the demo" / "View on GitHub"
- Banned words: revolutionary, game-changing, disruptive, cutting-edge, seamless

### Wordmark & Logo
A bold angular "S" mark — two overlapping right-angle brackets forming a stylized data-flow symbol — in electric amber on obsidian. Used in header at 32px, favicon at 16px.

### Signature Brand Color
**Electric Amber — #F59E0B** — the color of intelligence made visible.

---

## Style Decisions
- All section backgrounds use `#080A0D` or `#0F1318` — never white or light grey
- The geometric texture appears in: Hero section, Built for Trust section, Footer
- Monospace amber is used for: token compression stat, architecture layer labels, version badge
- The founder section uses a left-aligned asymmetric layout with a portrait placeholder on the right
- The problem/solution table uses amber for the "What SHAKA AI Does" column headers

### Reviewer Amendments (Applied)
- Amber `#F59E0B` is never used as atmospheric glow or generic decorative emphasis; it marks CTAs, metrics, terminal/status labels, architecture accents, and only the most important claim in a section.
- The SHAKA geometric signature is a single restrained angular line pattern inspired by Ndebele/Kente geometry, used as infrastructure texture in the Hero, Built for Trust, and Footer rather than as smoky ambience or standalone decoration.
- Founder imagery must never use a generic avatar; it should appear as a real portrait, abstract identity portrait, or branded executive dossier card using the same obsidian/amber data-frame language as the product mock.
- Hero terminal mock needs more visual authority and data density.
- Amber discipline: reduce ambient glow usage, keep amber only for intelligence signals.
