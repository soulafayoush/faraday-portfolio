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
      className="flex items-center justify-center gap-2 text-sm transition-all duration-500 group cursor-pointer px-3 py-1.5 rounded-lg border w-[76px] will-change-transform hover:shadow-[0_0_15px_rgba(168,85,247,0.03)]"
      style={{
        color: 'var(--color-secondary-text)',
        borderColor: 'var(--color-card-border)',
        background: 'transparent',
      }}
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      {/* أيقونة الكرة الأرضية التفاعلية */}
      <Globe className="w-3.5 h-3.5 transition-colors duration-500 group-hover:text-[#A855F7] shrink-0" />
      
      {/* اسم اللغة مع إلغاء الـ Selection العشوائي */}
      <span className="text-xs tracking-wider transition-colors duration-500 group-hover:text-[#F5F5F7] select-none font-medium">
        {locale === 'en' ? 'عربي' : 'EN'}
      </span>
    </button>
  );
}