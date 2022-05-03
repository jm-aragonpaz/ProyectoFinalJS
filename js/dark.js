let dark = document.getElementById("darkMode")
// boton.onclick = () =>{console.log("Respuesta 2")}
dark.addEventListener("click", goDark)
let light = document.getElementById("lightMode")
// boton.onclick = () =>{console.log("Respuesta 2")}
light.addEventListener("click", goLight)

function goDark() {
    document.body.style.backgroundColor= "#333333"
    document.body.style.color="#EEEEEE"
}

function goLight(){
    document.body.style.backgroundColor="#EEEEEE"
    document.body.style.color="#333333"
}