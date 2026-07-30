import { Gift, Sparkles } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { rewardOffers, rewardTiers, student } from '@/data/payplate';
import { formatRand } from '@/utils/money';

export default function RewardsPage() {
  const currentTier = rewardTiers.find((t) => t.level === student.rewardLevel)!;
  const nextTier = rewardTiers.find((t) => t.level === student.rewardLevel + 1);
  const progress = nextTier
    ? ((student.rewardsPoints - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100
    : 100;

  return (
    <AppShell>
      <div className="grid gap-6 md:grid-cols-[1fr_360px]">
        <div className="grid gap-6">
          <div>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight">Rewards</h1>
            <p className="mt-1 text-muted-foreground">Earn Plate Points on every order and redeem for free food.</p>
          </div>

          <Card className="overflow-hidden p-0">
            <div className="p-6 text-white" style={{ background: 'linear-gradient(135deg, #0D9F6E, #0A6B4A)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80">Your points</p>
                  <strong className="font-heading text-4xl font-extrabold">{student.rewardsPoints.toLocaleString()}</strong>
                </div>
                <div className="grid size-14 place-items-center rounded-[20px] bg-white/20">
                  <Sparkles className="size-7" aria-hidden />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm font-bold">
                  <span>Level {currentTier.level} — {currentTier.name}</span>
                  {nextTier ? <span>Level {nextTier.level} — {nextTier.name}</span> : <span>Max level</span>}
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/25">
                  <div className="h-full rounded-full bg-white" style={{ width: `${Math.min(progress, 100)}%` }} />
                </div>
                {nextTier && <p className="mt-2 text-sm text-white/85">{(nextTier.minPoints - student.rewardsPoints).toLocaleString()} points to next level</p>}
              </div>
            </div>
          </Card>

          <div>
            <h2 className="font-heading text-xl font-extrabold tracking-tight">Redeem your points</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {rewardOffers.map((offer) => {
                const affordable = student.rewardsPoints >= offer.pointsCost;
                return (
                  <Card key={offer.id} className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid size-12 place-items-center rounded-[16px] bg-secondary text-2xl">{offer.icon}</div>
                      <div className="flex-1">
                        <p className="font-bold leading-tight">{offer.title}</p>
                        <p className="text-xs text-muted-foreground">{offer.partner}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{offer.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-bold text-primary">{offer.pointsCost} pts</span>
                      <Button size="sm" variant={affordable ? 'primary' : 'secondary'} disabled={!affordable}>{affordable ? 'Redeem' : 'Not enough'}</Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="grid gap-6">
          <Card className="p-5">
            <div className="flex items-center gap-2">
              <Gift className="size-5 text-primary" aria-hidden />
              <h3 className="font-heading text-lg font-extrabold tracking-tight">All reward tiers</h3>
            </div>
            <div className="mt-4 grid gap-3">
              {rewardTiers.map((tier) => (
                <div key={tier.level} className={`rounded-[16px] border p-3 ${tier.level === student.rewardLevel ? 'border-primary bg-secondary' : 'border-border'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Level {tier.level} — {tier.name}</span>
                    {tier.level === student.rewardLevel && <Badge>Current</Badge>}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{tier.minPoints.toLocaleString()}+ points</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {tier.perks.map((perk) => <li key={perk} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-bold">{perk}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-heading text-lg font-extrabold tracking-tight">Cashback this month</h3>
            <strong className="mt-2 block font-heading text-3xl font-extrabold text-primary">{formatRand(35.6)}</strong>
            <p className="text-sm text-muted-foreground">Across 7 orders at 5 partner restaurants.</p>
          </Card>
        </aside>
      </div>
    </AppShell>
  );
}
