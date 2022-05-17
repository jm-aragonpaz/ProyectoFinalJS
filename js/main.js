let container = document.getElementById("titulo")
container.innerHTML = "<h2>Bienvenido a Tarjeta de Golf Virtual</h2>"
let handicap=''
let hcp = document.getElementById("handicap")
hcp.addEventListener('change', () =>{
    handicap = parseInt(hcp.value);
    return handicap
})
modificarPlantillaHoles();
let selection = document.querySelector('select')
let file=undefined
let tabla=''
let parDeCampo=0
selection.addEventListener('change', () => {
    file = selection.options[selection.selectedIndex].value;
    return file
})
waitForElement();




function modificarPlantillaHoles() {
    const contenedor = document.getElementById("name");
    contenedor.innerHTML = `<div>
                                <select id="cancha" class="form-select" "aria-label="Default select example">
                                <option selected="Elija un campo">Elija un Campo</option>
                                <option value="cancha.json">Club Hípico de City Bell</option>
                                <option value="cancha2.json">UPCN</option>
                                <option value="cancha3.json">Augusta National</option>
                                </select>
                            </div>`
}

function waitForElement(){
    if(typeof file !== "undefined"){
        tabla = document.querySelector('#lista');
        cargarCancha();
        let puntos = document.querySelector('#puntos');
        puntos.addEventListener("click", storeScore);
        let startR = document.querySelector('#round');
        startR.addEventListener('click', borrarCampo);
        let endR = document.querySelector('#erase');
        endR.addEventListener("click", borrarCampo);
    }
    else{
        setTimeout(waitForElement, 250);
    }
}


function cargarCancha() {
    fetch(`./assets/courses/${file}`)
        .then(respuesta => respuesta.json())
        .then(field => {
            const thead = document.createElement('tr')
            thead.innerHTML = `<th>Hoyo</th> <th>Par</th> <th>Yardas</th> <th>Hcp</th> <th>Score</th>`
            tabla.appendChild(thead);
            field.forEach(Hoyo => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${Hoyo.Hoyo}</td> <td>${Hoyo.Par}</td> <td>${Hoyo.Yd}</td> <td>${Hoyo.Hcp}</td> <td><input class="form-control score" type="number" placeholder="Score" aria-label="Score"></td>
                `;
                tabla.appendChild(row);
                parDeCampo += Hoyo.Par
            })
            return parDeCampo
        })
}

function storeScore() {
    const scorer = document.getElementsByClassName("score")
    total = 0
    for (let score of scorer) {
        total = parseInt(score.value) + total
    }
    total2= total - parseInt(handicap)
    even = total - parDeCampo;
    neto = total - parDeCampo - parseInt(handicap);
    if (even == 0) {
        even = 'E'
    } else if (even < 0) {
        even = `${even}`
    } else {
        even = `+${even}`
    }
    if (neto == 0) {
        neto = 'E'
    } else if (neto < 0) {
        neto = `${neto}`
    } else {
        neto = `+${neto}`
    }
    if (isNaN(total) || (isNaN(total2))) {
        mostrarAlertaErr()
    } else {
        mostrarAlertaOk()
    }
}

function mostrarAlertaOk() {
    Swal.fire({
        title: 'Score',
        text: `Su Score Final (Gross) es de ${total} (${even}). Su Score Neto (con handicap) es de ${total2} (${neto})`,
        icon: 'success',
        confirmButtonText: 'Ok',
    })
}

function mostrarAlertaErr() {
    Swal.fire({
        title: 'Error',
        text: `Verifique la carga correcta del handicap y del score en todos los hoyos.`,
        icon: 'error',
        confirmButtonText: 'Ok',
    })
}

function borrarCampo() {
    const scorer = document.getElementsByClassName("score")
    for (let score of scorer) {
        score.value = ''
        handicap=''
    }
    location.reload()
}
function borrarRonda() {
    const scorer = document.getElementsByClassName("erase")
    for (let score of scorer) {
        score.value = ''
    }
    location.reload()
}
