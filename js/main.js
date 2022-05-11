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
                    <td>${Hoyo.Hoyo}</td> <td>${Hoyo.Par}</td> <td><input class="score" type="number" name="tiros" min="1"></input></td>
                `;
                tabla.appendChild(row);
                // console.log(Hoyo);
            })
        })
}
cargarCancha();

let startR = document.querySelector('#round');
startR.addEventListener('click', borrarRonda);
function borrarRonda() {
    const scorer = document.getElementsByClassName("score")
    for (let score of scorer) {
        score.value = ''
    }
}
let puntos = document.querySelector('#puntos');
puntos.addEventListener("click", storeScore);
function storeScore() {
    const scorer = document.getElementsByClassName("score")
    total = 0
    for (let score of scorer) {
        total = parseInt(score.value) + total
    }
    // console.log(scorer)
    even = total - 72;
    if (even == 0) {
        even = 'E'
    }
    mostrarAlerta()
    document.getElementById("final").innerHTML = `<h3>Su score final es de ${total} (${even})</h3>`

}

function mostrarAlerta() {
    Swal.fire({
        title: 'Score',
        text: `Su Score Final es de ${total} (${even})`,
        icon: 'success',
        confirmButtonText: 'Ok',
    })
}
