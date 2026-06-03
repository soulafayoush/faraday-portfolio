'use client';

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { type Locale, type Translations, translations } from '@/i18n/translations';

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getSavedLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const saved = document.cookie.split('; ').find(row => row.startsWith('locale='));
  if (saved) {
    const savedLocale = saved.split('=')[1];
    if (savedLocale === 'ar' || savedLocale === 'en') return savedLocale;
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
  }, []);

  // Read saved locale on mount using requestAnimationFrame callback
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const saved = getSavedLocale();
      if (saved !== 'en') {
        setLocaleState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const t = translations[locale];
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
