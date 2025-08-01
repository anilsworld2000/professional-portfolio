'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import Button from '../ui/Buttons'
import data from '@/public/data.json'
import GetIcon from '../ui/Icons'

export default function Hero() {
  const homeSection = data.homeSection;
  return (
    <SectionWrapper id={homeSection.id}>
      <header className="max-w-3xl mx-auto text-center" aria-label="Hero section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hi, I&apos;m <span className="text-blue-600">{homeSection.content.name}</span>
          </h1>

          {/* Sub title */}
          {homeSection.subTitle.length > 0 &&
            <h2 className="text-lg text-gray-600 font-medium">
              {homeSection.subTitle}
            </h2>
          }

          {/* Download Resume Button */}
          <Button.Download
            className='mt-6'
            tooltipContent='Download Resume'
            href='/Resume_Anil_Kumar.pdf'
            aria-label='Download Resume as PDF'
            size="lg"
            rounded='full'>
            Resume
          </Button.Download>

          {/* Social Links */}
          <section
            aria-label="Social media links"
            className="flex justify-center gap-6 text-2xl text-gray-700 mt-6"
          >
            <address className="not-italic flex gap-6">
              {homeSection.content.links.map(p => (
                  <Button.Icon
                    key={p.name}
                    href={p.link}
                    tooltipContent={p.name}
                    iconOnly={GetIcon(p.name)}
                    size='md'
                    aria-label={`Open ${p.name} profile`}
                    className="hover:text-black transition"
                  />
              ))}
            </address>
          </section>

        </motion.div>
      </header>
    </SectionWrapper>
  )
}
