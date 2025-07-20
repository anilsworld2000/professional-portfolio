import React from 'react'
import Image from 'next/image'

type CertificationsCardProps = {
  title: string
  issuer: string
  date: string
  link?: string
  badge?: string
}

export default function CertificationsCard({
  title,
  issuer,
  date,
  link,
  badge,
}: CertificationsCardProps) {
  return (
    <article
      className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition min-w-[250px]"
      role="region"
      aria-labelledby={`cert-title-${title}`}
    >
      {/* Badge or fallback */}
      <header className="p-4 flex justify-center" aria-label="Certification Badge or Placeholder">
        {badge ? (
          <Image
            src={`/badges/${badge}`}
            alt={`${title} badge`}
            className="h-16 w-16 object-contain"
          />
        ) : (
          <div
            className="h-16 w-16 flex items-center justify-center bg-gray-200 text-gray-700 font-bold text-xl rounded-full"
            aria-label="Fallback badge icon"
          >
            {issuer[0]}
          </div>
        )}
      </header>

      {/* Text content */}
      <section className="px-4 py-3">
        <h3 id={`cert-title-${title}`} className="text-md font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-600" aria-label="Issuer">
          {issuer}
        </p>

        <p className="text-xs text-gray-500 mt-1" aria-label="Issued date">
          {new Date(date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
          })}
        </p>

        {link && (
          <footer className="mt-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 text-sm font-medium hover:underline"
              aria-label={`View certificate for ${title}`}
            >
              View Certificate
            </a>
          </footer>
        )}
      </section>
    </article>
  )
}
