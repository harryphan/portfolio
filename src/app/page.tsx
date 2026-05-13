import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import content from '../../data/content.json'

const featuredPoster = content.media.videos.find((v) => v.featured)?.poster

const navCards = [
  { href: '/about', label: 'About', image: '/images/about/headshot.jpg' },
  { href: '/gallery', label: 'Gallery', image: '/images/headshots/headshot-3.jpg' },
  { href: '/media', label: 'Reel', image: featuredPoster ?? '/images/hero/hero.jpg' },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gray-500 text-center mb-12">
            Film &nbsp;·&nbsp; Television &nbsp;·&nbsp; Commercial
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {navCards.map(({ href, label, image }) => (
              <Link
                key={href}
                href={href}
                className="group relative block aspect-[3/4] overflow-hidden bg-neutral-900"
              >
                <Image
                  src={image}
                  alt={label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors duration-300 group-hover:from-black/70" />
                <div className="absolute bottom-6 left-6">
                  <p className="font-display text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-1">
                    View
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl text-white italic">
                    {label}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
