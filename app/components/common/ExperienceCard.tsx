import React from 'react'
import Image from 'next/image'

type ExperienceCardProps = {
  title: string
  subtitle: string
  image?: string
  fallbackText: string
  metadata: string
  responsibilities: string[]
}

export default function ExperienceCard({
  title,
  subtitle,
  image,
  fallbackText,
  metadata,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <article
      role="region"
      aria-labelledby={`experience-title-${title}`}
      className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition"
    >
      <header className="p-4 flex items-center gap-4" aria-label="Company logo and job info">
        {image ? (
          <Image
            src={image}
            alt={`${subtitle} logo`}
            width={64}
            height={64}
            className="h-16 w-16 object-contain"
            style={{ height: '4rem', width: '4rem' }}
          />
        ) : (
          <div
            className="h-16 w-16 flex items-center justify-center bg-gray-200 text-gray-700 font-bold text-xl rounded-full"
            aria-label="Fallback Icon"
          >
            {fallbackText}
          </div>
        )}
        <div>
          <h3 id={`experience-title-${title}`} className="text-md font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-sm text-gray-600" aria-label="Company Name">
            {subtitle}
          </p>
        </div>
      </header>

      <section className="px-4 pb-4" aria-label="Experience Details">
        <p className="text-xs text-gray-500 mb-2" aria-label="Duration and Location">
          {metadata}
        </p>
        <ul
          className="list-disc list-inside text-sm text-gray-700 space-y-1 text-justify"
          aria-label="Responsibilities"
        >
          {responsibilities.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>
    </article>
  )
}
