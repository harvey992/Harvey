import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-[20px] border bg-card text-card-foreground shadow-[0_12px_28px_rgba(60,38,25,.09)] dark:shadow-black/30', className)} {...props} />;
}
