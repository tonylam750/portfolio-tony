

export default function NavBar({ projectsRef }) {
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className=" py-3 border-b border-b-[#cdc4c4] bg-[#131313]">
      <div className="flex flex-wrap items-center justify-between  py-2 px-8">
        <p className="text-6xl">Tony</p>
        <div>
          <ul className="flex gap-8 md:p-0 text-lg font-medium">
            <li className="hover:underline cursor-pointer transition" onClick={scrollToProjects}>
              Prosjekter
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}