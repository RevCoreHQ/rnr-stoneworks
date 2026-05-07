'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';
import {
  poolTypes,
  poolSizes,
  poolShapes,
  poolFinishes,
  copingOptions,
  poolFeatures,
  poolAddOns,
  formatPrice,
  type PriceRange,
} from '@/data/pool-pricing';
import { Button } from '@/components/ui/Button';
import { EstimateGate } from './EstimateGate';

interface EstimateSummaryProps {
  poolType: 'fiberglass' | 'concrete' | null;
  size: string | null;
  shape: string | null;
  finish: string | null;
  coping: string | null;
  features: string[];
  addOns: string[];
  gateOpen: boolean;
  onRequestUnlock: () => void;
  onUnlock: () => void;
  showGateForm: boolean;
}

function getLineItems(
  poolType: 'fiberglass' | 'concrete' | null,
  size: string | null,
  shape: string | null,
  finish: string | null,
  coping: string | null,
  features: string[],
  addOns: string[]
) {
  const items: { label: string; range: PriceRange }[] = [];

  if (poolType && size) {
    const sizeData = poolSizes.find((s) => s.id === size);
    const typeLabel = poolTypes.find((t) => t.id === poolType)?.title ?? '';
    if (sizeData) {
      items.push({ label: `${typeLabel}, ${sizeData.label}`, range: sizeData.price[poolType] });
    }
  }

  if (shape) {
    const shapeData = poolShapes.find((s) => s.id === shape);
    if (shapeData) {
      items.push({ label: shapeData.label, range: { low: 0, high: 0 } });
    }
  }

  if (finish) {
    const finishData = poolFinishes.find((f) => f.id === finish);
    if (finishData) {
      items.push({ label: finishData.label, range: finishData.price });
    }
  }

  if (coping) {
    const copingData = copingOptions.find((c) => c.id === coping);
    if (copingData) {
      items.push({ label: copingData.label, range: copingData.price });
    }
  }

  for (const fId of features) {
    const feat = poolFeatures.find((f) => f.id === fId);
    if (feat) items.push({ label: feat.label, range: feat.price });
  }

  for (const aId of addOns) {
    const addon = poolAddOns.find((a) => a.id === aId);
    if (addon) items.push({ label: addon.label, range: addon.price });
  }

  return items;
}

function sumRanges(items: { range: PriceRange }[]): PriceRange {
  return items.reduce(
    (acc, item) => ({
      low: acc.low + item.range.low,
      high: acc.high + item.range.high,
    }),
    { low: 0, high: 0 }
  );
}

export function EstimateSummary({
  poolType,
  size,
  shape,
  finish,
  coping,
  features,
  addOns,
  gateOpen,
  onRequestUnlock,
  onUnlock,
  showGateForm,
}: EstimateSummaryProps) {
  const items = getLineItems(poolType, size, shape, finish, coping, features, addOns);
  const total = sumRanges(items);
  const hasSelections = items.length > 0;

  const summaryText = items
    .filter((i) => i.range.low > 0 || i.range.high > 0)
    .map((i) => `${i.label}: ${formatPrice(i.range.low)}–${formatPrice(i.range.high)}`)
    .join('\n');
  const fullSummary = `Pool Estimate Summary:\n${summaryText}\n\nEstimated Total: ${formatPrice(total.low)} – ${formatPrice(total.high)}`;

  return (
    <div className="bg-white border border-gold-200/40 rounded-sm shadow-panel p-6">
      <div className="flex items-center gap-2 mb-4">
        {gateOpen ? (
          <Unlock className="w-4 h-4 text-gold-500" />
        ) : (
          <Lock className="w-4 h-4 text-ink-300" />
        )}
        <h3 className="font-display font-semibold text-ink-900 text-sm">
          Your Estimate
        </h3>
      </div>

      {!hasSelections ? (
        <p className="font-body text-ink-400 text-sm">
          Start selecting options to build your estimate.
        </p>
      ) : (
        <>
          {/* Line items */}
          <div className="space-y-2 mb-4">
            {items.map((item) => (
              <div key={item.label} className="flex justify-between items-start gap-3">
                <span className="font-body text-ink-600 text-xs">{item.label}</span>
                {(item.range.low > 0 || item.range.high > 0) && (
                  <span className="font-body text-ink-500 text-xs whitespace-nowrap">
                    {formatPrice(item.range.low)} – {formatPrice(item.range.high)}
                  </span>
                )}
                {item.range.low === 0 && item.range.high === 0 && (
                  <span className="font-body text-ink-300 text-xs italic">Included</span>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gold-200/40 mb-4" />

          {/* Total */}
          <div className="flex justify-between items-baseline gap-3 mb-4">
            <span className="font-display font-semibold text-ink-900 text-sm">
              Estimated Range
            </span>
            <span
              className={[
                'font-display font-semibold text-lg transition-all duration-500',
                gateOpen ? 'text-gold-700' : 'text-ink-900 blur-md select-none',
              ].join(' ')}
            >
              {formatPrice(total.low)} – {formatPrice(total.high)}
            </span>
          </div>

          {/* Disclaimer */}
          <p className="font-body text-ink-300 text-[10px] leading-relaxed mb-4">
            *Estimates are approximate ranges based on typical Colorado installations. Your final price will be determined during a free on-site consultation.
          </p>

          {/* Gate */}
          <AnimatePresence mode="wait">
            {!gateOpen && !showGateForm && (
              <motion.div
                key="cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button onClick={onRequestUnlock} size="md" className="w-full">
                  Unlock Your Estimate
                </Button>
              </motion.div>
            )}

            {!gateOpen && showGateForm && (
              <motion.div
                key="gate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <EstimateGate summary={fullSummary} onUnlock={onUnlock} />
              </motion.div>
            )}

            {gateOpen && (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div className="bg-gold-50 border border-gold-200/60 rounded-sm p-3 text-center">
                  <p className="font-body text-gold-700 text-xs font-semibold">
                    Estimate unlocked! A team member will be in touch soon.
                  </p>
                </div>
                <Button href="/contact" variant="outline" size="sm" className="w-full">
                  Schedule Free Consultation
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
