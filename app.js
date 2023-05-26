const eleccionComputadora = document.getElementById('Computadora')
const eleccionJugador = document.getElementById('Jugador')
const resultadoPartida = document.getElementById('Resultado')
const eleccionesPosibles = document.querySelectorAll('button')

const PIEDRA = eleccionesPosibles[0].id
const PAPEL = eleccionesPosibles[1].id
const TIJERA = eleccionesPosibles[2].id

const EMPATE = "Empate!"
const JUGADORGANA = "Has Ganado!"
const JUGADORPIERDE = "Has Perdido!"

let opcionSeleccionadaJugador
let opcionSeleccionadaComputadora
let resultado

eleccionesPosibles.forEach(posibleEleccion => posibleEleccion.addEventListener('click', (e) => {
    opcionSeleccionadaJugador = e.target.id
    eleccionJugador.innerHTML = opcionSeleccionadaJugador
    generarEleccionComputadora()
    obtenerResultado()
}
) )

function generarEleccionComputadora(){
    const aleatorio = Math.floor(Math.random() * eleccionesPosibles.length) 
    opcionSeleccionadaComputadora = eleccionesPosibles[aleatorio].id
    eleccionComputadora.innerHTML  = opcionSeleccionadaComputadora
    
}

function obtenerResultado(){
    if(opcionSeleccionadaJugador === opcionSeleccionadaComputadora){
        resultado = EMPATE
    } else if( opcionSeleccionadaJugador === PAPEL && opcionSeleccionadaComputadora === PIEDRA ){
        resultado = JUGADORGANA
    }else if(opcionSeleccionadaJugador ===  TIJERA && opcionSeleccionadaComputadora === PAPEL){
        resultado = JUGADORGANA
    }else if(opcionSeleccionadaJugador ===  PIEDRA && opcionSeleccionadaComputadora === TIJERA){
        resultado = JUGADORGANA
    }else{
        resultado = JUGADORPIERDE
    }
    resultadoPartida.innerHTML = resultado

}