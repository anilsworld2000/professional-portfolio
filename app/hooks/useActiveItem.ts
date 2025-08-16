// hooks/useActiveItem.ts
import { useState } from 'react';

export function useActiveItem(links: { name: string, link: string }[]) {
    const [activeItem, setActiveItem] = useState('');

    console.log(links.length === 0);

    // Return both the state and the setter function
    return { activeItem, setActiveItem };
}