import React from "react";
import { Html3, Html5, JavaScript } from 'iconsax-react';
import TechnologyCard from "./TechnologyCard";
import Divider from "./Divider";
import Icon from '../assets/react.svg';

import '../CSS/technologies.css';

export default function Technologies() {

    return (
        <div className="technologies-section mg-inline">

            
            <div className="technologies-flex-container">
                <div className="technologies-introduction">
                    <div className='reset'><Divider subtitle={"What I work with"} /></div>
                    <h2 className="section-title tech-section-title fw-medium ff-heading">Technologies</h2>
                    <div className="technologies-explanation fw-light">
                        <p>I usually work with HTML5, CSS3, JavaScript and React, but I love learning new technologies along the way!</p>
                        <br/>
                        <p>Currently, I'm learning SQL.</p>
                    </div>
                </div>
                <div className="technologies-container padding-block">
                    <TechnologyCard icon={<Html5 size="44" color="#482bff"/>} techName={'HTML5'} />
                    <TechnologyCard icon={<Html3 size="44" color="#482bff"/>} techName={'CSS3'} />
                    <TechnologyCard icon={<JavaScript size="44" color="#482bff"/>} techName={'JavaScript'} />
                    <TechnologyCard icon={<img src={Icon} alt='react-icon'/>} techName={'React'} style={{"width": "2.75rem"}}/>
                </div>
            </div>
        </div>
    )
}