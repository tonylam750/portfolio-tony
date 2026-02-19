import { TypeAnimation } from 'react-type-animation';
import { GithubIcon, LinkedinIcon, Mail, MapPin } from "lucide-react";
import Card from './card';

export default function HeroSection() {
  return (
    <section className=" pl-20 bg-gradient-to-r from-black to-[#383737]-20  relative min-h-screen w-full flex items-start px-10">

      <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
        <Card />
      </div>

      <div className=" pl-0 sm:pl-18 relative z-10 grid grid-cols-1 sm:grid-cols-10 items-start w-full gap-8 pointer-events-none">
        <div className="pt-40 col-span-full sm:col-span-4 text-center sm:text-left pointer-events-auto">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
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
          <p className="sm:text-lg mb-6 lg:text-xl">
            Informatikk student, studerer datateknologi ved Universitetet i Bergen
          </p>
          <div className="mb-2 flex items-center justify-center sm:justify-start">
            <MapPin />
            <a className="ml-4 hover:text-[#803030]" href="https://www.google.no/maps/@60.3947008,5.3379072,14z">
              Bergen, Sentrum
            </a>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <a target="_blank" href="mailto:tonylam750@outlook.com">
              <button className="px-1 py-1 rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2"><Mail /></span>
              </button>
            </a>
            <a target="_blank" href="https://github.com/tonylam750">
              <button className="px-1 py-1 rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2"><GithubIcon /></span>
              </button>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/tony-lam-bk/">
              <button className="px-1 py-1 rounded-full bg-gradient-to-br from-[#c11e38] to-[#220b34] mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2"><LinkedinIcon /></span>
              </button>
            </a>
          </div>
        </div>

        <div className="col-span-full sm:col-span-6 h-[400px] sm:h-0" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#383737] pointer-events-none z-20" />
    </section>
  );
}