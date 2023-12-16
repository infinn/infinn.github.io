const keysUrl = window.location.search;
const urlParametros = new URLSearchParams(keysUrl);
let seccion = urlParametros.get("post");

window.onload = function(){
    document.getElementById("preload").style.display = "none";
    var element = document.getElementById("test");
    element.classList.remove("hidden");
    
}

const lol = new XMLHttpRequest();
lol.open("GET", "Data/post.json", true);
lol.send();
lol.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        crearPost(datos)
    }
}; 
function crearPost(datos){
    let keysPost = Object.keys(datos);

    let posicion = keysPost.indexOf(seccion);
    if (posicion == -1){
        const father = document.querySelector(".mainPostFoto");

        let articulos = document.createElement("article");
        articulos.innerHTML = '<div id="notfound">404 NOT FOUND ;(</div>';
        document.title="404 ;c";
        father.appendChild(articulos);
    }else {
        let datosGeneral = datos[keysPost[posicion]]["esp"];
        let titulo = Object.keys(datosGeneral);
        document.title=titulo+" | Matias Quilodran diseñador";
        const padre = document.querySelector(".main");
        
        const father = document.querySelector(".mainPostFoto");


        let articulos = document.createElement("article");
        articulos.innerHTML = '<div id="mainImg"><img src="'+datos[keysPost[posicion]]["img"]["link"]+'"></div>';
        articulos.setAttribute("id","contenedorMainImg")
        father.appendChild(articulos);

        /* vvv poner titulo vvv */

        const nombre = document.querySelector("#titulo");
        let tituloPost = document.createElement("h1");
        tituloPost.textContent = titulo[0];
        nombre.appendChild(tituloPost)

        /* vvv pone la fecha vvv */
        let fecha = document.createElement("div");
        fecha.innerHTML = '<div id="fecha"><p>'+datos[keysPost[posicion]]["fecha"]+'</p></div>';
        fecha.setAttribute("class", "post");
        padre.appendChild(fecha);

        /* vvv pone las palabras ESP y ENG vvv*/
        let inglesEspañol = document.createElement("div");
        inglesEspañol.innerHTML = '<div class="fift" id="lenguaje"> <p> ESP </p> </div><div class="fift"  id="lenguaje"> <p> ENG</p> </div> ';
        inglesEspañol.setAttribute("class", "post");
        padre.appendChild(inglesEspañol);
        

        let a1 = datos[keysPost[posicion]]["esp"][titulo];
        let Npost = Object.keys(a1);
        

        let len = Npost.length;
        let i = 0

        while (i < len){
            let a3 = datos[keysPost[posicion]]["esp"][titulo][Npost[i]];
            let tipo = Object.keys(a3);
            let ref = datos[keysPost[posicion]]["esp"][titulo][Npost[i]][tipo];
            i = i + 1;
            if(tipo[0] == "text"){

                /* vvv textos vvv */
                let ingles = datos[keysPost[posicion]]["eng"][Npost[i-1]][tipo];

                
                let articulo = document.createElement("div");
                articulo.innerHTML = '<div id="descripcionContenedor"><p id="descripcion">'+ref+'</p><hr id="inglesDivisor"><p id="descripcion">'+ingles+'</p></div>';
                articulo.setAttribute("class", "post");
                padre.appendChild(articulo);
            }   else if (tipo[0] == "img"){

                /* vvv imagenes vvv */
                let articulo = document.createElement("div");
                let imagen = "image"+ i
                articulo.innerHTML = '<button type="button" onclick="AbrirImagen('+imagen+')"><img src="'+ref+'" class="fotopost" id="image'+i+'"></button>';
                articulo.setAttribute("id", "foto");
                articulo.setAttribute("class", "post");
                padre.appendChild(articulo);
            }   else if (tipo[0] == "title"){

                /* vvv titulos vvv */
                let articulo = document.createElement("div");
                articulo.innerHTML = '<h2>'+ref+'</h2>';
                articulo.setAttribute("id", "titulo2");
                articulo.setAttribute("class", "post");
                padre.appendChild(articulo);
            }   else if (tipo[0] == "link"){
                
                /* vvv link vvv */
                let articulo = document.createElement("div");
                articulo.innerHTML = '<a href="'+ref+'" target="_blank"> Click here </a>';
                articulo.setAttribute("id", "descripcion");
                articulo.setAttribute("class", "post");
                padre.appendChild(articulo);
            }
        }
        let articulo = document.createElement("div");

        articulo.innerHTML = '<p>Todos los proyectos realizados y presentados en este contexto son puramente con fines de aprendizaje y sin ningún objetivo de lucro. Se debe tener en cuenta que cualquier información, código, diseño o solución proporcionada es resultado de un ejercicio académico y no debe ser considerado como un servicio profesional o comercial.El propósito principal de estos proyectos es el desarrollo de habilidades y la adquisición de conocimientos prácticos en diversas áreas. Si bien se han realizado esfuerzos para garantizar la precisión y la calidad de los resultados presentados, no se puede garantizar su total exactitud o validez en un entorno real.</p>';
        articulo.setAttribute("id", "disclaimer");
        articulo.setAttribute("class", "post");
        padre.appendChild(articulo);
    }
    

    const more = document.getElementById("more");
    const largo = keysPost.length;
    if (keysPost[posicion -1]== undefined){
        more.href="post.html?post="+[keysPost[largo-1]]
    }   else{
        more.href="post.html?post="+keysPost[posicion -1]
    }
    var navegador = navigator.userAgent;
    navegador = navegador.toLowerCase();
    if(navegador.indexOf("safari") > -1){
        let fotoPost2 = document.getElementById("fotoContenedor");
        fotoPost2.style.cssText = 'position: static;';
    }
} 

function random(min,max){
    return Math.round(Math.random() * (max - min) + min);
}
function AbrirImagen(imagen){
    console.log(imagen);
};

/*
document.querySelectorAll(".main img").forEach(el=>{
    el.addEventListener("click",function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("active");
        console.log("click");
    })
});
document.querySelectorAll(".main").forEach(el=>{
    el.addEventListener("click", function(ev){
        this.classList.remove("active");
        console.log("click");
    })
})
function AbrirImagen(){
    console.log("click");
};
document.getElementById('fotopost').addEventListener('click', AbrirImagen());*/