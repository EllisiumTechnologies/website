import React, { useCallback, useEffect, useState } from 'react'
import LandingPage from './components/Home/LandingPage'
import ProjectShowcase from './components/Work/ProjectDisplay'
import AboutLanding from './components/About/AboutLanding'
import WorkAccordion from './components/Home/WorkAccordion'
import Contact from './pages/Contact'
import ElasticCursor from './components/Common/ElasticCursor'
import useLenisSmoothScroll from './hooks/useLenisSmoothScroll'
import LoadingAnimation from './components/Common/LoadingAnimation'
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import GrainOverlay from './components/Common/GrainOverlay'

const App = () => {
  const [hasBooted, setHasBooted] = useState(false)
  const isReady = hasBooted

  useLenisSmoothScroll(true)

  useEffect(() => {
    if (!hasBooted) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [hasBooted])

  const handleLoadingComplete = useCallback(() => {
    setHasBooted(true)

    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <div>
      {!hasBooted && <LoadingAnimation onComplete={handleLoadingComplete} />}
      {hasBooted && <ElasticCursor />}
      <Navbar />
      <GrainOverlay/>
      <LandingPage isReady={isReady} />
      <ProjectShowcase />
      <WorkAccordion />
      <AboutLanding />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
