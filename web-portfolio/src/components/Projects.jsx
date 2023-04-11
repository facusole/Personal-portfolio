import React from "react";
import ProjectCard from "./ProjectCard";
import { Key, WalletMoney, Shop, Game, ArrowRight } from 'iconsax-react';


import '../CSS/projects.css'


export default function Projects({projectsRef}) {

    return (
        
        <div className="projects-section" >
            
            <h2 className="section-title fw-medium ff-heading mg-inline" ref={projectsRef}>Some projects I've built</h2>

            <div className="projects-container">

                <a href="https://pluma-de-papel.vercel.app" target='_blank'>
                   <ProjectCard icon={<Shop size="44"/>} title={'E-commerce'} subtitle={'React, CSS, Firebase'} description={'With firebase as backend data base, full flow from searching to checkout.'} /> 
                </a>

                <a href="https://pokedex-liard-sigma.vercel.app" target='_blank'>
                    <ProjectCard icon={<Game size="44"/>} title={'Pokedex!'} subtitle={'HTML, Tailwind, React'} description={'SPA Pokedex from 1st gen to 5th gen. Functional searchbar and responsive design.'} />
                </a>

                <a href="https://password-gen-theta.vercel.app" target="_blank">
                    <ProjectCard icon={<Key size="44"/>} title={'Password Generator'} subtitle={'HTML, CSS, TypeScript'} description={'Simple password generator, which generates a password of about 10 to 20 characters long.'} />
                </a>


                <a href="https://finances-table.vercel.app" target='_blank'>
                    <ProjectCard icon={<WalletMoney size="44"/>} title={'Finances Table'} subtitle={'HTML, CSS, JavaScript, React'} description={'Table where you can keep a track of your incomes and your expenses.'} />
                </a>


            </div>

            <div className="projects-link-container"><a className="projects-link mg-inline fs-menu-link mg-inline" href="https://github.com/facusole?tab=repositories" target='_blank'>View other projects <ArrowRight size="20" color="var(--clr-primary-purple)" /></a></div>

        </div>
    )
}