import { Gift } from 'lucide-react';
import { rewardTiers } from '@/data/payplate';

export function RewardCard({ level }: { level: number }) {
  const tier = rewardTiers.find((t) => t.level === level) ?? rewardTiers[0];
  const nextTier = rewardTiers.find((t) => t.level === level + 1);
  return (
    <div className="rounded-[20px] border border-border bg-card p-5 shadow-[0_8px_24px_rgba(15,23,42,.06)] dark:shadow-black/20">
      <div className="flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-[16px] text-white shadow-sm" style={{ backgroundColor: tier.color }}>
          <Gift className="size-6" aria-hidden />
        </div>
        <div>
          <p className="text-sm font-bold text-muted-foreground">Reward Level</p>
          <h3 className="font-heading text-xl font-extrabold tracking-tight">Level {tier.level} — {tier.name}</h3>
        </div>
      </div>
      {nextTier ? (
        <p className="mt-3 text-sm text-muted-foreground">{(nextTier.minPoints - 2500).toLocaleString()} points until Level {nextTier.level} — {nextTier.name}</p>
      ) : (
        <p className="mt-3 text-sm text-muted-foreground">You are at the highest level. Enjoy all perks!</p>
      )}
      <ul className="mt-3 flex flex-wrap gap-2">
        {tier.perks.map((perk) => (
          <li key={perk} className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">{perk}</li>
        ))}
      </ul>
    </div>
  );
}
