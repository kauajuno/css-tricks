const button = document.querySelector('#toggle-button');
const headerText = document.querySelector('.header-text');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if(headerText.innerHTML === 'DAY TIME EXPERIMENT')
        headerText.innerHTML = 'NIGHT TIME EXPERIMENT';
    else
        headerText.innerHTML = 'DAY TIME EXPERIMENT';
}

console.log(button);
button.addEventListener('click', toggleDarkMode);