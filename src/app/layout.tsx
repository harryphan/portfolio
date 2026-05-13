import type { Metadata, Viewport } from 'next'
import { cormorant, oswald, inter } from '@/lib/fonts'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: {
    template: '%s | Harry Phan',
    default: 'Harry Phan | Asian American Actor',
  },
  description:
    "Asian American Actor Harry Phan has a passion for action films and comedies. Commercials aren't bad either. SAG-AFTRA member. Los Angeles - New York - Atlanta - Boston area.",
  openGraph: {
    title: 'Harry Phan | Asian American Actor',
    description:
      "Asian American Actor Harry Phan has a passion for action films and comedies. SAG-AFTRA member.",
    url: 'https://www.harryphan.net',
    siteName: 'Harry Phan',
    images: [{ url: '/images/og/og.png', width: 2500, height: 1330 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harry Phan | Asian American Actor',
    description: "Asian American Actor. SAG-AFTRA. NYC • BOS.",
    images: ['/images/og/og.png'],
  },
  icons: { icon: '/favicon.ico' },
  metadataBase: new URL('https://www.harryphan.net'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${oswald.variable} ${inter.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-display focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
