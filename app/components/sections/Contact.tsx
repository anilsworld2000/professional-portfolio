'use client'

import SectionWrapper from '../common/SectionWrapper'
import Heading from '../ui/Atoms/Heading'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import data from '@/public/data.json'
import CustomLink from '../ui/molecules/CustomLink'

export default function Contact() {

  //const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  //const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setStatus('loading')

  //   try {
  //     const res = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //     })

  //     const data = await res.json()
  //     if (data.success) {
  //       setStatus('success')
  //       setFormData({ name: '', email: '', message: '' })
  //     } else {
  //       setStatus('error')
  //     }
  //   } catch {
  //     setStatus('error')
  //   }
  // }

  return (
    <SectionWrapper id="contact">
      <Heading title="Contact" subtitle="Let&#39;s Connect" align='center' />

      <section
        aria-labelledby="contact-heading"
        className="max-w-xl mx-auto text-center"
      >
        <p className="text-gray-600 mb-6">
          I&#39;m always open to collaborating on interesting projects or discussing new opportunities. Feel free to reach out!
        </p>

        <address className="not-italic flex flex-col items-center gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <CustomLink
              className="hover:underline"
              href={data.homeSection.content.contact.email}>{data.homeSection.content.contact.email}
            </CustomLink>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-green-600" />
            <span>{data.homeSection.content.contact.location}</span>
          </div>
        </address>

        {/* Optional form (semantically correct) */}
        {/* <form
          className="mt-8 space-y-4 text-left"
          aria-label="Contact form"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-2">Something went wrong. Try again.</p>
          )}
        </form> */}
      </section>
    </SectionWrapper>
  )
}
