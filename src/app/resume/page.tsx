import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Resume' }

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-16">
          <h1 className="font-display text-sm tracking-[0.4em] uppercase text-gray-300">
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

        {/* PDF embed — desktop/tablet only */}
        <div className="hidden md:block w-full aspect-[8.5/11] border border-white/10 bg-white">
          <iframe
            src="/resume.pdf"
            title="Harry Phan Resume"
            className="w-full h-full"
          />
        </div>

        {/* Mobile: download CTA only */}
        <div className="md:hidden border border-white/10 flex flex-col items-center justify-center gap-6 py-24 px-6 text-center">
          <p className="font-sans text-gray-400 text-sm leading-relaxed">
            The full resume is available as a PDF.
          </p>
          <a
            href="/resume.pdf"
            download
            className="font-display text-sm tracking-[0.2em] uppercase text-white border border-white/40 hover:border-white/80 px-8 py-3 transition-colors"
          >
            Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  )
}
