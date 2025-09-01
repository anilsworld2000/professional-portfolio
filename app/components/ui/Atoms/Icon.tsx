import {
  FaCss3Alt, FaCuttlefish, FaExpandAlt, FaExternalLinkAlt, FaGitAlt, FaGithub, FaHtml5, FaLaptopCode, FaLinkedin, FaNodeJs,
  FaReact
} from 'react-icons/fa';
import {
  GiNetworkBars, GiGearHammer
} from 'react-icons/gi';
import {
  SiCplusplus, SiDotnet, SiGithubcopilot, SiJavascript, SiJirasoftware, SiMongodb, SiNextdotjs, SiPrisma, SiSqlite, SiTypescript
} from 'react-icons/si';
import { TbDatabase } from 'react-icons/tb';
import { DownloadIcon, Menu, X } from 'lucide-react';
import type { ComponentProps, JSX } from 'react';
import { FcBusinessman } from 'react-icons/fc';
import { VscAzure } from 'react-icons/vsc';

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
  | '.NET'
  | 'ASP.NET'
  | 'Azure'
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
  | 'Download'
  | 'GitHub Copilot'
  | 'React';

const iconColors: Record<IconName, string> = {
  Businessman: '#4B4B4B',
  X: '#FF3B30',
  Expand: '#007AFF',
  LinkedIn: '#0077B5',
  ExternalLink: '#6E6E6E',
  GitHub: '#181717',
  'C#': '#9B4F96',
  'C++': '#00599C',
  TypeScript: '#007ACC',
  JavaScript: '#F7DF1E',
  '.NET': '#512BD4',
  'ASP.NET': '#512BD4',
  'Azure': '#512BD4',
  'Next.js': '#000000',
  'Node.js': '#339933',
  HTML: '#E34F26',
  CSS: '#1572B6',
  SQLite: '#003B57',
  SQL: '#CC2927',
  Prisma: '#0C344B',
  MongoDB: '#47A248',
  Git: '#F05032',
  TDD: '#4CAF50',
  MVC: '#512BD4',
  MVVM: '#512BD4',
  'SOLID Principles': '#FF9800',
  Agile: '#00BCD4',
  'Design Patterns': '#9E9E9E',
  WinForms: '#0066CC',
  Menu: '#6E6E6E',
  Download: '#4CAF50',
  'GitHub Copilot': '#181717',
  React: '#61DAFB'
};
type IconProps = {
  name: IconName;
  className?: string;
  color?: string;
  size?: number,
  title?: string;
  ariaLabel?: string;
} & Omit<ComponentProps<'span'>, 'children'>;

export default function Icon({
  name,
  className = '',
  color='',
  size,
  title,
  ariaLabel,
  ...props
}: IconProps) {
  const IconComponent = iconMap[name];

  if(color === '')
    color = iconColors[name as IconName];

  if (!IconComponent) return <div className={className} >{name}</div>;

  return (
    <span
      role="img"
      aria-label={ariaLabel || name}
      title={title || name}
      {...props}
    >
      {IconComponent(className, size, color)}
    </span>
  );
}

export function GetIcon(iconName: string, className: string = '', iconSize?: number, color?:string) {
  if (IsIconValid(iconName)) {
    if (color === undefined || color.length === 0)
      color = iconColors[iconName as IconName];
    return < Icon name={iconName as IconName} className={className} size={iconSize} color={color} />
  }

  return null;
}

export function IsIconValid(iconName: string) {
  return iconName in iconMap;
}

// ---- map all icons to dynamic JSX ----
export const iconMap: Record<IconName, (className?: string, iconSize?: number, iconColor?: string) => JSX.Element> = {
  'Download': (className, iconSize, iconColor) => <DownloadIcon
    className={className} size={iconSize} color={iconColor} />,
  'Menu': (className, iconSize, iconColor) => <Menu
    className={className} size={iconSize} color={iconColor}  />,
  'Businessman': (className, iconSize, iconColor) => <FcBusinessman
    className={className} size={iconSize} color={iconColor}  />,
  'X': (className, iconSize, iconColor) => <X className={className} size={iconSize} color={iconColor} />,
  'Expand': (className, iconSize, iconColor) => <FaExpandAlt className={className} size={iconSize} color={iconColor}  />,
  'LinkedIn': (className, iconSize, iconColor) => <FaLinkedin className={className} size={iconSize} color={iconColor}  />,
  'ExternalLink': (className, iconSize, iconColor) => <FaExternalLinkAlt className={className} size={iconSize} color={iconColor}  />,
  'GitHub': (className, iconSize, iconColor) => <FaGithub className={className} size={iconSize} color={iconColor}  />,
  'C#': (className, iconSize, iconColor) => <FaCuttlefish className={className} size={iconSize} color={iconColor}  />,
  'C++': (className, iconSize, iconColor) => <SiCplusplus className={className} size={iconSize} color={iconColor}  />,
  'TypeScript': (className, iconSize, iconColor) => <SiTypescript className={className} size={iconSize} color={iconColor}  />,
  'JavaScript': (className, iconSize, iconColor) => <SiJavascript className={className} size={iconSize} color={iconColor}  />,
  '.NET': (className, iconSize, iconColor) => <SiDotnet className={className} size={iconSize} color={iconColor} />,
  'ASP.NET': (className, iconSize, iconColor) => <SiDotnet className={className} size={iconSize} color={iconColor} />,
  'Azure': (className, iconSize, iconColor) => <VscAzure className={className} size={iconSize} color={iconColor}  />,
  'Next.js': (className, iconSize, iconColor) => <SiNextdotjs className={className} size={iconSize} color={iconColor}  />,
  'Node.js': (className, iconSize, iconColor) => <FaNodeJs className={className} size={iconSize} color={iconColor}  />,
  'HTML': (className, iconSize, iconColor) => <FaHtml5 className={className} size={iconSize} color={iconColor}  />,
  'CSS': (className, iconSize, iconColor) => <FaCss3Alt className={className} size={iconSize} color={iconColor}  />,
  'SQLite': (className, iconSize, iconColor) => <SiSqlite className={className} size={iconSize} color={iconColor}  />,
  'SQL': (className, iconSize, iconColor) => <TbDatabase className={className} size={iconSize} color={iconColor}  />,
  'Prisma': (className, iconSize, iconColor) => <SiPrisma className={className} size={iconSize} color={iconColor}  />,
  'MongoDB': (className, iconSize, iconColor) => <SiMongodb className={className} size={iconSize} color={iconColor}  />,
  'Git': (className, iconSize, iconColor) => <FaGitAlt className={className} size={iconSize} color={iconColor}  />,
  'TDD': (className, iconSize, iconColor) => <GiNetworkBars className={className} size={iconSize} color={iconColor}  />,
  'MVC': (className, iconSize, iconColor) => <SiDotnet className={className} size={iconSize} color={iconColor}  />,
  'MVVM': (className, iconSize, iconColor) => <FaLaptopCode className={className} size={iconSize} color={iconColor}  />,
  'SOLID Principles': (className, iconSize, iconColor) => <SiJirasoftware className={className} size={iconSize} color={iconColor}  />,
  'Agile': (className, iconSize, iconColor) => <SiJirasoftware className={className} size={iconSize} color={iconColor}  />,
  'Design Patterns': (className, iconSize, iconColor) => <GiGearHammer className={className} size={iconSize} color={iconColor}  />,
  'WinForms': (className, iconSize, iconColor) => <SiDotnet className={className} size={iconSize} color={iconColor} />,
  'GitHub Copilot': (className, iconSize, iconColor) => <SiGithubcopilot className={className} size={iconSize} color={iconColor} />,
  'React': (className, iconSize, iconColor) => <FaReact className={className} size={iconSize} color={iconColor}  />,
};
