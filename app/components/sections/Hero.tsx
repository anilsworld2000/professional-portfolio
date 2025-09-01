'use client';
import { motion } from 'framer-motion'
import SectionWrapper from '../common/SectionWrapper'
import data from '@/public/data.json'
import Icon from '../ui/Atoms/Icon'
import DownloadButton from '@/app/components/ui/Atoms/DownloadButton'
import SocialLinks from '../common/SocialLinks';

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

          {/* Para */}
          {homeSection.para.length > 0 &&
            <h1 className="text-lg text-gray-600 font-small">
              {homeSection.para}
            </h1>
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
            <Icon name='Download' className='ml-1' color='white'/>
          </DownloadButton>

          {/* Social Links */}
          <SocialLinks/>
        </motion.div>
      </header>
    </SectionWrapper>
  )
}
