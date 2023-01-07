import React from "react"
import { useRef } from "react"
import Introduction from "./Introduction"
import Divider from "./Divider.jsx"
import Projects from "./Projects"
import Technologies from "./Technologies.jsx"
import Footer from "./Footer.jsx"

import '../CSS/index.css'

function Home() {

  const projectsRef = useRef(null)

  const scrollToProjects = () => window.scrollTo({ top: (projectsRef.current.offsetTop - 20), behavior: 'smooth' })

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="App">
      <header>
        <Introduction scrollToProjects={scrollToProjects}/>
      </header>
      <main>
        <section className="projects padding-block">
          <Divider subtitle={"What I've been working on"}/>
          <Projects projectsRef={projectsRef} />
        </section>
        <section className="technologies padding-block">
          <Technologies />
        </section>
      </main>
      <footer>
          <Footer scrollToTop={scrollToTop} scrollToProjects={scrollToProjects}/>
      </footer>
    </div>
  )
}

export default Home