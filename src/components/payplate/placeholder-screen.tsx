import { ArrowRight } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function PlaceholderScreen({ title, description }: { title: string; description: string }) {
  return (
    <AppShell>
      <section className="grid gap-5 md:grid-cols-[1fr_380px] md:items-center">
        <div className="grid gap-4">
          <span className="w-max rounded-full bg-secondary px-3 py-1 text-xs font-extrabold text-primary dark:bg-muted">Routing placeholder</span>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">{description}</p>
          <Button className="w-max" size="lg">Ready for approval <ArrowRight className="ml-2 size-4" /></Button>
        </div>
        <Card className="grid min-h-80 place-items-center bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,.22),transparent_12rem)] p-6 text-center">
          <div>
            <div className="mx-auto grid size-20 place-items-center rounded-[24px] bg-primary text-3xl text-white shadow-[0_16px_34px_rgba(255,107,53,.28)]">🍽</div>
            <h2 className="mt-5 font-heading text-2xl font-extrabold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Design system is in place. Feature UX will be implemented after approval.</p>
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
