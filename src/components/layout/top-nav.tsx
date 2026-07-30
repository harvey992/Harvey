'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function TopNav() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a className="font-heading text-xl font-extrabold tracking-tight" href="/home">PayPlate</a>
        <Button aria-label="Toggle theme" variant="secondary" size="sm" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
          {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </div>
    </header>
  );
}
