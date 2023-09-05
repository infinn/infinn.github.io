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



        const padre = document.querySelector(".here")
        let articulo = document.createElement("article")
        articulo.innerHTML = '<div class="encabezado"></div><div class="post"><div class="fift" id="Numero"><p id="NumeroPst">#'+(i+1)+'</p></div><div class="fift" id="fotopost"><div id="foto" ><a href="post.html?post='+keysPost[i]+'"><img src="'+imagen+'" id="foto"</a></div><div id="name"><p>'+nombre[0]+'</p></div></div></div>'
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
window.onload = function(){
    

    document.getElementById("preload").style.display = "none";
    var element = document.getElementById("test");
    element.classList.remove("hidden");
}

