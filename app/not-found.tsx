// app/not-found.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-4 py-16">
      {/* Animated SVG Illustration */}
      <div className="w-full max-w-md mb-6">
        <Image
          src="/images/404-illustration.svg"
          alt="Page not found"
          width={500}
          height={300}
          className="mx-auto animate-fade-in-up"
          priority
        />
      </div>

      {/* Message */}
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </main>
  )
}
