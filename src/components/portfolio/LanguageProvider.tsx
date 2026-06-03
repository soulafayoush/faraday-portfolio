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

  // تعديل الدالة لتحديث الحالة وحفظ الكوكي فقط، وترك تحديث الـ DOM للـ useEffect
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.cookie = `locale=${newLocale};path=/;max-age=31536000;SameSite=Lax`; // إضافة SameSite لمعايير الأمان الحديثة
  }, []);

  // 1. useEffect: لقراءة اللغة المحفوظة عند تفعيل المكون لأول مرة
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const saved = getSavedLocale();
      setLocaleState(saved);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // 2. useEffect: مراقبة وتحديث خصائص الـ HTML (lang & dir) تلقائياً عند تغير الـ locale
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const currentDir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    document.documentElement.dir = currentDir;
  }, [locale]);

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