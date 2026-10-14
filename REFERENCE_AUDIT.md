# Reference audit — verified inputs, October 2026

This document provides grounded information for the reconstruction. Source website: https://floema.com/en

## Pages and key routes
- `/en` — homepage, five collection chapters, manifesto, latest news, featured products, philosophy, footer.
- `/en/products` — filtered catalogue (the original displays 227 of 227 results). Filters: Urban, Golf, Details, RePlastic, Nature; Signage, Construction, Furniture, Equipment. **The 227 figure must NOT be presented as the number of local seed products.**
- `/en/products/urban/byside-bench-plaza` — detail template: dimensions 2000 × 554 × 465 mm; metallised and painted or galvanised steel structure, various color options, brown recycled plastic slats; request information and enquiry list.
- `/en/about` — editorial story and visual timeline from 2007 through 2026; We Design / We Build / We Implement, four values, team.
- `/en/sustainability` — materials: recycled plastic, high-pressure laminate, steel, illustrated editorial stories.
- `/en/journal` — editorial archive with category filtering.
- `/en/journal/case-studies/bussaco-national-forest` — representative case study article.

## Homepage sequence observed
1. Intro/title, oversized brand visual; “Spaces for people, made for life.” / “Made to Last”.
2. Urban; 3. Nature; 4. RePlastic; 5. Golf; 6. Details.
7. Floema Est. 2007 manifesto and making-of photography.
8. Recent News; recent additions Byside bench Plaza and Palmer tee sign.
9. The Collections index; founder quote; landscape.
10. We design / We build / We implement; closing statement; newsletter; SVG-rich footer.

## Local image mapping
The normalized site-ready assets are available in `public/assets/floema/`.
A structured mapping is available in `src/data/asset-manifest.json`.
Use `asset.src` as a site-root URL and `asset.alt` to match image with the correct section.
Many assets are thumbnails or editorial photos; do not stretch tiny images or treat catalogue cover thumbnails as cinematic photos.

## Extracted style data
- Main display font family from the saved CSS: **Zimula Variable**, whose font file is absent from the archive.
- Ink #241F21, forest #042D2B, near-white #F9F8F6, ivory #F2EFEA, light-stone #EBE7DF, lime #E9E778, urban accent #F76C46, nature accent #C6AF88, golf accent #BACFA3, RePlastic accent #85A1C5.
- Desktop reference target: 1440 × 900; mobile target: 390 × 844.
- The capture is **homepage only**. Website 3D assets and motion source are not fully present. Recreate motion faithfully where observable, otherwise high-quality restrained approximation.

## Visual parity constraints
- No generic gradient hero, stock imagery, startup dashboard, icon card grid, unrelated generated graphics, motion overload.
- Maintain real navigational routes, filter mechanics, responsive image crops, dark/light contrast, keyboard/touch behavior.
- Compare side-by-side with actual reference screenshots if accessible; report unknowns, never assert untested 100% parity.

## Provenance and usage
The original capture and media were provided by the requester for **private reference/testing only**. Keep source trademarks/photographs out of any publicly deployed Oomera-branded product unless permission/licensing is confirmed. This is not an official Floema application.
