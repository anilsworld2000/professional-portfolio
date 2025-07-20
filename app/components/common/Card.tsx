import Image from 'next/image'

type CardProps = {
  title: string
  subtitle?: string
  date?: string
  link?: string
  linkTitle?: string
  image?: string
  fallbackText?: string
  layout?: 'project' | 'certification'
}

export default function Card({
  title,
  subtitle,
  date,
  link,
  linkTitle,
  image,
  fallbackText,

}: CardProps) {
  return (
    <article
      className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition min-w-[250px]"
      aria-labelledby={`card-title-${title}`}
      role="region"
    >
      <header className="p-4 flex justify-center" aria-label="Card Image or Fallback">
        {image ? (
          <Image
            src={image}
            alt={`${title} logo`}
            className="h-16 w-16 object-contain"
          />
        ) : fallbackText ? (
          <div
            className="h-16 w-16 flex items-center justify-center bg-gray-200 text-gray-700 font-bold text-xl rounded-full"
            aria-label="Fallback Icon"
          >
            {fallbackText}
          </div>
        ) : null}
      </header>

      <section className="px-4 py-3">
        <h3
          id={`card-title-${title}`}
          className="text-md font-semibold text-gray-800"
        >
          {title}
        </h3>

        {subtitle && (
          <p className="text-sm text-gray-600" aria-label="Subtitle">
            {subtitle}
          </p>
        )}

        {date && (
          <p className="text-xs text-gray-500 mt-1" aria-label="Date">
            {new Date(date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
            })}
          </p>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 text-sm font-medium mt-2 hover:underline"
            aria-label={`Visit external link for ${title}`}
          >
            {linkTitle}
          </a>
        )}
      </section>
    </article>
  )
}
