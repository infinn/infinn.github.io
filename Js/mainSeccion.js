const keysUrl = window.location.search;
const urlParametros = new URLSearchParams(keysUrl);
let seccion = urlParametros.get("sec");

window.onload = function(){
    

    document.getElementById("preload").style.display = "none";
    var element = document.getElementById("test");
    element.classList.remove("hidden");
};

const lol = new XMLHttpRequest();
lol.open("GET", "Data/post.json", true);
lol.send();
lol.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        if (seccion == "Design"){
            document.getElementById("work").innerHTML="DISEÑO";
            document.title="Matias Quilodran | Diseño";
            crearPost(datos);
        }   else if(seccion == "Music"){
            document.getElementById("work").innerHTML="MUSICO";
            document.title="Matias Quilodran | Musico";
            crearPost(datos);
        }   else if(seccion == "Developer"){
            document.getElementById("work").innerHTML="DEV";
            document.title="Matias Quilodran | Programador";
            crearPost(datos);
        }   else{
            document.getElementById("work").innerHTML="404 NOT FOUND ;(";
            document.title="404 ;c";
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
        let descripcion = datos[keysPost[i]]["descripcion"]["esp"];


        if(categorias == 1){
            const padre = document.querySelector(".here");
            let articulo = document.createElement("article");
            articulo.innerHTML = '<nav id="fotoSeccion"><a href="post.html?post='+keysPost[i]+'"><img src="'+imagen+'" id="fotoSeccion"></a></nav><nav id="seccionArreglo"><div id="info"><a href="post.html?post='+keysPost[i]+'"><h2>'+nombre+'</h2></a><p>'+descripcion+'</p></div></nav>';
            padre.appendChild(articulo);
            articulo.setAttribute("id", "seccionPost");
        };
        
    };
    
};

