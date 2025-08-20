// validaciones.js

function validarNombre(nombre) {
  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
  return regex.test(nombre);
}

function validarTelefono(telefono) {
  const regex = /^[0-9]+$/;
  return regex.test(telefono);
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarPassword(password) {
  return password.length >= 8;
}

module.exports = {
  validarNombre,
  validarTelefono,
  validarEmail,
  validarPassword
};
