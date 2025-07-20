'use client'

import {
  FaCuttlefish, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaLaptopCode
} from 'react-icons/fa'
import {
  SiCplusplus, SiTypescript, SiJavascript, SiDotnet, SiNextdotjs,
  SiMongodb, SiPrisma, SiSqlite, SiJirasoftware
} from 'react-icons/si'
import { TbDatabase } from 'react-icons/tb'
import { GiNetworkBars, GiGearHammer } from 'react-icons/gi'

import SectionWrapper from '../common/SectionWrapper'
import Heading from '../common/Heading'
import { motion } from 'framer-motion'
import data from '@/public/data.json'
import { JSX } from 'react'

type SkillGroup = {
  label: string
  items: string[]
}

const iconMap: Record<string, JSX.Element> = {
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

export default function TechStack() {
  const skills = data.skills

  const groups: SkillGroup[] = [
    { label: 'Languages & Frameworks', items: skills.languages_frameworks },
    { label: 'Database & Cloud', items: skills.database_cloud },
    { label: 'Practices & Tools', items: skills.practices_tools },
    { label: 'UI & Desktop', items: skills.ui_desktop }
  ]

  return (
    <SectionWrapper id="tech">
      <Heading title="Tech Stack" subtitle="Tools & Technologies I use" />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {groups.map((group) => (
          <section key={group.label} aria-label={group.label}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{group.label}</h3>
            <ul className="flex flex-wrap gap-4">
              {group.items.map((tech) => {
                const icon = iconMap[tech]
                return (
                  <motion.li
                    key={tech}
                    className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg shadow-sm hover:shadow transition"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    {icon && <span className="text-xl">{icon}</span>}
                    <span className="text-sm font-medium">{tech}</span>
                  </motion.li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </SectionWrapper>
  )
}
