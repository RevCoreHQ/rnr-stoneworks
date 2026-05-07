'use client';

import { poolSizes, formatRange } from '@/data/pool-pricing';
import { SelectionCard } from './SelectionCard';
import { SectionHeader } from './SectionHeader';

interface PoolSizeSelectorProps {
  poolType: 'fiberglass' | 'concrete';
  value: string | null;
  onChange: (size: string) => void;
}

export function PoolSizeSelector({ poolType, value, onChange }: PoolSizeSelectorProps) {
  return (
    <div>
      <SectionHeader
        step={2}
        title="Select Pool Size"
        description="Approximate dimensions, your final design will be customized to your yard."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {poolSizes.map((size) => (
          <SelectionCard
            key={size.id}
            title={size.label}
            detail={size.dimensions}
            description={`Base ${poolType === 'fiberglass' ? 'fiberglass' : 'concrete'} pool at this size.`}
            price={formatRange(size.price[poolType])}
            selected={value === size.id}
            onClick={() => onChange(size.id)}
          />
        ))}
      </div>
    </div>
  );
}
