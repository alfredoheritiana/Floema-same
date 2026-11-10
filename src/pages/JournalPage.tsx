import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JOURNAL_ARTICLES } from '../data/floemaData';
import { ArrowUpRight, ArrowRight, Clock } from 'lucide-react';

export const JournalPage: React.FC = () => {
  const { navigate } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Press releases',
    'Sustainability',
    'Case Studies',
    'Products',
    'Educational',
    'Institutional'
  ];

  const filteredArticles = JOURNAL_ARTICLES.filter((article) => {
    if (selectedCategory === 'All') return true;
    return article.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const featured = JOURNAL_ARTICLES[0];

  return (
    <div className="w-full min-h-screen bg-[#F2EFEA] text-[#241F21] pt-28 pb-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Centered Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#988F8B]">
          Journal
        </span>
        <h1 className="editorial-display text-4xl sm:text-5xl md:text-6xl text-[#241F21] leading-tight">
          Field notes, case studies, <br />
          and circular narratives.
        </h1>
      </div>

      {/* Single Row of Rounded Category Filters */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-16 no-scrollbar">
        {categories.map((cat) => {
          const active = selectedCategory.toLowerCase() === cat.toLowerCase();
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer shrink-0 ${
                active
                  ? 'bg-[#241F21] text-white font-bold shadow-xs'
                  : 'bg-white text-[#524945] hover:bg-[#EBE7DF]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Featured Lead Story (When All is selected) */}
      {selectedCategory === 'All' && featured && (
        <div
          onClick={() => navigate(`/en/journal/case-studies/${featured.slug}`)}
          className="bg-white rounded-3xl overflow-hidden border border-[#241F21]/8 shadow-sm hover:shadow-lg transition-all mb-16 cursor-pointer group grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-7 h-72 sm:h-96 lg:h-auto relative overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-[#E9E778] text-[#241F21] text-xs font-bold uppercase tracking-wider">
              Featured Case Study
            </span>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#988F8B] font-mono mb-3">
                <span className="px-2 py-0.5 rounded-full bg-[#F2EFEA] text-[#241F21] font-semibold">
                  {featured.category}
                </span>
                <span>•</span>
                <span>{featured.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {featured.readTime}
                </span>
              </div>

              <h2 className="editorial-display text-2xl sm:text-3xl text-[#241F21] group-hover:text-[#042D2B] transition-colors mb-3">
                {featured.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#524945] leading-relaxed">
                {featured.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#241F21]/8 flex items-center justify-between text-xs font-semibold text-[#241F21]">
              <span className="inline-flex items-center gap-1.5 group-hover:underline">
                <span>Read Full Case Study</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-[11px] font-mono text-[#988F8B] font-normal">
                {featured.location}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Verified Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => navigate(`/en/journal/case-studies/${article.slug}`)}
            className="bg-white rounded-3xl p-6 border border-[#241F21]/8 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="aspect-16/10 rounded-2xl overflow-hidden bg-[#F2EFEA] mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-[#988F8B] mb-2.5">
                <span className="text-[#042D2B] font-semibold">{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>

              <h3 className="editorial-display text-xl text-[#241F21] group-hover:text-[#042D2B] transition-colors mb-2">
                {article.title}
              </h3>

              <p className="text-xs text-[#524945] line-clamp-3 leading-relaxed mb-4">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#241F21]/8 flex items-center justify-between text-xs text-[#241F21]">
              <span className="font-semibold text-xs group-hover:underline flex items-center gap-1">
                <span>View Case Study</span>
                <ArrowUpRight size={13} />
              </span>
              <span className="text-[11px] font-mono text-[#988F8B]">
                {article.readTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
