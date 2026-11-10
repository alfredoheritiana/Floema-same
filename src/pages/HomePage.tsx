import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { IntroOrbit } from '../components/IntroOrbit';
import { CollectionStory } from '../components/CollectionStory';
import { COLLECTIONS, PRODUCTS, JOURNAL_ARTICLES } from '../data/floemaData';
import { ArrowRight, ArrowUpRight, ArrowDown } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useApp();
  const [hoveredCollection, setHoveredCollection] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const featuredByside = PRODUCTS.find((p) => p.slug === 'byside-bench-plaza')!;
  const featuredPalmer = PRODUCTS.find((p) => p.slug === 'palmer-tee-sign')!;
  const bussacoArticle = JOURNAL_ARTICLES.find((a) => a.slug === 'bussaco-national-forest')!;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && privacyAgreed) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setPrivacyAgreed(false);
      }, 3500);
    }
  };

  return (
    <div className="w-full bg-[#F2EFEA] text-[#241F21]">
      {/* 1. HOMEPAGE INTRO (Exact one viewport high with canvas orbit) */}
      <IntroOrbit />

      {/* 2. FIVE-SCENE COLLECTION STORY (Pinned 900vh scroll with upward clip-path reveal) */}
      <CollectionStory />

      {/* 3. MANIFESTO / COMPANY HIGHLIGHT (Asymmetric Grid without rounded card chrome) */}
      <section
        data-component="company-highlight"
        className="py-28 sm:py-36 bg-[#F2EFEA] border-b border-[#241F21]/10 px-6 sm:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Vertical Est. 2007 + Narrow Process Photo + Recent News */}
          <div className="lg:col-span-5 space-y-12">
            <div className="relative">
              <img
                src="/assets/floema/cnc-milling-machine-carving-a-rectangular-groove-into-dark-wooden-planks.jpg"
                alt="CNC milling machine"
                className="w-full h-88 object-cover select-none"
              />
              <div className="mt-2 text-[11px] font-mono text-[#988F8B]">
                Precision CNC routing at Condeixa-a-Nova facility
              </div>
            </div>

            {/* Recent News Strip */}
            <div className="pt-6 border-t border-[#241F21]/15 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#988F8B]">
                <span>Recent News</span>
                <ArrowDown size={13} />
              </div>

              <div
                onClick={() => navigate('/en/journal/case-studies/bussaco-national-forest')}
                className="cursor-pointer group space-y-2"
              >
                <h4 className="text-sm font-semibold text-[#241F21] group-hover:text-[#042D2B] transition-colors leading-snug">
                  How does ecotourism improve communities, traditions, spaces and territories?
                </h4>
                <div className="flex items-center justify-between text-xs font-mono text-[#988F8B]">
                  <span>June 3, 2025</span>
                  <span className="text-[#241F21] font-semibold flex items-center gap-1 group-hover:underline">
                    Bussaco National Forest
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Manifesto Statement Spanning the Canvas */}
          <div className="lg:col-span-7 space-y-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#988F8B]">
              Floema® Est. 2007
            </div>

            <h2 className="editorial-display text-3xl sm:text-4xl md:text-5xl text-[#241F21] leading-[1.08] tracking-tight">
              Going beyond the expected is our calling. True sustainability demands creativity to be aligned with strict principles and answer to the highest standards. It keeps us on a journey of innovation, meticulously crafting each project to keep the environment on our side.
            </h2>

            <div className="pt-4">
              <a
                href="/en/about"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/en/about');
                }}
                className="px-7 py-3.5 rounded-full bg-[#241F21] text-white text-xs font-mono font-semibold uppercase tracking-wider hover:bg-black transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>About Floema</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECENT ADDITIONS (Open Two-Product Canvas Composition, No SaaS Boxed Chrome) */}
      <section
        data-component="featured-products"
        className="py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-b border-[#241F21]/10"
      >
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#988F8B]">
            <span>Recent Additions</span>
            <ArrowDown size={14} />
          </div>
          <a
            href="/en/products"
            onClick={(e) => {
              e.preventDefault();
              navigate('/en/products');
            }}
            className="text-xs font-mono text-[#524945] hover:underline cursor-pointer"
          >
            All Products (22 Loaded)
          </a>
        </div>

        {/* Two Open Large Products Directly on Warm Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product 1: Byside bench Plaza */}
          <div
            onClick={() => navigate('/en/products/urban/byside-bench-plaza')}
            className="group cursor-pointer space-y-6"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-[#F76C46]/20 text-[#F76C46] font-semibold uppercase">
                Urban
              </span>
              <span className="text-[#988F8B]">Colors +4</span>
            </div>

            {/* Giant Product Cutout on Canvas */}
            <div className="h-72 sm:h-96 w-full flex items-center justify-center p-4">
              <img
                src={featuredByside.image}
                alt={featuredByside.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-4 border-t border-[#241F21]/10 flex items-center justify-between">
              <div>
                <h3 className="editorial-display text-2xl sm:text-3xl text-[#241F21] group-hover:text-[#042D2B] transition-colors">
                  {featuredByside.title}
                </h3>
                <p className="text-xs font-mono text-[#988F8B] mt-1">
                  {featuredByside.dimensions}
                </p>
              </div>

              <span className="text-xs font-mono font-semibold text-[#241F21] group-hover:underline flex items-center gap-1">
                Explore <ArrowUpRight size={13} />
              </span>
            </div>
          </div>

          {/* Product 2: Palmer tee sign */}
          <div
            onClick={() => navigate('/en/products/golf/palmer-tee-sign')}
            className="group cursor-pointer space-y-6"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-[#BACFA3]/50 text-[#042D2B] font-semibold uppercase">
                Golf
              </span>
              <span className="text-[#988F8B]">Colors +3</span>
            </div>

            {/* Giant Product Cutout on Canvas */}
            <div className="h-72 sm:h-96 w-full flex items-center justify-center p-4">
              <img
                src={featuredPalmer.image}
                alt={featuredPalmer.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="pt-4 border-t border-[#241F21]/10 flex items-center justify-between">
              <div>
                <h3 className="editorial-display text-2xl sm:text-3xl text-[#241F21] group-hover:text-[#042D2B] transition-colors">
                  {featuredPalmer.title}
                </h3>
                <p className="text-xs font-mono text-[#988F8B] mt-1">
                  {featuredPalmer.dimensions}
                </p>
              </div>

              <span className="text-xs font-mono font-semibold text-[#241F21] group-hover:underline flex items-center gap-1">
                Explore <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE COLLECTIONS (Immersive Canvas Composition with Spatial Depth) */}
      <section
        data-component="collections-overview"
        className="py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-b border-[#241F21]/10 relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#988F8B] block mb-2">
              Landscape Typologies
            </span>
            <h2 className="editorial-display text-4xl sm:text-5xl text-[#241F21]">
              The Collections
            </h2>
          </div>
          <span className="text-xs font-mono text-[#988F8B]">
            Interactive Archive
          </span>
        </div>

        {/* Spatial Staggered Collection Presentation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {COLLECTIONS.map((c) => {
            const isHovered = hoveredCollection === c.id;

            return (
              <div
                key={c.id}
                onMouseEnter={() => setHoveredCollection(c.id)}
                onMouseLeave={() => setHoveredCollection(null)}
                onClick={() => navigate(`/en/products?collection=${c.name}`)}
                className="cursor-pointer group flex flex-col justify-between p-6 bg-white/70 hover:bg-white rounded-3xl border border-[#241F21]/8 transition-all duration-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#988F8B] mb-6">
                    <span>{c.number}</span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: c.accentColor }}
                    />
                  </div>

                  <h3 className="editorial-display text-3xl sm:text-4xl text-[#241F21] group-hover:text-[#042D2B] transition-colors mb-2">
                    {c.name}
                  </h3>
                  <div className="text-xs font-mono text-[#988F8B] mb-6">
                    ({c.archiveCount})
                  </div>
                </div>

                <div className="pt-4 border-t border-[#241F21]/10 flex items-center justify-between text-xs font-mono">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#524945]">
                    Explore
                  </span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. SUSTAINABILITY FEATURE (Full Viewport Editorial Spread, Forest Green & Acid Yellow) */}
      <section
        data-component="leadership-highlight"
        className="py-28 sm:py-36 bg-[#042D2B] text-white relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-md overflow-hidden border border-white/20 shrink-0">
                  <img
                    src="/assets/floema/fernando-pinto-managing-partner.jpg"
                    alt="Fernando Pinto"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Fernando Pinto</h3>
                  <p className="text-xs font-mono text-white/70">Managing Partner</p>
                </div>
              </div>

              <blockquote className="editorial-display text-3xl sm:text-4xl md:text-5xl text-[#E9E778] leading-[1.08] tracking-tight">
                “We think outdoor furniture should look and feel good while doing good for our planet”
              </blockquote>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl font-normal">
                Floema® produces sustainable signage and equipment and offers durable, low maintenance solutions that integrate perfectly into the landscape, based on ecological raw materials. Our products are an important resource to enhance the heritage, urban environment, landscape and culture of any region.
              </p>

              <div className="pt-2">
                <a
                  href="/en/sustainability"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/en/sustainability');
                  }}
                  className="px-7 py-3.5 rounded-full bg-[#E9E778] text-[#241F21] text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#dfe065] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>More on sustainability</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right: Edge-aligned Berlengas Island Image (Rectangular, No rounded-card padding) */}
            <div className="lg:col-span-5 space-y-2">
              <img
                src="/assets/floema/berlengas-island-portugal.jpg"
                alt="Berlengas Island, Portugal"
                className="w-full h-96 object-cover shadow-lg select-none"
              />
              <p className="text-[11px] font-mono text-white/60 text-right">
                Berlengas Island, Portugal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DESIGN / BUILD / IMPLEMENT (Edge-to-Edge Rectangular Images, Tight Grid Alignment) */}
      <section
        data-component="workflow-overview"
        className="py-28 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-b border-[#241F21]/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* We design */}
          <div className="space-y-4">
            <img
              src="/assets/floema/we-design.jpg"
              alt="We design"
              className="w-full h-64 object-cover select-none"
            />
            <h3 className="editorial-display text-2xl text-[#241F21]">
              We design
            </h3>
            <p className="text-xs sm:text-sm text-[#524945] leading-relaxed">
              Our products are designed to guarantee functionality and viability
            </p>
          </div>

          {/* We build */}
          <div className="space-y-4">
            <img
              src="/assets/floema/we-build.jpg"
              alt="We build"
              className="w-full h-64 object-cover select-none"
            />
            <h3 className="editorial-display text-2xl text-[#241F21]">
              We build
            </h3>
            <p className="text-xs sm:text-sm text-[#524945] leading-relaxed">
              Ensuring the technical and aesthetic aspects stay unaltered
            </p>
          </div>

          {/* We implement */}
          <div className="space-y-4">
            <img
              src="/assets/floema/we-implement.jpg"
              alt="We implement"
              className="w-full h-64 object-cover select-none"
            />
            <h3 className="editorial-display text-2xl text-[#241F21]">
              We implement
            </h3>
            <p className="text-xs sm:text-sm text-[#524945] leading-relaxed">
              Every solution is crafted to endure, with minimal environmental impact
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA / NEWSLETTER (Taller, Airier, Single Wide Field & Consent Checkbox) */}
      <section
        data-component="lower-tagline"
        className="py-32 sm:py-44 px-6 sm:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="editorial-display text-4xl sm:text-5xl md:text-6xl text-[#241F21] leading-[1.05]">
              Made to last, <br />
              designed to endure.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-[#241F21]">
                Join our community
              </h4>
              <p className="text-xs text-[#988F8B]">
                Sign up for news, updates and more.
              </p>
            </div>

            {subscribed ? (
              <div className="p-4 bg-[#BACFA3]/40 text-[#042D2B] rounded-full text-xs font-mono font-semibold">
                ✓ Recorded. Thank you for subscribing.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-full bg-white border border-[#241F21]/15 text-xs text-[#241F21] focus:outline-hidden focus:border-[#241F21] shadow-xs pr-28"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full bg-[#241F21] text-white text-xs font-mono font-semibold hover:bg-black transition-colors cursor-pointer"
                  >
                    Submit
                  </button>
                </div>

                {/* Consent Checkbox */}
                <label className="flex items-center gap-2 text-[11px] text-[#988F8B] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="rounded border-[#241F21]/20 accent-[#241F21]"
                  />
                  <span>By submitting your email you agree to our Privacy Policy.</span>
                </label>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
