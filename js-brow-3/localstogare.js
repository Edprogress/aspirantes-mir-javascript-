const form = document.querySelector('form');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const nombreGuardado = document.getElementById('nombre-guardado');
const emailGuardado = document.getElementById('email-guardado');
const botonBorrar = document.getElementById('borrar');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = inputNombre.value;
  const email = inputEmail.value;
  const datos = {
    nombre: nombre,
    email: email
  };
  localStorage.setItem('datos', JSON.stringify(datos));
  mostrarDatosGuardados();
});

botonBorrar.addEventListener('click', function() {
  localStorage.removeItem('datos');
  mostrarDatosGuardados();
});

function mostrarDatosGuardados() {
  const datosJSON = localStorage.getItem('datos');
  if (datosJSON) {
    const datos = JSON.parse(datosJSON);
    nombreGuardado.textContent = datos.nombre;
    emailGuardado.textContent = datos.email;
  } else {
    nombreGuardado.textContent = 'No hay datos.';
    emailGuardado.textContent = '';
  }
}

mostrarDatosGuardados();

