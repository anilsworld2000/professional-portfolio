'use client';

import Button from '@/app/components/ui/Buttons';

export type TagFilterProps = {
    tags: string[];
    activeTag: string | null;
    setActiveTag: (tag: string | null) => void;
    defaultTag?: string;
    useAllOption?: boolean;
};

export default function TagFilter({
    tags,
    activeTag,
    setActiveTag,
    defaultTag = 'All',
    useAllOption = true,
}: TagFilterProps) {
    const getVariant = (tag: string | null) =>
        activeTag === tag ? 'primary' : 'secondary';

    return (
        <nav
            className="flex flex-wrap gap-2 mb-8"
            aria-label="Project tag filter"
            role="group"
        >
            {useAllOption && (
                <fieldset className="flex flex-wrap gap-2 mb-8" aria-label="Project tag filter">
                    <legend className="sr-only">Filter by tag</legend>
                    <Button.Base
                        key={defaultTag}
                        variant={getVariant(null)}
                        size="sm"
                        rounded="full"
                        aria-pressed={activeTag === null}
                        tooltipContent={`Filter by ${defaultTag}`}
                        onClick={() => setActiveTag(null)}
                    >
                        {defaultTag}
                    </Button.Base>
                </fieldset>
            )}

            {tags.map((tag) => (
                <Button.Base
                    key={tag}
                    variant={getVariant(tag)}
                    size="sm"
                    rounded="full"
                    aria-pressed={activeTag === tag}
                    tooltipContent={`Filter by ${tag}`}
                    onClick={() => setActiveTag(tag)}
                >
                    {tag}
                </Button.Base>
            ))}
        </nav>
    );
}
