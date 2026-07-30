import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/payplate/app-shell';
import { FoodCard } from '@/components/payplate/food-card';
import { Button } from '@/components/ui/button';
import { getRestaurant, restaurants } from '@/data/payplate';

export default async function MenuPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const restaurant = getRestaurant(id);
  if (!restaurant) notFound();
  const categories = [...new Set(restaurant.menu.map((m) => m.category))];

  return (
    <AppShell>
      <div className="grid gap-5">
        <Link href={`/restaurants/${restaurant.id}`} className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
          <ArrowLeft className="size-4" /> Back to {restaurant.name}
        </Link>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight">Full menu</h1>
        {categories.map((cat) => (
          <div key={cat} className="grid gap-3">
            <h2 className="font-heading text-xl font-extrabold tracking-tight">{cat}</h2>
            {restaurant.menu.filter((m) => m.category === cat).map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ))}
        <Button asChild size="lg" className="mt-2"><Link href="/cart">View cart</Link></Button>
      </div>
    </AppShell>
  );
}

export async function generateStaticParams() {
  return restaurants.map((r) => ({ id: r.id }));
}
