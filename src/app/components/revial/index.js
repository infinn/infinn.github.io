
"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export const Reveal = ({ children, time }) => {
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
        mainControls.start("visible");
        }
    }, [isInView]);
    return <motion.div ref={ref} variants={{hidden: { opacity: 0, y: 75},visible: { opacity: 1, y: 0, },}} initial="hidden" animate={mainControls} transition={{duration: 0.6, delay: time, ease:[0.33, 1, 0.68, 1]}}>{children}</motion.div>
}