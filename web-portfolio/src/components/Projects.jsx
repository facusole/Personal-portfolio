import React from "react";
import ProjectCard from "./ProjectCard";
import { Key, WalletMoney, User, Game, ArrowRight } from 'iconsax-react';


import '../CSS/projects.css'


export default function Projects({projectsRef}) {

    return (
        
        <div className="projects-section" >
            
            <h2 className="section-title fw-medium ff-heading mg-inline" ref={projectsRef}>Some projects I've built</h2>

            <div className="projects-container">

                <a href="https://sole-password-generator.netlify.app" target="_blank">
                    <ProjectCard icon={<Key size="44"/>} title={'Password Generator'} subtitle={'HTML, CSS, JavaScript'} description={'Simple password generator, which generates a password of about 10 to 20 characters long.'} />
                </a>

                <a href="https://www-pokeapitestsole-com.onrender.com" target='_blank'>
                    <ProjectCard icon={<Game size="44"/>} title={'Pokemon randomizer'} subtitle={'HTML, CSS, JavaScript'} description={'You can see the front sprite of a pokemon and his basic in-game stats. '} />
                </a>

                <a href="https://www-personalfinancessole-com.onrender.com" target='_blank'>
                    <ProjectCard icon={<WalletMoney size="44"/>} title={'Finances Table'} subtitle={'HTML, CSS, JavaScript, React'} description={'Created as a Diploma project, where I put my focus on the logic part. '} />
                </a>

                <a href="https://master--facusole.netlify.app" target='_blank'>
                   <ProjectCard icon={<User size="44"/>} title={'Personal Website'} subtitle={'HTML, CSS, JavaScript'} description={'Consists in create a Personal Website using HTML, CSS and JavaScript.'} /> 
                </a>

            </div>

            <div className="projects-link-container"><a className="projects-link mg-inline fs-menu-link mg-inline" href="https://github.com/facusole?tab=repositories" target='_blank'>View other projects <ArrowRight size="20" color="var(--clr-primary-purple)" /></a></div>

        </div>
    )
}