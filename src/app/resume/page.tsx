import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Resume' }

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-16">
          <h1 className="font-display text-xs tracking-[0.4em] uppercase text-gray-400">
            Resume
          </h1>
          <a
            href="/resume.pdf"
            download
            className="font-display text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors border border-white/20 hover:border-white/50 px-4 py-2"
          >
            Download PDF
          </a>
        </div>

        <div className="w-full aspect-[8.5/11] border border-white/10 bg-white">
          <iframe
            src="/resume.pdf"
            title="Harry Phan Resume"
            className="w-full h-full"
          />
        </div>

        <p className="text-center mt-6 text-xs text-gray-600 font-display tracking-widest uppercase">
          <a href="/resume.pdf" download className="hover:text-gray-400 transition-colors">
            Download Resume PDF
          </a>
        </p>
      </div>
    </div>
  )
}
