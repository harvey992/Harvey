import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('glass-badge inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold text-white shadow-sm', className)} {...props} />;
}
