// Importar la función a probar
const { mostrarPrompt } = require('./caso_practico');

// Simular prompt y alert
global.prompt = jest.fn();
global.alert = jest.fn();

describe('mostrarPrompt', () => {
  beforeEach(() => {
    // Limpiar los mocks antes de cada prueba
    prompt.mockClear();
    alert.mockClear();
  });

  test('debe mostrar Good Morning y Bonjour si la hora es menor que 12', () => {
    prompt.mockReturnValueOnce('10');
    mostrarPrompt();
    expect(alert).toHaveBeenCalledWith("A esa hora en inglés se saluda Good Morning y en francés Bonjour");
  });

  test('debe mostrar Good Afternoon y Bon Après-midi si la hora es menor que 18 y mayor o igual a 12', () => {
    prompt.mockReturnValueOnce('15');
    mostrarPrompt();
    expect(alert).toHaveBeenCalledWith("A esa hora en inglés se saluda Good Afternoon y en francés Bon Après-midi");
  });

  test('debe mostrar que el horario no es válido si la hora es mayor que 24', () => {
    prompt.mockReturnValueOnce('25');
    mostrarPrompt();
    expect(alert).toHaveBeenCalledWith("Ese horario no es valido");
  });

  test('debe mostrar Good Evening y Bonsoir si la hora es mayor o igual a 18 y menor o igual a 24', () => {
    prompt.mockReturnValueOnce('20');
    mostrarPrompt();
    expect(alert).toHaveBeenCalledWith("A esa hora en inglés se saluda Good Evening y en francés Bonsoir");
  });
});
