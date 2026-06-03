'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import { CountUp } from './CountUp';

// نقل إعدادات الحركة خارج المكون يمنع إعادة إنشائها مع كل Render ويحمي الـ Types بالكامل
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const } // قفل مصفوفة الـ ease لـ TypeScript
  }
};

export function AboutSection() {
  const { t, dir } = useLanguage();

  // تحسين طريقة تعريف مصفوفة الإحصائيات الفاخرة وحماية أنواعها
  const stats = [
    { value: t.about.stats.companies, label: t.about.stats.companiesLabel, type: 'emerald' },
    { value: t.about.stats.capital, label: t.about.stats.capitalLabel, type: 'purple' },
    { value: t.about.stats.years, label: t.about.stats.yearsLabel, type: 'gold' },
    { value: t.about.stats.exits, label: t.about.stats.exitsLabel, type: 'emerald' },
  ] as const;

  return (
    <section
      id="about"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24"
      dir={dir}
    >
      {/* Section divider */}
      <div className="section-divider mb-20 md:mb-28" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInVariant}
          className="mb-16 md:mb-20 flex items-center gap-4"
        >
          <h2 className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-secondary-text)' }}>
            {t.about.heading}
          </h2>
          <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
        </motion.div>

        {/* Split Layout: Image + Bio */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24 md:mb-32">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:w-5/12 shrink-0"
          >
            <div className="floating-image-card relative w-full aspect-[3/4] max-w-[380px] mx-auto lg:mx-0 overflow-hidden rounded-xl">
              <Image
                src="/images/profile-portrait.png"
                alt="Alexander Faraday"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 380px, 380px"
                priority
              />
              {/* Subtle overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(5, 5, 5, 0.6) 0%, transparent 40%)' }}
              />
              {/* Name badge */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div 
                  className="px-4 py-3 rounded-lg"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <p className="text-sm font-medium" style={{ color: 'var(--color-primary-text)', fontFamily: 'var(--font-cormorant)' }}>
                    Alexander Faraday
                  </p>
                  <p className="text-[10px] tracking-wider uppercase mt-1" style={{ color: 'var(--color-secondary-text)' }}>
                    Growth & VC Consultant
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:w-7/12 flex flex-col justify-center"
          >
            <p className="text-base md:text-lg leading-relaxed md:leading-[1.9]"
              style={{ color: 'var(--color-secondary-text)' }}
            >
              {t.about.bio}
            </p>

            {/* Inline tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {t.about.tags.map((tag) => (
                <span key={tag} className="metric-badge purple select-none">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="luxury-card p-6 md:p-8 text-center"
            >
              <p className={`text-3xl md:text-4xl font-bold mb-2 ${
                stat.type === 'emerald' ? 'accent-gradient-emerald' :
                stat.type === 'purple' ? 'accent-gradient' :
                'accent-gradient-gold'
              }`}>
                <CountUp value={stat.value} />
              </p>
              <p className="text-[11px] tracking-[0.1em] uppercase"
                style={{ color: 'var(--color-secondary-text)' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}