# Floema Asset Mapping & Provenance

This document maps all visual assets utilized across the Floema reconstruction prototype. All normalized assets reside locally at `/public/assets/floema/` to guarantee deterministic offline execution.

## 1. Homepage Collections & Hero
- **Intro Orbit Particles (20 assets)**:
  - `byside-bench-plaza.png`, `palmer-tee-sign.png`, `trail-recycled-plastic-trail-marker.png`, `clock-on-spot-palmer.png`, `royal-ball-pyramid.png`, `entrance-totem.png`, `tee-number-cube.png`, `arrow-directional-sign.png`, `bag-stand-palmer.png`, `water-cooler-palmer.png`, `cycling-route-directional-sign.png`, `interpretive-lectern-panel.png`, `catalogue-cover-of-the-details-collection.png`, `catalogue-golf-collection-2.png`, `par-3.png`, `liatris-planter.jpg`, `belleville-bench.jpg`, `bike-rack-frame.jpg`, `water-fountain-frame.jpg`, `oxalis-planter.jpg`
- **Collection 01 — Urban**: `/public/assets/floema/restauradores-square.jpg` (Full bleed cover of Praça dos Restauradores, Lisbon)
- **Collection 02 — Nature**: `/public/assets/floema/large-icnf-information-panel-in-recycled-plastic.jpg` (ICNF protected nature reserve portal)
- **Collection 03 — RePlastic**: `/public/assets/floema/paiva-walkways.png` (Passadiços do Paiva elevated eco-walkway)
- **Collection 04 — Golf**: `/public/assets/floema/obidos-golf-course.png` (Praia D’El Rey & Óbidos golf link grounds)
- **Collection 05 — Details**: `/public/assets/floema/floema-details-outdoor-signage-totem-for-palmares.jpg` (Palmares Ocean Living & Golf architectural monolith)

## 2. Editorial Showcase & Highlights
- **Manifesto & Fabrication**: `/public/assets/floema/cnc-milling-machine-carving-a-rectangular-groove-into-dark-wooden-planks.jpg`
- **Recent Additions 01**: `/public/assets/floema/byside-bench-plaza.png`
- **Recent Additions 02**: `/public/assets/floema/palmer-tee-sign.png`
- **Leadership Spotlight**: `/public/assets/floema/fernando-pinto-managing-partner.jpg`
- **Landscape Feature**: `/public/assets/floema/berlengas-island-portugal.jpg`
- **Workflow Trilogy**:
  - We Design: `/public/assets/floema/we-design.jpg`
  - We Build: `/public/assets/floema/we-build.jpg`
  - We Implement: `/public/assets/floema/we-implement.jpg`

## 3. Architectural Wireframes & Institutional Badges
- **Technical Outline Graphics**:
  - `table-wireframe-graphic.svg`
  - `chair-wireframe-graphic.svg`
  - `bike-station-wireframe-graphic.svg`
  - `waterfountain-wireframe-graphic.svg`
- **Institutional Certification Seals**:
  - `pme-lider-25.svg` (PME Líder 2025 seal)
  - `prr.svg` (Plano de Recuperação e Resiliência)
  - `centro-2030.svg` (Programa Regional do Centro)

## 4. Product Catalogues
- `catalogue-cover-of-the-details-collection.png`
- `catalogue-golf-collection.png`
- `catalogue-golf-collection-2.png`

## 5. Unavailable Assets & Substitutions
- **Zimula Variable Font**: Proprietary custom typeface from reference CSS. Faithfully approximated using modern geometric grotesk (`Plus Jakarta Sans` / `Space Grotesk`) with tuned letter-spacing (`-0.04em`), line-height (`1.05`), and optical hierarchy.
- **3D Spline/Three.js Model**: The live site dynamically streams WebGL binary buffers. In this prototype, an interactive 2.5D canvas perspective viewer with dynamic contact shadow, rotation physics, and zoom controls provides equal fidelity without remote CDN dependencies.
