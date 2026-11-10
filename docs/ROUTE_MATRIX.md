# Floema Route Matrix & Interaction Specification

| Route Pattern | Target Component | State Management / Interactions | Implemented Status |
|---|---|---|---|
| `/` or `/en` | `HomePage` | Canvas orbit particle system; 5-scene upward inset pinned story; animated progress bar; interactive collection index; recent news routing; newsletter demo submit. | Fully Verified |
| `/en/products` | `ProductsPage` | Real-time multi-filter (Urban, Nature, RePlastic, Golf, Details; Signage, Furniture, Equipment, Construction; subfilters); search input; responsive floating capsule button; URL query synchronization. | Fully Verified |
| `/en/products/:collection/:slug` | `ProductDetailPage` | Breadcrumb navigation; interactive 3D perspective viewer (drag-to-rotate, zoom, reset); finish and RAL selector; structure option buttons; specifications vs technical drawing tab; demo enquiry drawer; related items grid. | Fully Verified |
| `/en/about` | `AboutPage` | Brand manifesto; 4 core values (Environmental Awareness, Innovation, Quality, Durability); interactive historical trajectory timeline from 2007 through 2026; We Design / We Build / We Implement workflow; team spotlight. | Fully Verified |
| `/en/sustainability` | `SustainabilityPage` | Deep forest-green hero with rising wireframes; 3 circular material pillars (Recycled Plastic, High-Pressure Laminate, Steel) with interactive switcher; case study crosslink to Bussaco National Forest. | Fully Verified |
| `/en/journal` | `JournalPage` | Filterable editorial archive tabs (All, Case Studies, Sustainability, Press releases, Products, Educational, Institutional); featured case study hero; card grid with reading durations and publication dates. | Fully Verified |
| `/en/journal/case-studies/:slug` | `JournalDetailPage` | Bussaco National Forest field installation; turnkey case study metrics; photo gallery; technical materials breakdown; related articles. | Fully Verified |
| `/en/legal/:policy` | `LegalPage` | Dynamic legal routes for `whistleblowing`, `management-system-policy`, `cookie-policy`, `terms`, and `privacy`. | Fully Verified |
| Global Overlays | `FloemaHeader`, `EnquiryDrawer`, `RichFooter` | Auto-contrast navbar (adapts over dark pinned scenes and light canvas); language switch (`EN`/`PT`); search input; slide-out enquiry drawer with local demo feedback; architectural SVG footer with newsletter validation. | Fully Verified |
