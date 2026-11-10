import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TIMELINE_EVENTS } from '../data/floemaData';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate, setIsEnquiryOpen } = useApp();
  const [activeTimelineYear, setActiveTimelineYear] = useState<string>('2025');

  return (
    <div className="w-full min-h-screen bg-[#F2EFEA] text-[#241F21] pt-28 pb-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Wordmark Hero */}
      <div className="mb-20 border-b border-[#241F21]/10 pb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#988F8B]">
            About Floema® • Est. 2007
          </span>
          <button
            onClick={() => setIsEnquiryOpen(true)}
            className="px-4 py-1.5 rounded-full bg-white border border-[#241F21]/15 text-xs font-semibold hover:bg-[#241F21] hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
          >
            Work With Us
          </button>
        </div>

        {/* Huge Floema Wordmark Framing */}
        <div className="relative mb-8">
          <div className="editorial-display text-6xl sm:text-8xl md:text-9xl text-[#241F21]/15 tracking-tighter select-none font-bold">
            FLOEMA
          </div>
          <h1 className="editorial-display text-3xl sm:text-5xl md:text-6xl text-[#241F21] absolute bottom-2 left-0 max-w-3xl leading-[1.05]">
            Rethinking spaces beyond expectations.
          </h1>
        </div>

        <p className="text-sm sm:text-base text-[#524945] max-w-2xl leading-relaxed mt-4">
          Headquartered in Condeixa-a-Velha, Portugal, Floema develops and produces sustainable signage and outdoor equipment for urban landscapes, nature reserves, and sports facilities.
        </p>
      </div>

      {/* Main Photographic Collage & Manifesto */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#988F8B]">
            Philosophy
          </span>
          <h2 className="editorial-display text-3xl sm:text-4xl text-[#241F21]">
            Durable, Low-Maintenance Solutions
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-[#524945] leading-relaxed">
            <p>
              Floema® produces sustainable signage and equipment and offers durable, low maintenance solutions that integrate perfectly into the landscape, based on ecological raw materials.
            </p>
            <p>
              Our products are an important resource to enhance the heritage, urban environment, landscape and culture of any region. Through precision manufacturing and high-grade recycled polymers, we ensure public infrastructure endures without continuous chemical refinishing.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigate('/en/sustainability')}
              className="px-6 py-3 rounded-full bg-[#241F21] text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Sustainability</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <img
            src="/assets/floema/berlengas-island-portugal.jpg"
            alt="Berlengas Island"
            className="rounded-3xl w-full h-56 object-cover shadow-xs"
          />
          <img
            src="/assets/floema/cnc-milling-machine-carving-a-rectangular-groove-into-dark-wooden-planks.jpg"
            alt="CNC Milling"
            className="rounded-3xl w-full h-56 object-cover shadow-xs"
          />
          <img
            src="/assets/floema/paiva-walkways.png"
            alt="Paiva Walkways"
            className="rounded-3xl w-full h-56 object-cover shadow-xs col-span-2"
          />
        </div>
      </div>

      {/* Draggable History Timeline (2007 - 2026) */}
      <section className="mb-28 bg-white rounded-3xl p-8 sm:p-12 border border-[#241F21]/8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#988F8B] block mb-1">
              Trajectory
            </span>
            <h2 className="editorial-display text-3xl sm:text-4xl text-[#241F21]">
              Historical Evolution (2007 — 2026)
            </h2>
          </div>
          <span className="text-xs font-mono text-[#988F8B]">
            Interactive Milestones
          </span>
        </div>

        {/* Year Selector Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {TIMELINE_EVENTS.map((evt) => (
            <button
              key={evt.year}
              onClick={() => setActiveTimelineYear(evt.year)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTimelineYear === evt.year
                  ? 'bg-[#241F21] text-[#E9E778] scale-105 shadow-xs'
                  : 'bg-[#F2EFEA] text-[#524945] hover:bg-[#EBE7DF]'
              }`}
            >
              {evt.year}
            </button>
          ))}
        </div>

        {/* Selected Milestone Card */}
        {(() => {
          const selected =
            TIMELINE_EVENTS.find((e) => e.year === activeTimelineYear) || TIMELINE_EVENTS[0];
          return (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F9F8F6] border border-[#241F21]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-mono text-[#042D2B] font-bold uppercase tracking-wider">
                  {selected.year} Milestone
                </span>
                <h3 className="text-2xl font-semibold text-[#241F21]">
                  {selected.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#524945] leading-relaxed">
                  {selected.desc}
                </p>
              </div>

              <div className="shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl bg-[#042D2B] text-[#E9E778] editorial-display text-4xl shadow-sm">
                {selected.year.slice(2)}'
              </div>
            </div>
          );
        })()}
      </section>

      {/* Turnkey Process (We design / We build / We implement) */}
      <section className="mb-28">
        <h2 className="editorial-display text-3xl sm:text-4xl text-[#241F21] mb-12">
          Turnkey Execution
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-6 border border-[#241F21]/8 space-y-4">
            <div className="h-48 rounded-2xl overflow-hidden">
              <img src="/assets/floema/we-design.jpg" alt="We design" className="w-full h-full object-cover" />
            </div>
            <h3 className="editorial-display text-2xl text-[#241F21]">We design</h3>
            <p className="text-xs text-[#524945] leading-relaxed">
              Our products are designed to guarantee functionality and viability
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#241F21]/8 space-y-4">
            <div className="h-48 rounded-2xl overflow-hidden">
              <img src="/assets/floema/we-build.jpg" alt="We build" className="w-full h-full object-cover" />
            </div>
            <h3 className="editorial-display text-2xl text-[#241F21]">We build</h3>
            <p className="text-xs text-[#524945] leading-relaxed">
              Ensuring the technical and aesthetic aspects stay unaltered
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#241F21]/8 space-y-4">
            <div className="h-48 rounded-2xl overflow-hidden">
              <img src="/assets/floema/we-implement.jpg" alt="We implement" className="w-full h-full object-cover" />
            </div>
            <h3 className="editorial-display text-2xl text-[#241F21]">We implement</h3>
            <p className="text-xs text-[#524945] leading-relaxed">
              Every solution is crafted to endure, with minimal environmental impact
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Organization */}
      <section className="bg-[#042D2B] text-white rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center">
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <img
                src="/assets/floema/fernando-pinto-managing-partner.jpg"
                alt="Fernando Pinto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E9E778]">
              Leadership
            </span>
            <h3 className="editorial-display text-3xl sm:text-4xl text-white">
              Fernando Pinto
            </h3>
            <p className="text-xs font-mono text-white/70">
              Managing Partner
            </p>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
              “We think outdoor furniture should look and feel good while doing good for our planet.”
            </p>
            <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs text-[#BACFA3]">
              <span className="px-3 py-1 rounded-full bg-white/10">Multidisciplinary Engineering</span>
              <span className="px-3 py-1 rounded-full bg-white/10">Condeixa-a-Velha, Portugal</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
