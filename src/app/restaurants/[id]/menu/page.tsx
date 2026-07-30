import { FoodCard } from '@/components/payplate/food-card';
import { AppShell } from '@/components/payplate/app-shell';

export default function Page(){return <AppShell><div className="grid gap-4"><h1 className="font-heading text-4xl font-extrabold tracking-tight">Menu</h1><FoodCard /><FoodCard /></div></AppShell>;}
