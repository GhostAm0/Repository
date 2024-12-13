// Función para el botón con "onclick"
function saludar() {
    const salida = document.getElementById("salida_boton");
    if (salida) {
        salida.innerText = "¡Hola, este es un saludo desde JavaScript!";
    }
}

// Función para el botón con addEventListener
const otroBoton = document.getElementById("otro_boton");
const salidaOtro = document.getElementById("salida_otro");

if (otroBoton && salidaOtro) {
    otroBoton.addEventListener("click", () => {
        salidaOtro.innerText = "Este es otro mensaje usando addEventListener.";
    });
}

// Función para manejar eventos de entrada en el input
const nombreInput = document.getElementById("nombre");
const salidaTeclado = document.getElementById("salida_teclado");

if (nombreInput && salidaTeclado) {
    nombreInput.addEventListener("input", (event) => {
        const valor = event.target.value;
        salidaTeclado.innerText = valor
            ? `Escribiste: ${valor}`
            : "Nada todavía";
    });
}

// Función para sumar valores de A y B en el formulario
const miForm = document.getElementById("miForm");
const salidaSuma = document.getElementById("salida_suma");

if (miForm && salidaSuma) {
    miForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar el envío del formulario

        const valorA = parseFloat(document.getElementById("a").value) || 0;
        const valorB = parseFloat(document.getElementById("b").value) || 0;

        const suma = valorA + valorB;
        salidaSuma.innerText = `La suma es: ${suma}`;
    });
}
