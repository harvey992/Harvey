import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { formatRand } from '@/utils/money';
import type { Restaurant } from '@/types/payplate';

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Card className="group overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative h-44 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,.62), transparent 55%), url(${restaurant.image})` }}>
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge>{restaurant.rewardPercent}% back</Badge>
          {restaurant.studentOffer ? <Badge className="bg-rewards text-black">{restaurant.studentOffer}</Badge> : null}
        </div>
        {!restaurant.open && <div className="absolute right-3 top-3"><Badge className="bg-black/70 text-white">Closed</Badge></div>}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-extrabold tracking-tight">{restaurant.name}</h3>
          <span className="flex items-center gap-1 text-sm font-bold">
            <Star className="size-4 fill-primary text-primary" aria-hidden />
            {restaurant.rating}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{restaurant.cuisine} • {formatRand(restaurant.priceForTwo)} for two • {restaurant.deliveryMinutes} min</p>
      </div>
    </Card>
  );
}
