'use client';

import data from '@/public/data.json'
import Navbar, { NavItems } from "../ui/Organisms/Navbar";
import { useState } from 'react';
import { cn } from '@/app/lib/utils';
import { useActiveItem } from '@/app/hooks/useActiveItem';
import Button from '../ui/Atoms/Button';
import Link from 'next/link';
import Icon from '../ui/Atoms/Icon';

export default function TopNavBar() {
    //const [activeItem, setActiveItem] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const links = data.topNavBar.rightSide.links;
    const { activeItem, setActiveItem } = useActiveItem(links); // Use the custom hook

    function getItemClassName(itemName: string) {
        return `p-2 transition-colors ${activeItem === itemName
            ? 'border-b-2 border-blue-600 text-blue-600' // Active state: blue underline and text
            : 'border-b-2 border-transparent text-gray-800 hover:text-blue-600' // Default state: transparent border
            }`;
    }

    const navItemsClassName = 'justify-end hidden md:flex gap-2 text-sm font-medium';
    const mobileMenuClassName = 'md:hidden px-4 pb-4 gap-4 text-base font-medium';

    return (
        <header className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm'>
            <Navbar
                orientation='horizontal'
                alignment='justify'
                className='max-w-7xl mx-auto px-2 py-2 flex items-center'
            >

                {/**Left Site Items */}
                <NavItems className={navItemsClassName}>
                    <Link
                        className='text-xl font-bold tracking-tight text-gray-900'
                        href={data.topNavBar.leftSide.links[1].link}
                    >
                        {data.topNavBar.leftSide.links[1].name}
                    </Link>
                </NavItems>

                <Button
                    variant='flat'
                    size='lg'
                    className='md:hidden text-gray-700'
                    iconOnly={true}
                    onClick={() => setIsOpen(!isOpen)}
                >{isOpen ? <Icon name='X' size={24} /> : <Icon name='Menu' size={24} />}
                </Button>

                {/**Right Site Items */}
                <NavItems className={cn(navItemsClassName, 'hidden')}>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.link}
                            className={getItemClassName(link.link)}
                            onClick={() => { setActiveItem(link.link) }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </NavItems>
            </Navbar>

            {/* Mobile menu */}
            {isOpen && (
                <ul className={cn("flex flex-col", mobileMenuClassName)}>
                    {links?.map(link => (
                        <li key={link?.toString()}>
                            <Link key={link.name}
                                href={link.link}
                                className={getItemClassName(link.link)}
                                onClick={() => (
                                    setIsOpen(false),
                                    setActiveItem(link.link)
                                )}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}