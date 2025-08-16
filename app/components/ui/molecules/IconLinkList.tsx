import { cn } from '@/app/lib/utils';
import Icon, { IconName } from '@/app/components/ui/Atoms/Icon';
import ButtonWithTooltip from './ButtonWithTooltip';
import { Size, Variant } from '@/app/lib/variants';

interface IconLink {
    name: string;
    href: string;
    icon?: React.ReactNode;
}

interface IconLinkListProps {
    items: IconLink[];
    variant?: string;
    size?: string;
    iconOnly?: boolean;
    ariaLabel?: string;
    layout?: 'horizontal' | 'vertical';
}

export default function IconLinkList({
    items,
    variant = 'ghost',
    size = 'sm',
    iconOnly = false,
    ariaLabel = 'Project Links',
    layout = 'horizontal',
}: IconLinkListProps) {
    if (!items || items.length === 0) return null;

    const isVertical = layout === 'vertical';

    return (
        <nav aria-label={ariaLabel}>
            <ul
                className={cn(
                    'list-none p-0 m-0',
                    isVertical ? 'flex flex-col gap-3' : 'flex flex-wrap gap-3'
                )}
                role="list"
            >
                {items.map(({ name, href, icon }) => (
                    <li key={name}>
                        <ButtonWithTooltip
                            as="a"
                            href={href || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant={variant as Variant}
                            size={size as Size}
                            iconOnly={iconOnly}
                            aria-label={iconOnly ? `Open ${name}` : undefined}
                            role="link"
                            tooltip={name}
                        >
                            {iconOnly ? (
                                <>
                                    {icon ?? <Icon name={name as IconName} />}
                                    <span className="sr-only">{name}</span>
                                </>
                            ) : (
                                <>
                                    {icon && <span className="mr-2">{icon}</span>}
                                    <span>{name}</span>
                                </>
                            )}
                        </ButtonWithTooltip>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
