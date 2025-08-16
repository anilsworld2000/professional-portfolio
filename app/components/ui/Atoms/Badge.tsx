'use client';

import { cn } from '@/app/lib/utils';
import { variantStyles, sizeStyles, cursorClasses, roundedClasses } from '@/app/lib/variants';
import Icon from './Icon';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode;
    variant?: string;
    size?: string;
    rounded?: keyof typeof roundedClasses;
    cursor?: keyof typeof cursorClasses;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    iconOnly?: React.ReactNode;
    onRemove?: () => void;
    'aria-label'?: string;
}

export default function Badge({
    children,
    variant = 'neutral',
    size = 'sm',
    rounded = 'full',
    cursor = 'default',
    iconLeft,
    iconRight,
    iconOnly,
    onRemove,
    className,
    'aria-label': ariaLabel,
    ...props
}: BadgeProps) {
    const contentLabel = ariaLabel ?? (typeof children === 'string' ? children : 'badge');

    return (
        <span
            role="status"
            aria-label={contentLabel}
            {...props}
            className={cn(
                'inline-flex items-center font-medium whitespace-nowrap transition-colors',
                variantStyles[variant],
                sizeStyles[size],
                roundedClasses[rounded],
                cursorClasses[cursor],
                Boolean(iconOnly) && 'p-2 justify-center',
                className
            )}
        >
            {/* Icon Only */}
            {iconOnly ? (
                <span className="w-4 h-4">{iconOnly}</span>
            ) : (
                <>
                    {iconLeft && <span className="mr-1.5">{iconLeft}</span>}
                    <span className="truncate">{children}</span>
                    {iconRight && <span className="ml-1.5">{iconRight}</span>}
                </>
            )}

            {onRemove && (
                <button
                    type="button"
                    onClick={onRemove}
                    aria-label={`Remove ${contentLabel}`}
                    className="ml-1 p-1 rounded-full hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                    <span className="w-3.5 h-3.5" aria-hidden="true">
                        <Icon name='X'/>
                    </span>
                </button>
            )}
        </span>
    );
}
