'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  href: string
  label: string
}

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-3 min-w-[44px] min-h-[44px] items-center justify-center z-50 relative"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span
          className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2.5' : ''}`}
        />
        <span
          className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-6 h-px bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2.5' : ''}`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center md:hidden">
          <nav className="flex flex-col items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-display text-2xl tracking-[0.3em] uppercase text-white hover:text-gray-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
