export interface ResumeRow {
  title: string
  role: string
  director?: string
  production?: string
}

interface ResumeTableProps {
  heading: string
  rows: ResumeRow[]
}

export function ResumeTable({ heading, rows }: ResumeTableProps) {
  return (
    <section className="mb-12">
      <h2 className="font-display text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 pb-2 border-b border-white/10">
        {heading}
      </h2>
      <table className="w-full text-sm">
        <caption className="sr-only">{heading} credits</caption>
        <thead>
          <tr className="text-left text-xs tracking-widest uppercase text-gray-500">
            <th className="pb-3 pr-6 font-normal w-1/3">Title</th>
            <th className="pb-3 pr-6 font-normal w-1/3">Role</th>
            <th className="pb-3 font-normal w-1/3">Director / Production</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-t border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="py-3 pr-6 text-white font-light">{row.title}</td>
              <td className="py-3 pr-6 text-gray-300 font-light">{row.role}</td>
              <td className="py-3 text-gray-500 font-light">
                {row.director || row.production || ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
