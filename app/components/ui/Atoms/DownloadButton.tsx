import { cn } from "@/app/lib/utils";
import { Rounded, roundedClasses, Size, sizeStyles, Variant, variantStyles } from "@/app/lib/variants";
import Link from "next/link";

export type DownloadButtonProps = {
    children?: React.ReactNode;
    href: string;
    className?: string;
    variant?: Variant;
    size?: Size;
    rounded?: Rounded;
};

export default function DownloadButton(props: DownloadButtonProps) {
    const className = cn(' flex justify-center items-center',
        variantStyles[(props.variant as string) ?? 'secondary'],
        sizeStyles[(props.size as string) ?? 'md'],
        roundedClasses[props.rounded ?? 'none'],
        props.className);
    
    return (
        <Link
            href={props.href}
            className={className}
            download
            target='_blank'
            rel="noopener noreferrer"
        >
            {props.children ?? 'Download'}
        </Link>
    )

}