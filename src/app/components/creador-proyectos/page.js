import { promises as fs } from 'fs';
import Proyect from "../project"
import { Reveal } from '../revial';
import "./style.css"
import FollowImage from './followImage';

export default async function creadorProyectos(){
    const file = await fs.readFile(process.cwd() + '/src/app/post.json', 'utf8');

    const proyect = JSON.parse(file);

    let imgaesURL = []

    proyect.toReversed().map((index) =>{
        imgaesURL.push(index.cover)
    })
    
    return(
        <>
            <FollowImage images={imgaesURL} />
            <section style={{paddingTop:"7rem"}} id='proyectos'>
                {
                    proyect.toReversed().map( (proyects, index ) => {
                        return <Reveal time={0.4}>
                            <Proyect 
                                key={ "proyecto_container_"+index} 
                                index={index} 
                                title={proyects.title} 
                                tag={proyects.tag[0]} 
                                cover={proyects.cover} 
                                id={proyects.id}
                            />
                        </Reveal>
                    })
                }
            </section>
        </>
    )
}