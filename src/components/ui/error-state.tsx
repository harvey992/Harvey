import { AlertTriangle } from 'lucide-react';
import { EmptyState } from '@/components/ui/empty-state';

export function ErrorState() {
  return <EmptyState icon={AlertTriangle} title="Something needs attention" description="We could not load this section. Try again in a moment." action="Retry" />;
}
