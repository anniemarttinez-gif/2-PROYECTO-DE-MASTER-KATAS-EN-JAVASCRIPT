/* --- EJERCICIO 1 --- */
let miSuperheroeFavorito = "Hulk";
let numeroFavorito = 50;
let altura = 5;
let longitud = 10;
let suma = altura + longitud;

console.log("Superhéroe:", miSuperheroeFavorito);
console.log("Número:", numeroFavorito);
console.log("La suma es:", suma);

/* --- EJERCICIO 2: --- */
const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;

let nombre = "Leia";
let apellido = "Organa";
let edad = 20;
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };
let precioTotalSables = sable1.precio + sable2.precio;
console.log("Precio total sables:", precioTotalSables);


let precioBaseGlobal = 25000;
const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;
console.log("Precio final Ala-X:", nave1.precioFinal);
console.log("Precio final Halcón:", nave2.precioFinal);

/* --- EJERCICIO 3: --- */
console.log("Multiplicación 10*5:", 10 * 5);
console.log("División 10/2:", 10 / 2);
console.log("Resto de 15/9:", 15 % 9);

let p = 10;
let j = 5;
let o = p + j;

let c = 10;
let m = 5;
let i = c * m;

/* --- EJERCICIO 4:  --- */
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log("4.1:", aldeanos[3]);

aldeanos.push("Cervasio");


aldeanos.reverse();

const indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) {
    aldeanos.splice(indiceNarciso, 1, "Canela");
}


console.log("4.6 - Último aldeano:", aldeanos[aldeanos.length - 1]);


/* --- EJERCICIO 5: --- */
const number1 = 10;
const number2 = 20;
const number3 = 2;

console.log("--- EJERCICIO 5 ---");

if (number2 / number1 === 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
}

if (number3 !== number1) {
    console.log("number3 es distinto number1");
}

if (number3 * 5 === number1) {
    console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 === number1 && number1 * 2 === number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 === number1 || number1 / 5 === number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");

}
/* --- EJERCICIO 6:  --- */
console.log("\n--- EJERCICIO 6 ---");
// 6.1 Bucle de 0 a 9
for (let i = 0; i < 10; i++) {
    console.log("Vuelta número: " + i);
}


for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log("Número par: " + i);
    }
}


for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        console.log("Intentando dormir 🐑");
    } else {
        console.log("¡Dormido!");
    }
}

/* --- EJERCICIO 7: --- */
function greaterNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log("El más alto es: " + numberOne);
    } else {
        console.log("El más alto es: " + numberTwo);
    }
}
greaterNumber(10, 20);

/* --- EJERCICIO 8: --- */
const avengers = ["Hulk", "Thor", "Iron Man", "Captain A.", "Spiderman", "Captain M."];
function findLongestWord(stringList) {
    let longest = stringList[0];
    for (let i = 1; i < stringList.length; i++) {
        if (stringList[i].length > longest.length) {
            longest = stringList[i];
        }
    }
    return longest;
}
console.log("La palabra más larga es:", findLongestWord(avengers));

/* --- EJERCICIO 9: --- */
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumNumbers(numberList) {
    let total = 0;
    for (let num of numberList) {
        total += num;
    }
    return total;
}
console.log("Suma total del array:", sumNumbers(numbers));

/* --- EJERCICIO 10: --- */
function average(numberList) {
    let sum = sumNumbers(numberList);
    return sum / numberList.length;
}
const numbersAvg = [12, 21, 38, 5, 45, 37, 6];
console.log("El promedio es:", average(numbersAvg));

/* --- EJERCICIO 11:  --- */
const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];
function averageWord(list) {
    let sum = 0;
    for (let item of list) {
        if (typeof item === "number") {
            sum += item;
        } else {
            sum += item.length;
        }
    }
    return sum / list.length;
}
console.log("Promedio mezclado:", averageWord(mixedElements));

/* --- EJERCICIO 12:s --- */
const duplicates = ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda'];
function removeDuplicates(list) {
    let unique = [];
    for (let item of list) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}
console.log("Array sin duplicados:", removeDuplicates(duplicates));

/* --- EJERCICIO 13 --- */
const names = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'];
function nameFinder(nameList, nameToFind) {
    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === nameToFind) {
            return { exists: true, position: i };
        }
    }
    return { exists: false };
}
console.log("¿Existe Tony?:", nameFinder(names, "Tony"));

/* --- EJERCICIO 14: --- */
const words = ['code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'sleep', 'code'];
function repeatCounter(list) {
    let counter = {};
    for (let word of list) {
        if (counter[word]) {
            counter[word]++;
        } else {
            counter[word] = 1;
        }
    }
    return counter;
}
console.log("Conteo de palabras:", repeatCounter(words));

/* --- EJERCICIO 15: --- */
const products = ["Camiseta de Metallica", "Pantalón vaquero", "Gorra de beisbol", "Camiseta de Basket", "Cinturón de Orión", "AC/DC Camiseta"];
console.log("\n--- EJERCICIO 15 ---");
for (const product of products) {
    if (product.includes("Camiseta")) {
        console.log(product);
    }
}

/* --- EJERCICIO 16:--- */
const placesToTravel = ["Japon", "Venecia", "Murcia", "Santander", "Filipinas", "Madagascar"];
console.log("\n--- EJERCICIO 16 ---");
for (const place of placesToTravel) {
    console.log(place);
}

/* --- EJERCICIO 17*/
const alien = { name: 'Xenomorph', species: 'Xenomorph XX121', origin: 'Unknown', weight: 180 };
console.log("\n--- EJERCICIO 17 ---");
for (const key in alien) {
    console.log("La propiedad " + key + " tiene cómo valor: " + alien[key]);
}

/* --- EJERCICIO 18: --- */
const placesWithId = [
    { id: 5, name: "Japan" },
    { id: 11, name: "Venecia" },
    { id: 23, name: "Murcia" },
    { id: 40, name: "Santander" },
    { id: 44, name: "Filipinas" },
    { id: 59, name: "Madagascar" },
];
console.log("\n--- EJERCICIO 18 ---");
for (let i = 0; i < placesWithId.length; i++) {
    if (placesWithId[i].id === 11 || placesWithId[i].id === 40) {
        placesWithId.splice(i, 1);
        i--;
    }
}
console.log(placesWithId);

/* --- EJERCICIO 19:  --- */
const toys = [
    { id: 5, name: 'Transformers' },
    { id: 11, name: 'LEGO' },
    { id: 23, name: 'Hot Wheels' },
    { id: 40, name: 'Rascador de gato' },
    { id: 40, name: 'FurReal Friends gato interactivo' },
    { id: 60, name: 'Nerf Blaster' },
    { id: 71, name: 'Sylvanian Families - Familia gato' }
];
const filteredToys = [];
for (const toy of toys) {
    if (!toy.name.includes("gato")) {
        filteredToys.push(toy);
    }
}
console.log("\n--- EJERCICIO 19 (Sin gatos) ---");
console.log(filteredToys);

/* --- EJERCICIO 20: --- */
const popularToys = [];
const allToys = [
    { id: 101, name: 'Super Soaker', sellCount: 15 },
    { id: 102, name: 'Tamagotchi', sellCount: 22 },
    { id: 103, name: 'Polly Pocket', sellCount: 8 },
    { id: 104, name: 'Yo-yo', sellCount: 33 }
    // 
];
for (const toy of allToys) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}
console.log("\n--- EJERCICIO 20 (Populares) ---");
console.log(popularToys);

/* --- EJERCICIO 21: --- */
const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];
console.log("\n--- EJERCICIO 21 ---");
console.log("Usuarios menores de edad:");
for (const user of users) {
    if (user.years < 18) console.log(user.name);
}
console.log("Usuarios mayores de edad:");
for (const user of users) {
    if (user.years >= 18) console.log(user.name);
}

/* --- EJERCICIO 23: --- */
const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Spirited Away", durationInMinutes: 80 }
];
const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];
for (const movie of movies) {
    if (movie.durationInMinutes < 100) smallMovies.push(movie);
    else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) mediumMovies.push(movie);
    else largeMovies.push(movie);
}

/* --- EJERCICIO 29: --- */
const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'The Phantom Menace', releaseYear: 1999 }
];
const moviesByDecade = {};
for (const movie of starWarsMovies) {
    const decade = Math.floor(movie.releaseYear / 10) * 10;
    if (!moviesByDecade[decade]) {
        moviesByDecade[decade] = [];
    }
    moviesByDecade[decade].push(movie.title);
}
console.log("\n--- EJERCICIO 29 (Por décadas) ---");
console.log(moviesByDecade);

/* --- EJERCICIO 32:--- */
function findOldestXMen(list) {
    let oldest = list[0];
    for (const xman of list) {
        if (xman.year < oldest.year) oldest = xman;
    }
    return oldest;
}

/* --- EJERCICIO 36: --- */
function calculateActorsAges(actors) {
    const currentYear = new Date().getFullYear();
    const ages = [];
    for (const actor of actors) {
        ages.push({ name: actor.name, age: currentYear - actor.born });
    }
    return ages;
}

/* --- EJERCICIO 41: --- */
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
console.log("\nEJERCICIO 41: Tirada de dado (6 caras):", rollDice(6));

/* --- EJERCICIO 42: --- */
function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
const fantasticFour = ["La antorcha humana", "Mr. Fantástico", "La mujer invisible", "La cosa"];
console.log("\nEJERCICIO 42 (Swap):", swap(fantasticFour, 0, 3));