import Link from "next/link";

export type LinkProps = {
    children?: React.ReactNode;
    href: string;
    className?: string;
    openNewTab?: boolean

};
export default function CustomLink(props: LinkProps)
{
    const target = props.openNewTab === true ? '_blank' : '';
    return (<>
        <Link
            href={props.href}
            className={props.className}
            rel="noopener noreferrer"
            target={target}
        >
            {props.children}
        </Link>
    </>);
}