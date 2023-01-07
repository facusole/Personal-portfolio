import React from "react";

import '../CSS/divider.css'


export default function Divider({subtitle}) {
    return (
        <>
            <h3 className="text-subtitle fs-divider fw-light section-divider mg-inline">{subtitle}</h3>
        </>
    )
}