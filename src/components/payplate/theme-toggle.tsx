'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-bold transition-colors hover:bg-muted ${compact ? '' : 'w-full justify-center'}`}
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="size-4" aria-hidden /> : <Moon className="size-4" aria-hidden />}
      {compact ? (isDark ? 'Dark' : 'Light') : (isDark ? 'Light mode' : 'Dark mode')}
    </button>
  );
}
