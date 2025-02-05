/**
 * Muestra un prompt para que el usuario introduzca una hora del día 
 * y luego muestra un saludo adecuado en inglés y francés basado en la hora introducida. *
 * @author Jesús Raigón Muñoz
 * @title Mostrar Prompt que interactúe con el usuario.
 * @description  Esta función solicita al usuario que introduzca una hora del día a través de un cuadro de diálogo 
 * y luego muestra un saludo adecuado en inglés y francés basado en la hora introducida. 
 * @function mostrarPrompt
 * @returns {void} No retorna un valor, solo muestra alertas basadas en la entrada del usuario.
 * */

function mostrarPrompt() {
  // Solicitar al usuario que introduzca una hora (indistinto números o cadena texto) y la convierte en un número entero.
  let hora = parseInt(prompt("Introduce una hora del dia"));
  //Verifica si la hora introducida es antes de las 12 del mediodía.
  if (hora < 12) {
    alert("A esa hora en inglés se saluda Good Morning y en francés Bonjour");
    //Verifica si la hora es antes de las 18pm
  } else if (hora < 18) {
    alert(
      "A esa hora en inglés se saluda Good Afternoon y en francés Bon Après-midi"
    );
    //Verifica si la hora es mayor de 24 y en caso afirmativo muestra el mensaje informando que no es valido.
  } else if (hora > 24) {
    alert("Ese horario no es valido");
    //Para cualquier hora diferente a las anteriores muestra ese saludo.
  } else {
    alert("A esa hora en inglés se saluda Good Evening y en francés Bonsoir");
  }
}
module.exports = { mostrarPrompt };