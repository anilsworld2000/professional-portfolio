'use client'
import { useState } from 'react'
import data from '@/public/data.json'
import SectionWrapper from '../common/SectionWrapper'
import Heading from '../common/Heading'
import ProjectCard from '../common/ProjectCard'
import TagFilter from '../common/TagFilter'
import GetIcon from '../ui/Icons'
import { IconRecord } from '../ui/BaseComponents/BaseCard'

export default function Projects() {
  const projectsData = data.projects;
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = [...new Set(projectsData.content.flatMap(p => p.items))]

  const filteredProjects = activeTag
    ? projectsData.content.filter(p => p.items.includes(activeTag))
    : projectsData.content;
  
  const iconMap: IconRecord = {};
  projectsData.content.forEach(element => {
    element.links.forEach(item => {
      let icon = GetIcon(item.name);
      if (icon === null) {
        icon = GetIcon('ExternalLink');
      }
      if(icon != null)
        iconMap[item.name] = icon;
    });
  });

  function getCardImage(path: string) {
    return { path: path, width: 'w-full', height: 'h-50' }
  }

  return (
    <SectionWrapper id={projectsData.id}>
      <Heading title={projectsData.title} subtitle={projectsData.subTitle} />

      {/* Tag filter */}
      <TagFilter tags={allTags} activeTag={activeTag} setActiveTag={setActiveTag}></TagFilter>

      {/* Projects Card */}
      <div className='grid md:grid-cols-4 gap-6'>
        {filteredProjects.map(project => (
          <ProjectCard key={project.title}
            {...project}
            linkIcons={iconMap}
            badges={project.items}
            image={getCardImage(project.image)}
          ></ProjectCard>
        ))}
      </div>
    </SectionWrapper>
  )
}
