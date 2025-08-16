// src/hooks/useTagFilter.ts
import { useMemo, useState } from 'react';

export function useTagFilter<T>(items: T[], getTags: (item: T) => string[]) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(
    () => [...new Set(items.flatMap(getTags))],
    [items, getTags]
  );

  const filteredItems = useMemo(
    () =>
      activeTag
        ? items.filter(item => getTags(item).includes(activeTag))
        : items,
    [items, getTags, activeTag]
  );

  return {
    activeTag,
    setActiveTag,
    allTags,
    filteredItems,
  };
}
