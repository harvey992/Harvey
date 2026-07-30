import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center rounded-[20px] px-5 text-sm font-bold transition duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white shadow-[0_10px_28px_rgba(13,159,110,.30)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(13,159,110,.38)] active:translate-y-0',
        secondary: 'bg-muted text-foreground hover:bg-muted/80',
        ghost: 'bg-transparent text-foreground hover:bg-muted',
        success: 'bg-success text-white shadow-[0_10px_28px_rgba(34,197,94,.26)] hover:-translate-y-0.5 active:translate-y-0',
      },
      size: { sm: 'min-h-9 rounded-2xl px-3', md: 'min-h-11', lg: 'min-h-14 rounded-[22px] px-6 text-base' },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
