import React from "react";

import '../CSS/projectCard.css'
import '../CSS/index.css'

export default function ProjectCard({icon, title, subtitle, description}) {

    return (
        <div className="project-card">
            <div className="project-icon">{icon}</div>
            <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <h4 className="project-technologies text-subtitle">{subtitle}</h4>
                <p className="project-description">{description}</p>
            </div>
        </div>
    )
}