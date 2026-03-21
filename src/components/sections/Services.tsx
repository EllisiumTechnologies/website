'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks and best practices.',
    features: ['Next.js', 'React', 'TypeScript', 'Full-Stack Solutions'],
    color: '#00f5ff',
  },
  {
    title: '3D & WebGL',
    description: 'Immersive 3D experiences, visualizations, and interactive web applications.',
    features: ['Three.js', 'WebGL', 'React Three Fiber', 'Shaders'],
    color: '#bf00ff',
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications with native performance and feel.',
    features: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: '#ff00f5',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality.',
    features: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    color: '#00ff88',
  },
  {
    title: 'Backend & APIs',
    description: 'Scalable server solutions and robust API development.',
    features: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
    color: '#0088ff',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure, deployment, and continuous integration solutions.',
    features: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    color: '#ff6b00',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-32 px-6 lg:px-20 bg-dark-300/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer comprehensive technology solutions tailored to your unique business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-2xl bg-dark-200/50 border border-gray-800 
                         hover:border-gray-600 transition-all duration-500 overflow-hidden"
              style={{
                '--hover-color': service.color,
              } as React.CSSProperties}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: service.color }}
              />
              
              <div
                className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <div
                  className="w-6 h-6 rounded-lg"
                  style={{ backgroundColor: service.color }}
                />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-neon-cyan transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-dark-100 text-gray-300 
                               border border-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
