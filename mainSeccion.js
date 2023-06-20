const keysUrl = window.location.search;
const urlParametros = new URLSearchParams(keysUrl);
let seccion = urlParametros.get("sec");

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
    let i = keysPost.length;

    while (i > 0){
        i = i - 1
        let keyNombre = datos[keysPost[i]]["esp"];
        let imagen = datos[keysPost[i]]["img"]["link"];
        let nombre = Object.keys(keyNombre);
        let categorias = datos[keysPost[i]]["categoria"][seccion];
        let descripcion = datos[keysPost[i]]["esp"][nombre]["01"]["text"];


        if(categorias == 1){
            const padre = document.querySelector("body")
            let articulo = document.createElement("article")
            articulo.innerHTML = '<div class="fift" id="fotoSeccion"><div id="fotoSeccion"><a href="post.html?post='+keysPost[i]+'"><img src="'+imagen+'" id="fotoSeccion"></a></div></div><div class="fift" id="seccionArreglo"><div id="info"><h1>'+nombre+'</h1><h2>'+descripcion+'</h2></div></div>'
            padre.appendChild(articulo)
            articulo.setAttribute("id", "seccionPost")
        }
        document.getElementById("work").innerHTML=seccion;
        document.getElementById(seccion).style.color = "gray";
    }
    document.title=seccion;
}