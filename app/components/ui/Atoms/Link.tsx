import React from 'react';
import { cn } from '@/app/lib/utils';
import { Variant, textVariantStyles } from '@/app/lib/variants';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: React.ReactNode;
    underline?: boolean;
    bold?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    iconOnly?: boolean;
    external?: boolean;
    variant?: Variant;
    className?: string;
}

export default function Link({
    children,
    underline = false,
    bold = false,
    icon,
    iconPosition = 'left',
    iconOnly = false,
    external = false,
    variant = 'primary',
    className,
    ...props
}: LinkProps) {
    return (
        <a
            {...props}
            target={external ? '_blank' : props.target}
            rel={external ? 'noopener noreferrer' : props.rel}
            className={cn(
                'inline-flex items-center gap-1 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                textVariantStyles[variant],
                underline && 'underline',
                bold && 'font-semibold',
                iconOnly && 'p-2 rounded-full justify-center',
                className
            )}
            aria-label={iconOnly ? (typeof children === 'string' ? children : 'Link') : undefined}
        >
            {!iconOnly && icon && iconPosition === 'left' && <span className="mr-1">{icon}</span>}
            {!iconOnly && <span>{children}</span>}
            {!iconOnly && icon && iconPosition === 'right' && <span className="ml-1">{icon}</span>}
            {external && !iconOnly && <span aria-hidden>↗</span>}
            {iconOnly && icon}
        </a>
    );
}
