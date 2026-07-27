import React from 'react'
import LandingPage from '../components/Home/LandingPage'
import FontAnimation from '../components/Home/FontAnimation'
import WorkAccordion from '../components/Home/WorkAccordion'
import AboutLanding from '../components/About/AboutLanding'

const Home = ({ isReady }) => {
  return (
    <div className='min-h-screen bg-[#ffffff] '>
      <main>
        <LandingPage isReady={isReady} />
        {/* <FontAnimation /> */}
        <AboutLanding />
        <WorkAccordion />
      </main>
    </div>
  )
}

export default Home
