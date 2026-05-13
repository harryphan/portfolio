import type { Metadata } from 'next'
import content from '../../../data/content.json'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  const { contact } = content

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-sm tracking-[0.4em] uppercase text-gray-300 mb-16">
          Contact
        </h1>

        <div className="border-t border-white/10 pt-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white italic mb-10">
            {contact.heading}
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span className="font-display text-[10px] tracking-[0.3em] uppercase text-gray-500 sm:w-20 shrink-0">
                Agency
              </span>
              <span className="font-sans text-white font-light text-lg">{contact.agency}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span className="font-display text-[10px] tracking-[0.3em] uppercase text-gray-500 sm:w-20 shrink-0">
                Phone
              </span>
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                className="font-sans text-gray-300 font-light text-lg hover:text-white transition-colors"
              >
                {contact.phone}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
              <span className="font-display text-[10px] tracking-[0.3em] uppercase text-gray-500 sm:w-20 shrink-0">
                Website
              </span>
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-gray-300 font-light text-lg hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
              >
                {contact.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
