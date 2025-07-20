import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type ProjectProps = {
  title: string
  description: string
  tech: string[]
  image?: string
  github?: string
  demo?: string | null
}

export default function ProjectCard({ title, description, tech, image, github, demo }: ProjectProps) {
  return (
    <article
      role="region"
      aria-labelledby={`certification-title-${title}`}
      className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition">
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={`${title} logo`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      )}

      <div className="p-6">
        <header>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        </header>

        <section className="mt-3">
          <p className="text-gray-700 ">{description}</p>
        </section>

        <section className="mt-4 flex flex-wrap gap-2">
          {tech.map((tag) => (
            <span
              key={tag}
              className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </section>

        {(github || demo) && (
          <footer className="mt-5 flex gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-black dark:hover:text-black"
              >
                <FaGithub className="text-xl" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="text-gray-500 hover:text-blue-500"
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
            )}
          </footer>
        )}
      </div>
    </article>
  )
}
