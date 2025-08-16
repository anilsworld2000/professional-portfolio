import Image from 'next/image';
import React, { useState } from 'react';
import { cn } from '@/app/lib/utils';
import Tooltip from './ToolTip';
import {
    Variant,
    Size,
    Rounded,
    variantStyles,
    sizeStyles,
    roundedClasses,
} from '@/app/lib/variants';

export type AvatarProps = {
    src?: string;
    alt?: string;
    fallback?: string | React.ReactNode;
    tooltip?: string;
    size?: Size;
    variant?: Variant;
    rounded?: Rounded;
    status?: 'online' | 'offline' | 'busy';
    className?: string;
};

export default function Avatar({
    src,
    alt = 'Avatar',
    fallback,
    tooltip,
    size = 'md',
    variant = 'neutral',
    rounded = 'full',
    status,
    className,
}: AvatarProps) {
    const [imgError, setImgError] = useState(false);
    const showImage = src && !imgError;

    const avatarContent = (
        <div
            className={cn(
                'relative overflow-hidden flex items-center justify-center font-medium',
                sizeStyles[size],
                variantStyles[variant],
                roundedClasses[rounded],
                className
            )}
            role="img"
            aria-label={alt}
        >
            {showImage ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    onError={() => setImgError(true)}
                    className={cn('object-cover', roundedClasses[rounded])}
                />
            ) : typeof fallback === 'string' ? (
                <span>{fallback}</span>
            ) : (
                fallback
            )}

            {status && (
                <span
                    className={cn(
                        'absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-white',
                        status === 'online' && 'bg-green-500',
                        status === 'offline' && 'bg-gray-400',
                        status === 'busy' && 'bg-red-500'
                    )}
                    aria-label={`Status: ${status}`}
                />
            )}
        </div>
    );

    return tooltip ? (
        <Tooltip content={tooltip}>
            {avatarContent}
        </Tooltip>
    ) : (
        avatarContent
    );
}
