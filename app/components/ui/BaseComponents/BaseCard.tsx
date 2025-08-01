'use client'

import React, { JSX, useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/app/lib/utils'

import Button from '@/app/components/ui/Buttons'
import BaseBadge from '@/app/components/ui/BaseComponents/BaseBadge'
import Heading from '../../common/Heading'

export type IconRecord = Record<string, JSX.Element>;
export type CardImage = {path: string, width?: string, height?: string};

export interface BaseCardProps {
  title: string
  subtitle?: string
  date?: string
  image?: CardImage
  fallbackText?: string
  tags?: string[]
  badges?: string[]
  links?: { name: string; link: string; }[]
  linkIcons?: IconRecord,
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  shadow?: string
  children?: React.ReactNode // custom content slot
}

const BaseCard: React.FC<BaseCardProps> = ({
  title,
  subtitle,
  date,
  image = { path:'', width:'w-full', height:'h-60'},
  fallbackText = 'No additional details provided.',
  tags = [],
  badges = [],
  links = [],
  linkIcons = {},
  backgroundColor = 'bg-white',
  textColor = 'text-black',
  borderColor = 'border-gray-200',
  shadow = 'shadow-md',
  children,
}) => {
  const [expanded, setExpanded] = useState(false)

  const hasDetails =
    !!subtitle || !!image || tags.length > 0 || badges.length > 0 || links.length > 0 || !!children

  return (
    <article
      className={cn(
        'relative transition-all duration-300 rounded-2xl border cursor-pointer',
        backgroundColor,
        textColor,
        borderColor,
        shadow,
        expanded ? 'p-6 w-full h-auto fixed inset-0 z-50 overflow-y-auto' : 'p-4'
      )}
      role="region"
      aria-label={`Card for ${title}`}
      onClick={() => !expanded && setExpanded(true)}
    >
      {/* Close Button */}
      {expanded && (
        <div className="absolute top-4 right-4 z-10">
          <Button.Ghost
            size="sm"
            rounded="full"
            aria-label="Close expanded card"
            onClick={(e: { stopPropagation: () => void }) => {
              e.stopPropagation()
              setExpanded(false)
            }}
            iconOnly={<X size={18} />}
          />
        </div>
      )}

      {/* Image */}
      {image && (
        <figure className="mb-4">
          <img
            src={image.path}
            alt={`${title} preview`}
            className={cn("object-cover rounded-xl", image.width, image.height)}
          />
        </figure>
      )}

      {/* Title + Subtitle */}
      <Heading
        title={title}
        titleClassName="text-xl font-semibold"
        subtitle={subtitle}
        subTitleClassName="text-sm opacity-75 mt-1">
      </Heading>

      {date && (
        <header>
          <time
            className="block text-xs text-gray-500 mt-1"
            dateTime={new Date(date).toISOString()}
            aria-label="data"
          >
            {new Date(date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </header>
      )}

      {/* Badges */}
      {badges.length > 0 && (
        <section
          className="flex flex-wrap gap-2 mt-4"
          aria-label="Highlights"
        >
          {badges.map((badge, idx) => (
            <BaseBadge key={idx} size="sm" variant="neutral" role="listitem">
              {badge}
            </BaseBadge>
          ))}
        </section>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <section
          className="flex flex-wrap gap-2 mt-4"
          aria-label="Tags"
          role="list"
        >
          {tags.map((tag, idx) => (
            <span
              key={idx}
              role="listitem"
              className="text-xs px-2 py-0.5 rounded bg-gray-200 text-gray-800"
            >
              #{tag}
            </span>
          ))}
        </section>
      )}

      {/* Links */}
      {links.length > 0 && (
        <nav aria-label="Related links" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {links.map((item, idx) => (
              <li key={idx}>
                <Button.Icon
                  key={idx}
                  href={item.link}
                  tooltipContent={item.name}
                  iconOnly={linkIcons[item.name] === null ? 'null' : linkIcons[item.name]}
                  size='md'
                  aria-label={`Open ${item.name} profile`}
                  className=" text-gray-700 hover:text-black transition"
                />
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Custom Slot Content */}
      {children && <div className="mt-4">{children}</div>}

      {/* Fallback Text */}
      {!hasDetails && fallbackText && (
        <p className="mt-4 text-sm italic opacity-60">{fallbackText}</p>
      )}
    </article>
  )
}

export default BaseCard
