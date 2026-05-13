'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ReelEmbedProps {
  videoId: string
  platform: 'youtube' | 'vimeo'
  title: string
  poster?: string
}

export function ReelEmbed({ videoId, platform, title, poster }: ReelEmbedProps) {
  const [playing, setPlaying] = useState(false)

  const src =
    platform === 'youtube'
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${videoId}?autoplay=1`

  const posterUrl =
    poster ||
    (platform === 'youtube' ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null)

  return (
    <div className="relative w-full aspect-video bg-black rounded overflow-hidden">
      {playing ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full group"
          aria-label={`Play ${title}`}
        >
          {posterUrl && (
            <Image
              src={posterUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          )}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

          {/* bottom gradient + always-visible title */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
          <p className="absolute bottom-3 left-4 text-white text-sm font-display tracking-wider uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            {title}
          </p>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  )
}
