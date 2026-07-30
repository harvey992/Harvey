import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, Star } from 'lucide-react';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/payplate/app-shell';
import { FoodCard } from '@/components/payplate/food-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getRestaurant } from '@/data/payplate';
import { formatRand } from '@/utils/money';

export default async function RestaurantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const restaurant = getRestaurant(id);
  if (!restaurant) notFound();

  const categories = [...new Set(restaurant.menu.map((m) => m.category))];
  const reviews = [
    { name: 'Thabo M.', rating: 5, text: 'Best ramen on campus. Delivery was fast and the app payment was seamless.', time: '2 days ago' },
    { name: 'Aisha K.', rating: 5, text: 'The cashback is real — got R9 back on my order. Food was incredible.', time: '1 week ago' },
    { name: 'Liam O.', rating: 4, text: 'Great quality, slightly slow on a Friday night but worth the wait.', time: '2 weeks ago' },
  ];

  return (
    <AppShell>
      <div className="relative -mx-4 -mt-5 h-60 bg-cover bg-center md:rounded-t-[28px]" style={{ backgroundImage: `linear-gradient(to top, var(--background), transparent 60%), url(${restaurant.coverImage})` }}>
        <Link href="/discover" className="absolute left-4 top-4 grid size-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md" aria-label="Back">
          <ArrowLeft className="size-5" />
        </Link>
        <div className="absolute right-4 top-4 flex gap-2">
          <Badge className={restaurant.open ? 'bg-success' : 'bg-error'}>{restaurant.open ? 'Open now' : 'Closed'}</Badge>
        </div>
      </div>

      <section className="mt-4 grid gap-5 md:grid-cols-[1fr_320px]">
        <div className="grid gap-5">
          <div>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight">{restaurant.name}</h1>
            <p className="mt-1 text-muted-foreground">{restaurant.cuisine}</p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5 font-bold"><Star className="size-4 fill-primary text-primary" aria-hidden />{restaurant.rating} ({restaurant.reviewCount} reviews)</span>
              <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="size-4" aria-hidden />{restaurant.deliveryMinutes} min</span>
              <span className="flex items-center gap-1.5 text-muted-foreground"><MapPin className="size-4" aria-hidden />{restaurant.distanceMinutes} min walk</span>
            </div>
            {restaurant.studentOffer && (
              <div className="mt-3 rounded-[16px] bg-secondary p-3 text-sm font-bold text-primary">{restaurant.studentOffer}</div>
            )}
          </div>

          {categories.map((cat) => (
            <div key={cat} className="grid gap-3">
              <h2 className="font-heading text-xl font-extrabold tracking-tight">{cat}</h2>
              {restaurant.menu.filter((m) => m.category === cat).map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          ))}

          <div className="grid gap-3">
            <h2 className="font-heading text-xl font-extrabold tracking-tight">Reviews</h2>
            {reviews.map((rev) => (
              <Card key={rev.name} className="p-4">
                <div className="flex items-center justify-between">
                  <p className="font-bold">{rev.name}</p>
                  <span className="flex items-center gap-0.5 text-sm font-bold">
                    {Array.from({ length: rev.rating }).map((_, i) => <Star key={i} className="size-3.5 fill-primary text-primary" aria-hidden />)}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{rev.text}</p>
                <p className="mt-2 text-xs text-muted-foreground">{rev.time}</p>
              </Card>
            ))}
          </div>
        </div>

        <aside className="md:sticky md:top-20 md:self-start">
          <Card className="p-5">
            <h3 className="font-heading text-lg font-extrabold tracking-tight">Order summary</h3>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Avg for two</span><span className="font-bold">{formatRand(restaurant.priceForTwo)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Cashback rate</span><span className="font-bold text-primary">{restaurant.rewardPercent}%</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span className="font-bold">{restaurant.deliveryMinutes} min</span></div>
            </div>
            <Button asChild className="mt-4 w-full" size="lg"><Link href="/cart">View cart <ArrowLeft className="ml-2 size-4 rotate-180" /></Link></Button>
          </Card>
        </aside>
      </section>
    </AppShell>
  );
}
