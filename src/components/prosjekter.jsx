import { ArrowUpRight } from "lucide-react"

const projects = [
  { title: "NTIdrett", desc: "Nettside for Naturvitenskapelig og Teknologisk Studentidrettsforening.", tech: "React Router, Sanity, typescript" , img: "./nti.png", link:"https://www.ntidrett.no/" },
  { title: "Studentmat", desc: "App som foreslår studentvennlige oppskrifter med KI.", tech: "React, Claude API, javascript" , img: "./student.png", link:"https://github.com/tonylam750/StudentMat" },
  { title: "Labubu", desc: "Nettbutikk-prototype bygget med et mock-API.", tech: "React Router, Mirage.js, javascript" , img: "./labubu.png", link: "https://github.com/tonylam750/Labubus"},
  { title: "Rick n Morty",  desc: "Utforsk karakterer og episoder fra Rick and Morty.", tech: "Next.js, Typescript, tailwind" , img: "./rick.png", link:"https://github.com/tonylam750/rick-and-morty"},


]
export default function Prosjekter() {
  return (
<section className="bg-[#F2502E] relative min-h-screen w-full px-6 sm:px-10 py-24 sm:py-32 overflow-x-hidden">
  <div className="relative z-10 max-w-6xl mx-auto">

    <div className="mb-12 sm:mb-16 text-center sm:text-left">
      <span className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[#F6C445]">
        Portefølje
      </span>
      <h1 className="mb-4 font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-white">
        Mine prosjekter
      </h1>
      <p className="sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl sm:mx-0 mx-auto">
        Her finner du et utvalg av prosjektene jeg har utviklet gjennom tidene
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/20 flex flex-col transition-all duration-300 hover:-translate-y-1"
        >
          <a target="_blank" href={project.link} className="block overflow-hidden">
            <img
              src={project.img}
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>
          <div className="p-5 flex flex-col gap-3 flex-1">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1A1024] text-[#F6C445] text-[11px] font-black">
              {index + 1}
            </span>
            <h3 className="text-lg font-extrabold text-[#1A1024]">{project.title}</h3>
            <p className="text-[#1A1024]/60 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.split(", ").map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#F2502E]/10 text-[#F2502E]"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              target="_blank"
              href={project.link}
              className="mt-auto pt-2 inline-flex items-center gap-2 w-fit text-xs font-extrabold uppercase tracking-wide pl-1.5 pr-3.5 py-1.5 rounded-full bg-[#F6C445] text-[#1A1024] hover:opacity-90 transition-opacity"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1A1024] text-[#F6C445]">
                <ArrowUpRight size={12} />
              </span>
              Se prosjekt
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

  <footer className="mt-16 sm:mt-24 py-6 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-white/60 border-t border-white/20 max-w-6xl mx-auto">
    <span>© {new Date().getFullYear()} Tony Lam</span>
    <span>Bygget med React, Three.js &amp; Tailwind</span>
  </footer>
</section>
  )
}
