import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-200 shadow-[var(--shadow-clay)] hover:shadow-[var(--shadow-clay-hover)] hover:-translate-y-0.5 active:shadow-[var(--shadow-clay-inset)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'shadow-none hover:shadow-[var(--shadow-clay-sm)] hover:bg-accent hover:text-accent-foreground',
        link: 'shadow-none hover:shadow-none text-primary underline-offset-4 hover:underline',
        primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
        secondary: 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-light)]',
        outline: 'bg-[var(--color-surface)] text-[var(--color-text)] hover:text-[var(--color-primary)]',
        accent: 'bg-[var(--color-accent)] text-[var(--color-secondary)] hover:bg-[var(--color-accent-hover)]',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 rounded-xl px-3',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
