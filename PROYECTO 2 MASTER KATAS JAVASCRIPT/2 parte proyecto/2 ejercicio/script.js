const newDiv = document.createElement('div');
document.body.appendChild(newDiv);

const divWithP = document.createElement('div');
const pInside = document.createElement('p');
pInside.textContent = "Párrafo del ejercicio 2.2";
divWithP.appendChild(pInside);
document.body.appendChild(divWithP);

const divWithSixP = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo número ${i + 1} del bucle`;
    divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (const app of apps) {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);


const elementsToRemove = document.querySelectorAll('.fn-remove-me');
for (const element of elementsToRemove) {
    element.remove();
}

const allDivs = document.querySelectorAll('div');
const midP = document.createElement('p');
midP.textContent = 'Voy en medio!';

if (allDivs.length >= 2) {
    document.body.insertBefore(midP, allDivs[1]);
}
const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
for (const div of insertHereDivs) {
    const pInsideDiv = document.createElement('p');
    pInsideDiv.textContent = 'Voy dentro!';
    div.appendChild(pInsideDiv);
}