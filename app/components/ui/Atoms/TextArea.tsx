// src/components/ui/Atoms/TextArea.tsx
'use client';

import React, { TextareaHTMLAttributes, forwardRef, useState } from 'react';
import { cn } from '@/app/lib/utils';
import {
    Variant,
    Size,
    Rounded,
    cursor,
    variantStyles,
    sizeStyles,
    roundedClasses,
    cursorClasses,
    Resize,
} from '@/app/lib/variants';
import Tooltip from './ToolTip';
import Text from './Text';

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
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
    resize?: Resize;
    showCounter?: boolean;
    maxLength?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
            resize = 'vertical',
            showCounter = false,
            maxLength,
            onChange,
            value,
            defaultValue,
            ...props
        },
        ref
    ) => {
        const [currentLength, setCurrentLength] = useState(
            typeof value === 'string' ? value.length : defaultValue?.toString().length || 0
        );

        const textAreaId = id || props.name || `textarea-${Math.random().toString(36).slice(2, 9)}`;
        const describedById = helperText || error ? `${textAreaId}-desc` : undefined;

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setCurrentLength(e.target.value.length);
            onChange?.(e);
        };

        const textareaField = (
            <textarea
                id={textAreaId}
                ref={ref}
                //aria-invalid={!!error || undefined}
                aria-describedby={describedById}
                disabled={disabled}
                maxLength={maxLength}
                onChange={handleChange}
                value={value}
                defaultValue={defaultValue}
                className={cn(
                    'block appearance-none w-full min-h-[100px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors',
                    variantStyles[variant],
                    sizeStyles[size],
                    roundedClasses[rounded],
                    cursorClasses[cursor],
                    fullWidth && 'w-full',
                    error && 'border-red-500 text-red-600 placeholder-red-400 focus-visible:ring-red-500',
                    resize !== 'both' && `resize-${resize}`,
                    className
                )}
                {...props}
            />
        );

        return (
            <div
                className={cn('flex flex-col gap-1', fullWidth && 'w-full')}
                role="group"
                aria-labelledby={label ? `${textAreaId}-label` : undefined}
                aria-describedby={describedById}
            >
                {label && (
                    <label
                        id={`${textAreaId}-label`}
                        htmlFor={textAreaId}
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

                {textareaField}

                <div className="flex justify-between items-center">
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

                    {showCounter && typeof maxLength === 'number' && (
                        <Text
                            as="span"
                            size="xs"
                            variant={currentLength > maxLength ? 'danger' : 'muted'}
                            className="ml-auto"
                            aria-live="polite"
                        >
                            {currentLength} / {maxLength}
                        </Text>
                    )}
                </div>
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';
export default TextArea;
