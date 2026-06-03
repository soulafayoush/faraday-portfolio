'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  // الهيكل الافتراضي (Skeleton) تم ضبطه بأبعاد وحدود مطابقة تماماً للزر الأصلي لمنع الـ CLS
  if (!mounted) {
    return (
      <div 
        className="w-8 h-8 rounded-lg border shrink-0 opacity-0" 
        style={{ borderColor: 'transparent' }} 
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      // إضافة تأثيرات Hover ناعمة متناسقة مع الهوية البصرية الفاخرة للموقع واهتزازات التوهج الخلفي
      className={`flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-500 group cursor-pointer shrink-0 will-change-transform ${
        isDark 
          ? 'hover:border-[rgba(251,191,36,0.3)] hover:shadow-[0_0_12px_rgba(251,191,36,0.05)]' 
          : 'hover:border-[rgba(124,58,237,0.3)] hover:shadow-[0_0_12px_rgba(124,58,237,0.05)]'
      }`}
      style={{
        borderColor: 'var(--color-card-border)',
        color: 'var(--color-secondary-text)',
        background: 'transparent',
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 transition-colors duration-500 group-hover:text-[#FBBF24]" />
      ) : (
        <Moon className="w-3.5 h-3.5 transition-colors duration-500 group-hover:text-[#7C3AED]" />
      )}
    </button>
  );
}