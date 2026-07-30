import { Bell, CreditCard, Gift, Store, Wrench } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EmptyState } from '@/components/ui/empty-state';
import { notifications } from '@/data/payplate';
import type { NotificationItem } from '@/types/payplate';

const iconFor = (type: NotificationItem['type']) => {
  if (type === 'payment') return { Icon: CreditCard, color: 'text-primary' };
  if (type === 'reward') return { Icon: Gift, color: 'text-rewards' };
  if (type === 'restaurant') return { Icon: Store, color: 'text-primary' };
  return { Icon: Wrench, color: 'text-muted-foreground' };
};

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read);
  const read = notifications.filter((n) => n.read);

  return (
    <AppShell>
      <div className="mx-auto grid max-w-2xl gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight">Notifications</h1>
          {unread.length > 0 && <Badge className="bg-primary">{unread.length} new</Badge>}
        </div>

        {unread.length > 0 && (
          <div className="grid gap-3">
            <h2 className="font-heading text-lg font-extrabold tracking-tight">New</h2>
            {unread.map((n) => {
              const { Icon, color } = iconFor(n.type);
              return (
                <Card key={n.id} className="flex items-start gap-3 border-primary/30 p-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary"><Icon className={`size-5 ${color}`} aria-hidden /></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold">{n.title}</p>
                      <span className="size-2 rounded-full bg-primary" aria-label="Unread" />
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">{n.body}</p>
                    <p className="mt-1.5 text-xs text-muted-foreground">{n.time}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <div className="grid gap-3">
          <h2 className="font-heading text-lg font-extrabold tracking-tight">Earlier</h2>
          {read.length > 0 ? read.map((n) => {
            const { Icon, color } = iconFor(n.type);
            return (
              <Card key={n.id} className="flex items-start gap-3 p-4 opacity-80">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-muted"><Icon className={`size-5 ${color}`} aria-hidden /></div>
                <div className="flex-1">
                  <p className="font-bold">{n.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{n.body}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{n.time}</p>
                </div>
              </Card>
            );
          }) : <EmptyState icon={Bell} title="All caught up" description="You have no earlier notifications." />}
        </div>
      </div>
    </AppShell>
  );
}
