'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="relative bg-gray-50 text-gray-700 border-t border-gray-200 " aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center text-center">

        <section aria-label="Footer call-to-action">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Let&apos;s build something amazing together.
          </p>
        </section>

        <section aria-label="Social media links" className="flex gap-4 text-xl mt-2">
          <address className="not-italic flex gap-4">
            <a
              href="https://github.com/anilkumardeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/anilkumardeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/anilkumarcodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-500 transition"
            >
              <FaTwitter />
            </a>
          </address>
        </section>

        <nav aria-label="Footer navigation" className="mt-6 mb-6">
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#" lang="en" className="hover:underline">EN</a></li>
            <li><a href="#" lang="hi" className="hover:underline">हिन्दी</a></li>
          </ul>
        </nav>

        <section aria-label="Copyright">
          <p className="text-sm text-gray-500">
            &copy;{' '}
            <time className="text-blue-600 font-semibold animate-pulse" dateTime={new Date().getFullYear().toString()}>
              {new Date().getFullYear()}
            </time>{' '}
            Anil Kumar. All rights reserved.
          </p>
        </section>
      </div>

      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-md bg-blue-600 text-white hover:bg-blue-700 transition z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  )
}
