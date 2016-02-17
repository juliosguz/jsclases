// OBJETOS

function Persona(nombre,apellido) {
  this.nombre = nombre.toString();
  this.apellido = apellido.toString();

  this.getNombre = function() {
      return this.nombre;
  };

  this.getApellido = function() {
    return this.apellido;
  }
}
