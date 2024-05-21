import  CreadorPost  from "../../components/creador-post/page"
import "./style.css"
import projectlist from '../../post.json'


export async function generateStaticParams() {
    return projectlist.map((p) => ({
        id: p.id,
    }))
}
export default function Page({params}){
    const { id } = params
    return(
        <>
            <article style={{ padding: "2rem", maxWidth:"1500px"}}>
                <CreadorPost id = { id }>
                </CreadorPost>
            </article>
        </>
    )
}

