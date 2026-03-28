'use client';

import { poolTypes } from '@/data/pool-pricing';
import { SelectionCard } from './SelectionCard';
import { SectionHeader } from './SectionHeader';

interface PoolTypeSelectorProps {
  value: 'fiberglass' | 'concrete' | null;
  onChange: (type: 'fiberglass' | 'concrete') => void;
}

export function PoolTypeSelector({ value, onChange }: PoolTypeSelectorProps) {
  return (
    <div>
      <SectionHeader
        step={1}
        title="Choose Your Pool Type"
        description="This determines your base price range, available shapes, and installation timeline."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {poolTypes.map((type) => (
          <SelectionCard
            key={type.id}
            title={type.title}
            detail={type.tagline}
            description={type.description}
            selected={value === type.id}
            onClick={() => onChange(type.id)}
          />
        ))}
      </div>
    </div>
  );
}
