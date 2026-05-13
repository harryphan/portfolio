import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-display text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">
        404
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-white italic mb-8">
        Page not found
      </h1>
      <Link
        href="/"
        className="font-display text-xs tracking-[0.3em] uppercase text-gray-400 hover:text-white transition-colors border border-white/20 hover:border-white/50 px-6 py-3"
      >
        Return Home
      </Link>
    </div>
  )
}
