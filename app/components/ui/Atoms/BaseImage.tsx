// src/components/ui/BaseImage.tsx
'use client'

import React, { useState } from 'react'
import Image, { ImageProps, StaticImageData } from 'next/image'

export interface BaseImageProps
    extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
    /** URL or imported StaticImageData */
    src: string | StaticImageData

    /** Alt text for accessibility */
    alt: string

    /** Fallback image on error */
    fallbackSrc?: string

    /** Let the image fill its parent container (wrapper must size itself) */
    fill?: boolean

    /** Numeric width for Next/Image when not using fill */
    width?: number | string

    /** Numeric height for Next/Image when not using fill */
    height?: number | string

    /** object‐fit behaviour */
    objectFit?: 'cover' | 'contain'

    /** Tailwind classes to size/style the wrapper (must include sizing for non‐fill) */
    wrapperClassName?: string

    /** Tailwind classes to style the <Image> itself */
    imgClassName?: string
}

export default function BaseImage({
    src,
    alt,
    fallbackSrc,
    fill = false,
    width,
    height,
    objectFit = 'cover',
    wrapperClassName = '',
    imgClassName = '',
    onError,
    ...rest
}: BaseImageProps) {
    const [currentSrc, setCurrentSrc] =
        useState<string | StaticImageData>(src)

    // Only numeric values flow into Next/Image width/height props:
    const numericW = !fill && typeof width === 'number' ? width : undefined
    const numericH = !fill && typeof height === 'number' ? height : undefined

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc)
        }
        onError?.(e)
    }

    // Build Tailwind class strings:
    const wrapperClasses = [
        'relative overflow-hidden',
        fill ? 'w-full h-full' : '',
        wrapperClassName,
    ]
        .filter(Boolean)
        .join(' ')

    const imgClasses = [
        objectFit === 'contain' ? 'object-contain' : 'object-cover',
        imgClassName,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className={wrapperClasses}>
            <Image
                src={currentSrc}
                alt={alt}
                fill={fill}
                width={numericW}
                height={numericH}
                className={imgClasses}
                onError={handleError}
                {...rest}
            />
        </div>
    )
}