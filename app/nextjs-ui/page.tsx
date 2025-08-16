'use client';

import { useState } from 'react';
import Playground from '@/app/components/devTools/PlayGround';
import Button from '@/app/components/ui/Atoms/Button';
import Card from '@/app/components/ui/Atoms/Card';
import ExpandableCard from '@/app/components/ui/molecules/ExpandableCard';
import { Variant, Size } from '../lib/variants';

const variants = ['primary', 'light', 'dark', 'danger'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export default function ComponentPlayGround() {
    const [variant, setVariant] = useState <Variant>('primary');
    const [size, setSize] = useState<Size>('md');
    const [isLoading, setIsLoading] = useState(false);
    const [iconOnly, setIconOnly] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState<'Button' | 'Card' | 'ExpandableCard'>('Button');

    return (
        <main className="flex px-6 py-12 max-w-7xl mx-auto gap-8 text-gray-900">
            {/* Sidebar */}
            <aside className="w-48 flex-shrink-0 border-r pr-4">
                <h2 className="text-lg font-semibold mb-4">Components</h2>
                <ul className="space-y-2 text-sm">
                    <li>
                        <button
                            onClick={() => setSelectedComponent('Button')}
                            className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-100 ${selectedComponent === 'Button' ? 'bg-gray-200 font-semibold' : ''}`}
                        >
                            Button
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setSelectedComponent('Card')}
                            className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-100 ${selectedComponent === 'Card' ? 'bg-gray-200 font-semibold' : ''}`}
                        >
                            Card
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setSelectedComponent('ExpandableCard')}
                            className={`block w-full text-left px-2 py-1 rounded hover:bg-gray-100 ${selectedComponent === 'ExpandableCard' ? 'bg-gray-200 font-semibold' : ''}`}
                        >
                            ExpandableCard
                        </button>
                    </li>
                </ul>
            </aside>

            {/* Preview Section */}
            <div className="flex-1 space-y-16">
                <h1 className="text-3xl font-bold">🎛️ Component PlayGround</h1>

                {selectedComponent === 'Button' && (
                    <Playground
                        componentName="Button"
                        controls={
                            <div className="flex flex-wrap gap-4 items-center text-sm">
                                <div className="flex flex-col gap-1">
                                    <label className="font-medium" htmlFor="variantSelect">Variant</label>
                                    <select
                                        id="variantSelect"
                                        title="Select Variant"
                                        value={variant}
                                        onChange={e => setVariant(e.target.value as Variant)}
                                        className="border rounded px-2 py-1 bg-white"
                                    >
                                        {variants.map(v => (
                                            <option key={v} value={v}>{v}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="font-medium" htmlFor="sizeSelect">Size</label>
                                    <select
                                        id="sizeSelect"
                                        title="Select Size"
                                        value={size}
                                        onChange={e => setSize(e.target.value as Size)}
                                        className="border rounded px-2 py-1 bg-white"
                                    >
                                        {sizes.map(s => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>

                                <label className="flex gap-2 items-center">
                                    <input
                                        type="checkbox"
                                        checked={isLoading}
                                        onChange={e => setIsLoading(e.target.checked)}
                                    />
                                    Loading
                                </label>

                                <label className="flex gap-2 items-center">
                                    <input
                                        type="checkbox"
                                        checked={iconOnly}
                                        onChange={e => setIconOnly(e.target.checked)}
                                    />
                                    Icon Only
                                </label>
                            </div>
                        }
                        jsxSnippet={`<Button variant="${variant}" size="${size}"${iconOnly ? ' iconOnly' : ''}${isLoading ? ' isLoading' : ''}>Click Me</Button>`}
                    >
                        <Button
                            variant={variant}
                            size={size}
                            isLoading={isLoading}
                            iconOnly={iconOnly}
                            aria-label="test button"
                        >
                            {!iconOnly && 'Click Me'}
                        </Button>
                    </Playground>
                )}

                {selectedComponent === 'Card' && (
                    <Playground
                        componentName="Card"
                        jsxSnippet={`<Card variant="${variant}">Card Content</Card>`}
                    >
                        <Card variant={variant}>
                            <p>This is a <strong>{variant}</strong> card preview</p>
                        </Card>
                    </Playground>
                )}

                {selectedComponent === 'ExpandableCard' && (
                    <Playground
                        componentName="ExpandableCard"
                        jsxSnippet={`<ExpandableCard variant="${variant}">Expandable content</ExpandableCard>`}
                    >
                        <ExpandableCard variant={variant}>
                            <p>Expandable card with variant <strong>{variant}</strong>.</p>
                        </ExpandableCard>
                    </Playground>
                )}
            </div>
        </main>
    );
}
