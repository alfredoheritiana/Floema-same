# FLOEMA — HIGH-FIDELITY RECONSTRUCTION
## MASTER ONE-SHOT PROMPT — GOOGLE AI STUDIO BUILD MODE

You are an elite multidisciplinary website reconstruction team working directly inside Google AI Studio Build mode: Creative Director, Awwwards-level Motion Designer, Principal Frontend Engineer, WebGL/Three.js Engineer, UI/UX Designer, Responsive Engineer, QA Engineer and Technical Architect. Your task is to BUILD AND RUN a functioning, high-fidelity, multi-page reconstruction of the currently published Floema website at https://floema.com/en, using the attached local website capture and reference assets as primary evidence. This is an internal, non-public, temporary design-reference prototype that will later be adapted for another brand (Oomera). DO NOT adapt to Oomera now. DO NOT publish a publicly accessible impersonation of Floema.

IMPORTANT: This is not a request for a site merely 'inspired by' Floema. This is a reconstruction task: reproduce the observed page structures, compositions, hierarchy, visual language, colors, images where available, movement, transitions, interactions, navigation, states, and responsive behavior as closely as available evidence and time allow. Build actual executable code; do not stop at planning, wireframes, suggestions, or a single landing-page mockup. Once the working build exists, compare and refine it against the references and fix clear discrepancies. Never claim 100% fidelity without checking it.

## 1. SOURCE-OF-TRUTH AND EVIDENCE POLICY

REFERENCE URL: https://floema.com/en
OTHER KEY ROUTES:
- https://floema.com/en/products
- https://floema.com/en/products?collection=Urban
- https://floema.com/en/products?collection=Nature
- https://floema.com/en/products/urban/byside-bench-plaza
- https://floema.com/en/about
- https://floema.com/en/sustainability
- https://floema.com/en/journal
- https://floema.com/en/journal/case-studies/bussaco-national-forest

The project contains `docs/REFERENCE_AUDIT.md`, `src/data/asset-manifest.json`, 57 normalized usable media files at `public/assets/floema/`, and the original snapshot at `reference/original-capture/floema-home-snapshot.html`. INSPECT THESE FILES FIRST and use exact mapped asset URLs. Use any other attached screenshots as additional reference. Evidence priority: (1) user-provided screenshots/reference files and directly inspectable live site, (2) identifiable source styles/assets, (3) explicitly specified information in this prompt. If the runtime has no website browsing ability, say so in the final implementation report, and continue using the attached files and these written observations. Do not pretend that you visited or screenshot-tested pages you could not access.

FIRST inspect the reference directory and extract a design inventory internally: page sections, colors, typography, repeated components, grid systems, asset mapping, animation classes, product relationships, URL patterns and visible UI states. Reuse appropriately licensed assets that I have supplied for internal visual testing. Prefer LOCAL ASSET PATHS to remote hotlinks. If an asset or font is missing, preserve composition with carefully chosen fallback media, never generic unrelated stock, and list the substitution transparently. Do not attempt to lift proprietary code or bypass access protections.

## 2. STRICT PHASE SCOPE

PHASE 1 (NOW) = FLOEMA BASELINE, VISUAL + FUNCTIONAL PARITY. Keep Floema naming, original English-language copy where verified, navigation labels and its actual five collections strictly as reference content in this local prototype. Do not replace the identity with Oomera; do not introduce tiled-surface collections, booking, estimator or simulator yet. Those are Phase 2 and must not weaken the reference recreation.

ARCHITECTURE FOR PHASE 2 (LATER) = separate content data, design tokens and reusable components so that the same experience can be adapted into Oomera without rebuilding the frontend. Prepare extension points for showroom booking, room visualizer, product estimation, project wishlist and enquiry submissions, but DO NOT expose unfinished Phase-2 tools in the current UI.

## 3. NON-NEGOTIABLE ART DIRECTION — MATCH FLOEMA, NOT A TEMPLATE

The reference is a premium experimental editorial product website, not a generic startup SaaS, material-design dashboard, conventional product store or Bootstrap template. Design should feel directed, restrained and unusually precise.

Reproduce:
- Warm off-white/stone/ivory full-bleed backgrounds; near-black and deep forest-green passages; subtle collection-specific accent colors.
- Oversized expressive geometric typography, carefully controlled line breaks, tight tracking, huge whitespace, asymmetric editorial positioning and a rigorous 24-column-inspired responsive grid.
- Small, understated navigation pills, fine-line arrows, rounded control capsules, numbered sections, compact metadata and sophisticated hover/tap affordances.
- Alternation between quiet layouts and dramatic full-screen imagery; immersive image transitions, moving product compositions and beautifully paced changes of scale.
- Architectural product photography mixed with white-background isolated product shots, technical outline SVGs and atmospheric editorial imagery.
- Animation quality at the level of boutique creative studios: nuanced stagger, masks, image parallax, scroll choreography, interactive collection navigation, image expansions and considered easing. Avoid flashy gratuitous effects, bouncing cards, gradients, emoji, shadows and cheap template motifs not in the reference.

EXTRACTED COLOR TOKENS FROM SUPPLIED CSS (use as source values, then verify visually):
--ink: #241F21;
--forest: #042D2B;
--ivory-25: #F9F8F6;
--ivory-50: #F2EFEA;
--ivory-100: #EBE7DF;
--ivory-200: #E4DED3;
--stone: #988F8B;
--lime: #E9E778;
--nature-kraft: #C6AF88;
--urban-coral: #F76C46;
--golf-celadon: #BACFA3;
--replastic-blue: #85A1C5.

Primary reference font: Zimula Variable (identified in saved CSS). If the font file is NOT in supplied materials, DO NOT invent it or silently assert it has loaded; use a close legal fallback such as a carefully tuned modern geometric grotesk, preserve letter-spacing / line-height / word-wrapping and document the approximation. The original stylesheet shows display heading scaling around clamp(80px, 67.91px + 3.1vw, 120px), secondary displays around clamp(32px, 22.64px + 2.4vw, 64px), with roughly -0.04em letter spacing. Use responsive typography, not fixed pixel values throughout.

Design at 1440x900 desktop first, then 1920x1080, 1024x768 tablet, 768x1024 tablet and 390x844 mobile. Do not shrink the desktop site down on phones; faithfully translate spatial rhythms, media crops, stacking and interactions.

## 4. GLOBAL SHELL AND BEHAVIOR

Implement a real application with these reusable components:
- FloemaHeader with logo/wordmark, minimal Products / About / Sustainability / Journal navigation, language indicator, mobile menu and contextual contrast states.
- SmoothScrollProvider with graceful touch and reduced-motion fallback.
- PageTransitionProvider for enter/exit animations without broken navigation or browser back/forward.
- CinematicIntro / HeroStage with layered photographic or product-object composition. Reference includes a large Floema wordmark and a sculptural, nature/material-inspired visual that transitions into the main narrative. If no genuine 3D reference object is available, use an honest layered 2.5D composition rather than a bad fake 3D asset.
- ScrollReveal, MaskedHeadline, ImageReveal, MagneticButton, PillLink, ImagePanel, ProductCard, CollectionLink, ProductConfiguratorPanel, EnquiryDrawer, ContactOverlay, NewsletterBlock and RichFooter.
- Global footer with technical outline furniture/signage SVG motifs (table/bike station/chair/water fountain from reference assets), navigation, contact information and legal links.
- Responsive navigation and language selector. English is the reference-complete locale; only provide other languages if copy exists in reference, or clearly mark internal prototype fallback—no invented translations represented as official.
- Hover effects designed for pointer devices; intuitive visible alternatives for keyboard and touchscreen.

Preserve image aspect ratios and cinematic framing. All links should navigate to actual local routes, never accidentally to the real company's site when the intention is to explore the prototype. Links to external legal/career/social destinations may be marked external if appropriate.

## 5. PAGE-BY-PAGE RECONSTRUCTION

### A. HOME: /en
Implement the COMPLETE home journey, not just the first viewport:
1. Premium cinematic opening: bold Floema branded composition, subtle nature-inspired / sculptural 3D or 2.5D visual if evidence supports it, refined product imagery movement, introductory headline 'Spaces for people, made for life.', supporting 'Made to Last', understated 'Scroll to Explore' cue. The header must be integrated into the scene.
2. Five sequential editorial collection showcases, properly numbered and visually distinct. Preserve copy where verified:
   01 Urban — 'Signage, furniture, and equipment for welcoming urban spaces' — CTA 'See Urban Products'.
   02 Nature — 'Signage and equipment for all facets of the great outdoors' — CTA 'See Nature Products'.
   03 RePlastic — 'Custom projects and furniture crafted out of 100% recyclable plastic' — CTA 'See RePlastic Products'.
   04 Golf — 'Revamp your course with best practices golf equipment and signage' — CTA 'See Golf Products'.
   05 Details — 'People and environment-friendly custom signage' — CTA 'See Details Products'.
   Each should have the most relevant matching full-bleed visual found in the asset bundle, a cohesive transition, and functioning product navigation. Where matching original downloadable catalogue assets exist, expose associated download links; otherwise avoid fake downloads.
3. A full-scale manifesto section with 'Floema® Est. 2007', an oversized multiline message about creativity, longevity and strict sustainability principles, and cinematic manufacturing photography.
4. Recent News / featured Journal case study composition, led by 'Bussaco National Forest' where verified.
5. Recent Additions section with at least the verified products 'Byside bench Plaza' (Urban) and 'Palmer tee sign' (Golf), plus real interactive product cards.
6. 'The Collections' index with links to Urban (51), Nature (41), RePlastic (73), Golf (62), Details (00) as observed on the site. Treat these as the SOURCE SITE category counts, not as a claim that the local seed dataset contains 227 full product records.
7. Founder/partner editorial quote and immersive landscape/manufacturing picture gallery.
8. Three branded 'We design / We build / We implement' panels with strong photo choreography and compact explanation.
9. Closing message 'Made to last, designed to endure', newsletter block and complete visually rich footer.

Pay particular attention to section heights, the sequencing of image-led and typography-led scenes, and the way collections visually transform while scrolling. No generic cards-only homepage.

### B. PRODUCTS INDEX: /en/products
Full editorial catalogue with:
- Intro headline 'Our products are made to last. Take your time exploring.'
- Collection filters for Urban, Golf, Details, RePlastic and Nature.
- Product-type filters: Signage, Construction, Furniture, Equipment.
- Working filter state, URL query state, clear/reset, counts based on actual locally loaded items, visible active filters, responsive filter sheet, meaningful empty state.
- Creative product grid with reference-inspired picture scale, whitespace, product title, collection label and optional sizes/colors badges.
- A genuine product data array and routes. Populate as many verifiable entries as available from locally supplied assets or the accessible live site. Do not invent 227 complete products from thin air just to match the source site's results label (227 is the published reference-site figure).
- At minimum, recognizable items from the reference such as Trailhead kiosk panel, Information totem, Lux bench with backrest, Plaza bench with backrest, Modular decking, Floema bike parking, Palmer directional sign, Byside bench Plaza, Palmer tee sign, Wall cladding, etc., with correct collection labels where verified.
- Smooth transitions between filter states; maintain usability and scroll restoration.

### C. PRODUCT DETAILS: /en/products/:collection/:slug
Implement a functioning reusable detail template AND several real routes, beginning with '/en/products/urban/byside-bench-plaza'. Reproduce:
- Products > collection breadcrumb and oversized product title.
- Big product image/gallery, thumbnails or scene images where actually available, rich product explanation, CTA 'Request Information'.
- 'Specs' area with verified model details; for Byside bench Plaza the observed dimension is 2000 × 554 × 465 mm, with structure options metallised/painted steel and galvanised steel, selectable color references and material information.
- Size/colors/material/structure selection UI when real available variants exist; reflect selection visually. Do not advertise unverified configurability.
- Wishlist and 'Add to Enquiry List' workflow; persistent local demo state, count badge, openable drawer, remove option, prefilled enquiry form. Avoid broken dead buttons.
- 'In the same Collection' related-items grid; responsive footer.
- If there is no configured email backend, submitting the enquiry must clearly say it is a DEMO and locally record/show confirmation, not falsely claim to have emailed Floema.

### D. ABOUT: /en/about
Reproduce the long-form editorial flow: 'Rethinking spaces beyond expectations', collage of product/environment visuals, company story, imagery/video poster with graceful fallback, 'We Design / We Build / We Implement', horizontal or drag-enabled timeline with visible years 2007–2026, material/product collages, values 01 Environmental Awareness / 02 Innovation / 03 Quality / 04 Durability, selected team profiles and footer. Timeline must work via pointer, keyboard and mobile horizontal drag; no giant text wall replacing this rich page.

### E. SUSTAINABILITY: /en/sustainability
Reference headline 'Built in Portugal. Made for life.' on rich dark/forest or ivory visual stage as appropriate. Build editorial sustainability storytelling, three material pillars (Recycled plastic / High-pressure laminate / Steel), interactive switchers or disclosure for characteristics, founder quote, featured product integration, associated case study image panels and final CTA. Use distinct immersive compositions and not the same repeated generic section everywhere.

### F. JOURNAL: /en/journal
Editorial archive with actual category tabs: All / Press releases / Sustainability / Case Studies / Products / Educational / Institutional. Functional category filtering, featured story, article cards, dates/read durations where verified, thoughtful image crop, and accessible mobile behavior.

### G. JOURNAL ARTICLE: /en/journal/case-studies/bussaco-national-forest
Working template for at least one genuine article/case study. Large hero, title/category/date if verified, article content based only on the available reference, mixed image ratios, related stories and navigation back to Journal. Avoid invented case study claims.

### H. SHARED DRAWERS, MODALS, STATES
Implement mobile nav, language menu, product detail gallery, enquiry list, request information form, newsletter validation (demo-safe), consent/cookie notice if needed for local demo, focus management and close via Escape or backdrop with keyboard support. All clickable elements must do what they advertise.

## 6. MOTION ENGINEERING

Prefer GSAP + ScrollTrigger for complex editorial scroll timelines, and Lenis for smooth desktop scrolling if it is stable in the runtime. GSAP ScrollTrigger must be correctly integrated with smooth-scrolling implementation or removed if unreliable; no janky conflicting double scroll. Use CSS transforms/opacity/masks for most animation; Three.js / React Three Fiber only if needed and if actual visual quality benefits. Do not make WebGL mandatory for the entire site. Use requestAnimationFrame intelligently and clean up timelines/listeners on route changes.

Build the following motion vocabulary:
- Intro reveal and large-wordmark transition into main hero.
- Section-to-section image masks and elegant parallax, synced to scroll with controlled pinned scenes where reference calls for it.
- Titles reveal by lines/words with precise stagger; avoid random animation everywhere.
- Hover-scale / product photo reveal / magnetic link feedback on appropriate devices.
- Editorial collection transitions involving full-viewport photography.
- Filter/result card transitions and image-gallery transitions.
- Navbar color adaptation over dark and light sections.
- Mobile motion toned down, device-capability aware.
- If prefers-reduced-motion, disable nonessential motion without hiding content.

Never allow a blank screen when animation has not initialized, and never block access to the site behind an infinite loading sequence.

## 7. TECH STACK / FILE ORGANIZATION

Deliver a real, maintainable WEB app in Google AI Studio (choose Web app, NOT Android). Prefer React + TypeScript + Vite, react-router-dom, GSAP with ScrollTrigger, Lenis (if feasible), and CSS modules or structured global CSS with custom properties. Use npm only for necessary dependencies. This imported project is already configured with a minimal Vite/React/TypeScript scaffold; extend it in place rather than starting from scratch. AI Studio can use a Node.js runtime; this first phase does not require external AI services, payments or live database. Do not request credentials just for a static reference reconstruction.

Suggested structure (adjust to actual project conventions):
/src/app/{router,layout,providers}
/src/components/{navigation,buttons,typography,media,products,filters,forms,footer,motion}
/src/pages/{Home,Products,ProductDetail,About,Sustainability,Journal,JournalArticle,NotFound}
/src/data/{collections,products,journal,brand}
/src/styles/{tokens,globals,typography,motion}
/public/assets/floema/...
/docs/{ASSET_MAP,ROUTE_MATRIX,PARITY_REPORT}

A. REPLACE the staging `src/App.tsx` with the actual site; do not leave the import-ready starter screen as the final app. Centralize design tokens and content. No huge monolithic App.tsx with embedded 1000-line JSX.
B. Build semantic HTML, proper headings, alt text, form labels, disabled/loading/error states, keyboard accessible dialogs and ARIA only when needed.
C. Ensure direct access to routes works and browser back/forward is correct.
D. Prevent sideways overflow, broken images, dead anchors, console errors, hydration errors and unmount-related memory leaks.
E. Lazy-load below-the-fold imagery, optimize object-fit/object-position, and preserve crisp display quality. Prioritize good LCP and stable layout rather than unnecessarily heavy animations.
F. Avoid referencing unavailable private fonts/models or links to nonexistent download files.
G. A local no-backend 'demo submission' must never masquerade as a successful live message delivery.

## 8. AUTONOMOUS WORKFLOW: ACT, DON'T MERELY PLAN

Perform these steps within this ONE implementation request, as much as the environment permits:

STEP 1 — Reference discovery. First read `docs/REFERENCE_AUDIT.md`, `src/data/asset-manifest.json`, and selected original CSS in `reference/original-capture/assets/`; inspect the existing site-ready files in `public/assets/floema/`. Inspect attachments and routes / source information; identify page templates, shared components, key images, and CSS design tokens. If you have the ability to open the reference website, inspect actual desktop/mobile appearance and interactive states. Otherwise rely transparently on supplied captures.
STEP 2 — Establish architecture, route map and data definitions.
STEP 3 — Build the shared design system and GLOBAL APP SHELL.
STEP 4 — Fully implement the HOME page above the fold, then all remaining home sections in order. Visual fidelity takes priority over adding irrelevant features.
STEP 5 — Implement Products index + filters and at least several navigable product details.
STEP 6 — Implement About, Sustainability, Journal, article template and global footer.
STEP 7 — Implement polished motion, responsive behavior, focus accessibility and real local interactive states.
STEP 8 — Run the project, address build/type/runtime errors, and exercise every main navigation and CTA.
STEP 9 — Perform comparative visual QA. At minimum assess at 1440×900 and 390×844; if screenshots can be captured, compare reference and local snapshots side by side at equal viewport. Review hero size, line breaks, nav position, dominant colors, image selection, section order, major spacing and motion. Fix the top discrepancies before finalizing.
STEP 10 — Document remaining gaps: any missing font or WebGL model, unreachable reference page, unverified products, unimplemented external service, broken feature, or approximate animation. Be specific; do not report unperformed tests as passed.

If token/context/time pressure occurs, preserve completeness intelligently: shared shell + entire designed home + catalogue/filter/detail + secondary editorial routes before attempting expensive full 3D simulation. Do not end with only the hero. Never hide missing pages behind impressive but empty screens.

## 9. ACCEPTANCE CRITERIA

- All eight route patterns listed in section 5 render usable local pages; direct URL navigation works.
- Homepage includes the FULL visual narrative from intro through footer and all five collection chapters.
- Global palette and typography feel like the actual Floema source, including bright-ivory vs dark-forest sections and the featured accent colors.
- Motion and images are tied to the correct sections, not randomly assigned.
- Desktop, tablet and mobile navigation function without clipping or overlap.
- Catalogue filters update actual visible products and URL/state consistently.
- At least one detailed product route includes gallery, verified specs, selectable actual variants (where present), wishlist/enquiry state and a clear demo-safe contact flow.
- About contains usable history timeline; Sustainability contains accessible material exploration; Journal tabs and at least one article work.
- No fake functional backend; no dead CTAs; no placeholder lorem ipsum; no generic stock-photo substitutions where supplied Floema visuals exist.
- No blocking errors in preview, no persistent blank screen, no broken asset paths. Reduced-motion mode is usable.
- Visually self-audited against evidence, with an honest report of approximate vs verified components.

Internal quality target: strive for exceptional design and as much verified fidelity as possible; 95% is an aspirational QA goal, NOT an automatic claim. If particular WebGL motion or missing assets prevent pixel parity, prefer a graceful high-quality approximation and disclose it, instead of compromising the whole build.

## 10. FINAL DELIVERABLES INSIDE THE PROJECT

1. Fully RUNNING multipage application and functional live preview.
2. Reusable code architecture with structured images and content data.
3. /docs/ASSET_MAP.md listing local image usage and unavailable reference assets.
4. /docs/ROUTE_MATRIX.md with routes and implemented interactions.
5. /docs/PARITY_REPORT.md with specific tests performed, observed strengths, known deviations, and high-priority follow-up refinements.
6. A short final message identifying what was actually built, what was tested, and what remains approximate, without exaggerated claims.

ONE FINAL DIRECTIVE: The live preview must STOP showing the starter asset gallery. Start implementing immediately. Treat Floema as a serious design-engineering reconstruction rather than a visual mood board. Be precise with hierarchy, composition and micro-interactions. Prioritize the real working experience, never the appearance of progress. Do not pivot to Oomera in this phase. Work until the available project is as complete and faithful as the accessible evidence allows.
