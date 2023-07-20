import './style.css';
import header from './components/header.js';
import home from './components/home.js';
import footer from './components/footer.js';
import menu from './components/menu.js';
import reservations from './components/reservations.js';
import contact from './components/contact.js';

header();
home();
footer();


//tab switching logic
const navBar = document.querySelector('nav');
const ul = navBar.querySelector('ul');
ul.querySelector('li#Home>a').classList.add('selected')
ul.addEventListener('click', (e) => {
    const previousLi = ul.querySelector('a.selected');
    if (previousLi && !(e.target.querySelector('li>a'))) {
        previousLi.classList.remove('selected');
    }
    e.target.classList.add('selected');
    if (e.target.innerHTML === 'Home') {
        document.querySelector('#content').innerHTML = '';
        home();
    } else if (e.target.innerHTML === 'Menu') {
        document.querySelector('#content').innerHTML = '';
        menu();
    } else if (e.target.innerHTML === 'Reservations') {
        document.querySelector('#content').innerHTML = '';
        reservations();
    } else if (e.target.innerHTML === 'Contact') {
        document.querySelector('#content').innerHTML = '';
        contact();
    }
});

//make a reservation btn link
document.querySelector('#content').addEventListener("click", (e) => {
    const previousLi = ul.querySelector('.selected');
    if (e.target.classList.contains('btn')) {
        document.querySelector('#content').innerHTML = '';
        if (previousLi) {
            previousLi.classList.remove('selected');
        }
        document.querySelector('li#Reservations>a').classList.add('selected');
        reservations();  
    }
});
