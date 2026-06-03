'use client';

import { useLanguage } from './LanguageProvider';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 text-sm transition-all duration-500 group cursor-pointer px-3 py-1.5 rounded-lg border"
      style={{
        color: 'var(--color-secondary-text)',
        borderColor: 'var(--color-card-border)',
        background: 'transparent',
      }}
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      <Globe className="w-3.5 h-3.5 transition-colors duration-500 group-hover:text-[#A855F7]" />
      <span className="text-xs tracking-wider transition-colors duration-500 group-hover:text-[#F5F5F7]">
        {locale === 'en' ? 'عربي' : 'EN'}
      </span>
    </button>
  );
}
