'use client';

import { poolFeatures, formatRange } from '@/data/pool-pricing';
import { SelectionCard } from './SelectionCard';
import { SectionHeader } from './SectionHeader';

interface PoolFeatureSelectorProps {
  value: string[];
  onChange: (features: string[]) => void;
}

export function PoolFeatureSelector({ value, onChange }: PoolFeatureSelectorProps) {
  const toggle = (id: string) => {
    onChange(
      value.includes(id) ? value.filter((v) => v !== id) : [...value, id]
    );
  };

  return (
    <div>
      <SectionHeader
        step={5}
        title="Add Pool Features"
        description="Select all that interest you, every feature is optional."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {poolFeatures.map((feature) => (
          <SelectionCard
            key={feature.id}
            title={feature.label}
            description={feature.description}
            price={formatRange(feature.price)}
            selected={value.includes(feature.id)}
            onClick={() => toggle(feature.id)}
          />
        ))}
      </div>
    </div>
  );
}
