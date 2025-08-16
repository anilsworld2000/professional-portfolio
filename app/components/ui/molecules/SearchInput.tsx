'use client';

import React, { useState, useRef } from 'react';
import { cn } from '@/app/lib/utils';
import Input from '@/app/components/ui/Atoms/Input';
import { Search, X } from 'lucide-react';
import { Size, Variant } from '@/app/lib/variants';

interface SearchInputProps {
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
    showClear?: boolean;
    className?: string;
}

export default function SearchInput({
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
    //isLoading = false,
    showClear = true,
    className,
}: SearchInputProps) {
    const [internalValue, setInternalValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        if (onChange) onChange(newVal);
        else setInternalValue(newVal);
    };

    const handleClear = () => {
        if (onChange) onChange('');
        else setInternalValue('');
        inputRef.current?.focus();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch?.(value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn('relative flex items-center', fullWidth && 'w-full')}
            role="search"
            aria-label={label}
        >
            <span className="absolute left-3 text-gray-400 pointer-events-none">
                <Search size={18} />
            </span>

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
                className={cn('pl-10 pr-10', className)}
                aria-label="Search input"
            />

            {(showClear && value) && (
                <button
                    type="button"
                    onClick={handleClear}
                    className="absolute right-3 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                >
                    <X size={16} />
                </button>
            )}
        </form>
    );
}
