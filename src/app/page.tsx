import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function SplashPage() {
  return (
    <main className="safe-screen grid place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(255,107,53,.28),transparent_18rem)] px-5">
      <Card className="w-full max-w-md p-8 text-center">
        <div className="mx-auto grid size-24 place-items-center rounded-[28px] bg-primary text-5xl text-white shadow-[0_18px_48px_rgba(255,107,53,.34)]">🍽</div>
        <h1 className="mt-6 font-heading text-5xl font-extrabold tracking-tight">PayPlate</h1>
        <p className="mt-3 text-muted-foreground">Campus dining, QR payments, Rand wallet, and student rewards in one premium app.</p>
        <Button asChild size="lg" className="mt-8 w-full"><Link href="/home">Preview foundation <ArrowRight className="ml-2 size-4" /></Link></Button>
      </Card>
    </main>
  );
}
