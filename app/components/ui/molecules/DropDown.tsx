// src/components/ui/Atoms/Dropdown.tsx
'use client';

import React, { forwardRef, SelectHTMLAttributes } from 'react';
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
import Tooltip from '@/app/components/ui/Atoms/ToolTip';
import Text from '@/app/components/ui/Atoms/Text';

export interface DropdownOption {
    label: string;
    value: string;
    disabled?: boolean;
}

interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    label?: string;
    id?: string;
    options: DropdownOption[];
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

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
    (
        {
            label,
            id,
            options,
            variant = 'outline',
            size = 'md',
            rounded = 'md',
            cursor = 'pointer',
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
        const selectId = id || props.name || `dropdown-${Math.random().toString(36).slice(2, 9)}`;
        const describedById = helperText || error ? `${selectId}-desc` : undefined;

        return (
            <div
                className={cn('flex flex-col gap-1', fullWidth && 'w-full')}
                role="group"
                aria-labelledby={label ? `${selectId}-label` : undefined}
            >
                {label && (
                    <label
                        id={`${selectId}-label`}
                        htmlFor={selectId}
                        className="inline-flex items-center gap-1 text-sm font-medium text-gray-700"
                    >
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

                <select
                    id={selectId}
                    ref={ref}
                    disabled={disabled}
                    //aria-invalid={error ? 'true' : undefined}
                    aria-describedby={describedById}
                    //aria-required={props.required ? 'true' : undefined}
                    className={cn(
                        'block appearance-none w-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                        variantStyles[variant],
                        sizeStyles[size],
                        roundedClasses[rounded],
                        cursorClasses[cursor],
                        error && 'border-red-500 text-red-600 focus-visible:ring-red-500',
                        className
                    )}
                    {...props}
                >
                    {options.map(({ value, label, disabled }) => (
                        <option key={value} value={value} disabled={disabled}>
                            {label}
                        </option>
                    ))}
                </select>

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

Dropdown.displayName = 'Dropdown';
export default Dropdown;
