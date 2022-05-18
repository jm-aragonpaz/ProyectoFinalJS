let dark = document.getElementById("darkMode")
// boton.onclick = () =>{console.log("Respuesta 2")}
dark.addEventListener("click", goDark)
let light = document.getElementById("lightMode")
// boton.onclick = () =>{console.log("Respuesta 2")}
light.addEventListener("click", goLight)

function goDark() {
    document.body.style.backgroundColor= "#006747"
    document.body.style.color="#FFFFFF"
    document.getElementById("titulo").style.color='white'
    document.getElementById("darkMode").style.backgroundColor='#009b77'
    document.getElementById("darkMode").style.color='white'
    document.getElementById("darkMode").style.borderColor='white'
    document.getElementById("lightMode").style.backgroundColor='#009b77'
    document.getElementById("lightMode").style.color='white'
    document.getElementById("lightMode").style.borderColor='white'
    document.getElementById("round").style.backgroundColor='#009b77'
    document.getElementById("round").style.borderColor='white'
    document.getElementById("round").style.color='white'
    document.getElementById("cancha").style.backgroundColor='#009b77'
    document.getElementById("cancha").style.color='white'
    document.getElementById("cancha").style.borderColor='white'
    document.getElementById("puntos").style.backgroundColor='#009b77'
    document.getElementById("puntos").style.color='white'
    document.getElementById("puntos").style.borderColor='white'
    document.getElementById("erase").style.backgroundColor='#009b77'
    document.getElementById("erase").style.color='white'
    document.getElementById("erase").style.borderColor='white'
    document.getElementById("lista").style.backgroundColor='#009b77'
    document.getElementById("lista").style.color='white'
    document.getElementById("player").style.color='#009b77'
    document.getElementById("player").style.backgroundColor='white'
    document.getElementById("handicap").style.backgroundColor='white'
    document.getElementById("handicap").style.color='#009b77'
    

}

function goLight(){
    document.body.style.backgroundColor= '#f7f7f7'
    document.body.style.color="#006747"
    document.getElementById("titulo").style.color='#006747'
    document.getElementById("darkMode").style.backgroundColor='#f7f7f7'
    document.getElementById("darkMode").style.color='#006747'
    document.getElementById("darkMode").style.borderColor='#006747'
    document.getElementById("lightMode").style.backgroundColor='#f7f7f7'
    document.getElementById("lightMode").style.color='#006747'
    document.getElementById("lightMode").style.borderColor='#006747'
    document.getElementById("round").style.backgroundColor='#f7f7f7'
    document.getElementById("round").style.borderColor='#006747'
    document.getElementById("round").style.color='#006747'
    document.getElementById("cancha").style.backgroundColor='#f7f7f7'
    document.getElementById("cancha").style.color='#006747'
    document.getElementById("cancha").style.borderColor='#006747'
    document.getElementById("puntos").style.backgroundColor='#f7f7f7'
    document.getElementById("puntos").style.color='#006747'
    document.getElementById("puntos").style.borderColor='#006747'
    document.getElementById("erase").style.backgroundColor='#f7f7f7'
    document.getElementById("erase").style.color='#006747'
    document.getElementById("erase").style.borderColor='#006747'
    document.getElementById("lista").style.backgroundColor='#f7f7f7'
    document.getElementById("lista").style.color='#006747'
    document.getElementById("lista").style.borderColor='#006747'
    document.getElementById("player").style.color='#006747'
    document.getElementById("player").style.backgroundColor='#f7f7f7'
    document.getElementById("player").style.borderColor='#006747'
    document.getElementById("handicap").style.borderColor='#006747'
    document.getElementById("handicap").style.backgroundColor='#f7f7f7'
    document.getElementById("handicap").style.color='#006747'
    document.getElementsByClassName("score").borderColor='#006747'
    document.getElementsByClassName("score").color='#006747'
    
}