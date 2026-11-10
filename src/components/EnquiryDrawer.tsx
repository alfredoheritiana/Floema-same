import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const EnquiryDrawer: React.FC = () => {
  const { enquiryList, removeFromEnquiry, isEnquiryOpen, setIsEnquiryOpen, navigate } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    location: '',
    notes: ''
  });

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isEnquiryOpen) {
        setIsEnquiryOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnquiryOpen, setIsEnquiryOpen]);

  if (!isEnquiryOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsEnquiryOpen(false)}
        className="fixed inset-0 bg-[#241F21]/40 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="relative z-10 w-full max-w-lg bg-[#F2EFEA] h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#241F21]/10">
        {/* Header */}
        <div className="p-6 border-b border-[#241F21]/10 flex items-center justify-between sticky top-0 bg-[#F2EFEA] z-10">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-[#241F21]">
              Project Enquiry List
            </h2>
            <p className="text-xs text-[#988F8B] mt-0.5">
              {enquiryList.length} {enquiryList.length === 1 ? 'item' : 'items'} selected for specification
            </p>
          </div>
          <button
            onClick={() => setIsEnquiryOpen(false)}
            aria-label="Close drawer"
            className="p-2 rounded-full hover:bg-[#EBE7DF] text-[#241F21] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 space-y-6">
          {submitted ? (
            <div className="bg-[#EBE7DF] rounded-2xl p-6 text-center space-y-4 my-8">
              <div className="w-12 h-12 rounded-full bg-[#BACFA3] text-[#042D2B] flex items-center justify-center mx-auto">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#241F21] tracking-tight">
                Enquiry Recorded (Prototype Demo)
              </h3>
              <p className="text-xs text-[#524945] leading-relaxed">
                Thank you, <strong>{formData.name || 'Architect/Specifier'}</strong>. In production, your request dispatches 3D CAD models, DWG files, and formal pricing to{' '}
                <strong>{formData.email || 'your email'}</strong>.
              </p>
              <div className="p-3 bg-white/70 rounded-xl text-left text-xs text-[#7A716D] space-y-1">
                <div className="font-semibold text-[#241F21]">Items included:</div>
                <ul className="list-disc list-inside">
                  {enquiryList.map((item) => (
                    <li key={item.product.id}>
                      {item.product.title} ({item.quantity}x)
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setIsEnquiryOpen(false);
                }}
                className="w-full py-2.5 rounded-full bg-[#241F21] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : enquiryList.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#EBE7DF] text-[#988F8B] flex items-center justify-center mx-auto">
                <AlertCircle size={28} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-[#241F21]">Your Enquiry List is empty</h3>
                <p className="text-xs text-[#988F8B] max-w-xs mx-auto">
                  Browse our Urban, Nature, RePlastic, and Golf collections and add products to request CAD files and quotations.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsEnquiryOpen(false);
                  navigate('/en/products');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#241F21] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
              >
                <span>Explore Products</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <>
              {/* Product list */}
              <div className="space-y-3">
                {enquiryList.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3.5 rounded-xl bg-white border border-[#241F21]/8 flex gap-3.5 items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-14 h-14 object-contain rounded-lg bg-[#F9F8F6] p-1 border border-[#241F21]/5"
                      />
                      <div>
                        <h4 className="text-xs font-semibold text-[#241F21] leading-tight">
                          {item.product.title}
                        </h4>
                        <p className="text-[11px] text-[#988F8B] uppercase tracking-wider mt-0.5">
                          {item.product.collection} • {item.product.category}
                        </p>
                        {item.selectedStructure && (
                          <p className="text-[11px] text-[#524945] mt-0.5">
                            {item.selectedStructure}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-[#7A716D]">
                        Qty: {item.quantity}
                      </span>
                      <button
                        onClick={() => removeFromEnquiry(item.product.id)}
                        title="Remove item"
                        className="p-1.5 rounded-md text-[#988F8B] hover:text-[#FF004D] hover:bg-[#F2EFEA] transition-colors cursor-pointer"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specification Request Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5 pt-4 border-t border-[#241F21]/10">
                <h3 className="text-sm font-semibold text-[#241F21] tracking-tight">
                  Specifier / Contact Details
                </h3>

                <div>
                  <label className="block text-[11px] font-medium text-[#524945] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-[#241F21]/15 focus:outline-hidden focus:border-[#241F21]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-medium text-[#524945] mb-1">
                      Organization / Studio *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Studio OMA"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-[#241F21]/15 focus:outline-hidden focus:border-[#241F21]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#524945] mb-1">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lisbon, Portugal"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-[#241F21]/15 focus:outline-hidden focus:border-[#241F21]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#524945] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. architect@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-[#241F21]/15 focus:outline-hidden focus:border-[#241F21]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#524945] mb-1">
                    Project Notes & Quantities
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Provide details about terrain, expected completion, custom dimensions, or RAL preferences..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-[#241F21]/15 focus:outline-hidden focus:border-[#241F21]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#241F21] text-white text-xs font-semibold tracking-wide hover:bg-black transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Specification & Quotation</span>
                    <ArrowRight size={14} />
                  </button>
                  <p className="text-[10px] text-center text-[#988F8B] mt-2">
                    Notice: This is an internal prototype. Submitting records the request locally without contacting external servers.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
