'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';
import {
    Variant,
    Size,
    variantStyles,
    sizeStyles,
    roundedClasses,
    cursorClasses,
} from '@/app/lib/variants';
import Text from '@/app/components/ui/Atoms/Text';
import Tooltip from '@/app/components/ui/Atoms/ToolTip';

export interface MultiSelectDropdownProps
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    label?: string;
    variant?: Variant;
    size?: Size;
    rounded?: keyof typeof roundedClasses;
    cursor?: keyof typeof cursorClasses;
    error?: string;
    helperText?: string;
    tooltip?: string;
    fullWidth?: boolean;
    options: {
        value: string;
        label: string;
    }[];
}

export default function MultiSelectDropdown({
    label,
    variant = 'outline',
    size = 'md',
    rounded = 'md',
    cursor = 'default',
    error,
    helperText,
    tooltip,
    fullWidth = false,
    disabled,
    className,
    options,
    id,
    name,
    ...props
}: MultiSelectDropdownProps) {
    const selectId = id || name || `multiselect-${Math.random().toString(36).substring(2, 9)}`;
    const describedById = helperText || error ? `${selectId}-desc` : undefined;

    return (
        <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
            {label && (
                <label
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
                name={name}
                multiple
                //aria-invalid={error ? 'true' : undefined}
                aria-describedby={describedById}
                //aria-required={props.required ? 'true' : undefined}
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
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
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
