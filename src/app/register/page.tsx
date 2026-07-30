'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CircleCheck as CheckCircle2, Eye, EyeOff, IdCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <main className="safe-screen grid place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(13,159,110,.22),transparent_18rem)] px-5 py-8">
      <div className="w-full max-w-md">
        <div className="text-center">
          <div className="mx-auto grid size-16 place-items-center rounded-[24px] bg-primary text-3xl text-white shadow-[0_14px_36px_rgba(13,159,110,.32)]">🍽</div>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight">Create your account</h1>
          <p className="mt-1 text-muted-foreground">Verify your student email to get started</p>
        </div>

        <Card className="mt-6 p-6">
          <div className="grid gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-bold" htmlFor="fullname">Full name</label>
              <Input id="fullname" placeholder="Maya Chen" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold" htmlFor="email">University email</label>
              <Input id="email" type="email" placeholder="you@university.ac.za" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold" htmlFor="studentid">Student ID</label>
              <div className="relative">
                <Input id="studentid" placeholder="e.g. CHNAMA001" className="pl-11" />
                <IdCard className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold" htmlFor="reg-password">Password</label>
              <div className="relative">
                <Input id="reg-password" type={showPassword ? 'text' : 'password'} placeholder="Create a strong password" className="pr-12" />
                <button onClick={() => setShowPassword((s) => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <button onClick={() => setAgreed((a) => !a)} className="mt-0.5 grid size-5 shrink-0 place-items-center rounded border border-border" aria-label="Agree to terms">
                {agreed && <CheckCircle2 className="size-4 text-primary" />}
              </button>
              <span>I agree to the <Link href="/" className="font-bold text-primary">Terms of Service</Link> and <Link href="/" className="font-bold text-primary">Privacy Policy</Link>.</span>
            </label>
            <Button asChild size="lg" disabled={!agreed}><Link href="/home">Create account <ArrowRight className="ml-2 size-4" /></Link></Button>
          </div>
        </Card>

        <p className="mt-4 text-center text-sm text-muted-foreground">Already have an account? <Link href="/login" className="font-bold text-primary">Sign in</Link></p>
      </div>
    </main>
  );
}
