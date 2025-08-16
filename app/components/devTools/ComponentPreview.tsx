interface ComponentPreviewProps {
    title: string;
    controls?: React.ReactNode;
    children: React.ReactNode;
}

export default function ComponentPreview({
    title,
    controls,
    children,
}: ComponentPreviewProps) {
    return (
        <div className="rounded-xl border p-4 bg-white shadow-sm space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-700">{title}</h3>
                {controls}
            </div>
            <div className="p-4 border rounded-md bg-gray-50">{children}</div>
        </div>
    );
}
