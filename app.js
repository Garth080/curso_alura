let numeroSecreto = 0
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento (elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

  }
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
     
    if (numeroSecreto === numeroUsuario){
      asignarTextoElemento(`p`, `Acertaste el numero en ${intentos} ${(intentos === 1) ?  "vez" : "veces"}`);
      document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
      if(numeroUsuario > numeroSecreto) {
        asignarTextoElemento("p", "el número es menor")
      }else { 
          asignarTextoElemento("p", "el número es mayor"); 
                
      }
    }
    intentos++;
    limpiarCaja();


    return;

}

function limpiarCaja() {
document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
  if(listaNumerosSorteados.length == numeroMaximo) {
     asignarTextoElemento("p","Ya se sortearon los numeros posibles");
  }
    else{

    //si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto()

    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado
    }

   }
  }
function condicionesIniciales() {
  asignarTextoElemento("h1", "juego del tumero secreto");
  asignarTextoElemento("p",`indicame un número del 1 al ${numeroMaximo} por favor`)
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}   

function reiniciarJuego()  {
  //limpiar caja
  limpiarCaja();
  //Inidicar msje de intervalod de número
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
} 
   
  
condicionesIniciales();

