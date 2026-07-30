'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MailCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="safe-screen grid place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(13,159,110,.22),transparent_18rem)] px-5">
      <div className="w-full max-w-md">
        <Link href="/login" className="mb-4 flex items-center gap-2 text-sm font-bold text-muted-foreground"><ArrowLeft className="size-4" /> Back to sign in</Link>

        {sent ? (
          <Card className="p-6 text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-secondary"><MailCheck className="size-8 text-primary" aria-hidden /></div>
            <h1 className="mt-4 font-heading text-2xl font-extrabold tracking-tight">Check your email</h1>
            <p className="mt-2 text-muted-foreground">We sent a password reset link to your university email. It will expire in 30 minutes.</p>
            <Button asChild variant="secondary" className="mt-5 w-full"><Link href="/login">Back to sign in</Link></Button>
          </Card>
        ) : (
          <>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight">Reset password</h1>
            <p className="mt-1 text-muted-foreground">Enter your university email and we'll send you a reset link.</p>
            <Card className="mt-6 p-6">
              <div className="grid gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-bold" htmlFor="reset-email">University email</label>
                  <Input id="reset-email" type="email" placeholder="you@university.ac.za" />
                </div>
                <Button size="lg" onClick={() => setSent(true)}>Send reset link <ArrowRight className="ml-2 size-4" /></Button>
              </div>
            </Card>
          </>
        )}
      </div>
    </main>
  );
}
