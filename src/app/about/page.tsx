import type { Metadata } from 'next'
import Image from 'next/image'
import content from '../../../data/content.json'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  const { about } = content

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-display text-sm tracking-[0.4em] uppercase text-gray-300 mb-16">
          {about.heading}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[3/4] w-full max-w-md">
            <Image
              src={about.headshot}
              alt="Harry Phan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="md:pt-8">
            <h2 className="font-serif text-4xl md:text-5xl text-white italic mb-8 leading-tight">
              Harry Phan
            </h2>
            <div className="space-y-6">
              {about.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-gray-300 leading-relaxed font-light text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="font-display text-xs tracking-[0.3em] uppercase text-gray-500">
                SAG-AFTRA &nbsp;•&nbsp; New York City &nbsp;•&nbsp; Boston
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
