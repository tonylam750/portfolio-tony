export default function NavBar({ projectsRef }) {
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between py-3 px-6 sm:px-8">
        <p className="text-2xl sm:text-3xl font-bold tracking-tight">
          Tony
          <span className="text-[#c11e38]">.</span>
        </p>
        <div>
          <ul className="flex gap-8 md:p-0 text-base sm:text-lg font-medium">
            <li
              className="relative cursor-pointer transition-colors hover:text-[#e0567a] group"
              onClick={scrollToProjects}
            >
              Prosjekter
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gradient-to-r from-[#c11e38] to-[#220b34] transition-all duration-300 group-hover:w-full" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
