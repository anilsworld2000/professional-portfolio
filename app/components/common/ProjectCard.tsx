// src/components/ProjectCard.tsx
import BaseCard from '@/app/components/ui/Atoms/BaseCard';

export interface ProjectCardProps {
  title: string
  subtitle?: string
  date?: string
  image?: {
    path: string
    alt?: string
  }
  description?: string
  badges?: string[]
  tags?: string[]
  links?: {
    name: string
    href: string
    icon?: React.ReactNode
  }[]
}

export default function ProjectCard({
  title,
  subtitle,
  date,
  image,
  badges = [],
  tags = [],
  links = [],
  description,
}: ProjectCardProps) {
  return (
    <BaseCard as="article" variant="light" className="w-full max-w-2xl sm:max-w-md md:max-w-lg">
      {/* Always visible */}
      <BaseCard.Header title={title} subtitle={subtitle} />

      {image?.path && (
        <BaseCard.Media
          src={image.path}
          alt={`${title} screenshot`}
          fill
          objectFit="cover"
        />
      )}

      {/* Now use context safely INSIDE the card render tree */}
      <BaseCard.Content
        date={date}
        description={description}
        badges={badges}
        tags={tags}
        links={links}
      />
    </BaseCard>
  );
}
