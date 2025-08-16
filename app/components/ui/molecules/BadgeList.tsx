// src/components/ui/Atoms/BadgeList.tsx

import Badge from '@/app/components/ui/Atoms/Badge';
import Heading from '@/app/components/ui/Atoms/Heading';

interface BadgeListProps {
    items: string[];
    variant?: string;
    size?: string;
    ariaLabel?: string;
    title?: string;
    titleClassName?: string;
    subTitle?: string;
    subTitleClassName?: string;
}

export default function BadgeList({
    items,
    variant = 'neutral',
    size = 'sm',
    ariaLabel = 'Badges',
    title,
    titleClassName,
    subTitle,
    subTitleClassName,
}: BadgeListProps) {
    if (!items || items.length === 0) return null;

    const headingId = title ? `badge-list-heading-${title.replace(/\s+/g, '-').toLowerCase()}` : undefined;

    return (
        <section
            aria-labelledby={headingId}
            role="group"
            className="space-y-2"
        >
            {title && (
                <Heading
                    title={title}
                    subtitle={subTitle}
                    titleClassName={titleClassName || 'text-sm font-semibold text-gray-800'}
                    subTitleClassName={subTitleClassName || 'text-xs text-gray-500'}
                />
            )}

            <ul className="flex flex-wrap gap-2" role="list" aria-label={ariaLabel}>
                {items.map((item, index) => (
                    <li key={index} role="listitem">
                        <Badge variant={variant} size={size} aria-label={item}>
                            {item}
                        </Badge>
                    </li>
                ))}
            </ul>
        </section>
    );
}
