import { Metadata } from 'next';
import { PoolBuilderPage } from '@/components/pool-builder/PoolBuilderPage';

export const metadata: Metadata = {
  title: 'Pool Cost Estimator | Rock N Roll Stoneworks',
  description:
    'Build your dream pool and get an instant estimate. Configure pool type, size, features, and outdoor living add-ons. Free consultation included.',
  robots: { index: false, follow: false },
};

export default function PoolBuilderRoute() {
  return <PoolBuilderPage />;
}
