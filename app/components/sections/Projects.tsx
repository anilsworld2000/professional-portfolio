'use client'
import { useState } from 'react'
import data from '@/public/data.json'
import SectionWrapper from '../common/SectionWrapper'
import Heading from '../common/Heading'
import ProjectCard from '../common/ProjectCard'

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = [...new Set(data.projects.flatMap(p => p.tech))]

  const filteredProjects = activeTag
    ? data.projects.filter(p => p.tech.includes(activeTag))
    : data.projects

  return (
    <SectionWrapper id="projects">
      <Heading title="Projects" subtitle="Things I've Built" />

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button onClick={() => setActiveTag(null)} className={`px-3 py-1 rounded-full ${!activeTag ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1 rounded-full ${activeTag === tag ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
