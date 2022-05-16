let container = document.getElementById("titulo")
container.innerHTML = "<h2>Bienvenido a Tarjeta de Golf Virtual</h2>"

function modificarPlantillaHoles() {
    const contenedor = document.getElementById("name");
    contenedor.innerHTML = `<div>
                                <h2>Club Hipico City Bell</h2>
                            </div>`
}
modificarPlantillaHoles();

const tabla = document.querySelector('#lista');
function cargarCancha() {
    fetch('./cancha.json')
        .then(respuesta => respuesta.json())
        .then(field => {
            const thead = document.createElement('tr')
            thead.innerHTML = `<th>Hoyo</th> <th>Par</th><th>Score</th>`
            tabla.appendChild(thead);
            field.forEach(Hoyo => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${Hoyo.Hoyo}</td> <td>${Hoyo.Par}</td> <td><input class="form-control score" type="number" placeholder="Score" aria-label="Score"></td>
                `;
                tabla.appendChild(row);
                // console.log(row);
            })
        })
}
cargarCancha();


let puntos = document.querySelector('#puntos');
puntos.addEventListener("click", storeScore);
function storeScore() {
    const scorer = document.getElementsByClassName("score")
    total = 0
    for (let score of scorer) {
        total = parseInt(score.value) + total
    }
    console.log(total)
    even = total - 72;
    if (even == 0) {
        even = 'E'
    } else if (even < 0){
        even=`${even}`
    } else {
        even=`+${even}`
    }
    if (isNaN(total)){
        mostrarAlertaErr()
        document.getElementById("final").innerHTML = `<h3>Error, verifique la carga correcta del score en todos los hoyos.</h3>`
    } else {
        mostrarAlertaOk()
        document.getElementById("final").innerHTML = `<h3>Su score final es de ${total} (${even})</h3>`
    }
}

function mostrarAlertaOk() {
    Swal.fire({
        title: 'Score',
        text: `Su Score Final es de ${total} (${even})`,
        icon: 'success',
        confirmButtonText: 'Ok',
    })
}

function mostrarAlertaErr() {
    Swal.fire({
        title: 'Error',
        text: `Verifique la carga correcta del score en todos los hoyos.`,
        icon: 'error',
        confirmButtonText: 'Ok',
    })
}

let startR = document.querySelector('#round');
startR.addEventListener('click', borrarRonda);
function borrarRonda() {
    const scorer = document.getElementsByClassName("score")
    for (let score of scorer) {
        score.value = ''
    }
}