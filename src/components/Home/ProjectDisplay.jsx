import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

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
    color: '#C0B6A9',
  },
  {
    id: '02',
    name: 'Three js',
    category: 'WebGL',
    tags: ['Rendering', 'Textures', 'UI/UX'],
    link: '#',
    image: project2,
    color: '#D5C8B0',
  },
  {
    id: '03',
    name: 'refokus',
    category: 'Learning',
    tags: ['React', 'Motion', 'gsap'],
    link: '#',
    image: project3,
    color: '#E5DCCB',
  },
  {
    id: '04',
    name: 'LearnKins',
    category: 'Web Design & Development',
    tags: ['Webflow', 'UI/UX', 'Animation'],
    link: '#',
    image: project4,
    color: '#C0B6A9',
  },
]

function ProjectCard({ project, index, total }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-10%' })

  return (
    <motion.div
      ref={ref}
      className="group relative w-full"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0 }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-2xl"
        style={{
          backgroundColor: project.color,
          boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
        }}
      >
        {/* Top section: image + overlay */}
        <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {/* Category badge */}
          <span
            className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] tracking-[0.16em] uppercase"
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              color: '#1a1a1a',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Bottom section: info */}
        <div className="p-8 md:p-10 flex items-end justify-between">
          <div>
            <p
              className="text-[11px] tracking-[0.18em] uppercase opacity-50 mb-2"
              style={{ fontFamily: 'DM Sans, sans-serif', color: '#1a1a1a' }}
            >
              / {String(index + 1).padStart(2, '0')} &nbsp;·&nbsp; {String(total).padStart(2, '0')}
            </p>
            <h3
              className="text-[clamp(28px,4vw,56px)] leading-[0.95] tracking-[-0.02em]"
              style={{
                fontFamily: '"Germania One", serif',
                color: '#1a1a1a',
              }}
            >
              {project.name}
            </h3>
            <div className="flex gap-2 mt-4 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[10px] tracking-[0.14em] uppercase border"
                  style={{
                    borderColor: 'rgba(26,26,26,0.2)',
                    color: '#1a1a1a',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow icon */}
          <div
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-300 group-hover:bg-[#1a1a1a] group-hover:border-[#1a1a1a]"
            style={{ borderColor: 'rgba(26,26,26,0.3)' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-all duration-300 group-hover:stroke-white"
              style={{ stroke: '#1a1a1a', strokeWidth: 2 }}
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </a>
    </motion.div>
  )
}

export default function ProjectDisplay() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: '#E5DCCB' }}
    >
      {/* Section header */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12">
        <div ref={titleRef} className="opacity-0">
          <p
            className="text-[11px] tracking-[0.2em] uppercase opacity-50 mb-4"
            style={{ fontFamily: 'DM Sans, sans-serif', color: '#1a1a1a' }}
          >
            Selected Work
          </p>
          <h2
            className="text-[clamp(40px,6vw,88px)] leading-[0.9] tracking-[-0.03em]"
            style={{
              fontFamily: '"Germania One", serif',
              color: '#1a1a1a',
            }}
          >
            What we've<br />cooked up.
          </h2>
          <p
            className="mt-6 text-[14px] leading-relaxed max-w-md opacity-60"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              color: '#1a1a1a',
            }}
          >
            Skip the fluff. Here's a taste of what we build when we're locked in.
          </p>
        </div>
      </div>

      {/* Project cards */}
      <div className="px-6 md:px-12 pb-32 md:pb-40 flex flex-col gap-8 md:gap-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  )
}
