'use client'

import { useEffect } from 'react'

export default function Particles() {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles')
    if (!particlesContainer) return

    const particleCount = 50
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 20}s`
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`
      particlesContainer.appendChild(particle)
    }

    return () => {
      particlesContainer.innerHTML = ''
    }
  }, [])

  return <div id="particles" className="fixed inset-0 z-[-1] pointer-events-none"></div>
}
