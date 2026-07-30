'use client';

import { useState } from 'react';
import { QrCode, ScanLine } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { student } from '@/data/payplate';
import { formatRand } from '@/utils/money';

export default function ScannerPage() {
  const [scanned, setScanned] = useState(false);

  return (
    <AppShell>
      <div className="mx-auto grid max-w-md gap-6">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight">Scan to Pay</h1>
          <p className="mt-1 text-muted-foreground">Point your camera at a PayPlate QR code at any campus restaurant.</p>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-[28px] border-2 border-primary/30 bg-black/5 dark:bg-black/30">
          <div className="absolute inset-0 grid place-items-center">
            {scanned ? (
              <div className="grid gap-3 text-center">
                <QrCode className="mx-auto size-20 text-primary" aria-hidden />
                <p className="font-bold text-primary">Connected to Saffron Social</p>
                <p className="text-sm text-muted-foreground">Show this screen to the cashier to pay.</p>
              </div>
            ) : (
              <ScanLine className="size-16 text-muted-foreground" aria-hidden />
            )}
          </div>
          <div className="absolute inset-8 rounded-[20px] border-2 border-primary/50" aria-hidden />
          <div className="absolute inset-x-8 top-8 h-0.5 animate-pulse bg-primary" aria-hidden />
        </div>

        <Card className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Wallet balance</span>
            <strong className="font-heading text-2xl font-extrabold text-primary">{formatRand(student.walletBalance)}</strong>
          </div>
          <Button size="lg" className="mt-4 w-full" onClick={() => setScanned((s) => !s)}>
            {scanned ? 'Cancel payment' : 'Simulate scan'}
          </Button>
        </Card>
      </div>
    </AppShell>
  );
}
