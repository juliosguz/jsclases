/*
CLOSURE:
Son funciones que recuerdan el contexto donde fueron creadas.
*/

function cajaBase() {
  var item = 'Pelota';

  // Closure
  function mostrarContenido() {
    console.log(item);
  }

  return mostrarContenido;
}

function generoBase(genero) {
  //Closure
  return function(nombre) {
    return nombre + ' es del genero ' +genero;
  }
}

var letras = [{},{},{}];

for ( var i = 0; i<letras.length; i++) {
  (function(position) {
    // Closure
    letras[ position ].llamado = function(){
      console.log(position);
    };
  })(i);
}











////
