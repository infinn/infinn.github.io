"use client"

import { useEffect, useState } from "react";

export default function FollowImage({images}){
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hoveredDiv, setHoveredDiv] = useState(null);


    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = (divId) => {
        setIsHovering(true);
        setHoveredDiv(divId);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setHoveredDiv(null);
    };

    const handleResize = () => {
        setWinWidth = window.innerWidth;
        if (window.innerWidth > 1500) {
            setWidth(true)
        }   else{
            setWidth(false)
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        const proyectContainers = document.querySelectorAll('.proyectosTodos');
        proyectContainers.forEach((anchor, index) => {
            const divId = index; // Assuming divId starts from 1
            anchor.addEventListener('mouseenter', () => handleMouseEnter(divId));
            anchor.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            proyectContainers.forEach((anchor, index) => {
                const divId = index + 1;
                anchor.removeEventListener('mouseenter', () => handleMouseEnter(divId));
                anchor.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const followerStyle = {
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        display: isHovering ? "block": "none",
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        width: "300px",
        height: "250px",
        overflow:"hidden",
        borderRadius:"1rem",
    };
    return(
        <>
            <article className='image-container-proyects'>
                <div style={followerStyle}>
                    <div className="movement-container" style={{transform: `translateY(${hoveredDiv * -250}px)`}}>
                        {
                            images.map((index)=>{
                                let extension = index.split('.').pop();
                                if(extension == "mp4"){
                                    return(
                                        <>
                                            <div className="image-container-proyects-background" key={index}>
                                                <video 
                                                    src={index} 
                                                    autoPlay 
                                                    loop 
                                                    muted 
                                                    playsInline 
                                                />
                                            </div>
                                        </>
                                    )
                                } else{
                                    return(
                                        <>
                                            <div className="image-container-proyects-background" key={index}>
                                                <img src={index} />
                                            </div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </article>
        </>
    )
}