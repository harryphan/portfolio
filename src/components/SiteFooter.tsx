import { SocialIcons } from './SocialIcons'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 text-center">
      <SocialIcons className="justify-center mb-6" />
      <p className="text-xs text-gray-500 tracking-widest uppercase">
        ©{new Date().getFullYear()} by Harry Phan
      </p>
    </footer>
  )
}
