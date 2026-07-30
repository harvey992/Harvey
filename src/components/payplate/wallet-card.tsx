import { QrCode } from 'lucide-react';
import { formatRand } from '@/utils/money';

export function WalletCard({ balance, points }: { balance: number; points: number }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] p-6 text-white shadow-[0_20px_50px_rgba(13,159,110,.28)]"
      style={{ background: 'linear-gradient(135deg, #0D9F6E 0%, #0A6B4A 60%, #052e1c 100%)' }}>
      <div className="absolute -right-8 -top-8 size-32 rounded-full bg-white/10" aria-hidden />
      <div className="absolute -bottom-12 -left-6 size-28 rounded-full bg-white/8" aria-hidden />
      <div className="relative flex items-center justify-between">
        <p className="text-sm font-bold tracking-wide text-white/80">PayPlate Balance</p>
        <QrCode className="size-6 text-white/70" aria-hidden />
      </div>
      <strong className="relative mt-3 block font-heading text-4xl font-extrabold tracking-tight">{formatRand(balance)}</strong>
      <div className="relative mt-6 flex items-center justify-between text-sm font-bold">
        <span className="text-white/85">{points.toLocaleString()} Plate Points</span>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs">Scan ready</span>
      </div>
    </div>
  );
}
