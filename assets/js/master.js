window.addEventListener("load", function (){

  //Elementos para aparecer el modal
  var botonModalAgregar = document.getElementsByClassName("boton-agregar")[0];
  var modalContacto = document.getElementsByClassName("modal-contacto")[0];

  //Elementos para cerrar el modal
  var botonModalCerrar = document.getElementsByClassName("modal-boton-cancelar")[0];

  // eventos del boton que aparece modal
  botonModalAgregar.addEventListener("click", mostrarModal);

  // eventos del boton que cierra modal
  botonModalCerrar.addEventListener("click", cerrarModal);

  // funcion para aparecer modal
  function mostrarModal () {
    modalContacto.style.display = "block";
  }

  function cerrarModal () {
    modalContacto.style.display = "none";
  }

});
