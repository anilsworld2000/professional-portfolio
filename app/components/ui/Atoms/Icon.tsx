import {
  FaCss3Alt, FaCuttlefish, FaExpandAlt, FaExternalLinkAlt, FaGitAlt, FaGithub, FaHtml5, FaLaptopCode, FaLinkedin, FaNodeJs
} from 'react-icons/fa';
import {
  GiNetworkBars, GiGearHammer
} from 'react-icons/gi';
import {
  SiCplusplus, SiDotnet, SiJavascript, SiJirasoftware, SiMongodb, SiNextdotjs, SiPrisma, SiSqlite, SiTypescript
} from 'react-icons/si';
import { TbDatabase } from 'react-icons/tb';
import { DownloadIcon, Menu, X } from 'lucide-react';
import type { ComponentProps, JSX } from 'react';
import { FcBusinessman } from 'react-icons/fc';

export type IconName =
  | 'Businessman'
  | 'X'
  | 'Expand'
  | 'LinkedIn'
  | 'ExternalLink'
  | 'GitHub'
  | 'C#'
  | 'C++'
  | 'TypeScript'
  | 'JavaScript'
  | 'ASP.NET'
  | 'Next.js'
  | 'Node.js'
  | 'HTML'
  | 'CSS'
  | 'SQLite'
  | 'SQL'
  | 'Prisma'
  | 'MongoDB'
  | 'Git'
  | 'TDD'
  | 'MVC'
  | 'MVVM'
  | 'SOLID Principles'
  | 'Agile'
  | 'Design Patterns'
  | 'WinForms'
  | 'Menu'
  | 'Download';

type IconProps = {
  name: IconName;
  className?: string;
  size?: number,
  title?: string;
  ariaLabel?: string;
} & Omit<ComponentProps<'span'>, 'children'>;

export default function Icon({
  name,
  className = '',
  size,
  title,
  ariaLabel,
  ...props
}: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) return <div className={className} >{name}</div>;

  return (
    <span
      role="img"
      aria-label={ariaLabel || name}
      title={title || name}
      {...props}
    >
      {IconComponent(className, size)}
    </span>
  );
}

export function GetIcon(iconName: string, className: string = '', iconSize?: number) {
  if (IsIconValid(iconName)) {
    return < Icon name={iconName as IconName} className={className} size={iconSize} />
  }

  return null;
}

export function IsIconValid(iconName: string) {
  return iconName in iconMap;
}

// ---- map all icons to dynamic JSX ----
export const iconMap: Record<IconName, (className?: string, iconSize?: number) => JSX.Element> = {
  'Download': (className, iconSize) => <DownloadIcon
    className={className} size={iconSize} />,
  'Menu': (className, iconSize) => <Menu
    className={className} size={iconSize}  />,
  'Businessman': (className, iconSize) => <FcBusinessman
    className={className} size={iconSize}  />,
  'X': (className, iconSize) => <X className={className} size={iconSize} />,
  'Expand': (className, iconSize) => <FaExpandAlt className={className} size={iconSize}  />,
  'LinkedIn': (className, iconSize) => <FaLinkedin className={className} size={iconSize}  />,
  'ExternalLink': (className, iconSize) => <FaExternalLinkAlt className={className} size={iconSize}  />,
  'GitHub': (className, iconSize) => <FaGithub className={className} size={iconSize}  />,
  'C#': (className, iconSize) => <FaCuttlefish className={className} size={iconSize}  />,
  'C++': (className, iconSize) => <SiCplusplus className={className} size={iconSize}  />,
  'TypeScript': (className, iconSize) => <SiTypescript className={className} size={iconSize}  />,
  'JavaScript': (className, iconSize) => <SiJavascript className={className} size={iconSize}  />,
  'ASP.NET': (className, iconSize) => <SiDotnet className={className} size={iconSize}  />,
  'Next.js': (className, iconSize) => <SiNextdotjs className={className} size={iconSize}  />,
  'Node.js': (className, iconSize) => <FaNodeJs className={className} size={iconSize}  />,
  'HTML': (className, iconSize) => <FaHtml5 className={className} size={iconSize}  />,
  'CSS': (className, iconSize) => <FaCss3Alt className={className} size={iconSize}  />,
  'SQLite': (className, iconSize) => <SiSqlite className={className} size={iconSize}  />,
  'SQL': (className, iconSize) => <TbDatabase className={className} size={iconSize}  />,
  'Prisma': (className, iconSize) => <SiPrisma className={className} size={iconSize}  />,
  'MongoDB': (className, iconSize) => <SiMongodb className={className} size={iconSize}  />,
  'Git': (className, iconSize) => <FaGitAlt className={className} size={iconSize}  />,
  'TDD': (className, iconSize) => <GiNetworkBars className={className} size={iconSize}  />,
  'MVC': (className, iconSize) => <SiDotnet className={className} size={iconSize}  />,
  'MVVM': (className, iconSize) => <FaLaptopCode className={className} size={iconSize}  />,
  'SOLID Principles': (className, iconSize) => <SiJirasoftware className={className} size={iconSize}  />,
  'Agile': (className, iconSize) => <SiJirasoftware className={className} size={iconSize}  />,
  'Design Patterns': (className, iconSize) => <GiGearHammer className={className} size={iconSize}  />,
  'WinForms': (className, iconSize) => <SiDotnet className={className} size={iconSize}  />,
};
