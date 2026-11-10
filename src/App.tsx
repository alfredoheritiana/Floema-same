import React from 'react';
import { useApp } from './context/AppContext';
import { FloemaHeader } from './components/FloemaHeader';
import { EnquiryDrawer } from './components/EnquiryDrawer';
import { RichFooter } from './components/RichFooter';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { JournalPage } from './pages/JournalPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { LegalPage } from './pages/LegalPage';
import { Check } from 'lucide-react';

export const App: React.FC = () => {
  const { currentPath, toastMessage, navigate } = useApp();

  // Normalize path
  const normalizedPath = currentPath.split('?')[0].replace(/\/$/, '') || '/en';

  const renderContent = () => {
    // 1. Home
    if (normalizedPath === '' || normalizedPath === '/' || normalizedPath === '/en') {
      return <HomePage />;
    }

    // 2. Products Index
    if (normalizedPath === '/en/products') {
      return <ProductsPage />;
    }

    // 3. Product Detail: /en/products/:collection/:slug
    if (normalizedPath.startsWith('/en/products/')) {
      const parts = normalizedPath.split('/').filter(Boolean);
      const slug = parts[parts.length - 1];
      if (slug && slug !== 'products') {
        return <ProductDetailPage slug={slug} />;
      }
      return <ProductsPage />;
    }

    // 4. About
    if (normalizedPath === '/en/about') {
      return <AboutPage />;
    }

    // 5. Sustainability
    if (normalizedPath === '/en/sustainability') {
      return <SustainabilityPage />;
    }

    // 6. Journal Index
    if (normalizedPath === '/en/journal') {
      return <JournalPage />;
    }

    // 7. Journal Article: /en/journal/case-studies/:slug or /en/journal/:slug
    if (normalizedPath.startsWith('/en/journal/')) {
      const parts = normalizedPath.split('/').filter(Boolean);
      const slug = parts[parts.length - 1];
      if (slug && slug !== 'journal') {
        return <JournalDetailPage slug={slug} />;
      }
      return <JournalPage />;
    }

    // 8. Legal routes: /en/legal/:policy
    if (normalizedPath.startsWith('/en/legal/')) {
      const parts = normalizedPath.split('/').filter(Boolean);
      const policy = parts[parts.length - 1] || 'privacy';
      return <LegalPage policy={policy} />;
    }

    // 404 Not Found fallback
    return (
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#988F8B] mb-2">
          Page Not Found • 404
        </span>
        <h1 className="editorial-display text-4xl sm:text-5xl text-[#241F21] mb-4">
          The requested path does not exist.
        </h1>
        <p className="text-xs sm:text-sm text-[#524945] max-w-md mb-8">
          The URL you navigated to is not part of this Floema reference reconstruction prototype.
        </p>
        <button
          onClick={() => navigate('/en')}
          className="px-6 py-3 rounded-full bg-[#241F21] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
        >
          Return to Floema Homepage
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EFEA] text-[#241F21]">
      {/* Global Header */}
      <FloemaHeader />

      {/* Main Content Area */}
      <main className="flex-1">{renderContent()}</main>

      {/* Global Acid-Yellow Rich Footer */}
      <RichFooter />

      {/* Slide-out Enquiry Drawer */}
      <EnquiryDrawer />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#241F21] text-white text-xs font-medium px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-white/10 animate-fade-in">
          <div className="w-4 h-4 rounded-full bg-[#E9E778] text-[#241F21] flex items-center justify-center shrink-0">
            <Check size={10} strokeWidth={3} />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
