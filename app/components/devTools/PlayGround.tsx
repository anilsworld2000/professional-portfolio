import React from 'react';

interface PlaygroundProps {
    componentName: string;
    controls?: React.ReactNode;
    children: React.ReactNode;
    jsxSnippet?: string;
}

export default function Playground({
    componentName,
    controls,
    children,
    jsxSnippet,
}: PlaygroundProps) {
    return (
        <section className="border rounded-xl p-4 bg-white shadow-sm">
            <header className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{componentName}</h2>
                {controls && <div className="flex flex-wrap gap-2 text-sm">{controls}</div>}
            </header>

            <div className="p-4 border rounded-md bg-gray-50 flex items-center justify-center min-h-[80px]">
                {children}
            </div>

            {jsxSnippet && (
                <pre className="text-xs bg-gray-100 text-gray-800 rounded mt-4 p-2 overflow-x-auto">
                    {jsxSnippet}
                </pre>
            )}
        </section>
    );
}
