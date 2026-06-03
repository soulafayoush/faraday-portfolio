'use client';

import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from './LanguageProvider';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  name: string;
  year: string;
  subtitle: string;
  result: string;
  resultType: 'positive' | 'purple' | 'gold';
  image: string;
}

export function SelectedWork() {
  const { t, dir } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // إعدادات حركة واستجابة السبرينغ الفاخرة
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 25 });
  
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      name: t.work.project1.name,
      year: t.work.project1.year,
      subtitle: t.work.project1.subtitle,
      result: t.work.project1.result,
      resultType: 'positive',
      image: '/images/project-alpha.png',
    },
    {
      name: t.work.project2.name,
      year: t.work.project2.year,
      subtitle: t.work.project2.subtitle,
      result: t.work.project2.result,
      resultType: 'purple',
      image: '/images/project-saas.png',
    },
    {
      name: t.work.project3.name,
      year: t.work.project3.year,
      subtitle: t.work.project3.subtitle,
      result: t.work.project3.result,
      resultType: 'gold',
      image: '/images/project-alpha.png',
    },
    {
      name: t.work.project4.name,
      year: t.work.project4.year,
      subtitle: t.work.project4.subtitle,
      result: t.work.project4.result,
      resultType: 'positive',
      image: '/images/project-saas.png',
    },
  ];

  // دالة تتبع ذكية تحسب موضع المؤشر بدقة متناهية بالنسبة للـ viewport لمنع قفزات الـ Scroll
  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      mouseX.set(e.clientX - 280);
      mouseY.set(e.clientY - 180);
    });
  }, [mouseX, mouseY]);

  // تفعيل الاستماع للمجموعة فقط عند الحاجة الفعالية لتوفير موارد الجهاز
  useEffect(() => {
    if (hoveredProject === null) return;

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredProject, handleMouseMove]);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
      dir={dir}
    >
      {/* Section divider */}
      <div className="section-divider mb-20 md:mb-28" />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        className="mb-16 md:mb-20 flex items-center gap-4"
      >
        <h2
          className="text-xs tracking-[0.3em] uppercase select-none"
          style={{ color: 'var(--color-secondary-text)' }}
        >
          {t.work.heading}
        </h2>
        <span className="w-8 h-px" style={{ backgroundColor: 'var(--color-border-accent)' }} />
        <span className="text-xs select-none" style={{ color: 'var(--color-secondary-text)' }}>03</span>
      </motion.div>

      {/* Floating Image Card - يتم تفعيله للديسكتوب فقط ويتحرك مع الماوس بثبات تام */}
      <motion.div
        className="fixed top-0 left-0 w-[560px] h-[360px] pointer-events-none z-30 hidden md:block will-change-transform rounded-xl overflow-hidden"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <AnimatePresence mode="wait">
          {hoveredProject !== null && (
            <motion.div
              key={hoveredProject} // تغيير الـ key ليحدث أنميشن ناعم وتلاشي متبادل عند الانتقال بين الصفوف
              className="w-full h-full relative"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Image
                src={projects[hoveredProject].image}
                alt={projects[hoveredProject].name}
                fill
                className="object-cover"
                sizes="560px"
                priority
              />
              {/* Inner luxury glow overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.08) 0%, rgba(0, 0, 0, 0.4) 100%)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)',
                }}
              />
              {/* Project Title Badge */}
              <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded-lg select-none"
                style={{
                  background: 'rgba(10, 10, 10, 0.65)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <span className="text-[10px] tracking-widest uppercase font-medium"
                  style={{ color: 'var(--color-primary-text)' }}
                >
                  {projects[hoveredProject].name}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Projects List */}
      <div className="max-w-4xl mx-auto divide-y divide-[var(--color-border-subtle)] border-y border-[var(--color-border-subtle)]">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className="project-row group block cursor-pointer no-underline transition-colors duration-300 hover:bg-[rgba(168,85,247,0.01)]"
          >
            <div className="py-8 md:py-10 px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-baseline gap-4 md:gap-8 flex-1">
                {/* Year */}
                <span
                  className="text-xs tracking-wider min-w-[48px] tabular-nums opacity-60 select-none"
                  style={{
                    color: 'var(--color-secondary-text)',
                    fontFamily: 'var(--font-geist)',
                  }}
                >
                  {project.year}
                </span>

                <div className="flex-1 flex items-center gap-3 flex-wrap">
                  {/* Project Name */}
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-serif transition-colors duration-500 group-hover:text-[#A855F7]"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      color: 'var(--color-primary-text)',
                    }}
                  >
                    {project.name}
                  </h3>

                  {/* Arrow: متوافق اتجاهياً مع لغة الـ RTL والـ LTR بشكل ناعم */}
                  <ArrowUpRight 
                    className={`w-4 h-4 opacity-0 transition-all duration-500 group-hover:opacity-100 will-change-transform ${
                      dir === 'rtl' ? 'translate-x-2 group-hover:translate-x-0' : '-translate-x-2 group-hover:translate-x-0'
                    }`}
                    style={{ color: 'var(--color-accent-text)' }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                {/* Subtitle (desktop) */}
                <p
                  className="hidden lg:block text-sm max-w-[240px] transition-colors duration-500"
                  style={{ color: 'var(--color-secondary-text)' }}
                >
                  {project.subtitle}
                </p>

                {/* Metric Badge */}
                <span className={`metric-badge ${project.resultType} select-none`}>
                  {project.result}
                </span>
              </div>
            </div>

            {/* Subtitle (mobile) */}
            <div className="pb-6 md:pb-0 px-4 md:px-6">
              <p
                className="lg:hidden text-sm transition-colors duration-500"
                style={{ color: 'var(--color-secondary-text)' }}
              >
                {project.subtitle}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}