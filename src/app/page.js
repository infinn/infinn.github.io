
import "./style.css"
import CreadorProyectos from "./components/creador-proyectos/page";
import { Reveal } from "./components/revial";
import SliderDiseño from "./components/slider-work/page";
import ProyectosVisorMain from "./components/proyect-visor-main/page";
import SliderSkills from "./components/slider-skills/page";

export const metadata = {
  title: "Matias Quilodran - Diseñador gráfico y desarrollador web",
  description: "Portfolio de Matias Quilodran",
};

const proyectosDestacados = [
  
  {
    link:"/proyectos/Tasky",
    url:"/images/tasky/cover.mp4",
    alt:"Tasky branding",
    nombre:"Tasky branding",
    tag:"Branding",
    cover:"/images/tasky/tasky5.webp"
  },
  {
    link:"/proyectos/Arquitecura-Chilena",
    url:"/images/Arquitectura-chilena/cover.mp4",
    alt:"Arquitectura Chilena cover",
    nombre:"Arquitectura Chilena",
    tag:"Desarrollo web",
    cover:"/images/Arquitectura-chilena/cover-image.webp"
  },
  {
    link:"/proyectos/Duque-Vittorio",
    url:"/images/duque/coverduque.mp4",
    alt:"branding vermut duque vittorio cover",
    nombre:"branding vermut duque vittorio",
    tag:"branding",
    cover:"/images/duque/cover-image.webp"
  },
  {
    link:"/proyectos/Cthulhu",
    url:"/images/cutulo/slide.mp4",
    alt:"Libro La llamada de Cthulhu cover",
    nombre:"Libro La llamada de Cthulhu",
    tag:"Editorial",
    cover:"/images/cutulo/portada.jpg"
  }
]

export default function Home() {

  return (
    <>
      <section className="presentacion">

        <h1 
          style={{ 
            gridColumn: "1/6", 
          }}>
          Diseñador
        </h1>

        <div style={{
          gridColumn: "6/9",
          borderRadius: "1rem",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img 
            src="/images/Arquitectura-chilena/cover.gif" 
            alt="Arquitectura Chilena gif" 
            style={{ 
              marginTop: "1rem",
              width: "100%", 
              height: "70%",
              objectFit: "cover",
              borderRadius: "70px"
            }}
          />
        </div>
        <h1 
          style={{ 
            gridColumn: "9/13",
            textAlign: "right"
          }}
        >
          Gráfico
        </h1>
        <h1 
          style={{ 
            gridColumn: "1/8", 
          }}>
          Desarrollador
        </h1>
        <div style={{
          gridColumn: "8/11",
          borderRadius: "1rem",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img 
            src="/images/duque/portada.gif" 
            alt="Arquitectura Chilena gif" 
            style={{ 
              width: "100%",  
              height: "70%", 
              objectFit: "cover",
              borderRadius: "70px"
            }}
          />
        </div>
        <h1 
          style={{ 
            gridColumn: "11/13",
            textAlign: "right"
          }}
        >
          web
        </h1>
      </section>


      <section className="proyectos-home">
        {
          proyectosDestacados.map((indice) =>{
            return(
                  <ProyectosVisorMain
                    key={ "proyectos-home_"+indice.nombre }
                    linkHref={ indice.link }
                    url = { indice.url }
                    alt={ indice.alt }
                    nombre={ indice.nombre }
                    tag={ indice.tag }
                    cover={ indice.cover }
                  />
              
            )
          })
        }
      </section>
      <section style={{ overflow: "hidden"}}>
        <SliderDiseño/>
      </section>

      <section className="contacto" id="contactame">
        <img src="/images/perfil.webp" alt="Imagen perfil"/>
        <article>
          <h3>
            Juntos, podemos hacer realidad la página web de tus sueños.
          </h3>
          <p>
            Soy un estudiante de diseño gráfico con un entusiasmo particular por el desarrollo web. En mi último año, me he dedicado de manera autodidacta a aprender tecnologías como HTML y JavaScript. Actualmente, estoy inmerso en el aprendizaje de Next.js, y esta página representa mi primer acercamiento a esta tecnología.
          </p>
          <nav>
            <a href="https://www.linkedin.com/in/mat%C3%ADas-quilodran-b294aa2b1/" target="_blank">
              <span>
                linkedin
              </span>
            </a>
            <a href="mailto:mquilodranh@gmail.com">
              <span>
                correo
              </span>
            </a>
            <a href="https://www.instagram.com/antisocial_infinn" target="_blank">
              <span>
                instagram
              </span>
            </a>
            <a href="https://www.behance.net/matiasquilodran2" target="_blank">
              <span>
                behance
              </span>
            </a>
            <a href="https://github.com/infinn" target="_blank">
              <span>
                github
              </span>
            </a>
          </nav>
        </article>
      </section>

      <SliderSkills/>

      <CreadorProyectos />
    </>
  )
}
