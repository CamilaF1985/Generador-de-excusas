window.onload = function() {
  // Arrays para las diferentes partes de la excusa
  let quien = ["Mi perro", "Mi hermana", "El gato de mi vecino", "Un pájaro"];
  let accion = ["se comió", "mojó", "aplastó", "quemó"];
  let que = ["mi tarea", "las llaves", "el auto"];
  let cuando = [
    "antes de la clase",
    "cuando iba saliendo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras me duchaba"
  ]; 

  // Función para generar una excusa aleatoria
  function generarExcusa() {
    let quienAleatorio = quien[Math.floor(Math.random() * quien.length)];
    let accionAleatoria = accion[Math.floor(Math.random() * accion.length)];
    let queAleatoria = que[Math.floor(Math.random() * que.length)];
    let cuandoAleatoria = cuando[Math.floor(Math.random() * cuando.length)];

    return `${quienAleatorio} ${accionAleatoria} ${queAleatoria} ${cuandoAleatoria}`;
  }

  // Agregar un evento al botón (se hace click en el botón y este genera una excusa random)
  document.getElementById("botonGeneradorDeExcusas").addEventListener("click", function() {
    let excusa = generarExcusa();
    document.getElementById("contenidoExcusa").textContent = excusa;
    document.getElementById("modalDeExcusa").style.display = "block";
});

// Cierra el modal al hacer clic en la "x"
document.getElementById("cerrarModal").addEventListener("click", function () {
  document.getElementById("modalDeExcusa").style.display = "none";
});

// Función para crear el efecto typewriter
function typeWriter(textElement, text, delay, callback) {
  let charIndex = 0;
  const interval = setInterval(function () {
    if (charIndex < text.length) {
      textElement.innerHTML += text.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(interval);
      if (callback) {
        callback(); // Llama a la función de callback después de terminar de escribir el texto
      }
    }
  }, delay);
}

// Llamado a la función para aplicar el efecto typewriter al h1
const header1 = document.getElementById("encabezado1");
typeWriter(header1, "Generador de Excusas", 100, function () {
  // Llamado a la función para aplicar el efecto typewriter al h2 después de que h1 haya terminado
  const header2 = document.getElementById("encabezado2");
  typeWriter(header2, "Presione el botón para generar una excusa aleatoria:", 100);
});

console.log("Hola Rigo desde la consola!");
};