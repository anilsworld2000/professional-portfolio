'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';
import Input from '@/app/components/ui/Atoms/Input';
import Button from '@/app/components/ui/Atoms/Button';

import { Variant } from '@/app/lib/variants';

interface InputGroupProps extends React.ComponentProps<typeof Input> {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    prefix?: string;
    suffix?: string;
    disabled?: boolean
    error?: string
    buttonRight?: {
        label: string;
        onClick: () => void;
        variant?: string;
    };
    containerClassName?: string;
}

export default function InputGroup({
    iconLeft,
    iconRight,
    prefix,
    suffix,
    disabled = false,
    error,
    buttonRight,
    containerClassName,
    className,
    ...props
}: InputGroupProps) {
    const inputId = props.id || props.name || `input-group-${Math.random().toString(36).slice(2, 9)}`;

    return (
        <div className={cn('flex flex-col gap-1', containerClassName)}>
            <div className="relative flex w-full items-stretch">
                {/* Prefix */}
                {prefix && (
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-r-0 rounded-l-md">
                        {prefix}
                    </span>
                )}

                {/* Left Icon */}
                {iconLeft && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        {iconLeft}
                    </span>
                )}

                {/* Input */}
                <Input
                    id={inputId}
                    {...props}
                    className={cn(
                        'base-input-class', // your default styles
                        Boolean(prefix) && 'rounded-l-none',
                        Boolean(suffix) && 'rounded-r-none',
                        Boolean(iconLeft) && 'pl-10',
                        Boolean(iconRight) && 'pr-10',
                        Boolean(buttonRight) && 'rounded-r-none',
                        disabled && 'opacity-50 cursor-not-allowed',
                        Boolean(error) && 'border-red-500 text-red-600 placeholder-red-400 focus-visible:ring-red-500',
                        className
                    )}

                />

                {/* Right Icon */}
                {iconRight && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        {iconRight}
                    </span>
                )}

                {/* Suffix */}
                {suffix && (
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-l-0 rounded-r-md">
                        {suffix}
                    </span>
                )}

                {/* Button Right */}
                {buttonRight && (
                    <Button
                        size="sm"
                        variant={buttonRight.variant as Variant || 'primary'}
                        className="ml-2"
                        onClick={buttonRight.onClick}
                    >
                        {buttonRight.label}
                    </Button>
                )}
            </div>
        </div>
    );
}
