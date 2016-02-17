// FUNCIONES

function normal() {
  console.log('No domino :(');
}

function meEjecutoSolo() {
  console.log('Domino!');
}

// Function autoejecutable
(meEjecutoSolo)();

// Funcion anonima autoejecutable
(function() {
  // Codigo que se ejecutara solo
})();

// Función autoejecutable por Douglas Crockford
(function(){
  // Codigo que se ejecutara solo
}());

// Función anonima con parametros y reescribir variable reservada
(function(w, undefined) {
  // console.log(w);
  // console.log(undefined);
})(window);

// Module Pattern
var app = (function() {
  var name = 'Best application ever!';
  var author = 'Julio Silva';

  function getAuthor() {
    return author;
  }

  return {
    name : name,
    author : getAuthor
  }
})();
