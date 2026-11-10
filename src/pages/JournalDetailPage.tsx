import React from 'react';
import { useApp } from '../context/AppContext';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/floemaData';
import { ArrowLeft, MapPin, Calendar, Clock, Check } from 'lucide-react';

interface JournalDetailPageProps {
  slug: string;
}

export const JournalDetailPage: React.FC<JournalDetailPageProps> = ({ slug }) => {
  const { navigate } = useApp();

  const article: JournalArticle =
    JOURNAL_ARTICLES.find((a) => a.slug === slug) || JOURNAL_ARTICLES[0];

  const otherArticles = JOURNAL_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="w-full min-h-screen bg-[#F2EFEA] text-[#241F21] pt-28 pb-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/en/journal')}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#988F8B] hover:text-[#241F21] cursor-pointer transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Journal</span>
        </button>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mb-12 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#988F8B]">
          <span className="px-3 py-0.5 rounded-full bg-[#042D2B] text-white font-semibold">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={13} />
            {article.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {article.readTime}
          </span>
          {article.location && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#524945]">
                <MapPin size={13} />
                {article.location}
              </span>
            </>
          )}
        </div>

        <h1 className="editorial-display text-3xl sm:text-5xl md:text-6xl text-[#241F21] leading-[1.05]">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-[#524945] font-normal leading-relaxed pt-2">
          {article.summary}
        </p>
      </div>

      {/* Hero Media Stage */}
      <div className="rounded-3xl overflow-hidden mb-16 shadow-md border border-[#241F21]/10 bg-white">
        <img
          src={article.image}
          alt={article.title}
          className="w-full max-h-[560px] object-cover"
        />
        {article.location && (
          <div className="p-4 bg-[#EBE7DF] text-xs font-mono text-[#524945] flex items-center justify-between">
            <span>Location: {article.location}</span>
            <span>Floema® Turnkey Installation</span>
          </div>
        )}
      </div>

      {/* Article Body & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        {/* Main Text Column */}
        <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#241F21]/90 leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="font-normal leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* In-situ field photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="rounded-2xl overflow-hidden bg-white p-2 border border-[#241F21]/8">
              <img
                src="/assets/floema/large-icnf-information-panel-in-recycled-plastic.jpg"
                alt="Large ICNF Trail Portal"
                className="rounded-xl w-full h-52 object-cover"
              />
              <p className="text-[11px] text-[#988F8B] font-mono mt-2 px-1">
                Portal Map Totem in recycled structural polymers
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-white p-2 border border-[#241F21]/8">
              <img
                src="/assets/floema/trail-recycled-plastic-trail-marker.png"
                alt="Trail marker post"
                className="rounded-xl w-full h-52 object-contain bg-[#F9F8F6] p-2"
              />
              <p className="text-[11px] text-[#988F8B] font-mono mt-2 px-1">
                Routed blaze trail marker post
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Metadata */}
        <div className="lg:col-span-4 space-y-6">
          {article.materials && (
            <div className="bg-white rounded-3xl p-6 border border-[#241F21]/8 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#988F8B]">
                Specified Materials
              </h3>
              <ul className="space-y-2.5">
                {article.materials.map((mat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-semibold text-[#241F21]">
                    <Check size={14} className="text-[#042D2B]" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-[#042D2B] text-white rounded-3xl p-6 space-y-4 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E9E778]">
              Protected Space
            </span>
            <h3 className="text-lg font-semibold leading-tight">
              Natural Heritage Wayfinding
            </h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Explore our Nature collection designed for national parks, geoparks, and walking trails.
            </p>
            <button
              onClick={() => navigate('/en/products?collection=Nature')}
              className="w-full py-2.5 rounded-full bg-[#E9E778] text-[#241F21] text-xs font-semibold hover:bg-[#dfe065] transition-colors cursor-pointer"
            >
              Explore Nature Products
            </button>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {otherArticles.length > 0 && (
        <div className="pt-12 border-t border-[#241F21]/10">
          <h2 className="editorial-display text-2xl text-[#241F21] mb-8">
            Related Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otherArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/en/journal/case-studies/${rel.slug}`)}
                className="bg-white rounded-3xl p-6 border border-[#241F21]/8 hover:shadow-md transition-all cursor-pointer group flex gap-5 items-center"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-[#F2EFEA]">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#042D2B] font-semibold block mb-1">
                    {rel.category} • {rel.readTime}
                  </span>
                  <h3 className="text-sm font-semibold text-[#241F21] group-hover:text-[#042D2B] transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
