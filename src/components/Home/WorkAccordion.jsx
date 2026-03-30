import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    id: 1,
    question: "Do you guys actually sleep?",
    answer: "Nah, we're powered by energy drinks and chaos. We do sleep sometimes though... when the code compiles on the first try."
  },
  {
    id: 2,
    question: "Why should we pick you over other agencies?",
    answer: "We're not gonna lie, we're pretty unhinged in the best way possible. We actually care about your project like it's our baby."
  },
  {
    id: 3,
    question: "What's your vibe check?",
    answer: "We're that friend who actually delivers on promises. No cap, we meet deadlines, communicate like humans, and make fire websites."
  },
  {
    id: 4,
    question: "Can you handle our chaotic ideas?",
    answer: "TRY US. We've built weirder things at 3am. Bring on the wildest concepts, we'll make them work somehow."
  },
  {
    id: 5,
    question: "What's the tea on pricing?",
    answer: "We're flexible. Let's talk. No weird contracts, no hidden fees, just vibes and good work. And maybe pizza."
  }
]

const TextReveal = ({ children, className, delay = 1 }) => {
  return (
    <div className={`relative w-fit ${className}`}>
      <h1 className={`relative z-10 ${className}`}>
        {children}
      </h1>
      <motion.div
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: .5, delay }}
        className="h-full w-full absolute origin-right top-0 bg-[#B6BAA8] z-20"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
        className="h-full w-full absolute origin-right top-0 bg-black z-20"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        transition={{ duration: 0.1, delay: delay + 0.2 }}
        className="h-full w-full absolute origin-right top-0 bg-[#B6BAA8] z-20"
      />
    </div>
  )
}

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

const MinusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const AccordionItem = ({ item, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-black/10"
    >
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between gap-4 group"
      >
        <span className="text-left text-base md:text-lg font-medium text-black group-hover:text-black/70 transition-colors duration-300">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-black text-white' : 'bg-black/5 text-black group-hover:bg-black group-hover:text-white'}`}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pb-4 pr-10">
              <motion.p
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-black/60 text-sm leading-relaxed"
              >
                {item.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const WorkAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-28 px-6 md:px-16 ">
      <div className="max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-24 self-start"
          >
            <p className="text-xs font-bold text-black/40 uppercase tracking-[0.3em] mb-3">
              Still Curious?
            </p>
            
            <div className="overflow-hidden">
              <TextReveal className="text-5xl md:text-6xl font-bold font-serif text-black leading-[1.1]" delay={0.3}>
                Common
              </TextReveal>
            </div>
            
            <div className="overflow-hidden">
              <TextReveal className="text-5xl md:text-6xl font-serif font-bold text-black leading-[1.1]" delay={0.5}>
                Questions
              </TextReveal>
            </div>
            
            <p className="mt-6 text-black/50 text-lg max-w-sm">
              We've got answers. Well, most of them.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-black text-white font-bold rounded-full text-sm tracking-wide flex items-center gap-2"
            >
              Let's Talk
              <ArrowIcon />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-1"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorkAccordion
