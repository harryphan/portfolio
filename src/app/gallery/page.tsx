import type { Metadata } from 'next'
import { HeadshotGrid } from '@/components/HeadshotGrid'
import content from '../../../data/content.json'

export const metadata: Metadata = { title: 'Gallery' }

export default function GalleryPage() {
  const { gallery } = content

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-display text-xs tracking-[0.4em] uppercase text-gray-400 mb-16">
          Gallery
        </h1>
        <HeadshotGrid images={gallery.images} />
      </div>
    </div>
  )
}
