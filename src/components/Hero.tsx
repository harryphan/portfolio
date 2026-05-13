'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const prefersReduced = useReducedMotion()

  const scale = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : [1, 1.08])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero/hero.jpg')",
          scale,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-[0.15em] uppercase leading-none"
          initial={{ opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Harry Phan
        </motion.h1>
        <motion.p
          className="font-display text-xs sm:text-sm tracking-[0.4em] text-gray-300 mt-6 uppercase"
          initial={{ opacity: prefersReduced ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          SAG-AFTRA &nbsp;•&nbsp; NYC &nbsp;•&nbsp; BOS
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: prefersReduced ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <span className="font-display text-[10px] tracking-[0.3em] text-gray-500 uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  )
}
