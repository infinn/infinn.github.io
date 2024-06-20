"use client"

import { useEffect, useState } from "react"
import "./style.css"
import { Reveal } from "../revial";

export default function ProyectosVisorMain({linkHref, url, alt, nombre, tag, cover}){

    const [isHovered, setIsHovered] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 750);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            { isSmallScreen ? (
                <video 
                    src={url} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                />
            ) : isHovered ? (
                <video 
                    src={url} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                />
            ) : (
                <img 
                    src={cover} 
                    alt={alt} 
                />
            )}
            <div className="nombre-container">
                <div>
                    <Reveal>
                        <h2>{ nombre }</h2>
                    </Reveal>
                </div>
                <div id="derecha">
                    <Reveal>
                        <p>{ tag }</p>
                    </Reveal>
                </div>
            </div>
        </a>
        
    )
}