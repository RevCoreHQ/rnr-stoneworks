'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PoolTypeSelector } from './PoolTypeSelector';
import { PoolSizeSelector } from './PoolSizeSelector';
import { PoolShapeSelector } from './PoolShapeSelector';
import { PoolFeatureSelector } from './PoolFeatureSelector';
import { PoolAddOnSelector } from './PoolAddOnSelector';
import { EstimateSummary } from './EstimateSummary';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function PoolBuilderPage() {
  const [poolType, setPoolType] = useState<'fiberglass' | 'concrete' | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [shape, setShape] = useState<string | null>(null);
  const [features, setFeatures] = useState<string[]>([]);
  const [addOns, setAddOns] = useState<string[]>([]);
  const [gateOpen, setGateOpen] = useState(false);
  const [showGateForm, setShowGateForm] = useState(false);

  const sizeRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const addOnsRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  const handleTypeChange = (type: 'fiberglass' | 'concrete') => {
    setPoolType(type);
    // Reset downstream selections when type changes
    setSize(null);
    setShape(null);
    scrollTo(sizeRef);
  };

  const handleSizeChange = (s: string) => {
    setSize(s);
    scrollTo(shapeRef);
  };

  const handleShapeChange = (s: string) => {
    setShape(s);
    scrollTo(featuresRef);
  };

  /* ---- Mobile bottom bar state ---- */
  const hasEstimate = poolType !== null && size !== null;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 lg:pt-44 pb-12 bg-cream-50 border-b border-gold-200/40 relative overflow-hidden topo-lines">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <Breadcrumbs
            items={[
              { label: 'Pools & Spas', href: '/pools-spas' },
              { label: 'Pool Estimator', href: '/pool-builder' },
            ]}
          />
          <div className="max-w-2xl mt-8">
            <p className="label mb-4">Pool Cost Estimator</p>
            <h1
              className="font-display font-light text-ink-900 mb-4 leading-[1.15]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Build Your Dream Pool
            </h1>
            <p className="font-body text-lg text-ink-500 leading-relaxed">
              Configure your ideal pool, add features and outdoor living upgrades, and get an instant estimate range. Every project begins with a free on-site consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Builder */}
      <section className="section-pad relative overflow-hidden grain-light">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Left — Selectors */}
            <div className="lg:col-span-2 space-y-12">
              {/* Step 1: Pool Type */}
              <PoolTypeSelector value={poolType} onChange={handleTypeChange} />

              {/* Step 2: Size (shown after type selected) */}
              <AnimatePresence>
                {poolType && (
                  <motion.div
                    ref={sizeRef}
                    key="size"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                    className="scroll-mt-28"
                  >
                    <PoolSizeSelector
                      poolType={poolType}
                      value={size}
                      onChange={handleSizeChange}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 3: Shape (shown after size selected) */}
              <AnimatePresence>
                {poolType && size && (
                  <motion.div
                    ref={shapeRef}
                    key="shape"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                    className="scroll-mt-28"
                  >
                    <PoolShapeSelector
                      poolType={poolType}
                      value={shape}
                      onChange={handleShapeChange}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 4: Features (shown after shape selected) */}
              <AnimatePresence>
                {poolType && size && shape && (
                  <motion.div
                    ref={featuresRef}
                    key="features"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                    className="scroll-mt-28"
                  >
                    <PoolFeatureSelector value={features} onChange={setFeatures} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 5: Add-ons (shown after shape selected) */}
              <AnimatePresence>
                {poolType && size && shape && (
                  <motion.div
                    ref={addOnsRef}
                    key="addons"
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible"
                    className="scroll-mt-28"
                  >
                    <PoolAddOnSelector value={addOns} onChange={setAddOns} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right — Sticky Estimate (desktop) */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <EstimateSummary
                  poolType={poolType}
                  size={size}
                  shape={shape}
                  features={features}
                  addOns={addOns}
                  gateOpen={gateOpen}
                  showGateForm={showGateForm}
                  onRequestUnlock={() => setShowGateForm(true)}
                  onUnlock={() => setGateOpen(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Bar */}
      <AnimatePresence>
        {hasEstimate && !gateOpen && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white border-t border-gold-200/40 shadow-elevate px-6 py-4"
          >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
              <div>
                <p className="font-body text-ink-400 text-[10px] uppercase tracking-wider">
                  Estimated Range
                </p>
                <p className="font-display font-semibold text-ink-900 text-sm blur-md select-none">
                  See estimate
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowGateForm(true)}
                className="shrink-0 inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-ink-950 font-body font-semibold text-[12px] tracking-[0.12em] uppercase rounded-sm shadow-glow btn-shimmer"
              >
                Unlock Estimate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Gate Form (overlay) */}
      <AnimatePresence>
        {showGateForm && !gateOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden bg-ink-950/60 backdrop-blur-sm flex items-end"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowGateForm(false);
            }}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full bg-white rounded-t-lg p-6 pb-10 max-h-[85vh] overflow-y-auto"
            >
              <div className="w-12 h-1 bg-ink-200 rounded-full mx-auto mb-6" />
              <EstimateSummary
                poolType={poolType}
                size={size}
                shape={shape}
                features={features}
                addOns={addOns}
                gateOpen={gateOpen}
                showGateForm={showGateForm}
                onRequestUnlock={() => setShowGateForm(true)}
                onUnlock={() => setGateOpen(true)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
