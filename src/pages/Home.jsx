import React from 'react'
import LandingPage from '../components/Home/LandingPage'
import ProjectDisplay from '../components/Home/ProjectDisplay'
import ScrambleText from '../components/Common/ScrambleText'
import ContactSection from '../components/Common/ContactSection'


const Home = ({ isReady }) => {
  return (
    <div className='min-h-screen bg-[#D5C8B0] text-[#1a1a1a]'>
      <main>
        <LandingPage isReady={isReady} />
        
        <div className='flex flex-col items-center justify-center py-32 bg-[#E5DCCB]'>
          <p className='text-sm uppercase tracking-widest mb-4 opacity-50 text-[#1a1a1a]'>Interactive Element</p>
          <ScrambleText text="ANIMATION + INTERACTION" className="text-4xl md:text-6xl text-[#1a1a1a]" />
        </div>

        <ProjectDisplay />
        
        <ContactSection />
      </main>
    </div>
  )
}

export default Home
