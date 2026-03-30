import React from 'react'
import LandingPage from '../components/Home/LandingPage'
import FontAnimation from '../components/Home/FontAnimation'
import WorkAccordion from '../components/Home/WorkAccordion'

const Home = ({ isReady }) => {
  return (
    <div className='min-h-screen bg-[#D5C8B0] text-white'>
      <main>
        <LandingPage isReady={isReady} />
        <FontAnimation />
        <WorkAccordion />
      </main>
    </div>
  )
}

export default Home
