
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del Número Secreto';

//let parrafo = document.querySelector('p');
//arrafo.innerHTML = 'Ingesa un nro entre 1 y 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento(){
    let NumeroIngresoUsuario = parseInt(document.getElementById('numeroIngresoUsuario').value);

    //console.log(`Este es el intento Nro: ${intentos}`)
    //console.log (`El usuario ingreso el ${NumeroIngresoUsuario}`);
    //console.log (`El tipo de datos es ${typeof(NumeroIngresoUsuario)}`);
    
    if (NumeroIngresoUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el Número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else {
        //El usuario no acertó

        if (NumeroIngresoUsuario > numeroSecreto){
            asignarTextoElemento('p', 'En Numero secreto es menor!');
        } else {
            asignarTextoElemento('p', 'En Número secreto es Mayor!');
        }
        intentos ++
        limpiarCaja();
    }
   
    return;
}

function limpiarCaja(){
    document.querySelector('#numeroIngresoUsuario').value = '';
}

function condicionesIniciales(){
    // aqui reducimos código ingresándole parámetros a la función y reiniciamos variebles.
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (`El numero generado es el ${numeroGenerado}`);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Se sortearon los Nros posibles');

    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else { 
            listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado;
        }
    }
}

condicionesIniciales();




