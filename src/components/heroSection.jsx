import { TypeAnimation } from 'react-type-animation';
import { GithubIcon, LinkedinIcon, Mail, MapPin, ChevronDown } from "lucide-react";
import Card from './card';

const stack = ["React", "JavaScript", "TypeScript", "Three.js", "Tailwind"];

export default function HeroSection({ projectsRef }) {
  const scrollToProjects = () => {
    projectsRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pl-20 bg-gradient-to-r from-black to-[#383737]-20 relative min-h-screen w-full flex items-start px-10 overflow-hidden">

      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-glow rounded-full pointer-events-none" />

      <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
        <Card />
      </div>

      <div className=" pl-0 sm:pl-18 relative z-10 grid grid-cols-1 sm:grid-cols-10 items-start w-full gap-8 pointer-events-none">
        <div className="pt-40 col-span-full sm:col-span-4 text-center sm:text-left pointer-events-auto rounded-2xl bg-black/45 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-5 -mx-2 sm:p-0 sm:mx-0">
          <span className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs sm:text-sm font-medium text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Åpen for nye muligheter
          </span>

          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c11e38] to-[#220b34]">
              Hei, jeg er{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={['Tony Lam', 5000, 'Arbeidsløs:/', 5000]}
              wrapper="span"
              speed={2}
              repeat={Infinity}
            />
          </h1>
          <p className="sm:text-lg mb-6 lg:text-xl text-white/70 leading-relaxed">
            Informatikk student, studerer datateknologi ved Universitetet i Bergen
          </p>

          <div className="mb-6 flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs sm:text-sm border border-white/10 bg-white/5 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-2 flex items-center justify-center sm:justify-start text-white/70">
            <MapPin size={18} />
            <a className="ml-4 hover:text-[#e0567a] transition-colors" href="https://www.google.no/maps/@60.3947008,5.3379072,14z">
              Bergen, Sentrum
            </a>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <a target="_blank" href="mailto:tonylam750@outlook.com" aria-label="Send e-post" title="E-post">
              <button className="p-[2px] rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] mt-3 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c11e38]/30">
                <span className="block bg-[#121212] hover:bg-[#1c1c1c] rounded-full p-3 transition-colors"><Mail size={20} /></span>
              </button>
            </a>
            <a target="_blank" href="https://github.com/tonylam750" aria-label="GitHub" title="GitHub">
              <button className="p-[2px] rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] mt-3 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c11e38]/30">
                <span className="block bg-[#121212] hover:bg-[#1c1c1c] rounded-full p-3 transition-colors"><GithubIcon size={20} /></span>
              </button>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/tony-lam-bk/" aria-label="LinkedIn" title="LinkedIn">
              <button className="p-[2px] rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] mt-3 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c11e38]/30">
                <span className="block bg-[#121212] hover:bg-[#1c1c1c] rounded-full p-3 transition-colors"><LinkedinIcon size={20} /></span>
              </button>
            </a>
          </div>
        </div>

        <div className="col-span-full sm:col-span-6 h-[400px] sm:h-0" />
      </div>

      <button
        onClick={scrollToProjects}
        aria-label="Scroll til prosjekter"
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/50 hover:text-white/90 transition-colors pointer-events-auto"
      >
        <span className="text-xs tracking-wide">Prosjekter</span>
        <ChevronDown className="animate-bounce-slow" size={22} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#383737] pointer-events-none z-20" />
    </section>
  );
}
