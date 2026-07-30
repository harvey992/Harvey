import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Chip({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('inline-flex items-center rounded-full bg-muted px-3 py-1.5 text-xs font-bold text-foreground', className)} {...props} />;
}
