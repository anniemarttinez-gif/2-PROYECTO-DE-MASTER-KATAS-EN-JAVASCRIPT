const btn = document.querySelector('#btnToClick');
btn.addEventListener('click', (event) => {
    console.log('1.1 Información del evento de click:', event);
});

const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', (event) => {
    console.log('1.2 Valor del input al hacer focus:', event.target.value);
});
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
    console.log('1.3 Valor actual mientras escribes:', event.target.value);
});