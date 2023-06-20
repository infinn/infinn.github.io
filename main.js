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
        let fecha = datos[keysPost[i]]["fecha"];
        let nombre = Object.keys(keyNombre);
        let categorias = datos[keysPost[i]]["categoria"];
        let descripcion = datos[keysPost[i]]["esp"][nombre]["01"]["text"];



        const padre = document.querySelector(".here")
        let articulo = document.createElement("article")
        articulo.innerHTML = '<div class="encabezado"><div class="fift" id="name"><p>'+nombre[0]+'</p></div><div class="vei" id="Numero"><p>#'+keysPost[i]+'</p></div><div class="vei" id="fecha"><p>'+ fecha+'</p></div></div><div class="post"><div class="vei" id="namePost"><p></p></div><div class="fift" id="fotopost"><div id="foto" ><a href="post.html?post='+keysPost[i]+'"><img src="'+imagen+'" id="foto"</a></div></div><div class="vei" ><a  id="fechaPst" >'+descripcion+'</a></div></div>'
        padre.appendChild(articulo)
        articulo.setAttribute("id", "postGeneral")
        console.log(i)
    }

    
};

window.onscroll = function(){
    if(document.documentElement.scrollTop > 400){
        var boton = document.getElementById("buttonBotton");
        boton.style.opacity = "1"
    }   else{
        var boton = document.getElementById("buttonBotton");
        boton.style.opacity = "0"
    }
}

