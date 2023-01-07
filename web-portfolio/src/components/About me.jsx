import React from "react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import Divider from "./Divider"
import Footer from './Footer.jsx'
import downArrow from '../assets/down-arrow.svg'
import Me from '../assets/yo.jpg'

import '../CSS/introduction.css'
import '../CSS/about me.css'

export default function AboutMe({  expandMenu  }) {

    const aboutmeRef = useRef() 
    const scrollToAboutMe = () => window.scrollTo({ top: (aboutmeRef.current.offsetTop - 20), behavior: 'smooth' })
    const scrollToTop2 = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <div>
            <header>
                <div className="introduction-container mg-inline padding-block">
                    <div className="main-title-container">
                        <h1 className="main-title fs-main-title-mobile"><span className="text-span">Front-end</span> Developer,<br /></h1>
                        <h2 className="main-title fs-main-title-mobile">based in Argentina </h2>
                    </div>
                    <Link to='/'><button className="main-button fw-bold">View my projects</button></Link>
                    <div><img src={downArrow} alt="Find out more" className="down-arrow padding-block" onClick={scrollToAboutMe}/></div>
                </div>
            </header>

            <main>
                <section className="about-me-section padding-block">

                    <div className="picture-container"><img src={Me} alt="Facundo Solé picture" className="my-picture" ref={aboutmeRef}/></div>

                    <div className="about-me-info-container ">

                    <Divider subtitle={"About me"} />


                        <div className="mg-inline">

                            <div className="about-me-info">

                                <h2 className="fs-main-title-mobile fw-bold">I'm Facundo Solé</h2>

                                <div className="fs-body-mobile about-me-description">
                                    <p>I'm currently looking for my first oportunity to work in an environment that will help me progress into a Front-end role.</p>
                                    <br />
                                    <p>I'm always eager to learn new things and I strive for writing cleaner code everyday. </p>
                                </div>

                            </div>

                        </div>
                        
                    </div>

                </section>
            </main>
            <footer>
                <Footer scrollToTop2={scrollToTop2}/>
            </footer>
        </div>


    )
}