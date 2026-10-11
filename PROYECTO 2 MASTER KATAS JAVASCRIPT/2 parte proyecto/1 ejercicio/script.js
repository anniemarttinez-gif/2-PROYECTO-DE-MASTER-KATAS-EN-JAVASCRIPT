
const btn = document.querySelector('.showme');
console.log("1.1 Botón:", btn);

const h1Pillado = document.querySelector('#pillado');
console.log("1.2 H1 por ID:", h1Pillado);


const allP = document.querySelectorAll('p');
console.log("1.3 Todos los P:", allP);


const allPokemon = document.querySelectorAll('.pokemon');
console.log("1.4 Todos los Pokemon:", allPokemon);

const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log("1.5 Atributo data-function:", allTestMe);


console.log("1.6 Tercer personaje:", allTestMe[2]);