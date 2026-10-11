/* --- EJERCICIO 1:--- */
{
    const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
    const { title, gender, year } = game;
    console.log("1.1:", title, gender, year);

    const fruits = ['Banana', 'Strawberry', 'Orange'];
    const [fruit1, fruit2, fruit3] = fruits;

    const animalFunction = () => ({name: 'Bengal Tiger', race: 'Tiger'});
    const { name, race } = animalFunction();

    const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };
    const { name: carName, itv } = car;
    const [y1, y2, y3] = itv;
}

/* --- EJERCICIO 2: --- */
{
    const pointsList = [32, 54, 21, 64, 75, 43];
    const pointsCopy = [...pointsList];
    const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
    const toyCopy = {...toy};
}

/* --- EJERCICIO 3 y 4: --- */
{
    const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'}, {id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
    const names = users.map(u => u.name);
    
    const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
    const over18 = ages.filter(a => a > 18);
}

/* --- EJERCICIO 6 y 7: --- */
{
    const exams = [{score: 5}, {score: 1}, {score: 6}, {score: 7}, {score: 10}];
    const total = exams.reduce((acc, curr) => acc + curr.score, 0);
    console.log("6.1 Total notas:", total);
}


/* --- EJERCICIO 5: --- */
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputFilter = document.querySelector('[data-function="toFilterStreamers"]');

if (inputFilter) {
    inputFilter.addEventListener('input', (event) => {
        const userInput = event.target.value.toLowerCase();
        const filtered = streamers.filter(s => s.name.toLowerCase().includes(userInput));
        console.log("Resultados búsqueda:", filtered);
    });
}

/* --- EJERCICIO 8: --- */
const characterSelect = document.querySelector('#character-list');
const characterImg = document.querySelector('.character-image');

if (characterSelect) {
    const fetchCharacters = async () => {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await response.json();
        
        data.forEach(char => {
            const option = document.createElement('option');
            option.value = char.imageUrl;
            option.textContent = char.fullName;
            characterSelect.appendChild(option);
        });
    };

    characterSelect.addEventListener('change', (e) => {
        characterImg.src = e.target.value;
    });

    fetchCharacters();
}

/* --- EJERCICIO 9: POKÉMON --- */
const pokeImg = document.querySelector('.random-image');

if (pokeImg) {
    const fetchPokemon = async () => {
        const randomId = Math.floor(Math.random() * 151) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        pokeImg.src = data.sprites.other['official-artwork'].front_default;
    };
    fetchPokemon();
}