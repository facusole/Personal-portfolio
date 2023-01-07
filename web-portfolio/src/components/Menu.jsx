import React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "iconsax-react"
import CV from '../assets/FacundoSole_CV.pdf'

import '../CSS/menu.css'

export default function Menu({ menuRef, expandMenu }) {

    return (
        <div className="menu" ref={menuRef}>

            <div className="menu-container">

                <div className="menu-title">
                    <h2 className="fw-light menu-main-title">Let's build <br/> something!</h2>
                    <a href="mailto:facundojsole@gmail.com" className="menu-mail fw-light fs-body-mobile">Get in touch <ArrowRight size="20" color="var(--clr-secondary-footer)" /></a>
                </div>

                <div className="menu-nav">

                    <div className="menu-navigation">
                        <h3 className="menu-nav-title text-subtitle fw-light">Menu</h3>
                        <ul className="menu-links">
                            <Link to='/'><li className="menu-link fs-menu-link fw-light" onClick={expandMenu}>Home</li></Link>
                            <Link to='about-me'><li className="menu-link fs-menu-link fw-light" onClick={expandMenu}>About me</li></Link>
                            <Link to='/'><li className="menu-link fs-menu-link fw-light" onClick={expandMenu}>Work</li></Link>
                        </ul>
                    </div>

                    <div className="menu-media">
                        <h3 className="menu-nav-title text-subtitle fw-light">Contact</h3>
                        <ul className="menu-links">
                            <li className="menu-link fs-menu-link fw-light"><a href="https://www.linkedin.com/in/facundo-solé-563305244/" target='_blank'>Linkedin</a></li>
                            <li className="menu-link fs-menu-link fw-light"><a href="https://github.com/facusole" target='_blank'>Github</a></li>
                            <li className="menu-link fs-menu-link fw-light"><a href={CV} download='Facund Solé CV' target='_blank'>Resume</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}