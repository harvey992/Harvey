'use client';

import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

export function Modal({ title, children, trigger = 'Open modal' }: { title: string; children: ReactNode; trigger?: string }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild><Button variant="secondary">{trigger}</Button></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-[24px] border bg-card p-6 shadow-2xl">
          <Dialog.Title className="font-heading text-2xl font-extrabold">{title}</Dialog.Title>
          <div className="mt-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
