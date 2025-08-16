'use client'

import { cn } from '@/app/lib/utils'
import { Alignment, Orientation } from '@/app/lib/variants'

export interface NavbarProps {
    orientation?: Orientation,
    alignment?: Alignment,
    className?: string,
    children?: React.ReactNode,
}

function getAlignmentClass(orientation: Orientation, alignment: Alignment) {
    if (orientation === 'horizontal') {
        switch (alignment) {
            case 'center':
                return 'justify-center';
            case 'end':
                return 'justify-end';
            case 'justify':
                return 'justify-between';
            case 'start':
            default:
                return 'justify-start';
        }
    } else { // vertical
        switch (alignment) {
            case 'center':
                return 'items-center'; // Align items horizontally in the center
            case 'end':
                return 'items-end'; // Align items horizontally at the end
            case 'justify':
                return 'justify-between'; // Distributes items vertically with space between
            case 'start':
            default:
                return 'items-start'; // Align items horizontally at the start
        }
    }
};

interface NavItemsProps {
    children: React.ReactNode;
    className?: string;
}

export function NavItems({ children, className = '' }: NavItemsProps) {
    return (
        <div className={className}> {children} </div>
    );
};
export default function Navbar({
    orientation = 'horizontal',
    alignment = 'start',
    className = '',
    children,
}: NavbarProps) {
    const orientationClass = orientation === 'vertical' ? 'flex-col' : 'flex-row';
    const alignmentClass = getAlignmentClass(orientation, alignment);

    return (
        <nav className={cn(orientationClass, alignmentClass, className)}>
            {children}
        </nav>
    )
}
