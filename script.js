
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const password = document.getElementById('password');

const nombreError = document.getElementById('nombreError');
const telefonoError = document.getElementById('telefonoError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validarNombre() {
  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
  if (!regex.test(nombre.value)) {
    nombreError.style.display = "block";
    return false;
  } else {
    nombreError.style.display = "none";
    return true;
  }
}

function validarTelefono() {
  const regex = /^[0-9]+$/;
  if (!regex.test(telefono.value)) {
    telefonoError.style.display = "block";
    return false;
  } else {
    telefonoError.style.display = "none";
    return true;
  }
}

function validarEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}

function validarPassword() {
  if (password.value.length < 8) {
    passwordError.style.display = "block";
    return false;
  } else {
    passwordError.style.display = "none";
    return true;
  }
}

// Escuchar cuando el usuario escribe
nombre.addEventListener("input", validarNombre);
telefono.addEventListener("input", validarTelefono);
email.addEventListener("input", validarEmail);
password.addEventListener("input", validarPassword);

// Validar al enviar el formulario
document.getElementById('registroForm').addEventListener('submit', function(e) {
  let valido = true;
  if (!validarNombre()) valido = false;
  if (!validarTelefono()) valido = false;
  if (!validarEmail()) valido = false;
  if (!validarPassword()) valido = false;
  if (!valido) {
    e.preventDefault();
  }
});
