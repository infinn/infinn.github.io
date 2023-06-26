const keysUrl = window.location.search;
const urlParametros = new URLSearchParams(keysUrl);
let seccion = urlParametros.get("post");

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
    console.log(keysPost);
    let posicion = keysPost.indexOf(seccion);
    console.log(seccion)
    console.log(posicion)
    let datosGeneral = datos[keysPost[posicion]]["esp"];
    let titulo = Object.keys(datosGeneral);
    document.title=titulo;
    console.log(titulo[0])

    const father = document.querySelector(".main");
    let articulos = document.createElement("div");
    articulos.innerHTML = '<h1>'+titulo[0]+'</h1>';
    articulos.setAttribute("id", "titulo");
    articulos.setAttribute("class", "post");
    father.appendChild(articulos);
    

    
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
            const padre = document.querySelector(".main");
            let articulo = document.createElement("div");
            articulo.innerHTML = '<h2>'+ref+'</h2>';
            articulo.setAttribute("id", "descripcion");
            articulo.setAttribute("class", "post");
            padre.appendChild(articulo);
        }   else if (tipo[0] == "img"){
            const padre = document.querySelector(".main");
            let articulo = document.createElement("div");
            articulo.innerHTML = '<img src="'+ref+'" id="fotopost">';
            articulo.setAttribute("id", "foto");
            articulo.setAttribute("class", "post");
            padre.appendChild(articulo);
        }   else if (tipo[0] == "title"){
            const padre = document.querySelector(".main");
            let articulo = document.createElement("div");
            articulo.innerHTML = '<h1>'+ref+'</h1>';
            articulo.setAttribute("id", "titulo2");
            articulo.setAttribute("class", "post");
            padre.appendChild(articulo);
        }   else if (tipo[0] == "link"){
            const padre = document.querySelector(".main");
            let articulo = document.createElement("div");
            articulo.innerHTML = '<a href="'+ref+'" target="_blank"> Click here </a>';
            articulo.setAttribute("id", "descripcion");
            articulo.setAttribute("class", "post");
            padre.appendChild(articulo);
        }
    }
    const more = document.getElementById("more");
    const largo = keysPost.length;
    let check = 0;
    while (check == 0){
        let x = random(0,largo);
        if (x == posicion){
            check = 0;
        }   else if (x != posicion){
            let nuevo = keysPost[x];
            more.href="post.html?post="+nuevo;
            check = 1;
        }   else if (x>largo){
            check =0;
        }
    }
} 

function random(min,max){
    return Math.round(Math.random() * (max - min) + min);
}