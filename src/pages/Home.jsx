import React from 'react'
import LandingPage from '../components/Home/LandingPage'
import ProjectDisplay from '../components/Home/ProjectDisplay'


const Home = ({ isReady }) => {
  return (
    <div className='min-h-screen bg-[#D5C8B0] text-white'>
      <main>
        <LandingPage isReady={isReady} />
        <ProjectDisplay />
        <div className='h-200 w-full'></div>
      </main>
    </div>
  )
}

export default Home
