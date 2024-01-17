import  CreadorPost  from "../../components/creador-post/page"
import "./style.css"

export async function generateStaticParams() {
  const posts = await fetch('https://infinn.github.io/proyectos').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
export default function Page({ params }){
    const { slug } = params
    return(
        <>
            
            <section>
                <CreadorPost id={ params }/>
            </section>
        </>
        
    )
}

