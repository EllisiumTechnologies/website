import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)

  const links = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Work', href: '/work' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      { name: 'GitHub', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Instagram', href: '#' },
    ]
  }

  useGSAP(() => {
    const marqueeTrack = document.querySelector('.marquee-track')
    if (marqueeTrack) {
      gsap.to(marqueeTrack, {
        xPercent: -50,
        duration: 18,
        ease: 'none',
        repeat: -1,
      })
    }

    gsap.fromTo('.footer-link-item',
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        }
      }
    )

    const items = document.querySelectorAll('.footer-link-item a')
    items.forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(el, { x: 6, duration: 0.2, ease: 'power2.out' }))
      el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, duration: 0.2, ease: 'power2.out' }))
    })
  }, { scope: footerRef })

  return (
    <footer ref={footerRef} className="relative bg-[#ffffff] overflow-hidden font-['Cormorant_Garamond',Georgia,serif] text-[#0e0d0b]">

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20200%20200%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%270.9%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27%20opacity=%270.06%27/%3E%3C/svg%3E')] bg-[length:200px_200px] opacity-50 pointer-events-none z-0" />

      <div className="border-t border-b border-[rgba(14,13,11,0.15)] overflow-hidden whitespace-nowrap py-[14px] relative z-10">
        <div className="marquee-track inline-flex will-change-transform">
          {Array(8).fill('Ellisium Technologies · Build Without Limits · ').map((t, i) => (
            <span key={i} className="inline-block text-[0.72rem] tracking-[0.25em] uppercase text-[rgba(14,13,11,0.45)] pr-8 font-['DM_Mono','Courier_New',monospace]">{t}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1480px] mx-auto px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[0.7rem] tracking-[0.3em] uppercase text-[rgba(14,13,11,0.45)] font-['DM_Mono','Courier_New',monospace] m-0"
          >
            ✦ Ready to build?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[1.08] m-0 tracking-[-0.02em]"
          >
            Let's create<br />
            <em className="not-italic font-normal text-[rgba(14,13,11,0.55)]">something</em><br />
            extraordinary.
          </motion.h2>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.04, backgroundColor: '#e8e0cc' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-[10px] self-start px-[30px] py-[14px] bg-[#0e0d0b] text-[#D5C8B0] no-underline font-['DM_Mono','Courier_New',monospace] text-[0.72rem] tracking-[0.18em] uppercase rounded-[2px] cursor-pointer transition-colors duration-250"
          >
            Start a project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 gap-10 pt-6">
          <div className="flex flex-col gap-5">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[rgba(14,13,11,0.45)] font-['DM_Mono','Courier_New',monospace]">Company</span>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {links.company.map(link => (
                <li key={link.name} className="footer-link-item">
                  <a href={link.href} className="flex items-center gap-[10px] no-underline text-[#0e0d0b] text-[1.25rem] font-medium tracking-[-0.01em] transition-opacity duration-200">
                    <span className="text-[0.9rem] text-[rgba(14,13,11,0.15)] leading-none">—</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[rgba(14,13,11,0.45)] font-['DM_Mono','Courier_New',monospace]">Connect</span>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {links.social.map(link => (
                <li key={link.name} className="footer-link-item">
                  <a href={link.href} className="flex items-center gap-[10px] no-underline text-[#0e0d0b] text-[1.25rem] font-medium tracking-[-0.01em] transition-opacity duration-200">
                    <span className="text-[0.9rem] text-[rgba(14,13,11,0.15)] leading-none">—</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="relative z-10 overflow-hidden px-10 leading-[0.85]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(5rem,18vw,16rem)] font-bold tracking-[-0.04em] text-transparent select-none whitespace-nowrap font-['Cormorant_Garamond',Georgia,serif]"
          style={{ WebkitTextStroke: '1.5px rgba(14,13,11,0.18)' }}
        >
          ELLISIUM
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-[rgba(14,13,11,0.15)] flex justify-between items-center px-12 py-[18px] flex-wrap gap-2">
        <span className="text-[0.68rem] tracking-[0.18em] uppercase text-[rgba(14,13,11,0.45)] font-['DM_Mono','Courier_New',monospace]">© 2026 Ellisium Technologies</span>
        <span className="text-[0.68rem] tracking-[0.18em] uppercase text-[rgba(14,13,11,0.45)] font-['DM_Mono','Courier_New',monospace]">Crafted in India · Built for the world</span>
      </div>

    </footer>
  )
}

export default Footer