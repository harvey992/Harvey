import type { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('min-h-12 w-full rounded-[20px] border bg-card px-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/15', className)} {...props} />;
}
