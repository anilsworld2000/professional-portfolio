'use client'

import { motion } from 'framer-motion'
import {FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import SectionWrapper from '../common/SectionWrapper'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <header className="max-w-3xl mx-auto text-center" aria-label="Hero section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hi, I&apos;m <span className="text-blue-600">Anil Kumar</span>
          </h1>

          <h2 className="text-lg text-gray-600 font-medium">
            Experienced Software Developer specializing in scalable, reusable applications.
          </h2>

          <div className="mt-6">
            <a href="/Resume_Anil_Kumar.pdf"
              download
              aria-label="Download Resume as PDF">
              <Button className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow ">Download Resume</Button>
            </a>

          </div>

          <section
            aria-label="Social media links"
            className="flex justify-center gap-6 text-2xl text-gray-700 mt-6"
          >
            <address className="not-italic flex gap-6">
              <a
                href="https://github.com/anilkumardeveloper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-black transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/anilkumardeveloper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/anilkumarcodes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-sky-500 transition"
              >
                <FaTwitter />
              </a>
            </address>
          </section>
        </motion.div>
      </header>
    </SectionWrapper>
  )
}
