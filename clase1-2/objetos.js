/***************************************/
//               ARRAYS
/***************************************/

// Array Literal
var arrayLiteral = [ 'perro', 'gato', 'conejo' ];

// Longitud de un array
console.log(arrayLiteral.length); // 3

arrayLiteral[ 3 ] = 'Dino';
console.log(arrayLiteral.length); // 4

arrayLiteral.push('Un nuevo Dino');
console.log(arrayLiteral.length); // 4

arrayLiteral[ 'animal' ] = 'Otro Dino';
console.log(arrayLiteral.length); // 4

// Eliminar elemento
delete arrayLiteral.animal;

delete arrayLiteral[ 3 ];
console.log(arrayLiteral.length); // 4 | undefined en posición 3

arrayLiteral.splice(3,1);
// [undefined x 1]
console.log(arrayLiteral.length); // 3

// Un ARRAY es tambien OBJETO

console.log(typeof arrayLiteral); // object
console.log(arrayLiteral.constructor === Array); // true

console.log(typeof arrayLiteral.length === 'number');

console.log(typeof arrayLiteral.splice === 'function');

// Metodos generales

var primero = [1,2];
var segundo = ['hola', 'como', 'estas'];

console.log(primero.concat(segundo));
console.log(primero.join(','));
console.log(primero.slice(0,1));// [1]

// Metodos que modifican el Array
console.log(primero.pop());// [1]
primero = [1,2];
console.log(primero.reverse()); // [2,1]
primero = [1,2];
console.log(primero.shift()); // [2]
primero = [1,2];
console.log(primero.unshift(0,1)); // [2]
primero = [1,2];

// Nuevos metodos para el array
Array.prototype.ejecutarFuncion = function(f){
  return f(this);
};

function mostrar(valor) {
  return valor;
}

var numeros = [1,2,3,4,5];

numeros.ejecutarFuncion(mostrar);

/***************************************/
//               OBJETOS
/***************************************/

// Objeto Literal
var objeto = {
      nombre: 'Oso',
      edad: 12,
      'fecha-de-ingreso': '11/11/2011'
    };

// Obtener datos
console.log(objeto['fecha-de-ingreso']);
console.log(objeto.nombre);
console.log(objeto.noHay);// undefined
console.log(objeto.noHay.enserio); // TypeError
console.log(objeto.noHay && objeto.noHay.enserio); // undefined

objeto['fecha-de-ingreso'] = 'Aqui va una fecha';
console.log(objeto['fecha-de-ingreso']);

objeto.nombre = 'Abeja';
objeto.nuevo = {numero:1};
console.log(objeto);

var uno = {};
var dos = uno;
dos.uy = 12;
console.log(dos);

// Creando objetos
var otroUno = Object.create(uno);
otroUno.omg = 12;
otroUno.lol = 666;
console.log(uno);

otroUno.ops = function(){};

for(var pos in otroUno){
  console.log(otroUno[pos]);
  console.log(pos);
}

console.log(otroUno.hasOwnProperty('omg'));

// for(var pos in otroUno){
//   if(typeof otroUno[pos] !== 'function' ){
//     console.log('asd');
//     console.log(otroUno[pos]);
//     console.log(pos);
//   }
// }

//delete otroUno.ops;

// Creacion de Objetos y constructores

function Persona(nombre) {
  this.nombre = nombre;
}

var developer = new Persona('Julio');

var Persona2 = function (nombre) {
  this.nombre = nombre;
};

var newDeveloper = new Persona2('Otro Julio');

Persona.prototype.caminar = function () {
  console.log('yo camino');
};



// Constructor (Malo)
// function Persona3(nombre,apellido) {
//   this.nombre = nombre.toString();
//   this.apellido = apellido.toString();
//
//   this.getNombre = function() {
//       return this.nombre;
//   };
//
//   this.getApellido = function() {
//     return this.apellido;
//   }
// }
