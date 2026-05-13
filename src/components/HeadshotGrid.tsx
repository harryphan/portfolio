'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { Lightbox } from './Lightbox'

export interface HeadshotImage {
  src: string
  alt: string
}

interface HeadshotGridProps {
  images: HeadshotImage[]
}

export function HeadshotGrid({ images }: HeadshotGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length)),
    [images.length],
  )
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length)),
    [images.length],
  )

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="block w-full overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label={`View ${img.alt}`}
          >
            <div className="relative w-full aspect-[3/4] bg-neutral-900">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            key="lightbox"
            images={images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNext={next}
            onPrev={prev}
          />
        )}
      </AnimatePresence>
    </>
  )
}
