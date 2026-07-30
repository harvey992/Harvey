import { ArrowRight, Plus, QrCode, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { AppShell } from '@/components/payplate/app-shell';
import { RestaurantCard } from '@/components/payplate/restaurant-card';
import { WalletCard } from '@/components/payplate/wallet-card';
import { RewardCard } from '@/components/payplate/reward-card';
import { SearchBar } from '@/components/ui/search-bar';
import { Card } from '@/components/ui/card';
import { restaurants, foodCategories, student } from '@/data/payplate';
import { formatRand } from '@/utils/money';

export default function HomePage() {
  const openRestaurants = restaurants.filter((r) => r.open);
  const popularItems = restaurants.flatMap((r) => r.menu).filter((m) => m.popular).slice(0, 6);

  return (
    <AppShell>
      <section className="grid gap-6 md:grid-cols-[1fr_380px]">
        <div className="grid gap-6">
          <div>
            <p className="text-sm font-bold text-primary">Good afternoon, {student.name.split(' ')[0]}</p>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight">What are you craving today?</h1>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <WalletCard balance={student.walletBalance} points={student.rewardsPoints} />
            <div className="grid grid-cols-2 gap-3">
              <Link href="/scanner" className="group">
                <Card className="grid h-full place-items-center gap-2 p-4 text-center transition-transform group-hover:-translate-y-0.5">
                  <QrCode className="size-7 text-primary" aria-hidden />
                  <span className="text-sm font-bold">Scan to Pay</span>
                </Card>
              </Link>
              <Link href="/wallet" className="group">
                <Card className="grid h-full place-items-center gap-2 p-4 text-center transition-transform group-hover:-translate-y-0.5">
                  <Plus className="size-7 text-primary" aria-hidden />
                  <span className="text-sm font-bold">Top Up</span>
                </Card>
              </Link>
              <Link href="/rewards" className="group">
                <Card className="grid h-full place-items-center gap-2 p-4 text-center transition-transform group-hover:-translate-y-0.5">
                  <TrendingUp className="size-7 text-primary" aria-hidden />
                  <span className="text-sm font-bold">Rewards</span>
                </Card>
              </Link>
              <Link href="/discover" className="group">
                <Card className="grid h-full place-items-center gap-2 p-4 text-center transition-transform group-hover:-translate-y-0.5">
                  <ArrowRight className="size-7 text-primary" aria-hidden />
                  <span className="text-sm font-bold">Discover</span>
                </Card>
              </Link>
            </div>
          </div>

          <SearchBar />

          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            {foodCategories.map((cat) => (
              <button key={cat.id} className="flex shrink-0 flex-col items-center gap-1.5 rounded-[18px] border border-border bg-card px-4 py-3 text-center transition-colors hover:border-primary hover:bg-secondary">
                <span className="text-2xl" aria-hidden>{cat.icon}</span>
                <span className="text-xs font-bold">{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight">Featured restaurants</h2>
            <Link href="/discover" className="text-sm font-bold text-primary">See all</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {openRestaurants.slice(0, 4).map((r) => (
              <Link key={r.id} href={`/restaurants/${r.id}`}>
                <RestaurantCard restaurant={r} />
              </Link>
            ))}
          </div>

          <h2 className="font-heading text-2xl font-extrabold tracking-tight">Popular right now</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {popularItems.map((item) => (
              <div key={item.id} className="w-44 shrink-0 overflow-hidden rounded-[20px] border border-border bg-card">
                <div className="h-28 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} aria-hidden />
                <div className="p-3">
                  <p className="truncate font-bold">{item.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{item.description}</p>
                  <strong className="mt-1.5 block text-primary">{formatRand(item.price)}</strong>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl font-extrabold tracking-tight">Student offers</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {restaurants.filter((r) => r.studentOffer).slice(0, 4).map((r) => (
              <Card key={r.id} className="flex items-center gap-3 p-4">
                <div className="size-12 shrink-0 rounded-[14px] bg-cover bg-center" style={{ backgroundImage: `url(${r.image})` }} aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{r.name}</p>
                  <p className="truncate text-sm text-primary">{r.studentOffer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <aside className="grid gap-6">
          <RewardCard level={student.rewardLevel} />
          <Card className="p-5">
            <h3 className="font-heading text-lg font-extrabold tracking-tight">This week</h3>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-[14px] bg-secondary p-3">
                <p className="text-xs text-muted-foreground">Spent</p>
                <p className="font-bold text-primary">{formatRand(297)}</p>
              </div>
              <div className="rounded-[14px] bg-secondary p-3">
                <p className="text-xs text-muted-foreground">Cashback</p>
                <p className="font-bold text-primary">{formatRand(35.6)}</p>
              </div>
              <div className="rounded-[14px] bg-secondary p-3">
                <p className="text-xs text-muted-foreground">Orders</p>
                <p className="font-bold text-primary">7</p>
              </div>
            </div>
          </Card>
        </aside>
      </section>
    </AppShell>
  );
}
