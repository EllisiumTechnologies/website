import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

const STRIP_COUNT = 24

const LoadingAnimation = ({ onComplete }) => {
  const rootRef = useRef(null)
  const overlayRef = useRef(null)
  const logoRef = useRef(null)
  const stripsRef = useRef([])

  useLayoutEffect(() => {
    if (!rootRef.current || !overlayRef.current || !logoRef.current || !stripsRef.current.length) {
      return undefined
    }

    const ctx = gsap.context(() => {
      const strips = stripsRef.current

      gsap.set(rootRef.current, { autoAlpha: 1 })
      gsap.set(overlayRef.current, { opacity: 1 })
      gsap.set(logoRef.current, { autoAlpha: 1, clipPath: 'inset(0 100% 0 0)' })
      gsap.set(strips, { scaleX: 1, transformOrigin: 'right center' })

      const tl = gsap.timeline()

      tl.to(logoRef.current, {
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.85,
        ease: 'power2.out',
      })
        .to(logoRef.current, {
          clipPath: 'inset(0 0 0 100%)',
          duration: 0.65,
          ease: 'power2.inOut',
        }, '+=0.35')
        .to(strips, {
          scaleX: 0,
          duration: 0.72,
          stagger: { each: 0.045, from: 'start' },
          ease: 'expo.inOut',
        })
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'sine.out',
        })
        .to(rootRef.current, {
          autoAlpha: 0,
          duration: 0.28,
          onComplete: () => {
            onComplete?.()
          },
        }, '-=0.02')
    }, rootRef)

    return () => {
      ctx.revert()
    }
  }, [onComplete])

  return (
    <div ref={rootRef} className='fixed inset-0 z-100 h-screen w-full overflow-hidden'>
      <div ref={overlayRef} className='absolute inset-0 z-5 bg-white/30 backdrop-blur-lg' />

      <div className='absolute inset-0 z-10 flex'>
        {Array.from({ length: STRIP_COUNT }).map((_, index) => (
          <div
            key={index}
            ref={(element) => {
              stripsRef.current[index] = element
            }}
            className='h-full bg-[#B6BAA8]'
            style={{ width: `${100 / STRIP_COUNT}%` }}
          />
        ))}
      </div>

      <div className='absolute inset-0 z-20 grid place-items-center'>
        <div ref={logoRef} className='font-["Germania_One"] text-7xl leading-none text-white md:text-8xl'>
          ET
        </div>
      </div>
    </div>
  )
}

export default LoadingAnimation
