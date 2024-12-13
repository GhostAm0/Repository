let nombre = prompt("¿Cómo te llamas?");

if (nombre) {
    alert(`Hola ${nombre}`);
} else {
    alert("Anónimo");
}

let lista = document.getElementById("log");

function registro(texto) {
    let item = document.createElement("li");
    item.innerText = texto;
    return item;
}

if (lista) {
    lista.appendChild(registro("DOM LOADED!"));
}

let timer = setTimeout(() => {
    if (lista) {
        lista.appendChild(registro("Timer a los tres segundos"));
    }
}, 3000);

let repetidor = setInterval(() => {
    if (lista) {
        lista.appendChild(registro("Cada 1.5 seg"));
    }
}, 1500);

let activaTimerBtn = document.getElementById("activaTimer");
let stopBtn = document.getElementById("pararRepetidor");

if (activaTimerBtn) {
    activaTimerBtn.addEventListener("click", function () {
        if (lista) {
            lista.appendChild(registro("Inicia Timer..."));
        }
    });
}

if (stopBtn) {
    stopBtn.addEventListener("click", function () {
        if (lista) {
            lista.appendChild(registro("Parar repetidor..."));
        }
        clearInterval(repetidor);
    });
}

console.table(location);

let secure = document.getElementById("secure");
if (secure) {
    if (location.protocol === "https:") {
        secure.innerText = "Seguro";
    } else {
        secure.innerText = "No seguro";
    }
}

console.table(navigator);

// Ejemplo de manejo de fechas comentado (se puede usar si lo necesitas en el futuro)
/*
let fecha_actual = new Date();
console.log(fecha_actual.getFullYear());
console.log(fecha_actual.getMonth());
console.log(fecha_actual.getDate());
console.log(fecha_actual.getHours());
console.log(fecha_actual.getMinutes());
console.log(fecha_actual.getSeconds());

let navidad_2024 = new Date("2024-12-24 12:00:00");
let fin_2024 = new Date(2024, 11, 31, 23, 59, 59);
*/
