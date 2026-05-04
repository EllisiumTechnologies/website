import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SOCIAL_LINKS = [
  { name: 'Instagram', url: '#' },
  { name: 'Twitter / X', url: '#' },
  { name: 'LinkedIn', url: '#' },
  { name: 'Dribbble', url: '#' }
]

const Footer = () => {
  return (
    <footer className='bg-[#D5C8B0] px-6 py-12 text-[#1a1a1a] md:px-12 md:py-20'>
      <div className='mx-auto flex max-w-7xl flex-col justify-between gap-16 md:flex-row md:gap-0'>
        
        {/* Left Side: Logo & Copyright */}
        <div className='flex flex-col justify-between'>
          <div>
            <Link to="/" className='font-["Germania_One"] text-6xl leading-none tracking-tight md:text-8xl text-[#1a1a1a]'>
              ET
            </Link>
            <p className='mt-6 max-w-sm text-sm font-light leading-relaxed text-[#1a1a1a]/50'>
              A studio crafting captivating digital experiences that redefine the landscape.
            </p>
          </div>
          
          <div className='mt-16 text-xs font-medium tracking-[0.15em] uppercase text-[#1a1a1a]/40'>
            © {new Date().getFullYear()} Ellisium Technology.<br className='md:hidden' /> All rights reserved.
          </div>
        </div>

        {/* Right Side: Links & Contact */}
        <div className='flex flex-col justify-between md:items-end'>
          <div className='grid grid-cols-2 gap-12 md:gap-24'>
            {/* Socials */}
            <div className='flex flex-col gap-4'>
              <h4 className='mb-2 text-[0.65rem] font-semibold tracking-[0.2em] text-[#1a1a1a]/30 uppercase'>Socials</h4>
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  className='group relative w-fit text-sm font-medium tracking-wide transition-colors hover:text-[#1a1a1a] text-[#1a1a1a]/70'
                >
                  {social.name}
                  <span className='absolute -bottom-1 left-0 h-[1px] w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full' />
                </a>
              ))}
            </div>

            {/* General */}
            <div className='flex flex-col gap-4'>
              <h4 className='mb-2 text-[0.65rem] font-semibold tracking-[0.2em] text-[#1a1a1a]/30 uppercase'>Menu</h4>
              {['Home', 'Work', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className='group relative w-fit text-sm font-medium tracking-wide transition-colors hover:text-[#1a1a1a] text-[#1a1a1a]/70'
                >
                  {item}
                  <span className='absolute -bottom-1 left-0 h-[1px] w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full' />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Back to top or small element */}
          <div className='mt-16 md:mt-0'>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='group flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#1a1a1a]/50 uppercase transition-colors hover:text-[#1a1a1a]'
            >
              Back to top
              <motion.svg 
                width="14" height="14" viewBox="0 0 14 14" fill="none"
                className="transition-transform duration-300 group-hover:-translate-y-1"
              >
                <path d="M7 13V1M7 1L1 7M7 1L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer