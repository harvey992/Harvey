import Link from 'next/link';
import { History, RotateCcw, Star } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { recentOrders, transactions } from '@/data/payplate';
import { formatRand } from '@/utils/money';

export default function OrderHistoryPage() {
  const orders = recentOrders.map((item, i) => ({
    id: `order-${i}`,
    item,
    date: ['Today', 'Yesterday', '3 days ago'][i] ?? 'Earlier',
    status: i === 0 ? 'Delivered' : 'Completed',
    total: item.price + 25,
  }));

  return (
    <AppShell>
      <div className="mx-auto grid max-w-2xl gap-6">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight">Order history</h1>
        {orders.length === 0 ? (
          <EmptyState icon={History} title="No orders yet" description="Your past orders will appear here with reorder and receipt options." action="Browse restaurants" />
        ) : (
          <div className="grid gap-3">
            {orders.map((order) => (
              <Card key={order.id} className="p-4">
                <div className="flex items-center gap-3">
                  <div className="size-16 shrink-0 rounded-[14px] bg-cover bg-center" style={{ backgroundImage: `url(${order.item.image})` }} aria-hidden />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold leading-tight">{order.item.restaurant}</p>
                      <Badge className="bg-success">{order.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{order.item.name}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm font-bold text-primary">{formatRand(order.total)}</span>
                      <span className="text-xs text-muted-foreground">{order.date}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="secondary" className="flex-1"><RotateCcw className="mr-1.5 size-3.5" /> Reorder</Button>
                  <Button size="sm" variant="secondary" className="flex-1"><Star className="mr-1.5 size-3.5" /> Rate</Button>
                  <Link href="/wallet" className="flex-1"><Button size="sm" variant="secondary" className="w-full">Receipt</Button></Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
