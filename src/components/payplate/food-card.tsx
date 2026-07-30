import { Card } from '@/components/ui/card';

export function FoodCard() {
  return <Card className="flex items-center gap-3 p-3"><div className="size-16 rounded-[18px] bg-[url('https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80')] bg-cover" /><div className="flex-1"><p className="font-bold">Spicy miso ramen</p><p className="text-sm text-muted-foreground">Egg, nori, chilli oil</p></div><strong>R86</strong></Card>;
}
