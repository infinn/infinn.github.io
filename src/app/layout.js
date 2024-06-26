"use client"

import { Antonio, Montserrat } from 'next/font/google'
import './globals.css'
import Inner from './components/bl-layout/bl'
import BackgroundBlob from './components/background/page'


export const antonio = Antonio({ weight: '700', subsets: ['latin'] })
export const mont = Montserrat({ weight: ['300','600','800'], subsets: ['latin'] })


export default function RootLayout({ children }) {
  
  
  return (
    <html lang="es">
      
    <body className={antonio.className}>
      <div id="top"></div>
      <BackgroundBlob/>
      <header>
        <div style={{ maxWidth: "1500px", width: "100%", display: "flex" }}>
          <nav>
            <div id="logoHeader">
              <a href="/" id="link">
                Matias Quilodran
              </a>
            </div>
          </nav>
          <nav id='headerDerecha'> 
            <div>
              <a href="/#proyectos" id="link">Proyectos</a>
            </div>
            <div>
              <a href="/#contactame" id="link">Contacto</a>
            </div>
          </nav>
        </div>
      </header>
      <main>
          
        {children}
      </main>
      <footer style={{ display:"grid", justifyContent:"center"}}>
        <section>
          <nav className='footermain'>
            <a href="#top"id="link">BACK TO TOP</a>
          </nav>
          <nav className='footermain'>
            <a href="https://www.behance.net/matiasquilodran2" target="_blank" id="link">BEHANCE</a>
            <a href="https://www.instagram.com/antisocial_infinn/" target="_blank" id="link">INSTAGRAM</a>
            <a href="https://github.com/infinn" target="_blank" id="link">GITHUB</a>
            <a href="https://www.linkedin.com/in/mat%C3%ADas-quilodran-b294aa2b1/" target="_blank" id="link">linkedin</a>
          </nav>
        </section>
        <p style={{fontSize:"0.8rem", fontWeight:"300", textAlign:"center"}}>Version: 2.2.1 / Next.js 14 / Framer Motion </p>
        <section className="tituloFinal">
          <h1>trabajemos juntos</h1>
        </section>
      </footer>
    </body>
    
    </html>
  )
}
