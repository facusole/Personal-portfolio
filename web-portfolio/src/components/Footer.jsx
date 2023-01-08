import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp } from "iconsax-react"
import CV from '../assets/FacundoSole_CV.pdf'

import '../CSS/footer.css'

export default function Footer({scrollToTop, scrollToTop2, scrollToProjects}) {
    return (
        <div className="footer-container padding-block">
            <div className="footer-title">
                <h2 className="footer-main-title fw-light">Let's build <br/>something!</h2>
                <a href="mailto:facundojsole@gmail.com" className="footer-mail">Get in touch <ArrowRight size="20" color="var(--clr-secondary-footer)"/></a>
            </div>
            <div className="footer-nav">
                <div className="footer-menu">
                    <h3 className="text-subtitle fs-body-mobile">Menu</h3>
                    <ul className="footer-links">
                        <Link to='/'><li className="footer-link" onClick={scrollToTop}>Home</li></Link>
                        <Link to='/about-me'><li className="footer-link">About me</li></Link>
                        <Link to='/'><li className="footer-link" onClick={scrollToProjects}>Work</li></Link>
                    </ul>               
                </div>
                <div className="footer-media">
                    <h3 className="text-subtitle fs-body-mobile">Contact</h3>
                    <ul className="footer-links">
                        <li className="footer-link"><a href="https://www.linkedin.com/in/facundo-solé-563305244/" target='_blank'>Linkedin</a></li>
                        <li className="footer-link"><a href="https://github.com/facusole" target='_blank'>Github</a></li>
                        <li className="footer-link"><a href={CV} download='Facundo Solé CV' target='_blank'>Resume</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-back" onClick={scrollToTop}><span className="footer-button-top" onClick={scrollToTop2}>Back to top <ArrowUp size="20" color="var(--clr-secondary-footer)"/></span></div>
        </div>
    )
}