const steps = [
  {
    number: '01',
    title: 'Vision Consultation',
    description: 'We visit your property, listen to your vision, review your space, and discuss your goals and budget — no obligation.',
  },
  {
    number: '02',
    title: '2D & 3D Design',
    description: 'Our team creates a 2D layout and a 3D virtual tour of your project. You review and approve every detail before we start.',
  },
  {
    number: '03',
    title: 'Expert Installation',
    description: 'Our ICPI-certified crew handles everything — permits, materials, base prep, and installation to the highest standards.',
  },
  {
    number: '04',
    title: 'Completion & Enjoyment',
    description: 'We walk the finished project with you, confirm everything meets your expectations, and you enjoy your transformed space.',
  },
];

export function ProcessSteps() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-parchment-50/50 to-white">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-amber" />
            <span className="gradient-text-amber">Our Process</span>
            <span className="w-6 h-px bg-accent-amber" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-900">
            From Vision to Reality
          </h2>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center lg:text-left">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 border-2 border-brand-200 mb-5 shadow-soft">
                <span className="text-xl font-display font-bold gradient-text">{step.number}</span>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-300" />
                )}
              </div>
              <h3 className="text-xl font-display font-semibold text-stone-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
