'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Quantum Dashboard',
    category: 'Web Application',
    description: 'Real-time data visualization platform with 3D charts and analytics.',
    image: '/projects/project1.jpg',
    tags: ['Next.js', 'Three.js', 'D3.js'],
    color: '#00f5ff',
  },
  {
    title: 'NeoBank App',
    category: 'Mobile Application',
    description: 'Modern banking experience with seamless UX and biometric authentication.',
    image: '/projects/project2.jpg',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    color: '#bf00ff',
  },
  {
    title: 'MetaVerse Mall',
    category: '3D Experience',
    description: 'Virtual shopping experience with immersive 3D environments.',
    image: '/projects/project3.jpg',
    tags: ['Three.js', 'WebXR', 'GLTF'],
    color: '#ff00f5',
  },
  {
    title: 'AI Analytics',
    category: 'SaaS Platform',
    description: 'Machine learning powered business intelligence dashboard.',
    image: '/projects/project4.jpg',
    tags: ['Python', 'TensorFlow', 'React'],
    color: '#00ff88',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden bg-dark-200/50 
                         border border-gray-800 hover:border-gray-600 transition-all duration-500"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.color}40, transparent)`,
                }}
              />
              
              <div
                className="aspect-video bg-dark-100 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, #0a0a0a)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-2xl opacity-30 group-hover:opacity-50 
                               group-hover:scale-110 transition-all duration-500"
                    style={{ backgroundColor: project.color }}
                  />
                </div>
                
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 text-sm rounded-full text-dark-400"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white 
                               group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-dark-100 text-gray-400 
                                 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 border border-gray-700 text-gray-300 rounded-full
                       hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
