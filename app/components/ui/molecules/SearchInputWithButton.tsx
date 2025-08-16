'use client';

import React, { useState, useRef } from 'react';
import { cn } from '@/app/lib/utils';
import Input from '@/app/components/ui/Atoms/Input';
import Button from '@/app/components/ui/Atoms/Button';
import { Search } from 'lucide-react';
import { Size, Variant } from '@/app/lib/variants';

interface SearchInputWithButtonProps {
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    placeholder?: string;
    label?: string;
    tooltip?: string;
    helperText?: string;
    size?: Size;
    variant?: Variant;
    fullWidth?: boolean;
    isLoading?: boolean;
    buttonLabel?: string;
    className?: string;
}

export default function SearchInputWithButton({
    value: controlledValue,
    onChange,
    onSearch,
    placeholder = 'Search...',
    label = 'Search',
    tooltip,
    helperText,
    size = 'md',
    variant = 'outline',
    fullWidth = true,
    isLoading = false,
    buttonLabel = 'Search',
    className,
}: SearchInputWithButtonProps) {
    const [internalValue, setInternalValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        if (onChange) onChange(newVal);
        else setInternalValue(newVal);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch?.(value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            role="search"
            aria-label={label}
            className={cn('flex items-center gap-2', fullWidth && 'w-full')}
        >
            <Input
                ref={inputRef}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                label={label}
                tooltip={tooltip}
                helperText={helperText}
                size={size}
                variant={variant}
                fullWidth={fullWidth}
                className={className}
                aria-label="Search input"
            />

            <Button
                type="submit"
                variant="primary"
                size={size}
                isLoading={isLoading}
                iconOnly={!buttonLabel}
                aria-label="Submit search"
            >
                {buttonLabel || <Search size={18} />}
            </Button>
        </form>
    );
}
