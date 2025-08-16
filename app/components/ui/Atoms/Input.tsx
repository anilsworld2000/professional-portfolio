'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/app/lib/utils';
import {
    variantStyles,
    sizeStyles,
    roundedClasses,
    cursorClasses,
    Variant,
    Size,
    Rounded,
    cursor,
} from '@/app/lib/variants';
import Tooltip from './ToolTip';
import Text from './Text';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    id?: string;
    variant?: Variant;
    size?: Size;
    rounded?: Rounded;
    cursor?: cursor;
    error?: string;
    helperText?: string;
    tooltip?: string;
    fullWidth?: boolean;
    className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            id,
            variant = 'outline',
            size = 'md',
            rounded = 'md',
            cursor = 'text',
            error,
            helperText,
            tooltip,
            fullWidth = false,
            disabled,
            className,
            ...props
        },
        ref
    ) => {
        const inputId = id || props.name || `input-${Math.random().toString(36).substring(2, 9)}`;
        const describedById = helperText || error ? `${inputId}-desc` : undefined;

        const inputField = (
            <input
                id={inputId}
                ref={ref}
                // aria-invalid={!!error}
                aria-describedby={describedById}
                disabled={disabled}
                className={cn(
                    'block w-full appearance-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors',
                    variantStyles[variant],
                    sizeStyles[size],
                    roundedClasses[rounded],
                    cursorClasses[cursor],
                    fullWidth && 'w-full',
                    error && 'border-red-500 text-red-600 placeholder-red-400 focus-visible:ring-red-500',
                    className
                )}
                {...props}
            />
        );

        return (
            <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
                {label && (
                    <label htmlFor={inputId} className="inline-flex items-center gap-1 text-sm font-medium text-gray-700">
                        {label}
                        {tooltip && (
                            <Tooltip content={tooltip}>
                                <span
                                    className="text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    role="img"
                                    aria-label={`Tooltip for ${label}`}
                                >
                                    ⓘ
                                </span>
                            </Tooltip>
                        )}
                    </label>
                )}
                {inputField}
                {(helperText || error) && (
                    <Text
                        as="span"
                        id={describedById}
                        size="xs"
                        variant={error ? 'danger' : 'muted'}
                        role="note"
                    >
                        {error || helperText}
                    </Text>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
export default Input;
