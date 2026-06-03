'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-500 group cursor-pointer"
      style={{
        borderColor: 'var(--color-card-border)',
        color: 'var(--color-secondary-text)',
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
