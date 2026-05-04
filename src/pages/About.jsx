import React from 'react'

const About = () => {
  return (
    <section className='flex min-h-screen items-center justify-center bg-[#D5C8B0] px-6 pt-24 text-[#1a1a1a]'>
      <div className='max-w-3xl'>
        <p className='mb-4 text-xs tracking-[0.22em] uppercase text-[#1a1a1a]/60'>Who We Are</p>
        <h1 className='mb-6 text-5xl font-semibold md:text-7xl'>About</h1>
        <p className='text-base leading-relaxed text-[#1a1a1a]/80 md:text-lg'>
          We design immersive digital experiences with a strong focus on motion, storytelling, and product clarity.
        </p>
      </div>
    </section>
  )
}

export default About
