import Link from 'next/link';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const variants = {
  primary: 'bg-gold-500 text-ink-950 hover:bg-gold-400 shadow-glow',
  ghost: 'border border-white/20 text-white/70 hover:border-gold-500/50 hover:text-gold-400',
  outline: 'border border-gold-400 text-gold-700 hover:bg-gold-50',
};

const sizes = {
  sm: 'px-5 py-2.5 text-[12px]',
  md: 'px-7 py-3.5 text-[13px]',
  lg: 'px-10 py-4 text-[13px]',
};

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center font-body font-semibold tracking-[0.12em] uppercase rounded-sm transition-colors duration-300 focus:outline-none',
    variants[variant],
    sizes[size],
    className,
  ].join(' ');

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
