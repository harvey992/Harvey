import { Gift } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function RewardCard() {
  return (
    <Card className="glass-badge grid gap-2 p-5 text-foreground shadow-[0_18px_48px_rgba(60,38,25,.12)] dark:text-white">
      <Gift className="size-7 text-primary" />
      <h3 className="font-heading text-xl font-extrabold">Level 4 Rewards</h3>
      <p className="text-sm text-muted-foreground">320 points until your next free entree.</p>
    </Card>
  );
}
