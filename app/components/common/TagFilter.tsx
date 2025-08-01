import Button from '@/app/components/ui/Buttons';

export type TagFilterProps = {
    tags: string[];
    activeTag: string | null;
    setActiveTag: (tag: string | null) => void;
}

export default function TagFilter({ tags, activeTag, setActiveTag }: TagFilterProps) {
    const defaultTag = 'All';
    return (
        <nav aria-label="Project tag filter"
            className="flex flex-wrap gap-2 mb-8">
            <Button.Base
                key={defaultTag}
                variant={activeTag === null ? 'primary' : 'secondary'}
                size='sm'
                rounded='full'
                aria-pressed={activeTag === 'All'}
                tooltipContent={`Filter by ${defaultTag}`}
                onClick={() => setActiveTag(null)}
            >{defaultTag}
            </Button.Base>

            {tags.map(tag => (
                <Button.Base
                    key={tag}
                    variant={activeTag === tag ? 'primary' : 'secondary'}
                    size='sm'
                    rounded='full'
                    aria-pressed={activeTag === tag}
                    tooltipContent={`Filter by ${tag}`}
                    onClick={() => setActiveTag(tag)}
                >{tag}
                </Button.Base>
            ))}
        </nav>
    );
}