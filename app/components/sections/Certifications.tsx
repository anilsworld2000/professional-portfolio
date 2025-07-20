'use client'

import { useState } from 'react'
import data from '@/public/data.json'
import SectionWrapper from '@/app/components/common/SectionWrapper'
import Heading from '@/app/components/common/Heading'
import CertificateCard from '@/app/components/common/CertificationsCard'
import Button from '@/app/components/ui/Button'

type Certification = {
  title: string
  issuer: string
  date: string
  type: string
  link?: string
  badge?: string
}

export default function Certifications() {
  const certifications: Certification[] = data.certifications ?? []

  // Unique filter types
  const allTypes = Array.from(new Set(certifications.map(cert => cert.type)))
  const [filter, setFilter] = useState<string>('All')

  const filtered = certifications
    .filter(cert => filter === 'All' || cert.type === filter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <SectionWrapper id="certifications">
      <Heading title="Certifications" subtitle="What I've Earned" />

      {/* Filters */}
      <nav
        className="mb-6 flex flex-wrap gap-3"
        role="navigation"
        aria-label="Certification filters"
      >
        <Button
          onClick={() => setFilter('All')}
          aria-pressed={filter === 'All'}
          className={filter === 'All' ? '' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
        >
          All
        </Button>

        {allTypes.map(type => (
          <Button
            key={type}
            onClick={() => setFilter(type)}
            aria-pressed={filter === type}
            className={filter === type ? '' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
          >
            {type}
          </Button>
        ))}
      </nav>

      {/* Certification List */}
      {filtered.length === 0 ? (
        <p role="status" className="text-gray-500">
          No certifications found.
        </p>
      ) : (
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible"
          aria-label="List of certifications"
        >
          {filtered.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              link={cert.link}
              badge={cert.badge}
            />
          ))}
        </section>
      )}
    </SectionWrapper>
  )
}
