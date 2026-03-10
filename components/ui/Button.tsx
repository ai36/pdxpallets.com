import { forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const VARIANT: Record<Variant, string> = {
  primary:   'bg-brand text-white hover:bg-brand-light active:bg-brand-dark disabled:bg-edge disabled:text-muted',
  secondary: 'border-[1.5px] border-brand text-brand bg-transparent hover:bg-brand-pale active:bg-brand-pale/70 disabled:border-edge disabled:text-muted',
  ghost:     'bg-transparent text-muted hover:text-ink hover:bg-subtle active:bg-edge disabled:text-dim',
  danger:    'bg-err text-white hover:bg-err/90 active:bg-err/80 disabled:bg-edge disabled:text-muted',
};

const SIZE: Record<Size, string> = {
  sm: 'h-8  px-3 text-sm  rounded-lg  gap-1.5',
  md: 'h-11 px-4 text-sm  rounded-xl  gap-2',
  lg: 'h-13 px-6 text-base rounded-xl gap-2',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, disabled, className = '', children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      style={{ touchAction: 'manipulation' }}
      className={[
        'inline-flex items-center justify-center font-semibold transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed',
        VARIANT[variant],
        SIZE[size],
        className,
      ].join(' ')}
      {...props}
    >
      {loading
        ? <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" aria-hidden="true" />
        : null}
      {children}
    </button>
  ),
);

Button.displayName = 'Button';
