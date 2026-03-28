interface SectionHeaderProps {
  step: number;
  title: string;
  description?: string;
}

export function SectionHeader({ step, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <p className="label mb-3">Step {String(step).padStart(2, '0')}</p>
      <h2
        className="font-display font-light text-ink-900 leading-tight"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
      >
        {title}
      </h2>
      {description && (
        <p className="font-body text-ink-500 text-base mt-2 max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
