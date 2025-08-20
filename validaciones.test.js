// validaciones.test.js
const {
  validarNombre,
  validarTelefono,
  validarEmail,
  validarPassword
} = require('./validaciones');

describe('Validaciones de formulario', () => {
  test('Nombre válido', () => {
    expect(validarNombre('Juan Perez')).toBe(true);
    expect(validarNombre('María López')).toBe(true);
    expect(validarNombre('Ana¡')).toBe(false);
    expect(validarNombre('juan¡')).toBe(false);
  });

  test('Teléfono válido', () => {
    expect(validarTelefono('1234567890')).toBe(true);
    expect(validarTelefono('12345q')).toBe(false);
    expect(validarTelefono('123¡')).toBe(false);
  });

  test('Email válido', () => {
    expect(validarEmail('correo@dominio.com')).toBe(true);
    expect(validarEmail('correo@dominio')).toBe(false);
    expect(validarEmail('correo.com')).toBe(false);
  });

  test('Contraseña válida', () => {
    expect(validarPassword('12345678')).toBe(true);
    expect(validarPassword('abcd1234')).toBe(true);
    expect(validarPassword('1234')).toBe(false);
    expect(validarPassword('abc')).toBe(false);
  });
});
