const keysUrl = window.location.search;
const urlParametros = new URLSearchParams(keysUrl);
let seccion = urlParametros.get("sec");

const lol = new XMLHttpRequest();
lol.open("GET", "Data/post.json", true);
lol.send();
lol.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        if (seccion == "Design"){
            document.getElementById("work").innerHTML="DISEÑO";
            document.title="DISEÑO";
            crearPost(datos);
        }   else if(seccion == "Music"){
            document.getElementById("work").innerHTML="MUSICO";
            document.title="MUSICO";
            crearPost(datos);
        }   else if(seccion == "Developer"){
            document.getElementById("work").innerHTML="DEV";
            document.title="PROGRAMADOR";
            crearPost(datos);
        }   else{
            document.getElementById("work").innerHTML="404 NOT FOUND ;(";
        }
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
            const padre = document.querySelector(".here")
            let articulo = document.createElement("article")
            articulo.innerHTML = '<div class="fift" id="fotoSeccion"><div id="fotoSeccion"><a href="post.html?post='+keysPost[i]+'"><img src="'+imagen+'" id="fotoSeccion"></a></div></div><div class="fift" id="seccionArreglo"><div id="info"><a href="post.html?post='+keysPost[i]+'">'+nombre+'</a><h2>'+descripcion+'</h2></div></div>'
            padre.appendChild(articulo)
            articulo.setAttribute("id", "seccionPost")
        }
        
    }
    
}
window.onload = function(){
    

    document.getElementById("preload").style.display = "none";
    var element = document.getElementById("test");
    element.classList.remove("hidden");
}
