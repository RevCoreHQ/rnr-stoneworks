'use client';

import { poolShapes } from '@/data/pool-pricing';
import { SelectionCard } from './SelectionCard';
import { SectionHeader } from './SectionHeader';

interface PoolShapeSelectorProps {
  poolType: 'fiberglass' | 'concrete';
  value: string | null;
  onChange: (shape: string) => void;
}

export function PoolShapeSelector({ poolType, value, onChange }: PoolShapeSelectorProps) {
  const shapes = poolShapes.filter((s) => s.poolTypes.includes(poolType));

  return (
    <div>
      <SectionHeader
        step={3}
        title="Pick a Shape"
        description={
          poolType === 'concrete'
            ? 'Concrete pools can be built in virtually any shape, these are our most popular.'
            : 'Choose from our most popular Latham fiberglass shell shapes.'
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {shapes.map((shape) => (
          <SelectionCard
            key={shape.id}
            title={shape.label}
            description={shape.description}
            selected={value === shape.id}
            onClick={() => onChange(shape.id)}
          />
        ))}
      </div>
    </div>
  );
}
