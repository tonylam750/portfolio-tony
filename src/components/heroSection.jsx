import { TypeAnimation } from 'react-type-animation';
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import Card from './card';

const stack = [
  { label: "React", short: "R" },
  { label: "JavaScript", short: "JS" },
  { label: "TypeScript", short: "TS" },
  { label: "Three.js", short: "3D" },
  { label: "Tailwind", short: "TW" },
]

export default function HeroSection({ projectsRef }) {
  const scrollToProjects = () => {
    projectsRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pl-20 bg-[#F2502E] relative min-h-screen w-full flex items-start sm:items-center px-10 pb-40 overflow-hidden">

      <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
        <Card />
      </div>

      <div className=" pl-0 sm:pl-18 relative z-10 grid grid-cols-1 sm:grid-cols-10 items-start sm:items-center w-full gap-8 pointer-events-none">
        <div className="pt-40 sm:pt-0 col-span-full sm:col-span-5 text-center sm:text-left pointer-events-auto rounded-2xl bg-[#1A1024]/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-5 -mx-2 sm:p-0 sm:mx-0">
          <span className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-extrabold uppercase tracking-[0.3em] text-[#F6C445]">
            Utvikler
          </span>

          <h1 className="mb-5 font-black uppercase leading-[0.9] text-6xl sm:text-7xl lg:text-8xl text-white">
            <span className="block">Tony</span>
            <TypeAnimation
              className="block"
              sequence={['Lam', 4000, 'Arbeidsløs:/', 4000]}
              wrapper="span"
              speed={2}
              repeat={Infinity}
            />
          </h1>

          <div className="mb-8 flex items-center justify-center sm:justify-start gap-4">
            <p className="sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-sm sm:mx-0 mx-auto">
              Informatikk student, studerer datateknologi ved Universitetet i Bergen
            </p>
            <span className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#F2502E]">
              <Sparkles size={22} />
            </span>
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-center sm:justify-start gap-5">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-3 rounded-full bg-[#F6C445] pl-2 pr-5 py-2 text-sm font-extrabold uppercase tracking-wide text-[#1A1024] transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1024] text-[#F6C445]">
                <ArrowRight size={16} />
              </span>
              Se prosjekter
            </button>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <MapPin size={16} />
              Bergen, Sentrum
            </div>
          </div>
        </div>

        <div className="col-span-full sm:col-span-5 h-[400px] sm:h-0" />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-auto z-20 pointer-events-none">
        <div className="pointer-events-auto bg-white rounded-3xl shadow-xl shadow-black/20 px-6 sm:px-10 py-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1A1024]/40">
            Stack
          </span>
          {stack.map((tech) => (
            <div key={tech.label} className="flex flex-col items-center gap-1.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1A1024] text-[#F6C445] text-xs font-black">
                {tech.short}
              </span>
              <span className="hidden sm:block text-[10px] font-bold uppercase tracking-wide text-[#1A1024]/50">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
