# Portfolio V2 — Plan So Far

Repo: https://github.com/VedangKanade20/Portfolioo-nextjs
Live (current, v1): https://portfolioo-nextjs.vercel.app/

Edit anything below directly — cut, rewrite, add comments — and send it back.

---

## Core Hook
Engineering craft / code quality, combined with a specific flagship project (Crew Canvas) as centerpiece. Not personality-led, not project-only — both together.

## Design System — "Quiet Studio"
- **Mood:** cold, editorial, premium-studio, quiet luxury-brand restraint (not the terminal/blueprint direction we tried first and dropped)
- **Colors:** black base (`#050506`–`#0a0a0c`), blue + light-blue + white accents (`#3f7fd0` / `#6fa8f5` / `#8fc4ff` range), one saturated blue (`#3762f0`) for primary CTA buttons/links
- **Typography:** Space Grotesk (headings) + JetBrains Mono (labels, meta, mono accents) — locked, no other fonts
- **Motion principle:** one consistent language reused everywhere — blur-to-focus + scale + translateY reveals, 3D cursor-tilt + glow on interactive cards, magnetic underline links, mask-wipe reveals. Restrained as the baseline, but Work / Projects / Certifications get noticeably more animation than About/Contact.
- **Brand mark:** was "VK" text, now planned as an actual photo of Vedang (photo file still needed) — reused as nav logo, footer mark, page-transition micro-loader, and favicon
- **Photos:** 2-3 personal photos, treated with duotone and/or schematic "subject framing" (bracket corners + mono caption like "FIG. 01 — PORTRAIT") depending on page — **photo files not yet provided**

## Site Structure
- Home / Landing
- About (includes: tech profile, outside-tech interests — football, gym, cricket, gaming — GitHub activity, DSA practice, personal stats, achievements, extracurriculars, resume download, **and likely Certifications** — not fully settled, see Open Questions)
- Work (internships, job(s), trainings — written with narrative sentence-style descriptions)
- Projects (all projects; Vedang adds video/media himself)
- Contact (WhatsApp, general location, Calendly/Formspree-style animated booking form)
- **Bonus page** — open concept, collab page or small playground, not yet decided

## Landing Page — 12 Sections (all mocked up as working demos)
1. **Loading screen** — multilingual greeting cycle (English, Hindi, Spanish, French, German, Russian, Chinese, Japanese), alternating black/light-blue color-invert flash, morphing brand mark, real progress bar, wipes into hero on complete
2. **Hero** — headline, role tag, scroll cue, giant faint name text in background
3. **Photo reveal** — photo arrives on scroll (blur/rotate/scale settle), one-time light sheen, glow activates after settling — *needs real photo*
4. **Who I am / what I do** — one confident line, not a paragraph
5. **Flagship project** (Crew Canvas) — full treatment: blur/scale reveal, 3D tilt + cursor glow, animated gradient border, magnetic links
6. **Skills teaser** — smaller auto-rotating version of the full skills globe, "view all" link out
7. **Experience & Certifications teaser** — 3 real rows (Ardra, DataCircles, one NPTEL cert), "know more" link out
8. **Stats strip** — count-up-on-scroll numbers — *currently placeholder figures (2 / 5 / 6 / 3), need real numbers*
9. **Secondary projects strip** — BidLive, SeatSure, Care Connect as lighter cards, "view all" link out
10. **Testimonial slot** — *no real testimonials yet, currently an honest placeholder card, not fabricated quotes*
11. **CTA** — "Let's build something together" + button
12. **Footer** — brand mark, tagline, Socials + Menu columns, "Let's talk" email capture (replaced a newsletter-signup pattern from the reference, since there's no newsletter), giant "VEDANG" background word, legal line

## Sub-Pages — Planned Treatment
- **Skills** (full page): real 3D rotating skill sphere, drag-to-rotate, brand-icon nodes (Devicon + custom SVG for TypeScript), no progress bars anywhere
- **Work / Certifications**: tabbed expandable stack (or split into two separate sections/pages — see Open Questions), one-line rows expand on click, live count badges
- **Projects** (full page): animation-heavy grid — mask-reveal + blur entrance staggered per card, 3D tilt + cursor glow on every card, custom circular cursor ("VIEW →") replacing the system cursor over the grid
- **Contact**: WhatsApp + general location + animated booking form (referencing the shared dark/orange booking-flow screenshot, translated into our palette) — not yet built
- **About**: not yet built — needs its own section brainstorm (tech profile, outside-tech interests, GitHub, DSA, stats, achievements, extracurriculars, resume download)
- **Bonus page**: not yet decided

## Open Questions / Decisions Needed
1. **Certifications** — own page, or folded into About? (brief said separate page originally, latest message said About)
2. **Bonus page concept** — collab page, playground, or something else?
3. **Testimonials** — real quotes to add, or keep placeholder until collected?
4. **Stats numbers** — confirm real figures (years practice, projects shipped, certifications, companies) to replace placeholders
5. **Photos** — need the actual 2-3 photo files to replace placeholder frames everywhere (hero, footer mark, About, favicon)
6. **Newsletter vs. "Let's talk" box** — confirmed the swap from newsletter signup to email capture, or was a real newsletter wanted?

## Reference Sites/Templates Given
kshitijnangare.com, amank.fun (loading screen), curr.xyz/#projects (custom cursor), DataCircles footer (colors/layout reference), Framer Marketplace templates (majd, nakula, fuel, fastfolio, quomi, bidaya, najmai)

## Demo Files Built So Far
- `loading-screen-multilingual.html`
- `hero-floating-card.html` (superseded by `photo-scroll-reveal.html`)
- `photo-scroll-reveal.html`
- `page-transition-demo.html`
- `flagship-project-module.html`
- `experience-certs-stack.html`
- `skills-globe.html`
- `projects-grid-animated.html`
- `cta-footer.html`
- `landing-remaining-sections.html`
- `direction-d-quiet-studio.html` (early Quiet Studio hero mockup)
- `portfolio-design-directions.html` / `opening-sequence-demo.html` (earlier blueprint direction, superseded)
