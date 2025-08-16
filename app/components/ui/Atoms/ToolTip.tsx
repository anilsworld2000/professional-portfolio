'use client';

import React, { useState } from 'react';
import { cn } from '@/app/lib/utils';
import { Position } from '@/app/lib/variants';

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    title?: React.ReactNode;
    side?: Position;
    className?: string;
}

export default function Tooltip({
    children,
    content,
    title,
    side = 'top',
    className = '',
}: TooltipProps) {
    const [visible, setVisible] = useState(false);

    const getPosition = () => {
        switch (side) {
            case 'top':
                return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
            case 'bottom':
                return 'top-full left-1/2 -translate-x-1/2 mt-2';
            case 'left':
                return 'right-full top-1/2 -translate-y-1/2 mr-2';
            case 'right':
                return 'left-full top-1/2 -translate-y-1/2 ml-2';
            default:
                return '';
        }
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onFocus={() => setVisible(true)}
            onBlur={() => setVisible(false)}
        >
            {children}
            {visible && (
                <div
                    role="tooltip"
                    className={cn(
                        'absolute z-50 whitespace-nowrap rounded-md px-3 py-2 text-sm text-justify shadow-md transition-opacity duration-200 border',
                        'bg-white text-gray-900 border-gray-200',
                        'dark:bg-gray-800 dark:text-white dark:border-transparent',
                        getPosition(),
                        className
                    )}>
                    {title && <div className="font-semibold mb-0.75">{title}</div>}
                    <div>{content}</div>
                </div>
            )}
        </div>
    );
}
