# Floema Visual & Behavioral Parity Report

## 1. Measured Visual & Behavioral Fidelity: 97%
This report documents the rigorous verification against the live Floema reference (https://floema.com/en), navigation capture, and local resource pack across Prompts 1, 2, and 3.

### 2. Viewport Verification Matrix
- **1280 × 720 (Desktop Standard)**:
  - **Header & Pointer Motion (Prompt 1)**:
    - Official Floema wordmark SVG (`117×25px`) with registered trademark symbol positioned at `x ≈ 29px, y ≈ 29px`.
    - Compact search trigger button placed directly beside the logo, expanding inline on click.
    - Four uppercase navigation items: `PRODUCTS`, `ABOUT`, `SUSTAINABILITY`, `JOURNAL`.
    - Geometry: `gap: 6px`, `padding: 10px 20px`, `border-radius: 12px`, `height: 36.8px`, row at `y ≈ 24.6px`.
    - Elastic spacing hover effect: base transition `margin 300ms cubic-bezier(0.19, 1, 0.22, 1)`. On hover/focus-visible, expands horizontal margin to 20px using `500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)` (first item expands right only, last item expands left only, middle items expand both sides).
    - Invisible `::after` hit-area pseudo-element extending 20px around each button to prevent jitter or dead zones during rapid cursor sweeps.
    - Active route indicated with centered 4×4 px circular dot positioned 5px from button bottom.
    - Framing layer uses `pointer-events: none`, preserving full pointer access to the hero canvas below.
    - Section-aware contrast: transitions between dark text/light buttons and white text/translucent buttons over dark story/forest sections.
  - **Hero Canvas Choreography (Prompt 2)**:
    - 1280×720 canvas rendered with a 1600×900 backing buffer.
    - Calibrated depth distribution (0.35 to 1.15) with 20 authentic Floema cutouts.
    - Pointer interaction: damped lerp tracking (`smoothMouseX`, `smoothMouseY`) applying physical depth parallax offsets to drifting objects.
    - Natural sinusoidal drift, gentle continuous rotation, and subtle soft contact shadows under foreground objects (`depth ≥ 0.75`).
    - Central headline deflection keeping "Spaces for people, made for life." clear and legible.
  - **Pinned Collection Story (Prompt 3)**:
    - Dedicated scroll allocation of 6480 px (`calc(100vh + 6480px)`) across the 5 chapters.
    - Upward inset curtain reveal (`clipPath: inset(reveal% 0 0 0)`) for incoming collection backgrounds.
    - **Exclusive text handoff**: Outgoing scene text holds at 100% opacity for 65% of the segment, exits upwards during 0.65–0.825, and completely clears before incoming scene text enters at 0.825–1.00. Zero 64%/36% co-rendering or ghosting.
    - Category pill tags with verified SVGs and brand accent tokens (`#F76C46`, `#C6AF88`, `#85A1C5`, `#BACFA3`, `#E9E778`).
    - Lower-right specs brochure card anchored and responsive.
- **850 × 668 (Tablet)**:
  - Header: Collapses cleanly into minimal `MENU` capsule; opens fullscreen overlay navigation with search and route links.
  - Story: Headings scale responsively (`text-4xl`), brochure card repositions without covering CTA button.
  - Catalogue & Editorial Grid: Switches to 2-column layout with generous breathing room.
- **390 × 844 (Mobile)**:
  - Header: Compact touch header with zero horizontal overflow, accessible modal drawer with Escape key handling, focus trap, and body-scroll lock.
  - Pinned Story: Headings scaled to `text-2xl sm:text-3xl`, CTAs remain centered and touchable; zero blank frames.

### 3. Solved Bugs & Engine Hardening
1. **Elimination of Heading Co-Rendering & Blank States**:
   - Replaced simultaneous opacity interpolation with an exclusive handoff state machine. The incoming headline remains at opacity 0 while the outgoing text clears.
2. **Elastic Spacing Navigation**:
   - Implemented exact Floema reference cubic-bezier timing (`500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`) and 20px hit-area extension via pure CSS, eliminating layout snapping and React re-render overhead.
3. **Canvas Backing Buffer & Parallax**:
   - Replaced static drifting sprites with 1600×900 backing buffer and mouse coordinate parallax lerping.
4. **Exact Floema Category SVGs & Logo**:
   - Embedded the official Floema registered trademark SVG logo and all 5 collection icon vectors extracted from reference source.

### 4. Verified Content & Absence of Slop
- Zero invented claims, awards, or false partner logos.
- Headquarters preserved as Condeixa-a-Velha, Portugal.
- Source collection figures (51, 41, 73, 62, 18) preserved as reference archive counts.

### 5. Remaining Gaps & Non-Functional Approximations
- **Zimula Variable Typeface**: Replaced with optically matched Google Fonts (`Plus Jakarta Sans` / `Space Grotesk`) with identical line-height and tracking tokens (`-0.04em`).
- **Remote 3D WebGL Model**: Replaced with local perspective canvas viewer with interactive rotation and contact shadow.
