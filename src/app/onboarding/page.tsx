'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Coffee, QrCode, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  { icon: QrCode, title: 'Scan, pay, eat', body: 'Pay any campus restaurant with a single QR scan. No cash, no cards, no waiting.' },
  { icon: TrendingUp, title: 'Earn cashback on every order', body: 'Get up to 20% back in Plate Points and unlock higher rewards the more you order.' },
  { icon: Coffee, title: 'Built for student life', body: 'Exclusive campus offers, budget-friendly meals, and instant wallet top-ups.' },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const slide = slides[step];
  const isLast = step === slides.length - 1;

  return (
    <main className="safe-screen grid place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(13,159,110,.22),transparent_18rem)] px-5">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto grid size-24 place-items-center rounded-[28px] bg-primary text-white shadow-[0_18px_48px_rgba(13,159,110,.34)]">
          <slide.icon className="size-10" aria-hidden />
        </div>
        <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight">{slide.title}</h1>
        <p className="mt-3 text-muted-foreground">{slide.body}</p>

        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setStep(i)} className={`h-2 rounded-full transition-all ${i === step ? 'w-8 bg-primary' : 'w-2 bg-muted'}`} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>

        {isLast ? (
          <Button asChild size="lg" className="mt-8 w-full"><Link href="/login">Get started <ArrowRight className="ml-2 size-4" /></Link></Button>
        ) : (
          <Button size="lg" className="mt-8 w-full" onClick={() => setStep(step + 1)}>Next <ArrowRight className="ml-2 size-4" /></Button>
        )}
        {!isLast && <button onClick={() => setStep(slides.length - 1)} className="mt-3 text-sm text-muted-foreground">Skip</button>}
      </div>
    </main>
  );
}
