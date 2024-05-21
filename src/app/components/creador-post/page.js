
import { promises as fs } from 'fs';
import CrearPostDatos from "../post/page"
import TitulosPost from '../titulo-post/page';
import { Reveal } from '../revial';

export default async function CreadorPost({ id }){
    const file = await fs.readFile(process.cwd() + '/src/app/post.json', 'utf8');
    const proyect = JSON.parse(file);
    let i = 0;
    let check = true
    let info 
    let index = -1
    while( i < proyect.length && check){
        if(proyect[i].id == id){
            check = false
            info = proyect[i].esp
        }   else{
            i+=1
        }
    }
    if( check && i== proyect.length){
        return(
            <>
            <h2 id="error404">404 :c</h2>
            </>
        )
    }
    
    return(
        <>
        <TitulosPost/>
        <head><title>{proyect[i].title + " - Matias Quilodran"}</title></head>
        <div id="tituloMain">
            <Reveal time={0.5}><h1 id="tituloh1">{proyect[i].title}</h1></Reveal>
        </div>
        
        <div id='seccionProyecto'>
            <div className="cardFirst">
                <Reveal time={1}>
                    <img src={proyect[i].img} id="mainFoto"/>
                </Reveal>
                <div style={{gridColumnStart:"span 1"}}>
                    <p style={{ fontWeight:"400", margin:"0", paddingBottom:"2rem", fontSize:"1.5rem"}}>
                        <Reveal time={1}>
                            {proyect[i].descripcion}
                        </Reveal>
                    </p>
                    <div id="mainTag">
                        {
                            proyect[i].tag.map((text) =>{
                                return <Reveal time={1} key={ "mainTag_"+text }><p className="tags">{text}</p></Reveal>
                            })
                        }
                    </div>
                    <Reveal time={1}><p>{proyect[i].fecha}</p></Reveal>
                </div>
            </div>
            <div className="proyecto">
                { 
                    info.map( (indice) => {
                        let tipo = Object.keys(indice)[0];
                        let data = indice[tipo]
                        index +=1
                        return <CrearPostDatos tipo={tipo} contenido={data} key={ "proyecto_"+indice }/>
                    })
                }
            </div>
        </div>
            <p>Todos los proyectos realizados y presentados en este contexto son puramente con fines de aprendizaje y sin ningún objetivo de lucro. Se debe tener en cuenta que cualquier información, código, diseño o solución proporcionada es resultado de un ejercicio académico y no debe ser considerado como un servicio profesional o comercial.El propósito principal de estos proyectos es el desarrollo de habilidades y la adquisición de conocimientos prácticos en diversas áreas.</p>
        </>
    )
}