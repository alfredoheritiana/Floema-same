import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, COLLECTIONS, Product } from '../data/floemaData';
import { Filter, X, ArrowUpRight, Search, Check } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { navigate, addToEnquiry, enquiryList, currentPath } = useApp();

  const getInitialCollection = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const col = params.get('collection');
      if (col) {
        const match = COLLECTIONS.find(
          (c) => c.name.toLowerCase() === col.toLowerCase() || c.id.toLowerCase() === col.toLowerCase()
        );
        if (match) return match.name;
      }
    } catch {
      // ignore
    }
    return 'All';
  };

  const [selectedCollection, setSelectedCollection] = useState<string>(getInitialCollection);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubfilter, setSelectedSubfilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterOverlayOpen, setFilterOverlayOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const col = params.get('collection');
    if (col) {
      const match = COLLECTIONS.find(
        (c) => c.name.toLowerCase() === col.toLowerCase() || c.id.toLowerCase() === col.toLowerCase()
      );
      if (match) setSelectedCollection(match.name);
    }
    const search = params.get('search');
    if (search) setSearchQuery(search);
  }, [currentPath]);

  const categories = ['All', 'Signage', 'Furniture', 'Equipment', 'Construction'];
  const urbanSubfilters = ['All', 'Plaza', 'Frame', 'Planters'];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchCollection =
      selectedCollection === 'All' ||
      product.collection.toLowerCase() === selectedCollection.toLowerCase();

    const matchCategory =
      selectedCategory === 'All' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchSubfilter =
      selectedSubfilter === 'All' ||
      (product.subfilter && product.subfilter.toLowerCase() === selectedSubfilter.toLowerCase());

    const matchSearch =
      searchQuery.trim() === '' ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCollection && matchCategory && matchSubfilter && matchSearch;
  });

  const handleCollectionSelect = (colName: string) => {
    setSelectedCollection(colName);
    setSelectedSubfilter('All');
    const url = new URL(window.location.href);
    if (colName === 'All') {
      url.searchParams.delete('collection');
    } else {
      url.searchParams.set('collection', colName);
    }
    window.history.pushState({}, '', url.pathname + url.search);
  };

  const resetFilters = () => {
    setSelectedCollection('All');
    setSelectedCategory('All');
    setSelectedSubfilter('All');
    setSearchQuery('');
    window.history.pushState({}, '', '/en/products');
  };

  const filterButtonLabel =
    selectedCollection !== 'All' ? `FILTER ${selectedCollection.toUpperCase()}` : 'FILTER';

  return (
    <div className="w-full min-h-screen bg-[#F2EFEA] text-[#241F21] pt-28 pb-32 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Centered Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#988F8B]">
          Product Catalogue
        </span>
        <h1 className="editorial-display text-3xl sm:text-4xl md:text-5xl text-[#241F21]">
          Our products are made to last. <br />
          <span className="text-[#042D2B]">Take your time exploring.</span>
        </h1>
        <p className="text-xs font-mono text-[#988F8B] pt-2">
          Showing {filteredProducts.length} of {PRODUCTS.length} Results
        </p>
      </div>

      {/* Floating Centered Filter Capsule Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={() => setFilterOverlayOpen(true)}
          className="px-6 py-3 rounded-full bg-[#241F21] text-white text-xs font-mono uppercase tracking-wider font-semibold shadow-2xl hover:bg-black transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer border border-white/20"
        >
          <Filter size={13} />
          <span>{filterButtonLabel}</span>
          {(selectedCollection !== 'All' || selectedCategory !== 'All') && (
            <span className="w-2 h-2 rounded-full bg-[#E9E778]" />
          )}
        </button>
      </div>

      {/* Search and Quick Filters Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-[#241F21]/8">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <button
            onClick={() => handleCollectionSelect('All')}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
              selectedCollection === 'All'
                ? 'bg-[#241F21] text-white'
                : 'bg-[#F2EFEA] text-[#524945] hover:bg-[#EBE7DF]'
            }`}
          >
            All Collections
          </button>
          {COLLECTIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => handleCollectionSelect(c.name)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCollection.toLowerCase() === c.name.toLowerCase()
                  ? 'bg-[#241F21] text-white'
                  : 'bg-[#F2EFEA] text-[#524945] hover:bg-[#EBE7DF]'
              }`}
            >
              <span>{c.name}</span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: c.accentColor }}
              />
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#988F8B]" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-8 pr-4 py-1.5 rounded-full bg-[#F2EFEA] border border-[#241F21]/10 focus:outline-hidden"
          />
        </div>
      </div>

      {/* Urban Subfilters (Exposed when Urban collection is selected) */}
      {selectedCollection.toLowerCase() === 'urban' && (
        <div className="mb-8 flex items-center gap-2 p-3 bg-white/70 rounded-2xl border border-[#241F21]/8">
          <span className="text-xs font-mono text-[#988F8B] mr-2">Urban Subfilters:</span>
          {urbanSubfilters.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubfilter(sub)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                selectedSubfilter === sub
                  ? 'bg-[#F76C46] text-white font-semibold'
                  : 'bg-[#F2EFEA] text-[#524945] hover:bg-[#EBE7DF]'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Editorial Masonry Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product, idx) => {
          const inEnquiry = enquiryList.some((item) => item.product.id === product.id);
          // Highlight every 4th product as an editorial wider tile
          const isWide = idx % 5 === 0;

          return (
            <div
              key={product.id}
              className={`bg-white rounded-3xl p-6 border border-[#241F21]/8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${
                isWide ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F2EFEA] text-[#241F21] text-[11px] font-mono uppercase tracking-wider">
                    {product.collection}
                  </span>
                  <span className="text-[11px] font-mono text-[#988F8B]">
                    {product.category}
                  </span>
                </div>

                {/* Image Stage */}
                <a
                  href={`/en/products/${product.collection}/${product.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/en/products/${product.collection}/${product.slug}`);
                  }}
                  className={`block rounded-2xl bg-[#F9F8F6] p-6 flex items-center justify-center overflow-hidden mb-5 ${
                    isWide ? 'aspect-21/9' : 'aspect-4/3'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-56 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </a>

                {/* Title & Dimension */}
                <a
                  href={`/en/products/${product.collection}/${product.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/en/products/${product.collection}/${product.slug}`);
                  }}
                  className="block"
                >
                  <h3 className="editorial-display text-xl text-[#241F21] group-hover:text-[#042D2B] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs font-mono text-[#988F8B] mt-1">
                    {product.dimensions}
                  </p>
                </a>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-[#241F21]/8 flex items-center justify-between">
                <a
                  href={`/en/products/${product.collection}/${product.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/en/products/${product.collection}/${product.slug}`);
                  }}
                  className="text-xs font-semibold text-[#241F21] flex items-center gap-1 group-hover:underline"
                >
                  <span>Explore Specification</span>
                  <ArrowUpRight size={13} />
                </a>

                <button
                  onClick={() => addToEnquiry(product)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-colors cursor-pointer ${
                    inEnquiry
                      ? 'bg-[#E9E778] text-[#241F21] font-bold'
                      : 'bg-[#F2EFEA] hover:bg-[#EBE7DF] text-[#241F21]'
                  }`}
                >
                  {inEnquiry ? '✓ Added' : '+ Enquiry'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* FILTER MODAL OVERLAY (Reference Two-Column Layout) */}
      {filterOverlayOpen && (
        <div className="fixed inset-0 z-50 bg-[#241F21]/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl space-y-6 relative border border-[#241F21]/15">
            <div className="flex items-center justify-between border-b border-[#241F21]/10 pb-4">
              <h3 className="text-lg font-semibold tracking-tight">Filter Products</h3>
              <button
                onClick={() => setFilterOverlayOpen(false)}
                className="p-2 rounded-full hover:bg-[#F2EFEA] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Left Column: Collection selection */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#988F8B] block">
                  Collections
                </span>
                <div className="space-y-1.5">
                  <button
                    onClick={() => {
                      handleCollectionSelect('All');
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      selectedCollection === 'All'
                        ? 'bg-[#241F21] text-white'
                        : 'bg-[#F2EFEA] text-[#241F21] hover:bg-[#EBE7DF]'
                    }`}
                  >
                    <span>All Collections</span>
                    <span>(25)</span>
                  </button>

                  {COLLECTIONS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        handleCollectionSelect(c.name);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                        selectedCollection.toLowerCase() === c.name.toLowerCase()
                          ? 'bg-[#241F21] text-white'
                          : 'bg-[#F2EFEA] text-[#241F21] hover:bg-[#EBE7DF]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: c.accentColor }}
                        />
                        <span>{c.name}</span>
                      </div>
                      <span className="opacity-70 font-mono">({c.archiveCount})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Product Types */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#988F8B] block">
                  Product Type
                </span>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                        selectedCategory === cat
                          ? 'bg-[#042D2B] text-white'
                          : 'bg-[#F2EFEA] text-[#241F21] hover:bg-[#EBE7DF]'
                      }`}
                    >
                      <span>{cat}</span>
                      {selectedCategory === cat && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#241F21]/10 flex items-center justify-between">
              <button
                onClick={resetFilters}
                className="text-xs text-[#988F8B] hover:text-[#241F21] underline cursor-pointer"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => setFilterOverlayOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#241F21] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
              >
                Apply & View ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
