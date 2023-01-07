import React from "react"
import {  Route, Routes } from "react-router-dom"
import Home from './components/Home.jsx'
import AboutMe from "./components/About me.jsx"
import { useRef } from "react"
import Navbar from "./components/Navbar.jsx"
import Menu from './components/Menu.jsx'

import './CSS/index.css'

function App() {

  const btnRef = useRef()
  const menuRef = useRef()

    const expandMenu = () => {
      btnRef.current.classList.toggle('menu-expanded')
      menuRef.current.classList.toggle('menu-visible')
  }

  return (
    <div>
      <header>
        <Navbar expandMenu={expandMenu} btnRef={btnRef} />
        <Menu menuRef={menuRef} expandMenu={expandMenu}/>
      </header>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-me" element={<AboutMe/>}/>
    </Routes>
    </div>

    
    
  )
}

export default App
