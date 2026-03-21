'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '10+', label: 'Team Members' },
]

const values = [
  {
    title: 'Innovation First',
    description: 'We push boundaries and explore new technologies to deliver exceptional solutions.',
    icon: '🚀',
  },
  {
    title: 'Quality Obsessed',
    description: 'Every line of code is crafted with precision and attention to detail.',
    icon: '⚡',
  },
  {
    title: 'Client Focused',
    description: 'Your vision drives our work. We build partnerships, not just products.',
    icon: '🎯',
  },
  {
    title: 'Future Ready',
    description: 'We stay ahead of trends to ensure your technology never becomes obsolete.',
    icon: '🔮',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 px-6 lg:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About</span> Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to transforming ideas 
            into powerful digital experiences that drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-neon-cyan mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="p-8 rounded-2xl bg-dark-200/50 border border-gray-800 
                         hover:border-neon-cyan/50 transition-all duration-300
                         hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
