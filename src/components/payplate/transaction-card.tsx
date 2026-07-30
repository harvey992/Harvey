import { ArrowDownLeft, ArrowUpRight, Gift, RotateCcw } from 'lucide-react';
import { formatRand } from '@/utils/money';
import type { WalletTransaction } from '@/types/payplate';

const iconFor = (type: WalletTransaction['type']) => {
  if (type === 'payment') return { Icon: ArrowUpRight, color: 'text-error' };
  if (type === 'topup') return { Icon: ArrowDownLeft, color: 'text-success' };
  if (type === 'reward') return { Icon: Gift, color: 'text-rewards' };
  return { Icon: RotateCcw, color: 'text-success' };
};

export function TransactionCard({ transaction }: { transaction: WalletTransaction }) {
  const { Icon, color } = iconFor(transaction.type);
  const isCredit = transaction.type !== 'payment';
  return (
    <div className="flex items-center gap-3 rounded-[18px] border border-border bg-card p-3.5">
      <div className="grid size-11 shrink-0 place-items-center rounded-full bg-muted">
        <Icon className={`size-5 ${color}`} aria-hidden />
      </div>
      <div className="flex-1">
        <p className="font-bold leading-tight">{transaction.merchant}</p>
        <p className="text-xs text-muted-foreground">{transaction.createdAt} • {transaction.category}</p>
      </div>
      <strong className={isCredit ? 'text-success' : 'text-foreground'}>{isCredit ? '+' : '-'}{formatRand(transaction.total.amount)}</strong>
    </div>
  );
}
