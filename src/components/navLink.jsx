import { GithubIcon, LinkedinIcon, Mail } from "lucide-react"

export default function NavBar({ projectsRef }) {
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-6 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#c11e38] to-[#220b34] font-black text-lg">
            TL
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-bold tracking-[0.2em]">TONY</span>
            <span className="text-sm font-bold tracking-[0.2em] text-white/50">LAM</span>
          </span>
        </div>

        <ul className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
          <li
            className="relative cursor-pointer transition-colors hover:text-[#e0567a] group"
            onClick={scrollToProjects}
          >
            Prosjekter
            <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gradient-to-r from-[#c11e38] to-[#220b34] transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/tonylam750"
            target="_blank"
            aria-label="GitHub"
            title="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#c11e38] hover:text-white"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/tony-lam-bk/"
            target="_blank"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#c11e38] hover:text-white"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:tonylam750@outlook.com"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/90"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Kontakt meg</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
