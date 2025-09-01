'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import SocialLinks from '../common/SocialLinks'
import data from '@/public/data.json'
import Link from 'next/link';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)
  const links = data.topNavBar.rightSide.links;

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

        {/* Social Links */}
        <SocialLinks />

        {/* Navigation */}
        <nav aria-label="Footer navigation" className="mt-6 mb-6 lex flex-wrap justify-center gap-4 text-sm">
            {links.map(item => (
              <Link
                key={item.name}
                href={item.link}
                className='hover:underline p-2'
              >
                {item.name}
              </Link>
            ))}
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
