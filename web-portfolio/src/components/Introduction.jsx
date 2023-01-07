import React from "react";
import { Link } from "react-router-dom"
import downArrow from '../assets/down-arrow.svg'

import '../CSS/introduction.css'

export default function Introduction({scrollToProjects}) {

    return (
        <div className="introduction-container mg-inline padding-block">
            <div className="main-title-container">
                <h1 className="main-title">Hi, I'm Facundo Solé,</h1>
                <h2 className="main-title">a <span className="text-span">Front-end</span> Developer</h2>
            </div>
            <Link to='/about-me'><button className="main-button fw-bold">Get to know me</button></Link>
            <div onClick={scrollToProjects}><img src={downArrow} alt="Find out more" className="down-arrow padding-block"/></div>
        </div>
    )

}