'use client'

import React, {
  useState,
  useMemo,
  useEffect,
  createContext,
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
  useCallback,
} from 'react'
import { createPortal } from 'react-dom'
import BaseImage from '@/app/components/ui/Atoms/BaseImage'
import { cn } from '@/app/lib/utils'
import Button from '@/app/components/ui/Buttons'
import BaseBadge from '@/app/components/ui/Atoms/BaseBadge'
import Heading from '@/app/components/ui/Atoms/Heading'
import { GetIcon } from './Icon'

// --------------------------------------------
// Utility: Toggle hook
// --------------------------------------------
function useToggle(initial = false): [boolean, () => void] {
  const [on, setOn] = useState(initial)
  const toggle = useCallback(() => setOn(prev => !prev), [])
  return [on, toggle]
}

type MediaProps = {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  objectFit?: 'cover' | 'contain'
  wrapperClassName?: string
  imgClassName?: string
}

// --------------------------------------------
// Theme variants
// --------------------------------------------
type Variant = 'light' | 'dark' | 'primary' | 'warning'
const variantStyles: Record<Variant, string> = {
  light: 'bg-white text-black border-gray-200 shadow-md',
  dark: 'bg-gray-800 text-white border-gray-700 shadow-lg',
  primary: 'bg-blue-50 text-blue-900 border-blue-200 shadow',
  warning: 'bg-yellow-50 text-yellow-900 border-yellow-200 shadow',
}

// --------------------------------------------
// Card Props (Polymorphic)
// --------------------------------------------
type PolymorphicProps<C extends ElementType> = {
  as?: C
  variant?: Variant
  title?: string
  subtitle?: string
  date?: string
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<C>

// --------------------------------------------
// Context for compound children (if needed)
// --------------------------------------------
interface CardContextValue {
  expanded: boolean
  toggleExpand: () => void
}
const CardContext = createContext<CardContextValue | null>(null)

export function useCardContext() {
  const context = React.useContext(CardContext);
  if (!context) throw new Error('Card context must be used within BaseCard');
  return context;
}
// --------------------------------------------
// BaseCard component
// --------------------------------------------
function BaseCard<C extends ElementType = 'article'>({
  as,
  variant = 'light',
  title,
  subtitle,
  date,
  children,
  className,
  ...rest
}: PolymorphicProps<C>) {
  const Component = as || 'article'
  const [expanded, toggleExpand] = useToggle(false)

  const formattedDate = useMemo(() => {
    if (!date) return null
    const d = new Date(date)
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }, [date])

  useEffect(() => {
    if (!expanded) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleExpand()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expanded, toggleExpand])

  const cardJSX = (
    <Component
      {...rest}
      className={cn(
        'relative transition-all duration-300 rounded-2xl border cursor-pointer',
        variantStyles[variant],
        expanded
          ? 'p-6 fixed inset-0 z-50 overflow-y-auto overflow-x-hidden' // key fix
          : 'p-4 overflow-hidden', // prevents bleed in normal state
        className
      )}
      role="region"
      aria-label={`Card for ${title}`}
      onClick={() => !expanded && toggleExpand()}
    >
      {expanded && (
        <div className="absolute top-4 right-4 z-10">
          <Button.Ghost
            size="sm"
            rounded="full"
            aria-label="Close expanded card"
            iconOnly={GetIcon('X')}
            onClick={(e) => {
              e.stopPropagation()
              toggleExpand()
            }}
          />
        </div>
      )}

      {!expanded && (
        <div className="absolute top-4 right-4 z-10">
          <Button.Ghost
            size="sm"
            rounded="full"
            aria-label="Close expanded card"
            iconOnly={GetIcon('Expand')}
            onClick={(e) => {
              e.stopPropagation()
              toggleExpand()
            }}
          />
        </div>
      )}

      <CardContext.Provider value={{ expanded, toggleExpand }}>
        {title && <BaseCard.Header title={title} subtitle={subtitle} className="mb-2" />}
        {formattedDate && <p className="text-xs opacity-75 mb-4">{formattedDate}</p>}
        {children}
      </CardContext.Provider>
    </Component>
  )

  return expanded
    ? createPortal(
      <>
        {/* Background overlay */}
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" />

        {/* Modal container */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
          <div className="w-full max-w-3xl ">
            {cardJSX}
          </div>
        </div>
      </>,
      document.body
    )
    : cardJSX
}

// --------------------------------------------
// Subcomponents as static properties
// --------------------------------------------
BaseCard.Header = function Header({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn('mb-3', className)}>
      <Heading
        title={title}
        subtitle={subtitle}
        titleClassName="text-xl font-semibold"
        subTitleClassName="text-sm opacity-75 mt-1"
      />
    </div>
  )
}

BaseCard.Media = function Media({
  src,
  alt,
  fill = true,
  width,
  height,
  objectFit = 'cover',
  wrapperClassName,
  imgClassName,
}: MediaProps) {
  return (
    <BaseImage
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      objectFit={objectFit}
      wrapperClassName={cn(
        'relative overflow-hidden w-full h-60 rounded-xl mb-4',
        wrapperClassName
      )}
      imgClassName={imgClassName}
    />
  )
}

BaseCard.Content = function Content({
  date,
  description,
  badges = [],
  tags = [],
  links = [],
}: {
  date?: string;
  description?: string;
  badges?: string[];
  tags?: string[];
  links?: { name: string; href: string; icon?: React.ReactNode }[];
}) {
  const { expanded } = useCardContext();

  if (!expanded) {
    return null;
  }

  return (
    <>
      {date && (
        <time
          className="block text-xs text-gray-500"
          dateTime={new Date(date).toISOString()}
        >
          {new Date(date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
      )}

      {description && <BaseCard.Body>{description}</BaseCard.Body>}

      <BaseCard.Footer badges={badges} tags={tags} links={links} />
    </>
  );
};

BaseCard.Body = function Body({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('mt-4 text-sm break-words', className)}>{children}</div>
}

BaseCard.Footer = function Footer({
  badges = [],
  tags = [],
  links = [],
  className,
}: {
  badges?: string[]
  tags?: string[]
  links?: { name: string; href: string; icon?: ReactNode }[]
  className?: string
}) {
  return (
    <div className={cn('mt-6', className)}>
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <BaseBadge key={i} size="sm" variant="neutral">
              {b}
            </BaseBadge>
          ))}
        </div>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 rounded bg-gray-200 text-gray-800"
            >
              #{t}
            </span>
          ))}
        </div>
      )}

      {links.length > 0 && (
        <nav aria-label="Related links" className="flex gap-2 mt-4">
          {links.map((link, i) => (
            <Button.Icon
              key={i}
              href={link.href}
              tooltipContent={link.name}
              iconOnly={link.icon ?? null}
              size="md"
              aria-label={`Open ${link.name}`}
            />
          ))}
        </nav>
      )}
    </div>
  )
}

export default BaseCard
