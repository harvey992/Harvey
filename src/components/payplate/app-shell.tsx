import type { ReactNode } from 'react';
import { BottomNav } from '@/components/layout/bottom-nav';
import { TopNav } from '@/components/layout/top-nav';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="safe-screen bg-background pb-28">
      <TopNav />
      <main className="mx-auto w-full max-w-md px-4 py-5 md:max-w-6xl">{children}</main>
      <BottomNav />
    </div>
  );
}
