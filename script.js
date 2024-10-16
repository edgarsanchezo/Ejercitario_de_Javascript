//Ejercicio 1: Almacenar datos
const nombre = "Edgar"; // Tipo de dato: string
const edad = 41; // Tipo de dato: number
const esEstudiante = false; // Tipo de dato: boolean

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante de programación:", esEstudiante);

//Ejercicio 2: Automatizar operaciones
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 500; i++) {
    if (i % 2 === 0) {
        // Solo pares
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//Ejercicio 3: Cuál es el Área?
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularAreaCuadrado(lado) {
    return lado * lado;
}

console.log("Área del triángulo:", calcularAreaTriangulo(5, 10));
console.log("Área del cuadrado:", calcularAreaCuadrado(4));


//Ejercicio 4: Cuál es mayor?
function cualEsMayor(num1, num2) {
    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else if (num1 < num2) {
        return `${num2} es mayor que ${num1}`;
    } else {
        return `${num1} y ${num2} son iguales`;
    }
}

console.log(cualEsMayor(10, 20));


//Ejercicio 5: Antecesor alfabético
function compararPalabras(palabra1, palabra2) {
    if (palabra1 < palabra2) {
        console.log(`${palabra1} viene antes que ${palabra2}`);
    } else if (palabra1 > palabra2) {
        console.log(`${palabra2} viene antes que ${palabra1}`);
    } else {
        console.log(`${palabra1} y ${palabra2} son iguales`);
    }
}

compararPalabras("joel", "josé");

