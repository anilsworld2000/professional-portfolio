'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import data from '@/public/data.json'
import Icon, { GetIcon } from '../ui/Atoms/Icon'
import CustomLink from '../ui/molecules/CustomLink'
import DownloadButton from '@/app/components/ui/Atoms/DownloadButton'

export default function Hero() {
  const homeSection = data.homeSection;

  function getIcon(iconName: string, className: string = '') {
    let icon = GetIcon(iconName, className, 24)

    if (icon === null) {
      icon = GetIcon('ExternalLink', className)
    }
    return icon;
  }

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
          <DownloadButton
            aria-label='Download Resume as PDF'
            href='/Resume_Anil_Kumar.pdf'
            variant='primary'
            size='lg'
            rounded='full'
            className='inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 mt-6'
          >
              <span>Resume</span>
              <Icon name='Download' className='ml-1'/>
          </DownloadButton>

          {/* Social Links */}
          <section
            aria-label="Social media links"
            className="flex justify-center gap-6 text-2xl text-gray-700 mt-6"
          >
            <address className="not-italic flex gap-6">
              {homeSection.content.links.length > 0 &&
                (
                  homeSection.content.links.map(item => (
                    <CustomLink
                      key={item.name}
                      openNewTab={true}
                      href={item.link}
                      className='hover:text-blue-500'
                    >
                      {getIcon(item.name)}
                    </CustomLink>
                  ))
                )}
            </address>
          </section>

        </motion.div>
      </header>
    </SectionWrapper>
  )
}
