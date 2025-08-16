'use client';

import { ReactNode } from 'react';
import Heading from '@/app/components/ui/Atoms/Heading';
import TagFilter from '@/app/components/ui/molecules/TagFilter';
import SectionWrapper from '@/app/components/common/SectionWrapper';
import { useTagFilter } from '@/app/hooks/useTagFilter';

interface FilteredGridSectionProps<T> {
    id: string;
    title: string;
    subtitle?: string;
    items: T[];
    getTags: (item: T) => string[];
    renderItem: (item: T, index: number) => ReactNode;
    headingAlign?: 'center' | 'left';
    gridClassName?: string;
}

export default function FilteredGridSection<T>({
    id,
    title,
    subtitle,
    items,
    getTags,
    renderItem,
    headingAlign = 'center',
    gridClassName = 'grid md:grid-cols-3 gap-4',
}: FilteredGridSectionProps<T>) {
    const { activeTag, setActiveTag, allTags, filteredItems } = useTagFilter(items, getTags);

    return (
        <SectionWrapper id={id}>
            <Heading title={title} subtitle={subtitle} align={headingAlign} />

            {allTags.length > 0 && (
                <TagFilter tags={allTags} activeTag={activeTag} setActiveTag={setActiveTag} />
            )}

            <div className={gridClassName}>
                {filteredItems.map((item, index) => renderItem(item, index))}
            </div>
        </SectionWrapper>
    );
}
