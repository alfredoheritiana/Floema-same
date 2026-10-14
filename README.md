# Floema high-fidelity reference pack — Google AI Studio

This is an **importable Vite + React + TypeScript scaffold** with 57 mapped local Floema reference assets, saved homepage capture and one-shot implementation prompt. The starter app displays a staging screen: the main prompt orders the agent to replace it with a full website.

## Recommended in Google AI Studio
1. Unzip locally. Add the extracted **project files** to your own GitHub repository (keep folder paths intact). Do not upload just the ZIP as a single file to a new repo.
2. Open https://aistudio.google.com/ > Build > Web app.
3. In the prompt attachment **+** menu, select **Import from GitHub** and choose the repository, when available.
4. Paste the complete contents of `MASTER_PROMPT.md` into the Build chat and send. The assets are available under `public/assets/floema/`, and the photo map under `src/data/asset-manifest.json`.
5. Let it install dependencies, implement, preview, debug and report. Compare the local preview with https://floema.com/en at equal viewports.
6. Keep it a private design-reference prototype, not a public copy of Floema.

**Alternative without GitHub:** Start a new Web app in AI Studio and paste `MASTER_PROMPT.md`. Attach any supported screenshots/reference assets. If upload of the full image folder is unavailable, use GitHub import instead; do not presume that a `.rar` or `.zip` of assets will automatically unpack into the project.

## Structure
- `MASTER_PROMPT.md`: one-shot prompt for Build mode.
- `docs/REFERENCE_AUDIT.md`: verified pages, style tokens, limitations.
- `src/data/asset-manifest.json`: ready-to-import media paths.
- `public/assets/floema/`: renamed and ready-to-use images and SVGs.
- `reference/original-capture/`: original saved homepage HTML/CSS/images for source inspection, not intended for reuse as running application code.
- `ASSET_CONTACT_SHEET.jpg`: visual contact sheet.

## Important
The original font **Zimula Variable** and the full original WebGL experience are missing from the archive. Aim for close visual reconstruction but do not promise perfect pixel or animation equality solely from an offline HTML capture.
