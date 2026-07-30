'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { RestaurantCard } from '@/components/payplate/restaurant-card';
import { Input } from '@/components/ui/input';
import { EmptyState } from '@/components/ui/empty-state';
import { restaurants, foodCategories } from '@/data/payplate';

const filters = [
  { id: 'open', label: 'Open now' },
  { id: 'rewards', label: 'Best rewards' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'fast', label: 'Fastest' },
];

export default function DiscoverPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (id: string) =>
    setActiveFilters((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      if (query && !r.name.toLowerCase().includes(query.toLowerCase()) && !r.cuisine.toLowerCase().includes(query.toLowerCase())) return false;
      if (activeCategory !== 'all' && !r.cuisine.toLowerCase().includes(activeCategory) && !r.menu.some((m) => m.category.toLowerCase().includes(activeCategory))) return false;
      if (activeFilters.includes('open') && !r.open) return false;
      if (activeFilters.includes('vegetarian') && !r.vegetarian) return false;
      if (activeFilters.includes('rewards') && r.rewardPercent < 12) return false;
      if (activeFilters.includes('fast') && r.distanceMinutes > 10) return false;
      return true;
    });
  }, [query, activeCategory, activeFilters]);

  return (
    <AppShell>
      <div className="grid gap-6">
        <div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight">Discover</h1>
          <p className="mt-1 text-muted-foreground">Find the best campus food, filtered your way.</p>
        </div>

        <label className="relative block">
          <span className="sr-only">Search restaurants</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input className="pl-11" placeholder="Search restaurants or cuisine" type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>

        <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
          {foodCategories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-bold transition-colors ${activeCategory === cat.id ? 'border-primary bg-primary text-white' : 'border-border bg-card hover:bg-muted'}`}>
              <span aria-hidden>{cat.icon}</span>{cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f.id} onClick={() => toggleFilter(f.id)} className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${activeFilters.includes(f.id) ? 'border-primary bg-secondary text-primary' : 'border-border bg-card hover:bg-muted'}`}>
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon={Search} title="No restaurants found" description="Try adjusting your search or filters to find what you're craving." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
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
