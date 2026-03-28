'use client';

import { poolFinishes, copingOptions, formatRange } from '@/data/pool-pricing';
import { SelectionCard } from './SelectionCard';
import { SectionHeader } from './SectionHeader';

interface PoolFinishSelectorProps {
  poolType: 'fiberglass' | 'concrete';
  finish: string | null;
  coping: string | null;
  onFinishChange: (finish: string) => void;
  onCopingChange: (coping: string) => void;
}

export function PoolFinishSelector({
  poolType,
  finish,
  coping,
  onFinishChange,
  onCopingChange,
}: PoolFinishSelectorProps) {
  const finishes = poolFinishes.filter((f) => f.poolTypes.includes(poolType));
  const copings = copingOptions.filter((c) => c.poolTypes.includes(poolType));

  return (
    <div className="space-y-10">
      {/* Interior Finish */}
      <div>
        <SectionHeader
          step={4}
          title="Interior Finish"
          description={
            poolType === 'concrete'
              ? 'Choose your pool\'s interior surface — affects color, texture, durability, and cost.'
              : 'Select your fiberglass shell finish.'
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {finishes.map((f) => (
            <SelectionCard
              key={f.id}
              title={f.label}
              description={f.description}
              price={f.price.low === 0 && f.price.high === 0 ? 'Included' : `+ ${formatRange(f.price)}`}
              selected={finish === f.id}
              onClick={() => onFinishChange(f.id)}
            />
          ))}
        </div>
      </div>

      {/* Coping */}
      <div>
        <p className="label mb-3">Coping & Edge</p>
        <h3
          className="font-display font-light text-ink-900 leading-tight mb-2"
          style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
        >
          Pool Edge Material
        </h3>
        <p className="font-body text-ink-500 text-base mb-6 max-w-xl">
          The coping caps the pool wall and transitions to your deck surface.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {copings.map((c) => (
            <SelectionCard
              key={c.id}
              title={c.label}
              description={c.description}
              price={c.price.low === 0 && c.price.high === 0 ? 'Included' : `+ ${formatRange(c.price)}`}
              selected={coping === c.id}
              onClick={() => onCopingChange(c.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
