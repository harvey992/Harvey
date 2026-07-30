import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function RestaurantCard() {
  return (
    <Card className="overflow-hidden">
      <div className="flex h-40 items-start justify-between bg-[linear-gradient(to_top,rgba(0,0,0,.52),transparent),url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center p-3">
        <Badge>12% back</Badge><Badge>8 min</Badge>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between"><h3 className="font-heading text-lg font-extrabold">Saffron Social</h3><span className="flex items-center gap-1 text-sm font-bold"><Star className="size-4 fill-primary text-primary" />4.9</span></div>
        <p className="mt-1 text-sm text-muted-foreground">Modern Indian • R90 for two • QR pay enabled</p>
      </div>
    </Card>
  );
}
