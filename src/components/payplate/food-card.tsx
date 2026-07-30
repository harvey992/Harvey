import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatRand } from '@/utils/money';
import type { MenuItem } from '@/types/payplate';

export function FoodCard({ item, onAdd }: { item: MenuItem; onAdd?: () => void }) {
  return (
    <div className="flex items-center gap-4 rounded-[20px] border border-border bg-card p-3 transition-shadow hover:shadow-[0_10px_28px_rgba(15,23,42,.08)]">
      <div className="size-20 shrink-0 rounded-[18px] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} aria-hidden />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-bold leading-tight">{item.name}</p>
          {item.popular ? <Badge className="bg-rewards text-black">Popular</Badge> : null}
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
        <strong className="mt-1.5 block text-primary">{formatRand(item.price)}</strong>
      </div>
      <Button size="sm" variant="secondary" className="shrink-0 rounded-full px-3" aria-label={`Add ${item.name} to cart`} onClick={onAdd}>
        <Plus className="size-4" />
      </Button>
    </div>
  );
}
