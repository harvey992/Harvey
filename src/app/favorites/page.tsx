import Link from 'next/link';
import { Heart } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { RestaurantCard } from '@/components/payplate/restaurant-card';
import { EmptyState } from '@/components/ui/empty-state';
import { restaurants, favoriteRestaurants } from '@/data/payplate';

export default function FavoritesPage() {
  const favorites = restaurants.filter((r) => favoriteRestaurants.includes(r.id));

  return (
    <AppShell>
      <div className="grid gap-6">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight">Favourites</h1>
        {favorites.length === 0 ? (
          <EmptyState icon={Heart} title="No favourites yet" description="Tap the heart on any restaurant to save it here for quick access." action="Discover restaurants" />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((r) => (
              <Link key={r.id} href={`/restaurants/${r.id}`}>
                <RestaurantCard restaurant={r} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
