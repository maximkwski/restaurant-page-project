import Logo from '../assets/logo.png';

export default function header() {  
    //***HEADER***

    const headerDiv = document.getElementById('header');
    const navBar = document.createElement('nav');

    // Add the image to our existing div.
    const lingrLogo = new Image();
    lingrLogo.src = Logo;
    headerDiv.appendChild(lingrLogo);
    headerDiv.appendChild(navBar);
    const navUl = document.createElement('ul');
    navBar.appendChild(navUl); // navigation bar
    const listItems = ['Home', 'Menu', 'Reservations', 'Contact']; //array of list items
    for (let i = 0; i < listItems.length; i++) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.innerText = listItems[i];
        li.appendChild(link);
        navUl.appendChild(li);
    }
    
    return headerDiv;
}