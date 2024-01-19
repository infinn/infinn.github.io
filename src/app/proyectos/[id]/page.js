import  CreadorPost  from "../../components/creador-post/page"
import "./style.css"
import projectlist from '../../post.json'


export async function generateStaticParams() {
    return projectlist.map((p) => ({
        uniquepage: p.id.toString(),
    }))
}
export default function Page({params}){
    const project = projectlist.find(p => p.id.toString() === uniquepage)
    if (!project) {
        return(
            <h1>error</h1>
        )
    }
    return(
        <>
            <section>
                <CreadorPost id = {id}>
                </CreadorPost>
            </section>
        </>
        
    )
}

