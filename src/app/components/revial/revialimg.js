
"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export const RevealImg = ({ children, gridSpan }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    return(
        <>
        
        <div style={{ gridColumnStart:"span "+ gridSpan }}>
            <div>
            <motion.div initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)} onLoad={() => setIsLoaded(true)}>
                {children}
            </motion.div>
            </div>
        </div>        
        </>
    )
}