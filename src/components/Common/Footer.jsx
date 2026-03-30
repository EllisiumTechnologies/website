import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion, useInView } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)
  const marqueeRef = useRef(null)

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
    // Marquee animation
    const marqueeTrack = document.querySelector('.marquee-track')
    if (marqueeTrack) {
      gsap.to(marqueeTrack, {
        xPercent: -50,
        duration: 18,
        ease: 'none',
        repeat: -1,
      })
    }

    // Stagger footer links on scroll
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

    // Hover micro-interactions on links
    const items = document.querySelectorAll('.footer-link-item a')
    items.forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(el, { x: 6, duration: 0.2, ease: 'power2.out' }))
      el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, duration: 0.2, ease: 'power2.out' }))
    })
  }, { scope: footerRef })

  return (
    <footer ref={footerRef} style={styles.footer}>

      {/* ── Noise / grain overlay ── */}
      <div style={styles.grain} />

      {/* ── Scrolling marquee divider ── */}
      <div style={styles.marqueeWrapper}>
        <div className="marquee-track" style={styles.marqueeTrack}>
          {Array(8).fill('Ellisium Technologies · Build Without Limits · ').map((t, i) => (
            <span key={i} style={styles.marqueeText}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── Main grid ── */}
      <div style={styles.container}>

        {/* LEFT — CTA block */}
        <div style={styles.ctaBlock}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={styles.eyebrow}
          >
            ✦ Ready to build?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            style={styles.headline}
          >
            Let's create<br />
            <em style={styles.headlineItalic}>something</em><br />
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
            style={styles.cta}
          >
            Start a project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.a>
        </div>

        {/* RIGHT — nav columns */}
        <div style={styles.navBlock}>

          <div style={styles.navCol}>
            <span style={styles.navHeading}>Company</span>
            <ul style={styles.navList}>
              {links.company.map(link => (
                <li key={link.name} className="footer-link-item">
                  <a href={link.href} style={styles.navLink}>
                    <span style={styles.navDash}>—</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.navCol}>
            <span style={styles.navHeading}>Connect</span>
            <ul style={styles.navList}>
              {links.social.map(link => (
                <li key={link.name} className="footer-link-item">
                  <a href={link.href} style={styles.navLink}>
                    <span style={styles.navDash}>—</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Wordmark bar ── */}
      <div style={styles.wordmarkBar}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={styles.wordmark}
        >
          ELLISIUM
        </motion.div>
      </div>

      {/* ── Bottom strip ── */}
      <div style={styles.bottom}>
        <span style={styles.bottomText}>© 2026 Ellisium Technologies</span>
        <span style={styles.bottomText}>Crafted in India · Built for the world</span>
      </div>

    </footer>
  )
}

/* ─────────────────────────────────────────
   STYLES  (no external libraries needed)
───────────────────────────────────────── */
const SAND   = '#D5C8B0'
const INK    = '#0e0d0b'
const MID    = 'rgba(14,13,11,0.45)'
const LIGHT  = 'rgba(14,13,11,0.15)'

const styles = {
  footer: {
    position: 'relative',
    backgroundColor: SAND,
    overflow: 'hidden',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    color: INK,
  },
  grain: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
    backgroundSize: '200px 200px',
    opacity: 0.5,
    pointerEvents: 'none',
    zIndex: 0,
  },
  marqueeWrapper: {
    borderTop: `1px solid ${LIGHT}`,
    borderBottom: `1px solid ${LIGHT}`,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '14px 0',
    position: 'relative',
    zIndex: 1,
  },
  marqueeTrack: {
    display: 'inline-flex',
    willChange: 'transform',
  },
  marqueeText: {
    display: 'inline-block',
    fontSize: '0.72rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: MID,
    paddingRight: '2rem',
    fontFamily: "'DM Mono', 'Courier New', monospace",
  },

  /* Main grid */
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1480px',
    margin: '0 auto',
    padding: '80px 48px 60px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
    alignItems: 'start',
  },

  /* CTA */
  ctaBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  eyebrow: {
    fontSize: '0.7rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: MID,
    fontFamily: "'DM Mono', 'Courier New', monospace",
    margin: 0,
  },
  headline: {
    fontSize: 'clamp(2.6rem, 5vw, 5rem)',
    fontWeight: 600,
    lineHeight: 1.08,
    margin: 0,
    color: INK,
    letterSpacing: '-0.02em',
  },
  headlineItalic: {
    fontStyle: 'italic',
    fontWeight: 400,
    color: 'rgba(14,13,11,0.55)',
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    alignSelf: 'flex-start',
    padding: '14px 30px',
    backgroundColor: INK,
    color: SAND,
    textDecoration: 'none',
    fontFamily: "'DM Mono', 'Courier New', monospace",
    fontSize: '0.72rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'background-color 0.25s',
  },

  /* Nav */
  navBlock: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    paddingTop: '24px',
  },
  navCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  navHeading: {
    fontSize: '0.65rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: MID,
    fontFamily: "'DM Mono', 'Courier New', monospace",
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    color: INK,
    fontSize: '1.25rem',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    transition: 'opacity 0.2s',
  },
  navDash: {
    fontSize: '0.9rem',
    color: LIGHT,
    lineHeight: 1,
  },

  /* Giant wordmark */
  wordmarkBar: {
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    padding: '0 40px',
    lineHeight: 0.85,
  },
  wordmark: {
    fontSize: 'clamp(5rem, 18vw, 16rem)',
    fontWeight: 700,
    letterSpacing: '-0.04em',
    color: 'transparent',
    WebkitTextStroke: `1.5px rgba(14,13,11,0.18)`,
    userSelect: 'none',
    whiteSpace: 'nowrap',
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  },

  /* Bottom */
  bottom: {
    position: 'relative',
    zIndex: 1,
    borderTop: `1px solid ${LIGHT}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 48px',
    flexWrap: 'wrap',
    gap: '8px',
  },
  bottomText: {
    fontSize: '0.68rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: MID,
    fontFamily: "'DM Mono', 'Courier New', monospace",
  },
}

export default Footer