import  CreadorPost  from "../../components/creador-post/page"
import "./style.css"
import projectlist from '../../post.json'


export async function generateStaticParams() {
    return projectlist.map((p) => ({
        id: p.id,
    }))
}
export default function Page({params}){
    return(
        <>
            <section>
                <CreadorPost id = {id}>
                </CreadorPost>
            </section>
        </>
        
    )
}

