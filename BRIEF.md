# Rodrigo Echavarría — Design Brief

## Brand Synopsis

Rodrigo Echavarría is a 29-year-old Colombian-born tennis coach based in Edison, New Jersey. He turned pro in 2018 and competed on the ATP & ITF World Tennis Tour circuits for four seasons (2018–2022), posting a 49–44 career singles record across hard, clay, and indoor surfaces — predominantly clay (30–29), in line with his Colombian heritage and training. His career-high singles ranking was 1,327 in 2020. He held the #1 ranking in Colombia and trained alongside the country's national champions.

Since 2018 he has coached at Garden State Tennis Center in Edison, New Jersey, where he is now Director of Tournament Training. Garden State is one of the most decorated teaching programs in the Northeast — its staff has developed 50+ ETA #1 juniors, 3 NCAA national champions, and players who have competed at the US Open, Wimbledon, and Roland Garros. Rodrigo is bilingual (English/Spanish), prefers the clay, and offers private lessons at $110/hr through the club. His nickname is "Rocko" (from his Canva site title `tenniswithrodrigo`).

The brand challenge: position him as a premium, credentialed coach without overselling his playing career. He was a real professional competitor, but he wasn't a top-1000 player. The story is the journey from pro circuit → elite teaching role, anchored by Garden State's program credentials. Three directions explore three different ways to tell that story.

---

## Design Decisions

### Direction A — "The Feature" (Editorial Magazine)
- **Mood**: NYT Magazine Sunday-long-read profile. Slow, reverent, monochrome editorial. The reader is given time.
- **Fonts**: Libre Bodoni (display) + Public Sans (body) — [Google Fonts](https://fonts.google.com/share?selection.family=Libre+Bodoni:wght@400;500;600;700|Public+Sans:wght@300;400;500;600;700)
- **Colors**: Ink #18181B / Paper #FAFAFA / Text #09090B / Mute #52525B / Accent (sparingly) #7C2D12
- **Layout**: Strict editorial grid. Masthead → hero with oversized "Rocko." headline + portrait + vertical caption → two-column lede with drop cap → stats divider → atmospheric B&W plate → service cards → centered pull-quote → marquee → contact block → colophon footer.
- **Signature element**: Massive Libre Bodoni "Rocko." headline at 13rem on desktop, paired with vertical-rl caption on the portrait.
- **Trends used** (PRO-MAX skipped TRENDS_QUICK_REFERENCE.md per CLAUDE.md, but Pro-Max skill drove these): Editorial grid pattern · Monochrome with subtle italic accents · Drop-cap typography · Marquee scroller · Pull-quote at center
- **Logos used (Logo Search)**: None — no third-party logo slots in this direction (kept editorial-pure)

### Direction B — "The Operator" (Cinematic Dark / Pro Sport)
- **Mood**: Babolat or Wilson Pro Staff campaign. Dark, athletic, professional gear. The portrait reads as "the equipment."
- **Fonts**: Barlow Condensed (display) + Barlow (body) — [Google Fonts](https://fonts.google.com/share?selection.family=Barlow+Condensed:wght@400;500;600;700;800|Barlow:wght@300;400;500;600;700)
- **Colors**: Coal #0B0908 / Shadow #16110D / Slate #1C1917 / Brass #CA8A04 / Brass Light #EAB308 / Cream #FAFAF9 / Stone #44403C
- **Layout**: Top stamp strip → sticky dark nav with brass underline → full-bleed cinematic hero with court-night background, brass vertical label, brass-framed portrait inset → bottom stat strip → giant stats section with brass numerals → bio with credentials grid → dark service cards with brass edges → club context with stat grid → pull-quote band over dimmed hero image → brass marquee → booking section with stacked dark CTAs.
- **Signature element**: Full-bleed floodlit court hero with the portrait inset framed in brass; vertical-rl "Director of Tournament Training · COL → NJ" running down the left edge.
- **Trends used**: Cinematic dark hero · Brass-on-coal accent system · Condensed athletic display type · Vertical edge labels · Marquee scroller · Sticky nav with hover underline
- **Logos used (Logo Search)**: None — kept dark-channel pure

### Direction C — "Heredad" (Heritage Warm)
- **Mood**: Casa Bosques meets Cartagena. Warm paper, terracotta, Mediterranean elegance. Storytelling-first. Bilingual without leaning on flag iconography.
- **Fonts**: Fraunces optical-size variable serif (display) + Inter (body) — [Google Fonts](https://fonts.google.com/share?selection.family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700|Inter:wght@300;400;500;600;700)
- **Colors**: Cream #F5EFE2 / Parchment #EFE6D2 / Beige #E8DCC4 / Terra #B5462D / Terra Deep #8B3520 / Coffee #2A1810 / Sage #4F5D43 / Mute #6B5D4A
- **Layout**: Bilingual top strip → italic Spanish nav (Origen/Programa/Método/Agenda) → split hero (left: bilingual headline + standfirst + CTAs; right: warm clay-court image with bilingual quote card overlay) → Origen timeline section with terra dot nodes (1996 → 2018 → now) → Los Números stats with italic terra accents → service cards on parchment → método with portrait → pull-quote with stamp circle → coffee-colored footer.
- **Signature element**: The bilingual "Game. *Pasión.* Discipline." headline in Fraunces, with "Pasión" rendered in display-italic terra — heritage shown through typography, not flag flag-waving. Paired with the round "desde 1996" terra stamp circle.
- **Trends used**: Heritage warm palette · Optical-size variable serif · Bilingual storytelling · Timeline with dot nodes · Clip-path image reveal on hero · Subtle SVG paper noise overlay (multiply blend)
- **Logos used (Logo Search)**: None — minimalist heritage build

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Direction A — Hero portrait + caption | Hero 04 (Ali Imam) | `hero editorial magazine portrait` | [21st-sources/hero-editorial.tsx](21st-sources/hero-editorial.tsx) | Oversized display headline + bg-secondary portrait block + vertical-rl caption pattern |
| Direction C — Hero (Spanish word-break) | Hero 03 (Ali Imam) | `hero warm earth heritage` | [21st-sources/hero-typographic.tsx](21st-sources/hero-typographic.tsx) | Stacked oversized type with inline accent (used for "Pasión" italic terra break) |
| Direction B — Dark hero overlay + accent CTA | DarkProjectHero (progressive-hero) | `hero cinematic dark athlete` | [21st-sources/hero-cinematic-dark.tsx](21st-sources/hero-cinematic-dark.tsx) | Full-bleed dark with black/X% overlay over hero media, brass chip CTA |
| Direction C — Split-screen hero | Hero Section (peak/mountain) | `hero warm earth heritage` | [21st-sources/hero-split-contact.tsx](21st-sources/hero-split-contact.tsx) | 60/40 split with content left + clip-reveal image right + contact info row pattern |
| All 3 — Stats divider strip | Stats Defautlt | `stats numbers oversized typography` | [21st-sources/stats-divider.tsx](21st-sources/stats-divider.tsx) | `divide-x md:divide-y-0` vertical separators between oversized numerals |
| Directions A & C — Pull-quote | TestimonialSection (Tailark) | `testimonial pull quote editorial` | [21st-sources/testimonial-pullquote.tsx](21st-sources/testimonial-pullquote.tsx) | Single centered blockquote with display-italic emphasis (B uses a custom version) |

All borrowed patterns were translated from React+Tailwind into vanilla HTML + Tailwind CDN. React scaffolding stripped, visual logic preserved.

---

## Content Inventory

### Images pulled / generated
- **Portrait** — `rodrigo-portrait-original.jpg` (2020×2929) — sourced from Wix CDN (`static.wixstatic.com/media/7e81ec_1c1e9663b16e4d2d9b5b48a8e33ce53a~mv2.jpg`), original full-resolution. Studio shot, teal cloth backdrop, holding racket. Used across all three directions with different treatments (color editorial / desaturated brass-framed / sepia warm).
- **clay-court-bw.jpg** (Direction A) — generated via Grok Imagine, B&W editorial atmospheric clay court at last light. See IMAGE_LOG.md.
- **court-night.jpg** (Direction B) — generated via Grok Imagine, cinematic floodlit night court. See IMAGE_LOG.md.
- **clay-court-warm.jpg** (Direction C) — generated via Grok Imagine, warm-toned clay court at golden hour. See IMAGE_LOG.md.

### Key copy
- Headline approaches per direction:
  - A: "Rocko." (single-word massive editorial)
  - B: "BUILT ON TOUR. MADE FOR CHAMPIONS." (athletic uppercase)
  - C: "Game. *Pasión.* Discipline." (bilingual triplet)
- Standfirst: "Four seasons on the ATP & ITF circuit. Former #1 in Colombia. A 49–44 career record on the dirt and the hard. Now, eight years into the next chapter, in Edison, New Jersey — teaching the next ones how to win."
- Pull-quote (A and B): "I've been the player at the back of the draw, and I've been the player who beats him. The difference is almost never talent." — *invented for the mockup; flagged in ACCURACY.md for client confirmation.*
- Pull-quote (C): "The clay teaches patience. The hard court teaches violence. A player should learn both before they choose." — *invented for the mockup; flagged in ACCURACY.md for client confirmation.*

### Links preserved
- Phone: `tel:+19082269300` — 908.226.9300
- Garden State Tennis: `https://gardenstatetennis.com`
- Address: 1 Villa Drive, Edison NJ 08820 (zip pulled from public records — flag for confirmation)

---

## Share Preview

- **Selector index OG image**: `images/og.jpg` (1200×630, ~111 KB) — cropped from `court-night.jpg`. The most arresting visual in the project; doubles as the brand's most "stoppable" preview card.
- **Direction A OG**: `images/og-the-feature.jpg` (1200×630, ~203 KB) — cropped from `clay-court-bw.jpg`. B&W editorial fits the editorial direction.
- **Direction B OG**: `images/og-the-operator.jpg` (1200×630, ~111 KB) — same source crop as the index (court-night).
- **Direction C OG**: `images/og-heredad.jpg` (1200×630, ~231 KB) — cropped from `clay-court-warm.jpg`. Warm tones match the heritage direction.
- **Favicon source**: Tight face crop from `rodrigo-portrait-original.jpg` → `favicon-512.png` (512×512, ~336 KB) and `favicon.png` (64×64, ~13 KB).
- **Theme color**: Per-direction. `#FAFAFA` for A (paper), `#0B0908` for B (coal), `#F5EFE2` for C (cream), `#0B0908` for selector index.
- **OG title (selector)**: "Rodrigo Echavarría — Three Directions"
- **OG description (selector)**: "Editorial. Cinematic. Heritage. Three takes on the site for a former ATP/ITF pro turned New Jersey tournament coach."

---

## Image Generation Prompts

All three atmospheric images were generated during the build (Grok Imagine Standard @ 2K). The portrait was pulled from the source CDN — no generation for the subject himself per CLAUDE.md accuracy rules.

### Image 1 — Hero atmospheric (Direction A)
- **File**: `images/clay-court-bw.jpg`
- **Slot**: Mid-page atmospheric break ("Plate 01")
- **Aspect ratio**: 3:2 landscape
- **Prompt**: "Pure monochrome black-and-white silver-gelatin photograph, no color at all, grayscale only. An empty clay tennis court at last light, rendered in dramatic high-contrast black-and-white only with deep blacks and luminous whites. Single tennis ball at the baseline tape, long diagonal shadow stretching across the dusty court surface, faded chalk lines barely visible in the haze. Shot low at net height looking down the baseline, 35mm Tri-X film grain, deep silver blacks, atmospheric mist. New York Times Magazine sports profile editorial photography, somber and reverent, no people, no color tint, ABSOLUTELY BLACK AND WHITE ONLY."
- **Why**: Editorial direction needed a B&W atmospheric break to anchor the "magazine plate" treatment; using a generated image avoids depicting the actual Garden State courts (per accuracy rules).
- **Verified facts**: Generic clay-court atmosphere only — never claims to depict Garden State Tennis Center.
- **Status**: Generated ✓ (Grok Standard 2K, 1.30 MB JPG after optimization).

### Image 2 — Hero atmospheric (Direction B)
- **File**: `images/court-night.jpg`
- **Slot**: Full-bleed hero background; also used dimmed for the pull-quote band
- **Aspect ratio**: 16:9 cinematic
- **Prompt**: "Cinematic wide-angle photograph of an indoor hard tennis court at night, single intense stadium floodlight pouring down from above, brilliant white-hot beam carving through deep velvet black shadows. Court playing surface dark teal blue with crisp white painted lines glowing in the floodlight, net casting long deep shadow, atmospheric haze and dust motes catching the light beams. Shot from low rear-court angle looking toward the far baseline, 35mm anamorphic cinema lens, dramatic chiaroscuro lighting, deep navy and warm tungsten contrast, completely empty, no people, no logos, Babolat advertising mood, Wilson Pro Staff aesthetic, mysterious and powerful."
- **Why**: The cinematic dark direction needed a dramatic empty-court hero shot to set the "pro gear" mood without showing the real club facilities.
- **Verified facts**: Generic floodlit court — does not depict Garden State.
- **Status**: Generated ✓ (Grok Standard 2K, 766 KB JPG).

### Image 3 — Hero atmospheric (Direction C)
- **File**: `images/clay-court-warm.jpg`
- **Slot**: Right-side hero image (with quote card overlay)
- **Aspect ratio**: 3:2 → cropped to 4:5 portrait within the layout
- **Prompt** (Note — was originally written for B&W, came back warm; repurposed for heritage direction): "Black-and-white documentary photograph of an empty European clay court at last light. Single tennis ball resting near the baseline, long diagonal shadow stretching across the court surface. Soft late-afternoon side-light raking across the terracotta dust, deep silver shadows in the foreground, faded chalk lines barely visible. Shot from a low angle at net height looking down the baseline, 35mm film grain, high contrast, soft atmospheric haze. Editorial New York Times Magazine sports profile mood, quiet, reverent, no people."
- **Why**: Heritage direction needed a warm-toned clay atmospheric. Grok delivered warm sepia despite B&W prompt — a happy accident that fit Direction C perfectly.
- **Verified facts**: Generic clay-court atmosphere.
- **Status**: Generated ✓ (Grok Standard 2K, 1.29 MB JPG).

---

## Build Timing

| Phase | Duration |
|---|---|
| Step 1: READ (sources, Canva, ATP, Garden State, web search) | ~3 min |
| Step 2: DIRECTION (ui-ux-pro-max skill × 3 + 21st.dev × 6 searches) | ~1 min |
| Step 3: BUILD (3 directions + selector index + 21st-sources cache) | ~5 min |
| Image generation (3 × Grok Standard + 3 × Grok QA) | ~2 min |
| OG + favicon prep | ~30 sec |
| Step 4: VERIFY (preview server, desktop/mobile screenshots, 1 factual fix) | ~2 min |
| Step 5: BRIEF + IMAGE_LOG + ACCURACY | ~2 min |
| **Total: Prompt to Live Link** | **~16 min** |

---

## Suggested Next Mockups

1. **Tournament-prep program page** — a deeper dive into the multi-week structure: pattern drilling, video review cycle, between-match recovery, sample weekly plan. Aimed at parents of ranked juniors who need to *see* the program before booking.
2. **Bilingual landing page** — full Spanish-language version of the Heredad direction (`/es/`), targeting Spanish-speaking parents in NJ and NYC area. The current Heredad direction sprinkles Spanish; a full ES version would broaden reach without diluting the main page.
3. **Booking flow** — a real form/calendar integration (Calendly or Acuity), with junior/adult triage and pre-lesson intake. Right now every CTA points to Garden State's phone line.
4. **Press / testimonials page** — once we have real student testimonials and any press, a dedicated page would lift credibility. Could repurpose the editorial style from Direction A.
5. **Match-day video archive** — embedded Instagram reels / YouTube clips of student match wins, organized by year. Garden State's IG already has Coach Rodrigo follow-through clips — a tasteful gallery would showcase the work.

---

## Production Notes

To build this into a real site, use Claude Code (Opus, high effort) with the HANDOFF MODE workflow.

**Recommended production stack**: Astro on Vercel (or Next.js if the booking flow needs server actions). Astro is faster to deploy for a content-static site like this, easier to maintain, and reuses the existing Tailwind classes nearly 1:1.

**Key features for v1 production:**
- Real form for inquiry capture (Resend or Formspree as a minimal backend).
- Calendar booking via Calendly embed (sufficient until volume requires more).
- Spanish/English language toggle on Direction C if it's chosen.
- Real student photos/testimonials (currently using invented pull-quotes flagged in ACCURACY.md).
- Confirm zip code in address (08820 is best guess from public records).
- Set up Plausible analytics + the Banana Bytes client dashboard if Rodrigo wants ongoing visibility into traffic and inquiries.

**Hosting**: GitHub Pages for the mockup itself (this repo). Production could move to DreamHost (Banana-Daddy standard) or Vercel — depends on whether Astro/Next.js is chosen.

**21st.dev sources in `21st-sources/`** are React components — keep them for HANDOFF MODE so a production rebuild can re-import the original Tailwind+animation patterns instead of reverse-engineering from the vanilla HTML.
