'use client'

import SectionWrapper from '../common/SectionWrapper'
import Heading from '../common/Heading'
import { motion } from 'framer-motion'
import data from '@/public/data.json'

export default function AboutMe() {
  return (
    <SectionWrapper id="about">
      <article aria-labelledby="about-heading" className="max-w-4xl mx-auto text-left">
        <Heading title="About Me" />
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          {data.summary}
        </motion.p>
      </article>
    </SectionWrapper>
  )
}
