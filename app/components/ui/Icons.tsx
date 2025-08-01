import { X } from 'lucide-react';
import { JSX } from 'react';
import { FaCss3Alt, FaCuttlefish, FaExternalLinkAlt, FaGitAlt, FaGithub, FaHtml5, FaLaptopCode, FaLinkedin, FaNodeJs } from 'react-icons/fa'
import { GiNetworkBars, GiGearHammer } from 'react-icons/gi';
import { SiCplusplus, SiDotnet, SiJavascript, SiJirasoftware, SiMongodb, SiNextdotjs, SiPrisma, SiSqlite, SiTypescript } from 'react-icons/si';
import { TbDatabase } from 'react-icons/tb';

export default function GetIcon(iconName: string) {
  const icon = iconMap[iconName];

  if (icon == undefined || icon == null)
    return null;
  return icon;
}

const iconMap: Record<string, JSX.Element> = {
  'X': <X className="text-gray-500" />,
  'LinkedIn': <FaLinkedin className="text-blue-700" />,
  'ExternalLink': <FaExternalLinkAlt className="text-gray-700" />,
  'GitHub': <FaGithub className="text-gray-700" />,
  'C#': <FaCuttlefish className="text-purple-700" />,
  'C++': <SiCplusplus className="text-blue-700" />,
  'TypeScript': <SiTypescript className="text-blue-500" />,
  'JavaScript': <SiJavascript className="text-yellow-500" />,
  'ASP.NET': <SiDotnet className="text-blue-700" />,
  'Next.js': <SiNextdotjs />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'HTML': <FaHtml5 className="text-orange-600" />,
  'CSS': <FaCss3Alt className="text-blue-600" />,
  'SQLite': <SiSqlite className="text-gray-600" />,
  'SQL': <TbDatabase className="text-gray-800" />,
  'Prisma': <SiPrisma />,
  'MongoDB': <SiMongodb className="text-green-600" />,
  'Git': <FaGitAlt className="text-orange-500" />,
  'TDD': <GiNetworkBars className="text-purple-600" />,
  'MVC': <SiDotnet />,
  'MVVM': <FaLaptopCode className="text-indigo-500" />,
  'SOLID Principles': <SiJirasoftware className="text-purple-600" />,
  'Agile': <SiJirasoftware />,
  'Design Patterns': <GiGearHammer className="text-gray-700" />,
  'WinForms': <SiDotnet />,
}
