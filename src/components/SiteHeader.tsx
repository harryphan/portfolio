'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/media', label: 'MEDIA' },
  { href: '/resume', label: 'RESUME' },
  { href: '/contact', label: 'CONTACT' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group">
          <span className={`block font-display text-white text-xl tracking-[0.25em] uppercase leading-none transition-opacity duration-300 ${isHome ? 'opacity-0' : 'opacity-100'}`}>
            Harry Phan
          </span>
          <span className={`block font-serif italic text-gray-400 text-xs tracking-wide mt-0.5 transition-opacity duration-300 ${isHome ? 'opacity-0' : 'opacity-100'}`}>
            SAG-AFTRA • NYC • BOS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`font-display text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 ${
                  active ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <MobileMenu links={navLinks} />
      </div>
    </header>
  )
}
