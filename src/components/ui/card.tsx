import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-[20px] border border-border bg-card text-card-foreground shadow-[0_8px_24px_rgba(15,23,42,.06)] dark:shadow-black/20 transition-shadow hover:shadow-[0_12px_32px_rgba(15,23,42,.09)] dark:hover:shadow-black/30', className)} {...props} />;
}
