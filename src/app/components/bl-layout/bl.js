import { motion } from "framer-motion"
import "./style.css"

export default function Inner({ children }){
    const anim = (variants) => {
        return {
            inital :"inital",
            animate: "enter",
            exit:"exit",
            variants
        }
    }
    const slide = {
        inital:{
            top:0,
            opacity:1
        },
        enter:{
            top:"100%",
            transition: {
                duration:1,
                ease: [0.76, 0, 0.24, 1]
            },
            opacity:0
        },
        exit:{
            top:0,
            transition:{
                duration: 1,
                ease: [0.76, 0, 0.24, 1]
            },
            opacity:1
        }
    }
    return(
        <main className="inner">
            <motion.div mode="wait" className="slide" {...anim(slide)}></motion.div>
            {children}
        </main>
        
    )
}