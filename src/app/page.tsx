'use client'

import { Suspense } from 'react'
import Scene3D from '@/components/3d/Scene'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="scene-container">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>
      
      <div className="content-wrapper">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
