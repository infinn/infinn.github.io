import { promises as fs } from 'fs';
import Proyect from "../project"
import { Reveal } from '../revial';

export default async function creadorProyectos(){
    const file = await fs.readFile(process.cwd() + '/src/app/post.json', 'utf8');
    const proyect = JSON.parse(file);
    return(
        <section style={{paddingTop:"7rem"}}>
            {
                proyect.toReversed().map( (proyects, index ) => {
                    return <Reveal time={0.5}><Proyect key={index} index={index} title={proyects.title} tag={proyects.tag[0]} cover={proyects.cover} id={proyects.id}/></Reveal>
                })
            }
        </section>
    )
}