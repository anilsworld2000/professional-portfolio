'use client'

import data from '@/public/data.json'
import SectionWrapper from '../common/SectionWrapper'
import Heading from '../ui/Atoms/Heading'
import ExperienceCard from '../common/ExperienceCard'

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" aria-label="Experience Section">
      <Heading title="Experience" subtitle="My Professional Journey" align='center'/>

      <div className="grid gap-6 md:grid-cols-2">
        {data.experience.map((job, index) => (
          <ExperienceCard
            key={index}
            title={job.title}
            subtitle={job.company}
            image={job.image}
            fallbackText={job.company[0]}
            metadata={`${job.duration} | ${job.location}`}
            responsibilities={job.responsibilities}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
