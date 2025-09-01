import { cn } from "@/app/lib/utils";
import { Rounded, roundedClasses, Variant, variantStyles } from "@/app/lib/variants";

type CardProps<E extends React.ElementType = 'section'> = {
    as?: E;
    variant?: Variant;
    rounded?: Rounded;
    children?: React.ReactNode;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'className'>;

export default function Card<E extends React.ElementType = 'section'>({
    as,
    variant = 'light',
    rounded = 'lg',
    children,
    className = '',
    ...rest
}: CardProps<E>) {
    const Component = as || 'section';
    const variantClass = variantStyles[variant];
    const roundedClass = roundedClasses[rounded];

    return (
        <Component
            {...rest}
            role="region"
            aria-label="Card"
            className={cn(
                'relative shadow-md border p-4 w-full max-w-sm transition-all duration-300 ease-in-out',
                variantClass,
                roundedClass,
                className
            )}
        >
            {children}
        </Component>
    );
}
