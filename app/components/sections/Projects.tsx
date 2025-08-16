'use client';

import data from '@/public/data.json';
import FilteredGridSection from '@/app/components/ui/molecules/FilterGridSection';
import ProjectCard from '@/app/components/ui/Cards/ProjectCard';
import Icon, { IconName, IsIconValid } from '../ui/Atoms/Icon';

export default function Projects() {
  const projects = data.projects.content;

  function getLinks(links: { name: string, link: string }[]) {
    return links.map(item => {
      const iconName = item.name as IconName;

      return {
        name: item.name,
        href: item.link,
        icon: <Icon name={IsIconValid(item.name) ? iconName : 'ExternalLink'} className="w-4 h-4" ariaLabel={item.name} />,
      };
    });
  }

  const getCardImage = (path: string) => ({
    path,
    width: 'w-full',
    height: 'h-50',
  });

  return (
    <FilteredGridSection
      id={data.projects.id}
      title={data.projects.title}
      subtitle={data.projects.subTitle}
      items={projects}
      getTags={p => p.items || []}
      renderItem={(project) => (
        <ProjectCard
          key={project.title}
          {...project}
          links={getLinks(project.links)}
          badges={project.items}
          image={getCardImage(project.image)}
        />
      )}
    />
  );
}
