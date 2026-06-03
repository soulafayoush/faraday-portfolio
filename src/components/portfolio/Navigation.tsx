'use client';

import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'var(--color-nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-nav-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:text-[#A855F7] hover-underline"
          style={{
            color: 'var(--color-secondary-text)',
            fontFamily: 'var(--font-geist)',
          }}
        >
          Faraday
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-[11px] tracking-[0.2em] uppercase transition-all duration-500 hover:text-[#F5F5F7] hover-underline"
            style={{ color: 'var(--color-secondary-text)' }}
          >
            About
          </a>
          <a
            href="#work"
            className="text-[11px] tracking-[0.2em] uppercase transition-all duration-500 hover:text-[#F5F5F7] hover-underline"
            style={{ color: 'var(--color-secondary-text)' }}
          >
            Work
          </a>
          <a
            href="#journal"
            className="text-[11px] tracking-[0.2em] uppercase transition-all duration-500 hover:text-[#F5F5F7] hover-underline"
            style={{ color: 'var(--color-secondary-text)' }}
          >
            Journal
          </a>
          <a
            href="#contact"
            className="text-[11px] tracking-[0.2em] uppercase transition-all duration-500 hover:text-[#F5F5F7] hover-underline"
            style={{ color: 'var(--color-secondary-text)' }}
          >
            Contact
          </a>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <div className="w-px h-4" style={{ backgroundColor: 'var(--color-border-subtle)' }} />
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
}
