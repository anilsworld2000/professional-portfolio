import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/sections/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Anil Kumar - Full Stack Developer',
  description:
    'Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies. Creating scalable, user-friendly applications with cutting-edge design.',
  keywords: [
    'Next.js',
    'TypeScript',
    'React',
    'Full Stack Developer',
    'Web Development',
    'Anil Kumar',
    'Frontend Developer',
  ],
  authors: [{ name: 'Anil Kumar', url: 'https://github.com/anilritwal' }],
  creator: 'Anil Kumar',
  metadataBase: new URL('https://anilkumar.dev'), // Replace with your actual domain

  openGraph: {
    title: 'Anil Kumar - Full Stack Developer',
    description: 'Portfolio of Anil Kumar, a developer focused on full-stack and modern web technologies.',
    url: 'https://anilkumar.dev',
    siteName: 'Anil Kumar Portfolio',
    images: [
      {
        url: 'https://anilkumar.dev/og-image.jpg', // Replace with your OG image
        width: 1200,
        height: 630,
        alt: 'Anil Kumar - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'profile',
    firstName: 'Anil',
    lastName: 'Kumar',
    username: 'anilritwal',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Anil Kumar - Full Stack Developer',
    description: 'Explore my work in modern web development using React, TypeScript, and more.',
    images: ['https://anilkumar.dev/og-image.jpg'],
    site: '@anilkumarcodes', // Update if available
    creator: '@anilkumarcodes',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'your-google-verification-code',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    'theme-color': '#ffffff',
  },

  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://anilkumar.dev" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Anil Kumar" />
        <meta property="profile:username" content="anilritwal" />
        <meta name="linkedin" content="https://linkedin.com/in/anilritwal" />
        <meta name="github" content="https://github.com/anilritwal" />
      </head>

      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
