let container = document.getElementById("titulo")
container.innerHTML = "<h2>Bienvenido a Tarjeta de Golf Virtual</h2>"
// let file = ''
function modificarPlantillaHoles() {
    const contenedor = document.getElementById("name");
    contenedor.innerHTML = `<div>
                                <select id="cancha" class="form-select" "aria-label="Default select example">
                                <option selected="Elija un campo">Elija un Campo</option>
                                <option value="cancha.json">Club Hípico de City Bell</option>
                                <option value="cancha2.json">UPCN</option>
                                </select>
                            </div>`
}
modificarPlantillaHoles();
let selection = document.querySelector('select')
let file=undefined
let tabla=''
let parDeCampo=0
selection.addEventListener('change', () => {
    file = selection.options[selection.selectedIndex].value;
    console.log(file)
    return file
})
function waitForElement(){
    if(typeof file !== "undefined"){
        console.log(file)
        tabla = document.querySelector('#lista');
        cargarCancha();
        let puntos = document.querySelector('#puntos');
        puntos.addEventListener("click", storeScore);
        let startR = document.querySelector('#round');
        startR.addEventListener('click', borrarRonda);
    }
    else{
        // console.log("Elija un campo")
        setTimeout(waitForElement, 250);
    }
}
waitForElement();

function cargarCancha() {
    fetch(`./assets/courses/${file}`)
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
    even = total - parDeCampo;
    if (even == 0) {
        even = 'E'
    } else if (even < 0) {
        even = `${even}`
    } else {
        even = `+${even}`
    }
    if (isNaN(total)) {
        mostrarAlertaErr()
        document.getElementById("final").innerHTML = `<h3 class="final">Error, verifique la carga correcta del score en todos los hoyos.</h3>`
    } else {
        mostrarAlertaOk()
        document.getElementById("final").innerHTML = `<h3 class="final">Su score final es de ${total} (${even})</h3>`
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

function borrarRonda() {
    const scorer = document.getElementsByClassName("score")
    for (let score of scorer) {
        score.value = ''
    }
    location.reload()
}
