import type { Route } from 'next';
import Link from 'next/link';
import { Bell, ChevronRight, CreditCard, Heart, History, LifeBuoy, Moon, Shield, Store, Sun, UserCog, Wallet } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/payplate/theme-toggle';
import { restaurants, student, favoriteRestaurants } from '@/data/payplate';
import { formatRand } from '@/utils/money';

type ProfileLink = {
  icon: typeof Wallet;
  label: string;
  href: Route;
  detail: string;
  custom?: 'theme';
};

const menuSections: { title: string; items: ProfileLink[] }[] = [
  {
    title: 'Account',
    items: [
      { icon: Wallet, label: 'Wallet & payments', href: '/wallet', detail: formatRand(student.walletBalance) },
      { icon: CreditCard, label: 'Payment methods', href: '/settings', detail: '2 cards' },
      { icon: History, label: 'Order history', href: '/order-history', detail: '12 orders' },
      { icon: Heart, label: 'Favourites', href: '/favorites', detail: `${favoriteRestaurants.length} saved` },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Notifications', href: '/notifications', detail: '3 unread' },
      { icon: Moon, label: 'Appearance', href: '/settings', detail: 'System', custom: 'theme' },
      { icon: Shield, label: 'Security & privacy', href: '/settings', detail: 'Face ID on' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: LifeBuoy, label: 'Help & support', href: '/settings', detail: '' },
      { icon: UserCog, label: 'Settings', href: '/settings', detail: '' },
    ],
  },
];

export default function ProfilePage() {
  const saved = restaurants.filter((r) => favoriteRestaurants.includes(r.id));

  return (
    <AppShell>
      <div className="grid gap-6 md:grid-cols-[1fr_340px]">
        <div className="grid gap-6">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight">Profile</h1>

          <Card className="p-5">
            <div className="flex items-center gap-4">
              <img src={student.avatar} alt="" className="size-20 rounded-full object-cover" />
              <div className="flex-1">
                <h2 className="font-heading text-xl font-extrabold tracking-tight">{student.name}</h2>
                <p className="text-sm text-muted-foreground">{student.email}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {student.verified && <Badge className="bg-success">Student verified</Badge>}
                  <Badge className="bg-rewards text-black">Level {student.rewardLevel} Senior</Badge>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-[14px] bg-secondary p-3">
                <p className="text-xs text-muted-foreground">Points</p>
                <p className="font-bold">{student.rewardsPoints.toLocaleString()}</p>
              </div>
              <div className="rounded-[14px] bg-secondary p-3">
                <p className="text-xs text-muted-foreground">Orders</p>
                <p className="font-bold">12</p>
              </div>
              <div className="rounded-[14px] bg-secondary p-3">
                <p className="text-xs text-muted-foreground">Cashback</p>
                <p className="font-bold">{formatRand(35.6)}</p>
              </div>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Store className="size-4" aria-hidden />{student.university}</p>
          </Card>

          {menuSections.map((section) => (
            <div key={section.title} className="grid gap-3">
              <h2 className="font-heading text-lg font-extrabold tracking-tight">{section.title}</h2>
              <Card className="divide-y divide-border p-0">
                {section.items.map((item) => (
                  <Link key={item.label} href={item.href} className="flex items-center gap-3 p-4 transition-colors hover:bg-muted">
                    <item.icon className="size-5 text-primary" aria-hidden />
                    <span className="flex-1 font-bold">{item.label}</span>
                    {'custom' in item && item.custom === 'theme' ? <ThemeToggle compact /> : <span className="text-sm text-muted-foreground">{item.detail}</span>}
                    <ChevronRight className="size-4 text-muted-foreground" aria-hidden />
                  </Link>
                ))}
              </Card>
            </div>
          ))}
        </div>

        <aside className="grid gap-6">
          <Card className="p-5">
            <h3 className="font-heading text-lg font-extrabold tracking-tight">Saved restaurants</h3>
            <div className="mt-3 grid gap-3">
              {saved.map((r) => (
                <Link key={r.id} href={`/restaurants/${r.id}`} className="flex items-center gap-3">
                  <div className="size-12 shrink-0 rounded-[14px] bg-cover bg-center" style={{ backgroundImage: `url(${r.image})` }} aria-hidden />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-bold">{r.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{r.cuisine} • {r.rewardPercent}% back</p>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </AppShell>
  );
}
