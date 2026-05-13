import type { Metadata } from 'next'
import { ReelEmbed } from '@/components/ReelEmbed'
import content from '../../../data/content.json'

export const metadata: Metadata = { title: 'Media' }

export default function MediaPage() {
  const { media } = content
  const featured = media.videos.find((v) => v.featured)
  const clips = media.videos.filter((v) => !v.featured)

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="font-display text-xs tracking-[0.4em] uppercase text-gray-400 mb-16">
          Reel
        </h1>

        {featured && (
          <div className="mb-16">
            <ReelEmbed
              videoId={featured.id}
              platform={featured.platform as 'vimeo' | 'youtube'}
              title={featured.title}
              poster={featured.poster}
            />
            <p className="font-display text-xs tracking-widest uppercase text-gray-500 mt-3">
              {featured.title}
            </p>
          </div>
        )}

        {clips.length > 0 && (
          <>
            <h2 className="font-display text-xs tracking-[0.3em] uppercase text-gray-400 mb-8 pb-2 border-b border-white/10">
              Clips
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {clips.map((video) => (
                <div key={video.id}>
                  <ReelEmbed
                    videoId={video.id}
                    platform={video.platform as 'vimeo' | 'youtube'}
                    title={video.title}
                    poster={video.poster}
                  />
                  <p className="font-display text-xs tracking-widest uppercase text-gray-500 mt-3">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
