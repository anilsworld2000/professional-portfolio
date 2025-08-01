import React from 'react';
import { cn } from '@/app/lib/utils';
import Tooltip from '../ToolTip';

type PolymorphicComponentProps<E extends React.ElementType, P> = P & {
  as?: E;
} & Omit<React.ComponentPropsWithoutRef<E>, keyof P>;

interface ButtonOwnProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconOnly?: React.ReactNode;
  isLoading?: boolean;
  spinner?: React.ReactNode;
  fullWidth?: boolean;
  cursor?: 'pointer' | 'default' | 'not-allowed' | 'wait' | 'text' | 'move';
  type?: 'button' | 'submit' | 'reset';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  tooltipContent?: React.ReactNode;
  tooltipTitle?: React.ReactNode;
  tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
  'aria-label'?: string;
}

//export type ButtonProps<C extends React.ElementType = 'button'> = ButtonOwnProps &
//Omit<React.ComponentPropsWithRef<C>, keyof ButtonOwnProps> & {
//as?: C;
//};

export type ButtonProps<E extends React.ElementType = 'button'> =
  PolymorphicComponentProps<E, ButtonOwnProps>;

const roundedClasses: Record<NonNullable<ButtonOwnProps['rounded']>, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
};

const cursorClasses: Record<NonNullable<ButtonOwnProps['cursor']>, string> = {
  pointer: 'cursor-pointer',
  default: 'cursor-default',
  'not-allowed': 'cursor-not-allowed',
  wait: 'cursor-wait',
  text: 'cursor-text',
  move: 'cursor-move',
};

const variantClasses: Record<NonNullable<ButtonOwnProps['variant']>, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  ghost: 'bg-transparent text-blue-600 hover:bg-blue-50',
};

const sizeClasses: Record<NonNullable<ButtonOwnProps['size']>, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
};

export default function BaseButton<C extends React.ElementType = 'button'>({
  as,
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  iconOnly,
  isLoading = false,
  spinner,
  fullWidth = false,
  disabled = false,
  rounded = 'none',
  type = 'button',
  cursor,
  tooltipContent = '',
  tooltipTitle = '',
  tooltipSide = 'bottom',
  'aria-label': ariaLabel,
  ...props
}: ButtonProps<C>) {
  const Comp = (as || 'button') as React.ElementType;
  const isButton = Comp === 'button';
  const isDisabled = disabled || isLoading;
  const effectiveCursor = cursor ?? (isDisabled ? 'not-allowed' : 'pointer');

  const buttonElement = (
    <Comp
      {...(isButton && { type })}
      {...props}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full transition duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variantClasses[variant],
        iconOnly ? 'p-0 w-auto h-auto' : sizeClasses[size],
        cursorClasses[effectiveCursor],
        roundedClasses[rounded],
        fullWidth && 'w-full',
        isDisabled && 'opacity-50',
        className
      )}
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      {...(ariaLabel && { 'aria-label': ariaLabel })}
      {...(isButton ? { disabled: isDisabled } : {})}
    >
      {isLoading ? (
        spinner ?? (
          <span
            className={cn(
              'animate-spin h-4 w-4 rounded-full border-2',
              variant === 'ghost' ? 'border-current' : 'border-white',
              'border-t-transparent'
            )}
            role="status"
            aria-label="Loading"
          />
        )
      ) : iconOnly ? (
        <span className=''>{iconOnly}</span>
      ) : (
        <>
          {iconLeft && <span className="-ml-1">{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className="-mr-1">{iconRight}</span>}
        </>
      )}

    </Comp>
  );

  return tooltipContent ?
    (
      <Tooltip content={tooltipContent} title={tooltipTitle} side={tooltipSide}>
        {buttonElement}
      </Tooltip>
    ) : (
      buttonElement)
}
