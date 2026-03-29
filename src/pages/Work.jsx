import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.png'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    id: '01',
    title: 'Cadrage & intention',
    leftLabel: 'NOTRE',
    rightLabel: 'PROCESS',
    description:
      'We start by listening and defining clear direction, goals, and usage to build a strong and shared foundation for the project.',
    coverImage: image1,
    cardImage: image2,
  },
  {
    id: '02',
    title: 'Direction visuelle',
    leftLabel: 'ART',
    rightLabel: 'SYSTEM',
    description:
      'From strategy to visuals, we shape a clear aesthetic language that gives the product personality and long-term consistency.',
    coverImage: image2,
    cardImage: image3,
  },
  {
    id: '03',
    title: 'Design & prototypage',
    leftLabel: 'UX',
    rightLabel: 'FLOW',
    description:
      'Wireframes and high-fidelity screens are crafted into intuitive journeys so every interaction feels intentional and effortless.',
    coverImage: image3,
    cardImage: image4,
  },
  {
    id: '04',
    title: 'Build & livraison',
    leftLabel: 'DEV',
    rightLabel: 'LAUNCH',
    description:
      'We deliver scalable implementation with polished details, making sure performance, quality, and storytelling stay aligned.',
    coverImage: image4,
    cardImage: image1,
  },
]

const Work = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return undefined
    }

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.project-panel')

      if (panels.length <= 1) {
        return
      }

      gsap.set(panels.slice(1), { yPercent: 100 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * (panels.length - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: 1 / (panels.length - 1),
        },
      })

      panels.slice(1).forEach((panel) => {
        timeline.to(panel, { yPercent: 0, duration: 1, ease: 'none' })
      })

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className='relative h-screen overflow-hidden bg-[#d6cdc0] pt-16'>
      {PROJECTS.map((project, index) => (
        <article
          key={project.id}
          className='project-panel absolute inset-0 grid h-screen w-full grid-cols-1 md:grid-cols-2'
          style={{ zIndex: index + 1 }}
        >
          <div className='relative h-[42vh] w-full md:h-full'>
            <img
              src={project.coverImage}
              alt={project.title}
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-black/18' />
          </div>

          <div className='relative flex h-full flex-col bg-[#d8d0c3] px-6 pb-10 pt-8 text-[#1f1f1f] md:px-12 md:pt-18'>
            <div className='flex items-start justify-between'>
              <h2 className='font-serif text-3xl  leading-none tracking-[-0.03em] md:text-5xl'>
                {project.title}
              </h2>
              <span className='font-["Passion_One"] text-3xl  leading-none md:text-5xl'>{project.id}</span>
            </div>

            <div className='mt-6 flex flex-col items-center gap-6 md:mt-30'>
              <div className='flex w-full max-w-md items-center justify-between text-[0.64rem] font-semibold tracking-[0.16em] text-[#2d2d2d]'>
                <span>{project.leftLabel}</span>
                <span>{project.rightLabel}</span>
              </div>

              <div className='w-50 border border-[#c4baac] bg-[#e2d9cc] p-2 shadow-[0_0_0_4px_rgba(236,229,217,0.75)] md:w-50'>
                <img
                  src={project.cardImage}
                  alt={`${project.title} detail`}
                  className='h-44 w-full object-cover md:h-52'
                />
              </div>
            </div>

            <p className='mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-[#222222] md:mt-22 md:text-xl'>
              {project.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Work
