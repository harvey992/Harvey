'use client';

import { useState } from 'react';
import { ArrowDownLeft, ArrowUpRight, Plus, TrendingUp, X } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { WalletCard } from '@/components/payplate/wallet-card';
import { TransactionCard } from '@/components/payplate/transaction-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Modal } from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { student, transactions } from '@/data/payplate';
import { formatRand } from '@/utils/money';

const spendingByCategory = [
  { label: 'Food', amount: 297, color: '#0D9F6E' },
  { label: 'Coffee', amount: 84, color: '#22C55E' },
  { label: 'Snacks', amount: 52, color: '#FBBF24' },
];
const totalSpent = spendingByCategory.reduce((s, c) => s + c.amount, 0);

export default function WalletPage() {
  const [amount, setAmount] = useState('200');

  return (
    <AppShell>
      <div className="grid gap-6 md:grid-cols-[1fr_380px]">
        <div className="grid gap-6">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight">Wallet</h1>

          <WalletCard balance={student.walletBalance} points={student.rewardsPoints} />

          <div className="grid grid-cols-3 gap-3">
            <Modal title="Top up wallet" trigger="Top up">
              <div className="grid gap-4">
                <p className="text-sm text-muted-foreground">Choose or enter an amount in Rand.</p>
                <div className="grid grid-cols-4 gap-2">
                  {['100', '200', '500', '1000'].map((v) => (
                    <button key={v} onClick={() => setAmount(v)} className={`rounded-[14px] border px-3 py-2 text-sm font-bold ${amount === v ? 'border-primary bg-secondary text-primary' : 'border-border'}`}>{formatRand(Number(v))}</button>
                  ))}
                </div>
                <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} aria-label="Custom amount" />
                <Button size="lg">Add {formatRand(Number(amount) || 0)}</Button>
              </div>
            </Modal>
            <Modal title="Transfer" trigger="Transfer">
              <div className="grid gap-4">
                <Input placeholder="Recipient student email" aria-label="Recipient" />
                <Input type="number" placeholder="Amount in Rand" aria-label="Amount" />
                <Button size="lg">Send transfer</Button>
              </div>
            </Modal>
            <Modal title="Request refund" trigger="Refund">
              <div className="grid gap-4">
                <Input placeholder="Order reference" aria-label="Order reference" />
                <textarea className="min-h-24 w-full rounded-[20px] border bg-card px-4 py-3 text-sm" placeholder="Reason for refund" aria-label="Reason" />
                <Button size="lg">Submit request</Button>
              </div>
            </Modal>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-extrabold tracking-tight">Transactions</h2>
              <Button variant="ghost" size="sm">Filter</Button>
            </div>
            <div className="mt-3 grid gap-2.5">
              {transactions.map((t) => <TransactionCard key={t.id} transaction={t} />)}
            </div>
          </div>
        </div>

        <aside className="grid gap-6">
          <Card className="p-5">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-5 text-primary" aria-hidden />
              <h3 className="font-heading text-lg font-extrabold tracking-tight">Spending analytics</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">This month you spent {formatRand(totalSpent)}.</p>
            <div className="mt-4 space-y-3">
              {spendingByCategory.map((cat) => (
                <div key={cat.label}>
                  <div className="flex justify-between text-sm font-bold">
                    <span>{cat.label}</span><span>{formatRand(cat.amount)}</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full" style={{ width: `${(cat.amount / totalSpent) * 100}%`, backgroundColor: cat.color }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-heading text-lg font-extrabold tracking-tight">Quick stats</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-[14px] bg-secondary p-4">
                <ArrowDownLeft className="mx-auto size-5 text-success" aria-hidden />
                <p className="mt-1 text-xs text-muted-foreground">Top-ups</p>
                <p className="font-bold">{formatRand(400)}</p>
              </div>
              <div className="rounded-[14px] bg-secondary p-4">
                <ArrowUpRight className="mx-auto size-5 text-error" aria-hidden />
                <p className="mt-1 text-xs text-muted-foreground">Spent</p>
                <p className="font-bold">{formatRand(297)}</p>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </AppShell>
  );
}
