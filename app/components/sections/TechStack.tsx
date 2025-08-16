'use client'

import SectionWrapper from '../common/SectionWrapper'
import Heading from '../ui/Atoms/Heading'
import { motion } from 'framer-motion'
import data from '@/public/data.json'
import { GetIcon} from '../ui/Atoms/Icon'
import BaseBadge from '../ui/Atoms/BaseBadge'

export default function TechStack() {
  const skills = data.skills.content;

  function getIcon(iconName: string, className: string = '') {
    let icon = GetIcon(iconName, className)

    if (icon === null) {
      icon = GetIcon('ExternalLink', className)
    }
    return icon;
  }

  return (
    <SectionWrapper id={data.skills.id}>
      <Heading title={data.skills.title} subtitle={data.skills.subTitle} align='center' />
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {skills.map((group) => (
          <section key={group.name} aria-label={group.name}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{group.name}</h3>
            <ul className="flex flex-wrap gap-4 justify-center">
              {group.items.map((tech) => {
                const icon = getIcon(tech)
                return (
                  <motion.li
                    key={tech}
                    className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg shadow-sm hover:shadow transition"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    {icon && <BaseBadge iconLeft={icon}>{tech}</BaseBadge>}
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
