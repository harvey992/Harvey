import Link from 'next/link';
import { bottomNavRoutes } from '@/constants/routes';
import { cn } from '@/lib/utils';

export function BottomNav() {
  return (
    <nav aria-label="Primary" className="fixed inset-x-0 bottom-4 z-30 mx-auto flex max-w-md items-center justify-around rounded-[24px] border border-border bg-card/85 p-2 shadow-[0_18px_48px_rgba(15,23,42,.14)] backdrop-blur-xl dark:shadow-black/40">
      {bottomNavRoutes.map((item) => (
        <Link key={item.href} href={item.href} className={cn('grid min-w-14 place-items-center gap-1 rounded-[18px] px-2 py-2 text-[11px] font-bold text-muted-foreground transition hover:text-primary focus-visible:text-primary', 'featured' in item && item.featured && 'min-w-16 -translate-y-4 bg-primary py-3 text-white shadow-[0_16px_34px_rgba(13,159,110,.36)] hover:text-white')}>
          <item.icon className="size-5" aria-hidden />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
