console.log("Hola, mundo desde un archivo externo!");

//let cadena ="Hola Mundo";
let nuevo = 42;
let logico = true;
let nulo = null;
let indefinido = undefined;
let simbolo = Symbol("foo");

let fecha = new Date();

console.table(objeto);
console.table(numeros);
console.log(sumar(30, 7));
console.log(fecha);

function sumar(a, b) {
return a + b;
}
//
let a = 5;
let b = 3;

let resultado = ((a + b -2)* 3) / 2;
console.log(resultado);
resultado += 1;

console.log(a > b);
console.log(a === b);

console.log(resultado % 3 == 0 ? "👍" : "👎");

let cadena = "Hola, " + "mundo";

console.log(cadena);
//
//let edad = 18;

if(edad >= 18){
    console.info("Eres mayor de edad");
}else {
    console.warn("Eres menor de edad")
}

//
let year = prompt("En que año naciste?");
let year_actual = new Date().getFullYear();
let edad = year_actual - year;

if (edad >= 18) {
    console.info("Eres mayor de edad");
} else if (edad >= 12 && edad < 18) {
    if (edad == 12) {
        console.log("Eres un preadolecente");
    } else {
        console.log("Eres un adolecente");
    }
} else {
    console.warn("Eres un niño");
}

/// liveserver
let dia = parseInt(prompt("Ingresa al numero del 1 al 7"));

switch (dia) {
    case 1:
        console.log("Lunes");
        breack;
    case 2:
        console.log("Martes");
        breack;
    case 3: 
        console.log("Miercoles");
        breack;
    default:
        console.error("Dia no valido");
}

let resta=function (a,b) {
    return a-b;
};

console.log(resta(5,3));

let multiplicacion=(a,b) => a * b;

console.log(multiplicacion(5,3));

let objeto = {
    nombre: "Benja",
    saludar: function () {
        setTimeout(() => {
            console.log('Hola, soy ${this.nombre}');
        
        }, 1000);
    }
}

objeto.saludar();

let frutas = ["🍎", "🍐", "🍇", "🍓"];

frutas.push("🥭");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas); //🍌, 🍎, 🍐, 🍇

let frutas2 = frutas.slice(1, 3);
console.log(frutas2.join(" - ")); // 🍎 - 🍐
console.log(frutas.length);
console.log(frutas.indexOf("🍇")); // 3

let frutas3 = frutas.map((fruta) => fruta +"🍉");
console.table(frutas3);