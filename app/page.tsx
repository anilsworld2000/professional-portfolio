import Hero from '@/app/components/sections/Hero'
import AboutMe from '@/app/components/sections/AboutMe'
import TechStack from '@/app/components/sections/TechStack'
import Projects from '@/app/components/sections/Projects'
import Experience from '@/app/components/sections/ExperienceSection'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Divider from './components/common/Divider'
// ... import other sections

export default function HomePage() {
  return (
    <>
      <main className="pt-20 text-center bg-gradient-to-b from-white via-gray-50 to-white"> {/* offset for fixed navbar */}
          <Hero />
          <Divider/>
          <AboutMe />
          <Divider/>
          <TechStack />
          <Divider/>
          <Projects />
          <Divider/>
          <Experience />
          <Divider/>
          <Certifications />
          <Divider/>
          <Contact/>
      </main>
    </>
  )
}
