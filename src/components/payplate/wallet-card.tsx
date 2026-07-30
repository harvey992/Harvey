import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function WalletCard() {
  return (
    <Card className="overflow-hidden bg-[radial-gradient(circle_at_90%_0%,rgba(255,107,53,.85),transparent_48%),linear-gradient(135deg,#111,#36312d)] p-6 text-white">
      <Badge>Apple Wallet inspired</Badge>
      <p className="mt-8 text-sm text-white/70">PayPlate Balance</p>
      <strong className="font-heading text-4xl tracking-tight">R 428.40</strong>
      <div className="mt-6 flex justify-between text-sm font-bold text-white/85"><span>2,840 Plate Points</span><span>Scan ready</span></div>
    </Card>
  );
}
