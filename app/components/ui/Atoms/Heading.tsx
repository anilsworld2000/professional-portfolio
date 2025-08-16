// src/components/ui/Atoms/Heading.tsx

import { cn } from '@/app/lib/utils';
import { Variant, textVariantStyles } from '@/app/lib/variants';

type HeadingProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  variant?: Variant;
  titleClassName?: string;
  subTitleClassName?: string;
  className?: string;
};

export default function Heading({
  title,
  subtitle,
  as: Tag = 'h2',
  align = 'left',
  variant = 'dark',
  titleClassName = 'text-3xl font-bold',
  subTitleClassName = 'text-gray-500',
  className = '',
}: HeadingProps) {
  return (
    <div className={cn('mb-2', `text-${align}`, className)}>
      <Tag className={cn(titleClassName, textVariantStyles[variant])}>
        {title}
      </Tag>
      {subtitle && <p className={subTitleClassName}>{subtitle}</p>}
    </div>
  );
}
