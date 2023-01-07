import React from "react";

import '../CSS/technologyCard.css'

export default function TechnologyCard({icon, techName}) {
    return (
        <div className="technology-card">
            <div className="technology-icon">{icon}</div>
            <h3 className="technology-name">{techName}</h3>
        </div>
    )
}