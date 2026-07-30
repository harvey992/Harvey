'use client';

import { useState } from 'react';
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EmptyState } from '@/components/ui/empty-state';
import { defaultCart, student } from '@/data/payplate';
import { formatRand } from '@/utils/money';
import type { CartItem } from '@/types/payplate';

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(defaultCart);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const delivery = items.length > 0 ? 25 : 0;
  const cashback = subtotal * 0.1;
  const total = subtotal + delivery;

  const updateQty = (id: string, delta: number) => {
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i).filter((i) => i.quantity > 0));
  };
  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  if (items.length === 0) {
    return (
      <AppShell>
        <EmptyState icon={ShoppingBag} title="Your cart is empty" description="Browse restaurants and add your favourite meals to get started." action="Browse restaurants" />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="grid gap-6 md:grid-cols-[1fr_360px]">
        <div className="grid gap-5">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight">Your cart</h1>
          <div className="grid gap-3">
            {items.map((item) => (
              <Card key={item.id} className="flex items-center gap-3 p-3">
                <div className="size-16 shrink-0 rounded-[14px] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} aria-hidden />
                <div className="flex-1">
                  <p className="font-bold leading-tight">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.restaurant}</p>
                  <strong className="mt-1 block text-primary">{formatRand(item.price * item.quantity)}</strong>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(item.id, -1)} className="grid size-8 place-items-center rounded-full border border-border" aria-label={`Decrease ${item.name} quantity`}><Minus className="size-4" /></button>
                  <span className="w-6 text-center font-bold">{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="grid size-8 place-items-center rounded-full border border-border" aria-label={`Increase ${item.name} quantity`}><Plus className="size-4" /></button>
                  <button onClick={() => removeItem(item.id)} className="grid size-8 place-items-center rounded-full text-error" aria-label={`Remove ${item.name}`}><Trash2 className="size-4" /></button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <aside className="md:sticky md:top-20 md:self-start">
          <Card className="p-5">
            <h2 className="font-heading text-xl font-extrabold tracking-tight">Order summary</h2>
            <div className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-bold">{formatRand(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span className="font-bold">{formatRand(delivery)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Cashback earned</span><Badge className="bg-rewards text-black">+{formatRand(cashback)}</Badge></div>
              <div className="border-t border-border pt-2.5" />
              <div className="flex justify-between text-base"><span className="font-extrabold">Total</span><span className="font-extrabold text-primary">{formatRand(total)}</span></div>
            </div>
            <div className="mt-3 rounded-[16px] bg-secondary p-3 text-sm">
              <p className="font-bold text-primary">Pay with wallet</p>
              <p className="text-muted-foreground">Balance: {formatRand(student.walletBalance)} • You will earn {Math.round(cashback * 10)} Plate Points</p>
            </div>
            <Button size="lg" className="mt-4 w-full">Place order • {formatRand(total)}</Button>
            <p className="mt-2 text-center text-xs text-muted-foreground">Estimated delivery in 20-30 min</p>
          </Card>
        </aside>
      </div>
    </AppShell>
  );
}
