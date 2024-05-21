import "../../app/style.css"
import CreadorProyectos from "../components/creador-proyectos/page";

export const metadata = {
    title: "Matias Quilodran - Diseñador gráfico y desarrollador web",
    description: "Portfolio de Matias Quilodran",
  };

export default function PostsPage(){
    return(
        <div>
            <CreadorProyectos />
        </div>
    )
}