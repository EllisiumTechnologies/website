import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ── Replace these with your actual asset imports ─────────────────────────────
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: '01',
    name: 'One Earth Property',
    category: 'Web Development',
    tags: ['UI/UX', 'Animations', 'Development'],
    link: '#',
    image: project1,
  },
  {
    id: '02',
    name: 'Three js',
    category: 'WebGl',
    tags: ['Rendering', 'Textures', 'UI/UX'],
    link: '#',
    image: project2,
  },
  {
    id: '03',
    name: 'refokus',
    category: 'Learning',
    tags: ['React', 'Motion', 'gsap'],
    link: '#',
    image: project3,
  },
  {
    id: '04',
    name: 'LearnKins',
    category: 'Web Design & Development',
    tags: ['Webflow', 'UI/UX', 'Animation'],
    link: '#',
    image: project4,
  },
]

export default function ProjectShowcase() {
  const sectionRef    = useRef(null)
  const pinRef        = useRef(null)
  const circleRef     = useRef(null)
  const cursorRef     = useRef(null)
  const circleBorderRef = useRef(null)
  const slideRefs     = useRef([])
  const nameRef       = useRef(null)
  const counterRef    = useRef(null)
  const categoryRef   = useRef(null)
  const tagRefs       = useRef([])
  const lastIndexRef  = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  // ── Circle mouse parallax ────────────────────────────────────────────────
  useEffect(() => {
    const pin = pinRef.current
    const cursor = cursorRef.current
    if (!pin) return

    let cx = 0, cy = 0, tx = 0, ty = 0, raf

    const loop = () => {
      cx += (tx - cx) * 0.07
      cy += (ty - cy) * 0.07
      gsap.set(circleRef.current, { x: cx, y: cy })
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e) => {
      const { left, top, width, height } = pin.getBoundingClientRect()
      tx = (e.clientX - left - width  / 2) * 0.04
      ty = (e.clientY - top  - height / 2) * 0.04
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX + 26,
          y: e.clientY + 26,
          duration: 0.16,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      }
    }

    const onEnter = () => {
      if (!cursor) return
      gsap.to(cursor, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.25,
        ease: 'power3.out',
      })
    }

    const onLeave = () => {
      if (!cursor) return
      gsap.to(cursor, {
        autoAlpha: 0,
        scale: 0.86,
        duration: 0.2,
        ease: 'power3.out',
      })
    }

    pin.addEventListener('mousemove', onMove)
    pin.addEventListener('mouseenter', onEnter)
    pin.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      pin.removeEventListener('mousemove', onMove)
      pin.removeEventListener('mouseenter', onEnter)
      pin.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  // ── Main scroll sequence ─────────────────────────────────────────────────
  useGSAP(() => {
    const total = PROJECTS.length
    const transitions = total - 1
    const ringCircumference = 2 * Math.PI * 165

    // Stack all slides — first one visible, rest below
    gsap.set(slideRefs.current, { yPercent: (i) => i === 0 ? 0 : 100 })
    if (circleBorderRef.current) {
      circleBorderRef.current.style.strokeDasharray = `${ringCircumference}`
      circleBorderRef.current.style.strokeDashoffset = `${ringCircumference}`
    }

    // Pin and drive all transitions from one continuous progress value.
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: () => `+=${transitions * window.innerHeight}`,
      pin: pinRef.current,
      anticipatePin: 1,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress
        const raw = p * transitions

        slideRefs.current.forEach((slide, i) => {
          if (!slide || i === 0) return
          const y = gsap.utils.clamp(0, 100, (i - raw) * 100)
          gsap.set(slide, { yPercent: y })
        })

        if (circleBorderRef.current) {
          circleBorderRef.current.style.strokeDashoffset = `${ringCircumference * (1 - p)}`
        }

        const nextIndex = Math.min(total - 1, Math.floor(raw + 0.5))
        if (nextIndex !== lastIndexRef.current) {
          lastIndexRef.current = nextIndex
          setActiveIndex(nextIndex)
          animateText(nextIndex)
        }
      },
    })

    // Initial text entrance
    animateText(0, true)

  }, { dependencies: [] })

  const animateText = (i, initial = false) => {
    const dur = initial ? 0.9 : 0.55
    const ease = 'power4.out'

    gsap.fromTo(nameRef.current,
      { yPercent: initial ? 40 : 60, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: dur, ease },
    )
    gsap.fromTo(categoryRef.current,
      { yPercent: initial ? 30 : 40, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: dur * 0.85, ease, delay: 0.07 },
    )
    gsap.fromTo(counterRef.current,
      { autoAlpha: 0, x: -8 },
      { autoAlpha: 1, x: 0, duration: dur * 0.7, ease, delay: 0.04 },
    )
    if (tagRefs.current.length) {
      gsap.fromTo(tagRefs.current,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.4, ease, stagger: 0.06, delay: 0.12 },
      )
    }
  }

  const handleProjectClick = () => {
    const link = PROJECTS[activeIndex]?.link
    if (!link || link === '#') return

    if (/^https?:\/\//i.test(link)) {
      window.open(link, '_blank', 'noopener,noreferrer')
      return
    }

    window.location.href = link
  }

  const proj = PROJECTS[activeIndex]

  return (
    <section
      ref={sectionRef}
      style={{ height: `${PROJECTS.length * 100}vh`, background: '#0d0d0d' }}
    >
      <div
        ref={pinRef}
        className='relative flex h-screen w-full items-center justify-center overflow-hidden'
        style={{ background: '#0d0d0d', cursor: 'pointer' }}
        onClick={handleProjectClick}
      >

        <div
          ref={cursorRef}
          className='pointer-events-none fixed left-0 top-0 flex h-24 w-24 items-center justify-center rounded-full border border-white/45 bg-white/10 text-white'
          style={{
            zIndex: 80,
            opacity: 0,
            transform: 'scale(0.86)',
            backdropFilter: 'blur(5px)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          View Project
        </div>

        {/* ── Project image slides ── */}
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            ref={(el) => { if (el) slideRefs.current[i] = el }}
            className='absolute inset-0'
            style={{ zIndex: i + 1 }}
          >
            <img
              src={p.image}
              alt={p.name}
              className='h-full w-full object-cover'
              style={{ filter: 'brightness(1)' }}
            />
          </div>
        ))}

        {/* ── Noise grain overlay ── */}
        <div
          className='pointer-events-none absolute inset-0'
          style={{
            zIndex: 20,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px',
            opacity: 0.045,
          }}
        />

        {/* ── Center circle ── */}
        <div
          ref={circleRef}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          style={{ zIndex: 30, width: 340, height: 340 }}
        >
          {/* SVG ring — border grows on scroll */}
          <svg
            viewBox='0 0 340 340'
            className='absolute inset-0 h-full w-full -rotate-90'
            style={{ overflow: 'visible' }}
          >
            {/* Static dim ring */}
            <circle
              cx='170' cy='170' r='165'
              fill='none'
              stroke='rgba(255,255,255,0.1)'
              strokeWidth='1'
            />
            {/* Animated progress ring */}
            <circle
              ref={circleBorderRef}
              cx='170' cy='170' r='165'
              fill='none'
              stroke='rgba(255,255,255,0.75)'
              strokeWidth='1'
              strokeDasharray='314 1036'
              strokeDashoffset='314'
              strokeLinecap='round'
              style={{ transition: 'stroke-dashoffset 0.05s linear' }}
            />
          </svg>

          {/* Circle image mask */}
          <div
            className='absolute inset-[18px] overflow-hidden rounded-full'
            style={{ boxShadow: '0 0 60px rgba(0,0,0,0.7) inset' }}
          >
            {PROJECTS.map((p, i) => (
              <img
                key={p.id}
                src={p.image}
                alt={p.name}
                className='absolute inset-0 h-full w-full object-cover transition-opacity duration-700'
                style={{
                  opacity: i === activeIndex ? 1 : 0,
                  filter: 'brightness(0.82)',
                  transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                }}
              />
            ))}
          </div>

          {/* Scroll label bottom */}
          <p
            className='absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] tracking-[0.2em] text-white/50 uppercase'
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Scroll
          </p>

          {/* Counter left */}
          <p
            className='absolute left-[-4rem] top-1/2 -translate-y-1/2 text-[12px] tracking-[0.12em] text-white/40'
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            / {String(activeIndex + 1).padStart(2, '0')}
          </p>

          {/* Counter right */}
          <p
            className='absolute right-[-4rem] top-1/2 -translate-y-1/2 text-[12px] tracking-[0.12em] text-white/40'
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            / {String(PROJECTS.length).padStart(2, '0')}
          </p>

          {/* Tick marks at 90° points */}
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className='absolute left-1/2 top-1/2 origin-center'
              style={{
                transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-170px)`,
                width: 1,
                height: 8,
                background: 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>

        {/* ── Project name — bottom left ── */}
        <div
          className='absolute bottom-[12vh] left-[5vw] overflow-hidden'
          style={{ zIndex: 30 }}
        >
          <h2
            ref={nameRef}
            className='text-white'
            style={{
              fontFamily: '"Germania One", serif',
              fontSize: 'clamp(32px, 5vw, 72px)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
            }}
          >
            {proj.name}
          </h2>
          <p
            ref={categoryRef}
            className='mt-2 text-white/50'
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            {proj.category}
          </p>
        </div>

        {/* ── Counter / index — top left ── */}
        <div
          className='absolute left-[5vw] top-[8vh]'
          style={{ zIndex: 30 }}
        >
          <p
            ref={counterRef}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase',
            }}
          >
            {String(activeIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')} &nbsp;·&nbsp; Featured Work
          </p>
        </div>

        {/* ── Tags — top right ── */}
        <div
          className='absolute right-[5vw] top-[8vh] flex flex-col items-end gap-2'
          style={{ zIndex: 30 }}
        >
          {proj.tags.map((tag, i) => (
            <span
              key={tag}
              ref={(el) => { if (el) tagRefs.current[i] = el }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Vignette edges ── */}
        <div
          className='pointer-events-none absolute inset-0'
          style={{
            zIndex: 25,
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.65) 100%)',
          }}
        />

      </div>
    </section>
  )
}