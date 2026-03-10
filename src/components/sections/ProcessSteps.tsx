const steps = [
  {
    num: '01',
    title: 'Consultation & Vision',
    body: 'We visit your property, learn what you want to achieve, and assess the space. No sales pitch — just a genuine conversation about your goals.',
  },
  {
    num: '02',
    title: 'Design & Proposal',
    body: 'Our team creates a detailed 2D layout and 3D virtual tour of your project. You see exactly what we will build before a single stone is placed.',
  },
  {
    num: '03',
    title: 'Expert Installation',
    body: 'Our ICPI-certified crew builds your space with precision. Belgard materials, clean jobsite every evening, and a project manager on-site throughout.',
  },
  {
    num: '04',
    title: 'Final Walkthrough',
    body: 'Payment is only due when you are 100% satisfied. We walk through every detail together and ensure the finished space exceeds your expectations.',
  },
];

export function ProcessSteps() {
  return (
    <section className="section-pad bg-cream-50 border-y border-gold-200/40">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left label col */}
          <div className="lg:col-span-2">
            <p className="label mb-6">Our Process</p>
            <h2
              className="font-display font-light text-ink-900 leading-[1.08]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              From first call to final approval — a seamless experience.
            </h2>
          </div>

          {/* Steps */}
          <div className="lg:col-span-3 space-y-0">
            {steps.map((s, i) => (
              <div
                key={i}
                className={[
                  'flex gap-8 py-8',
                  i !== steps.length - 1 ? 'border-b border-gold-200/50' : '',
                ].join(' ')}
              >
                <span className="font-display text-[2.5rem] font-light text-gold-300 leading-none shrink-0 w-14">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-body font-semibold text-ink-900 text-lg mb-2">{s.title}</h3>
                  <p className="font-body text-ink-500 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
