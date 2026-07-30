import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function EmptyState({ icon: Icon, title, description, action }: { icon: LucideIcon; title: string; description: string; action?: string }) {
  return (
    <Card className="grid gap-3 p-6 text-center">
      <Icon className="mx-auto size-9 text-primary" aria-hidden />
      <h2 className="font-heading text-xl font-extrabold">{title}</h2>
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      {action ? <Button variant="secondary">{action}</Button> : null}
    </Card>
  );
}
