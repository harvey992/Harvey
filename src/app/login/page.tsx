'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, EyeOff, FingerprintPattern as Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="safe-screen grid place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(13,159,110,.22),transparent_18rem)] px-5">
      <div className="w-full max-w-md">
        <div className="text-center">
          <div className="mx-auto grid size-16 place-items-center rounded-[24px] bg-primary text-3xl text-white shadow-[0_14px_36px_rgba(13,159,110,.32)]">🍽</div>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight">Welcome back</h1>
          <p className="mt-1 text-muted-foreground">Sign in to your PayPlate account</p>
        </div>

        <Card className="mt-6 p-6">
          <div className="grid gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-bold" htmlFor="email">University email</label>
              <Input id="email" type="email" placeholder="you@university.ac.za" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold" htmlFor="password">Password</label>
              <div className="relative">
                <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="Enter password" className="pr-12" />
                <button onClick={() => setShowPassword((s) => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm font-bold text-primary">Forgot password?</Link>
            </div>
            <Button asChild size="lg"><Link href="/home">Sign in <ArrowRight className="ml-2 size-4" /></Link></Button>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
            </div>
            <Button variant="secondary" size="lg"><Fingerprint className="mr-2 size-5" /> Sign in with passkey</Button>
          </div>
        </Card>

        <p className="mt-4 text-center text-sm text-muted-foreground">No account? <Link href="/register" className="font-bold text-primary">Create one</Link></p>
      </div>
    </main>
  );
}
