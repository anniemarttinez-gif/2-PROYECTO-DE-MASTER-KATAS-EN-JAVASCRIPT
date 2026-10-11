const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const container = document.querySelector('#main-container');

const sectionTitle = document.createElement('h2');
sectionTitle.textContent = "Lista de Clásicos";

const ul = document.createElement('ul');

albums.forEach((album) => {
    const li = document.createElement('li');


    li.innerHTML = `
        <span class="album-name">${album}</span>
    `;

    ul.appendChild(li);
});

container.appendChild(sectionTitle);
container.appendChild(ul);