
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const projects = [
  { title: "NTIdrett", tech: "React Router, Sanity, typescript" , img: "./nti.png", link:"https://www.ntidrett.no/" },
  { title: "Studentmat", tech: "React, Claude API, javascript" , img: "./student.png", link:"https://github.com/tonylam750/StudentMat" },
  { title: "Labubu", tech: "React Router, Mirage.js, javascript" , img: "./labubu.png", link: "https://github.com/tonylam750/Labubus"},
  { title: "Rick n Morty",  tech: "Next.js, Typescript, tailwind" , img: "./rick.png", link:"https://github.com/tonylam750/rick-and-morty"},
  

]
export default function Prosjekter() {
  return (
<section className="bg-gradient-to-r from-[#383737] to-black relative min-h-screen w-full flex items-start px-6 sm:px-10 overflow-x-hidden">
  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 items-center w-full gap-18 sm:gap-10 pointer-events-none">

    <div className="order-2 sm:order-1 pt-6 sm:pt-40 col-span-full sm:col-span-6 pointer-events-auto flex justify-center w-full">
      <Carousel className="w-full max-w-lg sm:max-w-xl">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
             <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col  justify-between min-h-[45vh] sm:min-h-[65vh]">
                <a target="_blank" href={project.link}>
                  <img src={project.img} className="w-full h-40 sm:h-64 object-cover rounded-lg" />
                </a>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-500">{project.tech}</span>
                  <div className="flex gap-2">
                    <CarouselPrevious style={{ position: 'static', transform: 'none' }} className="w-14 h-14 bg-[#2a2a2a] border-white/10 text-white hover:bg-white/10" />
                    <CarouselNext style={{ position: 'static', transform: 'none' }} className="w-14 h-14 bg-[#2a2a2a] border-white/10 text-white hover:bg-white/10" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>

    <div className="order-1 sm:order-2 pt-10 sm:pt-40 col-span-full sm:col-span-6 text-center sm:text-left pointer-events-auto">
      <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c11e38] to-[#220b34]">
          Mine prosjekter
        </span>
      </h1>
      <p className="sm:text-lg mb-6 lg:text-xl">
        Her finner du et utvalg av prosjektene jeg har utviklet gjennom tidene
      </p>
    </div>

    <div className="col-span-full sm:hidden h-[40px]" />
  </div>
</section>
  )
}