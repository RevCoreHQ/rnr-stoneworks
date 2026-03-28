'use client';

import { poolAddOns, formatRange } from '@/data/pool-pricing';
import { SelectionCard } from './SelectionCard';
import { SectionHeader } from './SectionHeader';

interface PoolAddOnSelectorProps {
  value: string[];
  onChange: (addOns: string[]) => void;
}

export function PoolAddOnSelector({ value, onChange }: PoolAddOnSelectorProps) {
  const toggle = (id: string) => {
    onChange(
      value.includes(id) ? value.filter((v) => v !== id) : [...value, id]
    );
  };

  return (
    <div>
      <SectionHeader
        step={5}
        title="Outdoor Living Add-Ons"
        description="Complete your backyard with hardscape, fire features, and more."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {poolAddOns.map((addOn) => (
          <SelectionCard
            key={addOn.id}
            title={addOn.label}
            description={addOn.description}
            price={formatRange(addOn.price)}
            selected={value.includes(addOn.id)}
            onClick={() => toggle(addOn.id)}
          />
        ))}
      </div>
    </div>
  );
}
