let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
// console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    // console.log(numeroDeUsuario)
    // console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', `El numero secreto es menor`);
        }
        else {
            asignarTextoElemento('p', `El numero secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.ceil(Math.random() * numeroMaximo);
    // console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        // listaNumerosSorteados = [];
        // return generarNumeroSecreto();
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    // Limpiar input
    limpiarCaja();

    // Mostrar texto inicial
    condicionesIniciales();

    // Desabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();