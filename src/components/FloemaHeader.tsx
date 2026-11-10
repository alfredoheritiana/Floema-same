import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, ShoppingBag } from 'lucide-react';

export const FloemaHeader: React.FC = () => {
  const { currentPath, navigate, enquiryList, setIsEnquiryOpen, language, setLanguage } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchModalRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Focus input when search modal opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Handle escape key for search modal & mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (searchOpen) setSearchOpen(false);
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen, mobileMenuOpen]);

  // Handle mobile body scroll locking
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Products', path: '/en/products' },
    { label: 'About', path: '/en/about' },
    { label: 'Sustainability', path: '/en/sustainability' },
    { label: 'Journal', path: '/en/journal' }
  ];

  const totalEnquiryCount = enquiryList.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/en/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Top Fixed Header Container */}
      <header className="fixed top-5 sm:top-6 left-0 right-0 z-40 pointer-events-none px-4 sm:px-8 w-full max-w-[1536px] mx-auto flex items-center justify-between relative">
        {/* Left: Brand Logo Wordmark (Compact / Accessible) */}
        <div className="pointer-events-auto flex items-center">
          <a
            href="/en"
            onClick={(e) => {
              e.preventDefault();
              navigate('/en');
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-1 cursor-pointer select-none group text-[#241F21] focus-visible:outline-hidden"
            aria-label="Floema home"
          >
            <span className="font-semibold text-2xl tracking-tight leading-none group-hover:opacity-85 transition-opacity">
              Floema
            </span>
            <span className="text-[11px] opacity-75 font-normal leading-none -mt-1.5">®</span>
          </a>
        </div>

        {/* Center: Desktop Header Row exactly matching user screenshot */}
        <div className="hidden md:flex items-center gap-[10px] sm:gap-[12px] pointer-events-auto select-none md:absolute md:left-1/2 md:-translate-x-1/2">
          {/* 1. Large white rounded navigation capsule */}
          <nav
            className="h-[40px] sm:h-[42px] px-2 sm:px-3 bg-white rounded-full border border-[#241F21]/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-1"
            aria-label="Desktop primary navigation"
          >
            {navLinks.map((link) => {
              const active = currentPath.startsWith(link.path);
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.path);
                  }}
                  className={`h-[30px] sm:h-[32px] px-3.5 sm:px-4 rounded-full flex items-center justify-center text-[13px] transition-all duration-150 cursor-pointer ${
                    active
                      ? 'bg-[#241F21]/5 text-[#241F21] font-semibold'
                      : 'text-[#241F21] font-normal hover:bg-[#241F21]/[0.04] hover:text-[#241F21]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* 2. Separate white circular search button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-white border border-[#241F21]/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#241F21] hover:bg-[#241F21]/[0.04] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-150 cursor-pointer"
            aria-label="Search catalogue"
          >
            <Search size={15} strokeWidth={2.2} />
          </button>

          {/* 3. Separate white language capsule: black active EN pill and muted PT */}
          <div className="h-[40px] sm:h-[42px] px-1.5 py-1 bg-white rounded-full border border-[#241F21]/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center gap-0.5 text-xs font-medium">
            <button
              onClick={() => setLanguage('EN')}
              className={`h-[28px] sm:h-[30px] px-2.5 rounded-full text-[11px] font-bold tracking-wide transition-all duration-150 cursor-pointer ${
                language === 'EN'
                  ? 'bg-[#241F21] text-white shadow-xs'
                  : 'text-[#241F21]/50 hover:text-[#241F21] hover:bg-black/[0.04]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('PT')}
              className={`h-[28px] sm:h-[30px] px-2.5 rounded-full text-[11px] font-bold tracking-wide transition-all duration-150 cursor-pointer ${
                language === 'PT'
                  ? 'bg-[#241F21] text-white shadow-xs'
                  : 'text-[#241F21]/50 hover:text-[#241F21] hover:bg-black/[0.04]'
              }`}
            >
              PT
            </button>
          </div>

          {/* 4. Separate white rounded Enquiry button with existing bag icon */}
          <button
            onClick={() => setIsEnquiryOpen(true)}
            className="h-[40px] sm:h-[42px] px-4 rounded-full bg-white border border-[#241F21]/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[#241F21] text-[13px] font-medium flex items-center gap-2 hover:bg-[#241F21]/[0.04] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-150 cursor-pointer"
            aria-label={`Open enquiry list with ${totalEnquiryCount} items`}
          >
            <ShoppingBag size={14} strokeWidth={2.1} />
            <span>Enquiry</span>
            {totalEnquiryCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#E9E778] text-[#241F21] text-[10px] font-bold flex items-center justify-center font-mono ml-0.5">
                {totalEnquiryCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile: Compact MENU Control */}
        <div className="md:hidden pointer-events-auto">
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(true)}
            className="h-[38px] px-4 rounded-full bg-white border border-[#241F21]/10 shadow-xs text-xs font-mono font-bold tracking-widest uppercase text-[#241F21] hover:bg-[#F2EFEA] transition-colors cursor-pointer"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            MENU
          </button>
        </div>
      </header>

      {/* Elegant Desktop & Mobile Search Modal */}
      {searchOpen && (
        <div
          ref={searchModalRef}
          role="dialog"
          aria-modal="true"
          aria-label="Search catalogue"
          className="fixed inset-0 z-50 bg-[#241F21]/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-fade-in"
          onClick={(e) => {
            if (e.target === searchModalRef.current) setSearchOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl border border-[#241F21]/10 animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#988F8B]">
                Search Floema Catalogue
              </span>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-full text-[#988F8B] hover:text-[#241F21] cursor-pointer"
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search products, materials, collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-base sm:text-lg text-[#241F21] placeholder-[#988F8B] border-b border-[#241F21]/20 pb-3 pr-10 focus:outline-hidden focus:border-[#241F21]"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-3 text-[#241F21] hover:text-[#042D2B] cursor-pointer"
                aria-label="Submit search"
              >
                <Search size={18} />
              </button>
            </form>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#988F8B]">
              <span>Popular:</span>
              <button
                type="button"
                onClick={() => {
                  navigate('/en/products?category=Furniture');
                  setSearchOpen(false);
                }}
                className="underline hover:text-[#241F21] cursor-pointer"
              >
                Benches
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate('/en/products?category=Signage');
                  setSearchOpen(false);
                }}
                className="underline hover:text-[#241F21] cursor-pointer"
              >
                Signage
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate('/en/products?category=Equipment');
                  setSearchOpen(false);
                }}
                className="underline hover:text-[#241F21] cursor-pointer"
              >
                Golf
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Accessible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 bg-[#241F21] text-white flex flex-col justify-between p-8 animate-fade-in md:hidden"
        >
          {/* Mobile Top Bar */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-2xl tracking-tighter">Floema®</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-6 my-auto">
            {navLinks.map((link) => {
              const active = currentPath.startsWith(link.path);
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-3xl font-medium tracking-tight transition-colors cursor-pointer flex items-center justify-between ${
                    active ? 'text-[#E9E778] font-semibold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#E9E778]" />}
                </a>
              );
            })}
          </div>

          {/* Drawer Bottom Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-white/15 text-xs font-mono">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1.5 rounded-lg border ${
                  language === 'EN' ? 'bg-white text-[#241F21] font-bold' : 'border-white/20 text-white/70'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('PT')}
                className={`px-3 py-1.5 rounded-lg border ${
                  language === 'PT' ? 'bg-white text-[#241F21] font-bold' : 'border-white/20 text-white/70'
                }`}
              >
                PT
              </button>
            </div>

            <button
              onClick={() => {
                setIsEnquiryOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E9E778] text-[#241F21] font-bold"
            >
              <ShoppingBag size={14} />
              <span>Enquiry ({totalEnquiryCount})</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
