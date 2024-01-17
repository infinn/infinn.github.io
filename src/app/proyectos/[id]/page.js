import  CreadorPost  from "../../components/creador-post/page"
import "./style.css"

export default function Page({ params }){
    return(
        <>
            
            <section>
                <CreadorPost id={ params }/>
            </section>
        </>
        
    )
}

