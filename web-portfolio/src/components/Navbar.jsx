import React from "react";
import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'


import '../CSS/navbar.css'

export default function Navbar({expandMenu, btnRef}) {

    return (
        <div className="navbar-container mg-inline padding-block">
            <Link to='/'><img src={logo} alt="Logo" className="logo"/></Link>
            <button onClick={expandMenu} className="hamburger-menu" aria-expanded='false' ref={btnRef} ariaLabel="Menu button">
                <svg className="hamburger" viewBox="0 0 100 100" width="30">
                    <rect className="line top" width="80" height="10" x="10" y="25">
                    </rect>
                    <rect className="line bottom" width="80" height="10" x="10" y="65">
                    </rect>
                </svg>         
            </button>

        </div>
    )

}