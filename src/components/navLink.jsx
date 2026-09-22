import { GithubIcon, LinkedinIcon, Mail } from "lucide-react"

export default function NavBar({ projectsRef }) {
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sticky top-4 z-50 px-4 sm:px-8">
      <nav className="max-w-6xl mx-auto rounded-full bg-white shadow-lg shadow-black/20">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2.5 pl-2.5 pr-4 sm:pr-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A1024] font-black text-sm text-[#F6C445]">
              TL
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#1A1024]">TONY</span>
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#1A1024]/50">LAM</span>
            </span>
          </div>

          <ul className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-[#1A1024]">
            <li
              className="relative cursor-pointer transition-colors hover:text-[#F2502E]"
              onClick={scrollToProjects}
            >
              Prosjekter
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/tonylam750"
              target="_blank"
              aria-label="GitHub"
              title="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1024] text-white ring-2 ring-transparent transition-all hover:ring-[#F6C445]"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/tony-lam-bk/"
              target="_blank"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1024] text-white ring-2 ring-transparent transition-all hover:ring-[#F6C445]"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:tonylam750@outlook.com"
              aria-label="E-post"
              title="E-post"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1024] text-white ring-2 ring-transparent transition-all hover:ring-[#F6C445]"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
