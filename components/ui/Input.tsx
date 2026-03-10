import { forwardRef, useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helper?: string;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helper, required, id: idProp, className = '', ...props }, ref) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const descId = `${id}-desc`;
    const hasDesc = !!(error ?? helper);

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-semibold text-ink">
          {label}
          {required && <span className="ml-1 text-err" aria-hidden="true">*</span>}
        </label>
        <input
          ref={ref}
          id={id}
          required={required}
          aria-required={required}
          aria-describedby={hasDesc ? descId : undefined}
          aria-invalid={error ? true : undefined}
          style={{ touchAction: 'manipulation' }}
          className={[
            'h-11 w-full rounded-xl border-[1.5px] px-4 text-base text-ink bg-card',
            'transition-colors duration-150',
            'focus:outline-none focus:border-brand focus:ring-3 focus:ring-brand/20',
            'disabled:bg-subtle disabled:text-muted disabled:cursor-not-allowed',
            'placeholder:text-dim',
            error ? 'border-err bg-err-pale' : 'border-edge',
            className,
          ].join(' ')}
          {...props}
        />
        {hasDesc && (
          <p id={descId} className={`text-xs ${error ? 'text-err' : 'text-muted'}`} role={error ? 'alert' : undefined}>
            {error ?? helper}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
