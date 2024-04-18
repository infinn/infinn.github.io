import { Reveal } from "../revial"
import { RevealImg } from "../revial/revialimg"


export default function CrearPostDatos({ tipo, contenido }){
    if (tipo == "text"){
        return <p id="textos"><Reveal time={0.4}>{contenido}</Reveal></p>
    }   else if( tipo == "img"){
        return <RevealImg gridSpan={contenido.gridSpan}><img id="imgGrid" src={contenido.links} alt={contenido.alt}/></RevealImg>
    }   else if(tipo == "title"){
        return <h2 id="titlos"><Reveal time={0.4}>{contenido}</Reveal></h2>
    }   else if(tipo == "link"){
        return <div id="links"><Reveal time={0.4}><a href={contenido.links} target="_blank"><span>{contenido.text}</span></a></Reveal></div>
    }   else if(tipo == "cita"){
        return <h3 id="cita"><span><Reveal time={0.5}>{contenido}</Reveal></span></h3>
    }
}