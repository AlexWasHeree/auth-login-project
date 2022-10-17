import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-purple-500 rounded font-semibold text-white text-2sm w-full transition-colors hover:bg-purple-300 focus:ring-2 ring-purple-700',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}