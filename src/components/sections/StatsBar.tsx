const stats = [
  { value: '500K+', label: 'Project Budget Capacity' },
  { value: '11', label: 'Distinct Services' },
  { value: '6', label: 'Colorado Communities' },
  { value: '2yr', label: 'Workmanship Guarantee' },
];

export function StatsBar() {
  return (
    <section className="bg-cream-50 border-y border-gold-200/60">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={[
                'py-12 lg:py-16 text-center',
                i !== stats.length - 1 ? 'border-r border-gold-200/60' : '',
              ].join(' ')}
            >
              <p
                className="font-display font-light text-ink-900 leading-none mb-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                {s.value}
              </p>
              <p className="font-body text-[11px] tracking-[0.18em] uppercase text-ink-400 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
