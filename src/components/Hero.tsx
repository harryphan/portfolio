'use client'

import { useRef } from 'react'
import Image from 'next/image'
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
    <section ref={ref} className="relative min-h-screen overflow-hidden">

      {/* Photo — anchored to eyes, light studio bg shows through */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src="/images/hero/hero.jpg"
          alt="Harry Phan"
          fill
          priority
          className="object-cover object-[50%_20%] md:object-[30%_40%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Very light overlay — let the studio contrast live */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Top gradient — keeps nav links legible over the light studio bg */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent" />

      {/* Bottom gradient — grounds the name in the dark site palette */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Name — bottom third, face owns the frame above */}
      <div className="absolute bottom-24 md:bottom-28 inset-x-0 z-10 text-center px-6">
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: prefersReduced ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <span className="font-display text-[10px] tracking-[0.3em] text-gray-400 uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
      </motion.div>
    </section>
  )
}
