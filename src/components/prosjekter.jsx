import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const projects = [
  { title: "NTIdrett", desc: "Nettside for Naturvitenskapelig og Teknologisk Studentidrettsforening.", tech: "React Router, Sanity, typescript" , img: "./nti.png", link:"https://www.ntidrett.no/" },
  { title: "Studentmat", desc: "App som foreslår studentvennlige oppskrifter med KI.", tech: "React, Claude API, javascript" , img: "./student.png", link:"https://github.com/tonylam750/StudentMat" },
  { title: "Labubu", desc: "Nettbutikk-prototype bygget med et mock-API.", tech: "React Router, Mirage.js, javascript" , img: "./labubu.png", link: "https://github.com/tonylam750/Labubus"},
  { title: "Rick n Morty",  desc: "Utforsk karakterer og episoder fra Rick and Morty.", tech: "Next.js, Typescript, tailwind" , img: "./rick.png", link:"https://github.com/tonylam750/rick-and-morty"},


]
export default function Prosjekter() {
  const [api, setApi] = useState(null)
  const [current, setCurrent] = useState(0)

  return (
<section className="bg-gradient-to-r from-[#383737] to-black relative min-h-screen w-full flex items-start px-6 sm:px-10 overflow-x-hidden">
  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 items-center w-full gap-18 sm:gap-10 pointer-events-none">

    <div className="order-2 sm:order-1 pt-6 sm:pt-40 col-span-full sm:col-span-6 pointer-events-auto flex flex-col items-center w-full">
      <Carousel
        className="w-full max-w-lg sm:max-w-xl"
        setApi={(a) => {
          setApi(a)
          if (a) {
            setCurrent(a.selectedScrollSnap())
            a.on("select", () => setCurrent(a.selectedScrollSnap()))
          }
        }}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="group bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50">
                <a target="_blank" href={project.link} className="block overflow-hidden">
                  <img
                    src={project.img}
                    className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-white/60 text-sm sm:text-base">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    target="_blank"
                    href={project.link}
                    className="mt-1 inline-flex items-center justify-center gap-1.5 w-fit text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] hover:opacity-90 transition-opacity"
                  >
                    Se prosjekt <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 bg-black/50 backdrop-blur border-white/10 text-white hover:bg-black/70" />
        <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 bg-black/50 backdrop-blur border-white/10 text-white hover:bg-black/70" />
      </Carousel>

      <div className="flex items-center justify-center gap-2 mt-5">
        {projects.map((_, index) => (
          <button
            key={index}
            aria-label={`Gå til prosjekt ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-6 bg-[#c11e38]" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>

    <div className="order-1 sm:order-2 pt-10 sm:pt-40 col-span-full sm:col-span-6 text-center sm:text-left pointer-events-auto">
      <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-white/15 bg-white/5 text-xs sm:text-sm font-medium text-white/80">
        Portefølje
      </span>
      <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c11e38] to-[#220b34]">
          Mine prosjekter
        </span>
      </h1>
      <p className="sm:text-lg mb-6 lg:text-xl text-white/70 leading-relaxed">
        Her finner du et utvalg av prosjektene jeg har utviklet gjennom tidene
      </p>
    </div>

    <div className="col-span-full sm:hidden h-[40px]" />
  </div>

  <footer className="absolute bottom-0 left-0 right-0 py-6 px-6 sm:px-10 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-white/40 border-t border-white/10 pointer-events-auto">
    <span>© {new Date().getFullYear()} Tony Lam</span>
    <span>Bygget med React, Three.js &amp; Tailwind</span>
  </footer>
</section>
  )
}
