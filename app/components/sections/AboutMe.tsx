'use client'

import SectionWrapper from '../common/SectionWrapper'
import Heading from '../ui/Atoms/Heading'
import { motion } from 'framer-motion'
import data from '@/public/data.json'
import Text from '@/app/components/ui/Atoms/Text'

export default function AboutMe() {
  const aboutMeData = data.aboutMe;
  return (
    <SectionWrapper id={aboutMeData.id}>
      <article aria-labelledby="about-heading" >
        <Heading title={aboutMeData.title} align='center'/>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Text
            as='p'
            align='justify'
            size='lg'
            className="text-gray-600 leading-relaxed"
          >
            {aboutMeData.content}
          </Text>
        </motion.p>
      </article>
    </SectionWrapper>
  )
}
