const $inicio = document.getElementById("inicio"),
    $informacion = document.getElementById("informacion"),
    $acerca = document.getElementById("acerca"),
    $contacto = document.getElementById("contacto");

const object = {
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
} 

function getPage(url, object){
    fetch(url, object)
    .then(res =>{
        return json = res.text()
    })
    .then(res =>{
        document.querySelector(".articulo").innerHTML = res
    })
    .catch(err =>{
        console.log(err)
        let mensaje = error.statusText || "Ocurrio un error";
        document.querySelector(".articulo").innerHTML = `Error ${err.status}: ` + mensaje
    })
}


document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector(".articulo").style.transform = "scale(0.7)"
    getPage("https://sitio-web-ajax.vercel.app/inicio.html")
    agrandar()
})

$acerca.addEventListener("click", (e) =>{
    e.preventDefault()
    document.querySelector(".articulo").style.transform = "scale(0.7)"
    getPage("https://sitio-web-ajax.vercel.app/acerca.html")
    agrandar()
})

$inicio.addEventListener("click", (e) =>{
    e.preventDefault()
    document.querySelector(".articulo").style.transform = "scale(0.7)"
    getPage("https://sitio-web-ajax.vercel.app/inicio.html")
    agrandar()
})

$informacion.addEventListener("click", (e) =>{
    e.preventDefault()
    document.querySelector(".articulo").style.transform = "scale(0.7)"
    getPage("https://sitio-web-ajax.vercel.app/informacion.html")
    agrandar()
})

$contacto.addEventListener("click", (e) =>{
    e.preventDefault()
    document.querySelector(".articulo").style.transform = "scale(0.7)"
    getPage("https://sitio-web-ajax.vercel.app/contacto.html")
    agrandar()
})

function agrandar(){
    setTimeout(() =>{
        document.querySelector(".articulo").style.transform = "scale(1)"
    }, 500)
}