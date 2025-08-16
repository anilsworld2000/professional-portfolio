import Badge, { BadgeProps } from '@/app/components/ui/Atoms/Badge';
import Tooltip from '@/app/components/ui/Atoms/ToolTip';

interface BadgeWithTooltipProps extends BadgeProps {
    tooltip: string;
    tooltipTitle?: string;
    tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
}

export default function BadgeWithTooltip({
    tooltip,
    tooltipTitle,
    tooltipSide = 'top',
    children,
    ...badgeProps
}: BadgeWithTooltipProps) {
    return (
        <Tooltip content={tooltip} title={tooltipTitle} side={tooltipSide}>
            <Badge {...badgeProps}>{children}</Badge>
        </Tooltip>
    );
}
