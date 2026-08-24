import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
        ghost: 'hover:bg-accent hover:text-accent-foreground shadow-sm',
        link: 'text-primary underline-offset-4 hover:underline',
        primary: 'bg-[#EB5733] text-white hover:bg-[#d44a2d] shadow-md hover:shadow-lg hover:-translate-y-0.5',
        secondary: 'bg-[#1D1D1D] text-white hover:bg-[#2d2d2d] shadow-md hover:shadow-lg hover:-translate-y-0.5',
        outline: 'border-2 border-[#1D1D1D] text-[#1D1D1D] hover:bg-[#1D1D1D] hover:text-white',
        accent: 'bg-[#FFC39A] text-[#1D1D1D] hover:bg-[#ffb07a] shadow-md hover:shadow-lg hover:-translate-y-0.5',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-lg px-8 text-base',
        xl: 'h-14 rounded-lg px-10 text-lg',
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
