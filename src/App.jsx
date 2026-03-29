import React, { useCallback, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ElasticCursor from './components/Common/ElasticCursor'
import useLenisSmoothScroll from './hooks/useLenisSmoothScroll'
import LoadingAnimation from './components/Common/LoadingAnimation'
import Navbar from './components/Common/Navbar'
import GrainOverlay from './components/Common/GrainOverlay'
import Work from './pages/Work'

const App = () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [hasBooted, setHasBooted] = useState(false)
  const isRouteChanging = location.pathname !== displayLocation.pathname
  const isLoading = !hasBooted || isRouteChanging

  useLenisSmoothScroll(!isLoading)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previousTouchAction = document.body.style.touchAction

    if (isLoading) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = previousOverflow
      document.body.style.touchAction = previousTouchAction
    }

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.touchAction = previousTouchAction
    }
  }, [isLoading])

  const handleLoadingComplete = useCallback(() => {
    if (!hasBooted) {
      setHasBooted(true)
    }

    setDisplayLocation(location)

    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [hasBooted, location])

  return (
    <div>
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      {!isLoading && <ElasticCursor />}
      <Navbar />
      <GrainOverlay />

      <Routes location={displayLocation}>
        <Route path='/' element={<Home isReady={!isLoading} />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
