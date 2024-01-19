import  CreadorPost  from "../../components/creador-post/page"
import "./style.css"


export async function generateStaticParams() {
    const res = await fetch('https://infinn.github.io/post.json')
    const posts = await res.json()
    
    return posts.map((post) => ({
      id: post.id,
    }))
}
export default function Page({params}){
    const { id } = params
    return(
        <>
            <section>
                <CreadorPost id = {id}>
                </CreadorPost>
            </section>
        </>
        
    )
}

