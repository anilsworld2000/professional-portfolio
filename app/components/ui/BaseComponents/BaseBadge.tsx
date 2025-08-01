import { cn } from "@/app/lib/utils";
import GetIcon from "../Icons";

type Variant = 'info' | 'success' | 'warning' | 'danger' | 'neutral';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: Variant;
    size?: Size;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    iconOnly?: React.ReactNode;
    onRemove?: () => void;
    'aria-label'?: string;
}

const variantClasses: Record<Variant, string> = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800',
};

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm px-2 py-0.5 font-small',
  md: 'text-md px-1 py-1 font -medium',
  lg: 'text-lg px-4 py-1.5 font-large',
  xl: 'text-xl px-5 py-2 font-large',
};

export default function BaseBadge({
  children,
  variant = 'neutral',
  size = 'md',
  iconLeft,
  iconRight,
  iconOnly,
  onRemove,
  className,
  'aria-label': ariaLabel,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-all',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label={ariaLabel}
      {...props}
    >
      {iconLeft && <span className="mr-1.5">{iconLeft}</span>}

      <span>{children}</span>

      {iconRight && <span className="ml-1.5">{iconRight}</span>}

      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 p-0.5 rounded-full hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          aria-label={`Remove ${typeof children === 'string' ? children : 'badge'}`}
        >
            <div className="w-3.5 h-3.5" aria-hidden="true">
            {GetIcon('X')}
            </div>
        </button>
      )}
    </span>
  );
}