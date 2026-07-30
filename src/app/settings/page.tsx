'use client';

import { Bell, CreditCard, Globe, Lock, Moon, Shield, Smartphone, Trash2 } from 'lucide-react';
import { AppShell } from '@/components/payplate/app-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/payplate/theme-toggle';

const settingsGroups = [
  {
    title: 'Account',
    items: [
      { icon: CreditCard, label: 'Payment methods', detail: 'Visa •• 4242, Mastercard •• 8831', action: 'Manage' },
      { icon: Smartphone, label: 'Devices', detail: '2 active devices', action: 'View' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Push notifications', detail: 'Payments, rewards, offers', action: 'On' },
      { icon: Globe, label: 'Language', detail: 'English (South Africa)', action: 'Change' },
    ],
  },
  {
    title: 'Security',
    items: [
      { icon: Lock, label: 'Change password', detail: 'Last changed 2 months ago', action: 'Update' },
      { icon: Shield, label: 'Face ID', detail: 'Enabled for payments', action: 'On' },
    ],
  },
];

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="mx-auto grid max-w-2xl gap-6">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight">Settings</h1>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <Moon className="size-5 text-primary" aria-hidden />
            <div className="flex-1">
              <p className="font-bold">Appearance</p>
              <p className="text-sm text-muted-foreground">Switch between light and dark mode</p>
            </div>
            <ThemeToggle compact />
          </div>
        </Card>

        {settingsGroups.map((group) => (
          <div key={group.title} className="grid gap-3">
            <h2 className="font-heading text-lg font-extrabold tracking-tight">{group.title}</h2>
            <Card className="divide-y divide-border p-0">
              {group.items.map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4">
                  <item.icon className="size-5 text-primary" aria-hidden />
                  <div className="flex-1">
                    <p className="font-bold">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                  <Badge className="bg-secondary text-primary">{item.action}</Badge>
                </div>
              ))}
            </Card>
          </div>
        ))}

        <Card className="border-error/30 p-5">
          <div className="flex items-center gap-3">
            <Trash2 className="size-5 text-error" aria-hidden />
            <div className="flex-1">
              <p className="font-bold text-error">Delete account</p>
              <p className="text-sm text-muted-foreground">Permanently remove your account and data</p>
            </div>
            <Button variant="secondary" size="sm">Delete</Button>
          </div>
        </Card>

        <p className="text-center text-xs text-muted-foreground">PayPlate v0.1.0 • Made for South African students</p>
      </div>
    </AppShell>
  );
}
