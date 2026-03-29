import React from 'react'

const About = () => {
  return (
    <section className='flex min-h-screen items-center justify-center bg-zinc-800 px-6 pt-24 text-center text-white'>
      <div className='max-w-3xl'>
        <p className='mb-4 text-xs tracking-[0.22em] uppercase text-white/60'>Who We Are</p>
        <h1 className='mb-6 text-5xl font-semibold md:text-7xl'>About</h1>
        <p className='text-base leading-relaxed text-white/80 md:text-lg'>
          We design immersive digital experiences with a strong focus on motion, storytelling, and product clarity.
        </p>
      </div>
    </section>
  )
}

export default About
