import { SearchBar } from '@/components/ui/search-bar';
import { Chip } from '@/components/ui/chip';
import { AppShell } from '@/components/payplate/app-shell';
import { RestaurantCard } from '@/components/payplate/restaurant-card';
import { RewardCard } from '@/components/payplate/reward-card';
import { WalletCard } from '@/components/payplate/wallet-card';

export default function HomePage() {
  return (
    <AppShell>
      <section className="grid gap-5 md:grid-cols-[1fr_420px]">
        <div className="grid gap-5">
          <div><p className="text-sm font-bold text-primary">Good afternoon, Maya</p><h1 className="font-heading text-4xl font-extrabold tracking-tight">What are you craving near campus?</h1></div>
          <SearchBar />
          <div className="flex gap-2 overflow-x-auto pb-1"><Chip>Open now</Chip><Chip>Under R120</Chip><Chip>Rewards</Chip><Chip>Vegetarian</Chip></div>
          <RestaurantCard />
        </div>
        <aside className="grid gap-5"><WalletCard /><RewardCard /></aside>
      </section>
    </AppShell>
  );
}
