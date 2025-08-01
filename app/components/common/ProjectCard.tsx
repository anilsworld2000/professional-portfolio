import BaseCard, { BaseCardProps } from '@/app/components/ui/BaseComponents/BaseCard'

export interface ProjectCardProps extends BaseCardProps {
  description?: string
}

export default function ProjectCard({
  title,
  subtitle,
  date,
  image,
  badges = [],
  tags = [],
  links = [],
  linkIcons,
  description,
}: ProjectCardProps) {
  return (
    <BaseCard
      title={title}
      subtitle={subtitle}
      date={date}
      image={image}
      badges={badges}
      tags={tags}
      links={links}
      linkIcons={linkIcons}
    >
      {description && <p className="text-sm mt-2">{description}</p>}
    </BaseCard>
  )
}
