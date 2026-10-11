
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
for (const country of countries) {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);

const toRemove = document.querySelector('.fn-remove-me');
if (toRemove) toRemove.remove();


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
for (const car of cars) {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
}
printHereDiv.appendChild(ulCars);

const countriesObj = [
	{title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const item of countriesObj) {
    const div = document.createElement('div');
    div.className = 'country-card'; 
    

    div.innerHTML = `
        <h4>${item.title}</h4>
        <img src="${item.imgUrl}" alt="${item.title}">
    `;


    const btnDeleteThis = document.createElement('button');
    btnDeleteThis.textContent = 'Eliminar este elemento';
    btnDeleteThis.addEventListener('click', function() {
        div.remove();
    });

    div.appendChild(btnDeleteThis);
    document.body.appendChild(div);
}


const btnDeleteLast = document.createElement('button');
btnDeleteLast.textContent = 'ELIMINAR ÚLTIMO DIV';
btnDeleteLast.style.display = 'block';
btnDeleteLast.style.marginTop = '20px';

btnDeleteLast.addEventListener('click', function() {
    const allCards = document.querySelectorAll('.country-card');
    if (allCards.length > 0) {
        allCards[allCards.length - 1].remove();
    }
});

document.body.appendChild(btnDeleteLast);