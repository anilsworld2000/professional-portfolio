'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/app/lib/utils';
import { Variant, Size, variantStyles, sizeStyles } from '@/app/lib/variants';
import { X } from 'lucide-react';
import Text from '@/app/components/ui/Atoms/Text';

type Option = {
    label: string;
    value: string;
};

type AutocompleteMultiSelectProps = {
    label?: string;
    placeholder?: string;
    options: Option[];
    selected: Option[];
    setSelected: (selected: Option[]) => void;
    helperText?: string;
    error?: string;
    tooltip?: string;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    fullWidth?: boolean;
    className?: string;
};

export default function AutocompleteMultiSelect({
    label,
    placeholder = 'Select...',
    options,
    selected,
    setSelected,
    helperText,
    error,
    //tooltip,
    variant = 'outline',
    size = 'md',
    disabled = false,
    fullWidth = false,
    className,
}: AutocompleteMultiSelectProps) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const filteredOptions = options.filter(
        (opt) =>
            opt.label.toLowerCase().includes(query.toLowerCase()) &&
            !selected.find((s) => s.value === opt.value)
    );

    const handleSelect = (option: Option) => {
        setSelected([...selected, option]);
        setQuery('');
        setIsOpen(false);
    };

    const handleRemove = (option: Option) => {
        setSelected(selected.filter((item) => item.value !== option.value));
    };

    useEffect(() => {
        if (query.length > 0) setIsOpen(true);
    }, [query]);

    return (
        <div
            className={cn(
                'flex flex-col gap-1 relative',
                fullWidth && 'w-full',
                className
            )}
        >
            {label && (
                <label className="text-sm font-medium text-gray-700">{label}</label>
            )}

            <div
                className={cn(
                    'flex flex-wrap items-center gap-1 p-2 border focus-within:ring-2 focus-within:ring-offset-2 transition-all rounded-md',
                    variantStyles[variant],
                    sizeStyles[size],
                    error && 'border-red-500 ring-red-500',
                    disabled && 'opacity-50 pointer-events-none'
                )}
                //role="combobox"
                aria-haspopup="listbox"
                //aria-expanded={isOpen ? 'true' : 'false'}
                //aria-disabled={disabled ? 'true' : 'false'}
            >
                {selected.map((option) => (
                    <span
                        key={option.value}
                        className="flex items-center gap-1 bg-gray-200 text-sm px-2 py-1 rounded-full"
                    >
                        {option.label}
                        <button
                            type="button"
                            onClick={() => handleRemove(option)}
                            className="hover:text-red-600 focus:outline-none"
                            aria-label={`Remove ${option.label}`}
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </span>
                ))}

                <input
                    ref={inputRef}
                    type="text"
                    className="flex-1 border-none focus:outline-none bg-transparent min-w-[100px]"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={disabled}
                    aria-autocomplete="list"
                    aria-controls="autocomplete-list"
                    aria-activedescendant=""
                />
            </div>

            {isOpen && filteredOptions.length > 0 && (
                <ul title='Options'
                    id="autocomplete-list"
                    ref={listRef}
                    className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg"
                    role="listbox"
                >
                    {filteredOptions.map((option) => (
                        <li
                            key={option.value}
                            role="option"
                            aria-selected="false"
                            onClick={() => handleSelect(option)}
                            className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}

            {(helperText || error) && (
                <Text
                    as="span"
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
