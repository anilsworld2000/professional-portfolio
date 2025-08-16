'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/app/lib/utils';
import {
    Variant,
    Size,
    Rounded,
    variantStyles,
    sizeStyles,
    roundedClasses,
    iconSizeMap,
} from '@/app/lib/variants';
import Image from 'next/image';

export interface NavbarLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    as?: React.ElementType;
    href: string;
    variant?: Variant;
    size?: Size;
    rounded?: Rounded;
    icon?: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    isActive?: boolean;
}

export default function NavBarLink({
    as: Component = Link,
    href,
    variant = 'ghost',
    size = 'md',
    rounded = 'md',
    icon,
    imageSrc,
    imageAlt,
    isActive,
    className,
    children,
    ...props
}: NavbarLinkProps) {
    const pathname = usePathname();
    const activeState = isActive ?? pathname === href;

    return (
        <Component
            href={href}
            aria-current={activeState ? 'page' : undefined}
            className={cn(
                'inline-flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
                variantStyles[variant],
                sizeStyles[size],
                roundedClasses[rounded],
                activeState && 'ring-2 ring-offset-2 ring-current',
                className
            )}
            {...props}
        >
            {icon && (
                <span className={cn('flex-shrink-0', iconSizeMap[size])}>{icon}</span>
            )}
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={imageAlt || ''}
                    className={cn('flex-shrink-0 rounded-full', iconSizeMap[size])}
                />
            )}
            {children && <span>{children}</span>}
        </Component>
    );
}
