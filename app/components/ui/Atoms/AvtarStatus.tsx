// src/components/ui/Atoms/AvatarStatus.tsx
'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';
import { Status, statusColorMap } from '@/app/lib/variants';

interface AvatarStatusProps {
    status: Status;
    className?: string;
}

export default function AvatarStatus({ status, className }: AvatarStatusProps) {
    return (
        <span
            className={cn(
                'absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ring-2 ring-white',
                statusColorMap[status],
                className
            )}
            role="status"
            aria-label={`Status: ${status}`}
        />
    );
}
