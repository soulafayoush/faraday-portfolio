'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { ArrowDown } from 'lucide-react';

// تجميع إعدادات الحركة (Variants) خارج المكون يمنع إعادة إنشائها مع كل Render ويجعل الكود أنظف
const fadeInUp = (duration: number, delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay, ease: [0.25, 0.4, 0.25, 1] }
});

export function HeroSection() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 overflow-hidden"
      dir={dir}
    >
      {/* الوهج الخلفي الممتد - الطبقات والألوان ممتازة ومتناسقة مع الـ Dark Mode الفاخر */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div 
          className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, #6B21A8 0%, #A855F7 30%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.02]"
          style={{ background: 'radial-gradient(circle, #34D399 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* الملصق العلوي النابض (Label) */}
        <motion.div {...fadeInUp(1.2, 0)} className="mb-8 md:mb-12">
          <span 
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border text-[11px] tracking-[0.25em] uppercase transition-colors"
            style={{
              borderColor: 'var(--color-card-border)',
              background: 'var(--color-card-surface)',
              color: 'var(--color-secondary-text)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#34D399]" />
            {t.hero.label}
          </span>
        </motion.div>

        {/* العنوان الرئيسي للموقع (Main Title) - تحسين الـ SEO وعمق الخط */}
        <motion.h1
          {...fadeInUp(1.4, 0.3)}
          className="font-serif leading-[1.1] mb-16 md:mb-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          style={{
            fontFamily: 'var(--font-cormorant)',
            color: 'var(--color-primary-text)',
          }}
        >
          {t.hero.title}
        </motion.h1>

        {/* بطاقات الحالة والموقع (Status Cards) */}
        <motion.div
          {...fadeInUp(1.5, 0.8)}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        >
          {/* بطاقة الموقع */}
          <div 
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border text-[11px] tracking-[0.15em] uppercase"
            style={{
              borderColor: 'var(--color-card-border)',
              background: 'var(--color-card-surface)',
              color: 'var(--color-secondary-text)'
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-accent-text)' }} />
            {t.hero.location}
          </div>

          {/* بطاقة الحالة العمل الحالية */}
          <div 
            className="flex items-center gap-3 px-5 py-2.5 rounded-full border text-[11px] tracking-[0.15em] uppercase text-center"
            style={{
              borderColor: 'var(--color-card-border)',
              background: 'var(--color-card-surface)',
              color: 'var(--color-secondary-text)'
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#34D399]" />
            {t.hero.status}
          </div>
        </motion.div>
      </div>

      {/* مؤشر النزول لأسفل الصفحة - تم تقفيل الكود برمجياً بشكل محكم وبدون أي تحذيرات */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#work"
          className="flex flex-col items-center gap-3 group cursor-pointer"
          aria-label="Scroll to work section"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown 
              className="w-4 h-4 transition-colors duration-300 group-hover:text-[#A855F7]"
              style={{ color: 'var(--color-secondary-text)' }}
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}