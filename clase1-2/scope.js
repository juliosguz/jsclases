/*

SCOPE:
Ambito de una variable, su alcance en el lugar de creación.
El Scope global va directamente hace el objeto Window.

Tiempo de vida de una variable:
- Variable local: eliminada hasta que se termine de ejecutar la función

- Variable global: hasta que se cierre el navegador

Por convención, se debe escribir las funciones y variables:

var estoEsUnaVariableLarga = 1;
function estoEsUnaFuncion() {}
function Persona() {} -> constructor o modulos

*/

// Variable global
var x = 1;

var objetoLiteral = { };

var arrayLocal = [ ];

// Función
function local() {
  // Variable local
  var y = 34;
}

function global() {
  // Variable global
  z = 20;
}

function variablesGlobales() {
  console.log('Window.x:' + window.x);
  console.log('Window.y:' + window.y);
  console.log('Window.z:' + window.z);
  console.log('Document:' + document);
}

function ejemploAlert() {
  alert(document);
  console.log(document);
}

// Contexto Global

//
// console.log(this === window);

function contextoGlobal() {
  // this se asocia al contexto global: window
  return this;
}

function contextoEstricto() {
  'use strict';
  // this se asocia al contexto de la función
  return this;
}

var objeto = {
  atributo: 'Atributo',
  nombre: 'Julio Silva',
  funcion: function() {
    // this se asocia con el objeto mas inmediato
    return this.atributo;
  },
  otroObjeto: {
    color:'Negro',
    mostrar: function() {
      return this.color;
    }
  }
};

// Uso de call y apply

function suma(x,y) {
  return this.a + this.b + x + y;
}

var total = { a:1, b:2 };

// Con "call" se llama a una funcion y se le asigna argumentos de forma individual
console.log(suma.call(total,1,1));
// Con "apply" se llama a una funcion y se le asigna argumentos con un array
console.log(suma.apply(total,[1,2]));

// Uso de bind para enlazar funciones

var valor = 12;

var modulo = {
  valor: 1986,
  getValor: function() {
    return this.valor;
  }
};

var metodo = modulo.getValor;
console.log(metodo()); // 12

var metodo2 = metodo.bind(modulo);
console.log(metodo2()); //1986
