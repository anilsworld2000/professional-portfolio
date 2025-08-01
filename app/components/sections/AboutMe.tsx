'use client'

import SectionWrapper from '../common/SectionWrapper'
import Heading from '../common/Heading'
import { motion } from 'framer-motion'
import data from '@/public/data.json'

export default function AboutMe() {
  const aboutMeData = data.aboutMe;
  return (
    <SectionWrapper id={aboutMeData.id}>
      <article aria-labelledby="about-heading" >
        <Heading title={aboutMeData.title}/>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 text-lg leading-relaxed text-justify"
        >
          {aboutMeData.content}
        </motion.p>
      </article>
    </SectionWrapper>
  )
}
