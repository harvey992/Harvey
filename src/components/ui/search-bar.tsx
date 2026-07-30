import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function SearchBar({ placeholder = 'Search food, restaurants, rewards' }: { placeholder?: string }) {
  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden />
      <Input className="pl-11" placeholder={placeholder} type="search" />
    </label>
  );
}
