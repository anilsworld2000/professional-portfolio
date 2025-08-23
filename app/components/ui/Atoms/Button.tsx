'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';
import {
    variantStyles,
    sizeStyles,
    iconSizeMap,
    Variant,
    Size,
    cursorClasses,
    Rounded,
    roundedClasses,
} from '@/app/lib/variants';
import { Loader2 } from 'lucide-react';

type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type ButtonProps<E extends React.ElementType = 'button'> = {
    as?: E;
    children?: React.ReactNode;
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    iconOnly?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    cursor?: string
    className?: string;
    position?: Position;
    rounded?: Rounded;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'size' | 'disabled'>;

export default function Button<E extends React.ElementType = 'button'>({
    as,
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    iconOnly = false,
    isLoading = false,
    disabled = false,
    cursor = 'pointer',
    position = 'static',
    rounded = 'none',
    className,
    ...props
}: ButtonProps<E>) {
    const Component = (as || 'button') as React.ElementType;
    const isDisabled = disabled || isLoading;
    const effectiveCursor = cursor ?? (isDisabled ? 'not-allowed' : 'pointer');
    //alert(rounded);
    return (
        <Component
            {...props}
            disabled={isDisabled}
            type={Component === 'button' ? 'button' : undefined}
            className={cn(
                // Base styles
                'inline-flex items-center justify-center gap-2 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                variantStyles[variant],
                sizeStyles[size],
                roundedClasses[rounded],
                fullWidth && 'w-full',
                iconOnly && 'p-2',
                position,

                // Dynamic cursor
                isDisabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : 'cursor-pointer',
                cursorClasses[effectiveCursor],

                className
            )}
            aria-disabled={isDisabled}
            aria-busy={isLoading}
        >
            {isLoading && (
                <Loader2
                    className={cn('animate-spin', iconSizeMap[size])}
                    aria-hidden="true"
                />
            )}
            {children}
        </Component>
    );
}
