import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { COLLECTIONS } from '../data/floemaData';
import { ArrowRight, Download } from 'lucide-react';

// Exact verified SVGs from Floema reference
const CategoryIcon: React.FC<{ collectionId: string }> = ({ collectionId }) => {
  switch (collectionId) {
    case 'urban':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
          <path d="M15.6492 14.7367H10.2453V6.81263C10.2453 6.51422 10.5349 6.29854 10.8214 6.38422L16.0953 7.96785V14.2906C16.0953 14.5358 15.8944 14.7367 15.6492 14.7367ZM8.78281 14.7367H7.32031V10.3492H2.93281V14.7367H1.91645C1.66827 14.7367 1.47031 14.5358 1.47031 14.2906V3.03672H8.33668C8.5819 3.03672 8.78281 3.23763 8.78281 3.48286V14.7367ZM4.39531 14.2906V11.8117H5.41168C5.6569 11.8117 5.85781 12.0126 5.85781 12.2579V14.7367H4.84145C4.59622 14.7367 4.39531 14.5358 4.39531 14.2906ZM10.2453 4.68535V1.57422H0.0078125V16.1992H17.5578V6.88058L10.2453 4.68831V4.68535Z" fill="#241F21" />
          <path d="M7.31719 7.42383H2.92969V8.88633H7.31719V7.42383Z" fill="#241F21" />
          <path d="M7.31719 4.5H2.92969V5.9625H7.31719V4.5Z" fill="#241F21" />
          <path d="M15.3641 8.88672H10.9766V10.3492H15.3641V8.88672Z" fill="#241F21" />
          <path d="M15.3641 11.8125H10.9766V13.275H15.3641V11.8125Z" fill="#241F21" />
        </svg>
      );
    case 'nature':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
          <path d="M18 7.26325V5.80121L9.92465 2.13027C9.74931 2.05086 9.63688 1.87597 9.63688 1.68368V0.107422H8.03074V14.072C8.03074 14.3432 7.81123 14.5627 7.53997 14.5627H5.80934C6.23007 14.0934 6.4701 13.4585 6.41745 12.7688C6.3251 11.5592 5.32482 10.5973 4.11307 10.5492C2.74027 10.4947 1.60659 11.5958 1.60659 12.9566C1.60659 13.5732 1.83948 14.1362 2.22184 14.5627H0V16.1689H16.0615V14.5627H9.63688V11.3803C9.63688 11.1881 9.74931 11.0132 9.92465 10.9337L18 7.26325ZM4.01537 12.1535C4.4584 12.1535 4.81844 12.514 4.81844 12.9566C4.81844 13.3992 4.4584 13.7597 4.01537 13.7597C3.57234 13.7597 3.21229 13.3992 3.21229 12.9566C3.21229 12.514 3.57234 12.1535 4.01537 12.1535ZM14.744 6.97861L9.63688 9.29994V3.76364L14.744 6.08497C15.1277 6.25941 15.1277 6.80416 14.744 6.97861Z" fill="#241F21" />
        </svg>
      );
    case 'replastic':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
          <path d="M4.81698 6.61998L8.31962 3.79659C8.4983 3.65249 8.75324 3.65249 8.93191 3.79659L12.4346 6.61998C12.5494 6.71265 12.6163 6.85231 12.6163 6.99951V8.08532L11.4627 7.31652L10.5773 8.64442L13.414 10.5358L16.2506 8.64442L15.3652 7.31652L14.2116 8.08532V6.00236L11.2627 3.62545C11.0836 3.48091 11.1856 3.19183 11.4157 3.19183H11.8174V0H5.43327V3.19228H5.83496C6.06507 3.19228 6.16705 3.4818 5.98793 3.62589L3.03906 6.00281V7.98069H4.6352V6.99951C4.6352 6.85186 4.70215 6.7122 4.81698 6.61998Z" fill="#241F21" />
          <path d="M5.78841 11.8365L6.67383 10.5086L3.83714 8.61719L1 10.5082L1.88541 11.8361L3.03907 11.0673V15.9608H6.23134V14.3646H5.12291C4.85334 14.3646 4.6352 14.1465 4.6352 13.8769V11.0673L5.78886 11.8361L5.78841 11.8365Z" fill="#241F21" />
          <path d="M12.1272 14.365H9.47005L10.2389 13.2114L8.91095 12.326L7.01953 15.1627L8.91095 17.9994L10.2389 17.1139L9.47005 15.9603H14.211V11.1719H12.6149V13.8764C12.6149 14.146 12.3967 14.3642 12.1272 14.3642V14.365Z" fill="#241F21" />
        </svg>
      );
    case 'golf':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
          <path d="M18 7.26325V5.80121L9.92465 2.13027C9.74931 2.05086 9.63688 1.87597 9.63688 1.68368V0.107422H8.03074V14.072C8.03074 14.3432 7.81123 14.5627 7.53997 14.5627H5.80934C6.23007 14.0934 6.4701 13.4585 6.41745 12.7688C6.3251 11.5592 5.32482 10.5973 4.11307 10.5492C2.74027 10.4947 1.60659 11.5958 1.60659 12.9566C1.60659 13.5732 1.83948 14.1362 2.22184 14.5627H0V16.1689H16.0615V14.5627H9.63688V11.3803C9.63688 11.1881 9.74931 11.0132 9.92465 10.9337L18 7.26325ZM4.01537 12.1535C4.4584 12.1535 4.81844 12.514 4.81844 12.9566C4.81844 13.3992 4.4584 13.7597 4.01537 13.7597C3.57234 13.7597 3.21229 13.3992 3.21229 12.9566C3.21229 12.514 3.57234 12.1535 4.01537 12.1535ZM14.744 6.97861L9.63688 9.29994V3.76364L14.744 6.08497C15.1277 6.25941 15.1277 6.80416 14.744 6.97861Z" fill="#241F21" />
        </svg>
      );
    case 'details':
    default:
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
          <path d="M16.7658 9.83415L14.9987 8.06704C14.7258 7.79415 14.656 7.3746 14.836 7.03326C15.2085 6.32793 15.4102 5.51904 15.3858 4.66171C15.3147 2.13815 13.2702 0.0843729 10.7471 0.00259513C7.97513 -0.0876271 5.70046 2.1866 5.79068 4.95859C5.87246 7.48526 7.93157 9.53148 10.4587 9.59815C11.3178 9.62082 12.128 9.41637 12.8342 9.04082C13.176 8.85904 13.5969 8.92837 13.8707 9.20215L15.6342 10.9657L16.7658 9.83415ZM7.38801 4.79993C7.38801 3.03548 8.82357 1.59993 10.588 1.59993C12.3525 1.59993 13.788 3.03548 13.788 4.79993C13.788 6.56437 12.3525 7.99993 10.588 7.99993C8.82357 7.99993 7.38801 6.56437 7.38801 4.79993Z" fill="#241F21" />
          <path d="M10.1111 14.4031H2.6V5.29201C2.6 5.02179 2.81867 4.80312 3.08889 4.80312H5V3.20312H1V16.0031H12.2V10.4031H10.6V13.9142C10.6 14.1845 10.3813 14.4031 10.1111 14.4031Z" fill="#241F21" />
          <path d="M9 4.80312H10.1036C10.3738 4.80312 10.5924 5.02179 10.5924 5.29201V6.40312H12.1924V3.20312H9V4.80312Z" fill="#241F21" />
        </svg>
      );
  }
};

export const CollectionStory: React.FC = () => {
  const { navigate } = useApp();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Normalized scroll progress from 0.0 to 1.0 within the pinned section
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const totalScrollable = container.offsetHeight - window.innerHeight;
    if (totalScrollable <= 0) return;

    // When container top reaches 0, scroll begins
    const currentScroll = -rect.top;
    const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  // Total 4 segment transitions between 5 collections: pos ranges from 0.0 to 4.0
  const pos = scrollProgress * 4;
  const fromIdx = Math.min(3, Math.floor(pos));
  const toIdx = Math.min(4, fromIdx + 1);
  const frac = pos - fromIdx; // 0.0 to 1.0 within current transition segment

  // Transition choreography per segment:
  // - 0.00 to 0.65: Scene fromIdx is firmly established (HOLD).
  // - 0.65 to 0.825: Outgoing text fades out and exits upwards. Incoming text stays COMPLETELY HIDDEN (opacity 0).
  // - 0.825 to 1.00: Incoming text enters and fades in. Outgoing text is completely gone (opacity 0).
  // This completely eliminates the 64%/36% and 36%/64% double-rendering defect.
  const exitStart = 0.65;
  const handoffPoint = 0.825;

  // Active collection indicator: updates cleanly at the handoffPoint
  const activeIndex = pos >= 4 ? 4 : frac >= handoffPoint ? toIdx : fromIdx;
  const activeCollection = COLLECTIONS[activeIndex] || COLLECTIONS[0];

  // Upward curtain reveal for each background image:
  // Scene 0 is base (always 0% inset).
  // Scene i (i > 0) reveals upwards from inset 100% to 0% during transition from i-1 to i.
  const getImageReveal = (idx: number) => {
    if (idx === 0) return 0;
    if (pos >= idx) return 0; // Already fully revealed
    if (toIdx !== idx) return 100; // Not yet being revealed

    // Currently transitioning into scene idx
    if (frac < exitStart) return 100;

    // Reveal from exitStart (100% inset) to 1.0 (0% inset) with smoothstep easing
    const t = (frac - exitStart) / (1 - exitStart);
    const easedT = t * t * (3 - 2 * t);
    return (1 - easedT) * 100;
  };

  // Text state for each collection: EXCLUSIVE HANDOFF without ghosting
  const getTextState = (idx: number) => {
    // When past all transitions, scene 4 is fully shown
    if (pos >= 4) {
      return idx === 4
        ? { opacity: 1, translateY: 0, pointerEvents: 'auto' as const }
        : { opacity: 0, translateY: 24, pointerEvents: 'none' as const };
    }

    if (idx === fromIdx) {
      if (frac < exitStart) {
        // Firmly established
        return { opacity: 1, translateY: 0, pointerEvents: 'auto' as const };
      }
      if (frac < handoffPoint) {
        // Exiting phase
        const t = (frac - exitStart) / (handoffPoint - exitStart);
        const easedT = t * t * (3 - 2 * t);
        return {
          opacity: 1 - easedT,
          translateY: -22 * easedT,
          pointerEvents: easedT < 0.5 ? ('auto' as const) : ('none' as const)
        };
      }
      // Fully exited
      return { opacity: 0, translateY: -22, pointerEvents: 'none' as const };
    }

    if (idx === toIdx && toIdx !== fromIdx) {
      if (frac < handoffPoint) {
        // Incoming text remains strictly hidden while outgoing text is active or clearing
        return { opacity: 0, translateY: 24, pointerEvents: 'none' as const };
      }
      // Incoming phase: begins after outgoing text has left
      const t = (frac - handoffPoint) / (1 - handoffPoint);
      const easedT = t * t * (3 - 2 * t);
      return {
        opacity: easedT,
        translateY: 24 * (1 - easedT),
        pointerEvents: easedT > 0.4 ? ('auto' as const) : ('none' as const)
      };
    }

    return { opacity: 0, translateY: 24, pointerEvents: 'none' as const };
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: 'calc(100vh + 6480px)' }}
      data-component="collections-cta"
    >
      {/* Sticky Fullscreen Viewport Stage */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#241F21] text-white select-none">
        {/* Layered Image Media Scenes with Upward Inset Curtain Reveal */}
        {COLLECTIONS.map((c, idx) => {
          const revealInset = getImageReveal(idx);

          return (
            <div
              key={c.id}
              className="absolute inset-0 w-full h-full pointer-events-none transition-none"
              style={{
                zIndex: idx + 1,
                clipPath: idx === 0 ? 'none' : `inset(${revealInset}% 0 0 0)`,
                willChange: 'clip-path'
              }}
            >
              <img
                src={c.heroImage}
                alt={c.name}
                className="w-full h-full object-cover select-none transform-gpu scale-102"
              />
              {/* Subtle dark readability gradient veil */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          );
        })}

        {/* Global Story Overlays & Navigation UI (Z-index 20) */}
        <div className="relative z-20 w-full h-full max-w-[1536px] mx-auto px-6 sm:px-12 py-10 sm:py-16 flex flex-col justify-between pointer-events-none">
          {/* Top Row: Index Counter & Progress Bar */}
          <div className="flex items-center justify-between pt-16 sm:pt-14">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm tracking-widest text-[#E9E778] font-bold">
                {activeCollection.number} / 05
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-xs font-mono tracking-widest uppercase text-white/90">
                {activeCollection.name}
              </span>
            </div>

            {/* Overall Scroll Progress Line */}
            <div className="hidden sm:flex items-center gap-3 font-mono text-xs">
              <span className="uppercase tracking-widest text-white/70">
                Made to Last
              </span>
              <div className="w-32 h-[1px] bg-white/30 relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#E9E778] transition-all duration-75"
                  style={{ width: `${Math.min(100, scrollProgress * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Center Area: Absolute Overlaid Editorial Headlines & CTAs (Exclusive Handoff) */}
          <div className="relative w-full max-w-2xl h-80 sm:h-96 my-auto pointer-events-none">
            {COLLECTIONS.map((c, idx) => {
              const { opacity, translateY, pointerEvents } = getTextState(idx);

              // Skip rendering fully invisible items for DOM performance
              if (opacity <= 0.002) return null;

              return (
                <div
                  key={c.id}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{
                    opacity,
                    transform: `translate3d(0, ${translateY}px, 0)`,
                    pointerEvents,
                    willChange: 'opacity, transform'
                  }}
                >
                  {/* Category Pill Tag with Verified Icon */}
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#241F21] mb-6 shadow-sm w-fit"
                    style={{ backgroundColor: c.accentColor }}
                  >
                    <CategoryIcon collectionId={c.id} />
                    <span>{c.name}</span>
                  </div>

                  {/* Controlled Width Editorial Heading */}
                  <h2 className="editorial-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-8 drop-shadow-md">
                    {c.tagline}
                  </h2>

                  {/* Button CTA */}
                  <div>
                    <button
                      onClick={() => navigate(`/en/products?collection=${c.name}`)}
                      className="px-8 py-3.5 rounded-full bg-white text-[#241F21] text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#E9E778] transition-all flex items-center gap-2.5 cursor-pointer shadow-lg group active:scale-95 pointer-events-auto"
                    >
                      <span>{c.ctaText}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: Centered Scroll Cue & Lower-Right Catalogue Card */}
          <div className="flex items-end justify-between pb-4 sm:pb-0">
            <div className="flex items-center gap-2 text-xs font-mono text-white/80 animate-bob">
              <span>Scroll to Explore</span>
              <span>↓</span>
            </div>

            {/* Reference Catalogue Card Anchored Lower-Right */}
            <div className="pointer-events-auto bg-white/95 text-[#241F21] rounded-2xl p-3 sm:p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3.5 border border-white/20 max-w-[280px] sm:max-w-xs transition-transform hover:scale-102">
              <img
                src={
                  activeCollection.catalogueCover ||
                  '/assets/floema/catalogue-cover-of-the-details-collection.png'
                }
                alt={`${activeCollection.name} Catalogue`}
                className="w-12 h-16 sm:w-14 sm:h-20 object-cover rounded-lg bg-[#F2EFEA] border border-[#241F21]/10 shadow-xs shrink-0"
              />
              <div className="space-y-1">
                <div className="text-xs font-semibold leading-tight text-[#241F21]">
                  {activeCollection.name} Catalogue
                </div>
                <p className="text-[10px] font-mono text-[#988F8B]">
                  Official Floema® Specs
                </p>
                <a
                  href={
                    activeCollection.catalogueCover ||
                    '/assets/floema/catalogue-cover-of-the-details-collection.png'
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#042D2B] hover:underline pt-0.5"
                >
                  <Download size={11} />
                  <span>Download Specs</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
