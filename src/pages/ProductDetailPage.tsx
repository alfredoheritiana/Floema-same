import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, Product } from '../data/floemaData';
import { ProductViewer } from '../components/ProductViewer';
import { ArrowLeft, Check, Plus, ShoppingBag, Ruler, Layers } from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const { navigate, addToEnquiry, enquiryList, setIsEnquiryOpen } = useApp();

  const product: Product =
    PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedStructure, setSelectedStructure] = useState<string>(
    product.structureOptions?.[0] || 'Standard'
  );
  const [selectedFinish, setSelectedFinish] = useState<string>(
    product.finishes?.[0] || 'Standard Finish'
  );
  const [activeTab, setActiveTab] = useState<'specs' | 'technical'>('specs');

  const galleryImages =
    product.secondaryImages && product.secondaryImages.length > 0
      ? product.secondaryImages
      : [product.image];

  const inEnquiry = enquiryList.some((item) => item.product.id === product.id);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.collection === product.collection && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-[#F2EFEA] text-[#241F21] pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#988F8B] mb-8">
        <button
          onClick={() => navigate('/en/products')}
          className="hover:text-[#241F21] flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft size={13} />
          <span>Products</span>
        </button>
        <span>/</span>
        <button
          onClick={() => navigate(`/en/products?collection=${product.collection}`)}
          className="hover:text-[#241F21] uppercase cursor-pointer"
        >
          {product.collection}
        </button>
        <span>/</span>
        <span className="text-[#241F21] font-semibold">{product.title}</span>
      </div>

      {/* Main Two-Column Architectural Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-[#241F21]/10">
        {/* Left: Interactive Canvas Product Viewer & Thumbnails */}
        <div className="lg:col-span-7 sticky top-28 space-y-4">
          <ProductViewer
            imageSrc={galleryImages[activeImageIndex] || product.image}
            alt={product.title}
          />

          {/* Gallery Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex items-center gap-3 pt-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 rounded-2xl bg-white p-2 border transition-all cursor-pointer overflow-hidden ${
                    activeImageIndex === idx
                      ? 'border-[#241F21] ring-2 ring-[#241F21]/20 scale-102'
                      : 'border-[#241F21]/10 hover:border-[#241F21]/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Spec Sheet & Configuration */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full bg-[#EBE7DF] text-xs font-mono uppercase tracking-wider text-[#524945]">
                {product.collection} • {product.category}
              </span>
            </div>
            <h1 className="editorial-display text-3xl sm:text-4xl md:text-5xl text-[#241F21]">
              {product.title}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[#988F8B] mt-2">
              {product.dimensions}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#988F8B]">
              What is it
            </h4>
            <p className="text-sm text-[#524945] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Structure Selector */}
          {product.structureOptions && product.structureOptions.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#988F8B]">
                Structure Options
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.structureOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedStructure(opt)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                      selectedStructure === opt
                        ? 'bg-[#241F21] text-white border-[#241F21]'
                        : 'bg-white text-[#241F21] border-[#241F21]/15 hover:border-[#241F21]/40'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Finish & RAL Swatches */}
          {product.finishes && product.finishes.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#988F8B]">
                Color & Finish Options
              </label>
              <div className="flex flex-wrap gap-2">
                {product.finishes.map((finish) => (
                  <button
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                      selectedFinish === finish
                        ? 'bg-[#042D2B] text-white border-[#042D2B]'
                        : 'bg-white text-[#524945] border-[#241F21]/15 hover:bg-[#EBE7DF]'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions: Request Information & Add to Enquiry List */}
          <div className="p-5 rounded-2xl bg-white border border-[#241F21]/10 space-y-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  addToEnquiry(product, selectedStructure, selectedFinish);
                }}
                className={`flex-1 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  inEnquiry
                    ? 'bg-[#E9E778] text-[#241F21] font-bold hover:bg-[#dfe065]'
                    : 'bg-[#241F21] text-white hover:bg-black'
                }`}
              >
                {inEnquiry ? <Check size={14} /> : <Plus size={14} />}
                <span>{inEnquiry ? 'In Enquiry List' : 'Add to Enquiry List'}</span>
              </button>

              <button
                onClick={() => {
                  if (!inEnquiry) {
                    addToEnquiry(product, selectedStructure, selectedFinish);
                  }
                  setIsEnquiryOpen(true);
                }}
                className="px-5 py-3.5 rounded-full border border-[#241F21]/20 hover:bg-[#F2EFEA] text-xs font-semibold uppercase tracking-wider text-[#241F21] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag size={14} />
                <span>Request Info</span>
              </button>
            </div>
          </div>

          {/* Specifications Tab */}
          <div className="space-y-4 pt-4 border-t border-[#241F21]/10">
            <div className="flex items-center gap-2 border-b border-[#241F21]/10 pb-2">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'specs'
                    ? 'bg-[#241F21] text-white'
                    : 'text-[#988F8B] hover:text-[#241F21]'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'technical'
                    ? 'bg-[#241F21] text-white'
                    : 'text-[#988F8B] hover:text-[#241F21]'
                }`}
              >
                Drawings
              </button>
            </div>

            {activeTab === 'specs' ? (
              <div className="bg-white rounded-2xl p-5 border border-[#241F21]/8 divide-y divide-[#241F21]/8">
                {product.specs.map((spec, i) => (
                  <div key={i} className="py-2.5 flex items-start justify-between text-xs">
                    <span className="font-medium text-[#7A716D] w-1/3">{spec.label}</span>
                    <span className="font-semibold text-[#241F21] w-2/3 text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 border border-[#241F21]/8 space-y-4 text-center">
                <Ruler size={24} className="mx-auto text-[#042D2B]" />
                <div className="text-xs font-mono font-semibold text-[#241F21]">
                  Technical Drawing Reference
                </div>
                <div className="text-[11px] text-[#988F8B] font-mono">
                  Scale: 1:20 • Code: FLM-{product.slug.toUpperCase()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* In the same Collection */}
      {relatedProducts.length > 0 && (
        <div className="pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="editorial-display text-2xl sm:text-3xl text-[#241F21]">
              In the Same Collection ({product.collection})
            </h2>
            <button
              onClick={() => navigate(`/en/products?collection=${product.collection}`)}
              className="text-xs font-semibold text-[#241F21] hover:underline cursor-pointer"
            >
              See All {product.collection} Products
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/en/products/${rel.collection}/${rel.slug}`)}
                className="bg-white rounded-2xl p-4 border border-[#241F21]/8 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="aspect-4/3 rounded-xl bg-[#F9F8F6] p-4 flex items-center justify-center overflow-hidden mb-3">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="max-h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#241F21] group-hover:text-[#042D2B] transition-colors">
                  {rel.title}
                </h3>
                <p className="text-[11px] text-[#988F8B] font-mono mt-1">
                  {rel.dimensions}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
