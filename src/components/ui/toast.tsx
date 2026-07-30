'use client';

import * as ToastPrimitive from '@radix-ui/react-toast';
import type { ReactNode } from 'react';

export function ToastProvider({ children }: { children: ReactNode }) {
  return <ToastPrimitive.Provider swipeDirection="right">{children}<ToastPrimitive.Viewport className="fixed bottom-28 right-4 z-50 grid gap-2" /></ToastPrimitive.Provider>;
}
