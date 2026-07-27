import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SERVICES = [
  'Website redesign',
  'Brand creation',
  'Software development'
]

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Log or handle submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className='bg-[#D5C8B0] px-6 pt-32 pb-20 text-[#1a1a1a] min-h-screen flex items-center'>
      <div className='mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 md:gap-24'>
        
        {/* Left Side: Header & Text */}
        <div className='flex flex-col justify-start lg:pt-10'>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='mb-6 text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-[#1a1a1a]/50'
          >
            Hit Us Up
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-8 font-serif text-5xl font-normal leading-[1.05] tracking-[-0.02em] md:text-7xl text-[#1a1a1a]'
          >
            Skip the<br/>small talk.<br/>Let's cook.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-base font-light leading-relaxed text-[#1a1a1a]/60 md:text-lg max-w-md'
          >
            We don't do boring. We only take on projects that stand out. Drop your info, pick your poison, and let's get to work.
          </motion.p>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className='flex flex-col lg:pt-10'
        >
          <form onSubmit={handleSubmit} className='flex flex-col gap-12'>
            
            {/* Name & Email Row */}
            <div className='flex flex-col gap-10 md:flex-row md:gap-8'>
              <div className='flex-1 group relative'>
                <label className='mb-3 block text-[0.65rem] font-semibold tracking-[0.2em] text-[#1a1a1a]/50 uppercase transition-colors group-focus-within:text-[#1a1a1a]'>
                  Name
                </label>
                <input 
                  type="text" 
                  required
                  className='w-full border-b border-[#1a1a1a]/20 bg-transparent pb-3 text-lg font-light outline-none transition-all focus:border-[#1a1a1a] focus:pb-4 text-[#1a1a1a]'
                  placeholder='John Doe'
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className='flex-1 group relative'>
                <label className='mb-3 block text-[0.65rem] font-semibold tracking-[0.2em] text-[#1a1a1a]/50 uppercase transition-colors group-focus-within:text-[#1a1a1a]'>
                  Email
                </label>
                <input 
                  type="email" 
                  required
                  className='w-full border-b border-[#1a1a1a]/20 bg-transparent pb-3 text-lg font-light outline-none transition-all focus:border-[#1a1a1a] focus:pb-4 text-[#1a1a1a]'
                  placeholder='john@example.com'
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Services Options */}
            <div>
              <label className='mb-5 block text-[0.65rem] font-semibold tracking-[0.2em] text-[#1a1a1a]/50 uppercase'>
                What's the move?
              </label>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {SERVICES.map((srv) => {
                  const isSelected = formData.service === srv;
                  return (
                    <motion.button
                      key={srv}
                      type="button"
                      onClick={() => setFormData({...formData, service: srv})}
                      className={`relative flex h-32 cursor-pointer flex-col justify-between border p-5 text-left transition-all duration-500 ease-out overflow-hidden ${
                        isSelected 
                          ? 'border-[#1a1a1a]/80 bg-[#1a1a1a]/5' 
                          : 'border-[#1a1a1a]/15 bg-transparent hover:border-[#1a1a1a]/40 hover:bg-[#1a1a1a]/[0.02]'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className='flex items-center gap-3'>
                        <div className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                          isSelected ? 'border-[#1a1a1a] bg-[#1a1a1a]' : 'border-[#1a1a1a]/30 bg-transparent'
                        }`}>
                          {isSelected && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="h-1.5 w-1.5 rounded-full bg-[#D5C8B0]"
                            />
                          )}
                        </div>
                      </div>
                       <span className={`text-sm font-medium tracking-wide transition-colors ${
                         isSelected ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a]'
                       }`}>
                        {srv}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <div className='pt-4'>
              <motion.button 
                type="submit"
                className='group relative flex items-center justify-center gap-4 overflow-hidden bg-[#1a1a1a] text-[#D5C8B0] px-8 py-5'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                 <span className='relative z-10 text-[0.7rem] font-bold uppercase tracking-[0.2em] group-hover:text-[#1a1a1a] transition-colors duration-300'>
                   Send It
                 </span>
                 <motion.svg
                   width="14" height="14" viewBox="0 0 14 14" fill="none"
                   className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#1a1a1a] duration-300"
                 >
                   <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </motion.svg>
                {/* Hover overlay effect */}
                <div className='absolute inset-0 z-0 origin-left scale-x-0 bg-[#d8c9b6] transition-transform duration-500 ease-out group-hover:scale-x-100' />
              </motion.button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  )
}

export default ContactSection