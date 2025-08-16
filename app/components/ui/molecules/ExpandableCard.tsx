'use client';

import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/app/lib/utils';
import { Variant } from '@/app/lib/variants';
import Card from '@/app/components/ui/Atoms/Card';
import ButtonWithTooltip from './ButtonWithTooltip';
import Icon from '../Atoms/Icon';

interface ExpandableCardProps {
    variant?: Variant;
    children?: React.ReactNode;
    className?: string;
    initiallyExpanded?: boolean;
    onToggle?: (expanded: boolean) => void;
}

export default function ExpandableCard({
    variant = 'light',
    children,
    className = '',
    initiallyExpanded = false,
    onToggle,
}: ExpandableCardProps) {
    const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

    const toggleExpand = useCallback(() => {
        setIsExpanded((prev) => {
            const next = !prev;
            onToggle?.(next);
            return next;
        });
    }, [onToggle]);

    // Escape key + scroll lock
    useEffect(() => {
        if (!isExpanded) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') toggleExpand();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isExpanded, toggleExpand]);

    return (
        <>
            {/* Collapsed View */}
            {!isExpanded && (
                <Card variant={variant} className={className}>
                    <ButtonWithTooltip
                        aria-label="Expand card"
                        onClick={toggleExpand}
                        variant={variant}
                        size="lg"
                        className="top-1 right-1 z-10 border-none hover:bg-gray-100 focus-visible:ring-1"
                        position="absolute"
                        iconOnly tooltip={'Expand'}>
                        <Icon name='Expand' /> 
                    </ButtonWithTooltip>
                    <div className="mt-4">{children}</div>
                </Card>
            )}

            {/* Expanded View */}
            {isExpanded &&
                createPortal(
                    <>
                        {/* Overlay */}
                        <div
                            role="presentation"
                            className="fixed inset-0 z-40 bg-black/20"
                            onClick={toggleExpand}
                            aria-hidden="true"
                        />

                        {/* Modal */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4 py-4 sm:py-6 overflow-y-auto">
                            <Card
                                variant={variant}
                                className={cn(
                                    'w-full max-w-full sm:max-w-3xl max-h-[90vh] overflow-y-auto relative p-4 sm:p-6',
                                    className
                                )}
                            >
                                <ButtonWithTooltip
                                    aria-label="Collapse card"
                                    onClick={toggleExpand}
                                    variant={variant}
                                    size="lg"
                                    className="top-1 right-1 z-10 border-none hover:bg-gray-100 focus-visible:ring-1"
                                    position="absolute"
                                    iconOnly tooltip={'Collapse'}>
                                    <Icon name='X' /> 
                                </ButtonWithTooltip>
                                <div className="mt-4">{children}</div>
                            </Card>
                        </div>
                    </>,
                    document.body
                )}
        </>
    );
}
