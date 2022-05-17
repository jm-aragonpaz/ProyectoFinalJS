let dark = document.getElementById("darkMode")
// boton.onclick = () =>{console.log("Respuesta 2")}
dark.addEventListener("click", goDark)
let light = document.getElementById("lightMode")
// boton.onclick = () =>{console.log("Respuesta 2")}
light.addEventListener("click", goLight)

function goDark() {
    document.body.style.backgroundColor= "#006747"
    document.body.style.color="#FFFFFF"
}

function goLight(){
    document.body.style.backgroundColor="#ffffff"
    document.body.style.color="#006747"
}