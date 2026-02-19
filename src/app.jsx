import ReactDOM from 'react-dom/client'
import { useRef } from 'react'
import "./styles.css"
import HeroSection from './components/heroSection.jsx'
import Prosjekter from './components/prosjekter.jsx'
import NavBar from './components/navLink.jsx'
export default function App(){


    const projectsRef = useRef(null)
    return(
    <>
      <NavBar projectsRef={projectsRef} /> 
      <HeroSection/>
      
     <div ref={projectsRef}>
            <Prosjekter />
          </div>
      
      </>
      )
}