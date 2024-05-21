"use client"

import { useState } from "react"
import "./style.css"

export default function ProyectosVisorMain({linkHref, url, alt, nombre, tag, cover}){

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return(
        <a 
            href={ linkHref } 
            className="protect-home-link"
            onMouseEnter={ handleMouseEnter } 
            onMouseLeave={ handleMouseLeave }
        >  
            <img 
                src={ isHovered ? url : cover } 
                alt={ alt } 
            />
            <div className="nombre-container">
                <div>
                    <h2>{ nombre }</h2>
                </div>
                <div id="derecha">
                    <p>{ tag }</p>
                </div>
            </div>
        </a>
    )
}