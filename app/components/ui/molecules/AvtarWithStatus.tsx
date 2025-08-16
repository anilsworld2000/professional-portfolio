// src/components/ui/Molecules/AvatarWithStatus.tsx
'use client';

import Image from 'next/image';
import AvatarStatus from '@/app/components/ui/Atoms/AvtarStatus';
import Tooltip from '@/app/components/ui/Atoms/ToolTip';
import { cn } from '@/app/lib/utils';
import { Status } from '@/app/lib/variants';

interface AvatarWithStatusProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg'; // Tailored sizes
  status: Status;
  tooltip?: boolean;
  tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
};

export default function AvatarWithStatus({
  src,
  alt = 'User avatar',
  size = 'md',
  status,
  tooltip = true,
  tooltipSide = 'top',
  className = '',
}: AvatarWithStatusProps) {
  const avatar = (
    <div className={cn('relative inline-block', sizeMap[size], className)}>
      <Image
        src={src}
        alt={alt}
        className="rounded-full object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 32px"
      />
      <AvatarStatus status={status} />
    </div>
  );

  return tooltip ? (
    <Tooltip content={`Status: ${status}`} side={tooltipSide}>
      {avatar}
    </Tooltip>
  ) : (
    avatar
  );
}
