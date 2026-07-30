import { Card } from '@/components/ui/card';

export function TransactionCard() {
  return <Card className="flex items-center justify-between p-4"><div><p className="font-bold">Nori & Noodles</p><p className="text-sm text-muted-foreground">Today • Wallet payment</p></div><strong>R135</strong></Card>;
}
