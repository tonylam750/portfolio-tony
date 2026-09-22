import { TypeAnimation } from 'react-type-animation';
import { MapPin, ArrowRight } from "lucide-react";
import Card from './card';

const stack = ["React", "JavaScript", "TypeScript", "Three.js", "Tailwind"];

export default function HeroSection({ projectsRef }) {
  const scrollToProjects = () => {
    projectsRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pl-20 bg-gradient-to-br from-[#1a0810] via-black to-[#383737] relative min-h-screen w-full flex items-start sm:items-center px-10 overflow-hidden">

      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-glow rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[24rem] h-[24rem] bg-glow-purple rounded-full pointer-events-none" />

      <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
        <Card />
      </div>

      <div className=" pl-0 sm:pl-18 relative z-10 grid grid-cols-1 sm:grid-cols-10 items-start sm:items-center w-full gap-8 pointer-events-none">
        <div className="pt-40 sm:pt-0 col-span-full sm:col-span-5 text-center sm:text-left pointer-events-auto rounded-2xl bg-black/45 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-5 -mx-2 sm:p-0 sm:mx-0">
          <span className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#e0567a]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Åpen for nye muligheter
          </span>

          <h1 className="mb-5 font-black uppercase leading-[0.9] text-6xl sm:text-7xl lg:text-8xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#c11e38] to-[#220b34]">
              Tony
            </span>
            <TypeAnimation
              className="block"
              sequence={['Lam', 4000, 'Arbeidsløs:/', 4000]}
              wrapper="span"
              speed={2}
              repeat={Infinity}
            />
          </h1>

          <p className="sm:text-lg mb-8 lg:text-xl text-white/70 leading-relaxed max-w-md sm:mx-0 mx-auto">
            Informatikk student, studerer datateknologi ved Universitetet i Bergen
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center sm:justify-start gap-5">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] px-6 py-3 text-sm font-bold uppercase tracking-wide transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c11e38]/30"
            >
              Se prosjekter <ArrowRight size={16} />
            </button>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin size={16} />
              Bergen, Sentrum
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/10 bg-white/5 text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-full sm:col-span-5 h-[400px] sm:h-0" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#383737] pointer-events-none z-20" />
    </section>
  );
}
