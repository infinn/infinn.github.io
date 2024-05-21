import Link from "next/link";

export default function index({  title, tag, cover, id }) {
    return(
        <>
            <article 
                className="proyectosTodos" 
                style={{ 
                    backgroundImage: "url("+cover+")", 
                    backgroundSize: "100%", 
                    backgroundRepeat: "no-repeat", 
                    backgroundPosition:"center" 
                }}
            >
                <Link href={`/proyectos/${id}`}>
                    <h2>{title}</h2>
                    <p>
                        <span>
                            {tag}
                        </span>
                    </p>
                </Link>
            </article>
        </>
    )
}