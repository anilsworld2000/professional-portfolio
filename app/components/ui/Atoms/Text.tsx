// src/components/ui/Atoms/Text.tsx

'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';
import {
    Variant,
    Size,
    textVariantStyles,
    sizeStyles,
    TextAlign,
    textAlignClasses
} from '@/app/lib/variants';
import { PolymorphicComponentProps } from '@/app/types/types';

export type TextProps<E extends React.ElementType = 'p'> =
    PolymorphicComponentProps<E, TextOwnProps>;

type TextOwnProps = {
    children: React.ReactNode;
    variant?: Variant;
    size?: Size;
    align?: TextAlign;
    truncate?: boolean;
    italic?: boolean;
    underline?: boolean;
    bold?: boolean;
    className?: string;
};

export default function Text<E extends React.ElementType = 'p'>({
    as,
    children,
    variant = 'neutral',
    size = 'md',
    align = 'left',
    truncate = false,
    italic = false,
    underline = false,
    bold = false,
    className,
    ...rest
}: TextProps<E>) {
    const Component = as || 'p';

    return (
        <Component
            className={cn(
                'leading-snug',
                sizeStyles[size],
                textVariantStyles[variant],
                textAlignClasses[align],
                truncate && 'truncate',
                italic && 'italic',
                underline && 'underline',
                bold && 'font-semibold',
                className
            )}
            {...rest}
        >
            {children}
        </Component>
    );
}
