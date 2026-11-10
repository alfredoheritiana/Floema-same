import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Recycle, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SustainabilityPage: React.FC = () => {
  const { navigate } = useApp();
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'recycled-plastic',
      name: '100% Recycled Plastic',
      subtitle: 'Post-Consumer Polyolefin Profiles',
      color: '#85A1C5',
      icon: Recycle,
      summary: 'Diverting high-density municipal and industrial plastic packaging from waste streams into rot-proof architectural profiles.',
      advantages: [
        'Rot-proof, fungal-resistant, and immune to moisture or coastal mist',
        'Splinter-free surface with natural tactile comfort in hot and cold weather',
        'Zero chemical biocides, heavy-metal stains, or varnishes required',
        'Fully recyclable at the end of the product life cycle'
      ],
      image: '/assets/floema/large-icnf-information-panel-in-recycled-plastic.jpg'
    },
    {
      id: 'hpl',
      name: 'High-Pressure Compact Laminate',
      subtitle: 'Exterior-Grade Compact Core',
      color: '#E9E778',
      icon: Layers,
      summary: 'Thermosetting resins cured with cellulose fibers under high pressure, producing non-porous signage panels designed for extreme weathering.',
      advantages: [
        'High UV resistance preventing sun-bleaching and color degradation',
        'Graffiti resistance: aerosol paint and ink easily cleaned without surface degradation',
        'High impact resistance against public wear and blunt force',
        'Class 1 Fire retardancy according to European standards'
      ],
      image: '/assets/floema/floema-details-outdoor-signage-totem-for-palmares.jpg'
    },
    {
      id: 'steel',
      name: 'Galvanised & Thermoset Steel',
      subtitle: 'Structural Core Integrity',
      color: '#BACFA3',
      icon: ShieldCheck,
      summary: 'Heavy-gauge structural carbon steel hot-dip galvanised according to ISO standards and finished with thermosetting polyester powder.',
      advantages: [
        'Structural strength resisting deformation in high-traffic public squares',
        'Dual-layer barrier: zinc metallisation plus electrostatically applied powder coat',
        'Textured matte architectural finishes in verified RAL specifications',
        'Infinitely recyclable without material property loss'
      ],
      image: '/assets/floema/bike-rack-frame.jpg'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#F2EFEA] text-[#241F21]">
      {/* Deep Forest Green Hero with Acid-Yellow & Wireframe Drawings */}
      <section className="bg-[#042D2B] text-white pt-32 pb-24 px-6 sm:px-8 relative overflow-hidden">
        {/* Subtle wireframe overlay drawings rising from bottom */}
        <div className="absolute -bottom-8 right-0 left-0 flex justify-around opacity-15 pointer-events-none">
          <img src="/assets/floema/chair-wireframe-graphic.svg" alt="" className="h-44 w-auto invert" />
          <img src="/assets/floema/table-wireframe-graphic.svg" alt="" className="h-44 w-auto invert" />
          <img src="/assets/floema/waterfountain-wireframe-graphic.svg" alt="" className="h-44 w-auto invert" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#E9E778]">
            Circularity & Ecological Commitment
          </span>
          <h1 className="editorial-display text-4xl sm:text-6xl md:text-7xl text-white leading-[1.02] max-w-4xl">
            Built in Portugal. <br />
            <span className="text-[#E9E778]">Made for life.</span>
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl font-normal leading-relaxed">
            True sustainability is structural permanence: engineering public signage and outdoor furniture that never rot, never leach chemicals, and withstand decades of use.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
        {/* The Three Material Pillars */}
        <section className="mb-24">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#988F8B] block mb-1">
                Material Integrity
              </span>
              <h2 className="editorial-display text-3xl sm:text-4xl text-[#241F21]">
                The Three Material Pillars
              </h2>
            </div>
            <p className="text-xs text-[#988F8B] font-mono">
              Select a material to inspect properties
            </p>
          </div>

          {/* Material Switchers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              const active = activePillar === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-6 rounded-3xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    active
                      ? 'bg-[#241F21] text-white border-[#241F21] shadow-md'
                      : 'bg-white text-[#241F21] border-[#241F21]/8 hover:border-[#241F21]/25'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2 rounded-full ${
                        active ? 'bg-white/10 text-white' : 'bg-[#F2EFEA] text-[#042D2B]'
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: p.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                    <p className={`text-xs mt-1 ${active ? 'text-white/70' : 'text-[#988F8B]'}`}>
                      {p.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Pillar Technical Deep Dive */}
          {(() => {
            const selected = pillars[activePillar];
            return (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#241F21]/8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#042D2B] font-bold">
                    Material Profile • {selected.name}
                  </span>

                  <h3 className="editorial-display text-2xl sm:text-3xl text-[#241F21]">
                    {selected.subtitle}
                  </h3>

                  <p className="text-sm text-[#524945] leading-relaxed">
                    {selected.summary}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#241F21] block">
                      Characteristics:
                    </span>
                    <ul className="space-y-2">
                      {selected.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#524945]">
                          <CheckCircle2 size={16} className="text-[#042D2B] shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-[#241F21]/10 bg-[#F2EFEA] p-2">
                    <img
                      src={selected.image}
                      alt={selected.name}
                      className="w-full h-72 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* In-Situ Field Case Study: Bussaco National Forest */}
        <section className="bg-[#042D2B] text-white rounded-3xl p-8 sm:p-12 shadow-lg mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E9E778]">
                Protected Ecosystems
              </span>
              <h2 className="editorial-display text-3xl sm:text-4xl text-white">
                Buçaco National Forest: Eco-Conscious Wayfinding
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                In Mata Nacional do Buçaco, Floema replaced traditional timber markers with 100% recycled plastic trail signage. The installations withstand dense seasonal forest moisture without chemical varnishes or periodic sanding.
              </p>
              <button
                onClick={() => navigate('/en/journal/case-studies/bussaco-national-forest')}
                className="px-6 py-3 rounded-full bg-[#E9E778] text-[#241F21] text-xs font-semibold uppercase tracking-wider hover:bg-[#dfe065] transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="lg:col-span-5">
              <img
                src="/assets/floema/mata-nacional-do-bussaco-floema.jpg"
                alt="Bussaco National Forest"
                className="rounded-2xl w-full h-64 object-cover border border-white/20 shadow-md"
              />
            </div>
          </div>
        </section>

        {/* CTA to Products */}
        <div className="text-center bg-white rounded-3xl p-12 border border-[#241F21]/8">
          <h2 className="editorial-display text-3xl sm:text-4xl text-[#241F21] mb-3">
            Explore Circular Outdoor Products
          </h2>
          <p className="text-xs sm:text-sm text-[#524945] max-w-md mx-auto mb-6">
            Browse our catalogue for public spaces, natural trails, and golf courses.
          </p>
          <button
            onClick={() => navigate('/en/products')}
            className="px-8 py-3.5 rounded-full bg-[#241F21] text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <span>View Catalogue Index</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
