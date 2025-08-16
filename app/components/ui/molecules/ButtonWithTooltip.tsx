'use client';

import React from 'react';
import Button, { ButtonProps } from '@/app/components/ui/Atoms/Button';
import Tooltip from '@/app/components/ui/Atoms/ToolTip';

type ButtonWithTooltipOwnProps = {
    tooltip: string;
    tooltipTitle?: string;
    tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
};

type ButtonWithTooltipProps<E extends React.ElementType> =
    ButtonWithTooltipOwnProps & ButtonProps<E>;

// 🟩 Fix generic definition
export default function ButtonWithTooltip<E extends React.ElementType = 'button'>(
    props: ButtonWithTooltipProps<E>
) {
    const {
        tooltip,
        tooltipTitle,
        tooltipSide = 'top',
        children,
        ...rest
    } = props;

    return (
        <Tooltip content={tooltip} title={tooltipTitle} side={tooltipSide}>
            <Button
                as={rest.as as React.ElementType}
                variant={rest.variant}
                size={rest.size}
                fullWidth={rest.fullWidth}
                iconOnly={rest.iconOnly}
                isLoading={rest.isLoading}
                disabled={rest.disabled}
                cursor={rest.cursor}
                className={rest.className}
                position={rest.position}
                rounded={rest.rounded}
            >{children}</Button>
        </Tooltip>
    );
}
