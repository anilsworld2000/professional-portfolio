'use client';

import Image from 'next/image';
import Heading from '@/app/components/ui/Atoms/Heading';
import ExpandableCard from '@/app/components/ui/molecules/ExpandableCard';
import BadgeList from '../molecules/BadgeList';
import IconLinkList from '../molecules/IconLinkList';

interface ProjectCardProps {
    title: string;
    subTitle?: string;
    description?: string;
    image?: {
        path: string;
        alt?: string;
    };
    badges?: string[];
    links?: {
        name: string;
        href: string;
        icon?: React.ReactNode;
    }[];
    variant?: 'light' | 'dark' | 'primary' | 'neutral';
}

export default function ProjectCard({
    title,
    subTitle,
    description,
    image,
    badges = [],
    links = [],
    variant = 'light',
}: ProjectCardProps) {
    return (
        <ExpandableCard variant={variant} className="overflow-hidden">
            <article className="flex flex-col gap-3" aria-labelledby={`project-${title}`}>

                {/* Image + Title Row */}
                <div className="flex items-center gap-4">
                    {image && (
                        <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden">
                            <Image
                                src={image.path}
                                alt={image.alt || `${title} project image`}
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                    )}

                    <Heading
                        as="h3"
                        title={title}
                        subtitle={subTitle}
                        titleClassName="text-lg sm:text-xl font-semibold text-gray-900"
                        subTitleClassName="text-sm text-gray-600"
                    />
                </div>

                {/* Description */}
                {description && (
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Badges */}
                {badges.length > 0 && (
                    <div>
                        <BadgeList
                            items={badges}
                            variant="neutral"
                            size="sm"
                            ariaLabel="Technologies Used"
                        />
                    </div>
                )}

                {/* Links */}
                {links.length > 0 && (
                    <nav aria-label="Project Links">
                        <IconLinkList
                            items={links}
                            iconOnly
                            layout="horizontal"
                        />
                    </nav>
                )}
            </article>
        </ExpandableCard>
    );
}
