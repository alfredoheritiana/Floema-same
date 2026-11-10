import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/floemaData';

export interface EnquiryItem {
  product: Product;
  selectedStructure?: string;
  selectedFinish?: string;
  quantity: number;
}

interface AppContextType {
  currentPath: string;
  navigate: (path: string) => void;
  enquiryList: EnquiryItem[];
  addToEnquiry: (product: Product, structure?: string, finish?: string) => void;
  removeFromEnquiry: (productId: string) => void;
  isEnquiryOpen: boolean;
  setIsEnquiryOpen: (open: boolean) => void;
  language: 'EN' | 'PT';
  setLanguage: (lang: 'EN' | 'PT') => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    if (path === '/' || path === '') return '/en';
    return path;
  });

  const [enquiryList, setEnquiryList] = useState<EnquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('floema_enquiry');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'PT'>('EN');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path === '/' ? '/en' : path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  const addToEnquiry = (product: Product, structure?: string, finish?: string) => {
    setEnquiryList((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      let updated: EnquiryItem[];
      if (existing) {
        updated = prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updated = [
          ...prev,
          {
            product,
            selectedStructure: structure || product.structureOptions?.[0],
            selectedFinish: finish || product.finishes?.[0],
            quantity: 1
          }
        ];
      }
      try {
        localStorage.setItem('floema_enquiry', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
    showToast(`Added ${product.title} to your Enquiry List`);
  };

  const removeFromEnquiry = (productId: string) => {
    setEnquiryList((prev) => {
      const updated = prev.filter((item) => item.product.id !== productId);
      try {
        localStorage.setItem('floema_enquiry', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigate,
        enquiryList,
        addToEnquiry,
        removeFromEnquiry,
        isEnquiryOpen,
        setIsEnquiryOpen,
        language,
        setLanguage,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
