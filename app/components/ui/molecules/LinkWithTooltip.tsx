import Tooltip from '@/app/components/ui/Atoms/ToolTip';
import Link, { LinkProps } from '@/app/components/ui/Atoms/Link';
import { Position } from '@/app/lib/variants';

interface LinkWithTooltipProps extends LinkProps {
    tooltip: string;
    tooltipTitle?: string;
    tooltipSide?: Position;
}

export default function LinkWithTooltip({
    tooltip,
    tooltipTitle,
    tooltipSide = 'top',
    children,
    ...rest
}: LinkWithTooltipProps) {
    return (
        <Tooltip content={tooltip} title={tooltipTitle} side={tooltipSide}>
            <Link {...rest}>
                {children}
            </Link>
        </Tooltip>
    );
}
