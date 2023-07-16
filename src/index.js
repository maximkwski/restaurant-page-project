import './style.css';
import header from './components/header.js';
import home from './components/home.js';
import footer from './components/footer.js';
import menu from './components/menu.js';

header();
home();
footer();

const navBar = document.querySelector('nav');
const ul = navBar.querySelector('ul');
ul.addEventListener('click', (e) => {
    const previousLi = ul.querySelector('.selected');
    if (previousLi) {
        previousLi.classList.remove('selected');
    }
    e.target.classList.add('selected');
    if (e.target.innerHTML === 'Home') {
        console.log('Home');
    } else if (e.target.innerHTML === 'Menu') {
        console.log('Menu');
    } else if (e.target.innerHTML === 'Reservations') {
        console.log('Reservations');
    } else {
        console.log('Contact');
    }
})



