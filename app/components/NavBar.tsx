'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
//import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  //const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      links.forEach(link => {
        const section = document.querySelector(link.href)
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - 80
          const bottom = top + section.clientHeight
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveLink(link.href)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-gray-900">
          <Link href="/">Anil Kumar</Link>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-blue-600 ${
                  activeLink === link.href ? 'text-blue-600' : 'text-gray-800'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-1 ${
                    activeLink === link.href ? 'text-blue-600' : 'text-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
