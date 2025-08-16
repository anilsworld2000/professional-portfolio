import { cn } from "@/app/lib/utils";
import { Variant, variantStyles } from "@/app/lib/variants";

type CardProps<E extends React.ElementType = 'section'> = {
    as?: E;
    variant?: Variant;
    children?: React.ReactNode;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'className'>;

export default function Card<E extends React.ElementType = 'section'>({
    as,
    variant = 'light',
    children,
    className = '',
    ...rest
}: CardProps<E>) {
    const Component = as || 'section';
    const variantClass = variantStyles[variant];

    return (
        <Component
            {...rest}
            role="region"
            aria-label="Card"
            className={cn(
                'relative shadow-md rounded-2xl border p-4 w-full max-w-sm transition-all duration-300 ease-in-out',
                variantClass,
                className
            )}
        >
            <div className="mt-6">{children}</div>
        </Component>
    );
}
