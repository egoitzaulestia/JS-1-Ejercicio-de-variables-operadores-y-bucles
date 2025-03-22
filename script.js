//////////////////////////////////////////
// VARIABLES
//////////////////////////////////////////

console.log("VARIABLES")
console.log("//////////////////////////////////////////")
// Declara una variable <strong>var</strong> "numeroUno" y asígnale un valor numérico
var numeroUno = 1;
console.log(`La variable "numeroUno" es igual a: ${numeroUno}`)

// Declara una variable <strong>let</strong> "texto" y asígnale una cadena de texto
let texto = 'Hello World!';
console.log(`La variable "texto" es igual a: ${texto}`)

// cambia el valor de la variable "numeroUno" por otro número 
numeroUno = 3;
console.log(`La variable "numeroUno" es igual a: ${numeroUno}`)

// Declara una variable <strong>const</strong> "array" y asígnale un array de números y cadena de texto
const array = [1, 2, 3, 'cuatro', 'cinco'];
console.log(`La variable "array" es igual a: ${array}`)
console.log(array)

// Crea una variable <strong>let</strong> "numeroDos" y asígnale otro número
let numeroDos = 6;
console.log(`La variable "numeroDos" es igual a: ${numeroDos}`)


//////////////////////////////////////////
// OPERADORES
//////////////////////////////////////////

console.log("\nOPERADORES")
console.log("//////////////////////////////////////////")
// Suma la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log(`La suma de la variable "numeroUno" y "numeroDos" es igual a: ${numeroUno + numeroDos}`);

// Multiplica la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log(`La multiplicación de la variable "numeroUno" y "numeroDos" es igual a: ${numeroUno * numeroDos}`)

// Resta la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log(`La resta de la variable "numeroUno" y "numeroDos" es igual a: ${numeroUno - numeroDos}`)
// Divide la variable "numeroUno" a "numeroDos" y saca el resultado por consola
console.log(`Ladivision de la variable "numeroUno" y "numeroDos" es igual a: ${numeroUno / numeroDos}`)

// Eleva al cubo la variable "numeroUno" saca el resultado por consola
console.log(`La variable "numeroUno" elevado al cubo es igual a: ${numeroUno ** 3}`)

// Obten el resto de la variable "numeroUno" entre "numeroDos" y saca el resultado por consola
console.log(`El resto de la variable "numeroUno" y "numeroDos" es igual a: ${numeroUno % numeroDos}`)


//////////////////////////////////////////
// BUCLES
//////////////////////////////////////////

console.log("\nBUCLES")
console.log("//////////////////////////////////////////")

// Crea una variable con un array que se llame "numeros" y añade números dentro.
const numeros = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Calcula la suma de todos los números del array llamado "numeros". Saca el resultado en un console.log()
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    // suma = suma + numeros[i]
    suma += numeros[i]
}
console.log(`La suma de los elementos del array "numeros" es igual a: ${suma}`)

// Consigue el número más alto del array llamado "numeros". Saca el resultado en un console.log()
console.log(`El número más alto del array "numeros" es igual a: ${Math.max(...numeros)}`)

// Recorre el array llamado "numeros" y haz lo siguiente:
//// A cada uno de los números suma 1 si ese número es mayor o igual a 5. Si es menor que 5 resta 1.
//// Saca el resultado uno a uno en un console.log(), donde diga lo que ha hecho. 
//// Por ejemplo si ha sumado 1 a 6 debería aparecer: "ELEMENTO ITERADO" es mayor a 5. El resultado es "ELEMENTO ITERADO + 1".
//// PISTA: Si necesitas controlar que se cumpla esa condición (mayor o igual a 5) necesitarás usar un condicional. Por ejemplo:
//// if(numero[i] >= 5) { numero[i] + 1 } else { numero[i] - 1 }
suma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 5) {
        // numeros[i] = numeros[i] + 1;
        numeros[i] += 1;
    } else {
        // numeros[i] = numeros[i] -1;
        numeros[i] -= 1;
    }
    console.log(`Eelemento iterado número ${i}: ${numeros[i]}`)
}
console.log(`El array "numeros": ${numeros}`)

// Cuenta cuantos elementos hay en el array. Saca el resultado en un console.log()
console.log(`Numero de elementos en el array "nuemros es igual a: ${numeros.length}`)

// Cuenta cuantas veces se repiten las palabras. Saca el resultado en un console.log()
const numerosNew = [1, 1, 2, 3, 5, 8, 8, 13, 21, 34, 55]
let duplicados = [];

for (let i in numerosNew) {
    for (let j in numerosNew) {
        if (i !== j && numerosNew[i] === numerosNew[j] && !duplicados.includes(numerosNew[i])) {
            duplicados.push(numerosNew[i]);
        }
    }
}

console.log(`Los elementos duplicados son: ${duplicados}`); 

