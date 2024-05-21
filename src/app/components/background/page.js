import { useEffect, useState } from "react"
import "./style.css"

export default function BackgroundBlob(){
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        
        const anchors = document.querySelectorAll('a');
        anchors.forEach(anchor => {
        anchor.addEventListener('mouseenter', handleMouseEnter);
        anchor.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        anchors.forEach(anchor => {
            anchor.removeEventListener('mouseenter', handleMouseEnter);
            anchor.removeEventListener('mouseleave', handleMouseLeave);
        });
        };
    }, []);

    const followerStyle = {
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: isHovering ? '50px' : '30px', 
        height: isHovering ? '50px' : '30px', 
        backgroundColor: '#DFDBCE',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s ease, height 0.2s ease', 
        pointerEvents: 'none',
        zIndex: "100",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const svgStyle = {
        width: '50%', // Ajusta el tamaño del SVG según sea necesario
        height: '50%',
        fill:"#1c1c1c",
        padding:"0",
        display: isHovering ? "block": "none"
    }
    return(
        <article className="blob">
            <div style={followerStyle}>
            <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/>
            </svg>
            </div>
        </article>
    )
}