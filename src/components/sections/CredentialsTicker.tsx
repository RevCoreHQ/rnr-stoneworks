const items = [
  'Custom Pool & Spa Builder',
  'Fiberglass & Concrete Pools',
  'Hardscape & Stonework',
  'ICPI Certified Installer',
  '2-Year Workmanship Guarantee',
  'Free Estimates',
  'Outdoor Kitchens & Fire Features',
  'Latham Pools Authorized Dealer',
  'Colorado Front Range',
  'Up to $1M+ Projects',
  'Custom Design & Build',
  'Licensed & Insured',
  'Custom Pool & Spa Builder',
  'Fiberglass & Concrete Pools',
  'Hardscape & Stonework',
  'ICPI Certified Installer',
  '2-Year Workmanship Guarantee',
  'Free Estimates',
  'Outdoor Kitchens & Fire Features',
  'Latham Pools Authorized Dealer',
  'Colorado Front Range',
  'Up to $1M+ Projects',
  'Custom Design & Build',
  'Licensed & Insured',
];

export function CredentialsTicker() {
  return (
    <div className="relative bg-ink-950 border-y border-gold-800/30 overflow-hidden py-4 select-none">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ink-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ink-950 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-8">
            <span className="font-body text-[11px] tracking-[0.2em] uppercase text-gold-400/70 font-medium">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-gold-600/40 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
