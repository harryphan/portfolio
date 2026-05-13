import { Hero } from '@/components/Hero'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-20 text-center">
        <p className="font-display text-xs tracking-[0.4em] uppercase text-gray-500">
          Film &nbsp;·&nbsp; Television &nbsp;·&nbsp; Commercial
        </p>
      </section>
    </>
  )
}
