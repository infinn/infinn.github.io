"use client"

import gsap from "gsap";
import { useEffect, useRef} from "react";

export default function slider(){
    let xPercent = 0;
    let direction = -1
    const firstText = useRef(null);
    const secondText = useRef(null);
    useEffect( () => {
        requestAnimationFrame(Animation);
      }, [])
      
      const Animation = () => {
        if(xPercent <= -100){
          xPercent = 0;
        }
        gsap.set(firstText.current, {xPercent: xPercent});
        gsap.set(secondText.current, {xPercent: xPercent});
        xPercent += 0.15 * direction;
        requestAnimationFrame(Animation)
      }
    return(
        <div id="Sobre-mi">
          <div id="sliderContainer">
            <p ref={firstText}>diseñemos juntos</p>
            <p ref={secondText}>diseñemos juntos</p>
          </div>
        </div>
    )    
}