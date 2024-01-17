import  CreadorPost  from "../../components/creador-post/page"
import "./style.css"


/*
export const generateStaticParams = async()=>{
    const data = await fetch("/proyectos", {
        cache:"no-store",
    });
    const qdata = await data.json();
    const das = qdata.proyectos;
    const params = das.map((proyectos)=>{
        id:{proyectos.id}
    })
    console.log(params)
    return params;
}

export default function Page({ params }){
    const { id } = params
    return(
        <>
            
            <section>
                <CreadorPost id={ params }/>
            </section>
        </>
        
    )
}
*/
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())
   
    return posts.map((post) => ({
      id: post.id,
    }))
  }
   
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default function Page({ params }) {
    const { id } = params
    return(
        <>
        <h1>{ params }</h1>
        </>
    )
    // ...
  }