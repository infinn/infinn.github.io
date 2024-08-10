export default function Headder(){
    return(
        <header>
            <div style={{ maxWidth: "1500px", width: "100%", display: "flex" }}>
            <nav>
                <div id="logoHeader">
                <a href="/" id="link">
                    Matias Quilodran
                </a>
                </div>
            </nav>
            <nav id='headerDerecha'> 
                <div>
                <a href="/#proyectos" id="link">Proyectos</a>
                </div>
                <div>
                <a href="/#contactame" id="link">Contacto</a>
                </div>
            </nav>
            </div>
        </header>
    )
}